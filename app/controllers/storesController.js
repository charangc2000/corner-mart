const Store = require("../app/models/store.js");

storeController = {};

storeController.list = (req, res) => {
  Store.find()
    .then((Store) => {
      res.status(200).json(Store);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

storeController.create = (req, res) => {
  const body = req.body;
  const store = new Store(body);
  store
    .save()
    .then((store) => {
      res.status(200).json(store);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

storeController.show = (req, res) => {
  const id = req.params.id;
  Store.findById(id)
    .then((Store) => {
      res.status(200).json(Store);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

storeController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Store.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((Store) => {
      res.status(200).json(Store);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

storeController.destroy = (req, res) => {
  const id = req.params.id;
  Store.findByIdAndDelete(id)
    .then((Store) => {
      res.status(200).json(Store);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports = storeController;
