import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourse from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './Components/Header';
import Menus from './Components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const btnHandle = ()=>{
      toast("this is my 1st msg",{position:"top-center"});
    };

  return (
    <div>
      <Router>
      <ToastContainer/>
      <Container>
        <Header/>
       <Row>
        <Col md={4}>
          <Menus/>
        </Col>
        <Col md={8}>
        <Routes>
          <Route path='/' Component={Home} exact />
          <Route path='/add-course' Component={AddCourse} exact />
          <Route path='/view-couses' Component={AllCourse} exact />
        </Routes>
          
         
        </Col>
       </Row>
       </Container>
      </Router>
    </div>
    
  //  <div>
  //   <Header name="Sankhadeep"  title="first card"/>
  //   <hr/>
  //   <Header name="Nemo" title="second card"/>
  //   <h1>This is my test app</h1>
  //    <p>This is my paragraph</p>
  //  </div>
   );
}

export default App;
