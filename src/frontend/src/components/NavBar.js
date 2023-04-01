import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const UL = styled.ul`
display: flex;
color: white;
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
&:hover{
color: black;
text-decoration: underline;
},
&:focus{


}
`
const LI = styled.li`
color: #353935;
`

const NavBar = () => {
    return (
    <>
    <br/>
        <UL>
                <LI>
                    <StyledLink to="/"><strong> <FontAwesomeIcon icon={faHome} /></strong></StyledLink>
                </LI>
                <LI>
                    <StyledLink to="/about"><strong>About us</strong></StyledLink>
                </LI>
                <LI>
                    <StyledLink to="/courses"><strong>Short courses</strong></StyledLink>
                </LI>
                 <LI>
                      <StyledLink to="/lessons"><strong>Mini lessons</strong></StyledLink>
                 </LI>

            </UL>

    </>


    );
}

export default NavBar;