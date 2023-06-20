import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { HeaderLayout } from "./header/HeaderLayout";
import { ItemDeatil } from "./details/ItemDetail";
import { PageItems } from "./items/PageItems";
import { Header } from "./header/Header";

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
            <Header/>
            <RouterProvider router={router}/>
        </div>
    )
}