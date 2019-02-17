import React, { Component } from 'react';
import styled from 'styled-components'
import colors from '../../data/colors.js'
import {Button} from 'reactstrap';

const Circle = styled.div`
height: 250px;
 width: 250px;
 background-color: black;
 border-radius: 50%;
 text-align: center;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const StyledAreaCodeText = styled.p`
font-size: 60px;
color: white;
`

const StyledAreaNameText = styled.p`
color:white;
font-size:30px;
`

const StyledBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StyledButtonBody = styled.div`
display: flex;
flex-direction: column;
justify-content:space-around;
align-items:space-around;
`

const StyledButtonRow = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:space-around;
`

const DividerBlock = styled.div`
    width:15px;
    height:auto;
    display:inline-block;
 `


class Category extends Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(value){
        this.props.onAxisChange(value);
    }

    render() {
        return (<StyledBody><Circle style={{opacity: .5, backgroundColor: colors[this.props.selectedState.state.toUpperCase()]}}>
        <StyledAreaCodeText>{this.props.selectedState.state}</StyledAreaCodeText>
            <StyledAreaNameText>{this.props.selectedState.areaName}</StyledAreaNameText>
        </Circle>
            <br/>
            <StyledButtonRow>
                <StyledButtonBody>
                <Button outline color='primary' onClick={() => this.onClick('Employed')}>Employed</Button>
                    <br/>
                <Button outline color='primary' onClick={() => this.onClick('Unemployed')}>Unemployed</Button>
                    <br/>
                <Button outline color='primary' onClick={() => this.onClick('Median Household Income')}>Median Income</Button>
                    <br/>
                </StyledButtonBody>
                <DividerBlock/>
                <StyledButtonBody>
                <Button outline color='primary' onClick={() => this.onClick('Civilian labor force')}>Labor Force</Button>
                    <br/>
                <Button outline color='primary' onClick={() => this.onClick('property tax')}>Property Tax</Button>
                    <br/>
                <Button outline color='primary' onClick={() => this.onClick('sales tax')}>Sales Tax</Button>
                    <br/>
                </StyledButtonBody>
                <DividerBlock/>
                <StyledButtonBody>
                <Button outline color='primary' onClick={() => this.onClick('violent crime')}>Crime</Button>
                    <br/>
                <Button outline color='primary' onClick={() => this.onClick('avg house value')}>Avg Home Prices</Button>
                    <br/>
                <Button outline color='primary' onClick={() => this.onClick('education ranking')}>Education</Button>
                    <br/>
                </StyledButtonBody>
            </StyledButtonRow>
        </StyledBody>);
    }
  }

export default Category