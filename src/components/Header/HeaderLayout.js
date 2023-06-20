import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectAllproducts } from "../../slice/ProductsSlice";
import { setFilterCategory } from "../../features/filterCategory";

const Navbar = () => {
    const dispatch = useDispatch()
    const store = useSelector(selectAllproducts);

    return (
      <div>
        <NavLink to='/' onClick={() => setFilterCategory(dispatch, '')} style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>todos</NavLink>
        {store.map((page) => (
            <NavLink onClick={() => setFilterCategory(dispatch, page.category)} key={page.category} to={page.category} style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>{page.category}</NavLink>
        ))}
      </div>
    );
};

export const HeaderLayout = () => (
    <div>
        <Navbar />
        <Outlet />
    </div>
);