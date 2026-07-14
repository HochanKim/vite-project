import { useState, useEffect, use } from 'react';
import MyBanner from '../components/mainPage/MyBanner.jsx'; // 배너 컴포넌트 추가
import MonthlyEvent from '../components/mainPage/MonthlyEvent.jsx'; // 배너 컴포넌트 추가

function MainPage() {
    // 홈페이지 메인 영역
    return (
        <>
            {/* 배너 컴포넌트 추가 */}
            <MyBanner />
            {/* 이달의 행사 안내 */}
            <MonthlyEvent />
        </>
    )
}

export default MainPage