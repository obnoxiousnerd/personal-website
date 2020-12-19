//@ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
import { getAllSlugs, getPostContent } from "../../lib/posts";
import matter from "gray-matter";
import Head from "next/head";
import Navbar from "../../components/Blog/Navbar";
import Article from "../../components/Blog/Article";
import NextImg from "next/image";
import Codeblock from "../../components/Blog/Codeblock";

type staticPathsOutput = {
  params: {
    slug: string;
  };
};
interface Props {
  rendered: string;
  meta: { [k: string]: string };
  slug: string;
}

const Image = (props: any) => (
  <NextImg
    src={props.src}
    alt={props.alt}
    width={props.width}
    height={props.height || props.width}
  />
);
export const components = { Image, Codeblock };

export default function Blog({ rendered, meta, slug }: Props) {
  return (
    <>
      <Head>
        <meta name="description" content={meta.description} />
        <title>{meta.title} - Blog</title>
        <link rel="canonical" href={`https://obnerd.in/blog/${slug}`} />
      </Head>
      <Navbar />
      <Article
        title={meta.title}
        author={meta.author}
        coverImage={meta.coverImage || ""}
        content={rendered}
        date={meta.date}
      />
    </>
  );
}
export const getStaticProps = async ({ params }: staticPathsOutput) => {
  const slug: string = params.slug;
  const content = getPostContent(slug);
  const parsed = matter(content);
  const rendered = await renderToString(parsed.content, { components });
  return { props: { rendered, meta: parsed.data, slug } };
};
export const getStaticPaths = async () => {
  // get posts with slug attribute
  let posts = getAllSlugs();

  // add "404" as default
  const paths = posts.map(({ params }) => ({
    params: params,
  }));

  return {
    paths,
    fallback: false,
  };
};
