import Link from "next/link";
import Image from "next/image";

import styles from "./Nav.module.scss";
import NavDropdown from "./NavDropdown";
import Player from "./Player";
import Banner from "./Banner";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <Banner />
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <Image
            src="/logo.png"
            height="150"
            width="150"
            alt="Rainy Dawg Radio"
          />
        </Link>
        <Player />
        <NavDropdown />
      </nav>
    </div>
  );
}

export default Nav;
