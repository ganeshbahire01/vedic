import { BlogData } from "@/data/blod-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div id="map" className="py-28 px-6 lg:px-[115px] container w-full mx-auto">
      <div className="text-[32px] text-center lg:text-left font-semibold leading-10 font-dm">
        All Blogs
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-20 lg:gap-x-8 pt-11">
        {BlogData?.map((blog) => (
          <div>
            <div className="w-[22rem]">
              <Link href={blog?.slug ? `/blogs/${blog?.slug}` : ""}>
                <div className="relative">
                  {blog.imageUrl ? (
                    <Image
                      src={blog?.imageUrl ?? ""}
                      alt="blog"
                      width={357}
                      height={302}
                      className="rounded-md h-[302px] object-cover aspect-square"
                    />
                  ) : (
                    <div className="h-[302px] bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400 rounded-md"></div>
                  )}
                </div>
                <div className="">
                  <div className="pt-3 font-bold leading- text-xl font-dm text-gray-900">
                    {blog?.title}
                  </div>
                  <div className="pt-1 text-sm font-normal text-gray-500">
                    {new Date(blog?.publishedAt).toDateString()}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
