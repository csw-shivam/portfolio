import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const useScrollAnimation = (ref) => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const { top } = ref.current.getBoundingClientRect();
            if (top < window.innerHeight) {
                controls.start({ opacity: 1, y: 0 });
            } else {
                controls.start({ opacity: 0, y: 50 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls, ref]);

    return controls;
};