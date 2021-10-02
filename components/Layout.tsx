import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

function Layout({ children, title }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rainydawg Radio</title>
        <meta
          name="description"
          content="Rainy Dawg Radio is the only student run radio station at the University of Washington."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {title && <h1>{title}</h1>}
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;
