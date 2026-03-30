import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 mx-3 mt-3 rounded-xl transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-md"
          : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">

        {/* LOGO */}
        <div className="flex items-center gap-2 min-w-fit">
          <img src={logo} className="w-9 h-9" />
          <span className="font-bold text-[#ff3c00] text-sm sm:text-base">
            Good Burguer
          </span>
        </div>

        {/* MENU SCROLL HORIZONTAL NO MOBILE */}
        <nav className="flex gap-4 overflow-x-auto no-scrollbar text-sm font-medium">

          {[
            ["cardapio", "Cardápio"],
            ["art", "Artesanal"],
            ["combo", "Combos"],
            ["fam", "Família"],
            ["past", "Pastéis"],
            ["bat", "Batata"],
            ["beb", "Bebidas"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[#ff3c00] whitespace-nowrap hover:opacity-80"
            >
              {label}
            </button>
          ))}

        </nav>
      </div>
    </header>
  );
}