import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import JoinUs from "../components/JoinUs";
const contacts = [
  { role: "President", name: "Ajay Raju", phone: "+91 9342771137" },
  { role: "Secretary", name: "Karthiga", phone: "+91 9894946624" },
  { role: "Treasurer", name: "Obuliraj", phone: "+91 7358851552" },
  { role: "TDC head", name: "Dharani ", phone: "+91 9629457327" }
];

export default function Contact({ showJoinUs = true }) {
  return (
    <div className="container contact-page">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      {/* CONTACT CARDS */}
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{c.role}</h3>
            <p>{c.name}</p>

            <a href={`tel:${c.phone}`} className="phone-link">
              <FaPhoneAlt /> {c.phone}
            </a>
          </motion.div>
        ))}
      </div>

      {/* JOIN WITH US */}
      {showJoinUs && (
        <motion.div
          className="join-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <JoinUs />
        </motion.div>
      )}

    </div>
  );
}
