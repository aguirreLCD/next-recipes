// import '../styles/globals.css'
import NavRecipe from "../components/NavRecipe";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";

import SSRProvider from "react-bootstrap/SSRProvider";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container fluid className={styles.container}>
        {/* <div className={styles.container}> */}
        <SSRProvider>
          <NavRecipe />

          <Component {...pageProps} />
          <Footer />
        </SSRProvider>
        {/* </div> */}
      </Container>
    </>
  );
}

export default MyApp;
