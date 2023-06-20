import numeral from "numeral";
import { Link } from "react-router-dom";

export const ShopList = ({prod}) => {
    return (
        <Link key={prod.name} to={`/${prod.category}/${prod.name}`}>
            <h3>{prod.name}</h3>
            <img src={prod.image} alt={prod.name} style={{width:80}}/>
            <p>{prod.description}</p>
            <p>{numeral(prod.price / 100).format('$0,0.00')}</p>
        </Link>
    )
}