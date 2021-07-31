const connection = require('../database/connection');
const crypto = require("crypto");
const { connect } = require('http2');

module.exports = {
    async indexAll(request, response) {
        const {page = 1, size = 10 } = request.query;

        const products = await connection('products')
        .orderBy('name')
        .limit(size)
        .offset((page-1)*size)
        .select('*');

        const [count] = await connection('products').count();
        response.header('X-Total-Count', count['count(*)']);

        return response.json(products);
    },
    async indexId(request, response){
        const {id} = request.params;
        const product = await connection('products').where('id',id).first();
        return response.json(product);
    },
    async create(request, response) {
        const { name, quant = 0, unitary_value } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        let product = {
            id,
            name,
            quant,
            unitary_value
        }
        await connection('products').insert(product);
        return response.json(id);
    },
    async edit(request, response){
        const {id} = request.params
        console.log(id);
        const product = await connection('products').where('id',id).first();       
        const { name = product.name, quant = product.quant, unitary_value = product.unitary_value } = request.body;
        let edit = {
            name,
            quant,
            unitary_value
        }
        await connection('products').where('id',id).update(edit);
        return response.json(edit);
    },
    async delete(request, response){
        const {id} = request.params;
        await connection('products').where('id',id).delete();
        return response.json(1);
    }
}