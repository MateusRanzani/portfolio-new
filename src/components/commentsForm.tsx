"use client";
import { useState } from "react";

export function CommentsForm() {
  const [status, setStatus] = useState("");

  async function submitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.currentTarget;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement)
            .value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setStatus("Comentário enviado!");
      } else {
        setStatus("Erro ao enviar.");
      }
    } catch {
      setStatus("Erro ao enviar. Verifique sua conexão e tente novamente.");
    }
  }

  return (
    <form onSubmit={submitComment} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm mb-1 text-gray-300">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
          className="w-full p-3 rounded-lg bg-[#262626] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--orange-bg)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          className="w-full p-3 rounded-lg bg-[#262626] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--orange-bg)]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1 text-gray-300">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Digite sua mensagem"
          className="w-full p-3 rounded-lg bg-[#262626] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--orange-bg)]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-[var(--orange-bg)] text-white font-semibold py-3 rounded-lg transition"
      >
        Enviar mensagem
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
