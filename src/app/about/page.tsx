import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "about",
  description: "...",
};

const About = () => {
  const username = "闪的鸣";
  const description = "我是一名软件工程师在小米";
  const skills = ["c#", "python", "rust", "go"];
  return (
    <div className="divide-y">
      <h1 className="text-6xl font-bold pt-6 pb-8">关于我</h1>
      <div className="grid grid-cols-3 gap-x-8">
        <div className="pt-8 flex flex-col items-center">
          <Image
            src="/images/tr2hn5rn.png"
            width={192}
            height={192}
            alt=""
            className="rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            闪的鸣
          </h3>
          <p className="text-gray-500">软件工程师</p>
          <p className="text-gray-500">分享学习历程</p>
          <div className="text-emerald-500">TODO:放一些跳转链接</div>
        </div>
        <div className="pt-8 col-span-2">
          <ul className="list-disc space-y-4">
            <li>昵称：{username}</li>
            <li>{description}</li>
            <li>
              skill:
              <ul className="list-disc ml-10 mt-2">
                <li>
                  熟悉：C#/Python/Golang/ASP.NET Core/MySQL/Web API/EF Core/Git/
                </li>
                <li>了解：Html/CSS/JS/WPF/Redis/MongoDB/React/Docker/Rust</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
