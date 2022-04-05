import React, { useEffect, useState } from "react";

import { Container, Row, Card, Col } from "react-bootstrap";

import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Nordic() {
  const [nordic, setNordic] = useState([]);
  console.log(nordic);

  const getNordic = async () => {
    const check = localStorage.getItem("nordic");
    // console.log(JSON.parse(check));

    if (check) {
      //   console.log(JSON.parse(check));
      // console.log(check);
      setNordic(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=5&cuisine=nordic`
        );

        const data = await api.json();

        localStorage.setItem("nordic", JSON.stringify(data.results));

        console.log(data);

        setNordic(data.results);

        console.log(data.results);
      }
    }
  };

  useEffect(() => {
    getNordic();
  }, []);

  console.log(nordic);

  return (
    <>
      <Container fluid>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2>Nordic Picks</h2>
            </Col>
          </Row>
        </Container>

        <Row xs={1} md={3} className="g-4">
          {nordic.map((recipe) => (
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