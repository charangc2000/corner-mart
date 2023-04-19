const User = require("../models/user.js");

const userController = {};

userController.list = (req, res) => {
  User.find()
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

userController.create = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

userController.show = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

userController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  User.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

userController.destroy = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports = userController;
