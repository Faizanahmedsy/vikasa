import Link from "next/link";
import { deepFreeze } from "@/lib/utils";
import { BLOGS } from "@/constants/blogs";

export default function BlogDetailPage({
  params,
}: {
  params: { blogId: string };
}) {
  const { blogId } = params;
  const blogs = deepFreeze(BLOGS);
  const blog = blogs.find((b: any) => b.blogId === blogId);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <h3>{blog.title}</h3>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {blog.title}
            </h1>
            <div
              className="prose  prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/blogs" passHref>
            <span className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">
              Back to Blogs
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
