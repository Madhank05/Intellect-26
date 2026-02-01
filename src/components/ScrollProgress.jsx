import { useEffect, useState } from "react";
import React from "react";
export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setP((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, width: "100%", height: "4px", zIndex: 9999 }}>
      <div style={{
        width: `${p}%`,
        height: "100%",
        background: "linear-gradient(90deg,#B87333,#FF8C42)"
      }} />
    </div>
  );
}
