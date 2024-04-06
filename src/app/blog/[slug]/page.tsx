import fs from "fs";
import Markdown from "markdown-to-jsx";
const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

const Blog = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const encodedString = decodeURIComponent(slug);
  console.log(encodedString);
  const content = getPostContent(encodedString);
  return (
    <div className="prose">
      <h1>{encodedString}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
};
export default Blog;
