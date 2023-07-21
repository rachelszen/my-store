import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectAllproducts } from "../../slice/ProductsSlice";
import { setFilterCategory } from "../../features/filterCategory";

const Navbar = () => {
    const dispatch = useDispatch()
    const store = useSelector((state) => state.filters);

    return (
      <div className="navbar">
        <NavLink to='/' onClick={() => setFilterCategory(dispatch, '')} className={({ isActive }) => isActive ? "navbar__item-clicked" : "navbar__item"}>todos</NavLink>
        {store.allCategorys.map((category) => (
            <NavLink onClick={() => setFilterCategory(dispatch, category)} key={category} to={category} className={({ isActive }) => isActive ? "navbar__item-clicked" : "navbar__item"}>{category}</NavLink>
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