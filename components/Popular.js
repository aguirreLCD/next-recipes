import React, { useEffect, useState } from "react";

import { Container, Row, Card, Col } from "react-bootstrap";

import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Popular() {
  const [popular, setPopular] = useState([]);
  console.log(popular);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    console.log(JSON.parse(check));

    if (check) {
      console.log(JSON.parse(check));
      // console.log(check);
      setPopular(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=5`
        );

        const data = await api.json();

        localStorage.setItem("popular", JSON.stringify(data.recipes));

        console.log(data);

        setPopular(data.recipes);

        console.log(data.recipes);
      }
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <Container fluid>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2>Popular Picks</h2>
            </Col>
          </Row>
        </Container>

        <Row xs={1} md={3} className="g-4">
          {popular.map((recipe) => (
            <Col key={recipe.id}>
              <Link
                href={{
                  pathname: "/recipedetails/",
                  query: { recipeid: `${recipe.id}` },
                }}
                passHref
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
