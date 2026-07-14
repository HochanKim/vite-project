import { useState, useEffect, use } from 'react'
import './style/App.css'
import Header from './components/layoutComponents/Header.jsx'; // 헤더 추가
import MainPage from './pages/Index.jsx' // 메인 페이지 추가


function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App