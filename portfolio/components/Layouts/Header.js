import Logo from "../../components/Logo";
import NavLinks from "../../components/NavLinks";

const Header = () => {
  return (
    <header className="flex flex-row items-center bg-black-500 justify-between p-10">
      <Logo />

      <NavLinks />
    </header>
  );
};

export default Header;
