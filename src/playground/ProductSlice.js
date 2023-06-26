import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import {get, getDatabase, onValue, push, ref, remove, set, update} from 'firebase/database'
import { db } from "../components/firebase/firebase";
import { async } from "q";

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (product)=>{
        const addProductRef = await push(ref(db, 'products') ,{
            ...product
        });
        const newProduct = {id: addProductRef._path.pieces_[1], ...product}
        return newProduct;
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

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        await remove(ref(db, `products/${id}`))
        return id;
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
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
    },
    extraReducers: (builder) => {
        builder
        .addCase(addProduct.fulfilled,(state, action) => {
            state.push(action.payload)
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            action.payload.map((prod) => state.push(prod))
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            return state = state.filter(({ id }) => id !== action.payload)
        })
    }
})

export const selectAllproducts = (state) => state.products;
export const { editProduct } = productSlice.actions;

export default productSlice.reducer;