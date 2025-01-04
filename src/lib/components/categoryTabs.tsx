import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { DEFAULT_CATEGORY } from "../constants/category";
import Link from "next/link";
import { clsx } from "clsx";

export function CategoryTabs({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  return (
    <TabsList className="flex gap-5">
      {Object.keys(DEFAULT_CATEGORY).map((category) => (
        <Link href={`?category=${category}`} key={category} className="w-fit">
          <TabsTrigger
            value={category}
            className={clsx(
              "w-full",
              selectedCategory === category
                ? "text-black border-b-2 border-black"
                : "text-gray-300"
            )}
          >
            {DEFAULT_CATEGORY[category as keyof typeof DEFAULT_CATEGORY]}
          </TabsTrigger>
        </Link>
      ))}
    </TabsList>
  );
}
