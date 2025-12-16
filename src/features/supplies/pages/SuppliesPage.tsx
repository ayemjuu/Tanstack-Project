import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useSearchParams } from 'react-router-dom';
import { useGetPostById } from '../hooks/useGetPostsById';
import { DataTable } from '@/components/ui/dataTable';

export default function SuppliesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const idParam = searchParams.get('id');
  const id = idParam ? Number(idParam) : null;
  const isOpen = Boolean(id);

  const { data, isLoading, isError } = useGetPostById(id);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Supplies</h1>

      <Button onClick={() => setSearchParams({ id: '2' })}>
        Open Supply #2
      </Button>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) setSearchParams({});
        }}
      >
        {/* Modal */}
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Supplies Modal</DialogTitle>
          </DialogHeader>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Failed to load post</p>}

          {data && (
            <DataTable
              data={[data]}
              columns={[
                { header: 'ID', accessor: 'id' },
                { header: 'User ID', accessor: 'userId' },
                { header: 'Title', accessor: 'title' },
                { header: 'Body', accessor: 'body' },
              ]}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
