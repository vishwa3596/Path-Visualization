// creating dijkstra algorithm to work here.
/***
 *  we need to compute the distance of each node adjacent to each other in the grid.
 * 
 */

export function Visualize_Dijkstra_Algorithm(grid, startNode, destinationNode){
    // creating an array of visited nodes in order to store the node that are visited and then we can backtrack the nodes which gives us
    // sort path.
    const visitedNodes = [];
    startNode.distance = 0;
    console.log("start Node", startNode);
    // getting all the non visited nodes in the grid.
    const unvisitedNodes = get_all_nodes(grid);
    while(!!unvisitedNodes.length){
        Sort_Nodes(unvisitedNodes);
        const currentNode = unvisitedNodes.shift();
        currentNode.isVisited = true;
        visitedNodes.push(currentNode);
        if(startNode === destinationNode) return visitedNodes;
        Explore_Nodes(currentNode, grid);
    }
    return visitedNodes;
}

function Explore_Nodes(node, grid){
    const unvisitedNodes = getneighbour(node, grid);
        for(const nodes of unvisitedNodes){
            nodes.distance = node.distance + 1;
            nodes.previousNode = node;
    }
}

function getneighbour(node, grid){
    const unvisited = [];
    const {col, row} = node;
    if(row > 0) unvisited.push(grid[row-1][col]);
    if(row < grid.length-1) unvisited.push(grid[row+1][col]);
    if(col > 0) unvisited.push(grid[row][col-1]);
    if(col < grid[0].length-1) unvisited.push(grid[row][col+1]);
    return unvisited.filter(n => !n.isVisited);
    
}

function Sort_Nodes(unvisitedNodes){
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function get_all_nodes(grid){
    const Nodes = [];
    for(var row of grid){
        for(var node of row){
            Nodes.push(node);
        }
    }
    return Nodes;
}

export function animate_Node(destinationNode){
    const ShortestPathNodes = [];
    let currentNode = destinationNode;
    while(currentNode !== null){
        console.log("animate_node", currentNode)
        ShortestPathNodes.unshift(currentNode);
        currentNode = currentNode.previousNode;
        console.log("in js ", currentNode);
    }
    console.log("in dijkstra", ShortestPathNodes);
    return ShortestPathNodes;
}
