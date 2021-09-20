import Link from "next/link";
import Image from "next/image";

import styles from "./Nav.module.css";
import NavDropdown from "./NavDropdown";
import Player from "./Player";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <Image
          src="/logo.png"
          height="150"
          width="193.2"
          alt="Rainy Dawg Radio"
        />
      </Link>
      <Player />
      <NavDropdown />
    </nav>
  );
}

export default Nav;
