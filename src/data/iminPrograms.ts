// 해당 섹션에 게시할 이미지, 비디오 등 컨텐츠 불러오기
import usaPic from '../assets/main/usa01.jpg';
import canadaPic from '../assets/main/canada01.jpg';
import europePic from '../assets/main/europe02.jpg';
import asiaPic from '../assets/main/asia01.jpg';


const iminPrograms = [
  // 이민 프로그램 섹션에 넣을 컨텐츠 정보들 매핑
  // 'IminProgram.jsx' 파일에 적용할 컴포넌트 영역
  {
    // 미국 이민
    id: 1,
    link: "/region/usa",
    src: usaPic,
    alt: "미국 이미지",

    title: "미국 EB-5 투자이민",
    script: "합법적인 투자로 미국 영주권 취득 및 자녀 교육, 사업의 기회 확보",
    move: "자세히 보기",
  },
  {
    // 캐나다 이민
    id: 2,
    link: "/region/canada",
    src: canadaPic,
    alt: "캐나다 이미지",

    title: "캐나다 이민",
    script: "안정적인 캐나다 영주권 기회와 다양한 교육 및 비즈니스 기회",
    move: "자세히 보기",
  },
  {
    // 유럽 이민
    id: 3,
    link: "/region/europe",
    src: europePic,
    alt: "유럽 이미지",

    title: "유럽 투자이민",
    script: "장기 거주증 확보와 자유로운 이동, 삶의 질을 높이는 최적의 선택",
    move: "자세히 보기",
  },
  {
    // 아시아 프로그램
    id: 4,
    link: "/region/asia",
    src: asiaPic,
    alt: "아시아 이미지",

    title: "아시아 거주비자",
    script: "아시아 주요국 거주비자 취득으로 글로벌 비즈니스 확장",
    move: "자세히 보기",
  },
];

export default iminPrograms;