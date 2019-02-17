import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import Map from "./components/map/map";
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import HeaderNav from "./components/base/headerNav";
import ScatterPlot from "./components/scatter-plot/scatter-plot";

import styled from 'styled-components';

const StyledJumbo = styled(Jumbotron)`
background:none !important;
`



class App extends Component {
  render() {
    return (
        <div>


                <HeaderNav/>

            <div>
               <StyledJumbo >
                   <Container>
                       <Row>
                           <Col>
                               <Map id={"FIPStxt"} rankingMetric={'Unemployment_rate_2008'}/>
                           </Col>
                           <Col>
                                <ScatterPlot/>
                           </Col>
                       </Row>
                   </Container>
               </StyledJumbo>
            </div>
        </div>
    );
  }
}

export default App;
