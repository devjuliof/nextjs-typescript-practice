"use client";

import React from "react";

export default function BlackButton({ text }: { text: string }) {
  return (
    <button
      style={{
        color: "white",
        backgroundColor: "#1e1e1e",
        height: "50px",
        border: "none",
        fontSize: "18px",
        boxShadow: "-8px 8px rgba(0, 0, 0, 1)",
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
        e.currentTarget.style.backgroundColor = "#333";
        e.currentTarget.style.transform = "translate(0px, -10px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1e1e1e";
        e.currentTarget.style.transform = "translate(0px, 0px)";
      }}
    >
      {text}
    </button>
  );
}
