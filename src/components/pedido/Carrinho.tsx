import { useEffect, useState } from "react";
import { usePedido } from "./PedidoContext";

const FRETE: Record<string, number> = {
  Centro: 3,
  Areias: 4,
  Vila: 5,
};

const BAIRROS = Object.keys(FRETE);

// Recebe bottomOffset do App para não sobrepor o footer
interface CarrinhoProps {
  bottomOffset?: number;
}

export default function Carrinho({ bottomOffset = 24 }: CarrinhoProps) {
  const { itens, total } = usePedido();

  const [aberto, setAberto] = useState(false);
  const [animar, setAnimar] = useState(false);

  const [tipo, setTipo] = useState<"retirada" | "delivery">("retirada");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");

  const frete = tipo === "delivery" ? FRETE[bairro] || 0 : 0;
  const totalFinal = total + frete;

  const quantidadeTotal = itens.reduce((acc, i) => acc + i.qtd, 0);

  /* ANIMAÇÃO BADGE */
  useEffect(() => {
    if (quantidadeTotal > 0) {
      setAnimar(true);
      setTimeout(() => setAnimar(false), 300);
    }
  }, [quantidadeTotal]);

  /* FINALIZAR */
  const finalizarPedido = () => {
    if (tipo === "delivery" && (!bairro || !endereco)) {
      alert("Preencha endereço e bairro");
      return;
    }

    let msg = "🛒 *Pedido*\n\n";

    itens.forEach((i) => {
      msg += `• ${i.nome} x${i.qtd} - R$ ${(i.preco * i.qtd).toFixed(2)}\n`;
    });

    msg += `\n💰 Total: R$ ${total.toFixed(2)}\n`;

    if (tipo === "delivery") {
      msg += `🚚 Frete: R$ ${frete.toFixed(2)}\n`;
      msg += `📍 Bairro: ${bairro}\n`;
      msg += `🏠 Endereço: ${endereco}\n`;
    } else {
      msg += `📦 Retirada no local\n`;
    }

    msg += `\n💵 Total final: R$ ${totalFinal.toFixed(2)}`;

    window.open(
      `https://wa.me/558798210401?text=${encodeURIComponent(msg)}` 
    );
  }; //2

  return (
    <>
      {/* OVERLAY */}
      {aberto && (
        <div
          onClick={() => setAberto(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* BOTÃO CARRINHO — sobe dinamicamente antes do footer */}
      <button
        onClick={() => setAberto(true)}
        className="fixed right-4 bg-[#ff3c00] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        style={{ bottom: `${bottomOffset}px` }}
      >
        🛒
        {quantidadeTotal > 0 && (
          <span
            className={`bg-white text-[#ff3c00] text-xs px-2 py-0.5 rounded-full font-bold transition-transform ${
              animar ? "scale-125" : "scale-100"
            }`}
          >
            {quantidadeTotal}
          </span>
        )}
      </button>

      {/* PAINEL DO CARRINHO */}
      {/* No mobile ocupa tela inteira; no desktop fica em 360px */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-50 transform transition-transform duration-300 ${
          aberto ? "translate-x-0" : "translate-x-full"
        } shadow-xl`}
      >
        <div className="p-4 flex flex-col h-full">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Seu Pedido</h2>
            <button
              onClick={() => setAberto(false)}
              className="text-gray-500 hover:text-gray-800 text-xl transition"
            >
              ✕
            </button>
          </div>

          {/* ITENS */}
          <div className="flex-1 overflow-y-auto">
            {itens.length === 0 && (
              <p className="text-gray-400 text-sm mt-4">Carrinho vazio 🛒</p>
            )}

            {itens.map((item) => (
              <div key={item.nome} className="mb-3 border-b pb-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">{item.nome}</p>
                  <p className="text-xs text-gray-500">
                    R$ {item.preco.toFixed(2)} × {item.qtd}
                  </p>
                </div>
                <p className="text-[#ff3c00] font-bold text-sm">
                  R$ {(item.preco * item.qtd).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* ENTREGA */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Entrega</h3>

            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setTipo("retirada")}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition ${
                  tipo === "retirada"
                    ? "bg-[#ff3c00] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Retirar
              </button>

              <button
                onClick={() => setTipo("delivery")}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition ${
                  tipo === "delivery"
                    ? "bg-[#ff3c00] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Delivery
              </button>
            </div>

            {/* CAMPOS DE DELIVERY — transição suave */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                tipo === "delivery"
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-2 mt-2">
                <select
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  className="border p-2 rounded text-sm"
                >
                  <option value="">Selecione o bairro</option>
                  {BAIRROS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>

                <input
                  placeholder="Endereço completo"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  className="border p-2 rounded text-sm"
                />

                <p className="text-sm">
                  Frete: <strong>R$ {frete.toFixed(2)}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* TOTAL + FINALIZAR */}
          <div className="mt-4 border-t pt-3">
            <p className="font-bold text-lg">
              Total: R$ {totalFinal.toFixed(2)}
            </p>

            <button
              onClick={finalizarPedido}
              className="w-full bg-[#ff3c00] text-white py-3 rounded-lg mt-3 hover:opacity-90 active:scale-95 transition cursor-pointer font-semibold"
            >
              Finalizar Pedido via WhatsApp 🚀
            </button>
          </div>

        </div>
      </div>
    </>
  );
}