import React from "react";
import { Container } from "reactstrap";
import { Button } from 'reactstrap';

// style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
const Home=()=>{
    return <div class="jumbotron" >
    
            <h1  className="text-center">Learn code with Nemo</h1>
            <p   className="text-center">
                This is learning Api call
            </p>
            <Container   className="text-center">
               <Button color="primary" >start Learning</Button>
            </Container>
      
    </div>
}

export default Home;