import { ArrowDownRight, Mail } from "lucide-react";
import images from "../src/assets";

const Hero = ({ isDark, t }) => {
  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const sectionClass = isDark
    ? "bg-slate-950 text-white"
    : "bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] text-slate-950";
  const imageFrameClass = isDark
    ? "border-white/10 bg-white/5 shadow-black/20"
    : "border-slate-200 bg-white shadow-slate-200/70";
  const statClass = isDark
    ? "border-white/10 bg-white/5 text-slate-200"
    : "border-slate-200 bg-white text-slate-700";

  return (
    <section
      id="hero"
      className={`relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 ${sectionClass}`}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-lg border border-teal-400/30 bg-teal-400/10 px-3 py-2 text-sm font-semibold text-teal-500">
            {t.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-semibold leading-snug sm:text-3xl">
            {t.subtitle}
          </p>
          <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${mutedText}`}>
            {t.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-teal-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
              href="#projects"
            >
              {t.primaryAction}
              <ArrowDownRight size={18} />
            </a>
            <a
              className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-bold transition ${
                isDark
                  ? "border-white/15 text-white hover:border-teal-300 hover:text-teal-200"
                  : "border-slate-300 text-slate-800 hover:border-teal-500 hover:text-teal-700"
              }`}
              href="#contact"
            >
              <Mail size={18} />
              {t.secondaryAction}
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {t.stats.map((stat) => (
              <div className={`rounded-lg border p-4 ${statClass}`} key={stat.label}>
                <p className="text-lg font-bold text-teal-500">{stat.value}</p>
                <p className="mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:ml-auto">
          <div className={`hero-illustration-frame rounded-lg border p-3 shadow-2xl ${imageFrameClass}`}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={images.Hero}
                alt={t.imageAlt}
                className="hero-illustration-image aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div
            className={`mt-4 rounded-lg border p-4 ${
              isDark ? "border-white/10 bg-slate-900" : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm font-semibold text-teal-500">Frontend + Backend</p>
            <p className={`mt-1 text-sm ${mutedText}`}>React, Laravel, PHP, JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
