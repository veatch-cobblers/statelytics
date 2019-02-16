import React from 'react'
import styled from 'styled-components';
import image from '../assets/trianglify.png';
import logo from '../assets/logo_transparent.png';

const StyledDiv = styled.div`
display:flex;
justify-content:center;
height:200px;
background-image: url(${image});
align-items:center;
`

const StyledLogo = styled.img`
height:300px;
`

const Header = () => (
    <StyledDiv>
        <StyledLogo src={logo}/>
    </StyledDiv>

)

export default Header