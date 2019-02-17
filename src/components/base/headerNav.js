import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import styled from 'styled-components';
import logo from '../assets/logo_transparent.png';
import CountryIcon from '../assets/country_icon.png';
import StateIcon from '../assets/State_Icon.png';
import {Link} from 'react-router-dom';

const StyledLogo = styled.img`
height:100px;
`

const StyledIconCountry = styled.img`
height:55px;
`

const StyledIconState = styled.img`
height:60px;
`

const StyledNavBar = styled(Navbar)`
background:none !important;
`

const StyledNavItem = styled(NavLink)`
&:hover{
    background:#d4af34;
    border-color:black;
    color:white;
}
`

const HeaderNav = (props) => (
    <StyledNavBar>
        <NavbarBrand href="/">
            <StyledLogo src={logo}/>
        </NavbarBrand>
        <Nav>
            <NavItem>
                <StyledNavItem tag={Link} to="/">
                    <StyledIconCountry src={CountryIcon}/>
                </StyledNavItem>
            </NavItem>
            <NavItem>
                <StyledNavItem tag={Link} to="/state">
                    <StyledIconState src={StateIcon}/>
                </StyledNavItem>
            </NavItem>
        </Nav>
    </StyledNavBar>
)

export default HeaderNav;