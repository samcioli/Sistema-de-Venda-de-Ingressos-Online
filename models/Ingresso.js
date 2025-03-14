// models/Ingresso.js
const conexao = require('../db');

class Ingresso {
    static async listarTodos() {
        try {
            const [rows] = await conexao.query('SELECT * FROM ingressos');
            return rows;
        } catch (error) {
            console.error('Erro ao listar ingressos:', error);
            throw error;
        }
    }

    static async criar(ingresso) {
        try {
            const { evento_id, tipo, preco, quantidade_disponivel } = ingresso;
            const [result] = await conexao.query(
                'INSERT INTO ingressos (evento_id, tipo, preco, quantidade_disponivel) VALUES (?, ?, ?, ?)',
                [evento_id, tipo, preco, quantidade_disponivel]
            );
            return result.insertId;
        } catch (error) {
            console.error('Erro ao criar ingresso:', error);
            throw error;
        }
    }

    static async buscarPorId(id) {
        try {
            const [rows] = await conexao.query('SELECT * FROM ingressos WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('Erro ao buscar ingresso:', error);
            throw error;
        }
    }

    static async atualizar(id, ingresso) {
        try {
            const { evento_id, tipo, preco, quantidade_disponivel } = ingresso;
            await conexao.query(
                'UPDATE ingressos SET evento_id = ?, tipo = ?, preco = ?, quantidade_disponivel = ? WHERE id = ?',
                [evento_id, tipo, preco, quantidade_disponivel, id]
            );
        } catch (error) {
            console.error('Erro ao atualizar ingresso:', error);
            throw error;
        }
    }

    static async excluir(id) {
        try {
            await conexao.query('DELETE FROM ingressos WHERE id = ?', [id]);
        } catch (error) {
            console.error('Erro ao excluir ingresso:', error);
            throw error;
        }
    }
}

module.exports = Ingresso;