const db = require("../models");

module.exports = {
  findAll: function(req, res) {

    db.Path
      .find({})
      .sort({pathPosition: 1})
      .exec( (err, docs) => {
        res.json(docs)
      })
  },
  findNew: function(req, res){
    db.Path
      .find({})
      .sort({date: -1})
      .limit(6)
      .exec( (err, docs) => {
        res.json(docs)
      })
  },
  findById: function(req, res) {
    db.Path
      .findById(req.params.id)
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('req.body', req.body);
    const path = {
      path: req.body.path,
      title: req.body.title,
      author:req.body.author,
      description: req.body.description,
      media: req.body.media,
      categories: req.body.categories
    };
    console.log('path from controller: ', path);
    db.Path
      .create(path)
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Path
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Path
      .findById({ _id: req.params.id })
      .then(dbPath => dbPath.remove())
      .then(dbPath => res.json(dbPath))
      .catch(err => res.status(422).json(err));
  }
};
