import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { experiences } from '../data/experience';
import { calculateDuration } from '../utils/date';

const ExperienceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [currentImg, setCurrentImg] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const exp = experiences.find(e => e.slug === slug);

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

    if (!exp) {
        return (
            <div className="error-page" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff' }}>
                <div>
                    <h1>Experience Not Found</h1>
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
            className="experience-detail-page"
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
                    <motion.div variants={itemVariants} className="project-category">CAREER JOURNEY</motion.div>
                    <motion.h1 variants={itemVariants} className="awwwards-detail-title">
                        {exp.company.split('').map((char, i) => (
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
                    <motion.div variants={itemVariants} className="experience-role-period">
                        <h2>{exp.role}</h2>
                        <span>{exp.period} • {calculateDuration(exp.startDate, exp.endDate)}</span>
                    </motion.div>
                </header>

                <div className="awwwards-detail-body">
                    <motion.div variants={itemVariants} className="awwwards-gallery-section">
                        <div className="awwwards-main-image">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImg}
                                    src={exp.gallery[currentImg]}
                                    alt={exp.company}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                />
                            </AnimatePresence>

                            {exp.gallery.length > 1 && (
                                <>
                                    <div className="awwwards-gallery-nav">
                                        <button onClick={() => setCurrentImg((prev) => (prev > 0 ? prev - 1 : exp.gallery.length - 1))}>PREV</button>
                                        <span>{currentImg + 1} / {exp.gallery.length}</span>
                                        <button onClick={() => setCurrentImg((prev) => (prev < exp.gallery.length - 1 ? prev + 1 : 0))}>NEXT</button>
                                    </div>
                                    <div className="awwwards-gallery-dots">
                                        {exp.gallery.map((_, i) => (
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
                            {exp.stack.map(tech => (
                                <span key={tech} className="awwwards-tag">{tech}</span>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="awwwards-description">
                            <h3>RESPONSIBILITIES & IMPACT</h3>
                            <p>{exp.longDescription}</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                .experience-detail-page {
                    min-height: 100vh;
                    background: #fdfdfd;
                    color: black;
                    padding: 8rem 0;
                }
                .back-btn {
                    position: fixed;
                    top: 40px;
                    left: 40px;
                    background: black;
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
                    color: white;
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
                    color: #999;
                    margin-bottom: 2rem;
                }
                .awwwards-detail-title {
                    font-size: clamp(3rem, 10vw, 8rem);
                    font-weight: 900;
                    margin: 0;
                    color: black;
                    line-height: 0.9;
                    text-transform: uppercase;
                }
                .experience-role-period {
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .experience-role-period h2 {
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: #333;
                }
                .experience-role-period span {
                    font-size: 1rem;
                    color: #999;
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
                    background: #eee;
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
                    background: rgba(255,255,255,0.8);
                    backdrop-filter: blur(10px);
                    padding: 0.5rem 1.5rem;
                    border-radius: 50px;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    color: black;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .awwwards-gallery-nav button {
                    background: none;
                    border: none;
                    color: black;
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
                    background: rgba(0,0,0,0.1);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .dot.active {
                    background: black;
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
                    border: 1px solid rgba(0,0,0,0.1);
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    color: #666;
                    text-transform: uppercase;
                }
                .awwwards-description h3 {
                    font-size: 0.7rem;
                    letter-spacing: 3px;
                    color: #999;
                    margin-bottom: 2rem;
                }
                .awwwards-description p {
                    font-size: 1.3rem;
                    line-height: 1.8;
                    color: #333;
                    font-weight: 300;
                }
                @media (max-width: 480px) {
                    .experience-detail-page {
                        padding: 5rem 0;
                    }
                    .back-btn {
                        width: 45px;
                        height: 45px;
                        top: 15px;
                        left: 15px;
                        font-size: 0.55rem;
                    }
                    .back-icon {
                        font-size: 1.1rem;
                        margin-top: 2px;
                    }
                    .awwwards-detail-header {
                        margin-bottom: 3rem;
                    }
                    .awwwards-gallery-nav {
                        bottom: 0.6rem;
                        padding: 0.3rem 0.8rem;
                        gap: 0.8rem;
                        font-size: 0.6rem;
                        background: rgba(255,255,255,0.5);
                    }
                    .awwwards-gallery-nav button {
                        font-size: 0.55rem;
                        letter-spacing: 1px;
                    }
                    .awwwards-gallery-dots {
                        bottom: 3rem;
                        gap: 0.5rem;
                    }
                    .dot {
                        width: 6px;
                        height: 6px;
                    }
                    .experience-role-period h2 {
                        font-size: 1.2rem;
                    }
                    .awwwards-description p {
                        font-size: 1rem;
                        line-height: 1.6;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default ExperienceDetail;
