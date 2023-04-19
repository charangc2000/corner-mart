const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/usersController");
const storeController = require("../app/controllers/storesController");
const residentController = require("../app/controllers/residentsController");
const productController = require("../app/controllers/productsController");

//users
router.post("/api/users/register", userController.create);
router.get("/api/users/account", userController.show);

//product
router.get("/api/products", productController.list);
router.post("/api/products", productController.create);
router.get("/api/products/:id", productController.show);
router.put("/api/products/:id", productController.update);
router.delete("/api/products/:id", productController.destroy);

//store
router.get("/api/stores", storeController.list);
router.post("/api/stores", storeController.create);
router.get("/api/stores/:id", storeController.show);
router.put("/api/stores/:id", storeController.update);
router.delete("/api/stores/:id", storeController.destroy);

//resident
router.get("/api/residents", residentController.list);
router.post("/api/residents", residentController.create);
router.get("/api/residents/:id", residentController.show);
router.put("/api/residents/:id", residentController.update);
router.delete("/api/residents/:id", residentController.delete);

module.exports = router;
