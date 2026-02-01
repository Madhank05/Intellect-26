import React from "react";
import Reveal from "../components/Reveal";
import ImageSlider from "../components/ImageSlider";
import JoinUs from "../components/JoinUs";
import MapSection from "../components/MapSection";
import Countdown from "../components/Countdown";
import ParticipantsSponsors from "../components/ParticipantsSponsors";
import WhySlider from "../components/WhySlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Events from "./Events";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="container home">

      {/* HERO */}
      <Reveal>
        <h1 className="hero-title">
          INTELLECT'<span>26</span>
        </h1>

        <p className="hero-sub">
          Think • Innovate • Compete • Lead
        </p>

        <p className="hero-tagline">
          A National Level Technical Symposium designed to challenge your mind,
          sharpen your skills, and unlock your potential.
        </p>
      </Reveal>

      {/* COUNTDOWN */}


      {/* IMAGE SLIDER (FORMERLY PAST GALLERY) */}
      <Reveal delay={0.1}>
        <div className="section-spacing">
          <h2>Moments That Defined Intellect</h2>
          <ImageSlider />
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="section-spacing">
          <h2>The Clock Is Ticking</h2>
          <Countdown />
        </div>
      </Reveal>



      {/* WHY PARTICIPATE */}
      <Reveal delay={0.3}>
        <div className="section-spacing">
          <h2>Why You Should Participate</h2>
          <WhySlider />
        </div>
      </Reveal>

      {/* STATS */}
      <Reveal delay={0.4}>
        <div className="section-spacing stats-grid">
          <StatCard value="5" label="Days" />
          <StatCard value="25+" label="Events" />
          <StatCard value="1200+" label="Participants" />
          <StatCard value="50+" label="Colleges" />
        </div>
      </Reveal>

      {/* PARTICIPANTS & SPONSORS */}
      <Reveal delay={0.5}>
        <ParticipantsSponsors />
      </Reveal>

      {/* EVENTS */}
      <Reveal delay={0.6}>
        <div id="events">
          <Events showJoinUs={false} />
        </div>
      </Reveal>
      <Reveal delay={0.7}>
        <div id="contact">
          <Contact showJoinUs={false} />
        </div>
      </Reveal>
      {/* JOIN US */}
      <Reveal delay={0.8}>
        <JoinUs />
      </Reveal>

      {/* CONTACT */}


      {/* LOCATION */}
      <Reveal delay={0.9}>
        <MapSection />
      </Reveal>
    </div>
  );
}

/* STAT CARD COMPONENT */
function StatCard({ value, label }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3>{value}</h3>
      <p>{label}</p>
    </motion.div>
  );
}
