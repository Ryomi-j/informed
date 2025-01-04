import { Fragment, Suspense } from "react";
import { DEFAULT_CATEGORY } from "@/lib/constants/category";
import { CategoryTabs } from "@/lib/components/categoryTabs";
import { TabContent } from "@/lib/components/tabContent";
import { Tabs } from "@/lib/ui/tabs";
import { Button } from "@/lib/ui/button";
import { RefreshCwIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

export default async function Home(props: {
  searchParams: Promise<{ category: string }>;
}) {
  let { category } = await props.searchParams;

  // TODO: (로그인 기능 구현 시) 사용자가 선택한 첫번재 카테고리로 변경
  if (!category) category = Object.keys(DEFAULT_CATEGORY)[0];

  return (
    <Fragment>
      <Tabs defaultValue={category} className="w-full">
        <div className="w-full bg-white">
          <CategoryTabs selectedCategory={category} />
        </div>
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="flex items-center gap-2 w-full pt-2 text-gray-500">
            <Button>
              <RefreshCwIcon className="w-4 h-4" />
              <span>새로고침</span>
            </Button>
            <p>마지막 업데이트: </p>
            <span>5분 전</span>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <TabContent category={category} />
          </Suspense>
        </div>
      </Tabs>
      <Link href="/settings" className="fixed bottom-4 right-10 w-8 h-8">
        <Button>
          <SettingsIcon className="w-4 h-4" />
        </Button>
      </Link>
    </Fragment>
  );
}
