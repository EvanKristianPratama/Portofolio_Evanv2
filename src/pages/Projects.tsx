import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="projects-section"
        >
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, margin: '-10%' }}
                transition={{ duration: 0.8 }}
            >
                Selected Works
            </motion.h2>

            {/* Floating Image Container */}
            <div className="project-image-reveal">
                <AnimatePresence mode='wait'>
                    {activeProject !== null && (
                        <motion.div
                            key={activeProject}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: mousePos.x - 200,
                                y: mousePos.y - 150
                            }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                            style={{
                                position: 'absolute',
                                width: '400px',
                                height: '300px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                pointerEvents: 'none'
                            }}
                        >
                            <img
                                src={projects[activeProject].img}
                                alt="Project Preview"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Project List */}
            <div className="projects-list">
                {projects.map((proj, i) => (
                    <Link
                        key={proj.slug}
                        to={`/project/${proj.slug}`}
                        className="project-item"
                        onMouseEnter={() => setActiveProject(i)}
                        onMouseLeave={() => setActiveProject(null)}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className="project-header">
                            <span className="project-index">0{i + 1}</span>
                            <h3 className="project-title">{proj.title}</h3>
                        </div>
                        <div className="project-details">
                            <p className="project-desc">{proj.desc}</p>
                            <div className="project-tags">
                                {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <style>{`
                .projects-section {
                    padding: 4rem 2rem;
                    background: black;
                    color: white;
                    min-height: 100vh;
                    position: relative;
                    cursor: default;
                }
                .section-title {
                    font-size: clamp(2rem, 5vw, 3rem);
                    font-weight: 800;
                    margin-bottom: 4rem;
                    text-transform: uppercase;
                    text-align: right;
                }
                .project-image-reveal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    pointer-events: none;
                    z-index: 10;
                    overflow: hidden;
                    display: none;
                }
                @media (min-width: 768px) {
                    .project-image-reveal {
                        display: block;
                    }
                }
                .projects-list {
                    display: flex;
                    flex-direction: column;
                    gap: 4rem;
                    position: relative;
                    z-index: 1;
                }
                .project-item {
                    border-top: 1px solid white;
                    padding-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    justify-content: space-between;
                    align-items: flex-start;
                    mix-blend-mode: difference;
                    transition: opacity 0.3s;
                }
                .project-item:hover {
                    opacity: 1;
                }
                @media (min-width: 768px) {
                    .project-item {
                        flex-direction: row;
                        align-items: flex-start;
                    }
                }
                .project-header {
                    margin-bottom: 1rem;
                }
                .project-index {
                    font-size: 1rem;
                    opacity: 0.5;
                    display: block;
                    margin-bottom: 0.5rem;
                }
                .project-title {
                    font-size: clamp(2rem, 4vw, 4rem);
                    font-weight: 700;
                    margin: 0;
                }
                .project-details {
                    max-width: 100%;
                    text-align: left;
                }
                @media (min-width: 768px) {
                    .project-details {
                        max-width: 300px;
                        text-align: right;
                    }
                }
                .project-desc {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    opacity: 0.9;
                }
                @media (min-width: 768px) {
                    .project-desc {
                        font-size: 1.2rem;
                    }
                }
                .project-tags {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    opacity: 0.7;
                }
                @media (min-width: 768px) {
                    .project-tags {
                        justify-content: flex-end;
                        gap: 1rem;
                    }
                }
                .tag {
                    border: 1px solid white;
                    padding: 0.2rem 0.6rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                }
            `}</style>
        </section>
    );
};

export default Projects;
