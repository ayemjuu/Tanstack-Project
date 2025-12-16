// import { api } from '@/utils/api';

// export interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }

// export interface PaginatedPosts {
//   data: Post[];
//   page: number;
//   totalPages: number;
// }

// export const getPostPaginated = async (
//   page: number,
// ): Promise<PaginatedPosts> => {
//   const { data } = await api.get<PaginatedPosts>(`/posts?page=${page}`);
//   return data;
// };

import { api } from '@/utils/api';
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PaginatedPosts {
  data: Post[];
  page: number;
  totalPages: number;
}

export const getPostPaginated = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}): Promise<PaginatedPosts> => {
  const { data } = await api.get<PaginatedPosts>(
    `/posts?page=${page}&size=${size}`,
  );

  return data;
};
