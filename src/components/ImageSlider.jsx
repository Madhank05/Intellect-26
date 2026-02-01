import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const images = [
    "/posters/past (1).jpeg",
    "/posters/past (2).jpeg",
    "/posters/past (3).jpeg",
    "/posters/past (4).jpeg",
    "/posters/past (5).jpeg",
    "/posters/past (6).jpeg",
    "/posters/past (7).jpeg",
    "/posters/past (8).jpeg",
    "/posters/past (9).jpeg",
    "/posters/past (10).jpeg",
    "/posters/past (11).jpeg",
    "/posters/past (12).jpeg",
    "/posters/past (13).jpeg"
];

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left
    const touchStartX = useRef(null);

    /* ---------- AUTOPLAY ---------- */
    useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            next();
        }, 2000);
        return () => clearInterval(interval);
    }, [paused, index]);

    /* ---------- CONTROLS ---------- */
    const prev = () => {
        setDirection(-1);
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };

    const next = () => {
        setDirection(1);
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    /* ---------- TOUCH (SWIPE) ---------- */
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
        <div className="image-slider-container">
            <div
                className="slider-wrapper"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        className="slide-active"
                        initial={{ opacity: 0, x: direction * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <img src={images[index]} alt={`Slide ${index + 1}`} />
                    </motion.div>
                </AnimatePresence>

                {/* NAV BUTTONS */}
                <button className="nav-btn left" onClick={prev} aria-label="Previous Slide">
                    <FaChevronLeft />
                </button>

                <button className="nav-btn right" onClick={next} aria-label="Next Slide">
                    <FaChevronRight />
                </button>
            </div>

            {/* DOT INDICATORS */}
            <div className="slider-dots">
                {images.map((_, i) => (
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
