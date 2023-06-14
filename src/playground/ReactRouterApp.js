import React from "react";
import { Link, NavLink, createBrowserRouter, RouterProvider, Outlet, useParams } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <h1>TWIST</h1>
        <NavLink to='/' style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>Page One</NavLink>
        <NavLink to='/other' style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>Page Two</NavLink>
      </div>
    );
};

const HeaderLayout = () => (
    <div>
        <Navbar />
        <Outlet />
    </div>
);

const PageOne = () => {
    return (
        <div>
            This is page one
        </div>
    )
}
    

const PageEdit = () => {
    const params = useParams();

    return (
        <div>
            <p>This page is for the item with the id of {params.id}</p>
        </div>
    )
}

const PageOther = () => {
    return (
        <div>
            This is page two
        </div>
    )
}

const PageError = () => {
    return (
        <div>
            This page doesnt exist - <Link to="/">Go home</Link>
        </div>
    )
}

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        errorElement: <PageError />,
        children: [
            {path: '/', element: <PageOne/>},
            {path: '/edit/:id', element: <PageEdit/>},
            {path: '/other', element: <PageOther/>}
        ]

    }
])

export const ReactRouterApp = () => {
    return (
        <RouterProvider router={router}/>
    )
}