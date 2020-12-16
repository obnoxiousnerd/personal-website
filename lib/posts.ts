import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

const postDirectory = path.join(process.cwd(), "posts");

export interface postMetadata {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
}

export const getAllSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};

export const getAllPostsMetadata = (): postMetadata[] => {
  const posts = getAllSlugs();
  const metadata = posts;
  return metadata.map(
    ({ params }) =>
      ({
        slug: params.slug,
        ...matter(getPostContent(params.slug)).data,
      } as postMetadata)
  );
};

export const getPostContent = (slug: string) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const content = fs.readFileSync(fullPath, { encoding: "utf8" });
  return content;
};
