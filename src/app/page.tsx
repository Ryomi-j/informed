import { Fragment, Suspense } from "react";
import { DEFAULT_CATEGORY } from "@/lib/constants/category";
import { CategoryTabs } from "@/lib/components/categoryTabs";
import { TabContent } from "@/lib/components/tabContent";
import { Tabs } from "@/lib/ui/tabs";

export default async function Home(props: {
  searchParams: Promise<{ category: string }>;
}) {
  let { category } = await props.searchParams;

  // TODO: (로그인 기능 구현 시) 사용자가 선택한 첫번재 카테고리로 변경
  if (!category) category = DEFAULT_CATEGORY.technology;

  return (
    <Fragment>
      <Tabs
        defaultValue={DEFAULT_CATEGORY.technology}
        className="w-full"
      >
        <div className="w-full bg-white">
          <CategoryTabs selectedCategory={category} />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <TabContent category={category} />
        </Suspense>
      </Tabs>
    </Fragment>
  );
}
