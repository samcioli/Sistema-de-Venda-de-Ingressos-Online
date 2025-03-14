// models/Evento.js
const conexao = require('../db');

class Evento {
    static async listarTodos() {
        try {
            const [rows] = await conexao.query('SELECT * FROM eventos');
            return rows;
        } catch (error) {
            console.error('Erro ao listar eventos:', error);
            throw error;
        }
    }

    static async criar(evento) {
        try {
            const { nome, data_inicio, data_fim, local, descricao } = evento;
            const [result] = await conexao.query(
                'INSERT INTO eventos (nome, data_inicio, data_fim, local, descricao) VALUES (?, ?, ?, ?, ?)',
                [nome, data_inicio, data_fim, local, descricao]
            );
            return result.insertId;
        } catch (error) {
            console.error('Erro ao criar evento:', error);
            throw error;
        }
    }

    static async buscarPorId(id) {
        try {
            const [rows] = await conexao.query('SELECT * FROM eventos WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            console.error('Erro ao buscar evento:', error);
            throw error;
        }
    }

    static async atualizar(id, evento) {
        try {
            const { nome, data_inicio, data_fim, local, descricao } = evento;
            await conexao.query(
                'UPDATE eventos SET nome = ?, data_inicio = ?, data_fim = ?, local = ?, descricao = ? WHERE id = ?',
                [nome, data_inicio, data_fim, local, descricao, id]
            );
        } catch (error) {
            console.error('Erro ao atualizar evento:', error);
            throw error;
        }
    }

    static async excluir(id) {
        try {
            await conexao.query('DELETE FROM eventos WHERE id = ?', [id]);
        } catch (error) {
            console.error('Erro ao excluir evento:', error);
            throw error;
        }
    }
}

module.exports = Evento;