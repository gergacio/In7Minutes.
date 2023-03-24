import React from "react";
import styled from 'styled-components';
import AcademyTextLogo from "./AcademyTextLogo";



const Box = styled.div`
background-color: #353935;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`


const Home = () => (
    <Box>
        <AcademyTextLogo />
    </Box>
);

export default Home;