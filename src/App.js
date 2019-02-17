import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";
import {Jumbotron, Container} from 'reactstrap';
import HeaderNav from "./components/base/headerNav";
import ScatterPlot from "./components/scatter-plot/scatter-plot";

import styled from 'styled-components';

const StyledJumbo = styled(Jumbotron)`
border:10px;
background:rgba(204, 204, 204, 0);
`



class App extends Component {
  render() {
    return (
        <div>


                <HeaderNav/>

            <div>
               <StyledJumbo >
                   <Container>
                       <Map id={"FIPStxt"} rankingMetric={'Unemployment_rate_2008'}/>
                       <ScatterPlot/>
                   </Container>
               </StyledJumbo>
            </div>
        </div>
    );
  }
}

export default App;
