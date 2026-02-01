import React from "react";
import { Link } from "react-router-dom";

export default function ParticipantsSponsors() {
  return (
    <div className="ps-grid">

      {/* PARTICIPANTS */}
      <div className="ps-card">
        <h2>Participants</h2>
        <p>
          Open for Inter & Intra college students.  
          Compete, learn, win certificates and exciting prizes.
        </p>

        <ul>
          <li>20+ Technical Events</li>
          <li>Certificates for all participants</li>
          <li>Exciting cash prizes</li>
        </ul>

        <Link to="/register" className="ps-btn">
          Register Now
        </Link>
      </div>

      {/* SPONSORS */}
      <div className="ps-card">
        <h2>Sponsors</h2>
        <p>
          Partner with us to showcase your brand in a premier
          technical symposium.
        </p>

        <ul>
          <li>Brand visibility</li>
          <li>Student engagement</li>
          <li>Social media promotion</li>
        </ul>

        <Link to="/sponsor" className="ps-btn outline">
          Become a Sponsor
        </Link>
      </div>

    </div>
  );
}
