const Product = require("../app/models/product.js");

productController = {};

productController.list = (req, res) => {
  Product.find()
    .then((Product) => {
      res.status(200).json(Product);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

productController.create = (req, res) => {
  const body = req.body;
  const product = new Product(body);
  product
    .save()
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

productController.show = (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then((Product) => {
      res.status(200).json(Product);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

productController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Product.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((Product) => {
      res.status(200).json(Product);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

productController.destroy = (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((Product) => {
      res.status(200).json(Product);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports = productController;
