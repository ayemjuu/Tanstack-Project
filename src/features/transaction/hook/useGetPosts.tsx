import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api';

export const POSTS_QUERY_KEY = ['posts'];

export const usePosts = () => {
  return useQuery({
    queryKey: POSTS_QUERY_KEY,
    queryFn: getPosts,
  });
};
