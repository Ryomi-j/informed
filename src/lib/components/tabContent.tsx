"use client";

import { TabsContent } from "@/lib/ui/tabs";
import { NewsCard } from "./newsCard";
import { News } from "../types/news";
import { useNews } from "../api/news";
import { Loading } from "./Loading";

export function TabContent({ category }: { category: string }) {
  const news = useNews(category);
  
  if (!news) return <Loading />;

  return (
    <TabsContent value={category} className="grid grid-cols-3 gap-4">
      {news.map(
        (content: News) =>
          content.title && (
            <NewsCard
              key={content.position}
              content={content}
              category={category}
            />
          )
      )}
    </TabsContent>
  );
}
