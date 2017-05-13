
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  callback(node);
  if(node.childNodes)   {
    const children = node.childNodes;
    children.forEach(childNode => visitAllNodes(childNode, callback));
  } else {
    return;
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  const treeArray = [];
  visitAllNodes(node, (eachNode) => treeArray.push(eachNode));
  return treeArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};