const studentsModel = require("../models/studentsModel");
class studentsController {

    buscar(req, res) {
        const listaAlunos = studentsModel.listar();
        return listaAlunos.then(students => res.status(200).json(students)).catch(error => res.status(400).json(error.massage))
    }

    buscarAluno(req, res) {
        const { id } = req.params;
        const getAluno = req.body;
        const resposta = studentsModel.listarAluno(getAluno, id);
        return resposta.then(studentAtt => res.status(200).json(studentAtt)).catch(error => res.status(400).json(error.massage))
    }

    criar(req, res) {
        const novoAluno = req.body;
        const resposta = studentsModel.criar(novoAluno);
        return resposta.then(studentsCreated => res.status(201).json(studentsCreated)).catch(error => res.status(400).json(error.massage))
    }

    atualizar(req, res) {
        const { id } = req.params;
        const attAluno = req.body;
        const resposta = studentsModel.atualizar(attAluno, id);
        return resposta.then(studentAtt => res.status(200).json(studentAtt)).catch(error => res.status(400).json(error.massage))
    }

    deletar(req, res) {
        const { id } = req.params
        const resposta = studentsModel.deletar(id);
        return resposta.then(studentDelete => res.status(200).json(studentDelete)).catch(error => res.status(400).json(error.massage))
    }
}

module.exports = new studentsController();
