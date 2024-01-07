
const e = require("express");
const db = require("../util/db");
const { isEmptyOrNull } = require("../util/service");

const getAll = (req,res) => {
    var sql = "SELECT * FROM employee";
    db.query(sql,(err,result)=>{
        if(err) { // has error
            res.json({
                message : err,
                error : true
            })
        }else{ // success
            res.json({
                list : result,
                
            })
        } 
    })
}

// params from client
const getone = (req,res) => {
    var id = req.params.id;
    var sql = "SELECT * FROM employee WHERE employee_id = ?";
    db.query(sql,[id],(err,result)=>{
        if(err) { // has error
            res.json({
                message : err,
                error : true
            })
        }else{ // success
            res.json({
                list : result,

            })
        } 
    })
}

const create = (req,res) => {
    const {
        firstname,
        lastname,
        tel,
        email,
        base_salary,
        address,
        province,
        country
    } = req.body;

    var message = {}
    if(isEmptyOrNull(firstname)){
        message.firstname = "firstname is required"
    }
    if(isEmptyOrNull(lastname)){
        message.lastname = "lastname is required"
    }
    if(isEmptyOrNull(tel)){
        message.tel = "tel is required"
    }
    if(Object.keys(message).length > 0){
        res.json({
            message : message,
            error : true
        })
        return;
    }

    var sql = "INSERT INTO employee (firstname,lastname,tel,email,base_salary,address,province,country) VALUES (?,?,?,?,?,?,?,?)";
    var param_create = [
        firstname,
        lastname,
        tel,
        email,
        base_salary,
        address,
        province,
        country
    ];
    db.query(sql,param_create,(err,result)=>{
        if(err) { // has error
            res.json({
                error : true,
                message : err
            })
        }else{ // success
            res.json({
                message : "Employee Create success",
                data : result,
            })
        } 
    })
}

const update = (req,res) => {
    const {
        employee_id,
        firstname,
        lastname,
        tel,
        email,
        base_salary,
        address,
        province,
        country
    } = req.body;

    var message = {}
    if(isEmptyOrNull(employee_id)){
        message.employee_id = "employee_id is required"
    }
    if(isEmptyOrNull(firstname)){
        message.firstname = "firstname is required"
    }
    if(isEmptyOrNull(lastname)){
        message.lastname = "lastname is required"
    }
    if(isEmptyOrNull(tel)){
        message.tel = "tel is required"
    }
    if(Object.keys(message).length > 0){
        res.json({
            message : message,
            error : true
        })
        return;
    }

    var sql = "UPDATE employee SET firstname = ?,lastname = ?,tel = ?,email = ?,base_salary = ?,address = ?,province = ?,country = ? WHERE employee_id = ?";
    var param_update = [
        firstname,
        lastname,
        tel,
        email,
        base_salary,
        address,
        province,
        country,
        employee_id,
    ];
    db.query(sql,param_update,(err,result)=>{
        if(err) { // has error
            res.json({
                message : err,
                error : true
            })
        }else{ // success
            res.json({
                message : result.affectedRows ? "Employee Update success" : "Employee id in not found" ,
                data : result,
            })
        } 
    })
}

const remove = (req,res) => {
    // var id = req.params.id;
    var {id} = req.params;
    var sql = "DELETE FROM employee WHERE employee_id = ?";
    var param_delete = [id];
    db.query(sql,param_delete,(err,result)=>{

        if(!err){
            res.json({
                message : (result.affectedRows) ? "Employee Delete success" : "Employee id not Found",
                data : result,
            })
        }else{
            res.json({
                message : err,
                error : true
            })
        }
    })
}

module.exports = {
    getAll,
    getone,
    create,
    update,
    remove
}