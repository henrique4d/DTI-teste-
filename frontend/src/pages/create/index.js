import React, { useState} from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router';
import './styles.css'

export default function Create(props) {
    const [name, setName] = useState("");
    const [quant, setQuant] = useState(0);
    const [unitary_value, setUnitary_value] = useState("");
    const history = useHistory();

    async function handle_create(e) {
        e.preventDefault();
        console.log(name);
        console.log(quant);
        console.log(unitary_value);
        let product = {
            name,
            quant,
            unitary_value
        }
        console.log(product);
        await api.post('product', product);
        history.push('/');
    }

    return (
        <div className="form_container">
            <form onSubmit={handle_create}>
                <div className="attribute">
                    <text className="attribute_text"> Nome do produto </text>
                    <input
                        type="text"
                        value={name}
                        required
                        placeholder="Produto"
                        onChange={e => { setName(e.target.value) }}
                        className="attribute_input"
                    />
                </div>

                <div className="attribute">
                    <text className="attribute_text"> Quantidade </text>
                    <input
                        type="number"
                        value={quant}
                        min="0"
                        step="1"
                        required
                        onChange={e => { setQuant(Math.max((e.target.value), 0)) }}
                        className="attribute_input"
                    />
                </div>
                <div className="attribute">
                    <text className="attribute_text"> Valor Unitário </text>
                    <input
                        type="number"
                        value={unitary_value}
                        setp="any"
                        required
                        placeholder="Valor unitário"
                        onChange={e => { setUnitary_value(Math.max((e.target.value), 0)) }}
                        className="attribute_input"

                    />
                </div>
                <div className="button_container">
                    <button className = "button" type="submit"> Cadastrar </button>
                    <button className = "button" onClick={() => { history.push('/') }}> Voltar</button>
                </div>
            </form>
        </div>
    )
}