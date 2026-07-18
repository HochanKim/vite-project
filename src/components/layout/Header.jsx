import { useState, useEffect, use } from 'react';
import companyLogo from '../../assets/companyLogo.png';
import menuData from '../../data/menuData.js';
import { Link } from "react-router-dom";

function Header() {
  // 헤더 컴포넌트
  return (
    <header className={`max-w-full h-20 fixed inset-0 z-100 bg-white/60`}>
      <div className={`w-9/10 mx-auto flex items-center justify-between py-4`}>
        {/* 회사 로고 */}
        <Link to="/" className='shrink-0'>
          <img src={companyLogo} 
              alt="Company Logo" 
              className={`w-56 cursor-pointer`}/>
        </Link>
        
        {/* 헤더 메뉴 */}
        <nav className="flex-1 flex justify-center">
          <ul className='flex gap-8'>
            {menuData.map((menu) => (
              <li key={menu.id}
                className='relative group text-center whitespace-nowrap font-bold'>
                <Link to={menu.link}
                  className='block px-4 py-3'>
                  <span className='group-hover:text-blue-500 transition-colors duration-300'>
                    {menu.title}
                  </span>
                </Link>
                {/* 서브 메뉴 */}
                <ul className='absolute top-full left-1/2 -translate-x-1/2 min-w-max bg-white 
                  rounded-xl shadow-lg
                  invisible opacity-0
                  group-hover:visible group-hover:opacity-100
                  transition-opacity duration-300 z-10 font-normal'
                >
                  {menu.subMenus.map((subMenu) => (
                    <li key={subMenu.title}>
                      <Link 
                       to={subMenu.link}
                       className='block px-4 py-2 font-medium hover:text-blue-500 transition-colors duration-300'>
                        {subMenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* 헤더 오른쪽 연락처 */}
        <div className='shrink-0'>
          <span className='text-xl align-middle font-bold whitespace-nowrap'>
            &#9742; 02-549-5993
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header