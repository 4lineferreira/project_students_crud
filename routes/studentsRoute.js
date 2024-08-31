const { Router } = require("express");
const router = Router();
const studentsController = require("../controllers/studentsController");

/**
 * @swagger
 * tags:
 *   name: Project Students API
 *   description: API de gerenciamento de dados de estudantes
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Retorna a lista de todos os estudantes
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Lista de estudantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 123
 *                   NOME:
 *                     type: string
 *                     example: "João Silva"
 *                   IDADE:
 *                     type: integer
 *                     example: 20
 *                   NT_PRI_SEM:
 *                     type: number
 *                     example: 8
 *                   NT_SEG_SEM:
 *                     type: number
 *                     example: 5
 *                   NOME_PROF:
 *                     type: string
 *                     example: "Jenifer Galdino"
 *                   NUM_SALA:
 *                      type: number
 *                      example: 2
 *             examples:
 *               ExemploSucesso:
 *                 summary: Exemplo de resposta bem-sucedida
 *                 value: 
 *                   - id: 123
 *                     NOME: "João Silva"
 *                     IDADE: 20
 *                     NT_PRI_SEM: 8,55
 *                     NT_SEG_SEM: 7,30
 *                     NOME_PROF: "Jenifer Galdino"
 *                     NUM_SALA: 2
 *                   - id: 127
 *                     NOME: "Maria Santos"
 *                     IDADE: 23
 *                     NT_PRI_SEM: 5,0
 *                     NT_SEG_SEM: 9,0
 *                     NOME_PROF: "Jenifer Galdino"
 *                     NUM_SALA: 2
 */
router.get("/students", studentsController.buscar);

/**
 * @swagger
 * /student/{id}:
 *   get:
 *     summary: Retorna um estudante específico por ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do estudante
 *     responses:
 *       200:
 *         description: Estudante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 123
 *                   NOME:
 *                     type: string
 *                     example: "João Silva"
 *                   IDADE:
 *                     type: integer
 *                     example: 20
 *                   NT_PRI_SEM:
 *                     type: number
 *                     example: 8
 *                   NT_SEG_SEM:
 *                     type: number
 *                     example: 5
 *                   NOME_PROF:
 *                     type: string
 *                     example: "Jenifer Galdino"
 *                   NUM_SALA:
 *                      type: number
 *                      example: 2
 *             examples:
 *               ExemploSucesso:
 *                 summary: Exemplo de resposta bem-sucedida
 *                 value: 
 *                   - id: 123
 *                     NOME: "João Silva"
 *                     IDADE: 20
 *                     NT_PRI_SEM: 8,55
 *                     NT_SEG_SEM: 7,30
 *                     NOME_PROF: "Jenifer Galdino"
 *                     NUM_SALA: 2
 *       404:
 *         description: Estudante não encontrado
 */
router.get("/student/:id", studentsController.buscarAluno);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Cria um novo estudante
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NOME:
 *                 type: string
 *                 example: "Renato Silva"
 *               IDADE:
 *                 type: integer
 *                 example: 69
 *               NT_PRI_SEM:
 *                 type: number
 *                 format: float
 *                 example: 8
 *               NT_SEG_SEM:
 *                 type: number
 *                 format: float
 *                 example: 9
 *               NOME_PROF:
 *                 type: string
 *                 example: "Jenifer Caldinho"
 *               NUM_SALA:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Estudante criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "125"
 *                 NOME:
 *                   type: string
 *                   example: "Renato Silva"
 *                 IDADE:
 *                   type: integer
 *                   example: 69
 *                 NT_PRI_SEM:
 *                   type: number
 *                   format: float
 *                   example: 8
 *                 NT_SEG_SEM:
 *                   type: number
 *                   format: float
 *                   example: 9
 *                 NOME_PROF:
 *                   type: string
 *                   example: "Jenifer Caldinho"
 *                 NUM_SALA:
 *                   type: integer
 *                   example: 2
 *             examples:
 *               ExemploSucesso:
 *                 summary: Exemplo de resposta de criação bem-sucedida
 *                 value:
 *                   id: "125"
 *                   NOME: "Renato Silva"
 *                   IDADE: 69
 *                   NT_PRI_SEM: 8
 *                   NT_SEG_SEM: 9
 *                   NOME_PROF: "Jenifer Caldinho"
 *                   NUM_SALA: 2
 */
router.post("/students",studentsController.criar);

/**
 * @swagger
 * /student/{id}:
 *   put:
 *     summary: Atualiza as notas de um estudante específico por ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do estudante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NT_PRI_SEM:
 *                 type: number
 *                 format: float
 *                 example: 8
 *     responses:
 *       200:
 *         description: Notas do estudante atualizadas com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "125"
 *                 NT_PRI_SEM:
 *                   type: number
 *                   format: float
 *                   example: 8
 *             examples:
 *               ExemploSucesso:
 *                 summary: Exemplo de resposta de atualização bem-sucedida
 *                 value:
 *                   id: "125"
 *                   NT_PRI_SEM: 8
 *       404:
 *         description: Estudante não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Estudante não encontrado"
 *             examples:
 *               ExemploErro:
 *                 summary: Exemplo de resposta para estudante não encontrado
 *                 value:
 *                   message: "Estudante não encontrado"
 */
router.put("/student/:id", studentsController.atualizar);

/**
 * @swagger
 * /student/{id}:
 *   delete:
 *     summary: Deleta um estudante específico por ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do estudante
 *     responses:
 *       204:
 *         description: Estudante deletado
 *       404:
 *         description: Estudante não encontrado
 */
router.delete("/student/:id", studentsController.deletar);
 
module.exports = router;