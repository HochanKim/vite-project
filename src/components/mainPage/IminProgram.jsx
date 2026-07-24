import React from 'react';
import Button from '../common/Button.jsx';
import iminPrograms from '../../data/iminPrograms.js'; // 이민 프로그램 섹션에 적용할 컨텐츠 파일
import { Link } from "react-router-dom";

// 공통 CSS 설정
import '../../style/App.css';

function IminProgram() {
    return (
        <section className={`bg-[#0B1F33]`}>
            <div className={`w-9/10 h-screen mx-auto box-border py-20 relative`}>
                <h1 className='title-tag text-white'>이민 프로그램 안내</h1>
                <Button variant="long_button" className={`absolute top-20 right-0`}>전체 프로그램 보기 →</Button>
                <div className={`flex justify-between items-stretch box-border w-full cursor-pointer`}>
                    {iminPrograms.map((program) => (
                        <div key={program.id} className={`w-full mx-1`}>
                            <Link to={program.link} className='w-full h-full flex flex-col'>
                                <img src={program.src} alt={program.alt} className={`w-full h-64 object-cover`}/>
                                <div className={`bg-white p-4 flex flex-col flex-1`}>
                                    <h2 className={`text-2xl font-semibold mb-2`}>
                                        {program.title}
                                    </h2>  
                                    <p className={`mb-20 text-xl`}>
                                        {program.script}
                                    </p>
                                    <p className={`mt-auto`}>
                                        {program.move} →
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IminProgram;