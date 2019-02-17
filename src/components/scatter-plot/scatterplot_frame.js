import React, {Component} from 'react'
import {Container} from "reactstrap";
// import Map from "./map";
import Axis from "../axis";
import styled from "styled-components";
import ScatterPlot from "./scatter-plot";

const StyledContainer = styled(Container)`
display: flex;
`

const years=  ["2007","2008", "2009", "2010", "2012", "2013", "2014", "2015", "2016", "2017"],
    axis_titles= ["Employed", "Median_Household_Income", "Civilian_labor_force"];

class ScatterplotFrame extends Component{

    constructor(props){
        super(props);
        this.state = {
            y_index: 1,
            x_index: 0,
            year_index: 8
        }
        this.onXchange = this.onXchange.bind(this);
        this.onYchange = this.onYchange.bind(this);
    }

    onXchange(dir){
        let value = this.state.x_index + (dir === true ? 1 : -1);
        if(value === axis_titles.length || value < 0){
            value = value < 0 ? (axis_titles.length - 1) : 0;
        }
        this.setState({
            x_index: value
        });
    }

    onYchange(dir){
        let value = this.state.y_index + (dir === true ? 1 : -1);
        if(value === axis_titles.length || value < 0){
            value = value < 0 ? (axis_titles.length - 1) : 0;
        }
        console.log(value);
        this.setState({
            y_index: value
        });
    }

    render(){
        return(
            <div>
                <StyledContainer>
                    <div className={"outer"}>
                        <Axis axisStyle={"y_axis"} title={axis_titles[this.state.y_index]} onChange={this.onYchange} />
                    </div>
                    <div>
                        <ScatterPlot yMetric={axis_titles[this.state.x_index]} xMetric={axis_titles[this.state.y_index]} year={years[this.state.year_index]}/>
                    </div>
                </StyledContainer>
                <Axis axisStyle={"x_axis"} title={axis_titles[this.state.x_index]} onChange={this.onXchange}/>
            </div>

        );
    }
}


export default ScatterplotFrame