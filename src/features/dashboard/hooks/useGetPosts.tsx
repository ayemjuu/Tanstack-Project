// import { useQuery } from '@tanstack/react-query';
// import { getPostPaginated } from '../api';

// export const POSTS_QUERY_KEY = ['posts'];

// export const useGeTPostPaginated = () => {
//   return useQuery({
//     queryKey: POSTS_QUERY_KEY,
//     queryFn: getPostPaginated,
//   });
// };

// // features/transaction/hook/useGetPosts.ts
// import { useQuery } from '@tanstack/react-query';
// import { getPostPaginated } from '../api';

// export const useGetPostPaginated = (page: number) => {
//   return useQuery({
//     queryKey: ['posts', page],
//     queryFn: () => getPostPaginated(page),
//     // keepPreviousData: true,
//   });
// };

import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getPosts, type Post } from '../api';

export const useGetPosts = (options?: UseQueryOptions<Post[], Error>) => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
    ...options,
  });
};
