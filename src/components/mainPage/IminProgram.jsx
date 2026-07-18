import React from 'react';
import Button from '../common/Button.jsx';
import iminPrograms from '../../data/iminPrograms.js'; // 이민 프로그램 섹션에 적용할 컨텐츠 파일

// 공통 CSS 설정
import '../../style/App.css';

function IminProgram() {
    return (
        <section className={`bg-[#0B1F33]`}>
            <div className={`w-9/10 h-screen mx-auto box-border py-20 relative`}>
                <h1 className='title-tag text-white'>이민 프로그램 안내</h1>
                <Button variant="long_button" className={`absolute top-20 right-0`}>전체 프로그램 보기 →</Button>
                <div className={`flex justify-between items-center pl-0 pt-6 pb-6 pr-6`}>
                    {iminPrograms.map((program) => (
                        <div key={program.id} className={`w-1/4`}>
                            <img src={program.src} alt={program.alt}/>
                            <h2>
                                {program.title}
                            </h2>  
                            <p>
                                {program.script}
                            </p>
                            <p>
                                {program.move} →
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IminProgram;