const router = require("../routes/index");
const conexao = require("../infraestrutura/db");
const tabelas = require("../infraestrutura/tabelas");

module.exports = (app, exprees) => {

    router(app, exprees);

    tabelas.init(conexao);
}