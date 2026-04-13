import { useState, useEffect, use } from 'react'
import companyLogo from '../src/assets/companyLogo.png'
// 달력 불러오기
import Calendar from 'react-calendar'
import './App.css'

function Header() {
  // 헤더 컴포넌트
  return (
    <header>
      <a href="#none">
        <img src={companyLogo} alt="Company Logo" className="logo" />
      </a>
      <ul>
        <li>회사소개</li>
        <li>미국</li>
        <li>캐나다</li>
        <li>유럽</li>
        <li>아시아 & 오세아니아</li>
        <li>중남미</li>
        <li>유학센터</li>
        <li>커뮤니티</li>
      </ul>
    </header>
  )
}

function Callendar() {
  // 달력 컴포넌트
  const [date, setDate] = useState(new Date());
  return (
    <section className="calendar">
      <Calendar 
        onChange={setDate} 
        value={date} 
        showNeighboringMonth={false}
        // 달력 날짜 포맷 설정 ('~일'을 제외한 숫자만 표시)
        formatDay={(locale, date) => date.getDate()}
      />
    </section>
  )
}

function SlideBanner() {
  // 홈페이지 배너 컴포넌트
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 'bnr01', text: '배너01' },
    { id: 'bnr02', text: '배너02' },
    { id: 'bnr03', text: '배너03' },
    { id: 'bnr04', text: '배너04' },
    { id: 'bnr05', text: '배너05' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5초마다 배너 전환
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="banner">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${slide.id} ${index === currentSlide ? 'active' : ''}`}
          >
            {slide.text}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

function Invest() {
  // 미국 투자이민 프로젝트 컴포넌트
  const projects = [
    'EB-5 프로젝트 01',
    'EB-5 프로젝트 02',
    'EB-5 프로젝트 03',
    'EB-5 프로젝트 04',
    'EB-5 프로젝트 05',
  ]

  const items = [...projects, ...projects] // 같은 항목을 두 번 반복

  return (
    <section className="invest">
      <h2>미국 투자이민 프로젝트</h2>
      <div className="rolling-wrap">
        <ul className="rolling-list">
          {items.map((text, index) => (
            <li key={index} className="eb5-project">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Types() {
  // 이민 프로그램 영역
  const IminData = [
    { id: 1, en: "Traveling with pets", ko: "반려동물", bgColor: "#80CAFF"},
    { id: 2, en: "Airport lounge", ko: "공항 라운지", bgColor: "#5D4037"},
    { id: 3, en: "Shopping", ko: "쇼핑", bgColor: "#A29BFE"},
    { id: 4, en: "Restaurant", ko: "식당", bgColor: "#74B9FF"}
  ];

  return (
    <>
    <div className="nav-card" style={{ backgroundColor: bgColor }}>
      <img src={img} alt={ko} className="card-image" />
      <div className="text-wrapper">
        <span className="text-en">{en}</span>
        <h3 className="text-ko">{ko}</h3>
      </div>
    </div>
    </>
  )
}

function App() {
  return (
    <>
      <div className="wrap-section">
        <Header />
        <div className='first-section'>
          <Callendar />
          <SlideBanner />
        </div>
        <Invest />
        <Types />
      </div>
    </>
  )
}

export default App