import { useSelector } from "react-redux";
import { selectAllproducts } from "../../slice/ProductsSlice";
import { useParams } from "react-router-dom";

export const ItemDeatil = () => {
    const store = useSelector(selectAllproducts);
    const params = useParams();
    const search = store.find(({ category }) => category === params.category);
    return (
        <div>
            <h1>{params.name}</h1>
        </div>
    )
}