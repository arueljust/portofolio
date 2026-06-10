import { AtSign, Mail, MessageCircle, Send, User } from "lucide-react";
import { useState } from "react";

const Contact = ({ contact, isDark, t }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sectionClass = isDark
    ? "bg-slate-950 text-slate-100"
    : "bg-slate-50 text-slate-950";
  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const panelClass = isDark
    ? "border-white/10 bg-slate-900/80"
    : "border-slate-200 bg-white";
  const inputClass = isDark
    ? "border-white/10 bg-slate-950 text-white placeholder:text-slate-500 focus:border-teal-300"
    : "border-slate-200 bg-white text-slate-950 placeholder:text-slate-400 focus:border-teal-500";

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      [`Name: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n")
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`px-4 py-20 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className={`rounded-lg border p-6 sm:p-8 ${panelClass}`}>
          <p className="text-sm font-bold uppercase text-teal-500">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{t.title}</h2>
          <p className={`mt-4 text-base leading-7 ${mutedText}`}>{t.description}</p>

          <div className="mt-8 space-y-4">
            <a
              className={`flex items-center gap-3 rounded-lg border p-4 transition ${
                isDark
                  ? "border-white/10 hover:border-teal-300/70"
                  : "border-slate-200 hover:border-teal-500"
              }`}
              href={`mailto:${contact.email}`}
            >
              <Mail className="shrink-0 text-teal-500" size={22} />
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{t.directEmail}</span>
                <span className={`block break-all text-sm ${mutedText}`}>{contact.email}</span>
              </span>
            </a>
            <a
              className={`flex items-center gap-3 rounded-lg border p-4 transition ${
                isDark
                  ? "border-white/10 hover:border-teal-300/70"
                  : "border-slate-200 hover:border-teal-500"
              }`}
              href={contact.whatsappLink}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="shrink-0 text-teal-500" size={22} />
              <span>
                <span className="block text-sm font-semibold">{t.whatsapp}</span>
                <span className={`block text-sm ${mutedText}`}>{contact.whatsapp}</span>
              </span>
            </a>
          </div>
        </div>

        <form className={`rounded-lg border p-6 sm:p-8 ${panelClass}`} onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <User size={16} />
                {t.nameLabel}
              </span>
              <input
                className={`h-12 w-full rounded-lg border px-4 text-sm outline-none transition ${inputClass}`}
                name="name"
                onChange={updateField}
                placeholder={t.namePlaceholder}
                required
                type="text"
                value={form.name}
              />
            </label>
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <AtSign size={16} />
                {t.emailLabel}
              </span>
              <input
                className={`h-12 w-full rounded-lg border px-4 text-sm outline-none transition ${inputClass}`}
                name="email"
                onChange={updateField}
                placeholder={t.emailPlaceholder}
                required
                type="email"
                value={form.email}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold">{t.messageLabel}</span>
            <textarea
              className={`min-h-40 w-full resize-y rounded-lg border px-4 py-3 text-sm leading-7 outline-none transition ${inputClass}`}
              name="message"
              onChange={updateField}
              placeholder={t.messagePlaceholder}
              required
              value={form.message}
            />
          </label>

          <button
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-teal-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-teal-300 sm:w-auto"
            type="submit"
          >
            <Send size={18} />
            {t.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
