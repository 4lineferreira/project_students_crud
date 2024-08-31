const routerStudents = require("./studentsRoute");
module.exports = (app, exprees) => {

    app.use(exprees.json());
    app.use(exprees.urlencoded({ extended: true }));
    app.use(routerStudents);
   
}