import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from './ProductSlice';

export const AddProductForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onNameChanged = e => setName(e.target.value)
    const onPriceChanged = e => setPrice(e.target.value)

    const onSaveProductClicked = () => {
        if (name && price) {
            dispatch(
                addProduct({name, price})
            )
            setName('')
            setPrice('')
        }
    }

    return (
        <section>
            <h2>Add a New Product</h2>
            <form>
                <label htmlFor='productName'>Product Name:</label>
                <input
                    type='text'
                    id='productName'
                    name='productName'
                    value={name}
                    onChange={onNameChanged}
                />
                <label htmlFor='price'>Product Price:</label>
                <input
                    id='productPrice'
                    name='productPrice'
                    value={price}
                    onChange={onPriceChanged}
                />
                <button onClick={onSaveProductClicked} type='button'>Save Product</button>
            </form>      
        </section>
    )
}
