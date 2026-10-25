// 이 파일에서 홈페이지의 '이달의 행사 안내' 섹션의 오른쪽 부분에 행사들을 수정하면 됩니다.
// 월간 행사 포스터 가져오기
import event01 from '../assets/event/260718-seminar.jpg';
import event02 from '../assets/event/260730-seminar.jpg';

const monthEvent = [
    // 월간 행사들의 데이터 매핑 (상수로 선언)
    // 'MonthlyEvent.jsx' 파일에 적용할 컴포넌트 영역
    {
        // 월간 행사 01
        id: 1,
        type: "image",
        src: event01,
        alt: '0718 행사 포스터',

        title01: "미국 투자이민",
        title02: "CMB 추천 프로젝트",
        yymmddtt: "07/18(토) 오후 2시",
        site: "클럽이민(주) 본사 세미나실",
    },
    {
        // 월간 행사 02
        id: 2,
        type: "image",
        src: event02,
        alt: '0730 행사 포스터',

        title01: "NIW·EB-1",
        title02: "온라인 설명회",
        yymmddtt: "07/30(목) 낮 12시",
        site: "Zoom 온라인 설명회",
    },
]

export default monthEvent;