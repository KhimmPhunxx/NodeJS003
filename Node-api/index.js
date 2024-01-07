// first NodeJS API
const express = require('express'); // import express
const app = express(); // extend
const cors = require("cors") // import cors

// allow origin (npm install cors)
app.use(cors({
  origin : "*"
}))
app.use(express.json()); // for parsing application/json
app.get("/",(req,res)=>{res.send("Hello PREYCODEBACKEND API");})

const category = require("./src/route/category.route");
const prod = require("./src/route/product.route");
const employee = require("./src/route/employee.route");

category(app, "/api/category"); // call function
prod(app ,"/api/product"); // call function
employee(app, "/api/employee"); // call function

app.listen(8081, () => {
  console.log('http localhost:8081');
});
