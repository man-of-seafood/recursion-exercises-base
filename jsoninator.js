const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function(obj) {
  // your code goes here
  // probably a bunch of different type checks
  // then depending on the type, you may need to recursively use the .toString()
  // method
  //number
  //null
  //undefined
  //string
  //bool
  //object
  //array
  //have to code in the rules for the structure of an object/array
  //but otherwise should just be able to call itself over and over
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
    let str = "[";
    _.forEach(obj, el => str += stringify(el) + ',');
    if(str.length !== 1) {
      str = str.slice(0, str.length - 1);
    }
    
    str += "]";
    return str;
  }
};
let x = [[[['foo']]]];
console.log(stringify(x));
module.exports = {
  stringify: stringify
};