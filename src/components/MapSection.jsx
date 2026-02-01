import React from "react";

export default function MapSection() {
  return (
    <div style={{ marginTop: "3rem" }}>
      <h2>Event Location</h2>
      <iframe
        title="GCT Coimbatore"
        width="100%"
        height="320"
        style={{ borderRadius: "16px", border: "none" }}
        src="https://www.google.com/maps?q=Government+College+of+Technology+Coimbatore&output=embed"
        loading="lazy"
      />
    </div>
  );
}
