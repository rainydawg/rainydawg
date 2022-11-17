import styles from "./Banner.module.scss";

function Banner() {
  console.log(styles);
  return (
    <div className={styles.banner}>
      <h2>Announcement</h2>
      <a href=
      "https://docs.google.com/forms/d/e/1FAIpQLSfxIXwfG6A2nq_y1P6RRzUa1ZNUxPu1WF_j08MUnMGZaT4N8A/viewform">
        DJ Application Form
      </a>
    </div>
  );
}

export default Banner;
