import React, { Component } from 'react';
import './App.css';
import ScatterPlot from "./components/scatter-plot/scatter-plot.js"
import logo from './logo.svg';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";

class App extends Component {
  render() {
    return (
      <div >
        <ScatterPlot />
      </div>
    );
  }
}

export default App;
