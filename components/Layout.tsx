import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

function Layout({ children, title }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>Rainydawg Radio</title>
        <meta
          name="description"
          content="Rainy Dawg Radio is the only student run radio station at the University of Washington."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {title && <h1>{title}</h1>}
        <main className={styles.main}>{children}</main>
      </div>

      <footer>adam is really fucking good</footer>
    </div>
  );
}

export default Layout;
