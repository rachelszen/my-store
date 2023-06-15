import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    sortBy: 'price',
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        sortByPrice: (state) => {state.sortBy = 'price'},
        sortByAlphabetical: (state) => {state.sortBy = 'alphabetical'},
        setTextFilter: (state, action) => {state.text = action.payload},
    }
})

export const { sortByPrice, sortByAlphabetical, setTextFilter } = filtersSlice.actions;

export default filtersSlice.reducer;