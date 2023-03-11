import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action="true">
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action="true">
                add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-couses" action="true">
                view Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action="true">
                About 
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action="true">
                contact us
            </Link>
        </ListGroup>
        
    );
};

export default Menus;