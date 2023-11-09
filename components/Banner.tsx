import styles from "./Banner.module.scss";

function Banner() {
  console.log(styles);
  return (
    <div className={styles.banner}>
      <h2>Announcement</h2>
      {/* <p>DJ Appliciations are Closed</p> */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSelv72v3Tz0HRiD2DrBPzkJqm-CTboDCm-p08QFy3VmcCnxSw/viewform" >DJ Applicalications are Open</a>
    </div>
  );
}

export default Banner;
