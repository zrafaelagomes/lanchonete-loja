import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Cardapio from "./components/sections/Cardapio";
import Carrinho from "./components/pedido/Carrinho";
import Footer from "./components/layout/Footer";
import { PedidoProvider } from "./components/pedido/PedidoContext";

export default function App() {
  return (
    <PedidoProvider>
      <Navbar />

      <Hero />

      <Cardapio />

      <Carrinho />
      <a
        href="https://wa.me/558798210401"
        target="_blank"
        className="fixed bottom-24 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <img src="/whatsapp.png" className="w-6 h-6" />
      </a>

      <Footer />
    </PedidoProvider>
  );
}
