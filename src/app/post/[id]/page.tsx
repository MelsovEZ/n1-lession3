import PostCard from '@/app/components/PostCard';
import {Post} from '@/app/utils/types';
import "@/app/globals.css";

export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    const posts: Post[] = data.posts;

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default function Page({params}: { params: { id: string } }) {
    return (
        <main>
            <PostCard id={params.id}/>;
        </main>
    )
}
