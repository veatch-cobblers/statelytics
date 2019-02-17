import React, { Component } from 'react';
import styled from 'styled-components'
import colors from '../../data/colors.js'
import {Table} from "reactstrap";

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

class Category extends Component {

    render() {
        return (<StyledBody><Circle style={{opacity: .5, backgroundColor: colors[this.props.selectedState.state.toUpperCase()]}}>
        <StyledText>{this.props.selectedState.state}</StyledText>
        </Circle>
            <br/>
            <Table>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>State</th>
                    <th>Unemployed</th>
                    <th>Median Income</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th></th>
                    <th></th>
                    <td>{this.props.selectedState.areaName}</td>
                    <td>{this.props.selectedState.unemployed}</td>
                    <td>{this.props.selectedState.medianIncome}</td>
                </tr>
                </tbody>
            </Table>
        </StyledBody>);
    }
  }

export default Category