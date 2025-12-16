// import { useQuery } from '@tanstack/react-query';
// import { getPostsById } from '../api';

import { useQuery } from '@tanstack/react-query';
import { getPostsById } from '../api';

// export const useGetPostById = (id: number | null) => {
//   return useQuery({
//     queryKey: ['post', id],
//     queryFn: () => getPostsById(id as number),
//     enabled: !!id,
//   });
// };

export const useGetPostById = (id: number | null) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: ({ queryKey }) => {
      const [, postId] = queryKey as ['post', number];
      return getPostsById(postId);
    },
    enabled: id !== null,
  });
};
