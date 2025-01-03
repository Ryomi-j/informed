import { cn } from "../utils";
import { Input } from "./input";
import { SearchIcon } from "lucide-react";

export type SearchbarProps = {
  placeholder: string;
  iconPosition: "left" | "right";
};

export const Searchbar = ({ placeholder, iconPosition }: SearchbarProps) => {
  return (
    <div
      className={cn(
        `flex items-center gap-2 px-2 border border-gray-200 rounded-md w-full has-[:focus]:border-gray-500`,
        iconPosition === "right" && "flex-row-reverse"
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
    </div>
  );
};
