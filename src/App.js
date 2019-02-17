import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import {Jumbotron} from 'reactstrap';
import styled from 'styled-components';
import MapFrame from "./components/map/map_frame";


const StyledJumbo = styled(Jumbotron)`
background:none !important;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledMapFrame = styled(MapFrame)`
justify-content: center;
border: 5px solid black;
`



class App extends Component {
  render() {
    return (
        <div>
            <div>
                <StyledJumbo>
                  <MapFrame />
                </StyledJumbo>
            </div>
        </div>
    );
  }
}

export default App;