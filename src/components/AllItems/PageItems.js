import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShopList } from "./ShopList";
import { visibleProducts } from "../../features/visibleProducts";
import { setFilterCategory } from "../../features/filterCategory";
import { sortByAlphabetical, sortByPrice } from "../../slice/FiltersSlice";


export const PageItems = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products);
    const filters = useSelector((state) => state.filters);
    const {category} = useParams();
    setFilterCategory(dispatch, category);

    const productsVisible = visibleProducts(products, filters);
    return (
        <div>
        <select 
                value={filters.sortBy} 
                onChange={(e) => {
                    if (e.target.value === 'price'){
                        dispatch(sortByPrice())
                    } else if (e.target.value === 'alphabetical'){
                        dispatch(sortByAlphabetical())
                    }
                }}
            >
                <option value="price">Price</option>
                <option value="alphabetical">A-Z</option>
            </select>
            {
                productsVisible.map((prod, index) => <ShopList key={index} prod={prod}/>)
            }
        </div>
    )
}