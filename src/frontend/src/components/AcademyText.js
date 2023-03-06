import React from "react";
import styled from 'styled-components';


const LogoHeading = styled.h4`
font-size: 4rem;
color:#FFFF00;
display: flex;
justify-content: center;
align-items: center;
margin-right:20px;
padding:0;

`

const AcademyText = () => {


    return(
        <LogoHeading>
            <div>
                In7Minutes.
            </div>

        </LogoHeading>

    );
}

export default AcademyText;