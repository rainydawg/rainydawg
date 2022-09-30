import styles from "./Banner.module.scss";

function Banner() {
  console.log(styles);
  return (
    <div className={styles.banner}>
      <h2>Announcement</h2>
      <p>
        {/* { <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfNcyNrU595Qyy31GhBXW-2wKGAbCPjl7x2RHjeNFxAvqXt-g/viewform"
          target="_blank"
          rel="noreferrer"
        > */}
          DJ Applications are CLOSED!      
        </a> }
      </p>
    </div>
  );
}

export default Banner;
