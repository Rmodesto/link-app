import React from "react";
import { CardBlogIcon, CardGitHubIcon, CardYouTubeIcon } from "./CardIcons";

interface CardProps {
  title: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, href }) => {
  const selectIcon = (title: string) => {
    switch (title) {
      case "YouTube":
        return <CardYouTubeIcon />;
      case "Blog":
        return <CardBlogIcon />;
      case "Github":
        return <CardGitHubIcon />;
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      className="flex items-center justify-center p-2 rounded-md hover:scale-110 transition-all ease-in-out w-full border border-gray-300 mb-3"
    >
      <div className="flex text-center w-full">
        {selectIcon(title)}
        <h2 className="font-semibold w-full text-center">{title}</h2>
      </div>
    </a>
  );
};

export default Card;
