import Link from "next/link";

const NavLinks = () => {
  return (
    <nav className="items-center space-x-4 font-acumin tracking-wider">
      <Link href="/about" className="text-white">
        About
      </Link>
      <Link href="/projects" className="text-white">
        Projects
      </Link>
      <Link href="/contact" className="text-white">
        Contact
      </Link>
    </nav>
  );
};

export default NavLinks;
