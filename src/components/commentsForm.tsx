"use client";
import { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function CommentsForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#262626] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--orange-bg)] focus:ring-1 focus:ring-[var(--orange-bg)]/30 transition-all duration-200 text-sm";

  const labelClass = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <form onSubmit={submitComment} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Como posso te ajudar?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[var(--orange-bg)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm tracking-wide"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="text-sm text-center text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl py-3 px-4">
          Mensagem enviada! Retornarei em breve.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-center text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl py-3 px-4">
          Não foi possível enviar. Tente novamente.
        </p>
      )}
    </form>
  );
}
