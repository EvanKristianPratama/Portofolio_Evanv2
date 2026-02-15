import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import HeroScene from '../components/3d/HeroScene';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <div ref={containerRef} style={{ position: 'relative' }}>
            {/* Extended height for scroll space */}
            <div style={{ height: '150vh', position: 'relative' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                    <HeroScene />

                    {/* Top Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            left: '2rem',
                            color: 'white',
                            mixBlendMode: 'difference',
                            zIndex: 2
                        }}
                    >
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                            Evan Kristian Pratama
                        </p>
                        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, margin: 0 }}>
                            Full Stack Developer
                        </p>
                    </motion.div>

                    {/* Top Right Availability */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2.5rem',
                            color: 'white',
                            mixBlendMode: 'difference',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <div style={{
                            width: '6px',
                            height: '6px',
                            background: '#00ff00',
                            borderRadius: '50%',
                            boxShadow: '0 0 12px rgba(0,255,0,0.8)'
                        }}></div>
                        <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.6, margin: 0 }}>
                            Open for new projects
                        </p>
                    </motion.div>

                    {/* Main Unique Large Text centered */}
                    <motion.div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        x: '-50%',
                        y: '-50%',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        pointerEvents: 'none',
                        mixBlendMode: 'difference',
                        opacity,
                        scale,
                        zIndex: 2
                    }}>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            style={{
                                fontSize: 'clamp(0.8rem, 2vw, 1.25rem)',
                                letterSpacing: '0.4em',
                                textTransform: 'uppercase',
                                opacity: 0.6,
                                marginBottom: '1.5rem'
                            }}
                        >
                            Hi, it's me
                        </motion.p>
                        <motion.h1
                            initial={{ y: '20%', opacity: 0, filter: 'blur(20px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontSize: 'clamp(4rem, 18vw, 14rem)',
                                fontWeight: 900,
                                letterSpacing: '-0.02em',
                                lineHeight: 1,
                                textTransform: 'uppercase',
                                margin: 0,
                                display: 'block'
                            }}
                        >
                            EVAN
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '4rem',
                                marginTop: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5em',
                                fontSize: 'clamp(0.5rem, 0.8vw, 0.8rem)'
                            }}
                        >
                            <span>Creative Engineering</span>
                            <span>Digital Experiences</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, background: 'white' }}>
                <About />
                <Experience />
            </div>
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
