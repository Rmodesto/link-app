import Link from "next/link";

const Header = () => {
  return (
    <div className="relative">
      <video className="w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="/assets/stars.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <nav className="fixed px-8 py-2 inset-x-0 top-0 flex flex-row justify-between z-50 text-white bg-transparent w-full md:px-10">
        <div className="flex items-center p-4">
          <div className="font-extrabold tracking-widest text-xl ">
            <Link href="/">RM</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center font-bold">
          <Link href="/#about" className="mx-4 text-lg hover:text-indigo-500">
            About
          </Link>
          <Link
            href="/#contactus"
            className="mx-4 text-lg hover:text-indigo-500"
          >
            Projects
          </Link>
          <Link
            href="/#products"
            className="mx-4 text-lg hover:text-indigo-500"
          >
            Contact
          </Link>
        </div>
        <div id="nav-open" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>

      <div
        id="nav-opened"
        className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-50 px-4 md:px-10"
      >
        <div className="p-2 divide-y divide-gray-600 flex flex-col">
          <Link
            href="/#about"
            className="p-2 font-semibold hover:text-indigo-700"
          >
            About
          </Link>
          <Link
            href="/#contactus"
            className="p-2 font-semibold hover:text-indigo-700"
          >
            Projects
          </Link>
          <Link
            href="/#products"
            className="p-2 font-semibold hover:text-indigo-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
