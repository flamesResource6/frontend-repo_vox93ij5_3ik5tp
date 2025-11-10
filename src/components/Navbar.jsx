import { useState } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="text-sm md:text-base text-white/90 hover:text-white transition-colors px-3 py-2"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 md:px-6 py-3 shadow-lg shadow-black/20">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="rounded-lg bg-white/10 p-2">
              <Rocket className="h-5 w-5 text-cyan-300" />
            </span>
            <span className="text-sm md:text-base font-semibold tracking-wide">My Portfolio</span>
          </a>

          <button
            className="md:hidden text-white/90 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-1">
            <LinkItem href="#projects">Projects</LinkItem>
            <LinkItem href="#about">About</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors">
              <Github className="h-5 w-5 text-white/90" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors">
              <Linkedin className="h-5 w-5 text-white/90" />
            </a>
            <a href="#contact" className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-medium text-black">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
            <div className="flex flex-col">
              <LinkItem href="#projects">Projects</LinkItem>
              <LinkItem href="#about">About</LinkItem>
              <LinkItem href="#contact">Contact</LinkItem>
              <div className="mt-2 flex items-center gap-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors">
                  <Github className="h-5 w-5 text-white/90" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-white/90" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
