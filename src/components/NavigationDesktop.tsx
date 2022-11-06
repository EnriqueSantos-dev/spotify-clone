import React from "react";
import Link from "next/link";

function NavigationDesktop() {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex items-center">
          <li className="py-[28px] px-[17px] text-white font-bold hover:text-[#1ED760] transition-colors">
            <Link href="/premium">Premium</Link>
          </li>
          <li className="px-[28px] py-[17px] text-white font-bold hover:text-[#1ED760] transition-colors">
            <Link href="/support">Suporte</Link>
          </li>
          <li className="px-[28px] py-[17px] text-white font-bold hover:text-[#1ED760] transition-colors">
            <Link href="/download">Baixar</Link>
          </li>
          <li className="px-[28px] py-[17px] text-white">
            <Link href="/premium">|</Link>
          </li>
          <li className="px-[28px] py-[17px] text-white font-bold hover:text-[#1ED760] transition-colors">
            <Link href="/signup">Inscrever-se</Link>
          </li>
          <li className="px-[28px] py-[17px] text-white font-bold hover:text-[#1ED760] transition-colors">
            <Link href="/signin">Entrar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationDesktop;
