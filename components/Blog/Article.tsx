//@ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import classes from "./Article.module.scss";
import { components } from "../../pages/blog/[slug]";

interface Props {
  title: string;
  author: string;
  coverImage: string;
  content: string;
  date: string;
}
export default function Article({
  title,
  author,
  coverImage,
  content,
  date,
}: Props) {
  const readableDate = new Date(date).toDateString();
  return (
    <>
      <article className={classes.mainArticle}>
        {coverImage && coverImage !== "" && (
          <img width="100%" height="auto" src={coverImage} alt="Cover Image" />
        )}
        <h1>
          <style jsx>{`
            font-size: 3.5rem !important;
          `}</style>
          {title}
        </h1>
        <p>
          <style jsx>{`
            color: #555;
          `}</style>
          {readableDate}, By {author}
        </p>
        {hydrate(content, { components })}
      </article>
    </>
  );
}
