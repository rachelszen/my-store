import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, ref } from 'firebase/database'
import { db } from "../components/firebase/firebase";

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
            action.payload.map((prod) => state.push(prod))
        })
    }
})

export const selectAllproducts = (state) => state.products;

export default productsSlice.reducer;