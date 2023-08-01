import numeral from "numeral";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TWISTModal } from "../util/TWISTModal";
import { addAdress, deleteAdress, editAdress } from "../../slice/AdressSlice";
import { AdressForm } from "../util/AdressForm";
import { removeCarrinho } from "../../slice/ProductsSlice";

const RadioButton = (props) => {
    return (
        <label>
            <input
                onChange={props.onChange}
                type="radio"
                checked={props.value}
            />
            {props.label}
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
        <div className="carrinho">
            <h1>Carrinho</h1>

            <div className="carrinho-detalhes">
                <div className="carrinho-address">
                    <h3>Endereço</h3>

                    {adresses.map((adress, index) => 
                        <div className="address" key={index}>
                            <RadioButton
                                key={adress.id}
                                onChange={() => setIndexSelected(index)}
                                value={index === indexSelected}
                                label={adress.rua + ' ' + adress.numero + ', ' + adress.bairro + ', ' + adress.cidade + ', ' + adress.estado}
                            />
                            <img className="carrinho-action" src="./images/edit-icon.png" onClick={() => [setShowModal(true), setAdressEdit(adress)]}/>
                            <img className="carrinho-action" src="./images/no-icon.png" onClick={() => dispatch(deleteAdress(adress.id))}/>
                        </div>
                    )}

                    <button onClick={() => setShowModal(true)}>adicionar novo endereço</button>
                </div>

                <div className="carrinho-resumo">
                    <h3>Resumo do pedido</h3>
                    {products.map((product, index) => 
                        <div key={index}>
                            {product.qtd > 0 && (
                                preco += (product.price * product.qtd),
                                <div className="carrinho-items">
                                    <p className="carrinho-resumo__pedido">{product.qtd}</p>
                                    <p className="carrinho-resumo__pedido">{product.name}</p>
                                    <img className="carrinho-action" src="./images/no-icon.png" onClick={() => dispatch(removeCarrinho(product.id))}/>
                                </div>
                            )}
                        </div>
                    )}
                    <h3>Total: R{numeral(preco / 100).format('$0,0.00')}</h3>
                </div>
            </div>

            <TWISTModal
                showModal={showModal}
            >
                <div>
                    <AdressForm
                        onSubmit={() => [setShowModal(false), setAdressEdit(null)]}
                        onSave={(adress) => {
                            adressEdit 
                            ? dispatch(editAdress({id: adressEdit.id, adress}))
                            : dispatch(addAdress(adress))
                        }}
                        adress={adressEdit}
                    />
                </div>
            </TWISTModal>
            
        </div>
    )
}