'use strict';

exports.parsePageParam = function (number) {

  if (number === undefined) {

    return 1;

  } else {

    return parseInt(number);

  }

};