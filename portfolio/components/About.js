import Image from "next/image";
import SocialLink from "./SocialLinks";
// About section  with  one column and
//two rows in mobile view and two columns
//and  one row in desktop view

// Path: components/About.js

const About = () => {
  return (
    <section
      className="flex flex-col md:flex items-center bg-black-500 justify-center w-full h-screen"
      id="about"
    >
      <h1>
        <span className="text-3xl font-bold text-white">About</span>
      </h1>

      <Image
        src="/assets/rafael.jpg"
        alt="Rafael"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-3xl font-bold text-white">Rafael</h1>
      <div className="flex">
        <SocialLink url="https://github.com/username" type="github" />
        <SocialLink
          url="https://www.linkedin.com/in/username"
          type="linkedin"
        />
        <SocialLink url="https://twitter.com/username" type="twitter" />
      </div>
      <p className="text-white text-center font-acumin">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem
      </p>

      <p className="text-white text-center font-acumin">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem
      </p>
    </section>
  );
};

export default About;
