
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  // we are passed a reference to a node, and i'm guessing that node
  // will have children property to recurse upon
  // that prop is Node.childNodes
  // you can use forEach on the NodeList that is returned from Node.childNodes
  // call the callback on the node
  // for each of the children -- which are the start of their own trees
  //  check if there are children
  //  if no, return;
  //  otherwise, visitAllNodes(children)
  callback(node);
  if(node.childNodes.length > 0)   {
    const children = node.childNodes;
    children.forEach(childNode => visitAllNodes(childNode, callback));
  } else {
    return;
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};