import { Button } from "@/components/ui/button";

type UsersPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function UsersPagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: UsersPaginationProps) {
  return (
    <div className="flex items-center justify-between pt-4">
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
