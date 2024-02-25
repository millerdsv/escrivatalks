const pool = require("../../db");
const queries = require('./queries');

const getPontos = (req, res) => {
    pool.query(queries.getPontos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getPontosById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPontosById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getMessageResponse = (req, res) => {
    pool.query(queries.getPontoAleatorio, (error, results) => {

        if (error) {
            console.log(error);
            throw error;
        }

        let { mensagem, numero, nomelivro } = results.rows[0];
        let message = `${mensagem} (${nomelivro}, ${numero})`;

        res.status(200).json(message);
    });
};

module.exports = {
    getPontos,
    getPontosById,
    getMessageResponse
};