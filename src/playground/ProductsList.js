import { useDispatch, useSelector } from "react-redux";
import {ProductFilters} from "./ProductFilters";
import { getVisibleProducts } from "./ProductsVisible";
import { deleteProduct } from "./ProductSlice";

export const ProductsList = () => {
    const dispatch = useDispatch()
    
    const products = useSelector((state) => state.products);
    const filters = useSelector((state) => state.filters);
    const visibleProducts = getVisibleProducts(products, filters);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    const renderedProducts = visibleProducts.map((product) => (
        <article key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleDelete(product.id)}>excluir</button>
        </article>
    ))

    return (
        <section>
            <h2>Products</h2>
            <ProductFilters/>
            {renderedProducts}
        </section>
    )
}