import { cn } from "../utils/style";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export type SearchbarProps = {
  placeholder: string;
  iconPosition: "left" | "right";
  className?: string;
};

export const Searchbar = ({
  placeholder,
  iconPosition,
  className,
}: SearchbarProps) => {
  return (
    // TODO: Server Action 추가
    <form
      className={cn(
        `flex items-center gap-2 px-2 border border-gray-200 rounded-md w-full has-[:focus]:border-gray-500,`,
        iconPosition === "right" && "flex-row-reverse",
        className
      )}
    >
      <label htmlFor="search">
        <SearchIcon className="w-4 h-4 text-gray-500" />
      </label>
      <Input
        id="search"
        type="text"
        placeholder={placeholder}
        className="border-none shadow-none focus:outline-none focus:border-transparent"
        style={{
          boxShadow: "none",
        }}
      />
    </form>
  );
};
