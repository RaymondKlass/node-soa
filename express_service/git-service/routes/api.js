var express = require('express');
var router = express.Router();
var Beer = require('../models/beer');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', message: 'Hello Worlds Out There!' });
});

router.route('/beers')
    .post(function(req, res) {
        var beer = new Beer();
        beer.name = req.body.name;
        
        beer.save(function(err) {
            if (err)
                res.send(err);
                
            res.json({message: 'Beer Created'});
        });
    
    
    })
    
    .get(function(req, res) {
        Beer.find(function(err, beers) {
            if (err) {
                res.send(err);
            }
            res.json(beers);
        });
    });
    

router.route('/beers/:beer_id')
    .get(function(req, res) {
        Beer.findById(req.params.beer_id, function(err, beer) {
            if (err) {
              res.send(err);
            }
            res.json(beer);
        });
    
    })
    
    .put(function(req, res) {
        Beer.findById(req.params.beer_id, function(err, beer) {
            if (err) {
              res.send(err);
            }
            
            beer.name = req.body.name;
            beer.save(function(err) {
                if (err) {
                  res.send(err);
                }
                res.json({message: 'Beer Updated'})
            });
            
        });
    });



module.exports = router;