/**
 * GRAPH FUNCTIONS.
 */

/**
 * getNodeInputConnections: Get a node input connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  const connectionsValuesArray = Object.values(graph.connections);
  const matchingConnections = connectionsValuesArray.filter(({ targetPath }) => targetPath === node.id);
  
  return matchingConnections;
}

/**
 * getNodeOutputConnections: Get a node output connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  const connectionsValuesArray = Object.values(graph.connections);
  const matchingConnections = connectionsValuesArray.filter(({ sourcePath }) => sourcePath === node.id);
  
  return matchingConnections;
}

/**
 * getNodeConnections: Get a node connections.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  const connectionsValuesArray = Object.values(graph.connections);
  const matchingConnections = connectionsValuesArray.filter(({ sourcePath, targetPath }) => (
    sourcePath === node.id || targetPath === node.id
  ));

  return matchingConnections;
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 * 
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  const nodesValuesArray = Object.values(graph.nodes);

  const result = nodesValuesArray.filter((node) => {
    const connections = getNodeOutputConnections(node, graph);
    return !connections.length;
  });
  
  return result;
}

/**
 * getRootNodes: Get all root nodes (no input connections).
 * 
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  const nodesValuesArray = Object.values(graph.nodes);

  const result = nodesValuesArray.filter((node) => {
    const connections = getNodeInputConnections(node, graph);
    return !connections.length;
  });
  
  return result;
}

/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 * 
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {
  const connections = getNodeInputConnections(node, graph);
  return connections.length > 1;
}
