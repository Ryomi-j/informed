"use client";

import { cn } from "../utils/style";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (search.length === 0) return;

    if (e.key === "Enter") {
      const params = new URLSearchParams();
      params.set("keyword", search);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    // TODO: Server Action 추가
    <div
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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-none shadow-none focus:outline-none focus:border-transparent"
        style={{
          boxShadow: "none",
        }}
        onKeyDown={handleSearch}
      />
    </div>
  );
};
