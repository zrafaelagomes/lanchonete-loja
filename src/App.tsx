import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Cardapio from "./components/sections/Cardapio";
import Carrinho from "./components/pedido/Carrinho";
import { PedidoProvider } from "./components/pedido/PedidoContext";

export default function App() {
  return (
    <PedidoProvider>
      <Navbar />
      <Hero />
      <Cardapio />
      <Carrinho />

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/558798210401" //trocar o ultimo numero para 2
        target="_blank"
        className="fixed bottom-24 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-40"
      >
        <img src="/whatsapp.png" className="w-6 h-6" />
      </a>
    </PedidoProvider>
  );
}
