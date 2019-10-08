import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import pathfinder from '../pathfinder/pathfinder';
import Heading from './Heading';

class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact="true" to="/" component={Heading}></Route>
                    <Route heading="true" to="/path-finding" component={pathfinder}></Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routing;