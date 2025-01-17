import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const formatDate = (date: string) => {
  if (dayjs().diff(date, "day") < 1) {
    return dayjs(date).format("HH:mm");
  }
  return dayjs(date).format("YYYY/MM/DD");
};
