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
            <rect x="325" y="115" width="140" height="65" rx="32.5" transform="rotate(45 325 115)" fill="white" />
            <rect x="195" y="195" width="300" height="65" rx="32.5" transform="rotate(45 195 195)" fill="white" />
            <rect x="105" y="335" width="140" height="65" rx="32.5" transform="rotate(45 105 335)" fill="white" />
        </svg>
    );
};

export default Logo;
