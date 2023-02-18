const Hero = () => {
  return (
    <section className="flex flex-col mt-12 items-center xs:ml-24 justify-center absolute z-30 text-white">
      <h1 className="mt-6 text-xl font-bold text-center ">
        Hello, I'm <span className="text-blue">Rafael</span>
      </h1>
      <h2 className="text-base font-medium text-center">
        I'm Web Developer in NYC.
      </h2>
      <p className="text-center text:xs font-medium xs:hidden mt-2">
        I'm passionte about technology and building interactive web
        applications.
      </p>

      <div className="text-center mb-4 text-base flex flex-row">
        <a className="p-2 my-5 mx-2 bg-transparent hover:bg-blue font-bold text-center text-white rounded border-2 border-blue hover:border-blue shadow-md transition duration-500 md:text-xl">
          contact me
        </a>
      </div>
    </section>
  );
};

export default Hero;
