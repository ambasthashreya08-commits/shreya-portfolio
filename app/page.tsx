"use client";

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      {/* NAVBAR */}
      <nav className="pointer-events-none absolute inset-x-0 top-0 z-50">
        <div className="relative mx-auto h-24 max-w-7xl px-6 md:px-8">

          {/* Logo stays in the top-left corner */}
          <div className="pointer-events-auto absolute left-6 top-6 text-xl font-bold tracking-widest md:left-8">
            <span className="text-purple-500">&lt;/&gt;</span>{" "}
            SHREYA
          </div>

          {/* Floating navigation pill overlaps the character, like the reference */}
          <div className="pointer-events-auto absolute left-1/2 top-5 hidden -translate-x-1/2 items-center gap-5 whitespace-nowrap rounded-full border border-white/15 bg-black/25 px-6 py-3 text-xs text-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.22)] backdrop-blur-md md:left-[58%] md:flex md:gap-7">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Resume stays in the top-right corner */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto absolute right-6 top-5 rounded-full border border-purple-500/60 px-5 py-2 text-sm transition hover:bg-purple-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] md:right-8"
          >
            Resume
          </a>
        </div>
      </nav>


      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
          const y = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
          setPointer({ x, y });
        }}
        onMouseLeave={() => setPointer({ x: 0, y: 0 })}
      >

        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 h-64 w-64 rounded-full bg-fuchsia-500/[0.07] blur-[90px]"
          style={{
            left: `calc(50% + ${pointer.x * 180}px)`,
            top: `calc(50% + ${pointer.y * 150}px)`,
            transform: "translate(-50%, -50%)",
            transition: "left 120ms ease-out, top 120ms ease-out",
          }}
        />

        <div className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-6 pt-24 md:px-8">

          {/* LEFT SIDE — text stays on the left while the character overlaps the center */}
          <div className="relative z-20 flex min-h-[calc(100vh-6rem)] max-w-[540px] flex-col justify-center pb-12 md:w-[48%]">

            <p className="mb-3 text-3xl font-medium leading-tight tracking-tight text-purple-300 md:text-4xl">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-extrabold leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="block text-white">Shreya</span>
              <span className="mt-1 block bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
                Ambastha
              </span>
            </h1>

            <div className="mt-6 inline-block max-w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 backdrop-blur">
              Computer Science Engineer{" "}
              <span className="text-purple-400">×</span>{" "}
              Tech Enthusiast
            </div>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-400 md:text-lg md:leading-8">
              I build modern web applications, work with data,
              explore machine learning, and turn ideas into
              meaningful digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-purple-600 px-7 py-3 font-medium transition hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                Explore My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-medium transition hover:border-purple-500 hover:text-purple-400"
              >
                Contact Me
              </a>

            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-6 text-sm text-gray-500">
              <span className="cursor-pointer transition hover:text-purple-400">
                GitHub
              </span>

              <span className="cursor-pointer transition hover:text-purple-400">
                LinkedIn
              </span>

              <span className="cursor-pointer transition hover:text-purple-400">
                Email
              </span>
            </div>

          </div>


          {/* CENTER CHARACTER — layered over the hero, like the reference */}
          <div
            className="pointer-events-auto absolute left-[25%] top-[54%] z-10 flex h-[88vh] min-h-[480px] w-[78%] -translate-y-1/2 items-center justify-center md:left-[27%] md:top-[54%] md:h-[108vh] md:w-[74%]"
          >
            {/* Purple atmosphere stays behind the transparent character */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px] md:h-[480px] md:w-[480px]" />

            {/* Subtle orbit rings matching the portfolio theme */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20 shadow-[0_0_90px_rgba(139,92,246,0.12)] md:h-[500px] md:w-[500px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10 md:h-[410px] md:w-[410px]" />

            {/* Character remains centered; slight 3D tilt follows the cursor */}
            <div
              className="shreya-float relative z-10 h-full w-full max-w-[820px] scale-[1.06] md:scale-[1.12]"
              style={{
                transform: `perspective(1100px) rotateY(${pointer.x * 12}deg) rotateX(${-pointer.y * 8}deg) translate3d(${pointer.x * 18}px, ${pointer.y * -12}px, 0)`,
                transition: "transform 120ms ease-out",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="/character.png"
                alt="3D illustrated portrait of Shreya Ambastha"
                fill
                priority
                className="object-contain object-center drop-shadow-[0_12px_55px_rgba(168,85,247,0.30)]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>

            {/* Floating status card */}
            <div className="absolute right-0 top-20 z-20 rounded-2xl border border-purple-500/20 bg-[#0b0b10]/85 p-4 shadow-[0_0_30px_rgba(139,92,246,0.12)] backdrop-blur-xl md:right-1 md:top-24">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-xs text-gray-400">AVAILABLE</span>
              </div>
              <p className="mt-2 text-sm font-medium">For opportunities</p>
            </div>

            {/* Floating code card */}
            <div className="absolute bottom-6 left-[42%] z-20 rounded-2xl border border-purple-500/20 bg-[#111116]/85 p-4 shadow-xl backdrop-blur md:bottom-16 md:left-[40%]">
              <span className="text-xs text-purple-400">&lt;/&gt;</span>
              <p className="mt-1 text-sm text-gray-300">Building &amp; learning</p>
            </div>
          </div>
        </div>

      </section>


      {/* ABOUT */}
<section
  id="about"
  className="relative overflow-hidden border-t border-white/5 px-8 py-32"
>
  {/* Background glow */}
  <div className="absolute left-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section label */}
    <p className="text-sm font-medium tracking-[0.3em] text-purple-400">
      01 — ABOUT ME
    </p>

    {/* Heading */}
    <div className="mt-6 max-w-4xl">
      <h2 className="text-5xl font-black leading-tight md:text-7xl">
        MORE THAN
        <br />

        <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
          JUST CODE.
        </span>
      </h2>
    </div>

    {/* Main content */}
    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {/* LEFT PROFILE CARD */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">

        {/* Card glow */}
        <div className="absolute right-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-purple-600/10 blur-[80px] transition duration-500 group-hover:bg-purple-600/20" />

        <div className="relative">

          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-purple-400">
              SHREYA.OS
            </span>

            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
              ONLINE
            </span>
          </div>

          <div className="mt-12">

            <h3 className="text-3xl font-bold">
              Computer Science
              <br />
              Engineer
            </h3>

            <p className="mt-2 text-purple-400">
              Specialization — Big Data
            </p>

          </div>

          <p className="mt-8 max-w-lg leading-7 text-gray-400">
            I'm passionate about building digital experiences
            that combine technology, data and creativity. From
            full-stack applications to machine learning systems,
            I enjoy turning complex ideas into practical solutions.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
              <p className="text-3xl font-bold text-white">
                01+
              </p>

              <p className="mt-2 text-xs tracking-wider text-gray-500">
                INTERNSHIPS
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
              <p className="text-3xl font-bold text-white">
                01+
              </p>

              <p className="mt-2 text-xs tracking-wider text-gray-500">
                HACKATHONS
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* RIGHT EXPLORING CARD */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">

        <p className="font-mono text-sm text-purple-400">
          CURRENTLY_EXPLORING
        </p>

        <h3 className="mt-6 text-3xl font-bold">
          What I'm working with
        </h3>

        <div className="mt-10 space-y-4">

          {/* Item */}
          <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 p-5 transition hover:border-purple-500/30 hover:bg-purple-500/[0.03]">

            <div className="flex items-center gap-4">

              <span className="text-purple-400">
                ◉
              </span>

              <div>
                <p className="font-medium">
                  Full Stack Development
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  React · Next.js · Node.js · MongoDB
                </p>
              </div>

            </div>

            <span className="text-gray-600 transition group-hover:text-purple-400">
              →
            </span>

          </div>


          {/* Item */}
          <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 p-5 transition hover:border-purple-500/30 hover:bg-purple-500/[0.03]">

            <div className="flex items-center gap-4">

              <span className="text-purple-400">
                ◉
              </span>

              <div>
                <p className="font-medium">
                  Data & Analytics
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Power BI · Tableau · Big Data
                </p>
              </div>

            </div>

            <span className="text-gray-600 transition group-hover:text-purple-400">
              →
            </span>

          </div>


          {/* Item */}
          <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 p-5 transition hover:border-purple-500/30 hover:bg-purple-500/[0.03]">

            <div className="flex items-center gap-4">

              <span className="text-purple-400">
                ◉
              </span>

              <div>
                <p className="font-medium">
                  Machine Learning
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Python · Random Forest · XGBoost
                </p>
              </div>

            </div>

            <span className="text-gray-600 transition group-hover:text-purple-400">
              →
            </span>

          </div>


          {/* Item */}
          <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 p-5 transition hover:border-purple-500/30 hover:bg-purple-500/[0.03]">

            <div className="flex items-center gap-4">

              <span className="text-purple-400">
                ◉
              </span>

              <div>
                <p className="font-medium">
                  Problem Solving
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Java · DSA · Algorithms
                </p>
              </div>

            </div>

            <span className="text-gray-600 transition group-hover:text-purple-400">
              →
            </span>

          </div>

        </div>

      </div>

    </div>


    {/* Bottom stats */}
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
        <p className="text-4xl font-black text-purple-400">
          10+
        </p>

        <p className="mt-2 text-xs tracking-[0.2em] text-gray-500">
          PROJECTS
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
        <p className="text-4xl font-black text-purple-400">
          1+
        </p>

        <p className="mt-2 text-xs tracking-[0.2em] text-gray-500">
          INTERNSHIPS
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
        <p className="text-4xl font-black text-purple-400">
          ∞
        </p>

        <p className="mt-2 text-xs tracking-[0.2em] text-gray-500">
          THINGS TO LEARN
        </p>
      </div>

    </div>

  </div>

</section>



      {/* TECH STACK */}
      <section
        id="skills"
        className="relative overflow-hidden border-t border-white/5 px-8 py-32"
      >
        {/* Background glow */}
        <div className="absolute right-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Header */}
          <div className="max-w-3xl">

            <p className="text-sm font-medium tracking-[0.3em] text-purple-400">
              02 — TECH STACK
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              TOOLS I
              <br />

              <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
                BUILD WITH.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              A growing toolkit built through projects, internships,
              experiments and a lot of debugging.
            </p>

          </div>


          {/* CORE AREA */}
          <div className="relative mt-20 min-h-[650px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#08080c]">

            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Central glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

           
{/* CENTRAL NODE */}
<div className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/40 bg-[#0d0b13] shadow-[0_0_80px_rgba(139,92,246,0.2)]">
  <div className="text-center">
    <p className="text-xs tracking-[0.3em] text-purple-400">CORE</p>
    <p className="mt-2 text-2xl font-black">SHREYA</p>
    <p className="mt-1 text-[10px] text-gray-500">
      AI + FULL STACK
    </p>
  </div>
</div>

{/* ORBIT RINGS */}
<div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />
<div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />

{/* FLOATING TECHNOLOGY CARDS */}
{[
  { name: "JavaScript", icon: "JS", color: "yellow", position: "left-[10%] top-[12%]", delay: "0s" },
  { name: "React", icon: "⚛", color: "cyan", position: "right-[10%] top-[12%]", delay: "-2s" },
  { name: "Python", icon: "PY", color: "blue", position: "left-[5%] top-[42%]", delay: "-4s" },
  { name: "Java", icon: "JV", color: "orange", position: "right-[5%] top-[42%]", delay: "-1s" },
  { name: "Next.js", icon: "N", color: "gray", position: "left-[14%] bottom-[12%]", delay: "-3s" },
  { name: "Node.js", icon: "JS", color: "green", position: "right-[14%] bottom-[12%]", delay: "-5s" },
  { name: "LLMs", icon: "AI", color: "purple", position: "left-[29%] top-[8%]", delay: "-2.5s" },
  { name: "RAG", icon: "R", color: "purple", position: "right-[29%] top-[8%]", delay: "-4.5s" },
  { name: "NLP", icon: "NLP", color: "pink", position: "left-[27%] bottom-[8%]", delay: "-1.5s" },
  { name: "AI Agents", icon: "AG", color: "purple", position: "right-[27%] bottom-[8%]", delay: "-3.5s" },
  { name: "TypeScript", icon: "TS", color: "blue", position: "left-[40%] top-[3%]", delay: "-1s" },
  { name: "Docker", icon: "DK", color: "cyan", position: "right-[40%] bottom-[3%]", delay: "-4s" },
  { name: "MongoDB", icon: "DB", color: "green", position: "left-1/2 bottom-[7%] -translate-x-1/2", delay: "-2s" },
].map((tech) => (
  <div
    key={tech.name}
    className={`absolute z-10 ${tech.position}`}
    style={{
      animation: `techFloat 5s ease-in-out ${tech.delay} infinite`,
    }}
  >
    <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/95 px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]">
      <p className="text-xs text-purple-400">{tech.icon}</p>
      <p className="mt-1 whitespace-nowrap text-sm font-semibold text-white">
        {tech.name}
      </p>
    </div>
  </div>
))}

          </div>

          {/* CATEGORIES */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {/* DEVELOPMENT */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-purple-500/30">

              <p className="text-xs tracking-[0.2em] text-purple-400">
                DEVELOPMENT
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-gray-400 transition hover:border-purple-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>


            {/* DATA */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-purple-500/30">

              <p className="text-xs tracking-[0.2em] text-purple-400">
                DATA & AI
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {[
                  "Python",
                  "Power BI",
                  "Tableau",
                  "Machine Learning",
                  "XGBoost",
                  "Random Forest",
                  "Apache Spark",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-gray-400 transition hover:border-purple-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>


            {/* PROGRAMMING */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-purple-500/30">

              <p className="text-xs tracking-[0.2em] text-purple-400">
                PROGRAMMING
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                {[
                  "Java",
                  "DSA",
                  "Algorithms",
                  "SQL",
                  "MongoDB",
                  "Git",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-gray-400 transition hover:border-purple-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>


          {/* LEARNING STRIP */}
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-purple-500/20 bg-purple-500/[0.03] p-7 md:flex-row md:items-center">

            <div>

              <p className="text-xs tracking-[0.2em] text-purple-400">
                CURRENTLY LEARNING
              </p>

              <p className="mt-2 text-lg font-semibold">
                DSA • Advanced Next.js • Data Engineering
              </p>

            </div>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-sm text-gray-400">
                Always building
              </span>

            </div>

          </div>

        </div>
      </section>


      
<section
  id="projects"
  className="relative overflow-hidden border-t border-white/5 px-8 py-32"
>
  {/* Background glow */}
  <div className="absolute left-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-4xl">

      <p className="text-sm font-medium tracking-[0.3em] text-purple-400">
        03 — SELECTED WORK
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        THINGS I'VE
        <br />

        <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
          BUILT.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        A collection of projects where software engineering,
        data and machine learning come together to solve
        real-world problems.
      </p>

    </div>


    {/* PROJECT 01 */}
    <div className="group mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d]">

      <div className="grid lg:grid-cols-2">

        {/* Project visual */}
        <div className="relative min-h-[450px] overflow-hidden bg-gradient-to-br from-purple-950/40 via-[#0c0c12] to-black">

          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />{/* PROJECTS */}

          {/* Fake ATS dashboard */}
          <div className="absolute left-[10%] top-[15%] w-[80%] rounded-2xl border border-white/10 bg-[#111118]/90 p-5 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-[1.03]">

            <div className="flex items-center justify-between border-b border-white/10 pb-4">

              <span className="text-xs text-gray-500">
                RESUME_ANALYZER
              </span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-[10px] text-green-400">
                ANALYSIS COMPLETE
              </span>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-black/40 p-5">

                <p className="text-xs text-gray-500">
                  ATS SCORE
                </p>

                <p className="mt-2 text-5xl font-black text-purple-400">
                  87%
                </p>

              </div>

              <div className="rounded-xl bg-black/40 p-5">

                <p className="text-xs text-gray-500">
                  KEYWORD MATCH
                </p>

                <p className="mt-2 text-5xl font-black">
                  82%
                </p>

              </div>

            </div>

            <div className="mt-4 rounded-xl bg-black/40 p-5">

              <p className="text-xs text-gray-500">
                SKILL ALIGNMENT
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-400" />

              </div>

            </div>

          </div>

          <div className="absolute bottom-8 left-8 text-xs tracking-[0.2em] text-purple-400">
            AI / NLP / MACHINE LEARNING
          </div>

        </div>


        {/* Content */}
        <div className="flex flex-col justify-center p-10 lg:p-14">

          <p className="font-mono text-sm text-purple-400">
            PROJECT_01
          </p>

          <h3 className="mt-5 text-4xl font-black md:text-5xl">
            AI-Powered
            <br />
            Resume ATS Analyzer
          </h3>

          <p className="mt-6 leading-7 text-gray-400">
            An AI-powered resume screening system that uses
            Natural Language Processing and Machine Learning
            to analyze resumes against job descriptions and
            generate ATS compatibility insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "Python",
              "Streamlit",
              "Pandas",
              "Scikit-learn",
              "PyPDF2",
              "NLP",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-10">

            <a
  href="https://github.com/ambasthashreya08-commits/resume-ats-analyzer"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-purple-500/40 px-6 py-3 text-sm transition hover:bg-purple-600 hover:text-white"
>
  View Project →
</a>

          </div>

        </div>

      </div>

    </div>


    {/* PROJECT 02 */}
    <div className="group mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d]">

      <div className="grid lg:grid-cols-2">

        {/* Content */}
        <div className="order-2 flex flex-col justify-center p-10 lg:order-1 lg:p-14">

          <p className="font-mono text-sm text-purple-400">
            PROJECT_02
          </p>

          <h3 className="mt-5 text-4xl font-black md:text-5xl">
            Big Data
            <br />
            Analytics Platform
          </h3>

          <p className="mt-6 leading-7 text-gray-400">
            An end-to-end distributed analytics platform
            integrating Spark, Hadoop HDFS, Hive and Kafka
            for scalable batch processing and real-time
            data ingestion.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "Python",
              "Apache Spark",
              "Hadoop",
              "Kafka",
              "Hive",
              "SQL",
              "Docker",
              "Matplotlib",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-10">

            <a
  href="https://github.com/ambasthashreya08-commits/BigDataAnalytics"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-purple-500/40 px-6 py-3 text-sm transition hover:bg-purple-600"
>
  View Project →
</a>

          </div>

        </div>


        {/* Data visualization */}
        <div className="relative order-1 min-h-[450px] overflow-hidden bg-gradient-to-br from-blue-950/20 via-[#09090d] to-purple-950/30 lg:order-2">

          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="absolute left-[10%] top-[15%] w-[80%] rounded-2xl border border-white/10 bg-[#101016]/90 p-6 shadow-2xl backdrop-blur-xl">

            <div className="flex justify-between">

              <div>
                <p className="text-xs text-gray-500">
                  REGIONAL SALES
                </p>

                <p className="mt-2 text-3xl font-bold">
                  ₹ 8.42M
                </p>
              </div>

              <span className="text-xs text-green-400">
                +24.8%
              </span>

            </div>

            {/* Chart */}
            <div className="mt-10 flex h-40 items-end gap-3">

              {[35, 55, 42, 75, 62, 90, 70, 100].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400 transition duration-500 group-hover:from-fuchsia-600 group-hover:to-purple-300"
                    style={{ height: `${height}%` }}
                  />
                )
              )}

            </div>

            <div className="mt-6 flex justify-between text-[10px] text-gray-600">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
              <span>JUL</span>
              <span>AUG</span>
            </div>

          </div>

          <div className="absolute bottom-8 right-8 text-xs tracking-[0.2em] text-purple-400">
            DATA / STREAMING / ANALYTICS
          </div>

        </div>

      </div>

    </div>


    {/* PROJECT 03 */}
    <div className="group mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d]">

      <div className="grid lg:grid-cols-2">

        {/* Project visual */}
        <div className="relative min-h-[450px] overflow-hidden bg-gradient-to-br from-purple-950/30 via-[#09090d] to-black">

          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="absolute left-[10%] top-[12%] w-[80%] rounded-2xl border border-white/10 bg-[#111118]/95 p-6 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-[1.03]">

            <div className="flex items-center justify-between border-b border-white/10 pb-4">

              <span className="text-xs text-gray-500">
                TASK_MANAGER
              </span>

              <span className="h-2 w-2 rounded-full bg-green-400" />

            </div>

            <div className="mt-6 space-y-3">

              {[
                "Complete portfolio",
                "Build REST API",
                "Practice DSA",
                "Deploy application",
              ].map((task, index) => (

                <div
                  key={task}
                  className="flex items-center gap-3 rounded-xl bg-black/30 p-4"
                >

                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded border ${
                      index < 2
                        ? "border-purple-500 bg-purple-500/20 text-purple-400"
                        : "border-white/20"
                    }`}
                  >
                    {index < 2 ? "✓" : ""}
                  </span>

                  <span
                    className={
                      index < 2
                        ? "text-sm text-gray-500 line-through"
                        : "text-sm text-gray-300"
                    }
                  >
                    {task}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="absolute bottom-8 left-8 text-xs tracking-[0.2em] text-purple-400">
            FULL STACK / REST API / AUTH
          </div>

        </div>


        {/* Content */}
        <div className="flex flex-col justify-center p-10 lg:p-14">

          <p className="font-mono text-sm text-purple-400">
            PROJECT_03
          </p>

          <h3 className="mt-5 text-4xl font-black md:text-5xl">
            Task Management
            <br />
            Web Application
          </h3>

          <p className="mt-6 leading-7 text-gray-400">
            A full-stack task management application with
            secure authentication, personalized dashboards,
            REST APIs and MongoDB-powered task management.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT",
              "Tailwind CSS",
              "Axios",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-10">

            <a
  href="https://github.com/ambasthashreya08-commits/task-manager-app"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-purple-500/40 px-6 py-3 text-sm transition hover:bg-purple-600"
>
  View Project →
</a>

          </div>

        </div>

      </div>

    </div>

  </div>
  
      {/* PROJECT 04 — CAREBRIDGE */}
      <div className="group mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d]">
        <div className="grid lg:grid-cols-2">
          {/* Project visual */}
          <div className="relative min-h-[450px] overflow-hidden bg-gradient-to-br from-emerald-950/30 via-[#09090d] to-purple-950/30">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(52,211,153,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.4) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            <div className="absolute left-[8%] top-[12%] w-[84%] rounded-2xl border border-emerald-500/20 bg-[#101614]/95 p-5 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-[1.03]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs text-gray-400">
                  CAREBRIDGE / PATHWAY ANALYTICS
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] text-emerald-400">
                  ANALYTICS
                </span>
              </div>

              <p className="mt-5 text-sm text-gray-400">
                Clinical pathway overview
              </p>

              <div className="mt-4 space-y-3">
                {[
                  ["Patient pathway analysis", "01"],
                  ["Deviation detection", "02"],
                  ["Bottleneck identification", "03"],
                  ["RAG-based clinical insights", "04"],
                ].map(([label, number]) => (
                  <div
                    key={number}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/30 p-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-xs text-emerald-400">
                      {number}
                    </span>
                    <span className="text-sm text-gray-300">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Clinical pathway intelligence
              </p>
            </div>

            <div className="absolute bottom-8 left-8 text-xs tracking-[0.2em] text-emerald-400">
              HEALTHCARE / AI-ML / RAG
            </div>
          </div>

          {/* Project content */}
          <div className="flex flex-col justify-center p-10 lg:p-14">
            <p className="font-mono text-sm text-emerald-400">
              PROJECT_04
            </p>

            <h3 className="mt-5 text-4xl font-black md:text-5xl">
              CAREBRIDGE
              <br />
              Clinical Pathway Analytics
            </h3>

            <p className="mt-6 leading-7 text-gray-400">
              A clinical pathway analytics platform that combines medical
              report extraction, risk analysis and clinical pathway
              generation with big-data process mining. It analyzes patient
              event logs to identify pathway deviations, workflow bottlenecks
              and pathway utilization patterns, with RAG-based retrieval
              supporting clinical insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "Next.js",
                "TypeScript",
                "Pandas",
                "FAISS",
                "Sentence Transformers",
                "Process Mining",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://github.com/ambasthashreya08-commits/Big-Data-Platform-for-Clinical-Pathway-Utilization-Analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-500/40 px-6 py-3 text-sm transition hover:bg-emerald-600 hover:text-white"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
</section>

      {/* CERTIFICATIONS & ACHIEVEMENTS */}
      <section
        id="achievements"
        className="relative overflow-hidden border-t border-white/5 px-8 py-32"
      >
        {/* Background glow */}
        <div className="absolute right-[-200px] top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="max-w-4xl">

            <p className="text-sm font-medium tracking-[0.3em] text-purple-400">
              05 — ACHIEVEMENTS
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              PROOF OF
              <br />

              <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
                PROGRESS.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Certifications and experiences that represent
              the skills I've developed beyond the classroom.
            </p>

          </div>


          {/* CREDENTIAL GRID */}
          <div className="mt-20 grid gap-5 md:grid-cols-2">


            {/* WALMART */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-500/40">

              {/* Glow */}
              <div className="absolute right-[-80px] top-[-80px] h-[200px] w-[200px] rounded-full bg-purple-600/10 blur-[70px] transition group-hover:bg-purple-600/20" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-xl">
                    W
                  </div>

                  <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                    VERIFIED
                  </span>

                </div>

                <p className="mt-8 text-xs tracking-[0.2em] text-purple-400">
                  SOFTWARE ENGINEERING
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Advanced Software Engineering
                  <br />
                  Job Simulation
                </h3>

                <p className="mt-4 text-sm text-gray-400">
                  Walmart Global Tech · Forage
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  June 23, 2025
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Data Structures",
                    "Software Architecture",
                    "Database Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-500"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="mt-8 border-t border-white/5 pt-5">

                  <span className="text-sm text-gray-500 transition group-hover:text-purple-400">
                    Advanced Engineering Simulation →
                  </span>

                </div>

              </div>

            </div>


            {/* JPMORGAN */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="absolute right-[-80px] top-[-80px] h-[200px] w-[200px] rounded-full bg-purple-600/10 blur-[70px] transition group-hover:bg-purple-600/20" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-xl">
                    J.P.
                  </div>

                  <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                    VERIFIED
                  </span>

                </div>

                <p className="mt-8 text-xs tracking-[0.2em] text-purple-400">
                  SOFTWARE ENGINEERING
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Software Engineering
                  <br />
                  Job Simulation
                </h3>

                <p className="mt-4 text-sm text-gray-400">
                  JPMorgan Chase & Co. · Forage
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  January 17, 2026
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Debugging",
                    "System Design",
                    "Data Visualisation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-500"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="mt-8 border-t border-white/5 pt-5">

                  <span className="text-sm text-gray-500 transition group-hover:text-purple-400">
                    Engineering Simulation →
                  </span>

                </div>

              </div>

            </div>


            {/* HACKERRANK */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="absolute right-[-80px] top-[-80px] h-[200px] w-[200px] rounded-full bg-purple-600/10 blur-[70px] transition group-hover:bg-purple-600/20" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-xl">
                    {"</>"}
                  </div>

                  <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                    CERTIFIED
                  </span>

                </div>

                <p className="mt-8 text-xs tracking-[0.2em] text-purple-400">
                  PROGRAMMING
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  JavaScript
                  <br />
                  (Intermediate)
                </h3>

                <p className="mt-4 text-sm text-gray-400">
                  HackerRank Certification
                </p>

                <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                  Validated JavaScript fundamentals,
                  problem-solving ability and algorithmic
                  coding skills.
                </p>

                <div className="mt-8 border-t border-white/5 pt-5">

                  <span className="text-sm text-gray-500 transition group-hover:text-purple-400">
                    Coding Certification →
                  </span>

                </div>

              </div>

            </div>


            {/* EY MICROSOFT */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="absolute right-[-80px] top-[-80px] h-[200px] w-[200px] rounded-full bg-purple-600/10 blur-[70px] transition group-hover:bg-purple-600/20" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-xl">
                    AI
                  </div>

                  <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                    CERTIFIED
                  </span>

                </div>

                <p className="mt-8 text-xs tracking-[0.2em] text-purple-400">
                  ARTIFICIAL INTELLIGENCE
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  AI Skills
                  <br />
                  Passport
                </h3>

                <p className="mt-4 text-sm text-gray-400">
                  EY × Microsoft
                </p>

                <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                  Core AI concepts, responsible AI,
                  ethics and employability skills for
                  AI-driven environments.
                </p>

                <div className="mt-8 border-t border-white/5 pt-5">

                  <span className="text-sm text-gray-500 transition group-hover:text-purple-400">
                    AI Skills Credential →
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* BOTTOM STATEMENT */}
          <div className="mt-8 rounded-3xl border border-purple-500/20 bg-purple-500/[0.03] p-8">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <div>

                <p className="text-xs tracking-[0.2em] text-purple-400">
                  CONTINUOUS LEARNING
                </p>

                <p className="mt-3 text-xl font-semibold">
                  The goal isn't to collect certificates.
                  It's to build things worth showing.
                </p>

              </div>

              <div className="text-5xl">
                ∞
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
<section
  id="experience"
  className="relative overflow-hidden border-t border-white/5 px-8 py-32"
>
  <div className="absolute left-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="max-w-4xl">

      <p className="text-sm font-medium tracking-[0.3em] text-purple-400">
        04 — EXPERIENCE
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        WHERE I
        <br />

        <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
          GOT HANDS-ON.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        My first professional experience in software development,
        where I turned classroom concepts into practical web
        development work.
      </p>

    </div>


    {/* INTERNSHIP */}
    <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090d]">

      {/* Decorative number */}
      <div className="absolute right-8 top-[-35px] text-[180px] font-black leading-none text-white/[0.025]">
        01
      </div>

      <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT */}
        <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r lg:p-14">

          <p className="font-mono text-sm text-purple-400">
            INTERNSHIP_01
          </p>

          <h3 className="mt-6 text-4xl font-black">
            Web Development
            <br />
            Intern
          </h3>

          <p className="mt-4 text-lg text-gray-400">
            DroboZone Innovative Centre Pvt. Ltd.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-300">
            WEB DEVELOPMENT
          </div>
          

<a
  href="/drobozone-certificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/20 hover:text-white"
>
  View Completion Certificate
  <span aria-hidden="true">↗</span>
</a>



        </div>


        {/* RIGHT */}
        <div className="p-10 lg:p-14">

          <p className="text-xs tracking-[0.2em] text-purple-400">
            WHAT I WORKED ON
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Worked on modern web development technologies,
            gaining practical experience in building responsive
            interfaces and understanding frontend and backend
            development workflows.
          </p>


          {/* TECH */}
          <div className="mt-8">

            <p className="text-xs text-gray-600">
              TECHNOLOGIES
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Responsive Design",
                "Web Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-gray-400 transition hover:border-purple-500/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>


          {/* LEARNING */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/5 bg-black/30 p-5">

              <p className="text-xs text-purple-400">
                01
              </p>

              <p className="mt-3 font-semibold">
                Practical Development
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Applied web development concepts to
                practical development work.
              </p>

            </div>


            <div className="rounded-2xl border border-white/5 bg-black/30 p-5">

              <p className="text-xs text-purple-400">
                02
              </p>

              <p className="mt-3 font-semibold">
                Responsive Design
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Focused on creating interfaces that work
                across different screen sizes.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* BOTTOM */}
    <div className="mt-8 flex flex-col justify-between gap-5 rounded-3xl border border-purple-500/20 bg-purple-500/[0.03] p-8 md:flex-row md:items-center">

      <div>

        <p className="text-xs tracking-[0.2em] text-purple-400">
          FIRST PROFESSIONAL EXPERIENCE
        </p>

        <p className="mt-3 text-xl font-semibold">
          From learning concepts to building with them.
        </p>

      </div>

      <div className="text-4xl text-purple-400">
        →
      </div>

    </div>

  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="relative overflow-hidden border-t border-white/5 px-8 py-32"
>
  {/* Background glow */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="max-w-4xl">
      <p className="text-sm font-medium tracking-[0.3em] text-purple-400">
        06 — LET'S CONNECT
      </p>

      <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-8xl">
        HAVE AN IDEA?
        <br />
        <span className="bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
          LET'S BUILD IT.
        </span>
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        Whether it's a project, internship opportunity, collaboration,
        or just a conversation about technology, I'd love to hear from you.
      </p>
    </div>

    {/* Contact area */}
    <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

      {/* LEFT SIDE */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">

        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-600/10 blur-[80px]" />

        <div className="relative">

          <p className="font-mono text-sm text-purple-400">
            SHREYA.CONNECT()
          </p>

          <h3 className="mt-8 text-3xl font-bold">
            Let's create something
            <br />
            <span className="text-purple-400">
              meaningful.
            </span>
          </h3>

          <p className="mt-6 leading-7 text-gray-400">
            I'm currently open to opportunities where I can
            build, learn, and contribute to real-world projects.
          </p>

          {/* Email */}
          <a
            href="mailto:your-email@gmail.com"
            className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-purple-500/40 hover:bg-purple-500/5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
              @
            </div>

            <div>
              <p className="text-xs tracking-wider text-gray-500">
                EMAIL
              </p>

              <p className="mt-1 text-sm text-gray-200">
                ambasthashreya.08@gmail.com
              </p>
            </div>
          </a>

          {/* Socials */}
          <div className="mt-8 flex gap-3">

            <a
              href="https://github.com/ambasthashreya08-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sm transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
            >
              Git
            </a>

            <a
              href="www.linkedin.com/in/shreya-ambastha-48a6052a1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sm transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
            >
              in
            </a>

            <a
              href="mailto:ambasthashreya.08@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sm transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
            >
              @
            </a>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE — FORM */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl md:p-10">

        <form
  action="https://formspree.io/f/mkjwrday"
  method="POST"
  className="space-y-6"
>

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Shreya"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Your Message
            </label>

            <textarea
              rows={6}
              name="message"
              placeholder="Tell me about your project, idea or opportunity..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-purple-600 px-7 py-4 font-medium transition hover:bg-purple-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
          >
            Send Message

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </form>

      </div>

    </div>

    {/* Footer */}
    <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

      <p>
        © 2026 Shreya Ambastha
      </p>

      <p className="font-mono">
        Built with Next.js • React • Tailwind CSS
      </p>

      <a
        href="#home"
        className="transition hover:text-purple-400"
      >
        Back to top ↑
      </a>

    </div>

  </div>
</section>












    </main>
  );
}
