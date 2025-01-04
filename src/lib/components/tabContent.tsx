import { TabsContent } from "@/lib/ui/tabs";

export function TabContent({ category }: { category: string }) {
  // TODO: 카테고리 데이터 가져오기
  // const categoryData = ''
  return <TabsContent value={category}>{category}</TabsContent>;
}
