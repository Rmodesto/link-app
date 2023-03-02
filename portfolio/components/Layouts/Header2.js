import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navOpenedRef = useRef(null);
  const videoRef = useRef(null);
  const navRef = useRef(null);
  const vortexRef = useRef(null);
  const [vortexVisible, setVortexVisible] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (showMobileMenu && navOpenedRef.current && videoRef.current) {
      const navHeight = navRef.current.offsetHeight;
      const maxHeight = `calc(100vh - ${navHeight}px)`;
      navOpenedRef.current.style.maxHeight = maxHeight;
      navOpenedRef.current.style.overflowY = "scroll";
      const navOpenedHeight = navOpenedRef.current.offsetHeight;
      videoRef.current.style.maxHeight = `calc(100% - ${navOpenedHeight}px)`;
    } else {
      if (navOpenedRef.current?.style) {
        navOpenedRef.current.style.maxHeight = "";
        navOpenedRef.current.style.overflowY = "";
      }
      if (videoRef.current?.style) {
        videoRef.current.style.maxHeight = "";
      }
    }
  }, [showMobileMenu, navRef.current, navOpenedRef.current, videoRef.current]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted>
          <source src="/assets/stars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <nav
        ref={navRef}
        className="fixed px-8 py-2 inset-x-0 top-0 flex flex-row justify-between z-50 text-white bg-transparent w-full md:px-10"
      >
        <div className="flex items-center p-4">
          <div className="font-extrabold tracking-widest text-xl">
            <Link href="/">
              <span className="text-blue">Rafael</span> Modesto
            </Link>
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
        <div id="nav-open" className="p-4 md:hidden" onClick={toggleMobileMenu}>
          {showMobileMenu ? (
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
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
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
          )}
        </div>
      </nav>

      {showMobileMenu && (
        <div
          id="nav-opened"
          className="nav-opened absolute overflow-y-auto border-blue border-2 max-h-40 text-center top-16 mt-3 min-h-max left-0 right-0 bg-white shadow z-40 px-4 md:px-10"
        >
          <div className="p-2 divide-y divide-gray-600 flex flex-col">
            <Link href="/#about" className="p-2 font-semibold hover:text-blue">
              About
            </Link>
            <Link
              href="/#contactus"
              className="p-2 font-semibold hover:text-blue"
            >
              Projects
            </Link>
            <Link
              href="/#projects"
              className="p-2 font-semibold hover:text-blue"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
