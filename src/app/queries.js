const getPontos = 'SELECT * FROM pontos';
const getPontosById = 'SELECT * FROM pontos WHERE id = $1';
const getPontoAleatorio = 'SELECT pontos.numero, pontos.mensagem, livros.nome as nomelivro FROM pontos JOIN livros ON pontos.livroid = livros.id ORDER BY RANDOM() LIMIT 1;';


module.exports = {
    getPontos,
    getPontosById,
    getPontoAleatorio
};