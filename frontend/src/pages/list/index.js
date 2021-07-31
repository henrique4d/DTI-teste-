import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';


export default function List() {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    async function get_products() {
        const products = await api.get('product');
        setProducts(products.data);
        return;
    }
    async function handle_delete(id){
        const response = await api.delete(`product/${id}`);
        get_products();
    }
    async function handle_edit(id){
        history.push('edit',{id});
    }

    useEffect(() => {
        get_products();
    }, [])

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Nome </TableCell>
                        <TableCell> Quantidade </TableCell>
                        <TableCell> Valor Unitário </TableCell>
                        <TableCell> EDITAR </TableCell>
                        <TableCell> Excluir </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map((product) =>
                            <TableRow>
                                <TableCell> {product.name} </TableCell>
                                <TableCell> {product.quant}</TableCell>
                                <TableCell> {product.unitary_value} </TableCell>
                                <TableCell> <button onClick = { () => {handle_edit(product.id)}}> Editar </button> </TableCell>
                                <TableCell> <button onClick = { () => {handle_delete(product.id)}}> Excluir </button> </TableCell>        
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            <button onClick = {()=> {history.push('create')}} > Cadastrar novo produto </button>
        </div>
    )
}