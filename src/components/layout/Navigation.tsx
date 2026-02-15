import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const isDetail = location.pathname.startsWith('/experience/') || location.pathname.startsWith('/project/');
    const shouldShowBurger = !isDetail && (!isHome || scrolled);

    const scrollToSection = (id: string) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const links = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" }
    ];

    return (
        <>
            {/* Brand Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    left: '2rem',
                    zIndex: 9999,
                    cursor: 'pointer',
                    mixBlendMode: 'difference'
                }}
                onClick={() => isHome ? scrollToSection('home') : window.location.href = '/'}
            >
            </motion.div>

            {/* Hamburger Button */}
            <AnimatePresence>
                {shouldShowBurger && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            position: 'fixed',
                            top: '2rem',
                            right: '2rem',
                            zIndex: 9999,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            mixBlendMode: 'difference',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            width: '40px'
                        }}
                    >
                        <motion.span
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'white' }}
                        />
                        <motion.span
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'white' }}
                        />
                        <motion.span
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'white' }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Backdrop Blur Overlay & Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Blur Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                background: 'rgba(0,0,0,0.3)',
                                backdropFilter: 'blur(10px)',
                                zIndex: 100
                            }}
                        />

                        {/* Right Sidebar Menu */}
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                height: '100vh',
                                width: '100%',
                                maxWidth: '400px',
                                background: 'rgba(0,0,0,0.8)',
                                backdropFilter: 'blur(20px)',
                                zIndex: 101,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: '4rem'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.label}
                                        href={`#${link.id}`}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontWeight: 800,
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer'
                                        }}
                                        whileHover={{ x: 10, opacity: 0.8 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
