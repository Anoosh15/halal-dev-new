import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HalalIndustries.css';

const HalalIndustries = () => {
    const control = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // The percentage of the card visible to trigger the animation
    });

    // Trigger animation when the card comes into view
    React.useEffect(() => {
        if (inView) {
            control.start({
                opacity: 1,
                x: 0,  // Change this to x for horizontal sliding
                transition: { duration: 0.6, ease: 'easeOut' },
            });
        } else {
            control.start({ opacity: 0, x: -100 }); // Starts off the screen on the left
        }
    }, [control, inView]);

    return (
        <div className="halal-industries">
            <div className="header">
                <h2>Our Purpose</h2>
                <h1>Championing Saudi Arabia's <span className="highlight">Halal Industries</span></h1>
            </div>

            <div className="parent">
                {/* Pharmaceuticals Card */}
                <motion.div
                    className="pharmaceuticals-card"
                    ref={ref}
                    animate={control}
                    initial={{ opacity: 0, x: -100 }} // Start off-screen on the left
                >
                    <div className="pharmaceuticals-content">
                        <h3>Pharmaceuticals</h3>
                        <p>
                            HPDC plays an essential role in ensuring manufacturers comply with halal regulations and in
                            forging partnerships with industry leaders to ease the entry of halal pharmaceuticals into the global market.
                        </p>
                    </div>
                </motion.div>

                {/* Food Card */}
                <motion.div
                    className="food-card"
                    ref={ref}
                    animate={control}
                    initial={{ opacity: 0, x: 100 }} // Start off-screen on the right
                >
                    <div className="food-content">
                        <h3>Food</h3>
                        <p>
                            Through Saudi’s naturally growing Halal ecosystem across the globe, Halal food is only increasing in demand. HDC offers comprehensive support in shaping the food ecosystem in the Kingdom and beyond.
                        </p>
                    </div>
                </motion.div>

                {/* Cosmetics Card */}
                <motion.div
                    className="cosmetics-card"
                    ref={ref}
                    animate={control}
                    initial={{ opacity: 0, x: -100 }} // Start off-screen on the left
                >
                    <div className="cosmetics-content">
                        <h3>Cosmetics</h3>
                        <p>
                            HPDC will support both businesses and investors in enhancing the quality and variety of halal cosmetic products available to consumers around the world.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Call to Action */}
            <div className="call-to-action">
                <p>
                    To localize and develop Saudi Arabia's halal industries, HPDC strives to enable its partners to succeed...
                </p>
                <button>Explore More</button>
            </div>
        </div>
    );
};

export default HalalIndustries;
