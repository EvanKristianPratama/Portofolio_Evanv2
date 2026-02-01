import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'black',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'Inter, sans-serif'
            }}
        >
            {/* Animated Logo Text */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    marginBottom: '2rem'
                }}
            >
                evankristian.dev
            </motion.h1>

            {/* Progress Bar */}
            <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.2 }}
                    style={{ height: '100%', background: 'white' }}
                />
            </div>

            {/* Progress Number */}
            <motion.span
                style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.6, fontFamily: 'monospace' }}
            >
                {Math.floor(Math.min(progress, 100))}%
            </motion.span>
        </motion.div>
    );
};

export default Loader;
