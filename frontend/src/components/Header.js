import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand>Pro Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart mr-1'></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/user'>
                <Nav.Link>
                  <i className='fas fa-user mr-1'></i>Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
