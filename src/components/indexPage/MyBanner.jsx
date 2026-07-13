import React from 'react';
import slideBanners from '../../data/slideBanner.js';  // 슬라이드 배너에 적용할 컨텐츠 파일

// ①  필요한 swiper 컴포넌트 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';

// ② 필요한 swiper 추가 스타일 가져오기
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ③ 사용할 기능(모듈) 가져오기
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// ④ CSS 설정
const bannerHeight = `
    w-full
    h-screen` /* h-screen = 'height: 100vh;' */;

const bannerText01 =`
    font-semibold
    text-white
    text-6xl
    leading-20
`;

const bannerText02 =`
    font-medium
    text-white
    text-2xl
    leading-8
`;

import '../../style/App.css';

function MyBanner() {
    return (
        <Swiper
            // Swiper에서 사용할 모듈들을 배열로 등록
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50} // 슬라이드 사이 여백
            slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
            loop={true} // 무한 반복 여부

            navigation={false} // 이전/다음 버튼 사용 여부
            pagination={{ clickable: true }} // 페이지 버튼 사용 여부
            autoplay={{
                delay: 5000, // 5초마다 자동 슬라이드
                disableOnInteraction: false, // 사용자가 드래그해도 자동 재생 유지
            }}
            className={`${bannerHeight}
                mySwiper`
            }
        >
            {slideBanners.map((banner) => (
                <SwiperSlide 
                    key={banner.id}
                    className={`
                        relative
                    `}
                >
                    {/* 컨텐츠 영역 (이미지 or 비디오) */}
                    {banner.type === "image" 
                     ? (
                    // type값이 "image"와 일치할 경우
                            <img src={banner.src} 
                                alt={banner.type} 
                            />
                    ) : (
                    // type값이 "image"와 다를 경우
                            <video src={banner.src} 
                                autoPlay
                                muted
                                loop
                                playsInline
                                className={`
                                  w-full
                                  h-full
                                  absolute
                                  inset-0
                                  object-cover
                                  object-center
                                `}
                            />
                        )
                    }
                    {/* 네이비 그라데이션 */}
                    <div
                        className="
                            absolute
                            inset-0

                            bg-gradient-to-r
                            from-[#0B1F33]/80
                            via-[#0B1F33]/50
                            to-transparent
                        "
                    />
                    {/* 배너 위 텍스트 영역 */}
                    <div className={`
                            absolute
                            left-20
                            bottom-40
                        `}>
                        <p className={`${bannerText01}`}>
                            글로벌 자산과 미래를 잇는
                        </p>
                        <p className={`
                            ${bannerText01}
                            mt-0
                            mb-8
                        `}>
                            <span className="text-[#BD9565] text-shadow">프리미엄</span> 이민 컨설팅
                        </p>
                        <p className={`${bannerText02}`}>
                            30년 이상 전문성과 신뢰로
                        </p>
                        <p className={`${bannerText02}`}>
                            고객의 성공적인 글로벌 라이프를 함께합니다.
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            <SwiperSlide>
                <div className={
                     `${bannerHeight}
                     bg-green-500`
                    }
                >
                    배너 02
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={
                     `${bannerHeight}
                     bg-yellow-500`
                    }
                >
                    배너 03
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default MyBanner;