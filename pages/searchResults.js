import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Container, Row, Card, Col } from "react-bootstrap";

import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function SearchResults() {
  const router = useRouter();
  const keywordToSearch = router.query.keyword;
  console.log(router.query.keyword);
  console.log(keywordToSearch);

  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const getSearched = async (keywordToSearch) => {
    const check = localStorage.getItem(`${keywordToSearch}`);

    if (check) {
      setSearchedRecipes(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=6&query=${keywordToSearch}`
      );
      const recipesSearched = await data.json();

      localStorage.setItem(
        `${keywordToSearch}`,
        JSON.stringify(recipesSearched.results)
      );
      console.log(recipesSearched);
      setSearchedRecipes(recipesSearched.results);
      console.log(recipesSearched.results);
    }
  };

  useEffect(() => {
    getSearched(keywordToSearch);
  }, [keywordToSearch]);

  console.log(searchedRecipes);

  return (
    <>
      <Container fluid>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2>Searched Recipes</h2>
            </Col>
          </Row>
        </Container>

        <Row xs={1} md={3} className="g-4">
          {searchedRecipes.map((recipe) => (
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

export default SearchResults;
