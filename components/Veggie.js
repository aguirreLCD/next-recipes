/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";

import { Container, Row, Card, Col } from "react-bootstrap";

import Link from "next/link";

import styles from "../styles/Category.module.css";

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
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6&tags=vegetarian`
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
              <h2 className={styles.title}>Veggie Picks</h2>
            </Col>
          </Row>
        </Container>

        <Row xs={1} md={3} className="g-4">
          {veggie.map((recipe) => (
            <Col key={recipe.id}>
              <Link
                href={{
                  pathname: "/recipedetails/",
                  query: { recipeid: `${recipe.id}` },
                }}
                passHref
              >
                <Card className={styles.category}>
                  <Card.Img
                    className={styles.category}
                    layout="fill"
                    variant="top"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <Card.Body className={styles.categorycard}>
                    <Card.Title className={styles.categorytitle}>
                      {recipe.title}
                    </Card.Title>

                    <Card.Text></Card.Text>
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
