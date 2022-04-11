import React, { useState, useEffect } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/Category.module.css";

import { useRouter } from "next/router";

import DOMPurify from "dompurify";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function RecipeDetails() {
  const router = useRouter();

  // console.log(router.query.recipeid);

  let {
    query: { recipeid },
  } = router;

  // console.log(router);
  //   console.log(router.components);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  const [stepsForInstructions, setStepsForInstructions] = useState([]);

  const fetchRecipeDetails = async () => {
    const check = localStorage.getItem(`${router.query.recipeid}`);
    // console.log(JSON.parse(check));

    if (check) {
      // console.log(JSON.parse(check));
      // console.log(check);
      setRecipeDetails(JSON.parse(check));
    } else {
      if (typeof window !== "undefined") {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/${router.query.recipeid}/information?apiKey=${API_KEY}`
        );

        const detailsData = await data.json();

        DOMPurify.sanitize(detailsData);
        console.log(detailsData);

        localStorage.setItem(
          `${router.query.recipeid}`,
          JSON.stringify(detailsData)
        );

        setRecipeDetails(detailsData);
      }
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const analyzedInstructions = JSON.stringify(
  //   { stepsForInstructions: stepsForInstructions.analyzedInstructions },
  //   { stepsForInstructions },
  //   "\t"
  // );

  // console.log(analyzedInstructions);
  // setStepsForInstructions(analyzedInstructions);
  // console.log(stepsForInstructions);

  // console.log(analyzedInstructions);

  // const analyzedInstructions = JSON.stringify(
  //   { stepsForInstructions: stepsForInstructions.analyzedInstructions },
  //   { stepsForInstructions },
  //   "\t"
  // );

  // setStepsForInstructions(analyzedInstructions);
  // console.log(stepsForInstructions);

  // console.log(analyzedInstructions);

  // console.log(analyzedInstructions[0].steps[0].step);

  // console.log(JSON.stringify(recipeDetails.analyzedInstructions));
  // console.log(stepsForInstructions);
  // console.log(JSON.stringify(stepsForInstructions.analyzedInstructions));

  // console.log(
  //   JSON.stringify(
  //     { stepsForInstructions: stepsForInstructions.analyzedInstructions },
  //     { stepsForInstructions },
  //     "\t"
  //   )
  // );

  return (
    <>
      {/* <div>{JSON.stringify(stepsForInstructions.analyzedInstructions)}</div> */}
      {/* <div>{JSON.stringify({ stepsForInstructions }, "\t")}</div> */}
      {/* <div>{JSON.stringify(stepsForInstructions.analyzedInstructions)}</div> */}
      {/* <div>
        {JSON.stringify(
          { stepsForInstructions: stepsForInstructions.analyzedInstructions },
          { stepsForInstructions },
          "\t"
        )}
      </div> */}

      {/* <div>{JSON.stringify(stepsForInstructions.instructions, "\t")}</div> */}
      {/* <div>{JSON.stringify(stepsForInstructions.instructions, null, "\t")}</div> */}
      {/* <div>{JSON.parse(stepsForInstructions)}</div> */}

      <Container>
        <h2 className={styles.title}>{recipeDetails.title}</h2>

        <Row xs={1} md={1} className="g-4">
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
                  <Card.Text
                    dangerouslySetInnerHTML={{
                      __html: recipeDetails.instructions,
                    }}
                  >
                    {/* Instructions:
                    {JSON.stringify(recipeDetails?.instructions)}
                    Sumary:
                    {JSON.stringify(recipeDetails?.summary)} */}
                  </Card.Text>
                )}

                {activeTab === "ingredients" && (
                  <ul>
                    {recipeDetails.extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                  </ul>
                )}

                {activeTab === "summary" && (
                  <Card.Text
                    dangerouslySetInnerHTML={{
                      __html: recipeDetails.summary,
                    }}
                  ></Card.Text>
                )}

                {activeTab === "diets" && (
                  <Card.Text
                    dangerouslySetInnerHTML={{
                      __html: recipeDetails.diets,
                    }}
                  ></Card.Text>
                )}

                {activeTab === "dishTypes" && (
                  <Card.Text
                    dangerouslySetInnerHTML={{
                      __html: recipeDetails.dishTypes,
                    }}
                  ></Card.Text>
                )}
              </Card.Body>
            </Card>

            <Card className={styles.recipedetails}>
              <Card.Body>
                <Button
                  variant="danger"
                  size="sm"
                  className={activeTab === "summary" ? "active" : ""}
                  onClick={() => setActiveTab("summary")}
                >
                  Sumary
                </Button>

                <Button
                  variant="dark"
                  size="sm"
                  className={activeTab === "diets" ? "active" : ""}
                  onClick={() => setActiveTab("diets")}
                >
                  Diets
                </Button>

                <Button
                  variant="success"
                  size="sm"
                  className={activeTab === "dishTypes" ? "active" : ""}
                  onClick={() => setActiveTab("dishTypes")}
                >
                  Dish Types
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RecipeDetails;
