import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeActiveSearch } from './SearchBarSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const searchBarValue = useSelector(state => state.search);
    const activeSubSliced = useSelector(state => state.subreddits.activeSubreddit).slice(3, -1);

    const handleChange = (e) => {
        dispatch(changeActiveSearch(e.target.value));
    }



    return (
        <div id='searchbar'>
            <input className="searchBar"
                id="Search"
                value={searchBarValue}
                placeholder={"Search posts in " + activeSubSliced}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar;