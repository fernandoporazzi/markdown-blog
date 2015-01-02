'use strict';

var entriesList = require('../entriesList');

var entries = entriesList.entries;

exports.countEntries = function () {

  return entries.length;

};

exports.getEntry = function (filename) {

  var i = 0,
    l = entries.length,
    obj = false;

  for (i; i < l; i++) {

    if (entries[i].file === filename) {

      obj = entries[i];

      break;

    }

  }

  return obj;

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