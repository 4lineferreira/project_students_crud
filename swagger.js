const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuração básica do Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Estudantes",
      version: "1.0.0",
      description: "Documentação da API de Estudantes",
    },
    servers: [
      {
        url: "http://localhost:3000", // Substitua pela URL do seu servidor
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
