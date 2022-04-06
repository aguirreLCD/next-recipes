import React, { useEffect, useState } from "react";

import { Container, Row, Card, Col, Button } from "react-bootstrap";

import { useRouter } from "next/router";
import styles from "../styles/Category.module.css";

import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  console.log(cuisine);

  const router = useRouter();

  console.log(router.query.slug);

  let {
    query: { slug },
  } = router;

  console.log(router);
  //   console.log(router.components);

  const getCuisine = async () => {
    console.log(router.query.slug);

    const check = localStorage.getItem(`${router.query.slug}`);
    console.log(JSON.parse(check));

    if (check) {
      console.log(JSON.parse(check));
      // console.log(check);
      setCuisine(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=6&cuisine=${router.query.slug}`
        );

        const recipes = await data.json();

        localStorage.setItem(
          `${router.query.slug}`,
          JSON.stringify(recipes.results)
        );

        console.log(recipes);

        console.log(recipes.results);

        setCuisine(recipes.results);
      }
    }
  };

  useEffect(() => {
    getCuisine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2 className={styles.title}>{router.query.slug} Cuisine</h2>
            </Col>
          </Row>
        </Container>

        <Row xs={1} md={3} className="g-4">
          {cuisine.map((item) => (
            <Col key={item.id}>
              <Link
                href={{
                  pathname: "/recipedetails/",
                  query: { recipeid: `${item.id}` },
                }}
                passHref
              >
                <Card>
                  <Card.Img variant="top" src={item.image} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
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

export default Cuisine;
