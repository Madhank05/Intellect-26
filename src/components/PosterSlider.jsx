import { motion } from "framer-motion";
import React from "react";

export default function PosterSlider({ posters }) {
  if (!posters.length) return null;

  return (
    <div style={slider}>
      {posters.map((p, i) => (
        <motion.img
          key={i}
          src={p}
          alt="Event Poster"
          whileHover={{ scale: 1.05 }}
          style={img}
        />
      ))}
    </div>
  );
}

const slider = {
  display: "flex",
  gap: "1rem",
  overflowX: "auto",
  paddingBottom: "1rem",
  marginTop: "1.5rem"
};

const img = {
  height: "250px",
  borderRadius: "12px",
  flexShrink: 0
};
