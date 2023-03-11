import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse=()=>{

    return <Fragment>
        <h1 className="text-center my-3" >Fill Course Details </h1>
      <Form className="text-center">
        <FormGroup >
            <label for="title">Course Title</label>
            <Input className="text-center" type="text" placeholder="Enter title Here" name="title" id="title" />
        </FormGroup>
        <FormGroup >
            <label for="description">Course Description</label>
            <Input className="text-center" type="textarea" placeholder="Enter description  Here" name="description" 
            id="description" style={{height:150}} />
        </FormGroup>
        <Container className="text-center">
            <Button color="success ml-3">Add Course</Button>
            <Button color="warning ml-5">clear </Button>
        </Container>
      
      </Form>
    </Fragment>   
    
};

export default AddCourse;