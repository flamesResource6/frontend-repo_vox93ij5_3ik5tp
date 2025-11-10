import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI Kit',
    description: 'A modern component library with motion-first patterns and beautiful defaults.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#',
  },
  {
    title: 'Aurora Analytics',
    description: 'Elegant dashboards with real-time insights, crafted for clarity and speed.',
    tags: ['Next.js', 'D3', 'Edge'],
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d0d8f1d47?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#',
  },
  {
    title: 'Orbit Studio',
    description: 'A playful micro-interaction gallery exploring physics-based UI patterns.',
    tags: ['Three.js', 'Shaders', 'Spline'],
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_30%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(600px_200px_at_80%_20%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="relative z-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-white/70">A selection of work that balances aesthetics with performance.</p>
          </div>
          <div className="hidden sm:block text-sm text-white/60">Handcrafted with love and motion</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <a href={p.live} className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
