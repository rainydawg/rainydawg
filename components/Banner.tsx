import styles from "./Banner.module.scss";

function Banner() {
  console.log(styles);
  return (
    <div className={styles.banner}>
      <h2>Announcement</h2>
      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdzT8jrkmFWr2CZYiElJ6_Bu5diDQWTC-LILVqg7Vp1mtFqDQ/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noreferrer"
        >
          DJ Application OPEN!
        </a>
        <a
         href="https://docs.google.com/forms/d/e/1FAIpQLSfgKuFuvccRhJP8JaHGXK9FGeNYQo4X_fbWxDMCCjQ4Amdq9A/viewform?usp=sf_link
         "
         target="_blank"
         rel="noreferrer">
         Blogger Application Open!
        </a>
      </p>
    </div>
  );
}

export default Banner;
