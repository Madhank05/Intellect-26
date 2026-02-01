import { useEffect, useState } from "react";
import React from "react";

const eventDate = new Date("2026-02-02T09:00:00"); // CHANGE DATE

export default function Countdown() {
  const [time, setTime] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) return clearInterval(timer);

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {["days", "hours", "minutes", "seconds"].map((k) => (
        <div key={k} className="count-box">
          <h2>{time[k] ?? "00"}</h2>
          <p>{k.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
}
