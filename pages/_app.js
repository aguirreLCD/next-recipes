// import '../styles/globals.css'
import NavRecipe from "../components/NavRecipe";

import "bootstrap/dist/css/bootstrap.min.css";

import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavRecipe />
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
