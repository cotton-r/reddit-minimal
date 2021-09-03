import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './SearchBar.css';

import { changeActiveSearch } from './SearchBarSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const searchBarValue = useSelector(state => state.search);

    const searchTerm = '';
    const handleChange = (e) => {
        searchTerm = e.target.value;
    }

    const handleSearch = () => {
        dispatch(changeActiveSearch(searchTerm));
        searchTerm = '';
    }


    return (
        <div id='searchbar'>
            <form className="searchForm" onSubmit={handleSearch}>
                <input 
                    type="search" 
                    id="search_reddit"
                    value={searchBarValue}
                    name="search_reddit" 
                    placeholder="Search Reddit" 
                    onChange={handleChange} 
                    required>
                </input>
                <button type="submit">Go</button>
            </form>
        </div>
    )
}

export default SearchBar;