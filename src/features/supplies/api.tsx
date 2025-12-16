import { api } from '@/utils/api';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const getPostsById = async (id: number): Promise<Post> => {
  const { data } = await api.get<Post>(`/posts/${id}`);
  return data;
};
