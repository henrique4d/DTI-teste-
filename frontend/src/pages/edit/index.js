import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api'
import { useHistory } from 'react-router';

export default function Edit(props) {
    const [name, setName] = useState(null);
    const [quant, setQuant] = useState(0);
    const [unitary_value, setUnitary_value] = useState(null);
    const history = useHistory();
    const [id, setId] = useState(props.location.state.id);

    async function handle_edit(e) {
        e.preventDefault();
        let product = {
            name,
            quant,
            unitary_value
        }
        const response = await api.put(`product/${id}`, product);
        history.push('/');
    }

    async function get_product() {
        const product = await api.get(`product/${id}`);
        setName(product.data.name);
        setQuant(product.data.quant);
        setUnitary_value(product.data.unitary_value);
    }

    useEffect(() => {
        get_product();
    }, [])

    return (
        <div>
            <form onSubmit={handle_edit}>
                <text> Nome do produto </text>
                <input
                    type="text"
                    value={name}
                    required
                    placeholder="Produto"
                    onChange={e => { setName(e.target.value) }}
                />
                <text> Quantidade </text>
                <input
                    type="number"
                    value={quant}
                    min="0"
                    step="1"
                    required
                    onChange={e => { setQuant(Math.max((e.target.value), 0)) }}
                />
                <text> Valor Unitário </text>
                <input
                    type="number"
                    value={unitary_value}
                    required
                    placeholder="Valor unitário"
                    onChange={e => { setUnitary_value(Math.max((e.target.value), 0)) }}
                />
                <button type="submit"> Editar </button>
                <button onClick={() => { history.push('/') }}> Voltar</button>
            </form>
        </div>
    )
}