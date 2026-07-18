import React from 'react';
import Button from '../common/Button.jsx';

// 공통 CSS 설정
import '../../style/App.css';

function IminProgram() {
    return (
        <section className={`bg-[#0B1F33]`}>
            <div className={`w-9/10 h-screen mx-auto box-border py-20 relative`}>
                <h1 className='title-tag text-white'>이민 프로그램 안내</h1>
                <Button variant="long_button" className={`absolute top-20 right-0`}>전체 프로그램 보기 →</Button>
            </div>
        </section>
    )
}

export default IminProgram;