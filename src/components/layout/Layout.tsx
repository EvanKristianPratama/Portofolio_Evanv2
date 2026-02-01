import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import CustomCursor from '../ui/CustomCursor';
import Loader from '../ui/Loader';

import Navigation from './Navigation';

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>
            <div className="smooth-scroll-wrapper" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
                <Navigation />
                <CustomCursor />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Layout;


