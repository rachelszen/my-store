import React from "react";
import { Header } from "./header/Header";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllproducts } from "../slice/ProductsSlice";
import { HeaderLayout } from "./header/HeaderLayout";
import { ItemDeatil } from "./details/ItemDetail";
import { PageItems } from "./items/PageItems";

const router = createBrowserRouter([
    {
        element: 
        <div>
            <HeaderLayout />
        </div>,
        children: [
            {path: '/', element: <PageItems/>},
            {path: '/:category', element: <PageItems/>},
            {path: '/:category/:name', element: <ItemDeatil/>},
        ]

    }
])

export const App = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}