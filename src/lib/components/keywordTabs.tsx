import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { DEFAULT_KEYWORD } from "../constants/keyword";
import Link from "next/link";
import { clsx } from "clsx";
import { ScrollArea } from "../ui/scroll-area";
import { ScrollBar } from "../ui/scroll-area";

export function KeywordTabs({
  selectedKeyword,
}: {
  selectedKeyword: string;
}) {
  return (
    <ScrollArea className="w-full max-w-screen-xl mx-auto">
      <TabsList className="flex gap-5">
        {Object.entries(DEFAULT_KEYWORD).map(([keyword, value]) => (
          <Link
            href={`?keyword=${keyword}`}
            key={keyword}
            className="w-fit min-w-fit"
          >
            <TabsTrigger
              value={keyword}
              className={clsx(
                "w-full pb-2",
                selectedKeyword === keyword
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
