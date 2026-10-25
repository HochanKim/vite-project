import './style/App.css'
import Header from './components/layout/Header'; // 헤더 추가
import MainPage from './pages/index'; // 메인 페이지 추가


function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App