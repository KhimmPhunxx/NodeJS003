
const productController = require("../controller/product.controller");

const product = (app,route_name) => {
    app.get(route_name, productController.getlist);
    app.get(`${route_name}/:id`, productController.getone);
    app.post(route_name, productController.create);
    app.put(`${route_name}/:id`, productController.update);
    app.delete(`${route_name}/:id`, productController.remove);
    app.post(`${route_name}/change_status`, productController.changeProductStatus );
}
module.exports = product;
