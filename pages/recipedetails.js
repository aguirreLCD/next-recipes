import React, { useState, useEffect } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/Category.module.css";

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
  const [stepsForInstructions, setStepsForInstructions] = useState({});

  const fetchRecipeDetails = async () => {
    const check = localStorage.getItem(`${router.query.recipeid}`);
    console.log(JSON.parse(check));

    if (check) {
      console.log(JSON.parse(check));
      // console.log(check);
      setRecipeDetails(JSON.parse(check));
      setStepsForInstructions(JSON.parse(check));
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

        // console.log(JSON.parse(instructions, detailsData.analyzedInstructions));
        console.log(JSON.stringify(detailsData.analyzedInstructions));
        setStepsForInstructions(
          JSON.stringify(detailsData.analyzedInstructions)
        );
      }
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(JSON.stringify(recipeDetails.analyzedInstructions));
  // console.log(stepsForInstructions);
  console.log(JSON.stringify(stepsForInstructions.analyzedInstructions));

  return (
    <>
      {/* <div>{JSON.stringify(stepsForInstructions.analyzedInstructions)}</div> */}
      {/* <div>{JSON.stringify({ stepsForInstructions })}</div> */}
      {/* <div>{JSON.stringify(stepsForInstructions.analyzedInstructions)}</div> */}
      {/* <div>
        {JSON.stringify(
          { stepsForInstructions: stepsForInstructions.analyzedInstructions },
          null,
          ""
        )}
      </div> */}

      {/* <div>{JSON.stringify(stepsForInstructions.instructions, "\t")}</div> */}
      {/* <div>{JSON.stringify(stepsForInstructions.instructions, null, "\t")}</div> */}
      {/* <div>{JSON.parse(stepsForInstructions)}</div> */}

      <Container>
        <h2 className={styles.title}>{recipeDetails.title}</h2>

        <Row xs={1} md={3} className="g-4">
          <Col key={recipeDetails.id}>
            <Card className={styles.recipedetails}>
              <Card.Img
                layout="fill"
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
                  variant="danger"
                  className={activeTab === "instructions" ? "active" : ""}
                  onClick={() => setActiveTab("instructions")}
                >
                  Instructions
                </Button>

                <Button
                  variant="dark"
                  className={activeTab === "ingredients" ? "active" : ""}
                  onClick={() => setActiveTab("ingredients")}
                >
                  Ingredients
                </Button>

                {activeTab === "instructions" && (
                  <Card.Text>
                    Instructions:
                    {JSON.stringify(recipeDetails?.instructions)}
                    Sumary:
                    {JSON.stringify(recipeDetails?.summary)}
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
    </>
  );
}

export default RecipeDetails;
