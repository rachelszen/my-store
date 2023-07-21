import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTextFilter } from "../../slice/FiltersSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Header = () => {
    const filters = useSelector((state) => state.filters);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="header">
            <h1>TWIST</h1>
            <input className="header__search" type='text' value={filters.text} onChange={(e) => dispatch(setTextFilter(e.target.value))} placeholder="busque aqui seu produto"/>
            <img className="header__cart" src="./images/carrinho.png" onClick={() => navigate('/carrinho')}/>
        </div>
    )
}