import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";

class App extends Component {
  render() {
    return (
        <div>
            <Map />
        </div>
    );
  }
}

export default App;
