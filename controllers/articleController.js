//const db = require("../models");

module.exports = {
  searchAll: function (req, res) {
    console.log('hit the search all route');

    db.articles.find({}, function (err, data) {
      if (err) {
        res.status(422).json(err);
      } else {
        res.json(data);
      };
    });


    // db.articles.find
    // db.Article
    //   .find()
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err))
  },

  // create: function(req,res){
  //   console.log('hit the save route');
  //   db.Article
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  create: function (req, res) {
    console.log('hit the save route');
    console.log(req.body);
    db.articles.insert(
      req.body
      , function (error, savedArticle) {
        if (err) {
          res.status(422).json(err);
        } else {
          res.json(savedArticle);
        };
      });
  },

  //   db.articles.insert(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  remove: function (req, res) {
    console.log('delete route');
    db.Article
      .findbyId({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};