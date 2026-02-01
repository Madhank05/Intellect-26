import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const whyItems = [
    {
        icon: "🚀",
        title: "Real-World Skills",
        description: "Gain hands-on experience beyond classrooms through technical and logical challenges."
    },
    {
        icon: "🧠",
        title: "Skill Enhancement",
        description: "Sharpen coding, problem solving, communication, and design thinking skills."
    },
    {
        icon: "🤝",
        title: "Team & Networking",
        description: "Collaborate with like-minded students and expand your technical network."
    },
    {
        icon: "🏆",
        title: "Recognition",
        description: "Compete, win certificates, and boost your resume with national-level exposure."
    }
];

export default function WhySlider() {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef(null);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === whyItems.length - 1 ? 0 : prevIndex + 1));
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, []);

    const prev = () => setIndex((i) => (i === 0 ? whyItems.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === whyItems.length - 1 ? 0 : i + 1));

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        if (!touchStartX.current) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 50) next();
        if (diff < -50) prev();
        touchStartX.current = null;
    };

    return (
        <div className="mobile-slider-container">
            <div
                className="mobile-slider-wrapper"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="why-card mobile-slide-card"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>{whyItems[index].icon} {whyItems[index].title}</h3>
                        <p>{whyItems[index].description}</p>
                    </motion.div>
                </AnimatePresence>

                <button className="mobile-nav-btn left" onClick={prev} aria-label="Previous">
                    <FaChevronLeft />
                </button>
                <button className="mobile-nav-btn right" onClick={next} aria-label="Next">
                    <FaChevronRight />
                </button>
            </div>

            <div className="mobile-slider-dots">
                {whyItems.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${index === i ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
}
