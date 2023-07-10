import numeral from "numeral";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TWISTModal } from "../util/TWISTModal";
import { addAdress, deleteAdress, editAdress } from "../../slice/AdressSlice";
import { AdressForm } from "../util/AdressForm";
import { removeCarrinho } from "../../slice/ProductsSlice";

const RadioButton = (props) => {
    const { onChange, label, value } = props;
    return (
        <label>
            <input
                onChange={onChange}
                type="radio"
                checked={value}
            />
            {label}
        </label>
    );
  };
  

export const Carrinho = () => {
    const [indexSelected, setIndexSelected] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [adressEdit, setAdressEdit] = useState(null)

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products);
    const adresses = useSelector((state) => state.adresses);
    let preco = 0

    return (
        <div>
            <h1>Carrinho</h1>
            <h3>Endereço</h3>

            {adresses.map((adress, index) => 
                <div>
                    <RadioButton
                        key={adress.id}
                        onChange={() => setIndexSelected(index)}
                        value={index === indexSelected}
                        label={adress.rua + ' ' + adress.numero + ', ' + adress.bairro + ', ' + adress.cidade + ', ' + adress.estado}
                    />
                    <button onClick={() => [setShowModal(true), setAdressEdit(adress)]}>editar</button>
                    <button onClick={() => dispatch(deleteAdress(adress.id))}>excluir</button>
                </div>
            )}

            <button onClick={() => setShowModal(true)}>adicionar novo endereço</button>

            <TWISTModal
                showModal={showModal}
            >
                <div>
                    <AdressForm
                        onSubmit={(adress) => {
                            adressEdit ? dispatch(editAdress({id: adressEdit.id, adress})): dispatch(addAdress(adress))
                            setShowModal(false)
                            setAdressEdit(null)
                        }}
                        adress={adressEdit}
                    />
                    <button onClick={() => [setShowModal(false), setAdressEdit(null)]}>cancelar</button>
                </div>
            </TWISTModal>
            
            <h3>Resumo do pedido</h3>
            {products.map((product) => 
                product.qtd > 0 && (
                    preco += (product.price * product.qtd),
                    <div key={product.id}>
                        <text>{product.qtd} </text>
                        <text>{product.name}</text>
                        <button onClick={() => dispatch(removeCarrinho(product.id))}>remover</button>
                    </div>
                )
            )}
            <p>Total: {numeral(preco / 100).format('$0,0.00')}</p>
        </div>
    )
}