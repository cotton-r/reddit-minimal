import React from 'react';
import './Post.css';
import ReactPlayer from 'react-player';

import { PostFooter } from '../PostFooter/PostFooter';

const Post = (props) => {

    const dateCalculator = (created) => {
        const currentDate = Date.now();
        const postDate = new Date(created * 1000);
    
        const dateDifferenceInTime = currentDate - postDate;
    
        const dateDifferenceInMonths = dateDifferenceInTime / (1000 * 3600 * 24 * 30.4);
        const dateDifferenceInDays = dateDifferenceInTime / (1000 * 3600 * 24);
        const dateDifferenceInHours = dateDifferenceInTime / (1000 * 3600);
        const dateDifferenceInMinutes = dateDifferenceInTime / (1000 * 60);
    
        if (dateDifferenceInMonths > 12) {
            return "more than a year ago";
        } else if (dateDifferenceInMonths >= 1) {
            return Math.round(dateDifferenceInMonths) + " months ago";
        } else if (dateDifferenceInDays >= 1) {
            return Math.round(dateDifferenceInDays) + " days ago";
        } else if (dateDifferenceInHours >= 1) {
            return Math.round(dateDifferenceInHours) + " hours ago";
        } else if (dateDifferenceInMinutes >= 1) {
            return Math.round(dateDifferenceInMinutes) + " minutes ago";
        } else {
            return "less than a minute ago";
        }
    }

    let video = '';

    if (props.media) {
        if (props.media.reddit_video) {
            video = <video controls width="100%"><source src={props.media.reddit_video.fallback_url} /></video>
        } else if (props.domain.match(/yout/)) {
            video = <ReactPlayer url={props.url} controls width="100%" />
        } else if (props.domain.match(/vimeo/)) {
            video = <ReactPlayer url={props.url} controls width="100%" />
        }
    }

    return (
        <div className="Post">
            <p className="PostUser">
                <strong>r/{props.subreddit}</strong> - posted by u/{props.author} - {dateCalculator(props.postCreated)}
            </p>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <img src={props.imgSrc} alt={""} onError={(e) => e.target.style.display = "none"} />
            <PostFooter postId={props.PostId}
                postAuthor={props.author}
                postCreated={props.postCreated}
                postPermalink={props.PostPermalink}
                postComments={props.postComments}
                visible={false}
            />
        </div>
    )
}

export default Post;