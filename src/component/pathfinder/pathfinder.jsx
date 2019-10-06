import React, { Component } from 'react';
import Node from "../nodes/node";
import "./pathfinder.css"
class pathfinder extends Component {
    constructor(){
        super();
        this.state = {
            grid:[],
        };
    }
    componentDidMount(){
        const nodes = [];
        for(var row = 0; row<15; row++){
            const initial_row = []; // what i am doing is that i am trying to push each node into the current row i am dealing with.
            for(var c=0; c<50; c++){
                initial_row.push([]);
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
                                {row.map((node, nodeId) => <Node></Node>)}
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