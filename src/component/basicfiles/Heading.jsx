import React, { Component } from 'react';
import Selectalgo from "./selectalgo";
import "./heading.css";
class Heading extends Component {
    // adding toogle and the information page along with about us and a demo video.
    render(){
        return (
            <div className="header">
                <h2>PATH VISUALIZER</h2>
                <Selectalgo/>
            </div>
        );
    }
}

export default Heading;