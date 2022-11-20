import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{LinkContainer} from 'react-router-bootstrap'


const Mainnav = () => {


   
  return (
   
//  <>hi</>

        <Navbar expand="lg"  style={{background:"#cc202e"}}>
          <Container> 
           
            <LinkContainer to='/'>
            <Navbar.Brand >Medi-Canteen</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer to='/food'>
                <Nav.Link>Explore Menu</Nav.Link></LinkContainer>
                <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link></LinkContainer>
                <LinkContainer to='/bill'>
                <Nav.Link>Bill</Nav.Link></LinkContainer>
                <LinkContainer to='/cart'>
                <Nav.Link>Cart</Nav.Link></LinkContainer>
                <LinkContainer to='/about'>
                <Nav.Link>About Us</Nav.Link></LinkContainer>
          
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
   
    
    // export default BasicExample;
  )
}





export default Mainnav