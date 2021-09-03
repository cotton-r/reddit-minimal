import './App.css';
import './normalize.css';

import React, { useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import PostsContainer from './components/PostsContainer/PostsContainer';
import Subreddits from './components/Subreddits/Subreddits';

import redditlogo from './redditlogo.png';

import { useDispatch, useSelector } from 'react-redux';
import { getSubredditPosts } from './app/Reddit';
import { changePosts } from './components/PostsContainer/PostsContainerSlice';



function App() {

  const activeSub = useSelector(state => state.subreddits.activeSubreddit);
  const dispatch = useDispatch();

  useEffect(() => getSubredditPosts(activeSub)
  .then(response => {
    dispatch(changePosts(response));
  }), [activeSub]);

  return (
    <div className="App">

      <header className="header">
        <h1 className="mainHeader">Reddit Minimal</h1>
        <SearchBar className="searchBar"/>
      </header>

      <Subreddits logo={redditlogo} />
      <PostsContainer />

    </div>
  )
}

export default App;
