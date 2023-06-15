import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTextFilter } from "../../slice/FiltersSlice";

export const Header = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>TWIST</h1>
            <input type='text' value={filters.text} onChange={(e) => dispatch(setTextFilter(e.target.value))}/>
            <button>login</button>
            <button>carrinho</button>
        </div>
    )
}