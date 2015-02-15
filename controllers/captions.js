var _ = require('lodash'),
    Captions = require('../models/Captions');

exports.getCaptions = function(req, res) {
    Captions.find(function(err, captions) {
        if (err) console.log(err);
        res.json(captions);
    });
};

exports.getVideo = function(req, res) {
    console.log(req);
    Captions.findById(req.params.id, function(err, caption) {
      if (err) console.log(err);
      res.json(caption)
    });
};