import React, {Component} from 'react'
import {Container} from "reactstrap";
import Map from "./map";
import Axis from "../axis";
import styled from "styled-components";
import {schemeBlues, schemeGreens, schemePurples} from "d3-scale-chromatic";
import {schemeOranges, schemeReds} from "d3";
const StyledContainer = styled(Container)`
display: flex;
border: 1px solid black;
border-radius:25px;
padding: 25px;
`

const y_titles = ["2007", "2008", "2009", "2010", "2012", "2013", "2014", "2015", "2016", "2017"],
    x_titles = ["Unemployment_rate", "Employed", "Civilian_labor_force", 'Murder','Rape','Robbery','Aggrevated Assault','Burglary','Larceny','Vehicle Theft','Arson'],
    x_colors = [schemeGreens[9],schemeBlues[9], schemePurples[9], schemeReds[9], schemeOranges[9], schemeBlues[9], schemeGreens[9], schemePurples[9], schemeReds[9], schemePurples[9], schemeReds[9]];

class MapFrame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            y_index: 0,
            x_index: 0
        };
        this.onXchange = this.onXchange.bind(this);
        this.onYchange = this.onYchange.bind(this);
    }

    onXchange(dir) {
        let value = this.state.x_index + (dir === true ? 1 : -1);
        if (value === x_titles.length || value < 0) {
            value = value < 0 ? (x_titles.length - 1) : 0;
        }
        this.setState({
            x_index: value
        });
    }

    onYchange(dir) {
        let value = this.state.y_index + (dir === true ? 1 : -1);
        if (value === y_titles.length || value < 0) {
            value = value < 0 ? (y_titles.length - 1) : 0;
        }
        this.setState({
            y_index: value
        });
    }

    // onChange(stateData){
    //     alert(stateData);
    //     this.props.changeState();
    // }

    render() {
        return (
            <div>
                <StyledContainer>
                    <div className={"outer"}>
                        <Axis axisStyle={"y_axis"} title={y_titles[this.state.y_index]} onChange={this.onYchange}/>
                    </div>
                    <div>
                        <Map changeView={this.props.onChange} id={"FIPStxt"} color={x_colors[this.state.x_index]}
                             rankingMetric={this.state.x_index > 2 ? x_titles[this.state.x_index] : x_titles[this.state.x_index] + '_' + y_titles[this.state.y_index]}/>
                    </div>
                </StyledContainer>
                <Axis axisStyle={"x_axis"} title={x_titles[this.state.x_index]} onChange={this.onXchange}/>
            </div>

        );
    }
}


export default MapFrame