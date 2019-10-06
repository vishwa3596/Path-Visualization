import React, { Component } from 'react';
import "./node.css";
/***
 * first objective is to mark the position of the start and destination node.
 * then we will have to change the class name of the react component to dynamically chang the colour of the node.
 * the following will be the properties of the nodes:-(
 *    -> the corresponding rows and clmmns.
 *    -> the properties that the node is visited or not.// in order to change the class name and change the colour of the nodes
 *                     )
 * 
 */
class Node extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        const {isStart, isFinish} = this.props;
        console.log("the value of is_start is " , isStart);
        console.log("the value of isFinish is ", isFinish);
        var clsName = isFinish? 'is-Finish': isStart? 'is-Start': '';// way to dynamically change the value of the class name so that we
        return (                                                    // can change the attributes related to the class components.
               <div className={`node ${clsName}`}></div> 
        );
    }
}
export const DEFAULT_NODE = {
    c: 0,
    row: 0
};

export default Node;

