import React, { Component } from 'react';
import Node from "../nodes/node";
import "./pathfinder.css";
import {Visualize_Dijkstra_Algorithm, animate_Node} from "../algorithms/dijkstra";

const START_NODE_ROW = 5;
const START_NODE_COL = 25;
const END_NODE_ROW = 10;
const END_NODE_COL = 40;


class pathfinder extends Component {
    constructor(props){
        super(props);
        this.state = {
            grid:[],
            mouseIsPressed: false,
        };
        this.visualizeDijkstra = this.visualizeDijkstra.bind(this);
        this.animateDijkstra = this.animateDijkstra.bind(this);
        this.animateShortestPath = this.animateShortestPath.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

    }
    componentDidMount(){    
        const grid = getGrid();
        this.setState({grid});
    }
    // related with creating walls.
    handleMouseDown(row,col){
        const newGrid = CreateWall(this.state.grid,row, col);
        this.setState({grid: newGrid, mouseIsPressed: true});
    }
    handleMouseUp(){
        this.setState({mouseIsPressed: false});
    }
    handleMouseEnter(row,col){
        if(!this.state.mouseIsPressed) return;
        const newGrid = CreateWall(this.state.grid, row, col);
        this.setState({grid: newGrid});
    }
    
    animateDijkstra(visitedNodes, ShortestPathNodes){
        for(let i=0; i<=visitedNodes.length; i++){
            // if exploring node is done then we will animate the path of algorithm.
            if(i === visitedNodes.length){
                setTimeout(() => {
                    this.animateShortestPath(ShortestPathNodes);
                }, 10*i);
                return;
            }
            setTimeout(() => {
                var node = visitedNodes[i];
                document.getElementById(`node-${node.row}-${node.col}`).className = `node node-visited`;
            }, 10*i);
        }
    }
    animateShortestPath(ShortestPathNodes){
        if(ShortestPathNodes.length > 0){
            for(var i=0; i<ShortestPathNodes.length; i++){
                let node = ShortestPathNodes[i];
                console.log(node);
                setTimeout(() => {
                    document.getElementById(`node-${node.row}-${node.col}`).className = `node node-shortest-path`;
                }, 50*i);
            }
        }
        else {
            console.log("shortest path is not 0");
        }
    }
    visualizeDijkstra(){
        const startNode = this.state.grid[START_NODE_ROW][START_NODE_COL];
        const destinationNode = this.state.grid[END_NODE_ROW][END_NODE_COL];
        const visitedNodes = Visualize_Dijkstra_Algorithm(this.state.grid, startNode, destinationNode);
        const ShortestPathNodes = animate_Node(destinationNode);

        this.animateDijkstra(visitedNodes, ShortestPathNodes);
    }


    render() {
        const {grid} = this.state;
        console.log("the grid is", grid);
        if(grid.length > 0){
            return (
                
                    <div className="grid">
                        <button onClick={() => this.visualizeDijkstra()}>Dijkstra</button>
                        {grid.map((row, rowId) => {
                            return <div>
                                {row.map((node, nodeId) =>{
                                    const {col, row, isStart, isFinish, isWall} = node;
                                    return(
                                            <Node
                                            col={col}
                                            row={row}
                                            key={nodeId}
                                            isStart={isStart}
                                            isFinish={isFinish}
                                            isWall={isWall}
                                            mouseIsPressed={this.state.mouseIsPressed}
                                            onMouseUp = {() => this.handleMouseUp()}
                                            onMouseEnter = {
                                                (row,col) => this.handleMouseEnter(row,col)
                                            }
                                            onMouseDown = {
                                                (row,col) => this.handleMouseDown(row,col)
                                            }
                                            ></Node>
                                        )})}
                                    </div>
                                })}
                    </div>               
            );
        }
        else {
            return (
                <div>
                    grid length id 0
                </div>
            )
        }
        
    }
}


const getGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 60; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  };
  
  const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === END_NODE_ROW && col === END_NODE_COL,
      distance: Infinity,
      isWall: false,
      isVisited: false,
      previousNode: null,
    };
  };
// creating wall.
/***
 * using slice function in js to to each node individually and then we will insert the wall node into the grid into the grid and then we
 * will return the grid.
 * the making of the wall will be depends on teh row and the column.
 */

 const CreateWall = (grid, row, col) => {
    const newGrid = grid.slice();
    console.log(newGrid);
    const NodeToTarget = newGrid[row][col];
    console.log("in the wall part", NodeToTarget);
    const wallNode = {
        ...NodeToTarget,
        isWall: !NodeToTarget.isWall,
    };
    console.log("after tweek ", wallNode);
    newGrid[row][col] = wallNode;
    return newGrid;
 }

export default pathfinder;