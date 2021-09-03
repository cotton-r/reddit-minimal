import { configureStore } from '@reduxjs/toolkit';

import SearchBarSlice from '../components/SearchBar/SearchBarSlice';
import SubredditsSlice from '../components/Subreddits/SubredditsSlice';
import PostsContainerSlice from '../components/PostsContainer/PostsContainerSlice';

export default configureStore({
    reducer: {
        search: SearchBarSlice,
        subreddits: SubredditsSlice,
        posts: PostsContainerSlice,
    }
});