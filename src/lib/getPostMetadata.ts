import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName: string) => {
    const content = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(content);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};
export default getPostMetadata;
