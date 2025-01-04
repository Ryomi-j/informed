import { Switch } from "@/lib/ui/switch";
import { BellIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { Button } from "@/lib/ui/button";
import { NOTICE_TIME_OPTIONS } from "@/lib/constants/notice";
import NoticeItem from "../noticeItem";

export default function NotificationForm() {
  const DEFAULT_NOTICE_TIME_PLACEHOLDER = "알림 수신 시간을 선택하세요";

  return (
    <form action="" className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 p-4 py-8 rounded-lg shadow-md bg-white">
        <section className="flex items-center justify-between">
          <label
            htmlFor="push"
            className="flex items-center justify-between gap-4"
          >
            <BellIcon className="w-6 h-6 fill-black" />
            <div>
              <h3 className="text-lg font-bold">푸쉬 알림</h3>
              <div className="text-gray-500">
                브라우저 알림을 통해 즉시 업데이트를 받아보세요
              </div>
            </div>
          </label>
          <Switch id="push" />
        </section>
        <NoticeItem />
        <section className="flex flex-col gap-4">
          <h4 className="font-bold">알림 수신 시간</h4>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={DEFAULT_NOTICE_TIME_PLACEHOLDER} />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(NOTICE_TIME_OPTIONS).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </section>
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="w-fit">
          저장
        </Button>
      </div>
    </form>
  );
}
