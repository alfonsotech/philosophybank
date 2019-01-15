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
      console.log('data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data);

      let mediaImage;
      if(!data.imgs) {
          mediaImage = 'https://via.placeholder.com/150/000000/FFFFFF/?text=No+Image+Available'
      } else if(data.host === 'epochemagazine.org') {
          console.log('epoch mag', data.host, data.imgs[2]);
          mediaImage = data.imgs[2]
      } else if(data.host === 'medium.com') {
          console.log('medium host', data.host, data.imgs[4]);
          mediaImage = data.imgs[4]
      } else if(data.imgs[1]) {
          mediaImage = data.imgs[1]
      } else {
          mediaImage = data.imgs[0]
      }

    const resource = {
      title: data.title,
      author:req.body.author,
      url: req.body.url,
      duration: req.body.duration,
      description: data.des,
      upvotes: req.body.upvotes,
      views: req.body.views,
      notes: req.body.notes,
      media:   mediaImage,
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
      let mediaImage;
      if(!data.imgs) {
          mediaImage = 'https://via.placeholder.com/150/000000/FFFFFF/?text=No+Image+Available'
      } else if(data.host === 'epochemagazine.org') {
          console.log('epoch mag', data.host, data.imgs[2]);
          mediaImage = data.imgs[2]
      } else if(data.host === 'medium.com') {
          console.log('medium host', data.host, data.imgs[4]);
          mediaImage = data.imgs[4]
      } else if(data.imgs[1]) {
          mediaImage = data.imgs[1]
      } else {
          mediaImage = data.imgs[0]
      }

    const resource = {
      title: data.title,
      author:req.body.author,
      url: req.body.url,
      duration: req.body.duration,
      description: data.des,
      upvotes: req.body.upvotes,
      views: req.body.views,
      notes: req.body.notes,
      media:   mediaImage,
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
