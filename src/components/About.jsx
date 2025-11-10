import { motion } from 'framer-motion';
import { Award, Code2, Palette } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Engineering', copy: 'TypeScript, React, Node, Python' },
  { icon: Palette, title: 'Design System', copy: 'Design tokens, theming, accessibility' },
  { icon: Award, title: 'Craft', copy: 'Micro-interactions, performance, polish' },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_180px_at_10%_60%,rgba(34,211,238,0.12),transparent_60%),radial-gradient(500px_180px_at_90%_50%,rgba(236,72,153,0.12),transparent_60%)]" />

      <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-white/80">
            I obsess over harmonious motion, crisp typography, and thoughtful details that make interfaces feel alive.
            My mission is to craft experiences that people want to explore and share.
          </p>
          <p className="mt-3 text-white/70">
            When I build, I aim for a balance of beauty and clarity — reducing friction while adding a layer of delight.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-white/10 p-2"><Icon className="h-5 w-5 text-cyan-300" /></span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-white/70">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
