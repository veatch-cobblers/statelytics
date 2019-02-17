import React, { Component } from 'react';
import './components/map/unemployment_us_map.css';
import {Jumbotron} from 'reactstrap';
import styled from 'styled-components';
import MapFrame from "./components/map/map_frame";
import ScatterplotFrame from "./components/scatter-plot/scatterplot_frame";


const StyledJumbo = styled(Jumbotron)`
background:none !important;
`




class App extends Component {
  render() {
    return (
        <div>
            <div>
                <StyledJumbo>
                  {/*<MapFrame />*/}
                  <ScatterplotFrame/>
                </StyledJumbo>
            </div>
        </div>
    );
  }
}

export default App;