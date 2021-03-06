import Link from "next/link";
import { MouseEvent, useRef } from "react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const navBarRef = useRef<HTMLElement>(null);
  const onNavButtonClick = (
    evt: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    const navBar = navBarRef.current;
    const navButton = evt.currentTarget;
    navButton.classList.toggle(styles.navButtonRotate);
    if (navBar) {
      navBar.style.animationPlayState = "running";
      //Animation classes
      if (navBar.classList.contains(styles.open))
        navBar?.classList.add(styles.navBarAnimateClose);
      if (navBar.classList.contains(styles.close))
        navBar?.classList.add(styles.navBarAnimateOpen);
      setTimeout(() => {
        navBar?.classList.toggle(styles.close);
        navBar?.classList.toggle(styles.open);
        navBar.style.animationPlayState = "paused";
        //Remove after work done
        navBar?.classList.remove(styles.navBarAnimateOpen);
        navBar?.classList.remove(styles.navBarAnimateClose);
        navButton.classList.toggle(styles.navButtonRotate);
      }, 400);
    }
  };
  return (
    <>
      <span
        onClick={onNavButtonClick}
        role="button"
        aria-label="Navigation bar"
        className={styles.navButton}
      ></span>
      <nav ref={navBarRef} className={`${styles.navBar} ${styles.close}`}>
        <ul>
          <li>
            <Link href="/me">
              <a href="/me">About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a href="/blog">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="https://gh.obnerd.in/">
              <a href="https://gh.obnerd.in/">Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
