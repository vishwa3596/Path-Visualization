import React, { Component } from 'react';
import "./heading.css";
class Heading extends Component {
    // adding toogle and the information page along with about us and a demo video.
    render(){
        return (
            <div className="container">
            <div className="header">
                <h2>PATH VISUALIZER</h2>
                <select>
                    <option value="select the algorithm to visualize the path"></option>
                        <option value="dijkstra">dijkstra</option>
                        <option value="dfs">DFS</option>
                        <option value="bfs">BFS</option>
                        <option value="a*">A*</option>
                </select>
                <button>visualize algorithm</button>
            </div>
            </div>
        );
    }
}

export default Heading;