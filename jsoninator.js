const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function(obj) {
  if(typeof obj === 'number') {
    return obj.toString();
  }
  if(obj === null) {
    return 'null';
  }
  if(typeof obj === 'boolean') {
    return '' + obj + '';
  }
  if(typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  if(Array.isArray(obj)) {
    // spicier
    let str = '[';
    _.forEach(obj, el => str += stringify(el) + ',');
    if(str.length !== 1) {
      str = str.slice(0, str.length - 1);
    }
    str += ']';
    return str;
  }
  if(typeof obj === 'object') {
    let str = '{';
    for(let key in obj) {
      str += stringify(key) + ':' + stringify(obj[key]);
    }
    str += '}';
    return str; 
  }
};

module.exports = {
  stringify: stringify
};