// 
const employeeController = require("../controller/employee.controller");

// const route = "/api/employee";
const employee = (app,base_route) => {
    app.get(base_route, employeeController.getAll);
    app.get(`${base_route}/:id`, employeeController.getone); // prarams
    app.post(base_route, employeeController.create);
    app.put(base_route, employeeController.update);
    app.delete(`${base_route}/:id`, employeeController.remove);
}

module.exports = employee;