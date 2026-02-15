import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [currentImg, setCurrentImg] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);

        let timeoutId: any;

        const handleActivity = () => {
            setIsVisible(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 2000); // Hide after 2 seconds of inactivity
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('scroll', handleActivity);

        // Initial timeout
        timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            clearTimeout(timeoutId);
        };
    }, [slug]);

    if (!project) {
        return (
            <div className="error-page" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff' }}>
                <div>
                    <h1>Project Not Found</h1>
                    <Link to="/" style={{ color: '#fff' }}>Back to home</Link>
                </div>
            </div>
        );
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }
        }
    };

    return (
        <motion.div
            className="project-detail-page"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        className="back-btn"
                        onClick={() => navigate(-1)}
                        initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0.3, filter: 'blur(10px)' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <span>BACK</span>
                        <div className="back-icon">←</div>
                    </motion.button>
                )}
            </AnimatePresence>

            <div className="awwwards-detail-content">
                <header className="awwwards-detail-header">
                    <motion.div variants={itemVariants} className="project-category">PROJECT SHOWCASE</motion.div>
                    <motion.h1 variants={itemVariants} className="awwwards-detail-title">
                        {project.title.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.02), duration: 0.6, ease: 'easeOut' }}
                                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </header>

                <div className="awwwards-detail-body">
                    <motion.div variants={itemVariants} className="awwwards-gallery-section">
                        <div className="awwwards-main-image">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImg}
                                    src={project.gallery[currentImg]}
                                    alt={project.title}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                />
                            </AnimatePresence>

                            {project.gallery.length > 1 && (
                                <>
                                    <div className="awwwards-gallery-nav">
                                        <button onClick={() => setCurrentImg((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))}>PREV</button>
                                        <span>{currentImg + 1} / {project.gallery.length}</span>
                                        <button onClick={() => setCurrentImg((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))}>NEXT</button>
                                    </div>
                                    <div className="awwwards-gallery-dots">
                                        {project.gallery.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`dot ${currentImg === i ? 'active' : ''}`}
                                                onClick={() => setCurrentImg(i)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>

                    <div className="awwwards-info-section">
                        <motion.div variants={itemVariants} className="awwwards-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="awwwards-tag">{tag}</span>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="awwwards-description">
                            <h3>OVERVIEW</h3>
                            <p>{project.longDesc}</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="awwwards-actions">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="awwwards-visit-btn"
                            >
                                <div className="btn-bg"></div>
                                <span className="btn-text">LAUNCH PROJECT</span>
                                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                .project-detail-page {
                    min-height: 100vh;
                    background: #111;
                    color: white;
                    padding: 8rem 0;
                }
                .back-btn {
                    position: fixed;
                    top: 40px;
                    left: 40px;
                    background: white;
                    border: none;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 1010;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: black;
                    letter-spacing: 2px;
                }
                .back-icon {
                    font-size: 1.5rem;
                    line-height: 1;
                    margin-top: 5px;
                }
                .awwwards-detail-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .awwwards-detail-header {
                    margin-bottom: 6rem;
                    text-align: center;
                }
                .project-category {
                    font-size: 0.8rem;
                    letter-spacing: 0.5rem;
                    color: #666;
                    margin-bottom: 2rem;
                }
                .awwwards-detail-title {
                    font-size: clamp(3rem, 10vw, 8rem);
                    font-weight: 900;
                    margin: 0;
                    color: white;
                    line-height: 0.9;
                    text-transform: uppercase;
                }
                .awwwards-detail-body {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 6rem;
                    align-items: start;
                }
                @media (max-width: 1100px) {
                    .awwwards-detail-body {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .back-btn {
                        width: 60px;
                        height: 60px;
                        top: 20px;
                        left: 20px;
                    }
                }
                .awwwards-main-image {
                    width: 100%;
                    aspect-ratio: 16/9;
                    background: #000;
                    overflow: hidden;
                    position: relative;
                    border-radius: 4px;
                }
                .awwwards-main-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .awwwards-gallery-nav {
                    position: absolute;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.8);
                    backdrop-filter: blur(10px);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .awwwards-gallery-nav button {
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-size: 0.65rem;
                    letter-spacing: 2px;
                    opacity: 0.6;
                    transition: opacity 0.3s;
                }
                .awwwards-gallery-nav button:hover {
                    opacity: 1;
                }
                .awwwards-gallery-dots {
                    position: absolute;
                    bottom: 6rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 1rem;
                    z-index: 10;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .dot.active {
                    background: white;
                    transform: scale(1.5);
                }
                .awwwards-info-section {
                    display: flex;
                    flex-direction: column;
                    gap: 4rem;
                }
                .awwwards-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem;
                }
                .awwwards-tag {
                    padding: 0.5rem 1rem;
                    border: 1px solid rgba(255,255,255,0.1);
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    color: #888;
                    text-transform: uppercase;
                }
                .awwwards-description h3 {
                    font-size: 0.7rem;
                    letter-spacing: 3px;
                    color: #666;
                    margin-bottom: 2rem;
                }
                .awwwards-description p {
                    font-size: 1.3rem;
                    line-height: 1.8;
                    color: #ccc;
                    font-weight: 300;
                }
                .awwwards-visit-btn {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    padding: 2.5rem;
                    color: black;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 1rem;
                    overflow: hidden;
                    z-index: 1;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                }
                .btn-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    z-index: -1;
                    transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1);
                }
                .awwwards-visit-btn:hover .btn-bg {
                    transform: scale(1.05);
                }
                .btn-arrow {
                    width: 24px;
                    height: 24px;
                    transition: transform 0.4s ease;
                }
                .awwwards-visit-btn:hover .btn-arrow {
                    transform: translate(5px, -5px);
                }
            `}</style>
        </motion.div>
    );
};

export default ProjectDetail;
