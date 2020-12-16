import Link from "next/link";
import { MutableRefObject, useEffect, useRef } from "react";
import classes from "./Navbar.module.scss";
export default function Navbar() {
  const navRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      try {
        const scrollPos = window.scrollY;
        if (scrollPos == 0) {
          navRef.current.classList.remove(classes.navRootScrolled);
        } else {
          navRef.current.classList.add(classes.navRootScrolled);
        }
      } catch (e) {}
    });
  }, []);
  return (
    <>
      <div ref={navRef} className={classes.navRoot}>
        <ul>
          <li key="Home">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li key="Blog">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li key="Me">
            <Link href="/me">
              <a>Me</a>
            </Link>
          </li>
          <li key="Projects">
            <Link href="//gh.obnerd.in/">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
      <div role="presentation">
        <style jsx>{`
          height: 64px;
          width: 100%;
        `}</style>
      </div>
    </>
  );
}
