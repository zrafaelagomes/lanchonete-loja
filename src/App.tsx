import { useEffect, useRef, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Cardapio from "./components/sections/Cardapio";
import Carrinho from "./components/pedido/Carrinho";
import Footer from "./components/layout/Footer";
import { PedidoProvider } from "./components/pedido/PedidoContext";

export default function App() {
  const footerRef = useRef<HTMLDivElement>(null);
  // bottomOffset controla o quanto os botões sobem quando o footer aparece
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const update = () => {
      if (!footerRef.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (footerRect.top < viewportHeight) {
        // footer está visível: empurra botões para cima
        const overlap = viewportHeight - footerRect.top;
        setBottomOffset(24 + overlap);
      } else {
        setBottomOffset(24);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <PedidoProvider>
      {/* pt-[72px] compensa a navbar fixed (altura ~60px + 12px margem) */}
      <div className="pt-[72px]">
        <Navbar />

        <Hero />

        <Cardapio />

        {/* Carrinho recebe o bottomOffset para posicionar o botão do carrinho */}
        <Carrinho bottomOffset={bottomOffset} />

        {/* Botão WhatsApp fixo — sobe junto quando footer aparece */}
        <a
          href="https://wa.me/558798210401"
          target="_blank"
          rel="noreferrer"
          className="fixed right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          style={{ bottom: `${bottomOffset + 68}px` }} // fica acima do botão do carrinho
        >
          <img src="/whatsapp.png" className="w-6 h-6" alt="WhatsApp" />
        </a>

        {/* div sentinela para o footer — o ref fica aqui */}
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </PedidoProvider>
  );
}
