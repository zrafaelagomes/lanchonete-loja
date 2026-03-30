import { createContext, useContext, useState, type ReactNode } from "react";

type Item = {
  nome: string;
  preco: number;
  qtd: number;
};

type ContextType = {
  itens: Item[];
  adicionar: (item: Omit<Item, "qtd">) => void;
  aumentar: (nome: string) => void;
  diminuir: (nome: string) => void;
  total: number;
};

const Context = createContext<ContextType | null>(null);

export function PedidoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<Item[]>([]);

  const adicionar = (item: Omit<Item, "qtd">) => {
    setItens((prev) => {
      const existe = prev.find((i) => i.nome === item.nome);

      if (existe) {
        return prev.map((i) =>
          i.nome === item.nome
            ? { ...i, qtd: i.qtd + 1 }
            : i
        );
      }

      return [...prev, { ...item, qtd: 1 }];
    });
  };

  const aumentar = (nome: string) => {
    setItens((prev) =>
      prev.map((i) =>
        i.nome === nome ? { ...i, qtd: i.qtd + 1 } : i
      )
    );
  };

  const diminuir = (nome: string) => {
    setItens((prev) =>
      prev
        .map((i) =>
          i.nome === nome ? { ...i, qtd: i.qtd - 1 } : i
        )
        .filter((i) => i.qtd > 0)
    );
  };

const total = itens.reduce(
  (acc, i) => acc + i.preco * (i.qtd || 0),
  0
);

  return (
    <Context.Provider value={{ itens, adicionar, aumentar, diminuir, total }}>
      {children}
    </Context.Provider>
  );
}

export function usePedido() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("usePedido fora do provider");
  }

  return context;
}