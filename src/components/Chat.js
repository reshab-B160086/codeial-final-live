import React, { Component } from 'react';
import '../chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typedMessage: '',
    };
  }
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

export default Chat;
