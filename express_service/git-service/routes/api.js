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
    
    
    });

module.exports = router;