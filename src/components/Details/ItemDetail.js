import { useDispatch, useSelector } from "react-redux";
import { addQtd, selectAllproducts } from "../../slice/ProductsSlice";
import { useNavigate, useParams } from "react-router-dom";
import numeral from "numeral";
import { useState } from "react";
// import Modal from 'react-modal'

// const OptionModal = (props) => (
//     <Modal
//       isOpen={props.showModal}
//       onRequestClose={props.handleModal}
//       contentLabel="Selected Option"
//     >
//       <h3 className='modal__title'>Adicionado ao carrinho</h3>
//       <p className='modal__body'>{props.prod.qtd} {props.prod.name} adicionado ao carrinho!</p>
//     </Modal>
//   );

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
        <div>
            <img src={prod.image} alt={prod.name} style={{width:180}}/>
            <h1>{prod.name}</h1>
            <p>{prod.description}</p>
            <p>{numeral(prod.price / 100).format('$0,0.00')}</p>
            <text>quantidade:</text>
            <select 
                value={qtd} 
                onChange={(e) => {
                    setQtd(e.target.value)
                }}
            >
                {qtdArray.map((qtdNumber) => <option value={qtdNumber}>{qtdNumber}</option>)}
            </select>
            <button onClick={() => handleClickCarrinho()}>Adicionar ao carrinho</button>
            <button onClick={() => handleClickComprar()}>Comprar</button>
            {
            //     <OptionModal 
            //     showModal={showModal}
            //     prod={prod}
            // />
            }
        </div>
    )
}