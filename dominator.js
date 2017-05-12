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
  const elementsWithClassName = [];
  for(let i = 0; i < treeArray.length; i++) {
    if(treeArray[i].className) {
      let classString = treeArray[i].className;
      console.log(classString);
      let classStringArray = classString.split(' ');
      for(let j = 0; j < classStringArray.length; j++) {
        if(classStringArray[j] === className) {
          elementsWithClassName.push(treeArray[i]);
        }
      }
    }
  }
  return elementsWithClassName;
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
