import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slice/ProductsSlice";
import filtersReducer from "../slice/FiltersSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        filters: filtersReducer
    }
})