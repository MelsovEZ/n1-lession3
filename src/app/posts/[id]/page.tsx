'use client';
import {useEffect, useState} from 'react';
import {fetchPostById} from "@/app/utils/api";
import {Post} from "@/app/utils/types";

export default function PageApp({params}: { params: { id: string } }) {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await fetchPostById(parseInt(params.id, 10));
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost().then();
    }, [params.id]);

    return (
        <div className="container mx-auto mt-6 px-4 h-[74.7vh]">
            {post ? (
                <div className="shadow-lg rounded-lg p-6 mb-4 bg-gray-100">
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-700 mb-4">{post.body}</p>

                    <div className="flex flex-wrap items-center mb-4">
                        <span className="text-gray-500">Tags:</span>
                        <div className="flex flex-wrap space-x-2">
                            {post.tags.map((tag, index) => (
                                <span key={index}
                                      className="rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-4">
                            <div className="flex items-center space-x-1">
                                <span className="text-gray-500">Views:</span>
                                <span className="text-blue-500">{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="text-gray-500">Likes:</span>
                                <span className="text-green-500">{post.reactions.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="text-gray-500">Dislikes:</span>
                                <span className="text-red-500">{post.reactions.dislikes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
        </div>
    );
}
