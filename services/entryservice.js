'use strict';

var entriesList = require('../entriesList');

var entries = entriesList.entries;

exports.countEntries = function () {

  return entries.length;

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

exports.getEntries = function () {

  var i = 0,
    entriesPerPage = entries.length,
    data = [];

  for (i; i < entriesPerPage; i++) {

    data.push(entries[i]);

  }

  return data;

};

exports.getRandomEntrie = function () {

  var rand = Math.floor((Math.random() * entries.length) + 0);

  return entries[rand];

};
