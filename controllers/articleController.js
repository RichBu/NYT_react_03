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

    //var id = req.body.id;
    var id = req.params.id;

    db.articles.remove({
      "_id": mongojs.ObjectID(id)
    }, function (error, removed) {
      if (error) {
        res.send(error);
      } else {
        res.json(id);
      }
    });

    /*
    db.Article
      .findbyId({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      */
  }

};
