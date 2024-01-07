
const categoryController = require("../controller/category.controller");

const category = (app,base_route) => {
    app.get(base_route, categoryController.getAll);
    app.get(`${base_route}/:id`, categoryController.getone); // prarams
    app.post(base_route, categoryController.create);
    app.put(base_route, categoryController.update);
    app.delete(`${base_route}/:id`, categoryController.remove);

}
module.exports = category;
