import React from "react";

import { Card,CardBody,CardTitle,CardSubtitle,CardFooter,CardText,Button,Container } from "reactstrap";

const Course=({course})=>{
    return(
            <Card>
                <CardBody>
                    <CardSubtitle className="text-center">{course.title}</CardSubtitle>
                    <CardText className="text-center">{course.description}</CardText>
                    <Container className="text-center">
                        <Button color="danger" >Delete</Button>
                        <Button color="warning ml-3">Update</Button>
                    </Container>
                </CardBody>

            </Card>

    );

}


export default Course;