import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    sortBy: 'price',
    showCategory: '',
    allCategorys: ['necessarios', 'celular', 'moveis']
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        sortByPrice: (state) => {state.sortBy = 'price'},
        sortByAlphabetical: (state) => {state.sortBy = 'alphabetical'},
        setTextFilter: (state, action) => {state.text = action.payload},
        showAll: (state) => {state.showCategory = ''},
        showCategoryNecessarios: (state) => {state.showCategory = 'necessarios'},
        showCategoryCelulares: (state) => {state.showCategory = 'celular'},
        showCategoryMoveis: (state) => {state.showCategory = 'moveis'},
    }
})

export const { sortByPrice, sortByAlphabetical, setTextFilter, showAll, showCategoryNecessarios, showCategoryCelulares, showCategoryMoveis } = filtersSlice.actions;

export default filtersSlice.reducer;