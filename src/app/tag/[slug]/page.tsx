import getPostMetadata from "@/lib/getPostMetadata";

export const generateStaticParams = async () => {
  const tags = getPostMetadata()
    .map((post) => post.tags)
    .flat()
    .filter((tag, index, self) => self.indexOf(tag) === index);
  return tags.map((tag) => ({
    slug: tag,
  }));
};
const Tag = (props: any) => {
  const slug = props.params.slug;
  const postMetadata = getPostMetadata();
  const posts = postMetadata
    .filter((post) => post.tags.includes(slug))
    .map((post) => post.slug);
  return (
    <div className="prose">
      <h1>{slug}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <a href={`/blog/${post}`}>{post}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tag;
