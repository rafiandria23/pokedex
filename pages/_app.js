import "../styles/globals.css";
import "@brainhubeu/react-carousel/lib/style.css";
import withData from "../config/apollo";
import MyPokemonContext from "../src/contexts/myPokemonContext";

function MyApp({ Component, pageProps }) {
  return (
    <MyPokemonContext>
      <Component {...pageProps} />
    </MyPokemonContext>
  );
}

export default withData(MyApp);
