export const NOTICE_TIME_OPTIONS = {
  immediately: "즉시",
  everyTime: "매시간",
  everyDay: "매일",
  everyWeek: "매주",
};

export const NOTICE_TIME_OPTIONS_LIST = [
  {
    keyword: "알림 종류",
    content: [
      {
        title: "공지사항",
        subTitle: "notice",
        description: "중요한 공지사항을 받아보세요",
      },
      {
        title: "업데이트",
        subTitle: "update",
        description: "새로운 기능과 업데이트 소식을 받아보세요",
      },
      {
        title: "마케팅",
        subTitle: "marketing",
        description: "프로모션과 특별 혜택 정보를 받아보세요",
      },
    ],
  },
  {
    keyword: "알림 수신 방법", 
    content: [
      {
        title: "이메일",
        subTitle: "email",
        description: "이메일로 알림을 받아보세요",
      },
      {
        title: "푸시 알림",
        subTitle: "push",
        description: "푸시 알림을 통해 알림을 받아보세요",
      },
    ],
  },
];
