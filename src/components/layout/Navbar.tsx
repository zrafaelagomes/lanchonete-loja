import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  /* DETECTA SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL SUAVE */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/60 backdrop-blur-2x1 shadow-md"
      : "bg-white"
  }`}
>
      <div className="flex items-center justify-between px-6 py-3">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-[#ff3c00] text-lg">
            Good Burguer
          </span>
        </div>

        {/* MENU DIREITA */}
        <nav className="flex items-center gap-6 text-sm md:text-base font-medium">

          <button
            onClick={() => scrollTo("cardapio")}
            className="text-[#ff3c00] font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#ff3c00] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Cardápio
          </button>

          <button
            onClick={() => scrollTo("art")}
            className="text-[#ff3c00] hover:opacity-80 transition cursor-pointer "
          >
            Artesanal
          </button>

          <button
            onClick={() => scrollTo("combo")}
            className="text-[#ff3c00] hover:opacity-80 transition cursor-pointer"
          >
            Combos
          </button>

          <button
            onClick={() => scrollTo("fam")}
            className="text-[#ff3c00] hover:opacity-80 transition cursor-pointer"
          >
            Família
          </button>

          <button
            onClick={() => scrollTo("past")}
            className="text-[#ff3c00] hover:opacity-80 transition cursor-pointer"
          >
            Pastéis
          </button>

          <button
            onClick={() => scrollTo("bat")}
            className="text-[#ff3c00] hover:opacity-80 transition cursor-pointer"
          >
            Batata
          </button>

          <button
            onClick={() => scrollTo("beb")}
            className="text-[#ff3c00] hover:opacity-80 transition cursor-pointer"
          >
            Bebidas
          </button>

        </nav>
      </div>
    </header>
  );
}