import React from 'react';

import './PostsContainer.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from '../Post/Post';
import { SubredditsDropdown } from '../SubredditsDropdown/SubredditsDropdown';

const PostsContainer = () => {

    const postsArray = useSelector(state => state.posts)
    const dispatch = useDispatch();
    console.log(postsArray);

    return (
        <div className="PostsContainer">
            <SubredditsDropdown />
            {postsArray.map(post => (
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
                />
            ))}
        </div>
    )
}

export default PostsContainer;