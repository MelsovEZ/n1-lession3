"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FC } from "react";

const ThemeButton: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log("Button clicked");
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-800 text-white rounded"
    >
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeButton;
