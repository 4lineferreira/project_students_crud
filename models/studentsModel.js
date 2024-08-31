const conexao = require("../infraestrutura/db");
class studentsModel {

    executaQuery(sql, parametros = ""){ 

        return new Promise ((resolve, reject) => { 
            conexao.query(sql, parametros, (error, resposta) => { 
                if(error){ 
                    return reject(error);
                }
                return resolve(resposta);
            })
        })
    }

    listar() {
        const sql = "SELECT * FROM estudantes";
        return this.executaQuery(sql);
    }

    listarAluno(listarAluno, id) {
        const sql = `SELECT * FROM estudantes WHERE id = ${id}`;
        return this.executaQuery(sql, [listarAluno,id])
    }

    criar(novoAluno) {
        const sql = "INSERT INTO estudantes SET ?"
        return this.executaQuery(sql, novoAluno);
    }

    atualizar(attAluno, id) {
        const sql = "UPDATE estudantes SET ? WHERE id = ?";
        return this.executaQuery(sql, [attAluno,id]);
    }
    
    deletar(id) {
        const sql = "DELETE FROM estudantes WHERE id = ?";
        return this.executaQuery(sql, id);
    }
}

module.exports = new studentsModel();