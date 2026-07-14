// 메인 페이지의 슬라이드 배너 영역에 게시할 이미지, 비디오 등 컨텐츠 불러오기
import mainBanner01 from '../assets/main/usa_main01.mp4';
import mainBanner02 from '../assets/main/europe01.jpg';
import mainBanner03 from '../assets/main/top25_ceo_pc.png';

const slideBanners = [
  {
    // 슬라이드 배너 1st
    id: 1,
    type: "video",
    src: mainBanner01,

    id1_title01: "글로벌 자산과 미래를 잇는",
    id1_highlight: "프리미엄",
    id1_title02: "이민 컨설팅",

    id1_text01: "Since 1984! 40년 이상 전문성과 신뢰로",
    id1_text02: "고객의 성공적인 글로벌 라이프를 함께합니다.",
  },
  {
    // 슬라이드 배너 2nd
    id: 2,
    type: "image",
    src: mainBanner02,

    id2_title01: "유럽 거주의 새로운 시작",
    id2_highlight01: "Golden Visa",
    id2_title02: "&",
    id2_highlight02: "EU 롱텀 레지던스",
    
    id2_text01: "맞춤형 유럽 투자이민",
    id2_text02: "전문 컨설팅을 제공합니다.",
  },
  {
    // 슬라이드 배너 3rd
    id: 3,
    type: "image",
    src: mainBanner03,

    id3_title01: "세계가 인정하는",
    id3_title02: "베테랑 이민 컨설턴트",

    id3_text01: "고객의 인생을 책임집니다.",
    id3_text02: "해외 진출, 클럽이민과 함께 시작하세요",
  },
];

export default slideBanners;