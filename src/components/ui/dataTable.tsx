import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type Column<T> =
  | {
      header: string;
      accessor: keyof T;
      cell?: never;
    }
  | {
      header: string;
      accessor?: never;
      cell: (row: T) => React.ReactNode;
    };

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface SimpleTableProps<T> {
  data?: T[];
  columns: Column<T>[];
  emptyText?: string;
  pagination?: PaginationProps;
}

export function DataTable<T>({
  data = [],
  columns,
  emptyText = 'No records found',
  pagination,
}: SimpleTableProps<T>) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, index) => (
              <TableHead key={index}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center text-muted-foreground"
              >
                {emptyText}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell key={colIndex}>
                    {col.cell
                      ? col.cell(row)
                      : String(row[col.accessor as keyof T])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {pagination && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  pagination.onPageChange(Math.max(1, pagination.page - 1))
                }
              />
            </PaginationItem>

            {Array.from({ length: pagination.totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    isActive={pagination.page === pageNumber}
                    onClick={() => pagination.onPageChange(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  pagination.onPageChange(
                    Math.min(pagination.totalPages, pagination.page + 1),
                  )
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
