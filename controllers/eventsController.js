const db = require("../models");

// Defining methods for the eventsController
module.exports = {
  findAll: function (req, res) {
    console.log(req.query);
    db.Event
      .find(req.query)
      .populate('comments')
      .sort({ up: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySort: function (req, res) {
    console.log(req.params);
    const sort = req.params.sort;
    const order = req.params.order;

    if (order === 'true') {
      switch (sort) {
        case 'best':
          db.Event
            .find(req.query)
            .sort({ up: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
        case 'date':
          db.Event
            .find(req.query)
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
        case 'price':
          db.Event
            .find(req.query)
            .sort({ price: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
        case 'comments':
          db.Event
            .find(req.query)
            .sort({ commentLength: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
      }
    } else if (order === 'false') {
      switch (sort) {
        case 'best':
          db.Event
            .find(req.query)
            .sort({ up: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
        case 'date':
          db.Event
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
        case 'price':
          db.Event
            .find(req.query)
            .sort({ price: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
        case 'comments':
          db.Event
            .find(req.query)
            .sort({ commentLength: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          break;
      }
    }
  },
  findById: function (req, res) {
    db.Event
      .findById(req.params.id)
      .populate('comments')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body, "event being created in database");
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
