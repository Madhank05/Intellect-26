import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { schedule } from "../data/schedule";
import JoinUs from "../components/JoinUs";

const days = [
  { key: "day1", label: "Day 1", date: "🗓️ 2nd February 2026", img: "/days/day1.jpg" },
  { key: "day2", label: "Day 2", date: "🗓️ 3rd February 2026", img: "/days/day2.jpg" },
  { key: "day3", label: "Day 3", date: "🗓️ 4th February 2026", img: "/days/day3.jpg" },
  { key: "day4", label: "Day 4", date: "🗓️ 5th February 2026", img: "/days/day4.jpg" },
  { key: "day5", label: "Day 5", date: "🗓️ 6th February 2026", img: "/days/day5.jpg" }
];

export default function Events({ showJoinUs = true }) {
  return (
    <div className="container events-page">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Events
      </motion.h2>

      <motion.p
        className="events-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore 5 days of exciting technical events, competitions, and learning opportunities!
      </motion.p>

      {/* DAY GRID */}
      <div className="day-selector">
        {days.map((day, index) => (
          <motion.div
            key={day.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/events/${day.key}`} className="day-box-link">
              <div
                className="day-box"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${day.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="day-content">
                  <h3>{day.label}</h3>
                  <p className="day-date">{day.date}</p>
                  <p className="day-box-desc">{schedule[day.key].intro}</p>
                </div>
                <button className="explore-events-btn">Explore Events</button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {showJoinUs && <JoinUs />}
    </div>
  );
}
