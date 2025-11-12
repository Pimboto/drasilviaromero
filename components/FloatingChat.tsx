"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  sender: "concierge" | "guest";
  text: string;
};

const initialMessage: Message = {
  id: "welcome",
  sender: "concierge",
  text: "Hola, soy Valentina. ¿Te acompaño a elegir tu protocolo?",
};

export const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (event?: FormEvent) => {
    event?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const guestMessage: Message = {
      id: crypto.randomUUID(),
      sender: "guest",
      text: trimmed,
    };

    setMessages((prev) => [...prev, guestMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "concierge",
          text: "Gracias por compartirlo. En unos minutos te enviamos recomendaciones personalizadas.",
        },
      ]);
    }, 1200);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-[min(90vw,340px)] rounded-3xl border border-white/10 bg-black/95 text-white shadow-[0_25px_60px_rgba(0,0,0,0.55)] sm:bottom-32 sm:right-8">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/90 text-black font-semibold">
                SR
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">Valentina</p>
                <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#d4af37]">Concierge en línea</span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Cerrar chat"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/60 transition hover:border-white hover:text-white"
            >
              Cerrar
            </button>
          </div>

          <div className="flex max-h-80 flex-col overflow-hidden">
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4 text-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "guest" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      message.sender === "guest"
                        ? "bg-white/90 text-gray-900"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#d4af37]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-black transition hover:bg-[#f1ce68]"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Abrir chat personalizado"
        onClick={() => setOpen((prev) => !prev)}
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#050505]/90 px-5 py-3 text-sm uppercase tracking-[0.4em] text-white shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition hover:bg-black sm:bottom-8 sm:right-8"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4af37]/90 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path d="M21 11.5a7.5 7.5 0 0 1-7.5 7.5H9l-4 3v-3.5A7.5 7.5 0 1 1 21 11.5Z" />
          </svg>
        </span>
        <span className="hidden sm:block">Chat</span>
      </button>
    </>
  );
};
