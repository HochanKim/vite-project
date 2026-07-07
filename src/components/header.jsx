import { useState, useEffect, use } from 'react'
import companyLogo from '../assets/companyLogo.png'

function Header() {
  // 헤더 컴포넌트
  return (
    <header>
     <div 
        className='
         w-9/10 
         mx-auto 
         flex 
         items-center 
         justify-between py-4'
     >
      <a 
        href="#none"
        className='
         inline-block 
         w-1/5'
      >
        <img src={companyLogo} 
            alt="Company Logo" 
            className='w-100%'
        />
      </a>
      
      
      {/* 헤더 오른쪽 연락처 */}
      <ul>
        <li className='text-2xl font-bold'>&#9742; 02-564-8888</li>
      </ul>
     </div>
    </header>
  )
}

export default Header