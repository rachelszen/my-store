import React from "react";
import { Header } from "./Header/Header";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllproducts } from "../slice/ProductsSlice";
import { PageItems } from "./AllItems/PageItems";
import { HeaderLayout } from "./Header/HeaderLayout";
import { ItemDeatil } from "./Details/ItemDetail";

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
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