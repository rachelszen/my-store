import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, ref, set, update } from 'firebase/database'
import { db } from "../components/firebase/firebase";

export const addQtd = createAsyncThunk(
    'products/addQtd',
    async ({id, qtd}) => {
        await set(ref(db, `products/${id}/qtd`), qtd)
        return {id, qtd}
    }
);

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const snapshot = await get(ref(db, 'products'))
        const products = [];
        snapshot.forEach((childSnapShot) => {
            products.push({
                id: childSnapShot.key,
                ...childSnapShot.val()
            })
        })
        return products;
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
        .addCase(addQtd.fulfilled, (state, action) => {
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        qtd: action.payload.qtd
                    }
                }
                else {
                    return product;
                }
            })
        })
    }
})

export const selectAllproducts = (state) => state.products;

export default productsSlice.reducer;