import React, { useState, useEffect } from 'react';

function Button({
    // 버튼에서 사용 할 props 지정
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
    padding = "px-6 py-3",
}) {

    const styles = {
        // 기본적인 버튼 스타일 지정
        primary:
            "bg-blue-800 hover:bg-blue-500 text-white cursor-pointer",
        secondary:
            "bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer",
        special:
            "bg-[#ffd700] text-black rounded"
    }

    return(
        <button
            onClick={onClick}
            className={`
                font-semibold
                transition-all
                duration-300
                ${styles[variant]}
                ${className}
                ${padding}
            `}
        >
            {children}
        </button>
    )
}

export default Button;