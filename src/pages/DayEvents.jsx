import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { schedule } from "../data/schedule";
import JoinUs from "../components/JoinUs";

export default function DayEvents() {
    const { dayId } = useParams();
    const navigate = useNavigate();
    const dayData = schedule[dayId];

    if (!dayData) {
        return (
            <div className="container events-page">
                <h2>Day not found</h2>
                <Link to="/events" className="back-button">← Back to Events</Link>
            </div>
        );
    }

    return (
        <div className="container events-page">
            {/* BACK BUTTON */}
            <motion.button
                className="back-button"
                onClick={() => navigate("/events")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                ← Back to Events
            </motion.button>

            {/* DAY TITLE */}
            <motion.div
                className="day-header"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2>{dayData.label} Events</h2>
                <p className="day-date-large">{dayData.date}</p>
                <p className="day-intro">{dayData.intro}</p>
            </motion.div>

            {/* EVENTS LIST */}
            <div className="events-list">
                {dayData.events.map((event, i) => (
                    <motion.div
                        key={i}
                        className="event-card"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                    >
                        <h3>{event.title}</h3>

                        <p className="event-meta">🗓️ {event.date}</p>
                        <p className="event-meta">🕘 Session: {event.session}</p>

                        <p className="event-desc">{event.desc}</p>

                        <div className="event-actions" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {event.registrationOpen && (
                                <Link to="/register" className="event-register" style={{ flex: 1, minWidth: '140px' }}>
                                    Register Now
                                </Link>
                            )}
                            {(event.rulesUrl || (dayData.ruleBookUrl && !event.hideRules)) && (
                                <a
                                    href={event.rulesUrl || dayData.ruleBookUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="event-rules-btn"
                                    style={{ flex: 1, minWidth: '140px' }}
                                >
                                    View Rules
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* RULE BOOK SECTION */}
            {dayId !== 'day4' && (
                <motion.div
                    className="day-rule-links"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h3>📘 {dayData.label} – Rule Book</h3>
                    <p className="rule-desc">
                        Please read the complete rules before participating in any event of this day.
                    </p>
                    <a
                        href={dayData.ruleBookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rulebook-link"
                    >
                        Click here to view {dayData.label} Rule Book
                    </a>
                </motion.div>
            )}

            <JoinUs />
        </div>
    );
}
