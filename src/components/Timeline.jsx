import React from "react";
import { motion } from "framer-motion";

export default function Timeline({ active }) {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];

  return (
    <div style={wrapper}>
      {days.map((day, i) => (
        <motion.div
          key={i}
          animate={{
            scale: active === i ? 1.4 : 1,
            backgroundColor: active === i ? "#FF8C42" : "#999"
          }}
          transition={{ duration: 0.3 }}
          style={dot}
        >
          <span style={label}>{day}</span>
        </motion.div>
      ))}
    </div>
  );
}

const wrapper = {
  display: "flex",
  justifyContent: "space-between",
  margin: "2rem 0"
};

const dot = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  position: "relative"
};

const label = {
  position: "absolute",
  top: "22px",
  fontSize: "12px"
};
