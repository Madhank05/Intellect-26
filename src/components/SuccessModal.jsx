import { motion } from "framer-motion";
import React from "react";

export default function SuccessModal({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={overlay}
    >
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        style={box}
      >
        <h2>🎉 Registration Successful</h2>
        <p>Thank you for registering for Intellect 25</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999
};

const box = {
  background: "#111",
  padding: "2rem",
  borderRadius: "16px",
  textAlign: "center"
};
