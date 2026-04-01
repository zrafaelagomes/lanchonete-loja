import { useEffect, useState } from "react";
import { usePedido } from "./PedidoContext";

const FRETE: Record<string, number> = {
  Centro: 3,
  Areias: 4,
  Vila: 5,
};

const BAIRROS = Object.keys(FRETE);

type Pagamento = "pix" | "credito" | "debito" | "dinheiro";

const PAGAMENTOS: { valor: Pagamento; label: string; emoji: string }[] = [
  { valor: "pix",      label: "Pix",      emoji: "🔑" },
  { valor: "credito",  label: "Crédito",  emoji: "💳" },
  { valor: "debito",   label: "Débito",   emoji: "💳" },
  { valor: "dinheiro", label: "Dinheiro", emoji: "💵" },
];

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

  const [pagamento, setPagamento] = useState<Pagamento | "">("");
  const [troco, setTroco] = useState("");

  const frete = tipo === "delivery" ? FRETE[bairro] || 0 : 0;
  const totalFinal = total + frete;
  const quantidadeTotal = itens.reduce((acc, i) => acc + i.qtd, 0);

  useEffect(() => {
    if (quantidadeTotal > 0) {
      setAnimar(true);
      setTimeout(() => setAnimar(false), 300);
    }
  }, [quantidadeTotal]);

  const finalizarPedido = () => {
    if (tipo === "delivery" && (!bairro || !endereco)) {
      alert("Preencha endereço e bairro");
      return;
    }
    if (!pagamento) {
      alert("Selecione a forma de pagamento");
      return;
    }

    const labelPagamento: Record<Pagamento, string> = {
      pix:      "Pix",
      credito:  "Cartão de Crédito",
      debito:   "Cartão de Débito",
      dinheiro: "Dinheiro",
    };

    let msg = "🛒 *Pedido*\n\n";
    itens.forEach((i) => {
      msg += `• ${i.nome} x${i.qtd} - R$ ${(i.preco * i.qtd).toFixed(2)}\n`;
    });
    msg += `\n💰 Subtotal: R$ ${total.toFixed(2)}\n`;

    if (tipo === "delivery") {
      msg += `🚚 Frete: R$ ${frete.toFixed(2)}\n`;
      msg += `📍 Bairro: ${bairro}\n`;
      msg += `🏠 Endereço: ${endereco}\n`;
    } else {
      msg += `📦 Retirada no local\n`;
    }

    msg += `\n💵 Total final: R$ ${totalFinal.toFixed(2)}\n`;
    msg += `\n💳 Pagamento: ${labelPagamento[pagamento]}`;

    if (pagamento === "dinheiro" && troco) {
      msg += `\n🪙 Troco para: R$ ${troco}`;
    }

    window.open(`https://wa.me/558798210402?text=${encodeURIComponent(msg)}`);
  };

  return (
    <>
      {aberto && (
        <div
          onClick={() => setAberto(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* BOTÃO CARRINHO */}
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

      {/* PAINEL */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-50 transform transition-transform duration-300 ${
          aberto ? "translate-x-0" : "translate-x-full"
        } shadow-xl flex flex-col`}
      >
        <div className="p-4 flex flex-col h-full overflow-y-auto">

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
          <div className="flex-1 overflow-y-auto min-h-[60px]">
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
                  tipo === "retirada" ? "bg-[#ff3c00] text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                Retirar
              </button>
              <button
                onClick={() => setTipo("delivery")}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition ${
                  tipo === "delivery" ? "bg-[#ff3c00] text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                Delivery
              </button>
            </div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                tipo === "delivery" ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
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

          {/* PAGAMENTO */}
          <div className="mt-5">
            <h3 className="font-semibold mb-2">Pagamento</h3>
            <div className="grid grid-cols-2 gap-2">
              {PAGAMENTOS.map(({ valor, label, emoji }) => (
                <button
                  key={valor}
                  onClick={() => {
                    setPagamento(valor);
                    if (valor !== "dinheiro") setTroco("");
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                    pagamento === valor
                      ? "border-[#ff3c00] bg-[#fff0eb] text-[#ff3c00] shadow-sm"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-[#ff3c00]/40"
                  }`}
                >
                  <span className="text-base">{emoji}</span>
                  {label}
                </button>
              ))}
            </div>

            {/* Troco — só aparece no dinheiro */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                pagamento === "dinheiro" ? "max-h-[72px] opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <input
                type="number"
                min="0"
                placeholder="Troco para quanto? (opcional)"
                value={troco}
                onChange={(e) => setTroco(e.target.value)}
                className="border p-2 rounded text-sm w-full"
              />
            </div>
          </div>

          {/* TOTAL + FINALIZAR */}
          <div className="mt-5 border-t pt-3">
            {tipo === "delivery" && frete > 0 && (
              <p className="text-xs text-gray-500 mb-1">
                Subtotal R$ {total.toFixed(2)} + Frete R$ {frete.toFixed(2)}
              </p>
            )}
            <p className="font-bold text-lg">Total: R$ {totalFinal.toFixed(2)}</p>

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