const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuração básica do Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Estudantes",
      version: "1.0.0",
      description: "Esta é a documentação da API de Estudantes. Para visualizar o código fonte, visite o repositório [project_students_crud](https://github.com/4lineferreira/project_students_crud).",
    },
    servers: [
      {
        url: "https://project-students-crud.onrender.com", // Substitua pela URL do seu servidor
      },
    ],
  },
  apis: ["./routes/studentsRoute.js"], // Caminho para os arquivos de rotas
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
