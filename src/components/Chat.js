import React, { Component } from 'react';
import { io } from 'socket.io-client';
import { connect } from 'react-redux';
import '../chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typedMessage: '',
    };
    this.socket = io.connect('http://54.237.158.65:5000');
    this.userEmail = props.user.email;

    if (this.userEmail) {
      this.setUpConnection();
    }
  }
  setUpConnection = () => {
    const socketConnection = this.socket;
    const self = this;

    this.socket.on('connect', function () {
      console.log('CONNECTION ESTABLISHED');
      socketConnection.emit('join_room', {
        user_email: this.userEmail,
        chatroom: 'codeial',
      });
      socketConnection.on('user_joined', function (data) {
        console.log('NEW USER JOINED', data);
      });
    });

    socketConnection.on('receive_message', function (data) {
      const { messages } = self.state;
      const messageObj = {};
      messageObj.content = data.message;
      if (data.user_email === self.userEmail) {
        messageObj.self = true;
      }
      self.setState({
        messages: [...messages, messageObj],
        typedMessage: '',
      });
    });
  };

  handleSubmit = () => {
    const { typedMessage } = this.state;

    if (typedMessage && this.userEmail) {
      this.socket.emit('send_message', {
        message: typedMessage,
        user_email: this.userEmail,
        chatroom: 'codeial',
      });
    }
  };
  render() {
    const { typedMessage, messages } = this.state;
    return (
      <div>
        <div className="chat-container">
          <div className="chat-header">
            Chat
            <img
              src="https://cdn-icons.flaticon.com/png/512/4436/premium/4436695.png?token=exp=1647158713~hmac=e44ab2db4ef5059b3e9364ab74e1b307"
              alt="minimize"
              height={17}
            />
          </div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                className={
                  message.self
                    ? 'chat-bubble self-chat'
                    : 'chat-bubble other-chat'
                }
              >
                {message.content}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={typedMessage}
              onChange={(e) => this.setState({ typedMessage: e.target.value })}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(Chat);
