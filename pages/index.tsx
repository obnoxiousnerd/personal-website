import Head from "next/head";
import classes from "../styles/Home.module.scss";
import socialMediaElClasses from "../components/SocialMedia.module.scss";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import { useRef } from "react";

export default function Home() {
  const socialMediaPopover = useRef<HTMLDivElement>(null);
  const toggleSocMedPop = () => {
    const socialMediaEl = socialMediaPopover.current
      ?.firstElementChild as Element;
    socialMediaPopover.current?.toggleAttribute("hidden");
    socialMediaEl.classList.toggle(socialMediaElClasses.fadein);
  };
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://gravatar.com/avatar/4ca9f684dfc0f3cb3c8866d0b45bcc4b?s=16&d=robohash&r=x"
          type="image/x-icon"
        />
        <title>Pranav Karawale</title>
      </Head>
      <Navbar />
      <div hidden={true} ref={socialMediaPopover}>
        <SocialMedia />
      </div>
      <img
        src="/svg/blob1.svg"
        alt="Blob"
        className={`${classes.blob} ${classes.blobtop}`}
      />
      <div className={classes.container}>
        <div className={classes.profileMenu}>
          <img
            onClick={toggleSocMedPop}
            className={classes.profile}
            src="https://gravatar.com/avatar/4ca9f684dfc0f3cb3c8866d0b45bcc4b?s=250&d=robohash&r=x"
            alt="Profile"
          />
        </div>
        <p>I AM</p>
        <h1 className={classes.heroTitle}>Pranav Karawale.</h1>
        <p className={classes.heroSubtitle}>
          A student and passionate web developer.
        </p>
        <h4
          style={{
            display: "inline",
            width: "fit-content",
            fontWeight: "lighter",
            color: "#999",
          }}
        >
          <span style={{ color: "#fff" }}>(</span>
          Click my photo or the three lines to see more
          <span style={{ color: "#fff" }}>)</span>
        </h4>
      </div>
      <img
        src="/svg/blob2.svg"
        alt="Blob"
        className={`${classes.blob} ${classes.blobdown}`}
      />
    </>
  );
}
