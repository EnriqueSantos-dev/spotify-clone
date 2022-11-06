import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function NavigationMobile() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <div className="relative block lg:hidden">
      {!menuIsOpen ? (
        <button
          type="button"
          className="relative z-10"
          onClick={() => setMenuIsOpen((state) => !state)}
        >
          <FontAwesomeIcon icon={faBars} size="xl" color="white" />
        </button>
      ) : (
        <button
          type="button"
          className="relative z-10"
          onClick={() => setMenuIsOpen((state) => !state)}
        >
          <FontAwesomeIcon icon={faClose} size="xl" color="white" />
        </button>
      )}

      <div
        className={clsx("bg-overlay fixed top-0 left-0 h-screen w-screen", {
          invisible: !menuIsOpen,
          visible: menuIsOpen,
        })}
      />

      <nav
        className={clsx(
          "fixed top-0  p-[38px] max-w-[472px] flex flex-col justify-between bg-black w-full h-screen  duration-300 ease-in",
          {
            invisible: !menuIsOpen,
            visible: menuIsOpen,
            "right-[-90%]": !menuIsOpen,
            "right-0": menuIsOpen,
            "opacity-100": menuIsOpen,
            "opacity-0": !menuIsOpen,
          }
        )}
      >
        <div>
          <ul className="flex flex-col items-start">
            <li
              className={clsx(
                "text-3xl sm:text-[36px] translate-x-28 pb-[25px] text-white font-bold hover:text-[#1ED760] transition-all delay-300  ease-linear",
                {
                  "opacity-0": !menuIsOpen,
                  "translate-x-0": menuIsOpen,
                  "opacity-100": menuIsOpen,
                }
              )}
            >
              <Link href="/premium">Premium</Link>
            </li>
            <li
              className={clsx(
                "text-3xl sm:text-[36px] translate-x-28 pb-[25px]  text-white font-bold hover:text-[#1ED760] transition-all  delay-300 ease-linear",
                {
                  "opacity-0": !menuIsOpen,
                  "translate-x-0": menuIsOpen,
                  "opacity-100": menuIsOpen,
                }
              )}
            >
              <Link href="/support">Suporte</Link>
            </li>
            <li
              className={clsx(
                "text-3xl sm:text-[36px] translate-x-28 pb-[25px] text-white font-bold hover:text-[#1ED760] transition-all delay-300 ease-linear",
                {
                  "opacity-0": !menuIsOpen,
                  "translate-x-0": menuIsOpen,
                  "opacity-100": menuIsOpen,
                }
              )}
            >
              <Link href="/download">Baixar</Link>
            </li>
            <li className="w-5 mt-[18px] mb-10 bg-white h-[2px]"></li>
            <li
              className={clsx(
                "text-3xl sm:text-[36px] translate-x-28 pb-[25px] text-[#d9dadc]  hover:text-[#1ED760] transition-all  delay-300 ease-linear",
                {
                  "opacity-0": !menuIsOpen,
                  "translate-x-0": menuIsOpen,
                  "opacity-100": menuIsOpen,
                }
              )}
            >
              <Link href="/signup">Inscrever-se</Link>
            </li>
            <li
              className={clsx(
                "text-3xl sm:text-[36px] translate-x-28 pb-[25px] text-[#d9dadc]  hover:text-[#1ED760] transition-all   delay-300 ease-linear",
                {
                  "opacity-0": !menuIsOpen,
                  "translate-x-0": menuIsOpen,
                  "opacity-100": menuIsOpen,
                }
              )}
            >
              <Link href="/signin">Entrar</Link>
            </li>
          </ul>
        </div>

        <Logo className="w-[89px] h-[35px] mt-3" />
      </nav>
    </div>
  );
}

export default NavigationMobile;
