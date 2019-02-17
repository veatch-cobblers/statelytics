import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScatterPlotFrame from './components/scatter-plot/scatterplot_frame';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderNav from "./components/base/headerNav";
import Category from './components/category/category';

ReactDOM.render(<Router>

    <div>
        <HeaderNav/>
        <Route exact path="/" component={App} />
        <Route path="/country" component={App} />
        <Route path="/state" component={ScatterPlotFrame} />
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
