import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import styled from 'styled-components';
import logo from '../assets/logo_transparent.png';

const StyledLogo = styled.img`
height:100px;
`

const HeaderNav = (props) => (
    <Navbar color="light" light>
        <NavbarBrand href="/">
            <StyledLogo src={logo}/>
        </NavbarBrand>
        <Nav>
            <NavItem>
                <NavLink>Country</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>State</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>Category</NavLink>
            </NavItem>

        </Nav>
    </Navbar>
)

export default HeaderNav;