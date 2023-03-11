import React, { useState } from "react";
import Course from "./Course";

const AllCourse=()=>{
    const [courses,setCourses]=useState([
        {title:"Django Course",description:"This is python Django course"},
        {title:"Java Course",description:"This is Java course"},
        {title:"Reactjs Course",description:"This is reactjs course"}
    ])

    return(
        <div>
            <h1>
                All Courses
            </h1>
        </div>

    );
}

export default AllCourse;