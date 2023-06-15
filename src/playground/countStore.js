import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => { //elas fazerem
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            const incrementBy = action.payload === 'number' ? action.payload : 1;
            state.count += incrementBy;
        }
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export const countStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    }
})