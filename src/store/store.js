import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slice/ProductsSlice";
import filtersReducer from "../slice/FiltersSlice";
import adressesReducer from "../slice/AdressSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        filters: filtersReducer,
        adresses: adressesReducer
    }
})