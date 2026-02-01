import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";

export default function JoinUs() {
  return (
    <motion.div
      className="join-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Join With Us</h2>
      <p className="join-sub">
        Connect with YMC GCT and stay updated.
      </p>

      <div className="join-icons">
        <motion.a
          href="https://www.instagram.com/ysyouth_gct?igsh=M2R0aDBxZDgxOWUy"
          target="_blank"
          rel="noreferrer"
          className="join-icon instagram"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Instagram"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/company/ysc-of-gct-youth-y-s-men-international/"
          target="_blank"
          rel="noreferrer"
          className="join-icon linkedin"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </motion.a>

        <motion.a
          href="https://chat.whatsapp.com/ItLBGcNkAJVDmbUa5W8TsX"
          target="_blank"
          rel="noreferrer"
          className="join-icon whatsapp"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </motion.a>

        <motion.a
          href="mailto:youthclubgct@gmail.com"
          className="join-icon email"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Email"
        >
          <MdEmail />
        </motion.a>
      </div>
    </motion.div>
  );
}
