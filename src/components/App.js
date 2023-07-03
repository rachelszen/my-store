import React from "react";
import { createBrowserRouter, RouterProvider, HashRouter } from "react-router-dom";
import { HeaderLayout } from "./header/HeaderLayout";
import { ItemDetail } from "./details/ItemDetail";
import { PageItems } from "./items/PageItems";
import { Header } from "./header/Header";
import { Carrinho } from "./details/Carrinho";
import { store } from "../store/store";

const router = createBrowserRouter([
    {
        element: 
        <div>
            <Header/>
            <HeaderLayout />
        </div>,
        children: [
            {path: '/', element: <PageItems/>},
            {path: '/:category', element: <PageItems/>},
            {path: '/:category/:id', element: <ItemDetail/>},
            {path: '/carrinho', element: <Carrinho/>},
        ]

    }
])

export const App = () => {
    return (
        <div>
            {console.log(store.getState)}
            <RouterProvider router={router}/>
        </div>
    )
}