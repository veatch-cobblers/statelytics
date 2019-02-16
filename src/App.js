import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";
import {Jumbotron, Container, Button} from 'reactstrap';
import Header from "./components/base/header";

import styled from 'styled-components';

const StyledJumbo = styled(Jumbotron)`
border:10px;
`

class App extends Component {
  render() {
    return (
        <div>

                <Header/>
            
            <div>
               <StyledJumbo style={{background: 'rgba(204, 204, 204, 0)'}}>
                   <Container>
                   <Map />
                   </Container>
               </StyledJumbo>
            </div>
        </div>
    );
  }
}

export default App;
