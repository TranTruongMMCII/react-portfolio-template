import React from "react";
import gbFlag from "@/assets/images/flags/gb-flag-icon.svg";
import krFlag from "@/assets/images/flags/kr-flag-icon.svg";

function getFlagSrc(code: string) {
  switch (code.toUpperCase()) {
    case "GB":
      return gbFlag;
    case "KR":
      return krFlag;
    default:
      console.warn(`Flag for code "${code}" not found. Using default flag.`);
      return gbFlag; // Default to GB flag if code is unrecognized
  }
}

export default function NameWithFlagImg({
  code = "KR",
  name = "하비",
  size = 18,
}) {
  const src = getFlagSrc(code);
  console.log("Flag src:", src); // Debug log to check the path
  return (
    <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <img
        src={src}
        alt={`${code} flag`}
        width={size}
        // height is auto by default for SVGs; you can add height if you need a fixed box
        style={{ verticalAlign: "text-bottom" }}
        loading="lazy"
      />
      {name}
    </p>
  );
}
