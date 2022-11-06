import {
  faApple,
  faFacebookSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Logo from "../../components/Logo";
import TextField from "../../components/TextField";

interface Props {}

const SignIn: NextPage<Props> = ({}) => {
  return (
    <>
      <header className="w-full  h-5xl p-[10px] text-center border-b border-[#d9dadc] mb-[10px] md:mb-[30px] md:py-[25px] md:pb-[10px]">
        <div className="pb-[6px] md:pb-3">
          <Logo
            className="mx-auto w-[136px] h-[42px] md:w-[182px] md:h-14"
            fill="black"
          />
        </div>
      </header>
      <main className="pb-[10px]">
        <div className="flex flex-col px-[10px] md:p-0 gap-[10px] justify-center items-center max-w-[450px] w-full mx-auto">
          <p className="text-black font-black text-sm">
            Para continuar, faça login no Spotify
          </p>

          <Button.Root bg="#3b5998" variant="fill" className="text-[#6a6a6a]">
            <Button.Icon>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="lg"
                color="white"
              />
            </Button.Icon>
            <Button.Text className="text-white">
              Continuar com o facebook
            </Button.Text>
          </Button.Root>

          <Button.Root variant="fill" bg="black">
            <Button.Icon>
              <FontAwesomeIcon icon={faApple} color="white" size="lg" />
            </Button.Icon>
            <Button.Text className="text-white">
              Continuar com a apple
            </Button.Text>
          </Button.Root>

          <Button.Root variant="outline" className="text-[#6a6a6a]">
            <Button.Icon>
              <FontAwesomeIcon icon={faGoogle} size="lg" color="black" />
            </Button.Icon>
            <Button.Text>Continuar com o google</Button.Text>
          </Button.Root>

          <Button.Root variant="outline" className="text-[#6a6a6a]">
            <Button.Text>Continuar com o número de telefone</Button.Text>
          </Button.Root>

          <div className="flex items-center w-full">
            <hr className="bg-[#d9dadc] w-full mt-3 mb-5 border-0 h-[2px] flex-1" />
            <span className="font-bold lowercase px-4">Ou</span>
            <hr className="bg-[#d9dadc] w-full mt-3 mb-5 border-0 h-[2px] flex-1" />
          </div>

          <form className="w-full">
            <div className="pb-4">
              <label
                htmlFor="email"
                className="text-black text-sm font-bold pb-3 block"
              >
                Endereço de e-mail ou nome de usúario
              </label>
              <TextField
                type="text"
                placeholder="Endereço de e-mail ou nome de usúario"
                id="email"
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="password"
                className="text-black text-sm font-bold pb-3 block"
              >
                Senha
              </label>
              <TextField type="text" placeholder="Senha" id="password" />
            </div>

            <Link href="recovery-password" className="text-black">
              Esqueceu a Senha?
            </Link>

            <div className="flex flex-col md:flex-row justify-between item-start mt-4">
              <label className="flex items-center md:items-start  gap-3 text-sm text-black pb-4">
                <Checkbox />
                Lembrar de mim
              </label>

              <Button.Root
                className="md:max-w-[132px] hover:scale-105 transition-transform"
                variant="fill"
                bg="#1ed760"
              >
                <Button.Text>Entrar</Button.Text>
              </Button.Root>
            </div>
          </form>

          <hr className="bg-[#d9dadc] w-full mt-3 mb-5 border-0 h-[2px]" />

          <div className="w-full">
            <p className="text-center text-lg text-black font-black mb-5">
              Não tem uma conta?
            </p>

            <Button.Root variant="outline">
              <Button.Text className="text-[#6a6a6a]">
                Inscrever-se no spotify
              </Button.Text>
            </Button.Root>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;
