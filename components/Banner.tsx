import styles from "./Banner.module.scss";

function Banner() {
  console.log(styles);
  return (
    <div className={styles.banner}>
      <h2>Announcement</h2>
      <p>
        <a
          href="https://forms.gle/f9P9kfv3hEsKstgD9"
          target="_blank"
          rel="noreferrer"
        >
          DJ application OPEN!
        </a>
      </p>
    </div>
  );
}

export default Banner;
