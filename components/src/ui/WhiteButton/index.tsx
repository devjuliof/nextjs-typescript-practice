"use client";

import React from "react";

export default function WhiteButton({ text }: { text: string }) {
  return (
    <button
      style={{
        color: "#1e1e1e",
        backgroundColor: "#FBFBFB",
        height: "50px",
        border: "none",
        fontSize: "18px",
        boxShadow: "-8px 8px #C5C5C5",
        transition:
          "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        marginLeft: "8px",
        marginBottom: "8px",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#e0e0e0";
        e.currentTarget.style.transform = "translate(0px, -10px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#FBFBFB";
        e.currentTarget.style.transform = "translate(0px, 0px)";
      }}
    >
      {text}
    </button>
  );
}
