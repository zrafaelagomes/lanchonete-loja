import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

type Section = "cardapio" | "art" | "combo" | "fam" | "past" | "bat" | "beb";

export default function Navbar() {
  const [active, setActive] = useState<Section>("cardapio");

  const scrollTo = (id: Section) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90; // altura do navbar
    const y =
      el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const sections: Section[] = [
      "cardapio",
      "art",
      "combo",
      "fam",
      "past",
      "bat",
      "beb",
    ];

    const handleScroll = () => {
      let current: Section = "cardapio";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10" />
          <span className="font-bold text-[#ff3c00]">Good Burguer</span>
        </div>

        {/* MENU */}
        <nav className="flex gap-6 text-sm md:text-base font-medium">

          <NavItem id="cardapio" label="Cardápio" active={active} onClick={scrollTo} />
          <NavItem id="art" label="Artesanal" active={active} onClick={scrollTo} />
          <NavItem id="combo" label="Combos" active={active} onClick={scrollTo} />
          <NavItem id="fam" label="Família" active={active} onClick={scrollTo} />
          <NavItem id="past" label="Pastéis" active={active} onClick={scrollTo} />
          <NavItem id="bat" label="Batata" active={active} onClick={scrollTo} />
          <NavItem id="beb" label="Bebidas" active={active} onClick={scrollTo} />

        </nav>
      </div>
    </header>
  );
}

/* ITEM */
function NavItem({
  id,
  label,
  active,
  onClick,
}: {
  id: Section;
  label: string;
  active: Section;
  onClick: (id: Section) => void;
}) {
  const isActive = active === id;

  return (
    <button
      onClick={() => onClick(id)}
      className={`relative pb-1 transition ${
        isActive ? "text-[#ff3c00]" : "text-gray-700 hover:text-[#ff3c00]"
      }`}
    >
      {label}
    </button>
  );
}