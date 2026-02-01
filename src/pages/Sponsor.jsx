import React from "react";
import { motion } from "framer-motion";

export default function Sponsor() {
  return (
    <div className="container sponsor-page">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Become a Sponsor
      </motion.h2>

      <motion.p
        className="sponsor-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Support <strong>INTELLECT'26</strong> and connect your brand with
        future engineers and innovators.
      </motion.p>

      <motion.div
        className="qr-card"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <h3>Scan & Pay</h3>
        <p className="qr-sub">UPI / Google Pay</p>

        <div className="qr-frame">
          <img src="/qr/qr.jpeg" alt="GPay QR Code" />
        </div>

        <p className="qr-note">
          After completing the payment, please contact our treasurers
          for confirmation.
        </p>

    <div className="treasurer-section">
  <h4 className="treasurer-title">
    💼 Treasurers
  </h4>

  <div className="treasurer-list">
    <div className="treasurer-card">
      <span className="treasurer-name">Obuli Raj</span>
      <a href="tel:7358851552" className="treasurer-phone">
        📞 +91 7358851552
      </a>
    </div>

    <div className="treasurer-card">
      <span className="treasurer-name">Shreya</span>
      <a href="tel:9585603947" className="treasurer-phone">
        📞 +91 9585603947
      </a>
    </div>
  </div>
</div>

      </motion.div>

    </div>
  );
}
