
const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 2rem', background: 'white', color: 'black', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Next Step</h2>
            <h3 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, marginBottom: '2rem', maxWidth: '800px' }}>
                AVAILABLE FOR SELECT PROJECTS
            </h3>

            <a href="mailto:contact@example.com" style={{ fontSize: '1.5rem', textDecoration: 'underline', marginBottom: '4rem', display: 'inline-block' }}>
                LET'S TALK
            </a>

            <div style={{ display: 'flex', gap: '2rem', marginTop: 'auto' }}>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                <a href="#">Twitter/X</a>
            </div>

            <footer style={{ marginTop: '4rem', fontSize: '0.9rem', opacity: 0.5 }}>
                © 2026 EVAN KRISTIAN PRATAMA
            </footer>
        </section>
    );
};

export default Contact;
