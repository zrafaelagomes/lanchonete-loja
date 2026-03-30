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
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div
        className={`rounded-xl transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <div className="flex items-center gap-2 min-w-fit">
            <img src={logo} className="w-9 h-9" alt="Logo" />
            <span className="font-bold text-[#ff3c00] text-sm sm:text-base whitespace-nowrap">
              Good Burguer
            </span>
          </div>

          {/* MENU — scroll horizontal no mobile, normal no desktop */}
          <nav className="flex gap-3 sm:gap-5 overflow-x-auto no-scrollbar text-sm font-medium ml-4">
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
                className="text-[#ff3c00] whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {label}
              </button>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
}