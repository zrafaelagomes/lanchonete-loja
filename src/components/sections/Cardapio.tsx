import { useState } from "react";
import { usePedido } from "../pedido/PedidoContext";
import { useToast } from "../../hooks/useToast";

export default function Cardapio() {
  const { adicionar } = usePedido();
  const { show, Toast } = useToast();

  const [open, setOpen] = useState({
    art: true,
    combo: false,
    fam: false,
    past: false,
    bat: false,
    beb: false,
  });

  const toggle = (key: keyof typeof open) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="cardapio" className="bg-[#fff7ed] min-h-screen px-6 py-10">
      <Toast />

      {/* ARTESANAL */}
      <Section id="art" title="Artesanal 150g" open={open.art} toggle={() => toggle("art")}>
        <Item nome="X Burger Artesanal" preco={15} desc="Carne 150g, queijo e presunto" adicionar={adicionar} show={show}/>
        <Item nome="X Bacon Artesanal" preco={18} desc="Carne 150g, bacon e queijo" adicionar={adicionar} show={show}/>
        <Item nome="X Calabresa Artesanal" preco={18} desc="Carne 150g, calabresa e queijo" adicionar={adicionar} show={show}/>
        <Item nome="X Tudo Artesanal" preco={25} desc="Completo com tudo" adicionar={adicionar} show={show}/>
      </Section>

      {/* COMBOS */}
      <Section id="combo" title="Combos" open={open.combo} toggle={() => toggle("combo")}>
        <Item nome="2x X Bacon + Refri 1L" preco={32} desc="Combo casal" adicionar={adicionar} show={show}/>
        <Item nome="2x X Calabresa + Refri 1L" preco={32} desc="Combo casal" adicionar={adicionar} show={show}/>
        <Item nome="3 Hambúrguer Simples" preco={18} desc="Promoção" adicionar={adicionar} show={show}/>
        <Item nome="2x Artesanal + Refri" preco={38} desc="Combo premium" adicionar={adicionar} show={show}/>
      </Section>

      {/* FAMÍLIA */}
      <Section id="fam" title="Hambúrguer Família" open={open.fam} toggle={() => toggle("fam")}>
        <Item nome="Hamburgão Família" preco={24} desc="3 carnes e queijo" adicionar={adicionar} show={show}/>
        <Item nome="Good Burguer Família" preco={30} desc="Completo" adicionar={adicionar} show={show}/>
        <Item nome="Família com Batata" preco={39.9} desc="Combo completo" adicionar={adicionar} show={show}/>
      </Section>

      {/* PASTÉIS */}
      <Section id="past" title="Pastéis" open={open.past} toggle={() => toggle("past")}>
        <Item nome="Pastel Carne + Queijo" preco={12} desc="Tradicional" adicionar={adicionar} show={show}/>
        <Item nome="Pastel Calabresa + Queijo" preco={12} desc="Tradicional" adicionar={adicionar} show={show}/>
        <Item nome="Pastel Frango + Queijo" preco={12} desc="Tradicional" adicionar={adicionar} show={show}/>
      </Section>

      {/* BATATA */}
      <Section id="bat" title="Batata Frita" open={open.bat} toggle={() => toggle("bat")}>
        <Item nome="Batata PP" preco={12} desc="200g" adicionar={adicionar} show={show}/>
        <Item nome="Batata M" preco={15} desc="Média" adicionar={adicionar} show={show}/>
        <Item nome="Batata com Bacon" preco={22} desc="Com cheddar e bacon" adicionar={adicionar} show={show}/>
      </Section>

      {/* BEBIDAS */}
      <Section id="beb" title="Bebidas" open={open.beb} toggle={() => toggle("beb")}>
        <Item nome="Pepsi 1L" preco={10} desc="Refrigerante" adicionar={adicionar} show={show}/>
        <Item nome="Guaraná 1L" preco={10} desc="Refrigerante" adicionar={adicionar} show={show}/>
        <Item nome="Suco de Laranja 500ml" preco={10} desc="Natural" adicionar={adicionar} show={show}/>
        <Item nome="Suco de Maracujá 500ml" preco={10} desc="Natural" adicionar={adicionar} show={show}/>
      </Section>

    </section>
  );
}

/* SECTION */
function Section({ id, title, open, toggle, children }: any) {
  return (
    <div id={id} className="mb-8">
      <div
        onClick={toggle}
        className="flex justify-between items-center bg-white py-6 px-5 rounded-xl shadow min-h-[70px] cursor-pointer text-[#4b4b4b]"
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <span className="text-[#ff3c00] text-xl">{open ? "−" : "+"}</span>
      </div>

      <div className={`grid gap-4 mt-4 ${open ? "" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
}

/* ITEM */
function Item({ nome, preco, desc, adicionar, show }: any) {
  return (
    <div className="bg-white p-5 rounded-xl flex justify-between items-center shadow">
      <div>
        <h3 className="font-semibold">{nome}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
        <p className="text-[#ff3c00] font-bold">R$ {preco.toFixed(2)}</p>
      </div>

      <button
        onClick={() => {
          adicionar({ nome, preco });
          show("Item adicionado");
        }}
        className="bg-[#ff3c00] text-white px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition"
      >
        Adicionar +
      </button>
    </div>
  );
}