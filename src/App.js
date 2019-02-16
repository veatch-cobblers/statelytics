import React, { Component } from 'react';
import logo from './logo.svg';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";

class App extends Component {
  render() {
    return (
        <div>
            <Map id={"FIPStxt"} rankingMetric={'Unemployment_rate_2008'}/>
        </div>
    );
  }
}

export default App;
