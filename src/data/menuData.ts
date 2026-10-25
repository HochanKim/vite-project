 // 헤더 영역의 메뉴들의 데이터 매핑 모음 ('Header.jsx'에서 사용)
const menuData = [
  {
    // 헤더 1st 메인 메뉴
    id: 1,
    title: "회사소개",
    link: "/company",
    subMenus: [
      {
        title: "연혁",
        link: "/company/history"
      },
      {
        title: "찾아오시는 길",
        link: "/company/location"
      },
      {
        title: "전문가 소개",
        link: "/company/expert"
      }
    ]
  },
  {
    // 헤더 2nd 메인 메뉴
    id: 2,
    title: "투자이민 프로젝트",
    link: "/project",
    subMenus: [
      {
        title: "AAEB5",
        link: "/eb5/partners01"
      },
      {
        title: "Bether Capital",
        link: "/eb5/partners02"
      },
      {
        title: "EB5Capital",
        link: "/eb5/partners03"
      },
      {
        title: "EB5AN",
        link: "/eb5/partners04"
      },
    ]
  },
  {
    // 헤더 3rd 메인 메뉴
    id: 3,
    title: "국가별 이민 안내",
    link: "/country",
    subMenus: [
      {
        title: "미국",
        link: "/region/usa"
      },
      {
        title: "캐나다",
        link: "/region/canada"
      },
      {
        title: "유럽",
        link: "/region/europe"
      },
      {
        title: "아시아",
        link: "/region/asia"
      },
      {
        title: "오세아니아",
        link: "/region/oceania"
      },
      {
        title: "중남미/카리브해",
        link: "/region/latin-america"
      }
    ]
  },
  {
    // 헤더 4th 메인 메뉴
    id: 4,
    title: "성공 사례",
    link: "/country",
    subMenus: [
      {
        title: "투자이민 수속",
        link: "/success/investment"
      },
      {
        title: "전문가 이민 수속",
        link: "/success/expert"
      },
      {
        title: "취업이민 수속",
        link: "/success/employment"
      },
      {
        title: "유럽이민 수속",
        link: "/success/europe"
      },
      {
        title: "거주비자 수속",
        link: "/success/residence"
      },
      {
        title: "시민권 수속",
        link: "/success/citizenship"
      }
    ]
  },
  {
    // 헤더 5th 메인 메뉴
    id: 5,
    title: "고객센터",
    link: "/country",
    subMenus: [
      {
        title: "공지사항",
        link: "/support/notice"
      },
      {
        title: "제휴 문의",
        link: "/support/partnership"
      },
      {
        title: "행사 신청",
        link: "/support/event"
      }
    ]
  },
];

export default menuData;