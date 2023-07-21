import { useDispatch, useSelector } from "react-redux";
import { addQtd, selectAllproducts } from "../../slice/ProductsSlice";
import { useNavigate, useParams } from "react-router-dom";
import numeral from "numeral";
import { useState } from "react";
import { TWISTModal } from "../util/TWISTModal";

export const ItemDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const qtdArray = Array.from(Array(10).keys()).slice(1)
    const store = useSelector(selectAllproducts);
    const params = useParams()
    const prod = store.find((product) => product.id === params.id);
    const [qtd, setQtd] = useState(parseInt(prod.qtd) || 1)
    const [showModal, setShowModal] = useState(false)

    const handleClickCarrinho = async () => {
        dispatch(addQtd({ id: prod.id, qtd }));
        setShowModal(true);
        setTimeout(() => [setShowModal(false), navigate('/')], 1000)
    }

    const handleClickComprar = async () => {
        dispatch(addQtd({ id: prod.id, qtd }));
        navigate('/carrinho')
    }

    return (
        <div className="item-detail">
            <img className="item-detail__img" src={prod.image} alt={prod.name} style={{width:180}}/>
            <div className="item-detail__description">
                <h1>{prod.name}</h1>
                <p>{prod.description}</p>
            </div>
            <div className="item-detail__buy">
                <h1>R{numeral(prod.price / 100).format('$0,0.00')}</h1>
                <div>
                    <p>quantidade:</p>
                    <select 
                        value={qtd} 
                        onChange={(e) => {
                            setQtd(e.target.value)
                        }}
                    >
                        {qtdArray.map((qtdNumber, index) => <option key={index} value={qtdNumber}>{qtdNumber}</option>)}
                    </select>
                </div>
                <button className="button-carrinho" onClick={() => handleClickCarrinho()}>Adicionar ao carrinho</button>
                <button className="button-comprar" onClick={() => handleClickComprar()}>Comprar</button>
            </div>

            <TWISTModal 
                showModal={showModal}
                prod={prod}
            >
                <h3 className='modal__title'>Adicionado ao carrinho</h3>
                <p className='modal__body'>{prod.qtd} {prod.name} adicionado ao carrinho!</p>
            </TWISTModal>

        </div>
    )
}