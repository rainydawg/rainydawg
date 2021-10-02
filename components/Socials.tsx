import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faTumblr,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.container}>
      <a
        href="https://twitter.com/RainyDawgRadio"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="sm" icon={faTwitter as any} />
      </a>
      <a
        href="https://www.facebook.com/RainyDawgRadio"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="sm" icon={faFacebook as any} />
      </a>
      <a
        href="https://www.instagram.com/rainydawgradio/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="sm" icon={faInstagram as any} />
      </a>
      <a
        href="https://open.spotify.com/user/duw2cz3q0rhhodijwwd5r5mc1"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="sm" icon={faSpotify as any} />
      </a>
      <a
        href="https://rainydawgradioblog.tumblr.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="sm" icon={faTumblr as any} />
      </a>
    </div>
  );
}
