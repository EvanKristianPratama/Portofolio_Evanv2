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
