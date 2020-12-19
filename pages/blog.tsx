import { getAllPostsMetadata, postMetadata } from "../lib/posts";
import Link from "next/link";
import classes from "../styles/Blog.module.scss";
import Head from "next/head";
import Navbar from "../components/Blog/Navbar";

interface Props {
  posts: postMetadata[];
}

export default function Blog({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Pranav Karawale - Blog</title>
        <link rel="canonical" href="https://obnerd.in/blog" />
      </Head>
      <Navbar />
      <h1>My Blog</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <>
            <BlogPostItem post={post} />
          </>
        ))
      ) : (
        <h1>
          <style jsx>{`
            font-size: calc(2rem + 2vw);
          `}</style>
          Blog posts coming soon!!
        </h1>
      )}
    </>
  );
}

const BlogPostItem = ({ post }: { post: postMetadata }) => {
  const readableDate = new Date(post.date).toDateString();
  return (
    <>
      <div key={post.slug} className={classes.postItem}>
        <Link href={`/blog/${post.slug}`}>
          <a className={classes.indexListLink}>
            <h2>{post.title}</h2>
          </a>
        </Link>
        <p>
          {readableDate}, by {post.author}
        </p>
      </div>
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPostsMetadata();
  return {
    props: {
      posts: posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    },
  };
}
