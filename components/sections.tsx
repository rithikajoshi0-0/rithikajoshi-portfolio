import Link from "next/link"
import { Mail, Github, Linkedin, Instagram, Rocket, Star, Code2, Sparkles } from "lucide-react"
import Reveal from "@/components/reveal"

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  titleSize = "md",
}: {
  eyebrow: string
  title: string
  subtitle?: string
  titleSize?: "sm" | "md" | "lg"
}) {
  const size =
    titleSize === "lg" ? "text-5xl md:text-7xl" : titleSize === "sm" ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
  return (
    <header className="space-y-2">
      <Reveal>
        <p className="text-xs uppercase tracking-widest text-slate-400">{eyebrow}</p>
      </Reveal>
      <Reveal delayMs={80}>
        <h2 className={`text-pretty ${size} font-serif font-semibold tracking-tight leading-tight`}>
          <span className="text-cyan-300">{title}</span>
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delayMs={140}>
          <p className="text-slate-300 leading-relaxed max-w-2xl">{subtitle}</p>
        </Reveal>
      ) : null}
    </header>
  )
}

export function WhoIAm() {
  return (
    <section id="who-i-am" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader
          eyebrow="Who I Am"
          title="Rithika Joshi B"
          subtitle="Artificial Intelligence and Data Science"
          titleSize="lg"
        />
        <Reveal delayMs={120}>
          <p className="mt-6 text-slate-300 leading-relaxed">
            Rithika Joshi B is a passionate AI and Data Science developer who thrives at the intersection of advanced
            programming and innovation. With expertise in Python and C extensions, data structures, and full‑stack
            development, she creates powerful solutions that push the boundaries of technology. Constantly exploring new
            frontiers in AI, Rithika’s work bridges creativity and technical precision to deliver impactful projects.
          </p>
        </Reveal>
        <Reveal delayMs={180}>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <Code2 className="size-5 text-indigo-400" />, label: "Python & C Extensions" },
              { icon: <Rocket className="size-5 text-indigo-400" />, label: "Full‑Stack Engineering" },
              { icon: <Star className="size-5 text-indigo-400" />, label: "Data Structures & AI" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 rounded-md border border-slate-800/80 bg-slate-900/40 p-3">
                {item.icon}
                <span className="text-sm text-slate-200">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    {
      title: "Dynamic Routing Optimization System",
      desc: "An intelligent system to optimize routes with adaptive heuristics and real‑time decisions.",
      img: "/routing-optimization-graph-space-theme.jpg",
    },
    {
      title: "Ryze Platform",
      desc: "A platform initiative focused on scalable services and developer‑friendly tooling.",
      img: "/scalable-platform-diagram-dark-ui.jpg",
    },
    {
      title: "EVE — Education via Entertainment",
      desc: "An engaging learning experience where interactive content accelerates understanding.",
      img: "/education-via-entertainment-ui-dark.jpg",
    },
    {
      title: "Cynotech (In Progress)",
      desc: "A service website currently in development, centered on practical, reliable solutions.",
      img: "/service-website-concept-dark-ui.jpg",
    },
  ]

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Projects"
          title="Projects that orbit impact"
          subtitle="Selected work spanning optimization, platforms, and playful education."
        />
        <Reveal delayMs={120}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((p, i) => (
              <article
                key={i}
                className="group rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
              >
                <img
                  src={p.img || "/placeholder.svg?height=160&width=320&query=project%20preview"}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <Sparkles className="size-4 text-cyan-300" />
                    <span className="text-xs text-slate-400">View details</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    "Python",
    "C/C++",
    "C Extensions",
    "Data Structures",
    "Algorithms",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Tailwind CSS",
    "APIs",
    "AI/ML",
  ]
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Skills"
          title="Tools that power missions"
          subtitle="A focused toolkit for building reliable, scalable, and intelligent systems."
        />
        <Reveal delayMs={120}>
          <ul className="mt-8 flex flex-wrap gap-3">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-slate-800/80 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-200"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s collaborate"
          subtitle="Open to opportunities, collaborations, and exploring new frontiers."
        />
        <Reveal delayMs={120}>
          <ul className="mt-8 space-y-3">
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-indigo-400" />
              <a
                className="text-slate-200 hover:text-cyan-300 transition-colors"
                href="mailto:rithikajoshi.b@gmail.com"
                aria-label="Send email to rithikajoshi.b@gmail.com"
              >
                rithikajoshi.b@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="size-5 text-indigo-400" />
              <Link
                className="text-slate-200 hover:text-cyan-300 transition-colors"
                href="https://www.linkedin.com/in/rithikajoshi1130"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile in new tab"
              >
                linkedin.com/in/rithikajoshi1130
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Github className="size-5 text-indigo-400" />
              <Link
                className="text-slate-200 hover:text-cyan-300 transition-colors"
                href="https://github.com/rithikajoshi0-0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile in new tab"
              >
                github.com/rithikajoshi0-0
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="size-5 text-indigo-400" />
              <Link
                className="text-slate-200 hover:text-cyan-300 transition-colors"
                href="https://www.instagram.com/rithikajoshi.b/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram profile in new tab"
              >
                instagram.com/rithikajoshi.b
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
