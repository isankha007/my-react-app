import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>
                add Course
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view-couses" action>
                view Courses
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>
                About 
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>
                contact us
            </ListGroupItem>
        </ListGroup>
        
    );
};

export default Menus;