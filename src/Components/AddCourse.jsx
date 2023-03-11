import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../Api/BootApi";

const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Course ";

    },[]);


    const [course,setCourse]=useState({});

    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    ///creating function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/api-v1/courses/create`,data)
        .then(
            (response)=>{
                console.log(response.data);
                console.log("success");
            },
            (error)=>{
                console.log(error);
                console.log("Error");
            }
        )
    }

    return <Fragment>
        <h1 className="text-center my-3" >Fill Course Details </h1>
      <Form className="text-center" onSubmit={handleForm}>
        <FormGroup >
            <label htmlFor="title">Course Title</label>
            <Input className="text-center" type="text" placeholder="Enter title Here"
             name="title" id="title"
             onChange={(e)=>{
                setCourse({...course,title: e.target.value });
             }}
              />
        </FormGroup>
        <FormGroup >
            <label htmlFor="description">Course Description</label>
            <Input className="text-center" type="textarea" placeholder="Enter description  Here" name="description" 
            id="description" style={{height:150}} 
            onChange={(e)=>{
                setCourse({...course,description: e.target.value });
             }}
            />
        </FormGroup>
        <Container className="text-center">
            <Button type="submit" color="success ml-3">Add Course</Button>
            <Button color="warning ml-5">clear </Button>
        </Container>
      
      </Form>
    </Fragment>   
    
};

export default AddCourse;