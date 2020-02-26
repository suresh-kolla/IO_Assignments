var express = require('express');
var router = express.Router();
var movie = require('../models/moviemodel')
router.get('/', function (req, res) {
    movie.find(function (err, data) {
        res.send(data)
    })

})
router.post('/', function (req, res) {
    var newmovie = new movie(req.body);
    newmovie.save(function (err, data) {
        if (err) { console.log(err) }


        res.send(data)
    })

})
router.delete('/:id', function (req, res) {
    console.log(req.params.id)
    movie.deleteOne({ _id: req.params.id }, function (err, data) {
        if (err) { res.send(err) }
        else { res.send(data) }
    })
})
router.put('/update', function (req, res) {
    movie.findOneAndUpdate({ _id: req.body.cid }, req.body, function (err, data) {
        if (err){console.log(err)}
        else {
            res.send(data)
        }
    })
})
module.exports = router;