import getPostMetadata from "@/lib/getPostMetadata";

const Tag = () => {
  const tags = getPostMetadata()
    .map((post) => post.tags)
    .flat()
    .filter((tag, index, self) => self.indexOf(tag) === index);
  return (
    <div className="prose">
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <a href={`/tag/${tag}`}>{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
