// CardIcons.js

import React from "react";

export const CardGitHubIcon: React.FC = () => {
  return (
    <svg
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      {" "}
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{" "}
    </svg>
  );
};

export const CardYouTubeIcon: React.FC = () => {
  return (
    <svg
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="white"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
      <rect x="3" y="5" width="18" height="14" rx="4" />{" "}
      <path d="M10 9l5 3l-3z" />{" "}
    </svg>
  );
};

export const CardBlogIcon: React.FC = () => {
  return (
    <svg
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <ellipse
        cx="72"
        cy="128"
        rx="56"
        ry="60"
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <ellipse
        cx="184"
        cy="128"
        rx="24"
        ry="56"
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="240"
        y1="72"
        x2="240"
        y2="184"
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </svg>
  );
};
