const connection = require('../database/connection');
const crypto = require("crypto");

module.exports = {
    async indexAll(request, response) {
        const {page = 1, size = 10 } = request.query;

        if (page < 0) return response.status(400).json("Página inválida");
        if (size <= 0) return response.status(400).json("Tamanho inválido");

        const [count] = await connection('products').count();
        response.header('X-Total-Count', count['count(*)']);

        const products = await connection('products')
        .orderBy('name')
        .limit(size)
        .offset((page-1)*size)
        .select('*');

        let resposta = {
            "num_elements":count['count(*)'],
            "num_pages":Math.ceil(count['count(*)']/size),
            data:products
        }      
        return response.json(resposta);
    },

    async indexId(request, response){
        const {id} = request.params;
        const product = await connection('products').where('id',id).first();
        if (product == undefined) return response.status(404).json("usuario nao encontrado");
        return response.json(product);
    },

    async create(request, response) {
        const { name, quant = 0, unitary_value } = request.body;
        if (name == undefined) return response.status(400).json("Nome é um campo obrigatorio");
        if (!Number.isInteger(quant) || quant < 0) return response.status(400).json("Quantidade invalida");
        if (isNaN(unitary_value) || unitary_value < 0) return response.status(400).json("Valor unitario invalido");
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

        const product = await connection('products').where('id',id).first();       
        if (product == undefined) return response.status(404).json("Usuario nao encontrado");
    
        const { name = product.name, quant = product.quant, unitary_value = product.unitary_value } = request.body;
        if (name == undefined) return response.status(400).json("Nome é um campo obrigatorio");
        if (!Number.isInteger(quant) || quant < 0) return response.status(400).json("Quantidade invalida");
        if (isNaN(unitary_value) || unitary_value < 0) return response.status(400).json("Valor unitario invalido");
    
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
        const resposta = await connection('products').where('id',id).delete();
        if (resposta == 0) return response.status(400).json("Usuario nao encontrado");
        return response.json("deletado com sucesso");
    }
}