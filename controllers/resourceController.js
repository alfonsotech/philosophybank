const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    var options = {
      page: parseInt(req.query.page),
      limit: 10
    };
    db.Resource
    .paginate({}, options)
    .then(response => {
      res.json(response)
    })
  },
  findTrending: function(req, res){
    var options = {
      sort: {
        upvotes: -1,
        views: -1,
        date: -1
      },
      page: parseInt(req.query.page),
      limit: 10
    };
    db.Resource
    .paginate({}, options)
    .then(response => {
      res.json(response)
    })
  },
  findMostViewed: function(req, res){
    var options = {
      sort: {
        views: -1,
        date: -1
      },
      page: parseInt(req.query.page),
      limit: 10
    };
    db.Resource
    .paginate({}, options)
    .then(response => {
      res.json(response)
    })
  },
  findNew: function(req, res){
    var options = {
      sort: {
        date: -1,
        upvotes: -1,
        views: -1
      },
      page: parseInt(req.query.page),
      limit: 10
    };
    db.Resource
    .paginate({}, options)
    .then(response => {
      res.json(response)
    })
  },
  findById: function(req, res) {
    console.log('req.params.id', req.params.id);
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
