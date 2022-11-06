import Logo from "./Logo";
import NavigationMobile from "./NaviagtionMobile";
import Navigation from "./NavigationDesktop";

function Header() {
  return (
    <header className="relative w-full h-[54px] lg:h-20 flex justify-center items-center bg-black">
      <div className="px-[15px] lg:px-0 max-w-[1170px] w-full flex justify-between items-center">
        <Logo className="w-[89px] lg:w-[132px] text-white" fill="white" />

        <Navigation />
        <NavigationMobile />
      </div>
    </header>
  );
}

export default Header;
