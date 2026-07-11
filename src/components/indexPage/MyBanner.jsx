import React from 'react';
// ①  필요한 swiper 컴포넌트 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';

// ② 필요한 swiper 추가 스타일 가져오기
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ③ 사용할 기능(모듈) 가져오기
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// ④ CSS 설정
const bannerHeight = `w-full h-100`;
import '../../style/App.css';

function MyBanner() {
    return (
        <Swiper
            // 사용할 모듈들을 배열로 등록
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
            className="mySwiper"
        >
            <SwiperSlide>
                <div className={
                     `${bannerHeight}
                     bg-gray-500`
                    }
                >
                    배너 01
                </div>
            </SwiperSlide>
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