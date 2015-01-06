'use strict';

var marked = require('marked'),
  fs = require('fs'),
  StringDecoder = require('string_decoder').StringDecoder,
  decoder = new StringDecoder('utf8'),
  entryService = require('../services/entryservice'),
  pagerService = require('../services/pagerservice'),
  utils = require('../utils/pager_utils');

exports.index = function (req, res) {
  
  var page = utils.parsePageParam(req.params.page);

  return res.render('home', {
    pageTitle: 'Blog',
    content: entryService.getEntries(page),
    pager: {
      prev: pagerService.getPreviousPage(page),
      next: pagerService.getNextPage(page)
    }
  });

};

exports.entry = function (req, res) {

  var entry = entryService.getEntry(req.params.entryUri),
    uri = './entries/' + entry.basePath + '/' + entry.file + '.markdown';

  fs.readFile(uri, function (err, data) {

    if (err) {
      return res.render('not-found', {
        pageTitle: 'Post Not Found',
        randomPost: entryService.getRandomEntrie()
      });
    }

    return res.render('entry', {
      pageTitle: entry.title,
      content: marked(decoder.write(data))
    });

  });

};
