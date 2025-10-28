import React, { useRef, useState, useEffect } from 'react';
import './FriendScrollSection.css';

const ScrollAnimation = () => {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = -rect.top;
        const totalScroll = rect.height - window.innerHeight;
        const progress = Math.max(0, Math.min(1, scrollTop / totalScroll));
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        window.addEventListener('resize', updateScrollProgress);
        updateScrollProgress();
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
            window.removeEventListener('resize', updateScrollProgress);
        };
    }, []);

    const ease = (t, start, end, thresholdStart, thresholdEnd) => {
        if (t < thresholdStart) return 0;
        if (t > thresholdEnd) return 1;
        return (t - thresholdStart) / (thresholdEnd - thresholdStart);
    };

    const opacityLogo = ease(scrollProgress, 0.3, 0.36, 0.3, 0.36);
    const scaleLogo = 1 + ease(scrollProgress, 0.11, 0.26, 0.11, 0.26) * 5;
    const opacityLady = ease(scrollProgress, 0.35, 0.4, 0.35, 0.4);
    const opacityGradients = {
        ul: ease(scrollProgress, 0.44, 0.6, 0.44, 0.6),
        bl: ease(scrollProgress, 0.48, 0.58, 0.48, 0.58),
        br: ease(scrollProgress, 0.52, 0.62, 0.52, 0.62),
        ur: ease(scrollProgress, 0.57, 0.66, 0.57, 0.66),
    };

    const wc0Opacity = scrollProgress > 0.6 ? 1 - ease(scrollProgress, 0.6, 0.69, 0.6, 0.69) : ease(scrollProgress, 0.42, 0.46, 0.42, 0.46);
    const wc0Scale = ease(scrollProgress, 0.2, 0.43, 0.2, 0.43);
    const wc0Factor = 1;

    const logoOpacity = ease(scrollProgress, 0.2, 0.35, 0.2, 0.35);
    const headlineOpacity = ease(scrollProgress, 0.25, 0.4, 0.25, 0.4);
    const btnOpacity = ease(scrollProgress, 0.3, 0.45, 0.3, 0.45);
    const detailsOpacity = ease(scrollProgress, 0.35, 0.5, 0.35, 0.5);
    const badgeOpacity = ease(scrollProgress, 0.4, 0.55, 0.4, 0.55);

    return (
        <section className="friend-scroll-section" ref={sectionRef}>
            <div className="friend-sticky-container">
                <div className="friend-canvas-wrapper">
                    <canvas width="1526" height="945"></canvas>
                </div>
                <img src="./images/footer-logo.svg" alt="Friend" className="friend-logo friend-layer" />
                <img src="./images/lady.jpg" alt="Lady" className="friend-lady friend-layer hidden sm:block" />
                <img src="./images/lady-more-vertical.jpg" alt="Lady" className="friend-lady friend-layer block sm:hidden" />

                <img src="./images/upper_left_gradient.png" alt="Upper Left Gradient" className="friend-gradient friend-layer" style={{ opacity: opacityGradients.ul }} />
                <img src="./images/bottom_left_gradient.png" alt="Bottom Left Gradient" className="friend-gradient friend-layer" style={{ opacity: opacityGradients.bl }} />
                <img src="./images/bottom_right_gradient.png" alt="Bottom Right Gradient" className="friend-gradient friend-layer" style={{ opacity: opacityGradients.br }} />
                <img src="./images/upper_right_gradient.png" alt="Upper Right Gradient" className="friend-gradient friend-layer" style={{ opacity: opacityGradients.ur }} />

                <img src="./images/word_cloud_0.png" alt="Word Cloud" className="friend-word-cloud" style={{
                    transform: `translate(-50%, 50%) translate(calc(var(--wc0-x) * ${wc0Factor} * -1), calc(var(--wc0-y) * ${wc0Factor} * -1)) scale(${wc0Scale})`,
                    opacity: wc0Opacity,
                }} />

                {/* Mobile CTA */}
                <div className="friend-mobile-content isolate">
                    <div className="absolute top-5 left-5 w-2/3 h-1/2 flex flex-col items-start justify-start z-1">
                        <img src="./images/footer-logo.svg" alt="Friend" className="w-[25rem] p-5 friend-logo" style={{ opacity: logoOpacity, transform: `translate(0, ${(1 - logoOpacity) * 50}%)` }} />
                        <p className="friend-headline pl-5" style={{ opacity: headlineOpacity, transform: `translate(0, ${(1 - headlineOpacity) * 50}%)` }}>
                            Your new roommate is waiting.
                        </p>
                    </div>
                    <div className="absolute bottom-20 left-10 w-1/2 h-1/3 flex flex-col items-start mr-6 justify-end text-black text-sm font-light z-2">
                        <button className="friend-order-btn" style={{ opacity: btnOpacity, transform: `translate(0, ${(1 - btnOpacity) * 50}%)`, visibility: btnOpacity > 0 ? 'visible' : 'hidden' }}>
                            <p>Order Now</p>
                            <img src="./images/arrow_right.png" alt="Up" />
                        </button>
                        <div className="friend-details" style={{ opacity: detailsOpacity, transform: `translate(0, ${(1 - detailsOpacity) * 50}%)`, visibility: detailsOpacity > 0 ? 'visible' : 'hidden' }}>
                            <p>$129</p>
                            <p>No subscription</p>
                            <p>1-year warranty</p>
                            <p>Made in Canada</p>
                        </div>
                        <img src="./images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="Download on the App Store" className="friend-appstore-badge" style={{ opacity: badgeOpacity, transform: `translate(0, ${(1 - badgeOpacity) * 50}%)`, visibility: badgeOpacity > 0 ? 'visible' : 'hidden' }} />
                    </div>
                </div>

                {/* Desktop CTA */}
                <div className="friend-desktop-content">
                    <img src="./images/phone.png" alt="Phone" className="friend-layer" style={{ opacity: 1, transform: 'translate(-50%, 50%)' }} />
                    <img src="./images/word_cloud_4.png" alt="Word Cloud" className="absolute bottom-1/2 left-1/2 w-[25rem] h-[25rem] object-cover" style={{ opacity: 1, transform: 'translate(-50%, 50%)' }} />

                    <div className="friend-desktop-logo-box">
                        <img src="./images/footer-logo.svg" alt="Friend" className="w-full p-5" style={{ opacity: 1 }} />
                        <p className="friend-headline pl-5" style={{ opacity: 1 }}>Your new roommate is waiting.</p>
                    </div>

                    <div className="friend-desktop-cta-box">
                        <button className="friend-order-btn mb-2">
                            <p className="text-white font-normal text-xl">Order Now</p>
                            <img src="./images/arrow_right.png" alt="Up" />
                        </button>
                        <div className="friend-details my-6">
                            <p>$129</p>
                            <p>No subscription</p>
                            <p>1-year warranty</p>
                            <p>Made in Canada</p>
                        </div>
                        <img src="./images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="Download on the App Store" className="friend-appstore-badge mt-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollAnimation;