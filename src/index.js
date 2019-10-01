import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from "./component/Grid";
import * as serviceWorker from './serviceWorker';
class Jsx extends React.Component{
    render(){
        return(
            <div>
                <Grid/>
            </div>
        )

    }
}
ReactDOM.render(<Jsx />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
