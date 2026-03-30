import bg from "../../assets/planer-hamburguer.jpg";

export default function Hero() {
  return (
    // -mt-[72px] cancela o pt-[72px] do App, fazendo o hero ocupar 100vh real
    // incluindo a área atrás da navbar transparente
    <section
      className="relative h-[100svh] min-h-[500px] flex items-center -mt-[72px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTEÚDO */}
      <div className="relative z-10 px-6 sm:px-10 max-w-2xl pt-[72px]">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          O melhor hambúrguer da cidade 🍔
        </h1>

        <p className="text-gray-200 mb-6 text-sm sm:text-base">
          Sabor artesanal, entrega rápida e preço justo
        </p>

        <button
          onClick={() =>
            document.getElementById("cardapio")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="bg-[#ff3c00] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 active:scale-95 transition cursor-pointer text-sm sm:text-base"
        >
          Ver Cardápio
        </button>
      </div>
    </section>
  );
}