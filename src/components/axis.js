import React, {Component} from 'react'
import {Button, ButtonGroup} from "reactstrap";
import './axis.css';
import styled from 'styled-components';

const StyledButtons = styled(Button)`
background-color:#F9A1BC;
`




class Axis extends Component{

    render() {
        return(
                <div id={this.props.axisStyle}>
                <ButtonGroup >
                    <Button onClick={() => this.props.onChange(false)}>{"<"}</Button><span className={"title"}> {this.props.title.replace(/_/g, " ")}</span><Button onClick={() => this.props.onChange(true)}>{">"}</Button>
                </ButtonGroup>
                </div>
        );
    }

}

export default Axis