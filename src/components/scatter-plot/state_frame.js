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
            stateData: {}
        }

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

    render(){
        return(
            <StyledDiv>
            {this.state.hiding ? <Category selectedState={this.state.stateData}/> : <ScatterplotFrame onChange={this.onchange}/>}
            </StyledDiv>
        );
    }


}


export default StateFrame;