import { motion } from 'framer-motion';

const revealVariants: any = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: "easeInOut"
        }
    })
};

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 2rem', background: 'white', color: 'black', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-10%" }}
                    variants={revealVariants}
                    style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: 800,
                        marginBottom: '4rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em'
                    }}
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>

                    {/* Intro Paragraph */}
                    <div style={{ maxWidth: '800px' }}>
                        <motion.p
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-10%" }}
                            variants={revealVariants}
                            style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                lineHeight: '1.2',
                                marginBottom: '2rem',
                                fontWeight: 500
                            }}
                        >
                            I specialize in <span style={{ textDecoration: 'underline' }}>Web Engineering</span> focusing on functional solutions that <span style={{ textDecoration: 'underline' }}>address complex business needs</span>.
                        </motion.p>

                        <motion.p
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-10%" }}
                            variants={revealVariants}
                            style={{
                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                                lineHeight: '1.6',
                                opacity: 0.7,
                                maxWidth: '600px'
                            }}
                        >
                            With a strong foundation in Web Engineering, I build scalable systems that bridge the gap between technical complexity and business value. My approach prioritizes architecture design and robust system implementation.
                        </motion.p>
                    </div>

                    {/* Stats / Details Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        {[
                            { label: "Location", value: "Indonesia" },
                            { label: "Experience", value: "1 Year" },
                            { label: "Focus", value: "Fullstack Engineer" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                custom={3 + i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, margin: "-10%" }}
                                variants={revealVariants}
                                style={{ borderTop: '1px solid rgba(0,0,0,0.2)', paddingTop: '1rem' }}
                            >
                                <span style={{ display: 'block', fontSize: '0.9rem', opacity: 0.5, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{item.label}</span>
                                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 600 }}>{item.value}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
