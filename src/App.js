import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";
import {Jumbotron, Container, Button} from 'reactstrap';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div>
           <Jumbotron>
               <Map />
           </Jumbotron>

        </div>
    );
  }
}

export default App;
