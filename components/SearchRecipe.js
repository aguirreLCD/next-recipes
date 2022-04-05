import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

function SearchRecipe() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  function submitHandler(event) {
    event.preventDefault();

    router.push(`/searchResults?keyword=${keyword}`);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={keyword}
          placeholder="Search"
          onChange={(e) => {
            e.preventDefault();
            setKeyword(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={submitHandler}>
          Search
        </button>
      </div>

      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => {
            e.preventDefault();
            setKeyword(e.target.value);
            console.log(keyword);
          }}
          value={keyword}
        />
        <Button variant="primary" type="submit" onSubmit={submitHandler}>
          search
        </Button>
      </Form> */}
    </>
  );
}

export default SearchRecipe;
