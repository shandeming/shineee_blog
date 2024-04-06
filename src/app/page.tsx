import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div key={slug} className="py-5 text-3xl">
      <Link href={`/blog/${slug}`}>
        <span className="text-blue-500">{slug}</span>
      </Link>
    </div>
  ));
  return (
    <div>
      <h1 className="text-5xl font-bold	border-b-2 pb-4">最新文章</h1>
      <div className="grid grid-cols-1 divide-y">{postPreviews}</div>
    </div>
  );
}
