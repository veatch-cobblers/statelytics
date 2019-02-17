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
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </StyledBody>);
    }
  }

export default Category