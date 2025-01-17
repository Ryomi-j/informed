import { LoaderCircle } from "lucide-react";

export function Loading() {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full">
      <LoaderCircle className="w-10 h-10 animate-spin" />
    </div>
  );
}
