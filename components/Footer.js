import React from "react";
import { Card, Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Card
        className="text-center"
        // border="light"
        bg="dark"
        // styles={{ height: "5rem" }}
        text="light"
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text> */}
          <Button variant="light">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
}

export default Footer;
