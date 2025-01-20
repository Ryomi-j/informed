import { Fragment } from "react";
import { NOTICE_TIME_OPTIONS_LIST } from "@/lib/constants/notice";
import { Switch } from "../ui/switch";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";

export default function NoticeItem() {
  return (
    <Fragment>
      {NOTICE_TIME_OPTIONS_LIST.map(({ keyword, content }) => (
        <Fragment key={keyword}>
          <section className="flex flex-col gap-4">
            <h4 className="font-bold">{keyword}</h4>
            <div className="flex flex-col gap-4">
              {content.map(({ title, subTitle, description }) => (
                <div
                  key={subTitle}
                  className="flex items-center justify-between"
                >
                  <label htmlFor={subTitle} className="flex flex-col gap-1">
                    <p className="text-base font-bold">{title}</p>
                    <div className="text-gray-500">{description}</div>
                  </label>
                  <Switch id={subTitle} disabled />
                </div>
              ))}
            </div>
            <DropdownMenuSeparator />
          </section>
        </Fragment>
      ))}
    </Fragment>
  );
}
