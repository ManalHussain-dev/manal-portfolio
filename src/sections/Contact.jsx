import { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const email = "manalhussain409@gmail.com";
  const github = "https://github.com/ManalHussain-dev/";
  const linkedin = "https://www.linkedin.com/in/manalhussain-dev/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad border-t border-white/[0.05] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-t from-violet-600/10 via-purple-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="05 / CONTACT"
          title="Have an idea? Let's make it happen."
          description="I'm always interested in exploring ideas, building projects, and connecting with people who enjoy creating meaningful digital experiences."
        />

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Links & Info (Cols 5) */}
          <div className="space-y-4 lg:col-span-5">
            
            {/* Primary Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-violet-400">
                  Direct Inquiries
                </span>
              </div>

              <div className="mt-5">
                <p className="font-mono text-xs text-zinc-400">Primary Email</p>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 block font-mono text-base font-semibold text-white hover:text-violet-300 transition-colors break-all"
                >
                  {email}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 pt-4 border-t border-white/[0.06]">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/35 bg-violet-600/20 px-4 py-2 text-xs font-semibold text-violet-200 transition-all hover:bg-violet-600/35 hover:border-violet-400"
                >
                  <span>Compose Email</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 transition-all hover:bg-white/[0.08] hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied Address!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Social Network Links */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* GitHub Card */}
              <motion.a
                href={github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-white">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-6">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">GitHub</p>
                  <p className="font-bold text-sm text-white group-hover:text-violet-300 transition-colors">
                    ManalHussain-dev
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-6">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">LinkedIn</p>
                  <p className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">
                    Manal Hussain
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Availability Pill */}
            <div className="rounded-2xl border border-white/[0.06] bg-black/40 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2.5 font-mono text-xs text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>Open for engineering collaborations, web projects, and software discussions.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Interface (Cols 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 relative"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="h-5 w-5 text-violet-400" />
                  <h3 className="font-display text-lg font-bold text-white">Send a Direct Message</h3>
                </div>
                <span className="font-mono text-xs text-zinc-500">get in touch</span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Check className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Initiated!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you, <strong className="text-violet-300">{formData.name}</strong>. Your note has been prepared. You can also reach out directly via{" "}
                    <a href={`mailto:${email}`} className="text-violet-400 underline">{email}</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 rounded-full border border-white/20 bg-white/[0.05] px-5 py-2 text-xs font-semibold text-white hover:bg-white/[0.1]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block font-mono text-xs text-zinc-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block font-mono text-xs text-zinc-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-xs text-zinc-400 mb-1.5">
                      Your Message or Project Idea
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about what you are planning to build, questions, or ideas..."
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all hover:bg-violet-600/40 hover:border-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] active:scale-95"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
