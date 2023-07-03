import numeral from "numeral";
import { useState } from "react";
import { useSelector } from "react-redux";

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
    const products = useSelector((state) => state.products);
    let preco = 0

    return (
        <div>
            <h1>carrinho</h1>
            <h3>Endereço</h3>

            {products.map((product) => 
                <RadioButton
                    key={product.id}
                    onChange={() => console.log('a')}
                    value={true}
                    label={product.name}
                />
            )}

            <RadioButton
                onChange={() => console.log('a')}
                id="1"
                isSelected={true}
                label="QuickPay"
                value="QuickPay"
            />
            
            <h3>Resumo do pedido</h3>
            {products.map((product) => 
                product.qtd > 0 && (
                    preco += (product.price * product.qtd),
                    <div key={product.id}>
                        <text>{product.qtd} </text>
                        <text>{product.name}</text>
                        <button>remover</button>
                    </div>
                )
            )}
            <p>Total: {numeral(preco / 100).format('$0,0.00')}</p>
        </div>
    )
}