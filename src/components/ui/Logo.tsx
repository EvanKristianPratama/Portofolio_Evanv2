import React from 'react';

interface LogoProps {
    size?: number;
    color?: string;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, color = "black", className = "" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="256" cy="256" r="256" fill={color} />
            <rect x="330" y="50" width="160" height="70" rx="35" transform="rotate(45 330 50)" fill="white" />
            <rect x="156" y="156" width="282" height="70" rx="35" transform="rotate(45 156 156)" fill="white" />
            <rect x="110" y="330" width="160" height="70" rx="35" transform="rotate(45 110 330)" fill="white" />
        </svg>
    );
};

export default Logo;
