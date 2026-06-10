import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skillItems = [
  { label: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { label: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { label: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { label: "React", icon: FaReact, color: "text-cyan-400" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { label: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { label: "Laravel", icon: FaLaravel, color: "text-red-500" },
];

const Skills = ({ isDark, t }) => {
  const sectionClass = isDark
    ? "bg-slate-900 text-slate-100"
    : "bg-white text-slate-950";
  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  const cardClass = isDark
    ? "border-white/10 bg-slate-950/60"
    : "border-slate-200 bg-slate-50";

  return (
    <section id="skills" className={`px-4 py-20 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-teal-500">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{t.title}</h2>
          <p className={`mt-4 text-base leading-7 ${mutedText}`}>{t.description}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skillItems.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                className={`rounded-lg border p-5 transition hover:-translate-y-1 ${cardClass}`}
                key={skill.label}
              >
                <Icon className={`mb-4 text-5xl ${skill.color}`} />
                <p className="text-base font-bold">{skill.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
