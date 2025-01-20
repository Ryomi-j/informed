import { Fragment } from "react";
import { DEFAULT_KEYWORD } from "@/lib/constants/keyword";
import { KeywordTabs } from "@/lib/components/keywordTabs";
import { TabContent } from "@/lib/components/tabContent";
import { Tabs } from "@/lib/ui/tabs";
import { Button } from "@/lib/ui/button";
import { RefreshCwIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import QueryProvider from "@/lib/components/queryProvider";
import { ROUTES } from "@/lib/constants/routes";

export default async function Home(props: {
  searchParams: Promise<{ keyword: string }>;
}) {
  let { keyword } = await props.searchParams;
  if (!keyword) keyword = Object.keys(DEFAULT_KEYWORD)[0];

  return (
    <Fragment>
      <Tabs defaultValue={keyword} className="w-full">
        <div className="w-full bg-white">
          <KeywordTabs selectedKeyword={keyword} />
        </div>
        <div className="max-w-screen-xl mx-auto w-full">
          <QueryProvider>
            <TabContent />
          </QueryProvider>
        </div>
      </Tabs>
      <Link href={ROUTES.KEYWORDS} className="fixed bottom-4 right-10 w-8 h-8">
        <Button>
          <SettingsIcon className="w-4 h-4" />
        </Button>
      </Link>
    </Fragment>
  );
}
