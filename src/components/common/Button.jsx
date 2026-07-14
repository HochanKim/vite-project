import React, { useState, useEffect } from 'react';

function Button({
    // 버튼에서 사용 할 파라미터 지정
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
}) {

    const styles = {
        // 기본적인 버튼 스타일 지정
        primary:
            "bg-blue-800 hover:bg-blue-500 text-white",
        secondary:
            "bg-white border border-gray-300 hover:bg-gray-100",
        special:
            "bg-[#ffd700] hover:bg-[#A98352] text-white"
    }

    return(
        <button
            onClick={onClick}
            className={`
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                cursor-pointer
                ${styles[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    )
}

export default Button;