import { TabsContent } from "@/lib/ui/tabs";
import { NewsCard } from "./newsCard";

export function TabContent({ category }: { category: string }) {
  // TODO: 카테고리 데이터 가져오기
  // const categoryData = await getCategoryData(category)
  return (
    <TabsContent value={category} className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
      <NewsCard category={category} />
      <NewsCard category={category} />
      <NewsCard category={category} />
    </TabsContent>
  );
}
