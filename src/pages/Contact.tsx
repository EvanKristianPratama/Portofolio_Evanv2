const Contact = () => {
    return (
        <section id="contact" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)', background: 'white', color: 'black', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Next Step</h2>
            <h3 style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, marginBottom: '2rem', maxWidth: '800px' }}>
                AVAILABLE FOR SELECT PROJECTS
            </h3>

            <a href="mailto:evankristianpratama@gmail.com" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', textDecoration: 'underline', marginBottom: '4rem', display: 'inline-block' }}>
                LET'S TALK
            </a>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/evan-pratama-196119271/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/EvanKristianPratama" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.instagram.com/evankristiannn/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>

            <footer style={{ marginTop: '4rem', fontSize: '0.9rem', opacity: 0.5 }}>
                © 2026 EVAN KRISTIAN PRATAMA
            </footer>
        </section>
    );
};

export default Contact;
