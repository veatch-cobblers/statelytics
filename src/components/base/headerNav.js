import React, { Component } from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Tooltip} from 'reactstrap';
import styled from 'styled-components';
import logo from '../assets/logo_transparent.png';
import CountryIcon from '../assets/country_icon.png';
import StateIcon from '../assets/State_Icon.png';
import {Link} from 'react-router-dom';


const StyledLogo = styled.img`
height:100px;
`

const StyledIcon = styled.img`
height:58px;
`

const StyledNavBar = styled(Navbar)`
background:none !important;
`

const StyledNavItem = styled(NavLink)`
&:hover{
    border-bottom:2px solid red;
}
&:active{
    background:red;
}
&:focus{
    background:#F9A1BC;
}
`

export default class HeaderNav extends Component{
    constructor(props){
        super(props);
        this.toggleCountry = this.toggleCountry.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            countrytooltipOpen: false,
            statetooltipOpen: false

        };
    }

    toggleCountry() {
        this.setState({
            countrytooltipOpen: !this.state.countrytooltipOpen
        });
    }

    toggleState() {
        this.setState({
            statetooltipOpen: !this.state.statetooltipOpen
        });
    }

    render() {
        return(
        <StyledNavBar>
            <NavbarBrand href="/">
                <StyledLogo src={logo}/>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <StyledNavItem tag={Link} to="/">
                        <StyledIcon src={CountryIcon} id="CountryIconTarget"/>
                        <Tooltip placement="left" isOpen={this.state.countrytooltipOpen} target="CountryIconTarget" toggle={this.toggleCountry}>
                            County Data on National Scale
                        </Tooltip>
                    </StyledNavItem>
                </NavItem>
                <NavItem>
                    <StyledNavItem tag={Link} to="/state">
                        <StyledIcon src={StateIcon} id="StateIconTarget"/>
                        <Tooltip placement="left" isOpen={this.state.statetooltipOpen} target="StateIconTarget" toggle={this.toggleState}>
                            State Level Data
                        </Tooltip>
                    </StyledNavItem>
                </NavItem>
            </Nav>
        </StyledNavBar>
        )
    }
}

