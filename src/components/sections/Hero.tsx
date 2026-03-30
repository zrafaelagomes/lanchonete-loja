import bg from "../../assets/planer-hamburguer.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTEÚDO */}
      <div className="relative z-10 px-6 max-w-xl">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
          O melhor hambúrguer da cidade 🍔
        </h1>

        <p className="text-gray-200 mb-6">
          Sabor artesanal, entrega rápida e preço justo
        </p>

        <button
          onClick={() =>
            document.getElementById("cardapio")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="bg-[#ff3c00] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition cursor-pointer"
        >
          Ver Cardápio
        </button>
      </div>
    </section>
  );
}