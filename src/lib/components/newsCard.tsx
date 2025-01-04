import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import Image from "next/image";
import { DEFAULT_CATEGORY } from "../constants/category";
import { Button } from "../ui/button";
import Link from "next/link";

export function NewsCard({ category }: { category: string }) {
  return (
    <Card className="w-[400px] h-[396px]">
      <CardHeader>
        <Image src="" alt={`${category} news item`} width={400} height={198} />
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-gray-500">
          <span>{DEFAULT_CATEGORY.technology}</span>
          <span>•</span>
          {/* TODO: 시간 추가 */}
          <span>2시간 전</span>
        </div>

        <CardTitle>삼성전자, 새로운 AI 칩 개발 발표</CardTitle>
        <CardDescription className="text-gray-500 line-clamp-2">
          삼성전자가 차세대 AI 반도체 개발 계획을 발표했습니다. 이 번 칩은 기존
          제품 대비 성능이 2배 향상되었으며asfasdfasfasdf...
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link href="/">
          <Button variant="outline">자세히 보기 →</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
