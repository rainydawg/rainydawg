import type { NextPage } from "next";
import Layout from "../components/Layout";

const Schedule: NextPage = () => {
  return (
    <Layout title="Schedule">
      <iframe
        loading="lazy"
        src="https://spinitron.com/Rainy-Dawg/calendar/?bodyclass=simple"
        data-rocket-lazyload="fitvidscompatible"
        data-lazy-src="https://spinitron.com/Rainy-Dawg/calendar/?bodyclass=simple"
        data-was-processed="true"
        style={{
          width: "100%",
          height: "150vh",
        }}
      ></iframe>
    </Layout>
  );
};

export default Schedule;
