// 
const db = require("../util/db");
const { isEmptyOrNull } = require("../util/service");

const getlist = async (req, res) => {
    let sql = "SELECT * FROM product";
    // join table category pagination
    const data = await db.query(sql);
    res.json({
        data: data
    })
}

const getone = async (req, res) => {
    let {
        id
    } = req.params;
    const sql = "SELECT * FROM product WHERE product_id = ?";
    const data = await db.query(sql, [id]);
    res.json({
        data: data
    })
}

const create = async (req, res) => {
    let {
        category_id,
        barcode,
        name,
        quantity,
        price,
        image,
        description,
    } = req.body;

    let message = {}
    if (isEmptyOrNull(category_id)){message.category_id = "category_id is required"}
    if (isEmptyOrNull(barcode)){message.barcode = "barcode is required"}
    if (isEmptyOrNull(name)){message.name = "name is required"}
    if (isEmptyOrNull(quantity)){message.quantity = "quantity is required"}
    if (isEmptyOrNull(price)){message.price = "price is required"}
    if(Object.keys(message).length > 0){
        res.json({
            error:true,
            message:message
           
        })
        return;
    }

    let sql = "INSERT INTO product (category_id,barcode,name,quantity,price,image,description) VALUES (?,?,?,?,?,?,?)";
    let param = [category_id,barcode,name,quantity,price,image,description];
    let data = await db.query(sql, param);
    res.json({
        message: "Product added successfully",
        data: data
    })
}

const update = async (req, res) => {
    let {
        product_id,
        category_id,
        barcode,
        name,
        quantity,
        price,
        image,
        description,
    } = req.body;

    let message = {}
    if (isEmptyOrNull(product_id)){message.productid = "product_id is required"}
    if (isEmptyOrNull(category_id)){message.category_id = "category_id is required"}
    if (isEmptyOrNull(barcode)){message.barcode = "barcode is required"}
    if (isEmptyOrNull(name)){message.name = "name is required"}
    if (isEmptyOrNull(quantity)){message.quantity = "quantity is required"}
    if (isEmptyOrNull(price)){message.price = "price is required"}
    if(Object.keys(message).length > 0){
        res.json({
            error:true,
            message:message
           
        })
        return;
    }

    let sql = "UPDATE product SET category_id = ?,barcode = ?,name = ?,quantity = ?,price = ?,image = ?,description = ? WHERE product_id = ?";
    let param = [category_id,barcode,name,quantity,price,image,description,product_id];
    let data = await db.query(sql, param);
    res.json({
        message: "Product updated successfully",
        data: data
    })
  
}

const remove = async (req, res) => {
    let {
        id
    } = req.boy;
    const sql = "DELETE FROM product WHERE product_id = ?";
    const data = await db.query(sql, [id]);
    res.json({
        message: "Product removed successfully",
        data: data
    })
   
}

const changeProductStatus = async (req, res) => {
    let {
      is_active
    } = req.body; // 1 or 0
    const sql = "UPDATE product SET is_active = ? WHERE product_id = ?";
    const data = await db.query(sql, [is_active]);
    res.json({
        message: "Product Update Status to"+(is_active == 0 ? "InActive" : "Active")+"successfully",
        data: data
    })
    
}

module.exports = {
    getlist,
    getone,
    create,
    update,
    remove,
    changeProductStatus
}