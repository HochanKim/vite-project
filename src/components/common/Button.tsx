import type { ReactNode, MouseEventHandler } from 'react';

// 버튼 디자인 종류
type ButtonVariant = "primary" | "secondary" | "special" | "long_button";

// 버튼에서 사용 할 props 타입
interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: "sm" | "md" | "lg"; // 아직 크기별 스타일은 없음
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    padding?: string;
}

function Button({
    // 버튼에서 사용 할 props 지정
    children,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
    disabled = false,
    padding = "px-6 py-3",
}: ButtonProps) {

    const styles: Record<ButtonVariant, string> = {
        // 기본적인 버튼 스타일 지정
        primary:
            "bg-blue-800 hover:bg-blue-500 text-white cursor-pointer",
        secondary:
            "bg-white border border-gray-300 hover:bg-gray-100 cursor-pointer",
        special:
            "bg-[#ffd700] text-black rounded",
        long_button:
            "bg-[#0B1F33] border border-white text-white hover:bg-white hover:text-[#0B1F33] cursor-pointer",
    }

    return(
        <button
            type={type}
            disabled={disabled}
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