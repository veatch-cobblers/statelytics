import React, {Component} from 'react'
import Category from "../category/category";
import ScatterplotFrame from "./scatterplot_frame";
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


class StateFrame extends Component{

    constructor(props){
        super(props);
        this.state = {
            hiding: false,
            stateData: {},
            initialXaxis: "Employed"
        };
        this.changeAxis = this.changeAxis.bind(this);
        this.onchange = this.onchange.bind(this);
    }

    onchange(stateData){
        console.log(stateData);
        console.log(this.state.hiding);
        if(!this.state.hiding){
            this.setState({
                hiding: true,
                stateData: stateData
            })
        }else{
            this.setState({
                hiding: false
            })
        }

    }

    changeAxis(x_axis) {
        this.setState({
            hiding: false,
            initialXaxis: x_axis
        })
    }


    render(){
        return(
            <StyledDiv>
            {this.state.hiding ? <Category onAxisChange={this.changeAxis} selectedState={this.state.stateData}/> : <ScatterplotFrame xAxis={this.state.initialXaxis} onChange={this.onchange}/>}
            </StyledDiv>
        );
    }


}


export default StateFrame;