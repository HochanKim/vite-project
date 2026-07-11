import { useState, useEffect, use } from 'react'
import MyBanner from '../components/indexPage/MyBanner.jsx' // 배너 컴포넌트 추가

function MainPage() {
    // 홈페이지 메인 영역
    return (
        <section>
           {/* 배너 컴포넌트 추가 */}
            <MyBanner />
            <div className='
                w-9/10
                mx-auto'
            >
                <h1>Main Page</h1>
                <p>Welcome to the main page of the application.</p>
            </div>
        </section>
    )
}

export default MainPage