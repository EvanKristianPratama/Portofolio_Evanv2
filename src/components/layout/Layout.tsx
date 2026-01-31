import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import CustomCursor from '../ui/CustomCursor';

import Navigation from './Navigation';

const Layout = () => {
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
        <div className="smooth-scroll-wrapper">
            <Navigation />
            <CustomCursor />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;


