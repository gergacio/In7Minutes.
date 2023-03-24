import React from "react";
import styled from 'styled-components';


const LogoHeading = styled.h4`
font-size: 4rem;
display: flex;
justify-content: center;
align-items: center;
margin-right:20px;
padding:0;
`
const Seven = styled.span`
  font-weight: bolder;
  font-variant-numeric: tabular-nums;
  color: white;
`

const AboutLogo = () => {


    return(
        <LogoHeading>
            <div>
                <h4><strong><Seven>In7Minutes.</Seven></strong></h4>
            </div>


        </LogoHeading>

    );
}

export default AboutLogo;