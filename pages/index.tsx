import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <p className={styles.description}>
        Rainy Dawg Radio is the only student run radio station at the University
        of Washington.
      </p>
    </Layout>
  );
};

export default Home;
