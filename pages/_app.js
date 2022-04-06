// import '../styles/globals.css'
import NavRecipe from "../components/NavRecipe";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";

import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <SSRProvider>
          <NavRecipe />
          <Component {...pageProps} />
        </SSRProvider>
      </div>
    </>
  );
}

export default MyApp;
