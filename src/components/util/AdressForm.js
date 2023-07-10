import { useState } from "react";

export const AdressForm = (props) => {
    const [rua, setRua] = useState(props.adress ? props.adress.rua :'');
    const [numero, setNumero] = useState(props.adress ? props.adress.numero : '');
    const [bairro, setBairro] = useState(props.adress ? props.adress.bairro : '');
    const [cidade, setCidade] = useState(props.adress ? props.adress.cidade : '');
    const [estado, setEstado] = useState(props.adress ? props.adress.estado : '');
    const [error, setError] = useState(false);

    const onRuaChange = (e) => {
        const rua = e.target.value;
        setRua(rua);
    };

    const onNumeroChange = (e) => {
        const num = e.target.value;
        if (Number(num)){
            setNumero(num);
        }
    };

    const onBairroChange = (e) => {
        const bairro = e.target.value;
        setBairro(bairro);
    };

    const onCidadeChange = (e) => {
        const cidade = e.target.value;
        setCidade(cidade);
    };

    const onEstadoChange = (e) => {
        const estado = e.target.value;
        if (estado.length <= 2){
            setEstado(estado);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!rua || !numero || !bairro || !cidade || !estado) {
            setError('Por favor, preencha todos os campos');
        } else {
            setError(false);
            props.onSubmit({rua, numero, bairro, cidade, estado});
        }
    };

    return (
        <form className='add-option' onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <input 
                type="text" 
                placeholder="Rua" 
                autoFocus 
                className="text-input"
                value={rua} 
                onChange={onRuaChange} />
            <input 
                type="text" 
                placeholder="Número" 
                className="text-input"
                value={numero} 
                onChange={onNumeroChange} />
            <input 
                type="text" 
                placeholder="Bairro" 
                className="text-input"
                value={bairro} 
                onChange={onBairroChange} />
            <input 
                type="text" 
                placeholder="Cidade" 
                className="text-input"
                value={cidade} 
                onChange={onCidadeChange} />
            <input 
                type="text" 
                placeholder="Estado" 
                className="text-input"
                value={estado} 
                onChange={onEstadoChange} />
            <button className="button">Salvar</button>
        </form>
    )
}