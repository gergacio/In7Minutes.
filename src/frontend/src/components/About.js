import React from "react";
import styled from 'styled-components';

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
  justify-content: flex-end;
  list-style:none;
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
const DivImg = styled.div`
padding: 25px;
background-color: #ffff00;
color: #353935;
grid-column: 6/11;
grid-row: 1/2;
font-weight: 500;
`
const DivText = styled.div`
padding: 35px;
background-color: #353935;
color: white;
grid-column: 1/6;
grid-row: 1/2;
order: 2;
text-align: left;
font-weight: 500;
`

const HobbyDiv = styled.div`
padding: 25px;
background-color: #f5f5f5;
color: #353935;
grid-column: 1/6;
grid-row: 2/2;
order: 2;
text-align: left;
font-weight: 500;
`
const EduDiv = styled.div`
padding: 25px;
background-color: #868888;
color: white;
grid-column: 6/11;
grid-row: 2/2;
font-weight: 500;
`
const Span = styled.span`
    color: #FFFF00;
  background-color: #353839;
  padding: 0.1rem;
`

const About = () => (
    <Box>
        <Article>
            <DivImg>
                <br/>
                <h3><strong><Span>In7Minutes.</Span> TECH STACK</strong></h3>
                <br/>
                <UL>
                    <li><h4> Database  (PostgreSQL)</h4></li>
                    <li><h4> Build Automation Tool (Maven)</h4></li>
                    <li><h4> HTTP & API development (Spring Boot 3)</h4></li>
                    <li><h4> Front-end development (React|Ant Design|Framer Motion)</h4></li>
                    <li><h4> Cloud Technologies (AWS - S3|RDS|EC2|Elastic Beanstalk)</h4></li>
                    <li><h4> Packaging applications for deployment (Docker and Jib)</h4></li>
                    <li><h4> Software Deployment Automation (GitHub Actions)</h4></li>
                    <li><h4> Software Deployment Monitoring (Slack)</h4></li>
                    <li><h4> Unit and Integration Testing (JUnit5)</h4></li>
                    <br/>
                </UL>
            </DivImg>
            <DivText>
                <br/>
                <h2><strong>About Us</strong></h2>
                <br/>
                <hr></hr>
                <br/>
                <br/>
                <h3><strong>We are non-formal tech education provider.</strong></h3>
                <br/>
                {/*<h3>A digital learning environment that manages content and learners.</h3>*/}
                <br/>
                <h3><strong>We value quality.</strong></h3>
            </DivText>
            <EduDiv>
                <br/>
                <h3><strong>Vision</strong></h3>
                <h4>Our concept-based vision statement is “We simplify”.</h4>
            </EduDiv>
            <HobbyDiv>
                <br/>
                <h3><strong>Mission</strong></h3>
                <h4>Our mission is to provide 7-min high quality computer science mini lessons.</h4>
            </HobbyDiv>
        </Article>

    </Box>
);

export default About;