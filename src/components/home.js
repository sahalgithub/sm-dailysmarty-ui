import React, { Component } from 'react';
import RecentPosts from './recentPosts';
import Logo from './logo';
import SearchBar from './searchBar';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
