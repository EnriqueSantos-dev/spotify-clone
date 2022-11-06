import {
  faFacebook,
  faFacebookSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Logo from "../../components/Logo";
import Select from "../../components/Select";
import TextField from "../../components/TextField";

const listMonths = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const SignUp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SignUp page</title>
      </Head>

      <main>
        <div className="flex flex-col mx-auto max-w-[450px]">
          <div className="w-full py-10 pb-8">
            <Logo
              className="w-[132px] h-10 mx-auto"
              color="#000"
              fill="black"
            />
            <p className="mt-10 text-black font-bold text-[32px] leading-9 text-center">
              Inscreva-se grátis e comece a curtir.
            </p>
          </div>

          <div className="mb-[22px] max-w-[394px] mx-auto w-full hover:scale-105 transition-transform">
            <Button.Root bg="#3b5998" variant="fill" className="text-[#6a6a6a]">
              <Button.Icon>
                <FontAwesomeIcon icon={faFacebook} size="xl" color="white" />
              </Button.Icon>
              <Button.Text className="text-white">
                inscrever-se com o facebook
              </Button.Text>
            </Button.Root>
          </div>

          <div className="mb-[22px] max-w-[394px] mx-auto w-full">
            <Button.Root
              variant="outline"
              className="text-[#6a6a6a] border-2 border-#535353 hover:scale-105 transition-transform"
            >
              <Button.Icon>
                <FontAwesomeIcon icon={faGoogle} size="lg" color="black" />
              </Button.Icon>
              <Button.Text>inscrever-se com o google</Button.Text>
            </Button.Root>
          </div>

          <div className="flex items-center max-w-[394px] w-full mx-auto">
            <hr className="bg-[#d9dadc] w-full mt-3 mb-5 border-0 h-[2px] flex-1" />
            <span className=" text-[#7f7f7f] lowercase px-4">Ou</span>
            <hr className="bg-[#d9dadc] w-full mt-3 mb-5 border-0 h-[2px] flex-1" />
          </div>

          <form className="flex flex-col gap-6 mt-4 pb-[130px]">
            <div className="pb-4">
              <label
                htmlFor="email"
                className="text-black text-sm font-bold pb-3 block"
              >
                Qual o seu email?
              </label>
              <TextField
                type="text"
                placeholder="Insira seu e-mail"
                id="email"
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="confirmEmail"
                className="text-black text-sm font-bold pb-3 block"
              >
                Confirme seu email
              </label>
              <TextField
                type="text"
                placeholder="Insira o e-mail novamente"
                id="confirmEmail"
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="password"
                className="text-black text-sm font-bold pb-3 block"
              >
                Crie uma senha
              </label>
              <TextField
                type="text"
                placeholder="Crie uma senha"
                id="confirmEmail"
              />
            </div>

            <div className="pb-4">
              <label
                htmlFor="username"
                className="text-black text-sm font-bold pb-3 block"
              >
                Como devemos chamar você?
              </label>
              <TextField
                type="text"
                placeholder="Insira um nome de perfil"
                id="username"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-black text-sm font-bold pb-3">
                Qual sua data de nascimento?
              </p>

              <div className="flex gap-6">
                <div className="w-1/4">
                  <label htmlFor="" className="pb-2 block">
                    Dia
                  </label>
                  <TextField
                    type="number"
                    maxLength={2}
                    minLength={2}
                    placeholder="DD"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="" className="pb-2 block">
                    Mês
                  </label>
                  <Select listOptions={listMonths} />
                </div>
                <div className="w-1/4">
                  <label htmlFor="" className="pb-2 block">
                    Ano
                  </label>
                  <TextField
                    type="number"
                    maxLength={4}
                    minLength={4}
                    placeholder="AAAA"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Qual seu gênero?</label>
              <div className="flex flex-wrap w-full">
                <label className="flex items-center cursor-pointer accent-emerald-600 pb-2">
                  <input type="radio" name="gender" id="" />
                  <span className="pl-3 pr-6 text-sm">Masculino</span>
                </label>

                <label className="flex items-center cursor-pointer accent-emerald-600 pb-2">
                  <input type="radio" name="gender" id="" />
                  <span className="pl-3 pr-6 text-sm">Feminino</span>
                </label>

                <label className="flex items-center cursor-pointer accent-emerald-600 pb-2">
                  <input type="radio" name="gender" id="" />
                  <span className="pl-3 pr-6 text-sm">Não binário</span>
                </label>

                <label className="flex items-center cursor-pointer accent-emerald-600 pb-2">
                  <input type="radio" name="gender" id="" />
                  <span className="pl-3 pr-6 text-sm">Outros</span>
                </label>

                <label className="flex items-center cursor-pointer accent-emerald-600 pb-2">
                  <input type="radio" name="gender" id="" />
                  <span className="pl-3 pr-6 text-sm">Prefiro não dizer</span>
                </label>
              </div>
            </div>

            <div className="">
              <label className="flex gap-3 items-center text-sm pr-6 cursor-pointer">
                <Checkbox />
                Não quero receber messagens de marketing do spotify
              </label>
            </div>

            <div className="">
              <label className="flex gap-3 items-start text-sm pr-6 cursor-pointer">
                <Checkbox />
                Compartilhar meus dados cadastrais com os provedores de conteúdo
                do Spotify para fins de marketing.
              </label>
            </div>

            <div className="">
              <label className="flex gap-3 items-center text-sm pr-6 cursor-pointer">
                <Checkbox />

                <p>
                  Eu concordo com os{" "}
                  <Link
                    href="https://www.spotify.com/br/legal/privacy-policy/"
                    target="_blank"
                    className="text-green-600 underline capitalize"
                  >
                    Termos e Condições de uso do Spotify
                  </Link>
                </p>
              </label>
            </div>

            <div className="text-center">
              <p className="text-xs pb-3">
                Para saber mais sobre como o Spotify coleta, utiliza,
                compartilha e protege seus dados pessoais, leia a{" "}
                <Link
                  href="https://www.spotify.com/br/legal/privacy-policy/"
                  target="_blank"
                  className="text-green-600 underline capitalize"
                >
                  Política de privacidade do spotify
                </Link>
              </p>

              <div className="mx-auto max-w-[220px] w-full mb-6">
                <Button.Root
                  className="border-0 bg-green-600 hover:scale-105 transition-transform px-12 py-4"
                  variant="fill"
                >
                  <Button.Text className="text-base text-black">
                    Inscrever-se
                  </Button.Text>
                </Button.Root>
              </div>

              <p className="">
                Já tem uma conta?{" "}
                <Link href="/signin" className="text-green-600 underline">
                  Faça login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
