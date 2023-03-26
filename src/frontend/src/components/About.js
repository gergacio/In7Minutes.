import React from "react";
import styled from 'styled-components';
import AboutLogo from "./AboutLogo";

const Box = styled.div`
//margin-top:120px;
font-size: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 60vh;
@media (min-width: 550px) {
  font-size: 1.2rem;
  flex-direction: row;
}
@media (min-width: 850px) {
  font-size: 1.5rem;
  flex-direction: row;
}
`

const UL = styled.ul`
padding-left: 8rem;
  justify-content: flex-end;
  list-style:none;
  background-color: #f2f2f2;

`
const Article = styled.article`
//padding: 180px 15px 0px 15px;
background-color: #f4f4f4;
display: grid;
@media (min-width: 550px) {
  grid-auto-rows: minmax(50px,auto);
  font-weight: 500;
  font-size: 1rem;
}
@media (min-width: 850px) {
  grid-template-columns: repeat(10,1fr);
  font-weight: 800;
  font-size: 1.4rem;
}
`
const TechStack = styled.div`
//padding: 55px;

border-right: 2rem solid #f5f5f5;
border-left: 5rem solid #f5f5f5;
background-color: #353935;
font-weight: 500;
grid-column: 8/11;
grid-row: 2/2;
order: 2;
`
const TechStack1 = styled.div`
padding: 15px;
//border-left: 1rem solid #f5f5f5;
background-color: #ffff00;
color: #353935;
grid-column: 1/8;
grid-row: 2/2;
font-weight: 500;
`
const AboutUs = styled.div`
//border-top: 0.5rem solid #353935;
background-color: #f5f5f5;
padding: 35px;
grid-column: 6/11;
grid-row: 1/1;
order: 2;
text-align: left;
font-weight: 500;
`
const AboutUsIn = styled.div`
padding: 1rem;
border-bottom: 6rem solid #353935;
background-color: #f5f5f5;

`

const AboutUs1 = styled.div`
padding-top:10rem;
border-top: 3rem solid #f5f5f5;
background-color: #353935;
grid-column: 1/6;
grid-row: 1/1;
order: 2;
`

const Mission = styled.div`
padding: 25px;
background-color: #353935;
grid-column: 1/3;
grid-row: 3/3;
order: 2;
text-align: left;
font-weight: 500;
`
const Vision = styled.div`
padding: 25px;
background-color: #f5f5f5;

grid-column: 3/11;
grid-row: 3/3;
font-weight: 500;
`
const Mission1 = styled.div`
padding: 25px;
background-color:  #f5f5f5;
color: #353935;
grid-column: 1/5;
grid-row: 4/4;
order: 2;
text-align: left;
font-weight: 500;
`
const Vision1 = styled.div`
padding: 3rem;
background-color: yellow;
grid-column: 5/11;
grid-row: 4/4;
font-weight: 500;
`
const Span = styled.span`
    color: #FFFF00;
  background-color: #353839;
  padding: 0.1rem;
`
const V = styled.div`
   border-bottom: 8rem solid #353935;
`
const V1 = styled.div`
padding-left: 17rem;
`


const About = () => (
    <Box>
        <Article>
            <TechStack1>
                <br/>
                <h2><strong><Span>In<strong>7</strong>Minutes.</Span> TECH STACK</strong></h2>
                <br/>

                <UL>
                    <br/>
                     <br/>
                          <br/>

                    <li><h3><strong>Software Development</strong></h3></li>

                      <li><h4><strong> Databases -  MongoDB | H2 | PostgreSQL  </strong></h4></li>

                    <li><h4><strong> Code Editor / IDE - Visual Studio Code | Intellij IDEA </strong></h4></li>


                    <li><h4><strong> Programming Languages - SQL | JavaScript | Java  </strong></h4></li>

                    <li><h4><strong> Front-end Dev Tools - HTML | CSS | React | Ant Design | Framer Motion</strong></h4></li>
                    <li><h4><strong> Web Frameworks - Express | Spring Boot  </strong></h4></li>
                    <li><h4><strong> Testing Frameworks - Jest | JUnit </strong></h4></li>
                    <li><h4><strong> Text Editors - Notepad ++ | Vim </strong></h4></li>
                             <br/>
                                      <br/>

                    <li><h3><strong> DevOps </strong></h3></li>
                    <li><h4><strong> Cloud - Amazon Web Services S3 | RDS | EC2 | Elastic Beanstalk </strong></h4></li>
                    <li><h4><strong> Packaging applications for deployment - Docker | Jib </strong></h4></li>
                    <li><h4><strong>Software Deployment Automation - GitHub Actions </strong></h4></li>
                    <li><h4><strong> Software Deployment Monitoring - Slack </strong></h4></li>
                    <li><h4><strong>Code Management Tools - Git | GitHub </strong></h4></li>

                      <br/>
                    <br/>
                             <br/>

                </UL>
                <br/>
                <br/>
            </TechStack1>
             <TechStack>

             </TechStack>

            <AboutUs>
                <AboutUsIn>
                <h2><strong>About Us</strong></h2>
                <br/>

                <h2><strong>We are non-formal tech education provider.</strong></h2>
                <br/>

                <h3><strong>We help people to understand computers.</strong></h3>
                {/*<h3>A digital learning environment that manages content and learners.</h3>*/}
                <br/>
                 </AboutUsIn>
            </AboutUs>

             <AboutUs1>
                    <br/>
                    <AboutLogo/>
              </AboutUs1>

            <Vision>
                <V>
                 <h2><strong>Mission</strong></h2>
                 <br/>
                 <h3><strong>Our mission is to provide high quality computer science mini lessons.</strong></h3>
                 <br/>


                 </V>
                 <V1>
                   <br/>
                 <h2><strong>Vision & Values</strong></h2>
                 <br/>
                 <h3><strong>Our concept-based vision statement is “We simplify”.</strong></h3>
                 <br/>
                 <h3><strong>We value quality.</strong></h3>
                   <br/>
                   </V1>
            </Vision>
            <Mission>

            </Mission>
                   <Vision1>
                    <br/>
                    <br/>
                    <br/>

                    </Vision1>
                    <Mission1>

                    </Mission1>
        </Article>

    </Box>
);

export default About;