import React from 'react';
import './Post.css';

const Post = (props) => {

    return (
        <div className="Post">
            <p className="PostUser">{props.author}</p>
            <p className="PostDate">{props.postCreated}</p>
            <h2>{props.title}</h2>
            <p className="PostMessage">{props.text}</p>
            <img src={props.imgSrc} alt={""} onError={(e) => e.target.style.display = "none"} />
        </div>
    )
}

export default Post;