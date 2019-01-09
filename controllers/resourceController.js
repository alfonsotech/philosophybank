const db = require("../models")
const linkPreview = require("link-preview")

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
      console.log('response', response);
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
    db.Resource
      .findById(req.params.id)
      .then(dbResource => res.json(dbResource))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    linkPreview.parse(req.body.url).then(function(data) {
      console.log('data.imgs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data.imgs[0]);
    const resource = {
      title: data.title,
      author:req.body.author,
      url: req.body.url,
      duration: req.body.duration,
      description: data.des,
      upvotes: req.body.upvotes,
      views: req.body.views,
      notes: req.body.notes,
      media: data.imgs[0],
      mediaType: data.host,
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
    });



  },
  update: function(req, res) {
    db.Resource
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbResource => {
        res.json(dbResource)
      })
      .catch(err => res.status(422).json(err))
  },
  updateAll: function(req, res) {
    linkPreview.parse(req.body.url).then(function(data) {
    const resource = {
      title: data.title,
      author:req.body.author,
      url: req.body.url,
      duration: req.body.duration,
      description: data.des,
      upvotes: req.body.upvotes,
      views: req.body.views,
      notes: req.body.notes,
      media: data.imgs[1],
      mediaType: data.host,
      institution: req.body.institution,
      categories: req.body.categories,
      level: req.body.level,
      path: req.body.path,
      position: req.body.position
    }
    db.Resource
      .update(resource)
      .then(dbResource => res.json(dbResource))
      .catch(err => res.status(422).json(err))
    });
  },
  remove: function(req, res) {
    db.Resource
      .findById({ _id: req.params.id })
      .then(dbResource => dbResource.remove())
      .then(dbResource => res.json(dbResource))
      .catch(err => res.status(422).json(err))
  }
}
