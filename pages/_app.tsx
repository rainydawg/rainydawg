import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Socials from "../components/Socials";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="pageContainer">
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}
export default MyApp;
