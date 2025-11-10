import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.18),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.18),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-36 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
          Available for freelance work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 text-center text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          Crafting delightful digital experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-center text-white/80"
        >
          I’m a product-focused developer who blends code, motion and playful interactions to build memorable web apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f1a] to-transparent" />
    </section>
  );
}
