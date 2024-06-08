import axios from 'axios';
import {Post} from './types';

export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get('https://dummyjson.com/posts');
        return response.data.posts;
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
};

export const fetchPostById = async (id: number) => {
    try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch post with id ${id}`);
    }
};
