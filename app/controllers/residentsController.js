const Resident = require("../app/models/resident.js");

residentController = {};

residentController.list = (req, res) => {
  Resident.find()
    .then((Resident) => {
      res.status(200).json(Resident);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

residentController.create = (req, res) => {
  const body = req.body;
  const resident = new Resident(body);
  resident
    .save()
    .then((resident) => {
      res.status(200).json(resident);
    })
    .catch((err) => {
      res.status(err).json(err);
    });
};

residentController.show = (req, res) => {
  const id = req.params.id;
  Resident.findById(id)
    .then((Resident) => {
      res.status(200).json(Resident);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

residentController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Resident.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((Resident) => {
      res.status(200).json(Resident);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

residentController.destroy = (req, res) => {
  const id = req.params.id;
  Resident.findByIdAndDelete(id)
    .then((Resident) => {
      res.status(200).json(Resident);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports = residentController;
