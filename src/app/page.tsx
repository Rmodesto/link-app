import Image from "next/image";
import Card from "./Card";
import SocialIcons from "./SocialIcons";

const data = {
  name: "@nrolandomota",
  avatar:
    "https://pbs.twimg.com/profile_images/1595838084129636353/dLBsYEuj_400x400.jpg",
  links: [
    {
      title: "Youtube",
      href: "https://www.youtube.com/channel/UC4QqzQXQ9Q3oEBQZQcZQZ0w",
    },

    {
      title: "Blog",
      href: "https://medium.com/nrolandomota",
    },
    {
      title: "Github",
      href: "https://github.com/Rmodesto",
    },
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white mx-auto mt-16 w-full px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-white placeholder:text-xl">
        {data.name}
      </h1>
      {data.links.map((link) => (
        <Card key={link.href} title={link.title} href={link.href} />
      ))}
      <SocialIcons />
    </div>
  );
}
