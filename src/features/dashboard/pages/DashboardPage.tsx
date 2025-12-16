// import { Button } from '@/components/ui/button';
// import { DataTable } from '@/components/ui/dataTable';
// import { usePosts } from '@/features/transaction/hook/useGetPosts';
// import { useSearchParams } from 'react-router-dom';
// import { useGetPostPaginated } from '../hooks/useGetPostPaginated';

// export default function DashboardPage() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const pageParam = searchParams.get('page');
//   // const page = pageParam ? Number(pageParam) : 1;

//   const page = Number(searchParams.get('page') || 1);
//   const size = Number(searchParams.get('size') || 10);

//   const { data, isLoading, isError, isFetching } = useGetPostPaginated(page, size);

//   if (isLoading) return <p>Loading posts...</p>;
//   if (isError) return <p>Failed to load posts</p>;

//   return (
//     <div className="content space-y-4">
//       <Button>Click</Button>

//       {data && (
//         <DataTable
//           data={data.data}
//           columns={[
//             { header: 'ID', accessor: 'id' },
//             { header: 'User ID', accessor: 'userId' },
//             { header: 'Title', accessor: 'title' },
//             { header: 'Body', accessor: 'body' },
//           ]}
//           pagination={{
//             page: data.page,
//             totalPages: data.totalPages,
//             onPageChange: (newPage) => {
//               setSearchParams({ page: String(newPage) });
//             },
//           }}
//         />
//       )}

//       {isFetching && <p className="text-sm text-muted-foreground">Updating…</p>}
//     </div>
//   );
// }
import { DataTable } from '@/components/ui/dataTable';
import { useSearchParams } from 'react-router-dom';
import { useGetPostPaginated } from '../hooks/useGetPostPaginated';

export default function DashboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get('page');
  const sizeParam = searchParams.get('size');

  const page = pageParam ? Number(pageParam) : NaN;
  const size = sizeParam ? Number(sizeParam) : NaN;

  const { data, isLoading, isError, isFetching } = useGetPostPaginated({
    page,
    size,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts</p>;

  return (
    <div className="content space-y-4">
      {data && (
        <DataTable
          data={data.data}
          columns={[
            { header: 'ID', accessor: 'id' },
            { header: 'User ID', accessor: 'userId' },
            { header: 'Title', accessor: 'title' },
            { header: 'Body', accessor: 'body' },
          ]}
          pagination={{
            page: data.page,
            totalPages: data.totalPages,
            onPageChange: (newPage) => {
              setSearchParams({
                page: String(newPage),
                size: String(size),
              });
            },
          }}
        />
      )}

      {isFetching && <p className="text-sm text-muted-foreground">Updating…</p>}
    </div>
  );
}
