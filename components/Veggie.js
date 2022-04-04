import React, { useEffect, useState } from "react";

import { Container, Row, Card, Col } from "react-bootstrap";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Veggie() {
  const [veggie, setVeggie] = useState([]);
  console.log(veggie);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    console.log(JSON.parse(check));

    if (check) {
      console.log(JSON.parse(check));
      // console.log(check);
      setVeggie(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=5&tags=vegetarian`
        );

        const data = await api.json();

        localStorage.setItem("veggie", JSON.stringify(data.recipes));

        console.log(data);

        setVeggie(data.recipes);

        console.log(data.recipes);
      }
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  console.log(veggie);

  return (
    <>
      <Container fluid>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2>Veggie Picks</h2>
            </Col>
          </Row>
        </Container>

        <Row xs={1} md={3} className="g-4">
          {veggie.map((recipe) => (
            <Col key={recipe.id}>
              <Card>
                <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
