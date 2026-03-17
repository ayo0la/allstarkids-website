"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-extrabold text-green-800 text-lg mb-1">Message Sent!</h3>
        <p className="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="name">Name *</label>
        <input
          id="name" name="name" type="text" required value={form.name} onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628]"
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="email">Email *</label>
        <input
          id="email" name="email" type="email" required value={form.email} onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628]"
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="message">Message *</label>
        <textarea
          id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1628] resize-none"
          placeholder="I'd like to learn more about your programs..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-shimmer text-blue-950 font-black text-base py-3.5 rounded-xl shadow-md shadow-yellow-200 hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
