import React from "react";

import Link from "next/link";

import { GiKnifeFork } from "react-icons/gi";

import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import SearchRecipe from "./SearchRecipe";

function NavRecipe() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <GiKnifeFork></GiKnifeFork>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Italian</Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Italian</NavDropdown.Item>

                <NavDropdown.Item href="#action4">American</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <SearchRecipe></SearchRecipe>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavRecipe;
