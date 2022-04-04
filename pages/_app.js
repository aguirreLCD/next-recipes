// import '../styles/globals.css'
import Nav from '../components/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';

import SSRProvider from 'react-bootstrap/SSRProvider';


function MyApp({ Component, pageProps }) {
  return (

    <>

      <SSRProvider>

          <Nav />
          <Component {...pageProps} />
          
      </SSRProvider>
    </>
  )

  
}

export default MyApp
