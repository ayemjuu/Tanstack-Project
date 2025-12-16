import { Button } from '@/components/ui/button';
import { usePosts } from '../hook/useGetPosts';

export default function TransactionsPage() {
  const { data, isLoading, isError, refetch, isFetching } = usePosts();
  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts</p>;
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Posts</h1>

      {data?.slice(0, 10).map((post) => (
        <div key={post.id} className="rounded border p-4 bg-white">
          <h2 className="font-medium">{post.title}</h2>
          <p className="text-sm text-gray-600">{post.body}</p>
        </div>
      ))}

      <Button onClick={() => refetch()}>Refresh</Button>
    </div>
  );
}
