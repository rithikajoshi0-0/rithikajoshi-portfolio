import Link from "next/link"
import Globe from "@/components/ui/globe"
import Starfield from "@/components/starfield"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal"

function HeaderNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif font-semibold text-white text-lg md:text-xl tracking-tight"
          aria-label="Go to homepage"
        >
          Rithika Joshi B
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <a
              className="text-slate-300 hover:text-cyan-300 transition-colors"
              href="#who-i-am"
              aria-label="Go to Who I Am section"
            >
              Who I Am
            </a>
          </li>
          <li>
            <a
              className="text-slate-300 hover:text-cyan-300 transition-colors"
              href="#projects"
              aria-label="Go to Projects section"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-slate-300 hover:text-cyan-300 transition-colors"
              href="#skills"
              aria-label="Go to Skills section"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-slate-300 hover:text-cyan-300 transition-colors"
              href="#contact"
              aria-label="Go to Contact section"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
      <Starfield count={100} />
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="py-16 md:py-0">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-slate-400">Artificial Intelligence and Data Science</p>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="text-balance mt-3 text-3xl md:text-5xl font-serif font-semibold text-white">
              Crafting intelligent systems at the edge of possibility
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-5 text-slate-300 leading-relaxed">
              I build with Python and C extensions, strong data structures, and full‑stack engineering to deliver
              elegant, production‑ready AI solutions.
            </p>
          </Reveal>
          <Reveal delayMs={200}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="#projects" aria-label="Explore projects">
                  Explore Projects
                </a>
              </Button>
              <a
                href="#contact"
                className="text-sky-300 hover:text-cyan-300 underline-offset-4 hover:underline"
                aria-label="Jump to contact"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right side Globe focal point */}
        <div className="relative">
          {/* We keep Globe full-height so it anchors visually; hero is min-h-screen */}
          <Globe />
        </div>
      </div>
    </section>
  )
}

import { WhoIAm, Projects, Skills, Contact } from "@/components/sections"

export default function HomePage() {
  return (
    <main className="font-sans bg-slate-950 text-white">
      <HeaderNav />
      <Hero />
      <WhoIAm />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400">
          © {new Date().getFullYear()} Rithika Joshi B · Built with Next.js + Tailwind
        </div>
      </footer>
    </main>
  )
}
