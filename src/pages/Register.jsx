import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import RegisterInterCollege from "./RegisterInterCollege";
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaGraduationCap, FaBuilding, FaCheck, FaWhatsapp } from "react-icons/fa";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdnU6xLrHfmA-yfmWs6fN7LBRlLWoEd015J7oifQte51hcbaA/formResponse";

function RegisterGCT({ onBack }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = {};

    // Validation rules
    const roll = formData.get("entry.959611180");
    if (!roll || roll.trim().length < 3) newErrors.roll = "Enter roll number";

    const name = formData.get("entry.1106963730");
    if (!name || name.trim().length < 2) newErrors.name = "Enter your name";

    const email = formData.get("entry.1383659498");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Enter valid email";

    const dept = formData.get("entry.1802128218");
    if (!dept) newErrors.dept = "Select department";

    const year = formData.get("entry.635241647");
    if (!year) newErrors.year = "Select year";

    const phone = formData.get("entry.259880120");
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) newErrors.phone = "Enter 10 digits";

    const day1Events = formData.getAll("entry.1177368021");
    const day2Events = formData.getAll("entry.691734000");
    const day3Events = formData.getAll("entry.1131420953");
    const totalEvents = day1Events.length + day2Events.length + day3Events.length;
    if (totalEvents === 0) newErrors.events = "Select 1+ event";

    // If there are errors, show them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to top to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Clear errors and submit
    setErrors({});

    fetch(FORM_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    setSubmitted(true);
  };

  return (
    <motion.div
      className={`register-card ${submitted ? 'success-card-mode' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {onBack && (
        <button onClick={onBack} className="back-button" style={{ marginBottom: "1rem" }}>
          ← Back
        </button>
      )}

      {!submitted ? (
        <>
          <h2>Register for INTELLECT 26 (GCT)</h2>
          <p className="register-sub">
            Join the biggest technical symposium at GCT
          </p>

          {/* Error Messages */}
          {errors.events && (
            <div className="error-message">
              ⚠️ {errors.events}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group input-with-icon">
              <FaIdCard className="field-icon" />
              <input
                type="text"
                name="entry.959611180"
                placeholder="Roll Number"
                required
              />
            </div>
            {errors.roll && <div className="error-message">{errors.roll}</div>}

            <div className="input-group input-with-icon">
              <FaUser className="field-icon" />
              <input
                type="text"
                name="entry.1106963730"
                placeholder="Full Name"
                required
              />
            </div>
            {errors.name && <div className="error-message">{errors.name}</div>}

            <div className="input-group input-with-icon">
              <FaEnvelope className="field-icon" />
              <input
                type="email"
                name="entry.1383659498"
                placeholder="Email Address"
                required
              />
            </div>
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

            <div className="input-group input-with-icon">
              <FaBuilding className="field-icon" />
              <select
                name="entry.1802128218"
                required
                className="register-select"
              >
                <option value="">Select Department</option>
                <option value="CSE">Computer Science Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EEE">Electrical & Electronics</option>
                <option value="EIE">Electrical & Instrumentation</option>
                <option value="MECH">Mechanical Engineering</option>
                <option value="CIVIL">Civil Engineering</option>
                <option value="AI&DS">AI & Data Science</option>
                <option value="IBT">Industrial Bio Technology</option>
                <option value="PRODUCTION">Production Engineering</option>
              </select>
            </div>
            {errors.dept && <div className="error-message">{errors.dept}</div>}

            <div className="input-group input-with-icon">
              <FaGraduationCap className="field-icon" />
              <select
                name="entry.635241647"
                required
                className="register-select"
              >
                <option value="">Select Year</option>
                <option value="II">II</option>
                <option value="III">III</option>
              </select>
            </div>
            {errors.year && <div className="error-message">{errors.year}</div>}

            <div className="input-group input-with-icon">
              <FaPhone className="field-icon" />
              <input
                type="tel"
                name="entry.259880120"
                placeholder="Phone Number (10 digits)"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>
            {errors.phone && (
              <div className="error-message">{errors.phone}</div>
            )}

            {/* DAY 1 */}
            <div className="event-day">
              <h3>Day 1</h3>
              <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                <label className="event-option">
                  <input type="checkbox" name="entry.1177368021" value="Constructa" />
                  <span>Constructa</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.1177368021" value="Electro hunt" />
                  <span>Electro hunt</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.1177368021" value="Speak up" />
                  <span>Speak up</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.1177368021" value="Code Quiz Arena" />
                  <span>Code Quiz Arena</span>
                </label>
              </div>
            </div>

            {/* DAY 2 */}
            <div className="event-day">
              <h3>Day 2</h3>
              <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                <label className="event-option">
                  <input type="checkbox" name="entry.691734000" value="Mech Axis" />
                  <span>Mech Axis</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.691734000" value="Code Crypt" />
                  <span>Code Crypt</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.691734000" value="Think Link" />
                  <span>Think Link</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.691734000" value="Archova" />
                  <span>Archova</span>
                </label>
              </div>
            </div>

            {/* DAY 3 */}
            <div className="event-day">
              <h3>Day 3</h3>
              <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                <label className="event-option">
                  <input type="checkbox" name="entry.1131420953" value="Logic labyrinth" />
                  <span>Logic labyrinth</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.1131420953" value="Bio Treasure Trace" />
                  <span>Bio Treasure Trace</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.1131420953" value="Visual to Virtual" />
                  <span>Visual to Virtual</span>
                </label>
                <label className="event-option">
                  <input type="checkbox" name="entry.1131420953" value="Digibyte" />
                  <span>Digibyte</span>
                </label>
              </div>
            </div>

            <button type="submit" className="submit-btn" style={{ background: 'linear-gradient(135deg, #b87333, #ff8c42)' }}>Submit Registration</button>
          </form>
        </>
      ) : (
        <motion.div
          className="success-box"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="success-icon-wrapper">
            <FaCheck />
          </div>
          <h2>Registration Successful!</h2>
          <p>
            Thank you for joining INTELLECT 26. <br />
            Stay tuned for updates in our official community.
          </p>

          <div className="success-actions">
            <motion.a
              href="https://chat.whatsapp.com/ItLBGcNkAJVDmbUa5W8TsX"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp /> Join WhatsApp Group
            </motion.a>

            <button
              className="success-btn"
              onClick={() => setSubmitted(false)}
            >
              Register Another Student
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Register() {
  const [activeTab, setActiveTab] = useState('gct');

  return (
    <div className="container register-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="register-nav-wrapper"
        style={{
          width: '100%',
          maxWidth: '500px',
          marginBottom: '2.5rem',
          zIndex: 1100, /* Higher than navbar z-index if needed, or at least enough to be clickable */
          position: 'relative'
        }}
      >
        <div className="register-nav-container" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(15px)',
          borderRadius: '100px',
          padding: '6px',
          border: '1px solid rgba(255, 140, 66, 0.25)',
          display: 'flex',
          position: 'relative',
          boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
        }}>
          {/* MOVING INDICATOR BACKGROUND */}
          <motion.div
            layoutId="activeTabBg"
            style={{
              position: 'absolute',
              top: '6px',
              left: activeTab === 'gct' ? '6px' : 'calc(50% + 2px)',
              width: 'calc(50% - 8px)',
              height: 'calc(100% - 12px)',
              background: 'linear-gradient(135deg, #b87333, #ff8c42)',
              borderRadius: '100px',
              zIndex: 0,
              boxShadow: '0 8px 20px rgba(255, 140, 66, 0.4)'
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />

          <button
            onClick={() => setActiveTab('gct')}
            className={`register-tab-btn ${activeTab === 'gct' ? 'active' : ''}`}
            style={{
              flex: 1,
              padding: '14px 20px',
              border: 'none',
              background: 'transparent',
              color: activeTab === 'gct' ? 'black' : 'rgba(255,255,255,0.7)',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'color 0.3s ease',
              borderRadius: '100px',
            }}
          >
            <FaBuilding style={{ fontSize: '1.1rem' }} />
            <span className="tab-text">GCT Students</span>
          </button>

          <button
            onClick={() => setActiveTab('other')}
            className={`register-tab-btn ${activeTab === 'other' ? 'active' : ''}`}
            style={{
              flex: 1,
              padding: '14px 20px',
              border: 'none',
              background: 'transparent',
              color: activeTab === 'other' ? 'black' : 'rgba(255,255,255,0.7)',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'color 0.3s ease',
              borderRadius: '100px',
            }}
          >
            <FaIdCard style={{ fontSize: '1.1rem' }} />
            <span className="tab-text">Other Colleges</span>
          </button>
        </div>
      </motion.div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            {activeTab === 'gct' ? (
              <RegisterGCT />
            ) : (
              <RegisterInterCollege />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
