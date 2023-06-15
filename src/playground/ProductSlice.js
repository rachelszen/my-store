import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Havaiana',
        price: 3490
    },
    {
        id: '2',
        name: 'ABicicleta De Equilíbrio 4 Rodas',
        price: 21060
    },
    {
        id: '3',
        name: 'Trampolim',
        price: 60
    }
]

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, price) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        price
                    }
                }
            }
        },
        removeProduct: (state, action) => 
            state.filter(({ id }) => id === action.payload),
        editProduct: (state, { payload }) => 
            state.map((product) => {
                if (product.id === payload.id) {
                    console.log('achou: ', product.name);
                    return {
                        ...product,
                        ...payload.updates
                    }
                } else {
                    console.log(product.name);
                    return product;
                }
            })
    }
})

export const selectAllproducts = (state) => state.products;
export const { addProduct, removeProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;