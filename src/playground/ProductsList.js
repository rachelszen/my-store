import { useSelector } from "react-redux";
import {ProductFilters} from "./ProductFilters";
import { getVisibleProducts } from "./ProductsVisible";

export const ProductsList = () => {
    const products = useSelector((state) => state.products);
    const filters = useSelector((state) => state.filters);
    const visibleProducts = getVisibleProducts(products, filters);

    const renderedProducts = visibleProducts.map((product) => (
        <article key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
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