import { createSlice } from '@reduxjs/toolkit';

const PostsContainerSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        changePosts: (state, action) => state = action.payload,
    }
});

export default PostsContainerSlice.reducer;
export const { changePosts } = PostsContainerSlice.actions;