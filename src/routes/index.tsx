import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Phone,
  ExternalLink,
  Award,
  Sparkles,
  Code2,
  Wrench,
  Layers,
  Database,
} from "lucide-react";
import projectVortex from "@/assets/project-vortex.jpg";
import projectSentinel from "@/assets/project-sentinel.png";
import projectTwitter from "@/assets/twitter-sentiment.png";
import profileImg from "@/assets/profile.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saumya — Full-Stack Developer & MCA Student" },
      {
        name: "description",
        content:
          "Saumya is a full-stack developer and MCA student building AI-powered MERN applications, with strong foundations in Java, DSA and DBMS.",
      },
      { property: "og:title", content: "Saumya — Full-Stack Developer & MCA Student" },
      {
        property: "og:description",
        content: "MERN stack, AI-powered web apps, problem solving and clean engineering.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
  {
    id: "01",
    name: "AI-Image Converter",
    tagline: "MERN · Hugging Face",
    year: "2025",
    img: projectVortex,
    description:
      "Full-stack MERN AI image generation app supporting multiple Hugging Face models including Stable Diffusion 3.5 and Forest Lab. Persistent chat history, JWT-based authentication and one-click image download.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Hugging Face"],
    category: "Full-Stack",
    demo: "https://github.com/saumya02-lab/ARtify-main",
    repo: "https://github.com/saumya02-lab/ARtify-main",
  },
  {
    id: "02",
    name: "CodeFront",
    tagline: "Browser-based Code Editor",
    year: "2024",
    img: projectSentinel,
    description:
      "A browser-based code editor inspired by CodePen — write HTML, CSS and JavaScript with real-time live preview in a single interface. Responsive UI, dynamic rendering and instant feedback for learning frontend.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Vite"],
    category: "Frontend",
    demo: "https://github.com/saumya02-lab/CodeFront",
    repo: "https://github.com/saumya02-lab/CodeFront",
  },
  {
    id: "03",
    name: "Twitter Sentiment Analysis Dashboard",
    tagline: "Node.js · Express · Sentiment.js",
    year: "2024",
    img: projectTwitter,
    description:
      "A web-based dashboard that analyzes user-entered text and classifies it as Positive, Negative, or Neutral using sentiment analysis. Features real-time search, dynamic sentiment scoring and a responsive browser interface.",
    tags: ["Node.js", "Express.js", "JavaScript", "HTML5", "CSS3", "Sentiment.js"],
    category: "Full-Stack",
    demo: "#",
    repo: "https://github.com/saumya02-lab/twitter-sentiment-analysis-dashboard",
  },
];

const STACK = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Java", "C", "JavaScript", "HTML / CSS", "SQL"],
  },
  {
    label: "Frameworks",
    icon: Layers,
    items: ["React.js", "Node.js", "Express.js"],
  },
  {
    label: "Databases",
    icon: Database,
    items: ["MySQL", "Oracle", "MongoDB", "MS Access"],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    items: ["Git / GitHub", "VS Code / IntelliJ", "MySQL Workbench", "LeetCode · MS Office"],
  },
];

const EDUCATION = [
  {
    role: "MCA — Master of Computer Applications",
    company: "G.L. Bajaj Institute of Technology and Management, Gr. Noida",
    period: "2025 — 2027",
    description: "Currently pursuing. GPA: 8.09 / 10. Focused on Java, DSA, DBMS and full-stack web development.",
    active: true,
  },
  {
    role: "BCA — Bachelor of Computer Applications",
    company: "Sadguru Institute of Computer Studies",
    period: "2022 — 2025",
    description: "Graduated with GPA 8.62 / 10. Built foundations in programming, databases and software engineering.",
  },
];

const ACCOLADES = [
  {
    title: "HPCL Hackathon 2025 — Participant",
    meta: "Team collaboration · Real-world problem solving",
    icon: Sparkles,
  },
  {
    title: "Kho-Kho Team Captain — 4× Champions",
    meta: "School-level · Leadership & teamwork",
    icon: Sparkles,
  },
  {
    title: "Cloud Computing",
    meta: "Simplilearn · Certification",
    icon: Award,
  },
  {
    title: "Prompt Design in Vertex AI",
    meta: "Google Cloud Skill Badge",
    icon: Award,
  },
  {
    title: "Microsoft Azure",
    meta: "Microsoft Elevate (FICE)",
    icon: Award,
  },
];

const STATS = [
  { value: "8.09", label: "MCA GPA / 10" },
  { value: "8.62", label: "BCA GPA / 10" },
  { value: "3+", label: "Shipped Projects" },
  { value: "3", label: "Certifications" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/saumya02-lab", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saumya-pathak-339825235", icon: Linkedin },
  { label: "Email", href: "mailto:pathaksaumya36@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+917897753860", icon: Phone },
];

function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll for in-page anchor links
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Fade-in on scroll using IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filter]);

  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const visibleProjects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent/30 antialiased">
      {/* Nav */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
          scrolled
            ? "border-white/5 bg-brand-bg/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:items-center sm:justify-between items-center gap-4">
          <a href="#top" className="font-mono text-sm tracking-tighter text-brand-accent uppercase truncate">
            saumya.dev
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-muted">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-brand-text transition-colors">
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center bg-brand-text text-brand-bg text-sm font-medium rounded-full py-2 pr-3.5 pl-2.5 ring-1 ring-brand-text hover:bg-brand-accent hover:ring-brand-accent transition-colors"
            >
              <ArrowDownToLine className="size-4 mr-1.5" />
              Resume
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setNavOpen((v) => !v)}
              className="md:hidden grid place-items-center size-10 rounded-full border border-white/10 text-brand-text"
            >
              {navOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-white/5 bg-brand-bg/95 backdrop-blur-xl">
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setNavOpen(false)}
                  className="text-base text-brand-text/90 hover:text-brand-accent"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-text text-brand-bg text-sm font-medium rounded-full py-2.5 px-4"
              >
                <ArrowDownToLine className="size-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-44 pb-32 px-6 overflow-hidden">
        <BackgroundGrid />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[860px] max-w-full h-[420px] bg-brand-accent/10 blur-[140px] rounded-full pointer-events-none float-slow" />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-[58ch] animate-reveal">
            <p className="font-mono text-xs tracking-widest text-brand-accent uppercase mb-6 flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-emerald-400 [animation:pulse-dot_2s_ease-in-out_infinite]" />
              Full-Stack Developer · Open to internships
            </p>
            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl font-semibold leading-[1.04] tracking-tight text-balance mb-8">
              Building AI-powered web apps with{" "}
              <span className="shimmer-text">curiosity, clarity and code.</span>
            </h1>
            <p className="text-lg text-brand-muted max-w-[52ch] text-pretty leading-relaxed">
              I&apos;m <span className="text-brand-text">Saumya</span>, an MCA student at{" "}
              <span className="text-brand-text">G.L. Bajaj</span> with strong foundations in Java,
              DSA and DBMS. I love building full-stack MERN applications and exploring AI
              integrations.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-text text-brand-bg text-sm font-medium rounded-full py-3 px-5 hover:bg-brand-accent transition-colors"
              >
                Start a conversation
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-text/90 hover:text-brand-accent border-b border-white/15 pb-1 transition-colors"
              >
                <ArrowDownToLine className="size-4" />
                Download résumé
              </a>
            </div>
            <div className="mt-12 flex items-center gap-5 text-brand-muted">
              {SOCIALS.map((s, i) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    style={{ animationDelay: `${i * 120}ms` }}
                    className="social-icon hover:text-brand-accent transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
                  >
                    <s.icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal-on-scroll" data-reveal>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-brand-surface transition-transform duration-500 hover:-translate-y-1 hover:ring-brand-accent/30">
              <img
                src={profileImg}
                alt="Portrait of Saumya"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                <span>SP · Greater Noida</span>
                <span>28.46° N</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 reveal-on-scroll" data-reveal style={{ transitionDelay: "120ms" }}>
            <p className="font-mono text-xs tracking-widest text-brand-accent uppercase mb-6">
              01 / About
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-balance">
              Curious developer with a passion for solving real problems through clean code and
              practical AI-driven products.
            </h2>
            <p className="text-brand-muted leading-relaxed mb-4 max-w-[60ch]">
              I&apos;m currently pursuing my MCA at G.L. Bajaj Institute of Technology and Management
              after completing a BCA with a GPA of 8.62. My focus areas are Java, Data Structures
              & Algorithms, databases and the MERN stack.
            </p>
            <p className="text-brand-muted leading-relaxed max-w-[60ch]">
              I enjoy building things end-to-end — from authentication and APIs to polished
              frontends — and exploring how modern AI tools can be integrated into everyday
              applications.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden ring-1 ring-white/5">
              {STATS.map((s) => (
                <div key={s.label} className="bg-brand-bg p-5">
                  <div className="text-2xl font-medium tracking-tight">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest text-brand-accent uppercase mb-4">
                02 / Work
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Selected Projects
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors ${
                    filter === c
                      ? "bg-brand-text text-brand-bg border-brand-text"
                      : "border-white/10 text-brand-muted hover:text-brand-text hover:border-white/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {visibleProjects.map((p, idx) => (
              <article
                key={p.id}
                data-reveal
                style={{ transitionDelay: `${idx * 80}ms` }}
                className="group reveal-on-scroll transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] bg-brand-surface ring-1 ring-white/5 rounded-xl overflow-hidden mb-6 transition-all duration-500 group-hover:ring-brand-accent/40 group-hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.35)]">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[10px] font-mono uppercase tracking-widest text-brand-muted">
                    <span>{p.tagline}</span>
                    <span>{p.id}</span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium mb-2 truncate">{p.name}</h3>
                    <p className="text-sm text-brand-muted text-pretty max-w-[42ch]">
                      {p.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] py-1 px-2 border border-white/10 rounded uppercase tracking-widest text-brand-muted">
                    {p.year}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-widest text-brand-muted bg-white/5 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    {p.demo === "#" ? (
                      <span className="inline-flex items-center gap-1 text-brand-dim cursor-not-allowed">
                        Live <ExternalLink className="size-3" />
                      </span>
                    ) : (
                      <a
                        href={p.demo}
                        target={p.demo.startsWith("http") ? "_blank" : undefined}
                        rel={p.demo.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 text-brand-text hover:text-brand-accent transition-all duration-300 hover:translate-x-0.5"
                      >
                        Live <ExternalLink className="size-3" />
                      </a>
                    )}
                    <a
                      href={p.repo}
                      target={p.repo.startsWith("http") ? "_blank" : undefined}
                      rel={p.repo.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-brand-muted hover:text-brand-accent transition-all duration-300 hover:translate-x-0.5"
                    >
                      Code <Github className="size-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tracking-widest text-brand-accent uppercase mb-4">
              03 / Stack
            </p>
            <h2 className="text-3xl font-medium tracking-tight mb-4">Skills & Toolkit</h2>
            <p className="text-brand-muted text-sm text-pretty max-w-[40ch] leading-relaxed">
              The languages, frameworks and tools I use day-to-day to design, build and ship
              full-stack applications.
            </p>
            <p className="mt-6 text-xs font-mono uppercase tracking-widest text-brand-muted">
              Also: Problem Solving · Competitive Coding · Communication · Leadership
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden ring-1 ring-white/5">
            {STACK.map((s, i) => (
              <div
                key={s.label}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="reveal-on-scroll bg-brand-bg p-6 hover:bg-brand-surface transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="grid place-items-center size-8 rounded-md bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-bg transition-colors">
                    <s.icon className="size-4" />
                  </div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                    {s.label}
                  </h4>
                </div>
                <ul className="space-y-2.5 text-sm text-brand-text/90">
                  {s.items.map((item, idx) => (
                    <li key={item} className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2">
                          <span className="size-1 rounded-full bg-brand-accent/60" />
                          {item}
                        </span>
                      </div>
                      <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-soft rounded-full origin-left transition-[width] duration-1000 ease-out"
                          style={{
                            width: `${70 + ((idx * 7 + s.label.length * 3) % 28)}%`,
                            animation: "bar-fill 1.2s ease-out both",
                            animationDelay: `${idx * 90}ms`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs tracking-widest text-brand-accent uppercase mb-4">
                04 / Education
              </p>
              <h2 className="text-3xl font-medium tracking-tight mb-12">Academic Journey</h2>
              <Timeline items={EDUCATION} />
            </div>

            <div className="lg:col-span-5">
              <p className="font-mono text-xs tracking-widest text-brand-accent uppercase mb-4">
                05 / Accolades
              </p>
              <h2 className="text-3xl font-medium tracking-tight mb-12">
                Achievements &amp; Certifications
              </h2>
              <div className="space-y-3">
                {ACCOLADES.map((a) => (
                  <div
                    key={a.title}
                    className="p-5 rounded-xl bg-brand-surface ring-1 ring-white/5 hover:ring-brand-accent/40 transition-colors flex items-center gap-4"
                  >
                    <div className="grid place-items-center size-10 rounded-lg bg-brand-accent/10 text-brand-accent shrink-0">
                      <a.icon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-sm font-medium truncate">{a.title}</h5>
                      <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mt-1">
                        {a.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 h-[480px] bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none float-slow" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-[42ch]">
              <p className="font-mono text-xs tracking-widest text-brand-accent uppercase mb-6">
                06 / Contact
              </p>
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight mb-6 text-balance">
                Have an idea or opportunity? Let&apos;s build it together.
              </h2>
              <p className="text-brand-muted mb-10 leading-relaxed">
                Open to internships, freelance projects and collaborations on full-stack and
                AI-powered products. I reply within a day.
              </p>
              <a
                href="mailto:pathaksaumya36@gmail.com"
                className="inline-block text-xl md:text-2xl font-mono text-brand-accent border-b border-brand-accent/20 pb-2 hover:border-brand-accent transition-colors break-all"
              >
                pathaksaumya36@gmail.com
              </a>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
                const status = form.querySelector<HTMLParagraphElement>('[data-status]');
                if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
                if (status) { status.textContent = ""; status.className = "text-xs font-mono text-brand-muted"; }
                try {
                  const data = new FormData(form);
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: data,
                  });
                  const json = await res.json().catch(() => ({}));
                  if (res.ok && json.success) {
                    if (status) { status.textContent = "Message sent — thanks! I'll get back to you soon."; status.className = "text-xs font-mono text-brand-accent"; }
                    form.reset();
                  } else {
                    throw new Error(json.message || "Send failed");
                  }
                } catch (err) {
                  if (status) { status.textContent = "Couldn't send. Email me directly at pathaksaumya36@gmail.com."; status.className = "text-xs font-mono text-red-400"; }
                } finally {
                  if (btn) { btn.disabled = false; btn.innerHTML = ""; btn.append("Send message"); }
                }
              }}
              className="w-full lg:max-w-md p-6 rounded-2xl bg-brand-surface ring-1 ring-white/5 backdrop-blur-xl space-y-4"
            >
              <input type="hidden" name="access_key" value="3b6879a5-8e97-467b-8411-e720c0d9939f" />
              <input type="hidden" name="subject" value="New portfolio contact" />
              <input type="hidden" name="from_name" value="saumya.dev" />
              <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <Field label="Company" name="company" placeholder="Optional" />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me what you&apos;re building…"
                  className="mt-1.5 w-full bg-brand-bg/60 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-brand-dim focus:outline-none focus:border-brand-accent/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-text text-brand-bg text-sm font-medium rounded-lg py-3 hover:bg-brand-accent transition-colors disabled:opacity-60"
              >
                Send message <ArrowUpRight className="size-4" />
              </button>
              <p data-status className="text-xs font-mono text-brand-muted" aria-live="polite"></p>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
            <FooterCol title="Navigate" links={NAV.map((n) => ({ label: n.label, href: n.href }))} />
            <FooterCol
              title="Social"
              links={SOCIALS.map((s) => ({ label: s.label, href: s.href }))}
            />
            <FooterCol
              title="Based in"
              text={["Greater Noida, India", "IST (GMT +5:30)", "Open to remote roles"]}
            />
            <FooterCol
              title="Reach"
              text={["pathaksaumya36@gmail.com", "+91 78977 53860"]}
            />
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">
              © {new Date().getFullYear()} Saumya // Built with care
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-emerald-500 [animation:pulse-dot_2s_ease-in-out_infinite]" />
                <span className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">
                  Open to internships
                </span>
              </div>
              <a
                href="#top"
                className="text-[10px] font-mono text-brand-muted hover:text-brand-accent uppercase tracking-widest"
              >
                ↑ Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Timeline({
  items,
}: {
  items: { role: string; company: string; period: string; description: string; active?: boolean }[];
}) {
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div
          key={`${item.company}-${i}`}
          className="group relative pl-8 pb-10 border-l border-white/10 last:pb-0"
        >
          <div
            className={`absolute left-[-5px] top-1 size-2.5 rounded-full ring-4 ring-brand-bg transition-colors ${
              item.active ? "bg-brand-accent" : "bg-white/20 group-hover:bg-brand-accent"
            }`}
          />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
            <h4 className="font-medium text-brand-text">
              {item.role}{" "}
              <span className="text-brand-muted font-normal">@ {item.company}</span>
            </h4>
            <span className="text-[10px] font-mono text-brand-muted uppercase tracking-widest shrink-0">
              {item.period}
            </span>
          </div>
          <p className="text-sm text-brand-muted leading-relaxed max-w-[58ch]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  name,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-brand-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full bg-brand-bg/60 border border-white/10 rounded-lg px-3 py-2.5 text-sm placeholder:text-brand-dim focus:outline-none focus:border-brand-accent/60 transition-colors"
      />
    </div>
  );
}

function FooterCol({
  title,
  links,
  text,
}: {
  title: string;
  links?: { label: string; href: string }[];
  text?: string[];
}) {
  return (
    <div>
      <h5 className="font-mono text-[10px] uppercase tracking-widest text-brand-muted mb-4">
        {title}
      </h5>
      <ul className="space-y-2">
        {links?.map((l) => {
          const external = l.href.startsWith("http") || l.href.startsWith("mailto:") || l.href.startsWith("tel:");
          const newTab = l.href.startsWith("http");
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                className="text-sm text-brand-text/90 hover:text-brand-accent transition-all duration-300 hover:pl-1 inline-block"
              >
                {l.label}
              </a>
            </li>
          );
        })}
        {text?.map((t) => {
          const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
          const isPhone = /^[+0-9 ()-]{7,}$/.test(t);
          if (isEmail) {
            return (
              <li key={t}>
                <a href={`mailto:${t}`} className="text-sm text-brand-text/90 hover:text-brand-accent transition-colors break-all">
                  {t}
                </a>
              </li>
            );
          }
          if (isPhone) {
            return (
              <li key={t}>
                <a href={`tel:${t.replace(/[^+0-9]/g, "")}`} className="text-sm text-brand-text/90 hover:text-brand-accent transition-colors">
                  {t}
                </a>
              </li>
            );
          }
          return (
            <li key={t} className="text-sm text-brand-text/90">
              {t}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
  );
}
