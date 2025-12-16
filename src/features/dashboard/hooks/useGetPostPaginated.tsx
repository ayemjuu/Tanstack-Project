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
import { getPostPaginated, type PaginatedPosts } from '../api';

interface PostQueryParams {
  page: number;
  size: number;
}

export const useGetPostPaginated = (
  params: PostQueryParams,
  options?: UseQueryOptions<PaginatedPosts, Error>,
) => {
  return useQuery<PaginatedPosts, Error>({
    queryKey: ['posts', params.page, params.size],
    queryFn: () => getPostPaginated(params),
    placeholderData: (previous) => previous,
    ...options,
  });
};
