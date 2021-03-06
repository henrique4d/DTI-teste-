import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router';

export default function Edit(props) {
    const [name, setName] = useState("");
    const [quant, setQuant] = useState(0);
    const [unitary_value, setUnitary_value] = useState("");
    const history = useHistory();
    const [id] = useState(props.location.state.id);

    async function handle_edit(e) {
        e.preventDefault();
        let product = {
            name,
            quant,
            unitary_value
        }
        await api.put(`product/${id}`, product);
        history.push('/');
    }

    
    
    
    const get_product = useCallback( async()=> {
        const product = await api.get(`product/${id}`);
        setName(product.data.name);
        setQuant(product.data.quant);
        setUnitary_value(product.data.unitary_value);
    }, [id])


    useEffect(() => {
        get_product();
    }, [get_product])

    return (
        <div className="form_container">
            <form onSubmit={handle_edit}>
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
                    <text className="attribute_text"> Valor Unit??rio </text>
                    <input
                        type="number"
                        value={unitary_value}
                        step="any"
                        required
                        placeholder="Valor unit??rio"
                        onChange={e => { setUnitary_value(Math.max((e.target.value), 0)) }}
                        className="attribute_input"



                    />
                </div>
                <div className="button_container">
                    <button className = "button" type="submit"> Editar </button>
                    <button className = "button" onClick={() => { history.push('/') }}> Voltar</button>
                </div>
            </form>
        </div>
    )
}