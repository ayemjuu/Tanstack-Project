import { DataTable } from '@/components/ui/dataTable';
import { useGetPosts } from './hooks/useGetPosts';

export default function DashboardPage() {
  const { data, isLoading, isError, isFetching } = useGetPosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts</p>;

  return (
    <div className="content space-y-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      {data && (
        <DataTable
          data={data}
          columns={[
            { header: 'ID', accessor: 'id' },
            { header: 'User ID', accessor: 'userId' },
            { header: 'Title', accessor: 'title' },
            { header: 'Body', accessor: 'body' },
          ]}
        />
      )}

      {isFetching && <p className="text-sm text-muted-foreground">Updating…</p>}
    </div>
  );
}
