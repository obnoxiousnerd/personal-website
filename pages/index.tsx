import Head from "next/head";
import Image from "next/image";
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
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Pranav Karawale</title>
        <meta
          name="description"
          content="I am Pranav Karawale, a student and a passionate web developer. I am also known as obnoxiousnerd on various developer communites like GitHub and dev.to."
        />
        <link rel="canonical" href="https://obnerd.in/" />
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
        {/* a11y */}
        <button hidden onClick={toggleSocMedPop}>
          Click to view my social media links
        </button>
        <div className={classes.profileMenu} onClick={toggleSocMedPop}>
          <Image
            width={250}
            height={250}
            className={classes.profile}
            src="/img/me.jpeg"
            alt="My Picture"
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
