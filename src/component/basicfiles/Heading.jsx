import React, { Component } from 'react';
import Selectalgo from "./selectalgo";
class Heading extends Component {
    render() {
        return (
            <div className="heading">
                <h2>PATH VISUALIZER</h2>
                <Selectalgo/>
            </div>
        );
    }
}

export default Heading;