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

const StyledText = styled.p`
font-size: 60px;
color: white;
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
        alert(value);
        this.props.onAxisChange(value);
    }

    render() {
        return (<StyledBody><Circle style={{opacity: .5, backgroundColor: colors[this.props.selectedState.state.toUpperCase()]}}>
        <StyledText>{this.props.selectedState.state}</StyledText>
        </Circle>
            <br/>
            <StyledButtonRow>
                <StyledButtonBody>
                <Button outline color='primary' onClick={() => this.onClick('Employed')}>Employed</Button>
                    <br/>
                <Button outline color='primary'>Unemployed</Button>
                    <br/>
                <Button outline color='primary'>Median Income</Button>
                    <br/>
                </StyledButtonBody>
                <DividerBlock/>
                <StyledButtonBody>
                <Button outline color='primary'>Labor Force</Button>
                    <br/>
                <Button outline color='primary'>Tax</Button>
                    <br/>
                <Button outline color='primary'>Homeless Pop</Button>
                    <br/>
                </StyledButtonBody>
                <DividerBlock/>
                <StyledButtonBody>
                <Button outline color='primary'>Crime</Button>
                    <br/>
                <Button outline color='primary'>Avg Home Prices</Button>
                    <br/>
                <Button outline color='primary'>Education</Button>
                    <br/>
                </StyledButtonBody>
            </StyledButtonRow>
        </StyledBody>);
    }
  }

export default Category