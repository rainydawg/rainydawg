import styles from "./Banner.module.scss";

function Banner() {
  console.log(styles);
  return (
    <div className={styles.banner}>
      <h2>Announcement</h2>
      <p>DJ Appliciations are Closed</p>
    </div>
  );
}

export default Banner;
