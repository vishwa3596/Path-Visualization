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
        };
        this.visualizeDijkstra = this.visualizeDijkstra.bind(this);
        this.animateDijkstra = this.animateDijkstra.bind(this);
        this.animateShortestPath = this.animateShortestPath.bind(this);
    }
    componentDidMount(){    
        const grid = getGrid();
        this.setState({grid});
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
                                    const {col, row, isStart, isFinish} = node;
                                    return(
                                            <Node
                                            col={col}
                                            row={row}
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
      isVisited: false,
      previousNode: null,
    };
  };





export default pathfinder;