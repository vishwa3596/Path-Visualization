import React, { Component } from 'react';
import Node from "../nodes/node";
import "./pathfinder.css"
class pathfinder extends Component {
    constructor(props){
        super(props);
        this.state = {
            grid:[],
        };
    }
    componentDidMount(){
        const nodes = [];
        for(var row = 0; row<15; row++){
            const initial_row = []; // what i am doing is that i am trying to push each node into the current row i am dealing with.
            for(var c=0; c<50; c++){
               const currentNode = { // here i have defined all the core properties of the nodes like the rows and the column and if 
                // we have a starting point then the position of the starting node and the ending node.
                   c,
                   row,
                   isStart: row === 5 && c === 5,
                   isFinish: row === 10 && c === 40,
               };
               initial_row.push(currentNode);
            }
            nodes.push(initial_row);
        }
        this.setState({
            grid: nodes
        })
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

export default pathfinder;