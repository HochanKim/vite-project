import { useState, useEffect, use } from 'react'
import './App.css'
import Header from './components/Header.jsx' // 헤더 추가
import MainPage from './pages/index.jsx' // 메인 페이지 추가


function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App