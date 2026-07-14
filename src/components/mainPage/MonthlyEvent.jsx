import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button.jsx';

// CSS 설정
const h1Tag = `
    text-4xl
    font-bold 
    my-12`;

const bannerText01 =`
    font-semibold
    text-4xl
`;

const bannerText02 =`
    font-medium
    text-xl
`;

function MonthlyEvent() {
    // useNavigate를 활용한 페이지 이동
    const moveTo = useNavigate();

    return(
        <section className={
                `w-9/10
                h-screen
                mx-auto
                box-border
                py-20`
            }
        >
            <h1 className={`${h1Tag}`}>이달의 행사 안내</h1>
            <div className={
                `h-full
                 flex
                 items-start 
                 justify-between`
            }>
                <div className={
                    `border 
                    border-black 
                    box-border 
                    w-49/100 
                    h-7/10
                    relative
                    p-6`
                }>
                    <div className={`my-8 block`}>
                        <p className={`${bannerText01}`}>
                            클럽이민이 제시하는
                        </p>
                        <p className={`${bannerText01}`}>
                            성공적인 글로벌 정착 전략
                        </p>
                    </div>
                    <p className={`${bannerText02}`}>
                        수많은 성공 사례를 축적해 온 클럽이민의 독보적인 인사이트를 확인하세요.
                        변화하는 이민 정책 속에서 당신의 시간을 가치 있게 바꿔줄 검증된 전문가들의 세미나가 준비되어 있습니다.
                    </p>
                    <Button 
                        onClick={() => moveTo("/support/event")}
                        className={
                            `absolute
                            bottom-6
                            left-6`
                    }>
                        신청하기
                    </Button>
                </div>
                <div className={`border border-black box-border w-49/100 h-7/10`}>

                </div>
            </div>
        </section>
    )
}

export default MonthlyEvent;