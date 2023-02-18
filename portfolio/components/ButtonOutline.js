const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue text-green-500 bg-transparent outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-500 hover:text-white-500 transition-all hover:shadow-green-md ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
