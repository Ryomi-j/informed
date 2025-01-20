"use client";

import { NewsCard } from "./newsCard";
import { News } from "../types/news";
import { useNews } from "../api/news";
import { Loading } from "./Loading";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

export function TabContent() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || ""; // URL에서 keyword 추출
  let { news, isLoading, error } = useNews(keyword);

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="w-full h-full text-center">에러가 발생했습니다.</div>
    );

  return (
    <Fragment>
      {!news || news.length === 0 ? (
        <div className="w-full h-full text-center">검색 결과가 없습니다.</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {news.map(
            (content: News) =>
              content.title && (
                <NewsCard
                  key={content.position}
                  content={content}
                  keyword={keyword}
                />
              )
          )}
        </div>
      )}
    </Fragment>
  );
}
