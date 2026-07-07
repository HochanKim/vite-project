import { useState, useEffect, use } from 'react'
import './App.css'
import Header from './components/Header.jsx' // 헤더 추가


function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
      </div>
    </>
  )
}

export default App