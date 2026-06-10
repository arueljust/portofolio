import { Code2, ExternalLink, LockKeyhole } from "lucide-react";

const Projects = ({ isDark, t }) => {
  const sectionClass = isDark
    ? "bg-slate-950 text-slate-100"
    : "bg-slate-50 text-slate-950";
  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const cardClass = isDark
    ? "border-white/10 bg-slate-900/80 shadow-black/20"
    : "border-slate-200 bg-white shadow-slate-200/70";
  const buttonClass = isDark
    ? "border-white/10 text-slate-200 hover:border-teal-300 hover:text-teal-200"
    : "border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-700";
  const disabledClass = isDark
    ? "border-white/10 text-slate-500"
    : "border-slate-200 text-slate-400";

  return (
    <section
      id="projects"
      className={`px-4 py-20 sm:px-6 lg:px-8 ${sectionClass}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-teal-500">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{t.title}</h2>
          <p className={`mt-4 text-base leading-7 ${mutedText}`}>{t.description}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((project) => {
            const hasDemo = project.demo && project.demo !== "#";
            const hasCode = project.code && project.code !== "#";

            return (
              <article
                className={`overflow-hidden rounded-lg border shadow-xl transition hover:-translate-y-1 ${cardClass}`}
                key={project.title}
              >
                <div
                  className={`flex aspect-[16/10] items-center justify-center overflow-hidden ${
                    isDark ? "bg-slate-950" : "bg-slate-100"
                  }`}
                >
                  <img
                    alt={project.title}
                    className={
                      project.imageFit === "contain"
                        ? "h-full w-full object-contain p-3"
                        : "h-full w-full object-cover"
                    }
                    src={project.image}
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-amber-500">{project.category}</p>
                  <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
                  <p className={`mt-3 min-h-20 text-sm leading-7 ${mutedText}`}>
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {hasDemo ? (
                      <a
                        className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition ${buttonClass}`}
                        href={project.demo}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <ExternalLink size={16} />
                        {t.demo}
                      </a>
                    ) : (
                      <span
                        className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold ${disabledClass}`}
                      >
                        <LockKeyhole size={16} />
                        {t.unavailable}
                      </span>
                    )}
                    {hasCode ? (
                      <a
                        className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition ${buttonClass}`}
                        href={project.code}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Code2 size={16} />
                        {t.code}
                      </a>
                    ) : (
                      <span
                        className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold ${disabledClass}`}
                      >
                        <Code2 size={16} />
                        {t.unavailable}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
