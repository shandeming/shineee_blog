import getPostMetadata from "@/lib/getPostMetadata";
import Link from "next/link";

const AllPostsPreview = () => {
  const postMetadata = getPostMetadata();
  return postMetadata.map((postMetadata) => (
    <div key={postMetadata.slug} className="py-5">
      <Link href={`/blog/${postMetadata.slug}`}>
        <span className="text-blue-500 text-3xl">{postMetadata.title}</span>
      </Link>
      <p className="text-xl">{postMetadata.description}</p>
      <p>
        {postMetadata.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-600 text-sm rounded-full px-2"
          >
            {tag}
          </span>
        ))}
      </p>
      <p>{postMetadata.date}</p>
    </div>
  ));
};
export default AllPostsPreview;
