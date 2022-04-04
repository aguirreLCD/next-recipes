// import React, { useState } from "react";

// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";

// import Button from "react-bootstrap/Button";

// function SearchRecipe() {
//   const [input, setInput] = useState("");
//   console.log(input);

//   function submitHandler(event) {
//     event.preventDefault();
//     console.log(input);
//     setInput(input);
//     console.log(input);
//   }

//   return (
//     <>
//       <Form className="d-flex">
//         <FormControl
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//           onChange={(e) => {
//             e.preventDefault();
//             setInput(e.target.value);
//             console.log(input);
//           }}
//           value={input}
//         />
//         <Button variant="primary" type="submit" onSubmit={submitHandler}>
//           search
//         </Button>
//       </Form>
//     </>
//   );
// }

// export default SearchRecipe;
