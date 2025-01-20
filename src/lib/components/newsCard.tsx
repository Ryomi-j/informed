"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { News } from "../types/news";
import { formatDate } from "../utils/date";
import { ROUTES } from "../constants/routes";

export function NewsCard({
  keyword,
  content,
}: {
  keyword: string;
  content: News;
}) {
  return (
    <Card className="w-[400px] h-[396px]">
      <CardHeader className="h-3/6">
        {content.thumbnail_small ? (
          <Image
            src={content.thumbnail_small}
            alt={`${keyword} news article`}
            width={400}
            height={150}
            className="object-cover overflow-hidden rounded-lg"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-lg">
            <p className="text-gray-500">No Image</p>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-3 h-2/6">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="truncate">{content?.source?.name ?? ""}</span>
          <span>•</span>
          <span>{formatDate(content?.date ?? "")}</span>
        </div>
        <CardTitle className="leading-7	">{content?.title ?? ""}</CardTitle>
      </CardContent>
      <CardFooter className="h-1/6">
        <Link href={content?.link ?? ROUTES.HOME} target="_blank">
          <Button variant="outline">자세히 보기 →</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
