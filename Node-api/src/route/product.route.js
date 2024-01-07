
const productController = require("../controller/product.controller");

const product = (app) => {
    app.get("/product", productController.getlist );
    app.get("/product/:id", productController.getone );
    app.post("/product", productController.create );
    app.put("/product", productController.update );
    app.delete("/product", productController.remove );
    app.post("/product_change_status", productController.changeProductStatus );
}
module.exports = product;
