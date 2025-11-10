import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10">
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-white/70 backdrop-blur-xl">
        © {new Date().getFullYear()} — Built with passion and playful details.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1a] selection:bg-cyan-400 selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-50 mix-blend-screen" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-violet-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
