import React, { useState,useEffect  } from "react";
import { Button } from "reactstrap";
import Course from "./Course";
import base_url from "../Api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";


const AllCourse=()=>{
    useEffect(()=>{
        document.title="All Coursed";

    },[]);

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/api-v1/courses`).then(
            (response)=>{
                    //success
                    console.log(response.data);
                    toast.success("Couses Loaded");
                    setCourses(response.data);
            },
            (error)=>{
                    console.log(error)
            }

        );
    };
//calling loading coursed funtion
useEffect(()=>{
    getAllCoursesFromServer();
},[]);


    const [courses, setCourses]=useState([])

    return(
        <div>
            {/* <Button
            onClick={()=>{
                setCourses([...courses,
                    {title:"Reactjs Course",description:"This is reactjs course"}
                ]);

            }}>
                TEST
            </Button> */}
            <h1>
                All Courses
            </h1>
            <p>
               {
                 courses.length > 0 ? courses.map((item)=><Course key={item.id} course={item}/>) 
                 :"no courses"
               }
            </p>
        </div>

    );
}

export default AllCourse;