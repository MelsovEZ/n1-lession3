import { fetchPosts } from "@/app/utils/api";
import { Post } from "@/app/utils/types";
import Link from "next/link";

export default async function Home() {
    const posts: Post[] = await fetchPosts();
    return (
            <div className="container mx-auto px-4 py-4">
                {posts.map((post: Post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border-2 my-6">
                        <div className="p-6 flex-grow">
                            <h2 className="text-sm text-gray-600 uppercase font-semibold mb-2">{post.tags.join(", ")}</h2>
                            <h1 className="text-xl font-bold text-gray-800 mb-4">{post.title}</h1>
                            <p className="text-gray-700">{post.body.substring(0, 250)}...</p>
                        </div>
                        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 mt-auto">
                            <Link href={`/posts/${post.id}`} className="text-indigo-600 hover:text-indigo-500 font-semibold">
                                Read more
                            </Link>
                            <div className="flex items-center mt-3 text-sm text-gray-600">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className='w-4 h-4 mr-1' src="https://img.icons8.com/fluency-systems-regular/48/visible--v1.png" alt="visible--v1"/>
                                <span className="mr-4">{post.views}</span>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className='w-4 h-4 mr-1' src="https://img.icons8.com/ios/50/thumb-up--v1.png" alt="thumb-up--v1"/>
                                <span className="mr-4">{post.reactions.likes}</span>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className='w-4 h-4 mr-1' src="https://img.icons8.com/ios/50/thumbs-down.png" alt="thumbs-down"/>
                                <span>{post.reactions.dislikes}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
}
