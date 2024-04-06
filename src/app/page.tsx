import { Metadata } from "next";
import AllPostsPreview from "./components/AllPostsPreview";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
};

export default function Home() {
  return (
    <>
      <div className="border-b-2 pb-4">
        <h1 className="text-5xl font-bold">最新文章</h1>
        <h4 className="pt-3">分享作为软件工程师的成长历程</h4>
      </div>
      <div className="grid grid-cols-1 divide-y">
        <AllPostsPreview></AllPostsPreview>
      </div>
    </>
  );
}
