import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" style={{
            padding: '6rem 2rem',
            background: 'white',
            color: 'black',
            minHeight: '80vh',
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: false, margin: '-10%' }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        marginBottom: '4rem'
                    }}
                >
                    Experience
                </motion.h2>

                {/* Experience List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {experiences.map((exp, i) => (
                        <Link
                            key={exp.slug}
                            to={`/experience/${exp.slug}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: false, margin: '-10%' }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                style={{
                                    borderTop: '1px solid rgba(0,0,0,0.1)',
                                    paddingTop: '2rem',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 2fr',
                                    gap: '2rem'
                                }}
                                className="experience-item"
                                whileHover={{ x: 10 }}
                            >
                                {/* Left: Role & Date */}
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{exp.company}</h3>
                                    <span style={{ display: 'block', fontSize: '1rem', opacity: 0.5, marginBottom: '1rem' }}>{exp.period}</span>
                                </div>

                                {/* Right: Details */}
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1rem' }}>{exp.role}</h4>
                                    <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.8, marginBottom: '1.5rem' }}>
                                        {exp.description}
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {exp.stack.map(tech => (
                                            <span key={tech} style={{
                                                padding: '0.4rem 0.8rem',
                                                borderRadius: '50px',
                                                background: '#f5f5f5',
                                                fontSize: '0.8rem',
                                                color: '#333'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .experience-item {
                        grid-template-columns: 1fr !important;
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
