import React from 'react';
import '../Subreddits/Subreddits.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSubreddits } from '../../app/Reddit';
import { addSubreddit, changeActiveSubreddit } from './SubredditsSlice';

const Subreddits = (props) => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const subReddits = useSelector(state => state.subreddits.subReddits);
    const dispatch = useDispatch();

    useEffect(() => getSubreddits().then(json => {
        json.forEach(item => dispatch(
            addSubreddit({
                name: item.display_name,
                url: item.url,
                id: item.id,
                icon: item.community_icon.split("?")[0],
            })
        ));
    }), [dispatch]);

    return (
        <section className="subreddits">
            <ul>
                {subReddits.map(item => (

                        <li 
                            onClick={() => dispatch(changeActiveSubreddit(item.url))}
                            className={activeSub === item.url ? "activeSubreddit" : undefined}
                        >
                            <img src={item.icon} alt={""} onError={(e) => e.target.src = props.logo} />
                            {item.name}
                        </li>

                ))}
            </ul>
        </section>
    );
}

export default Subreddits;