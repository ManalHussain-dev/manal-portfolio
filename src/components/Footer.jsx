import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#040407] py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              className="group flex items-center gap-1.5 font-display text-lg font-bold tracking-wider text-white"
            >
              <span>MANAL</span>
              <span className="inline-block h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7] transition-transform group-hover:scale-125" />
            </a>
            <p className="mt-1.5 text-xs text-zinc-400 max-w-sm">
              Building digital experiences with code & creativity. Software Engineering student & full-stack developer.
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ManalHussain-dev/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all"
                aria-label="GitHub profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/manalhussain-dev/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-600">
          <p>© {currentYear} Manal Hussain. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
