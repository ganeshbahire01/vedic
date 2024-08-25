import React from "react";
import Markdown from "react-markdown";
import Blog1 from "../../../data/blog-1.mdx";
import Blog2 from "../../../data/blog-2.mdx";
import Blog3 from "../../../data/blog-3.mdx";
import Image from "next/image";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { BlogData } from "@/data/blod-data";
interface PageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: PageProps) => {
  const Data = BlogData.find((item) => item.slug === params.slug);
  return (
    <div className="container ">
      <div className="font-dmsans container px-4 pt-6 md:px-8 md:pt-12">
        <div className="mb-10 flex w-full items-center justify-center py-0 md:mb-6 md:w-auto md:justify-between">
          <Link
            href="/blogs"
            className="flex items-center font-medium leading-7 text-gray-800"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full py-2 pr-2">
              <ArrowBigLeft className="h-6 w-6 translate-x-0 transition-all group-hover:-translate-x-1" />
            </div>
            <span className="p-2 pr-4 text-left text-base font-normal">
              All Blogs
            </span>
          </Link>
        </div>
        <div className="mb-10 md:mb-14">
          <div className="mx-auto mt-10 w-full text-center text-5xl font-bold tracking-tight text-gray-800 md:mt-7 md:w-2/3 md:text-6xl">
            <h2>{Data?.title} </h2>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-base md:mt-7 md:flex-row">
            <div className="flex items-center gap-2">
              <>
                <h3 className="font-bold text-gray-800">By Dr Gopal Gaykwad</h3>
                <span className="font-bold text-gray-400">·</span>
              </>
              <h3 className="font-normal text-gray-500">
                Update {new Date(Data?.publishedAt ?? "").toDateString()}
              </h3>
              <span className="font-bold text-gray-400">·</span>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-normal text-gray-500">5 min read</h3>
            </div>
          </div>
          <div className="flex w-full items-center justify-center mt-4">
            <div className="relative -m-4 mx-auto mb-10 aspect-[9/5] w-screen overflow-hidden md:m-0 md:mb-12 md:aspect-[5/2] md:h-[460px] md:w-auto">
              <Image
                src={Data?.imageUrl ?? ""}
                alt="cover-image"
                layout="fill"
                className="rounded-none object-cover md:rounded-3xl lg:object-cover"
              />
            </div>
          </div>
          {params.slug == "1" && <Blog1 />}
          {params.slug == "2" && <Blog2 />}
          {params.slug == "3" && <Blog3 />}
        </div>
      </div>
    </div>
  );
};

export default page;
