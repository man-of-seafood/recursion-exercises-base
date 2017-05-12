const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  //flatten into an array 
  //go through the array and check the id attribute of each el
  //return when you find the match

  const treeArray = flattenTreeToArray(root);
  for(let i = 0; i < treeArray.length; i++) {
    if (treeArray[i].id === id) {
      return treeArray[i];
    }
  }
};

const getElementsByClassName = function(root, className) {
  // Your code here
  // attribute name we care about: className
  const treeArray = flattenTreeToArray(root);
  const els = _.filter(treeArray, (el) => {
    if(el.className) {
      return el.className.indexOf(className) !== -1;
    }
  })
  return els;
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  const treeArray = flattenTreeToArray(root);
  const elementsWithTagName = _.filter(treeArray, (el) => el.tagName === tagName);
  return elementsWithTagName;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
