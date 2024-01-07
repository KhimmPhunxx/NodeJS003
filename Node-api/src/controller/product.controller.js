// 

const getlist = (req, res) => {
    res.json({
        message: "list all product"
    })
}

const getone = (req, res) => {
    res.json({
        message: "list one product"
    })
}

const create = (req, res) => {
    res.json({
        message: "create product"
    })
}

const update = (req, res) => {
    res.json({
        message: "update product"
    })
}

const remove = (req, res) => {
    res.json({
        message: "remove product"
    })
}

const changeProductStatus = (req, res) => {
    res.json({
        message: "change product status"
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