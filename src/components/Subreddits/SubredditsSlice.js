import { createSlice } from '@reduxjs/toolkit';

const SubredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subReddits: [],
        activeSubreddit: "/r/Home/"
    },
    reducers: {
        addSubreddit: (state, action) => {
            state.subReddits.push(action.payload);
        },
        changeActiveSubreddit: (state, action) => {
            state.activeSubreddit = action.payload;
        }
    }
});

export const { addSubreddit, changeActiveSubreddit } = SubredditsSlice.actions;
export default SubredditsSlice.reducer;