import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { HeaderLayout } from "./Header/HeaderLayout";
import { ItemDetail } from "./Details/ItemDetail";
import { PageItems } from "./items/PageItems";
import { Header } from "./Header/Header";
import { Carrinho } from "./Details/Carrinho";
import { store } from "../store/store";

const router = createHashRouter([
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
            <RouterProvider router={router}/>
        </div>
    )
}