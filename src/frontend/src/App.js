import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
//import components
import styled from "styled-components";
import Home from "./components/Home";
import StudentContainer from "./containers/StudentContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import LessonContainer from "./containers/LessonContainer";
import CourseContainer from "./containers/CourseContainer";
import BookingContainer from "./containers/BookingContainer";
import CreateForm from "./components/CreateForm";





//display parent as flex
const StyledRouter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content:space-between;

`
function App() {
    //render router with all routes(components)
    return (

        <Router>
            <StyledRouter>
                <Header/>
                <Routes>
                    <Route exact path="/" element={< Home />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/courses" element={< CourseContainer />} />
                    <Route path="/lessons" element={< LessonContainer />} />
                    {/*<Route path="/create" element={< CreateForm />} />*/}
                    <Route path="/students" element={< StudentContainer />} />
                    <Route path="/bookings" element={< BookingContainer />} />

                    <Route path="*" element={< ErrorPage />}/>
                </ Routes>
                <Footer />
            </StyledRouter>
        </Router>
    );
}

export default App;