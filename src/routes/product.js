const express = require("express");
const productControllers = require("../controllers/product");
const route = express.Router();

route.get("", productControllers.getAll);
route.get("/name", productControllers.getByProductName);
route.get("/users", productControllers.getAllProductsWithUser);
route.get("/userswithproduct", productControllers.getUsersWithAllProducts);
route.get("/:id", productControllers.getById);
route.post("/", productControllers.createProduct);
route.post(`/create-user-product`, productControllers.createUserAndProduce);
route.patch("/:id", productControllers.updateProduct);
route.delete("/:id", productControllers.deleteProduct);
module.exports = route;
