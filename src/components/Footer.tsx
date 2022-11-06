import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="pt-20 pb-[50px] bg-black px-[15px] md:py-[50px] md:pb-5 md:px-0 lg:py-20 lg:pb-[50px]">
      <nav className="flex flex-col justify-between mx-auto lg:flex-row xl:max-w-[1170px] lg:w-full  flex-wrap">
        <div className="md:px-[15px] lg:min-h-[346px] ">
          <Logo className="w-[89px] lg:w-[132px] text-white" fill="white" />
        </div>

        <div className="flex flex-col md:flex-row lg:flex-1">
          <dl className="md:flex-1 md:px-[15px]">
            <dt className="font-black text-xs uppercase text-[#919496] mt-[50px] mb-[22px] lg:mt-5">
              <Link href={"#"}>Empresa</Link>
            </dt>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>Sobre</Link>
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>Empregos</Link>
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>For the Record</Link>
            </dd>
          </dl>

          <dl className="md:flex-1 md:px-[15px]">
            <dt className="font-black text-xs uppercase text-[#919496] mt-[50px] mb-[22px] lg:mt-5">
              <Link href={"#"}>Comunidade</Link>
            </dt>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>Para Artis</Link>
              tas
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>Desenvolve</Link>
              dores
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>Publicidad</Link>e
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>Fornecedor</Link>
              es
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>Investidor</Link>
              es
            </dd>
          </dl>

          <dl className="md:flex-1 md:px-[15px]">
            <dt className="font-black text-xs uppercase text-[#919496] mt-[50px] mb-[22px] lg:mt-5">
              <Link href={"#"}>Link Úteis</Link>
            </dt>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>suporte</Link>
              tas
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>player da web</Link>
              dores
            </dd>
            <dd className="text-white capitalize pb-[15px]">
              <Link href={"#"}>aplicativo móvel grátis</Link>e
            </dd>
          </dl>
        </div>

        <div className="mt-[122px] md:ml-[15px] lg:ml-[116px] lg:mt-5">
          <ul className="flex mt-4 lg:mt-0">
            <li className="mr-[15px] bg-[#222326] w-[44px] h-[44px] lg:w-[54px] lg:h-[54px]  flex  items-center justify-center  text-white rounded-full">
              <Link href={"#"}>
                <FontAwesomeIcon
                  size="xl"
                  fontWeight="bold"
                  icon={faInstagram}
                />
              </Link>
            </li>

            <li className="mr-[15px] bg-[#222326] flex w-[44px] h-[44px] lg:w-[54px] lg:h-[54px] items-center justify-center text-white rounded-full">
              <Link href={"#"}>
                <FontAwesomeIcon size="xl" fontWeight="bold" icon={faTwitter} />
              </Link>
            </li>

            <li className="mr-[15px] bg-[#222326] flex w-[44px] h-[44px] lg:w-[54px] lg:h-[54px] items-center justify-center text-white rounded-full">
              <Link href={"#"}>
                <FontAwesomeIcon
                  size="xl"
                  fontWeight="bold"
                  icon={faFacebookF}
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-xs text-[#919496] flex w-full justify-end px-[15px] items-center gap-1">
          <FontAwesomeIcon size="sm" icon={faEarthAmericas} color="#f2f2f2" />
          <span>Brasil</span>
        </div>

        <div className="flex w-full justify-between items-start">
          <ul className="flex flex-wrap md:ml-[15px]">
            <li className="text-[#919496] mr-6 capitalize py-[10px] text-[10px] lg:text-xs">
              Legal
            </li>
            <li className="text-[#919496] capitalize py-[10px] text-[10px] lg:text-xs mr-6">
              Centro de Privacidade
            </li>
            <li className="text-[#919496] capitalize py-[10px] text-[10px] lg:text-xs mr-6">
              Política de Privacidade
            </li>
            <li className="text-[#919496] capitalize py-[10px] text-[10px] lg:text-xs mr-6">
              Cookies
            </li>
            <li className="text-[#919496] capitalize py-[10px] text-[10px] lg:text-xs mr-6">
              Centro de Anúncios
            </li>
          </ul>

          <div className="flex gap-1  text-[#919496] py-[10px] text-[10px] lg:text-xs items-center whitespace-nowrap md:mr-[15px]">
            <FontAwesomeIcon size="sm" icon={faCopyright} color="#f2f2f2" />
            <span>2022 Spotify AB</span>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
