'use strict';

var entryService = require('./entryservice');

exports.getPreviousPage = function (page) {

  if (page === 1) {
  
    return 1;
  
  } else {
  
    return page - 1;
  
  }

};

exports.getNextPage = function (page) {

  if (page === entryService.totalPages()) {

    return entryService.totalPages();

  } else {

    return page + 1;

  }

};