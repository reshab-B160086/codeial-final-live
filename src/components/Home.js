import React, { Component } from 'react';
import { PostList } from '.';
import FriendList from './FriendList';

class Home extends Component {
  render() {
    const { posts, friends, isLoggedIn } = this.props;
    return (
      <div className="home">
        <PostList posts={posts} />
        {isLoggedIn && <FriendList friends={friends} />}
      </div>
    );
  }
}

export default Home;
