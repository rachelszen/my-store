import React from 'react'
import { useDispatch, connect, useSelector } from 'react-redux'
import { setTextFilter, sortByAlphabetical, sortByPrice } from './FiltersSlice';

export const ProductFilters = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch()

    return (
        <div>
            <input type='text' value={filters.text} onChange={(e) => dispatch(setTextFilter(e.target.value))}/>
            <select 
                value={filters.sortBy} 
                onChange={(e) => {
                    if (e.target.value === 'price'){
                        dispatch(sortByPrice())
                    } else if (e.target.value === 'alphabetical'){
                        dispatch(sortByAlphabetical())
                    }
                }}
            >
                <option value="price">Price</option>
                <option value="alphabetical">A-Z</option>
            </select>
        </div>
    )
}
