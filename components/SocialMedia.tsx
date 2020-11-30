import { CSSProperties, useRef } from "react";
import classes from "./SocialMedia.module.scss";
export default function SocialMedia() {
  const parentRef = useRef<HTMLDivElement>(null);
  const closeThis = () => {
    if (parentRef.current) {
      parentRef.current?.classList.remove(classes.fadein);
      parentRef.current?.classList.add(classes.fadeout);
      setTimeout(() => {
        parentRef.current?.parentElement?.toggleAttribute("hidden");
        parentRef.current?.classList.remove(classes.fadeout);
      }, 500);
    }
  };
  return (
    <div ref={parentRef} className={classes.socialMediaParent}>
      <span onClick={closeThis} className={classes.closeThis}>
        &times;
      </span>
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "1em" }}>
        Find me on
      </h1>
      <br />
      <br />
      <div className={classes.badges}>
        <SocialMediaBadge
          link="https://github.com/obnoxiousnerd"
          medianame="Github"
          img="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"
          imgstyle={{
            borderRadius: "5%",
          }}
        />
        <SocialMediaBadge
          link="https://npmjs.com/~obnoxiousnerd"
          medianame="NPM"
          img="https://img.stackshare.io/service/1120/lejvzrnlpb308aftn31u.png"
          imgstyle={{ borderRadius: "5%" }}
        />
        <SocialMediaBadge
          link="https://dev.to/obnoxiousnerd"
          medianame="dev.to"
          img="https://d2fltix0v2e0sb.cloudfront.net/dev-rainbow.png"
        />
      </div>
    </div>
  );
}

interface SocialMediaProps {
  link: string;
  img: string;
  medianame: string;
  imgstyle?: CSSProperties;
}

function SocialMediaBadge(props: SocialMediaProps) {
  return (
    <>
      <div className={classes.badge}>
        <a href={props.link}>
          <img
            className={classes.badgeIcon}
            src={props.img}
            style={props.imgstyle}
            alt={`${props.medianame} logo`}
          />
          <h2 className={classes.badgeLabel}>{props.medianame}</h2>
        </a>
      </div>
    </>
  );
}
