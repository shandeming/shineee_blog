import getPostMetadata from "@/lib/getPostMetadata";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog-xx",
  description: "...",
};

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const Blog = (props: any) => {
  const slug = props.params.slug;
  const encodedString = decodeURIComponent(slug);
  const content = getPostContent(encodedString);
  return (
    <div className="prose">
      <h1>{encodedString}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
};
export default Blog;
