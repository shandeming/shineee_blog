import getPostMetadata from "@/lib/getPostMetadata";

const Tag = () => {
  const tags = getPostMetadata()
    .map((post) => post.tags)
    .flat()
    .filter((tag, index, self) => self.indexOf(tag) === index);
  return (
    <>
      <div className="border-b-2 pb-4">
        <h1 className="text-5xl font-bold">Tags</h1>
      </div>
      <div className="prose">
        <ul className="inline">
          {tags.map((tag) => (
            <li key={tag}>
              <a href={`/tag/${tag}`}>{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tag;
