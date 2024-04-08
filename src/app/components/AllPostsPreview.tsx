import getPostMetadata from "@/lib/getPostMetadata";
import Link from "next/link";

const AllPostsPreview = () => {
  const postMetadata = getPostMetadata();
  return postMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((postMetadata) => (
      <div key={postMetadata.slug} className="py-5">
        <Link href={`/blog/${postMetadata.slug}`}>
          <span className="text-blue-500 text-3xl">{postMetadata.title}</span>
        </Link>
        <p className="text-xl">{postMetadata.description}</p>
        <p>
          {postMetadata.tags.map((tag) => (
            <a
              key={tag}
              className="bg-gray-200 text-gray-600 text-sm rounded-full px-2 hover:bg-gray-300 hover:text-gray-700 mr-2"
              href={`/tag/${tag}`}
            >
              {tag}
            </a>
          ))}
        </p>
        <p>{postMetadata.date}</p>
      </div>
    ));
};
export default AllPostsPreview;
