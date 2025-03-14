// models/Venda.js
const conexao = require('../db');

class Venda {
    static async listarTodos() {
        try {
            const [rows] = await conexao.query('SELECT * FROM vendas');
            return rows;
        } catch (error) {
            console.error('Erro ao listar vendas:', error);
            throw error;
        }
    }

    static async criar(venda) {
        try {
            const { cliente_id, ingresso_id, data_venda } = venda;
            const [result] = await conexao.query(
                'INSERT INTO vendas (cliente_id, ingresso_id, data_venda) VALUES (?, ?, ?)',
                [cliente_id, ingresso_id, data_venda]
            );
            return result.insertId;
        } catch (error) {
            console.error('Erro ao criar venda:', error);
            throw error;
        }
    }

    static async buscarPorId(id) {
        try {
            const [rows] = await conexao.query('SELECT * FROM vendas WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('Erro ao buscar venda:', error);
            throw error;
        }
    }

    static async atualizar(id, venda) {
        try {
            const { cliente_id, ingresso_id, data_venda } = venda;
            await conexao.query(
                'UPDATE vendas SET cliente_id = ?, ingresso_id = ?, data_venda = ? WHERE id = ?',
                [cliente_id, ingresso_id, data_venda, id]
            );
        } catch (error) {
            console.error('Erro ao atualizar venda:', error);
            throw error;
        }
    }

    static async excluir(id) {
        try {
            await conexao.query('DELETE FROM vendas WHERE id = ?', [id]);
        } catch (error) {
            console.error('Erro ao excluir venda:', error);
            throw error;
        }
    }
}

module.exports = Venda;