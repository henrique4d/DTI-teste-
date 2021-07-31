import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api'
import { useHistory } from 'react-router';

export default function Create(props) {
    const [name, setName] = useState(null);
    const [quant, setQuant] = useState(0);
    const [unitary_value, setUnitary_value] = useState(null);
    const history = useHistory();

    async function handle_create(e){
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
        const response = await api.post('product', product);
        history.push('/');
    }

    return (
        <div>
            <form onSubmit={handle_create}>
                <text> Nome do produto </text>
                <input type="text" value = {name} required onChange ={ e => {setName(e.target.value)}}></input>
                <text> Quantidade </text>
                <input type="number"  value = {quant} required onChange={ e=> { setQuant(Math.max((e.target.value),0))}}></input>
                <text> Valor Unitário </text>
                <input type="number"  value = {unitary_value} required onChange={ e=> { setUnitary_value(Math.max((e.target.value),0))}}></input>



                <button type = "submit"> Cadastrar </button>


            </form>
        </div>
    )
}