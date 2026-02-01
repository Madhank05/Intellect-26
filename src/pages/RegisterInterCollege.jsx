import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaGraduationCap, FaBuilding, FaUniversity, FaLink, FaCreditCard, FaCheck, FaWhatsapp } from "react-icons/fa";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSetoDcdpIc8gVYafjJUh42Di-GTj3pzH_Lm22aldGbahorMjQ/formResponse";

export default function RegisterInterCollege({ onBack }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = {};

    // Validation rules
    const name1 = formData.get("entry.1106963730");
    if (!name1 || name1.trim().length < 2) newErrors.name1 = "Name required";

    const email = formData.get("entry.1383659498");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Enter valid email";

    const college = formData.get("entry.184912595");
    if (!college || college.trim().length < 2) newErrors.college = "Enter college";

    const dept = formData.get("entry.1802128218");
    if (!dept || dept.trim().length < 2) newErrors.dept = "Enter department";

    const year = formData.get("entry.635241647");
    if (!year) newErrors.year = "Select year";

    const phone = formData.get("entry.259880120");
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone.trim())) newErrors.phone = "Enter 10 digits";

    const txId = formData.get("entry.975889574");
    if (!txId || txId.trim().length < 5) newErrors.txId = "Enter Transaction ID";

    const selectedEvents = formData.getAll("entry.1177368021");
    if (selectedEvents.length === 0) newErrors.events = "Select 1+ event";

    // If there are errors, show them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Auto scroll to top to show errors
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    <div className="container register-page">
      <motion.div
        className={`register-card ${submitted ? 'success-card-mode' : ''}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {onBack && (
          <button onClick={onBack} className="back-button" style={{ marginBottom: "1rem" }}>
            Back
          </button>
        )}

        {!submitted ? (
          <>
            <h2>Register for INTELLECT 26 (Inter-College)</h2>
            <p className="register-sub">
              Join the biggest technical symposium at GCT
            </p>

            {Object.keys(errors).length > 0 && (
              <div className="error-summary" style={{ background: 'rgba(255, 0, 0, 0.1)', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', border: '1px solid rgba(255, 0, 0, 0.3)', color: '#ff6b6b' }}>
                ⚠️ Fix the highlighted errors
              </div>
            )}

            <form onSubmit={handleSubmit}>


              <div className="input-group input-with-icon">
                <FaUser className="field-icon" />
                <input
                  type="text"
                  name="entry.1106963730"
                  placeholder="Full Name (Participant 1)"
                  required
                />
              </div>
              {errors.name1 && (
                <div className="error-message">{errors.name1}</div>
              )}

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
                <FaUniversity className="field-icon" />
                <input
                  type="text"
                  name="entry.184912595"
                  placeholder="College Name"
                  required
                />
              </div>
              {errors.college && <div className="error-message">{errors.college}</div>}

              <div className="input-group input-with-icon">
                <FaBuilding className="field-icon" />
                <input
                  type="text"
                  name="entry.1802128218"
                  placeholder="Department"
                  required
                />
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
                  <option value="IV">IV</option>
                </select>
              </div>
              {errors.year && <div className="error-message">{errors.year}</div>}

              <div className="input-group input-with-icon">
                <FaPhone className="field-icon" />
                <input
                  type="tel"
                  name="entry.259880120"
                  placeholder="Phone Number"
                  required
                />
              </div>
              {errors.phone && (
                <div className="error-message">{errors.phone}</div>
              )}

              {/* ADDITIONAL PARTICIPANTS */}
              <div className="additional-participants" style={{ marginTop: '2rem' }}>
                <h3 style={{ color: "#ff8c42", marginBottom: "1rem", fontSize: "1.2rem" }}>Additional Participants (Optional)</h3>

                <div className="participant-field" style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.9rem', color: '#ff8c42', marginBottom: '0.5rem' }}>2 Persons - ₹275 Total</p>
                  <input
                    type="text"
                    name="entry.544205270"
                    placeholder="Enter 2nd Participant Name (Optional)"
                  />
                </div>

                <div className="participant-field" style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.9rem', color: '#ff8c42', marginBottom: '0.5rem' }}>3 Persons - ₹400 Total</p>
                  <input
                    type="text"
                    name="entry.583676698"
                    placeholder="Enter 3rd Participant Name (Optional)"
                  />
                </div>

                <div className="participant-field" style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.9rem', color: '#ff8c42', marginBottom: '0.5rem' }}>4 Persons - ₹500 Total</p>
                  <input
                    type="text"
                    name="entry.1632806287"
                    placeholder="Enter 4th Participant Name (Optional)"
                  />
                </div>
              </div>

              {/* EVENTS */}
              <div className="event-day">
                <h3>Events</h3>
                {errors.events && (
                  <div className="error-message" style={{ marginBottom: '1rem' }}>{errors.events}</div>
                )}
                <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                  <label className="event-option">
                    <input type="checkbox" name="entry.1177368021" value="Shark Tank" />
                    <span>Shark Tank</span>
                  </label>
                  <label className="event-option">
                    <input type="checkbox" name="entry.1177368021" value="Slide O'vert" />
                    <span>Slide O'vert</span>
                  </label>
                  <label className="event-option">
                    <input type="checkbox" name="entry.1177368021" value="Code Quiz Arena" />
                    <span>Code Quiz Arena</span>
                  </label>
                  <label className="event-option">
                    <input type="checkbox" name="entry.1177368021" value="Electric Scops" />
                    <span>Electric Scop</span>
                  </label>
                  <label className="event-option">
                    <input type="checkbox" name="entry.1177368021" value="Archova" />
                    <span>Archova</span>
                  </label>
                  <label className="event-option">
                    <input type="checkbox" name="entry.1177368021" value="Digibyte" />
                    <span>Digibyte</span>
                  </label>
                  <label className="event-option">
                    <input type="checkbox" name="entry.1177368021" value="Visual to Virtual" />
                    <span>Visual to Virtual</span>
                  </label>
                </div>
              </div>

              {/* PAYMENT SECTION */}
              <div className="payment-section" style={{ textAlign: "center", margin: "2rem 0", background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "12px" }}>
                <h3 style={{ color: "#ff8c42", marginBottom: "1rem" }}>Payment Details</h3>

                <p style={{ marginBottom: "1rem" }}>
                  <strong>Registration Fee:</strong><br />
                  ₹150 per student<br />
                  ₹275 for 2 persons<br />
                  ₹400 for 3 persons<br />
                  ₹500 for 4 persons
                </p>

                <div className="qr-container" style={{ margin: "1.5rem 0" }}>
                  <img src="/qr/qr.jpeg" alt="Payment QR Code" style={{ width: "220px", borderRadius: "10px", border: "2px solid #ff8c42", boxShadow: "0 0 15px rgba(255, 140, 66, 0.3)" }} />
                </div>

                <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", color: "#ff8c42" }}>
                  <strong>UPI ID: obuliraj2006-1@oksbi</strong>
                </p>

                <div className="payment-instructions" style={{ fontSize: "0.95rem", opacity: "0.9", marginBottom: "1.5rem", lineHeight: "1.6", textAlign: "left", background: "rgba(0,0,0,0.3)", padding: "1.5rem", borderRadius: "12px" }}>
                  <p style={{ marginBottom: "10px" }}>
                    <strong>Steps to upload receipt:</strong>
                  </p>
                  <ol style={{ paddingLeft: "20px" }}>
                    <li>Pay the registration fee via the QR code or UPI ID above.</li>
                    <li>Upload the payment receipt (screenshot) to the Google Drive link provided below.</li>
                    <li><strong>In Google Drive, create a folder named with your Transaction ID and then upload your receipt into it.</strong></li>
                    <li>Make sure the uploaded file/folder has "Anyone with link" access (Publicly available).</li>
                    <li><strong>Optionally</strong>, paste your Google Drive link or Transaction ID in the fields below.</li>
                  </ol>
                  <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <a
                      href="https://drive.google.com/drive/folders/18BHim_q3uVapn9UDYTG0jqEky26PkKQy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="submit-btn"
                      style={{ display: "inline-block", width: "auto", padding: "12px 25px", marginTop: "10px", textDecoration: "none", color: "black", borderRadius: "10px" }}
                    >
                      📁 Upload to Google Drive
                    </a>
                  </div>
                </div>

                <div className="input-group input-with-icon">
                  <FaCreditCard className="field-icon" />
                  <input
                    type="text"
                    name="entry.975889574"
                    placeholder="Collection Transaction ID"
                    required
                    className="payment-input"
                  />
                </div>
                {errors.txId && <div className="error-message">{errors.txId}</div>}

                <div className="input-group input-with-icon">
                  <FaLink className="field-icon" />
                  <input
                    type="url"
                    name="entry.923947019"
                    placeholder="Google Drive Link (Optional)"
                    className="payment-input"
                  />
                </div>
              </div>

              {/* CONTACT INFO */}
              <div className="contact-queries" style={{ margin: "2rem 0", padding: "1rem", background: "rgba(255, 140, 66, 0.1)", borderRadius: "12px", border: "1px dashed #ff8c42" }}>
                <p style={{ color: "#ff8c42", fontWeight: "700", marginBottom: "0.5rem" }}>For Queries Contact:</p>
                <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", flexWrap: "wrap" }}>
                  <p>Ajay Raju: <strong>+91 9342771137</strong></p>
                  <p>Obuliraj: <strong>+91 7358851552</strong></p>
                </div>
              </div>

              <button type="submit" className="submit-btn">Submit Registration</button>
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
              Thank you for Joining INTELLECT 26. <br />
              Stay tuned for updates in our inter-college community.
            </p>

            <div className="success-actions">
              <motion.a
                href="https://chat.whatsapp.com/LANxOdAKImN0khAUcaVSOm"
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
        )
        }
      </motion.div >
    </div >
  );
}
