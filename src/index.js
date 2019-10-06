import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Path from "./component/pathfinder/pathfinder";
import Heading from "./component/basicfiles/Heading";
import * as serviceWorker from './serviceWorker';
class Jsx extends React.Component{
    render(){
        return(
            <div>
                <Heading/>
                <Path/>
            </div>
        )

    }
}
ReactDOM.render(<Jsx />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
