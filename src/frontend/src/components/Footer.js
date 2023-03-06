import React from "react";
import styled from 'styled-components';
const Box = styled.div`
color: #353935;
background-color: #f5f5f5;
display: flex;
flex-direction:column; 
justify-content: center;
align-items: center;
width: 100%;
  padding: 10px;

`

const Footer = () => (
    <Box>
        <p> <small>Copyright © 2023 3GBG®. All rights reserved.</small></p>
    </Box>
);

export default Footer;