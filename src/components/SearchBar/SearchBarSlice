import { createSlice } from '@reduxjs/toolkit';

const SearchBarSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        changeActiveSearch: (state, action) => state = action.payload,
    }
});

export const { changeActiveSearch } = SearchBarSlice.actions;
export default SearchBarSlice.reducer;