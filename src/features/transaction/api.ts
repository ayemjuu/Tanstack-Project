import { api } from '@/utils/api';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await api.get<Post[]>('/posts');
  return data;
};
