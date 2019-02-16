import React, { Component } from 'react';
import './App.css';
import Scatterplot from "./components/scatter-plot/scatter-plot.js"

class App extends Component {
  render() {
    return (
      <div >
        <Scatterplot />
      </div>
    );
  }
}

export default App;
