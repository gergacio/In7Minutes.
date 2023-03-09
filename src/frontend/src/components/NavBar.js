import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const UL = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
list-style:none;
font-size: 1.1rem;
font-weight: bold;
flex-direction:row; 

`
const StyledLink = styled(Link)`
color: #353935;
text-decoration: none;

font-family: "Open Sans";
&:hover,
&:focus{
  text-decoration: underline;
}
`
const LI = styled.li`

`

const NavBar = () => {
    return (

        <UL>
            <LI>
                <StyledLink to="/"><strong>Home</strong></StyledLink>
            </LI>
            <LI>
                <StyledLink to="/about"><strong>About</strong></StyledLink>
            </LI>
            <LI>
                <StyledLink to="/courses"><strong>Courses</strong></StyledLink>
            </LI>
            <LI>
                <StyledLink to="/lessons"><strong>Lessons</strong></StyledLink>
            </LI>
            {/*<LI>*/}
            {/*    <StyledLink to="/create"><strong>Create</strong></StyledLink>*/}
            {/*</LI>*/}
            <LI>
                <StyledLink to="/students"><strong>Students</strong></StyledLink>
            </LI>
            <LI>
                <StyledLink to="/bookings"><strong>Bookings</strong></StyledLink>
            </LI>

        </UL>
    );
}

export default NavBar;