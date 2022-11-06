import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg bg-cover bg-left bg-no-repeat bg-[#2941ab] h-screen w-full">
        <section className="flex flex-col items-center h-full justify-center">
          <h1 className="font-black text-green-600 text-center text-5xl leading-[56px] mb-4 sm:text-[104px] sm:leading-[104px] xl:text-[156px] xl:leading-[166px]">
            Escutar muda <br />
            tudo
          </h1>

          <p className="text-base w-[312px] text-green-600 mb-10 text-center sm:w-[400px] xl:w-full">
            Milhões de músicas e podcasts para explorar. E nem precisa de cartão
            de crédito
          </p>

          <button className="uppercase px-8 py-[14px] bg-green-600 text-sm text-[#2941ab] font-bold rounded-[500px] hover:scale-110 transition-transform">
            baixe o spotify free
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
