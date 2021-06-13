import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #274472;
  color: white;
  font-family: Montserrat;
  font-weight: 300;

  &:hover {
    background: none;
    border: 1px solid #274472;
  }
`;

const SVG = styled.svg`
  margin-left: 10px;
  margin-right: 10px;
`;

const Form = styled.form`
  width: auto;
  height: auto;
  display: flex;
  justify-content: row;
  flex-wrap: nowrap;
`;

const NavbarComponent = () => {
  const [searchbarState, setSearchbar] = useState('');

  return (
    <Navbar style={{ borderBottom: '1px solid #274472' }} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(searchbarState);
              }}
            >
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={searchbarState}
                onChange={(e) => setSearchbar(e.target.value)}
              />
              <Button
                className="btn btn-outline"
                style={{
                  textTransform: 'lowercase',
                  marginLeft: '10px',
                }}
              >
                search
              </Button>
            </Form>
          </Nav>

          <div className="navbarEnd">
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </SVG>

            <SVG
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-cart"
              style={{ marginBottom: '2px' }}
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </SVG>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
