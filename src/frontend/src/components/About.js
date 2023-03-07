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
padding: 15px;
background-color: #ffff00;
color: #353935;
grid-column: 6/11;
grid-row: 1/2;
font-weight: 500;
`
const DivText = styled.div`
padding: 15px;
background-color: #353935;
color: white;
grid-column: 1/6;
grid-row: 1/2;
order: 2;
text-align: left;
font-weight: 500;
`

const HobbyDiv = styled.div`
padding: 15px;
background-color: #f5f5f5;
color: #54555C;
grid-column: 1/7;
grid-row: 2/2;
order: 2;
text-align: left;
font-weight: 500;
`
const EduDiv = styled.div`
padding: 15px;
background-color: #999999;
color: white;
grid-column: 7/11;
grid-row: 2/2;
font-weight: 500;
`
const Span = styled.span`
    color: #FFFF00;
  background-color: #353935;
  padding: 0.1rem;
`

const About = () => (
    <Box>
        <Article>
            <DivImg>
                <h1><strong>Tools and technologies used :</strong></h1>
                <UL>
                    <li><h4><strong>- Spring Boot 3</strong></h4></li>
                    <li><h4><strong>- HTTP & API development</strong></h4></li>
                    <li><h4><strong>- Front-end development (React|Ant Design|Framer Motion)</strong></h4></li>
                    <li><h4><strong>- Maven Build Tool</strong></h4></li>
                    <li><h4><strong>- Database (Postgres on Docker)</strong></h4></li>
                    <li><h4><strong>- Spring Data JPA</strong></h4></li>
                    <li><h4><strong>- Server and Client Side Error Handling</strong></h4></li>
                    <li><h4><strong>- Packaging applications for deployment (Docker and Jib)</strong></h4></li>
                    <li><h4><strong>- AWS (RDS & Elastic Beanstalk)</strong></h4></li>
                    <li><h4><strong>- Software Deployment Automation (GitHub Actions)</strong></h4></li>
                    <li><h4><strong>- Software Deployment Monitoring (Slack)</strong></h4></li>
                    <li><h4><strong>- Unit and Integration Testing (JUnit5)</strong></h4></li>

                </UL>


            </DivImg>
            <DivText>
                <h1><strong>About Us</strong></h1>
                <br/>
                <br/>
                <br/>
                <h2><strong>We are non-formal tech education provider.</strong></h2>
                <br/>
                {/*<h3>A digital learning environment that manages content and learners.</h3>*/}
                <br/>
                <h3><strong>We value quality.</strong></h3>


            </DivText>
            <EduDiv>
                <h1><strong>Mission</strong></h1>
                <p><strong><Span>In7Minutes.</Span>'s mission is to provide 7-min high quality computer science mini lessons.</strong></p>
            </EduDiv>
            <HobbyDiv>
                <h1><strong>Vision</strong></h1>
                <p><strong><Span>In7Minutes.</Span>'s concept-based vision statement:</strong></p>
                <p><strong><blockquote>"We Simplify."</blockquote></strong></p>
            </HobbyDiv>

        </Article>

    </Box>
);

export default About;