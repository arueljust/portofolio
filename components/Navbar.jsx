import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ isDark, language, onToggleLanguage, onToggleTheme, t }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  const navClass = isDark
    ? "border-white/10 bg-slate-950/90 text-slate-100"
    : "border-slate-200 bg-white/90 text-slate-900";

  const linkClass = isDark
    ? "text-slate-300 hover:text-teal-300"
    : "text-slate-600 hover:text-teal-700";

  const buttonClass = isDark
    ? "border-white/10 bg-white/5 text-slate-100 hover:border-teal-300/60 hover:text-teal-200"
    : "border-slate-200 bg-slate-100 text-slate-700 hover:border-teal-500/60 hover:text-teal-700";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${navClass}`}>
      <nav className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500 text-sm font-bold text-slate-950">
            MK
          </span>
          <span className="text-base font-semibold sm:text-lg">{t.brand}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {t.items.map((item) => (
            <li key={item.href}>
              <a
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${linkClass}`}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Switch language"
            className={`hidden h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition sm:flex ${buttonClass}`}
            type="button"
            onClick={onToggleLanguage}
          >
            <Languages size={17} />
            {language === "id" ? "EN" : "ID"}
          </button>
          <button
            aria-label="Switch theme"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition ${buttonClass}`}
            type="button"
            onClick={onToggleTheme}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Open navigation"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition md:hidden ${buttonClass}`}
            type="button"
            onClick={handleClick}
          >
            {nav ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {nav && (
        <div
          className={`border-t px-4 pb-5 pt-3 md:hidden ${
            isDark ? "border-white/10 bg-slate-950" : "border-slate-200 bg-white"
          }`}
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {t.items.map((item) => (
              <li key={item.href}>
                <a
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition ${linkClass}`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <button
                className={`flex h-11 w-full items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold transition ${buttonClass}`}
                type="button"
                onClick={() => {
                  onToggleLanguage();
                  closeMenu();
                }}
              >
                <Languages size={17} />
                {language === "id" ? "EN" : "ID"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
