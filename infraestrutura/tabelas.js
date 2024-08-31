class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaEstudantes();
     }	

    criarTabelaEstudantes() { 
       const sql = `   
            CREATE TABLE IF NOT EXISTS estudantes (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            NOME VARCHAR(150),
            IDADE INT,
            NT_PRI_SEM INTEGER(4),
            NT_SEG_SEM INTEGER(4),
            NOME_PROF VARCHAR(150),
            NUM_SALA INT
        );
            `;
            this.conexao.query(sql, (error) => { 
                if(error) {
                 console.log("Deu erro na criação de tabela dos estudantes");
                 console.log(error.message);
                 return;
                }
                 console.log("Tabela criada com sucesso")
    });	
  }	
}	

module.exports = new Tabelas();