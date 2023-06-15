import { showAll, showCategoryCelulares, showCategoryMoveis, showCategoryNecessarios } from "../slice/FiltersSlice"

export const setFilterCategory = (dispatch, category) => {
    switch (category){
        case ('todos'):
        return dispatch(showAll())
        case ('necessarios'):
        return dispatch(showCategoryNecessarios())
        case ('celular'):
        return dispatch(showCategoryCelulares())
        case ('moveis'):
        return dispatch(showCategoryMoveis())
        default:
        return dispatch(showAll())
    }
}