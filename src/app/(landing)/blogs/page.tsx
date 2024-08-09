"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { deepFreeze } from "@/lib/utils";
import { BLOGS } from "@/constants/blogs";
import Wrapper from "@/components/wrapper";
import { motion } from "framer-motion";

export default function BlogsPage() {
  const blogs = deepFreeze(BLOGS);

  const getExcerpt = (html: string, maxLength: number = 150) => {
    const stripped = html.replace(/<[^>]+>/g, "");
    return stripped.length > maxLength
      ? stripped.slice(0, maxLength) + "..."
      : stripped;
  };

  return (
    <>
      <h3>Our Insights</h3>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any, index: number) => (
            <motion.div
              key={blog.blogId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2"
            >
              {/* <div className="relative h-48 w-full">
                {/* <Image
                  src={blog.imageUrl || "https://via.placeholder.com/400x200"}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                /> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div> */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  {getExcerpt(blog.content)}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <Link href={`/blogs/${blog.blogId}`} passHref>
                    <span className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer flex items-center">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {blog.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
