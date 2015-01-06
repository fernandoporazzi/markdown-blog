'use strict';

var entriesList = require('../entriesList'),
  entries = entriesList.entries,
  entriesPerPage = 3;

exports.countEntries = function () {

  return entries.length;

};

exports.totalPages = function () {

  return Math.ceil(entries.length / entriesPerPage);

};


exports.getEntry = function (filename) {

  var i = 0,
    l = entries.length;

  for (i; i < l; i++) {

    var entry = entries[i];

    if (entry.file === filename) return entry;

  }

  return false;

};

exports.getEntries = function (page) {

  var i = (page - 1) * entriesPerPage,
    limit = i + entriesPerPage,
    data = [];

  for (i; i < limit; i++) {

    data.push(entries[i]);

  }

  return data;

};

exports.getRandomEntrie = function () {

  var rand = Math.floor((Math.random() * entries.length) + 0);

  return entries[rand];

};
