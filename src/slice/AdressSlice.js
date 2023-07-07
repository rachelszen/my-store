import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, push, ref, remove, set, update } from 'firebase/database'
import { db } from "../components/firebase/firebase";

export const fetchAdresses = createAsyncThunk(
    'adresses/fetchAdresses',
    async () => {
        const snapshot = await get(ref(db, 'adresses'))
        const adresses = [];
        snapshot.forEach((childSnapShot) => {
            adresses.push({
                id: childSnapShot.key,
                ...childSnapShot.val()
            })
        })
        return adresses;
    }
);


export const addAdress = createAsyncThunk(
    'adresses/addAdress',
    async (adress)=>{
        const addAdressRef = await push(ref(db, 'adresses') ,{
            ...adress
        });
        const newAdress = {id: addAdressRef._path.pieces_[1], ...adress}
        return newAdress;
    }
);

export const editAdress = createAsyncThunk(
    'adresses/editAdress',
    async ({id, adress}) => {
        await update(ref(db, `adresses/${id}`), {
            ...adress
        })
        return {id, adress}
    }
)

export const deleteAdress = createAsyncThunk(
    'adresses/deleteAdress',
    async (id) => {
        await remove(ref(db, `adresses/${id}`))
        return id
    }
)

export const adressesSlice = createSlice({
    name: 'adresses',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAdresses.fulfilled, (state, action) => {
            return action.payload
        })
        .addCase(addAdress.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        .addCase(editAdress.fulfilled, (state, action) => {
            return state.map((adress) => {
                if (adress.id === action.payload.id){
                    return {
                        ...action.payload.adress
                    }
                }
                else{
                    return adress
                }
            })
        })
        .addCase(deleteAdress.fulfilled, (state, action) => {
            return state.filter(({ id }) => id !== action.payload)
        })
    }
})

export default adressesSlice.reducer;