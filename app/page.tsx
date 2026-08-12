import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          {/* Logo */}
          <div className="text-xl font-bold tracking-widest">
            <span className="text-purple-500">&lt;/&gt;</span>{" "}
            SHREYA
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
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

          {/* Resume */}
          <a
  href="/Shreya_Ambastha_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-purple-500/60 px-5 py-2 text-sm transition hover:bg-purple-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]"
>
  Resume
</a>
        </div>
      </nav>


      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-8 pt-24 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <p className="mb-5 text-sm font-medium tracking-[0.3em] text-purple-400">
              HELLO, I'M
            </p>

            <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              SHREYA
              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
                AMBASTHA
              </span>
            </h1>

            <div className="mt-8 inline-block rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 backdrop-blur">
              Computer Science Engineer{" "}
              <span className="text-purple-400">×</span>{" "}
              Big Data Enthusiast
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              I build modern web applications, work with data,
              explore machine learning, and turn ideas into
              meaningful digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

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
            <div className="mt-8 flex gap-6 text-sm text-gray-500">
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


          {/* RIGHT SIDE — 3D AREA */}
          <div className="relative flex h-[600px] items-center justify-center">

            {/* Large glowing circle */}
            <div className="absolute h-[420px] w-[420px] rounded-full border border-purple-500/20 shadow-[0_0_100px_rgba(139,92,246,0.15)]" />

            <div className="relative flex h-[650px] w-full items-center justify-center">

              {/* Purple atmosphere */}
              <div className="absolute h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

              {/* Outer orbit */}
              <div className="absolute h-[520px] w-[520px] rounded-full border border-purple-500/20" />

              <div className="absolute h-[420px] w-[420px] rounded-full border border-purple-500/10" />

              {/* Image container */}
              <div className="shreya-float group relative z-10 h-[620px] w-full overflow-hidden">

                <Image
                  src="/shreya-laptop.png"
                  alt="Shreya Ambastha - Computer Science Engineer"
                  fill
                  priority
                  className="object-contain object-center transition duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />

                {/* Purple lighting overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-70" />

              </div>

              {/* Floating status card */}
              <div className="absolute right-0 top-20 z-20 rounded-2xl border border-purple-500/20 bg-[#0b0b10]/80 p-4 shadow-[0_0_30px_rgba(139,92,246,0.12)] backdrop-blur-xl">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  <span className="text-xs text-gray-400">
                    AVAILABLE
                  </span>

                </div>

                <p className="mt-2 text-sm font-medium">
                  For opportunities
                </p>

              </div>

              {/* Floating CODE card */}
              <div className="absolute bottom-24 left-0 z-20 rounded-2xl border border-purple-500/20 bg-[#111116]/80 p-4 shadow-xl backdrop-blur">

                <span className="text-xs text-purple-400">
                  &lt;/&gt;
                </span>

                <p className="mt-1 text-sm text-gray-300">
                  Building & learning
                </p>

              </div>

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
                03+
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
          3+
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

            {/* Central node */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/40 bg-[#0d0b13] shadow-[0_0_80px_rgba(139,92,246,0.2)]">

              <div className="text-center">

                <p className="text-xs tracking-[0.3em] text-purple-400">
                  CORE
                </p>

                <p className="mt-2 text-2xl font-black">
                  SHREYA
                </p>

                <p className="mt-1 text-[10px] text-gray-600">
                  ENGINEERING STACK
                </p>

              </div>

            </div>


            {/* ORBIT RINGS */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />

            <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />


            {/* JAVASCRIPT */}
            <div className="absolute left-[10%] top-[15%]">
              <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.12)]">

                <p className="text-xs text-yellow-400">
                  JS
                </p>

                <p className="mt-1 font-semibold">
                  JavaScript
                </p>

              </div>
            </div>


            {/* REACT */}
            <div className="absolute right-[10%] top-[15%]">
              <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">

                <p className="text-xs text-cyan-400">
                  ⚛
                </p>

                <p className="mt-1 font-semibold">
                  React
                </p>

              </div>
            </div>


            {/* PYTHON */}
            <div className="absolute left-[5%] top-[45%]">
              <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.12)]">

                <p className="text-xs text-blue-400">
                  PY
                </p>

                <p className="mt-1 font-semibold">
                  Python
                </p>

              </div>
            </div>


            {/* JAVA */}
            <div className="absolute right-[5%] top-[45%]">
              <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(251,146,60,0.12)]">

                <p className="text-xs text-orange-400">
                  JV
                </p>

                <p className="mt-1 font-semibold">
                  Java
                </p>

              </div>
            </div>


            {/* NEXT JS */}
            <div className="absolute bottom-[15%] left-[14%]">
              <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">

                <p className="text-xs text-gray-300">
                  N
                </p>

                <p className="mt-1 font-semibold">
                  Next.js
                </p>

              </div>
            </div>


            {/* NODE */}
            <div className="absolute bottom-[15%] right-[14%]">
              <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.12)]">

                <p className="text-xs text-green-400">
                  JS
                </p>

                <p className="mt-1 font-semibold">
                  Node.js
                </p>

              </div>
            </div>


            {/* MONGODB */}
            <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2">
              <div className="group cursor-pointer rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.12)]">

                <p className="text-xs text-green-400">
                  DB
                </p>

                <p className="mt-1 font-semibold">
                  MongoDB
                </p>

              </div>
            </div>

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
