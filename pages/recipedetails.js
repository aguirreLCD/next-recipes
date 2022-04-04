import React, { useState, useEffect } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";

import Image from "next/image";
import { useRouter } from "next/router";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function RecipeDetails() {
  const router = useRouter();

  console.log(router.query.recipeid);

  let {
    query: { recipeid },
  } = router;

  console.log(router);
  //   console.log(router.components);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchRecipeDetails = async () => {
    const check = localStorage.getItem(`${router.query.recipeid}`);
    console.log(JSON.parse(check));

    if (check) {
      console.log(JSON.parse(check));
      // console.log(check);
      setRecipeDetails(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/${router.query.recipeid}/information?apiKey=${API_KEY}`
        );

        const detailsData = await data.json();

        console.log(detailsData);

        localStorage.setItem(
          `${router.query.recipeid}`,
          JSON.stringify(detailsData)
        );

        setRecipeDetails(detailsData);

        console.log(detailsData);
      }
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <h2>{recipeDetails.title}</h2>

      {/* <Image
        src={recipeDetails.image}
        alt={recipeDetails.title}
        layout="fill"
      /> */}

      <Row xs={1} md={3} className="g-4">
        <Col key={recipeDetails.id}>
          <Card>
            <Card.Img
              variant="top"
              src={recipeDetails.image}
              alt={recipeDetails.title}
            />
            <Card.Body>
              <Card.Title>{recipeDetails.title}</Card.Title>
              <Card.Text>
                Ready in {recipeDetails.readyInMinutes} minutes
              </Card.Text>

              <Button
                className={activeTab === "instructions" ? "active" : ""}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </Button>

              <Button
                className={activeTab === "ingredients" ? "active" : ""}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </Button>

              {activeTab === "instructions" && (
                <Card.Text>
                  <p
                    dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: recipeDetails.instructions,
                    }}
                  ></p>
                </Card.Text>
              )}

              {activeTab === "ingredients" && (
                <ul>
                  {recipeDetails.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeDetails;
