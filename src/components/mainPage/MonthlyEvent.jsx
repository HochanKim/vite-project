import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button.jsx';
import monthEvent from '../../data/monthEvent.js';

// CSS 설정
const boxDesign = `
    border 
    border-black 
    box-border 
    w-49/100 
    h-9/10`;

const TitleTag = `
    text-4xl
    font-bold 
    mb-8
    whitespace-nowrap`;

const bannerText01 =`
    text-4xl
    font-semibold
    whitespace-nowrap`;

const bannerText02 =`
    font-medium
    text-xl`;

const eventText =`
    font-medium
    text-xl
    whitespace-nowrap`;

const rightEvents = `
    h-full
    justify-between
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
            <h1 className={`${TitleTag}`}>이달의 행사 안내</h1>
            <div className={
                `h-full
                 flex
                 items-center 
                 justify-between`
            }>
                {/* 섹션 좌측 영역 */}
                <div className={`${boxDesign} relative p-6`}>
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
                        className={`absolute bottom-6 left-6`}>
                        신청하기
                    </Button>
                </div>

                {/* 섹션 우측 영역 */}
                <div className={`${boxDesign} flex justify-between items-center pl-0 pt-6 pb-6 pr-6`}>
                    {monthEvent.map((event) => (
                        <>
                            <div className={`${rightEvents} p-6`}>
                                <h2 className={`${TitleTag}`}>
                                    {event.title01}
                                    <br />
                                    {event.title02}
                                </h2>  
                                <Button variant="special" padding='px-3 py-1' className={`text-xl mb-2`}>
                                    일시
                                </Button>
                                <p className={`${eventText} mb-6`}>
                                    {event.yymmddtt}
                                </p>
                                <Button variant="special" padding='px-3 py-1' className={`text-xl mb-2`}>
                                    장소
                                </Button>
                                <p className={`${eventText}`}>
                                    {event.site}
                                </p>
                            </div>
                            <div className={`${rightEvents}`}>
                                <img src={event.src} className={`w-full h-full object-center object-scale-down`}/>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MonthlyEvent;