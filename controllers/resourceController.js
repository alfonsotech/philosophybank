const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.Resource
      .find({})
      .sort('upvotes')
      .exec( (err, docs) => {
        // console.log('docs', docs)
        res.json(docs)
      })
  },
  findTrending: function(req, res){
    db.Resource
      .find({})
      .sort({upvotes: -1, views: -1, date: -1})
      .exec( (err, docs) => {
        res.json(docs)
      })
  },
  findMostViewed: function(req, res){
    db.Resource
      .find({})
      .sort({views: -1, date: -1})
      .exec( (err, docs) => {
        res.json(docs)
      })
  },
  findNew: function(req, res){
    db.Resource
      .find({})
      .sort({date: -1, upvotes: -1, views: -1})
      .exec( (err, docs) => {
        res.json(docs)
      })
  },
  findByPath: function(req, res) {
    db.Resource
      .find({path: req.params.path})
      .sort({position: 1})
      .then(dbByPath => res.json(dbByPath))
      .catch(err => res.status(422).json(err))
  },
  findByLevel: function(req, res) {
    db.Resource
      .find({level: req.params.level})
      .sort({date: -1})
      .then(dbByPath => res.json(dbByPath))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Resource
      .findById(req.params.id)
      .then(dbResource => res.json(dbResource))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {

    const resource = {
      title: req.body.title,
      author:req.body.author,
      url: req.body.url,
      duration: req.body.duration,
      description: req.body.description,
      upvotes: req.body.upvotes,
      views: req.body.views,
      notes: req.body.notes,
      media: req.body.media,
      mediaType: req.body.mediaType,
      institution: req.body.institution,
      categories: req.body.categories,
      level: req.body.level,
      path: req.body.path,
      position: req.body.position
    }
    db.Resource
      .create(resource)
      .then(dbResource => res.json(dbResource))
      .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.Resource
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbResource => {
        res.json(dbResource)
      })
      .catch(err => res.status(422).json(err))
  },
  remove: function(req, res) {
    db.Resource
      .findById({ _id: req.params.id })
      .then(dbResource => dbResource.remove())
      .then(dbResource => res.json(dbResource))
      .catch(err => res.status(422).json(err))
  }
}
