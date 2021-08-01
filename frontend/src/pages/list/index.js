import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router';
import './styles.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';

export default function List() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [numPages = 5, setNumPages] = useState(1);

    const history = useHistory();

    async function get_products() {
        const products = await api.get(`product?page=${page}`);
        setProducts(products.data.data);
        const num_pages = products.data.num_pages;
        setNumPages(num_pages);
        if (page > num_pages) setPage(num_pages);
    }
    async function handle_delete(id) {
        const response = await api.delete(`product/${id}`);
        get_products();
    }
    async function handle_edit(id) {
        history.push('edit', { id });
    }

    useEffect(() => {
        get_products();
    }, [page])

    return (
        <div className="container">
            <Pagination
                count={numPages}
                page={page}
                color="primary"
                onChange={(event, page) => { setPage(page) }}
                className="pagination"
            />
            <Table>
                <TableHead className="header">
                    <TableRow>
                        <TableCell>
                            <text className="header_text">
                                Nome
                            </text>
                        </TableCell>
                        <TableCell>
                            <text className="header_text">
                                Quantidade
                            </text>
                        </TableCell>
                        <TableCell>
                            <text className="header_text">
                                Valor Unitário
                            </text>
                        </TableCell>
                        <TableCell>
                            <text className="header_text">
                                Editar
                            </text>
                        </TableCell>
                        <TableCell>
                            <text className="header_text">
                                Excluir
                            </text>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map((product) =>
                            <TableRow className="row">
                                <TableCell>
                                    <text className="row_text">
                                        {product.name}
                                    </text>
                                </TableCell>
                                <TableCell>
                                    <text className="row_text">
                                        {product.quant}
                                    </text>
                                </TableCell>
                                <TableCell>
                                    <text className="row_text">
                                        {product.unitary_value.toFixed(2)} R$
                                    </text>
                                </TableCell>
                                <TableCell> <button className="table_button" onClick={() => { handle_edit(product.id) }}> Editar </button> </TableCell>
                                <TableCell> <button className="table_button" onClick={() => { handle_delete(product.id) }}> Excluir </button> </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            <button className="cadastrar_button" onClick={() => { history.push('create') }} > Cadastrar novo produto </button>
        </div>
    )
}