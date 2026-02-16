import React, { useState, useCallback, useRef } from 'react';

interface TextScrambleProps {
    phrases: string[];
    scrambleSpeed?: number;
    className?: string;
    style?: React.CSSProperties;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';

const TextScramble: React.FC<TextScrambleProps> = ({
    phrases,
    scrambleSpeed = 50,
    className,
    style
}) => {
    const [currentText, setCurrentText] = useState(phrases[0]);
    const currentIndexRef = useRef(0);
    const frameRef = useRef<number | null>(null);
    const isScrambling = useRef(false);

    const scramble = useCallback((targetText: string) => {
        if (isScrambling.current) return;
        isScrambling.current = true;

        let frame = 0;
        const totalFrames = 15;

        const animate = () => {
            frame++;
            const progress = frame / totalFrames;

            const result = targetText.split('').map((char) => {
                if (char === ' ') return ' ';
                if (Math.random() < progress) {
                    return char;
                }
                return characters[Math.floor(Math.random() * characters.length)];
            }).join('');

            setCurrentText(result);

            if (frame < totalFrames) {
                frameRef.current = setTimeout(animate, scrambleSpeed) as unknown as number;
            } else {
                setCurrentText(targetText);
                isScrambling.current = false;
            }
        };

        animate();
    }, [scrambleSpeed]);

    const handleMouseEnter = () => {
        currentIndexRef.current = (currentIndexRef.current + 1) % phrases.length;
        scramble(phrases[currentIndexRef.current]);
    };

    return (
        <span
            className={className}
            style={{ ...style, cursor: 'pointer', pointerEvents: 'auto' }}
            onMouseEnter={handleMouseEnter}
        >
            {currentText}
        </span>
    );
};

export default TextScramble;
