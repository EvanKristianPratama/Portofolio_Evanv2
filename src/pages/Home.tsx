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
                    <motion.div style={{
                        position: 'absolute',
                        top: '50%', // Centered
                        left: '50%',
                        x: '-50%',
                        y: '-50%', // Centered
                        textAlign: 'center',
                        color: 'white',
                        pointerEvents: 'none',
                        mixBlendMode: 'difference',
                        opacity,
                        scale,
                        width: '100%'
                    }}>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                            fontWeight: 400,
                            letterSpacing: '0.1em',
                            margin: '0 0 1rem 0',
                            opacity: 0.8
                        }}>
                            Hi :) , it's
                        </p>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 8vw, 6rem)', // Smaller, cleaner font size
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            lineHeight: 1,
                            whiteSpace: 'nowrap',
                            margin: 0
                        }}>
                            evankristian.dev
                        </h1>
                        <p style={{
                            fontSize: '1rem',
                            opacity: 0.6,
                            marginTop: '1rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase'
                        }}>
                            Evan Kristian Pratama
                        </p>
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
