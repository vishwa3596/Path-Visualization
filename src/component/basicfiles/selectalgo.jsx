import React, { Component } from 'react';

class Selectalgo extends Component {
    render() {
        return (
            <div>
                <select>
                    <option value="select the algorithm to visualize the path"></option>
                        <option value="dijkstra">dijkstra</option>
                        <option value="dfs">DFS</option>
                        <option value="bfs">BFS</option>
                        <option value="a*">A*</option>
                </select>
            </div>
        );
    }
}

export default Selectalgo;