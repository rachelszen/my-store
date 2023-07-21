import numeral from "numeral";
import { Link } from "react-router-dom";

export const ShopList = ({prod}) => {
    return (
        <Link className="shop-list" key={prod.name} to={`/${prod.category}/${prod.id}`}>
            <img className="shop-list__img" src={prod.image} alt={prod.name}/>
            <h3 className="shop-list__name">{prod.name}</h3>
            <p className="shop-list__price">R{numeral(prod.price / 100).format('$0,0.00')}</p>
        </Link>
    )
}