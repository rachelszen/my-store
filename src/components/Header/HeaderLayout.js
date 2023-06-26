import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectAllproducts } from "../../slice/ProductsSlice";
import { setFilterCategory } from "../../features/filterCategory";

const Navbar = () => {
    const dispatch = useDispatch()
    const store = useSelector((state) => state.filters);

    return (
      <div>
        <NavLink to='/' onClick={() => setFilterCategory(dispatch, '')} style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>todos</NavLink>
        {store.allCategorys.map((category) => (
            <NavLink onClick={() => setFilterCategory(dispatch, category)} key={category} to={category} style={({ isActive }) => isActive ? {fontWeight: "bold"} : undefined}>{category}</NavLink>
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