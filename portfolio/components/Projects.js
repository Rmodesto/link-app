import { useState } from "react";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";

import Slider from "react-slick";

{
  /*} React component called "Project" that displays a slider of 
 project cards with images, names, and tech stacks. The component 
 imports and uses other components such as "ArrowBack", "ArrowNext",
 and "Slider" from react-slick libraries.*/
}

const Project = ({
  listProject = [
    {
      name: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      github: "",
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Soul Amiga",
      image: "/assets/ecom.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      github: "",
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Crud App",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      github: "",
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Baseball game",
      image: "/assets/ecom.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      github: "",
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Ai Chatbot",
      image: "/assets/ecom.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      github: "",
      project: "lorem ipsumsd as dff asqqq weer",
    },
  ],
}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /* state and event handlers to track the active index of the hovered 
 project card and to display additional information about the project
 on hover */

  const [sliderRef, setSliderRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const cardStyle = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "200px",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      backdropFilter: "blur(20px)",

      backgroundColor: "#d1d5db",
    },
  });

  // function "HoverText" that takes a single prop called "text"
  const HoverText = ({ text }) => {
    return (
      <div className="hover-text">
        <p>{text}</p>
        {/* add icons or other elements here */}
      </div>
    );
  };

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch  bg-black-500"
        id="projects"
      >
        {listProject.map((listProjects, index) => (
          <div className="px-3" key={index}>
            <div
              className={`border-2 border-gray-500 hover:border-blue hover:bg-blur  transition-all rounded-lg flex flex-col ${
                activeIndex === index ? "hover" : ""
              }`}
              style={cardStyle(listProjects.image)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1 ">
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg capitalize">
                      {activeIndex === index && (
                        <HoverText text={listProjects.name} />
                      )}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {activeIndex === index && (
                        <HoverText
                          text={Object.values(listProjects.stack).join(", ")}
                        />
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  {activeIndex === index && (
                    <HoverText text={listProjects.github} />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <HoverText text={listProjects.project} />
              )}
            </div>
          </div>
        ))}
      </Slider>

      {/* navigation buttons for the slider */}

      <div className="flex w-full bg-black-500 items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
