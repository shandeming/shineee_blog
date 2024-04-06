import AllPostsPreview from "../components/AllPostsPreview";

const Blog = () => {
  return (
    <>
      <h1 className="text-5xl font-bold	border-b-2 pb-4">全部文章</h1>
      <div className="grid grid-cols-1 divide-y">
        <AllPostsPreview></AllPostsPreview>
      </div>
    </>
  );
};
export default Blog;
