import { useState } from "react";

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  const show = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 1800);
  };

  const Toast = () =>
    message ? (
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[60]">
        <div className="bg-black text-white px-4 py-2 rounded-full shadow-lg animate-toast">
          {message}
        </div>
      </div>
    ) : null;

  return { show, Toast };
}