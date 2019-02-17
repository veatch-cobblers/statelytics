import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import HeaderNav from "./components/base/headerNav";
import styled from 'styled-components';
import MapFrame from "./components/map/map_frame";

const StyledJumbo = styled(Jumbotron)`
background:none !important;
`



class App extends Component {
  render() {
    return (
        <div>


                <HeaderNav/>

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
