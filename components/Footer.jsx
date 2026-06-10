import { Mail, MessageCircle } from "lucide-react";

const Footer = ({ contact, isDark, text }) => {
  const footerClass = isDark
    ? "border-white/10 bg-slate-950 text-slate-400"
    : "border-slate-200 bg-white text-slate-600";

  return (
    <footer className={`border-t px-4 py-8 sm:px-6 lg:px-8 ${footerClass}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Mazrul Khoiri. {text}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="inline-flex items-center gap-2 transition hover:text-teal-500"
            href={`mailto:${contact.email}`}
          >
            <Mail size={16} />
            {contact.email}
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-teal-500"
            href={contact.whatsappLink}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle size={16} />
            {contact.whatsapp}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
