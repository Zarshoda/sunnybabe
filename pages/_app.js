import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;