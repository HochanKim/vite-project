import { useState, useEffect, use } from 'react';
import MyBanner from '../components/mainPage/MyBanner.jsx'; // 배너 컴포넌트 불러오기
import MonthlyEvent from '../components/mainPage/MonthlyEvent.jsx'; // '이달의 행사 안내' 컴포넌트 불러오기
import IminProgram from '../components/mainPage/IminProgram.jsx'; // '이달의 행사 안내' 컴포넌트 불러오기

function MainPage() {
    // 홈페이지 메인 영역
    return (
        <>
            {/* 배너 컴포넌트 추가 */}
            <MyBanner />
            {/* 이달의 행사 안내 */}
            <MonthlyEvent />
            {/* 이민 프로그램 안내 */}
            <IminProgram />
        </>
    )
}

export default MainPage