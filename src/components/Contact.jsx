import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_80%_70%,rgba(34,211,238,0.12),transparent_60%),radial-gradient(600px_200px_at_20%_80%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something special</h2>
          <p className="mt-3 text-white/80">Have an idea in mind? I’d love to hear about it. I typically respond within 24 hours.</p>

          <div className="mt-6 flex items-center gap-3">
            <span className="rounded-xl bg-white/10 p-2"><Mail className="h-5 w-5 text-cyan-300" /></span>
            <a href="mailto:hello@example.com" className="text-white/90 hover:text-white underline-offset-4 hover:underline">hello@example.com</a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/40" />
            <input type="email" placeholder="Email address" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/40" />
            <textarea placeholder="Tell me about your project..." rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/40" />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20">
            <Send className="h-4 w-4" /> Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
