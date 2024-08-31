const exprees = require("express");
const app = exprees();
const swaggerDocs = require("./swagger");
const port = 3000;
const appCustom = require("./config/appCustom");

appCustom(app, exprees);
swaggerDocs(app);

app.listen(port, (error) =>{
    if(error){ 

        console.log("Deu erro");
        return;
    }
    console.log("Sucesso!")
 });
