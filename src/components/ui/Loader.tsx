import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const messages = [
        "Hi its me",
        "Evan Kristian Pratama",
        "hehehe!",
        "thank you for stopping by!",
        "hope you enjoy my work!",
        "stay awesome! ✨"
    ];

    const [msgIndex, setMsgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsExiting(true);
                    setTimeout(onComplete, 1200);
                    return 100;
                }
                const nextProgress = prev + Math.random() * 6;
                // Update message index based on progress
                setMsgIndex(Math.min(Math.floor((nextProgress / 100) * messages.length), messages.length - 1));
                return nextProgress;
            });
        }, 300);
        return () => clearInterval(interval);
    }, [onComplete, messages.length]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: isExiting ? 'none' : 'auto',
                background: 'black'
            }}
        >
            {/* Curtain background removed to allow text to be centered on solid black during load, 
                or we can keep curtains but ensure background is consistent */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isExiting ? '-100%' : 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50.5%', // overlap slightly to prevent seam
                    height: '100%',
                    background: 'black',
                    zIndex: -1
                }}
            />
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isExiting ? '100%' : 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50.5%',
                    height: '100%',
                    background: 'black',
                    zIndex: -1
                }}
            />

            {/* Center Content */}
            <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 0.8 : 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    zIndex: 1,
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                    width: '100%',
                    padding: '0 2rem'
                }}
            >
                <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <motion.h1
                        key={msgIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            margin: 0,
                            textTransform: 'uppercase'
                        }}
                    >
                        {messages[msgIndex]}
                    </motion.h1>
                </div>

                <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', overflow: 'hidden', margin: '0 auto' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                        transition={{ duration: 0.2 }}
                        style={{ height: '100%', background: 'white' }}
                    />
                </div>

                <motion.span
                    style={{ display: 'block', marginTop: '1rem', fontSize: '0.9rem', opacity: 0.6, fontFamily: 'monospace' }}
                >
                    {Math.floor(Math.min(progress, 100))}%
                </motion.span>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
