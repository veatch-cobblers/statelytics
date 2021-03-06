import React, {Component} from 'react'
import {Container} from "reactstrap";
// import Map from "./map";
import Axis from "../axis";
import styled from "styled-components";
import ScatterPlot from "./scatter-plot";
import { FaLongArrowAltRight, FaLongArrowAltUp } from "react-icons/fa";


const StyledContainer = styled(Container)`
display: flex;
border: 1px solid black;
border-radius:25px;
padding: 25px;
background: none !important;
`

const StyledLegend = styled.div`
display: flex;
justify-content:space-between;
`


const axis_titles= ["Civilian labor force", "Employed", "Unemployed", "Unemployment rate", "Median Household Income", "sales tax", "property tax", "vehicle tax", "violent crime", "avg house value", "education ranking"];
class ScatterplotFrame extends Component{

    constructor(props){
        super(props);
        this.state = {
            y_index: 4,
            x_index: axis_titles.findIndex((d) => d === props.xAxis),
            year_index: 8
        };
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
                <FaLongArrowAltUp/>
                <StyledContainer>
                    <div className={"outer"}>
                        <Axis axisStyle={"y_axis"} title={axis_titles[this.state.y_index]} onChange={this.onYchange} />
                    </div>
                    <div>
                        <ScatterPlot changeView={this.props.onChange} yMetric={axis_titles[this.state.x_index]} xMetric={axis_titles[this.state.y_index]}/>
                    </div>
                </StyledContainer>
                <StyledLegend>
                <p>0</p>
                    <p><FaLongArrowAltRight/></p>
                </StyledLegend>
                <Axis axisStyle={"x_axis"} title={axis_titles[this.state.x_index]} onChange={this.onXchange}/>
            </div>

        );
    }
}


export default ScatterplotFrame