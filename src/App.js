import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";
import {Jumbotron, Container, Button} from 'reactstrap';
import Header from "./components/base/header";

import styled from 'styled-components';

const StyledJumbo = styled(Jumbotron)`
border:10px;
background:rgba(204, 204, 204, 0);
`



class App extends Component {
  render() {
    return (
        <div>
            <Map id={"FIPStxt"} rankingMetric={'Unemployment_rate_2008'}/>

                <Header/>

            <div>
               <StyledJumbo >
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
