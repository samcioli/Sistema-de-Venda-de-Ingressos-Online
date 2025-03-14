// models/Cliente.js
const conexao = require('../db');

class Cliente {
    static async listarTodos() {
        try {
            const [rows] = await conexao.query('SELECT * FROM clientes');
            return rows;
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            throw error;
        }
    }

    static async criar(cliente) {
        try {
            const { nome, email, telefone } = cliente;
            const [result] = await conexao.query(
                'INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)',
                [nome, email, telefone]
            );
            return result.insertId;
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            throw error;
        }
    }

    static async buscarPorId(id) {
        try {
            const [rows] = await conexao.query('SELECT * FROM clientes WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
            throw error;
        }
    }

    static async atualizar(id, cliente) {
        try {
            const { nome, email, telefone } = cliente;
            await conexao.query(
                'UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?',
                [nome, email, telefone, id]
            );
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw error;
        }
    }

    static async excluir(id) {
        try {
            await conexao.query('DELETE FROM clientes WHERE id = ?', [id]);
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
            throw error;
        }
    }
}

module.exports = Cliente;