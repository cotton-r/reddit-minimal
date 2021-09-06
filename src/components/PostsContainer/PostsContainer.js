import React from 'react';

import './PostsContainer.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from '../Post/Post';
import { SubredditsDropdown } from '../SubredditsDropdown/SubredditsDropdown';

const PostsContainer = () => {

    const activeSearchInput = useSelector(state => state.search);
    const postsArray = useSelector(state => state.posts);

    const dispatch = useDispatch();

    const filteredPosts = postsArray.filter(post => post.title.toLowerCase().includes(activeSearchInput.toLowerCase()));

    return (
        <div className="PostsContainer">
            <SubredditsDropdown />
            {filteredPosts.map(post => (
                <Post 
                    title={post.title}
                    text={post.selftext}
                    imgSrc={post.url}
                    author={post.author}
                    postCreated={post.created_utc}
                    postComments={post.num_comments}
                    subreddit={post.subreddit}
                    PostName={post.name}
                    PostId={post.id}
                    PostPermalink={post.permalink}
                    media={post.media}
                    domain={post.domain}
                    url={post.url}
                />
            ))}
        </div>
    )
}

export default PostsContainer;