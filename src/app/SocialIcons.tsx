import React from "react";

export const TwitterIcon: React.FC = () => {
  return (
    <svg
      className="hover:scale-110 transition-all ease-in-out w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="144" height="144" fill="none" />
      <path
        d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </svg>
  );
};
export const InstagramIcon: React.FC = () => {
  return (
    <svg
      className="hover:scale-110 transition-all ease-in-out w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="40"
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="48"
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="180" cy="76" r="10" fill="white" />
    </svg>
  );
};

5;

export const TikTokIcon: React.FC = () => {
  return (
    <svg
      className="hover:scale-110 transition-all ease-in-out w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <path
        d="M168,106a95.9,95.9,0,0,0,56,18V84a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.3V89.1A68,68,0,1,0,168,156Z"
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </svg>
  );
};

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons flex gap-4 text-white  text-center mt-4">
      <TwitterIcon />

      <InstagramIcon />
      <TikTokIcon />
    </div>
  );
};

export default SocialIcons;
