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
      <span className="flex justify-center mt-4">
        <ul className="flex flex-wrap max-w-lg">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-2 text-violet-600 hover:text-violet-800"
            >
              <a href={`/tag/${tag}`}>{tag}</a>
            </li>
          ))}
        </ul>
      </span>
    </>
  );
};

export default Tag;
