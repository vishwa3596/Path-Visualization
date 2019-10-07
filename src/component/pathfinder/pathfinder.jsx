import React, { Component } from 'react';
import Node from "../nodes/node";
import "./pathfinder.css";
import {Visualize_Dijkstra_Algorithm, animate_Node} from "../algorithms/dijkstra";

const START_NODE_ROW = 5;
const START_NODE_COL = 5;
const END_NODE_ROW = 10;
const END_NODE_COL = 40;


class pathfinder extends Component {
    constructor(props){
        super(props);
        this.state = {
            grid:[],
        };
        this.visualizeDijkstra = this.visualizeDijkstra.bind(this);
        this.animateDijkstra = this.animateDijkstra.bind(this);
    }
    componentDidMount(){    
        const grid = getGrid();
        this.setState({grid});
    }
    animateDijkstra(visitedNodes, ShortestPathNodes){

    }
    visualizeDijkstra(startNode, destinationNode){
        startNode = this.state.grid[START_NODE_ROW][START_NODE_COL];
        destinationNode = this.state.grid[END_NODE_ROW][END_NODE_COL];
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
                        {grid.map((row, rowId) => {
                            return <div>
                                {row.map((node, nodeId) =>{
                                    const {isStart, isFinish} = node;
                                    return(
                                            <Node
                                            key={nodeId}
                                            isStart={isStart}
                                            isFinish={isFinish}
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
      for (let col = 0; col < 50; col++) {
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
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };





export default pathfinder;