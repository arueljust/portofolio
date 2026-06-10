import { CheckCircle2 } from "lucide-react";

const About = ({ isDark, t }) => {
  const sectionClass = isDark
    ? "bg-slate-900 text-slate-100"
    : "bg-white text-slate-950";
  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const panelClass = isDark
    ? "border-white/10 bg-slate-950/60"
    : "border-slate-200 bg-slate-50";
  const dividerClass = isDark ? "border-white/10" : "border-slate-200";

  return (
    <section
      id="about"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${sectionClass}`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase text-teal-500">{t.eyebrow}</p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
            {t.title}
          </h2>
        </div>
        <div className={`rounded-lg border p-6 sm:p-8 ${panelClass}`}>
          <p className={`text-base leading-8 sm:text-lg ${mutedText}`}>{t.body}</p>
          <ul className="mt-8 grid gap-0 sm:grid-cols-2 sm:gap-x-8">
            {t.highlights.map((item) => (
              <li
                className={`flex items-center gap-3 border-b py-4 text-sm font-semibold last:border-b-0 sm:text-base ${dividerClass}`}
                key={item}
              >
                <CheckCircle2 className="shrink-0 text-teal-500" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
