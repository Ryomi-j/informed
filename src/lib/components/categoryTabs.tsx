import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { DEFAULT_CATEGORY } from "../constants/category";
import Link from "next/link";
import { clsx } from "clsx";
import { ScrollArea } from "../ui/scroll-area";
import { ScrollBar } from "../ui/scroll-area";

export function CategoryTabs({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  return (
    <ScrollArea className="w-full max-w-screen-xl mx-auto">
      <TabsList className="flex gap-5">
        {Object.entries(DEFAULT_CATEGORY).map(([category, value]) => (
          <Link
            href={`?category=${category}`}
            key={category}
            className="w-fit min-w-fit"
          >
            <TabsTrigger
              value={category}
              className={clsx(
                "w-full pb-2",
                selectedCategory === category
                  ? "text-black border-b-4 border-black"
                  : "text-gray-500"
              )}
            >
              {value}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
