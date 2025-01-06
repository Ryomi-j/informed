"use client";

import { ROUTES } from "@/lib/constants/routes";
import { Button } from "@/lib/ui/button";
import { CircleAlertIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <CircleAlertIcon className="max-w-24 max-h-24 w-24 h-24 fill-red-500 text-white" />
        <h1 className="text-4xl font-bold">오류 발생</h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg text-gray-600">
          문제가 발생했습니다. 잠시 후 다시 시도해주세요.
        </h2>
        <p className="text-sm text-gray-500">
          페이지를 불러오는 데 문제가 발생했습니다.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-8">
        <Button variant="outline" className="px-3 py-6" onClick={() => reset()}>
          다시 시도
        </Button>
        <Button className="px-3 py-6" onClick={() => router.push(ROUTES.HOME)}>
          메인페이지로 돌아가기
        </Button>
      </div>
    </main>
  );
}
