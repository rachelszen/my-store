import { useDispatch, useSelector } from "react-redux";
import { selectAllproducts } from "../../slice/ProductsSlice";
import { useParams } from "react-router-dom";
import numeral from "numeral";
import { useState } from "react";

export const ItemDeatil = () => {
    const dispatch = useDispatch();
    const qtdArray = Array.from(Array(10).keys()).slice(1)
    const store = useSelector(selectAllproducts);
    const params = {id: window.location.pathname.split("/")[2]}
    const prod = store.find((product) => product.id === params.id);
    return (
        <div>
            <img src={prod.image} alt={prod.name} style={{width:80}}/>
            <h1>{prod.name}</h1>
            <p>{prod.description}</p>
            <p>{numeral(prod.price / 100).format('$0,0.00')}</p>
            <text>quantidade:</text>
            <select 
                value={prod.qtd} 
                onChange={(e) => {
                    console.log(e.target.value)
                }}
            >
                {qtdArray.map((qtdNumber) => <option value={qtdNumber}>{qtdNumber}</option>)}
            </select>
            <button onClick={() => console.log('a')}>Adicionar ao carrinho</button>
        </div>
    )
}