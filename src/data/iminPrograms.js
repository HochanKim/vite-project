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
    src: usaPic,
    alt: "미국 이미지",

    title: "미국 EB-5 투자이민",
    script: "합법적인 투자로 미국 영주권 취득 및 자녀 교육, 사업의 기회 확보",
    move: "자세히 보기",
  },
];

export default iminPrograms;