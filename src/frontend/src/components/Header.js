import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar";


const Box = styled.div`
color: #353935;
background-color: #FFFF00;
display: flex;
flex-direction:column;
justify-content: center;
align-items: start;
width: 100%;
padding: 15px;
`


const Header = () => {
    return(
        <Box>
            <br/>
            <NavBar />
        </Box>
    );
}

export default Header;