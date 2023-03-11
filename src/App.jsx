import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourse from './Components/AllCourses';

function App() {
    const btnHandle = ()=>{
      toast("this is my 1st msg",{position:"top-center"});
    };

  return (
    <div>
      
      <ToastContainer/>
      <Home/>
      {/* <Course course={{title:"Django Course",description:"This is python Django course"}}/> */}
      <AllCourse/>
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
