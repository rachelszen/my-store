import { configureStore, nanoid } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import filtersReducer from "./FiltersSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        filters: filtersReducer
    }
})