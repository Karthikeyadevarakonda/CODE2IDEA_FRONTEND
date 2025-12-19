import { motion } from "framer-motion";
import HeroIllustration from "../assets/Hero.svg";
import { Code2, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className=" relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#eef1ff] via-[#e3e8ff] to-[#d6ddff]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-sky-200/40 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-10">
        <div className="grid w-full items-center gap-10 md:grid-cols-2 sm:-mt-20 ">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6 text-center md:text-left"
          >
            <h1
              id="hero-heading"
              className="-pt-5 relative text-4xl font-extrabold leading-tight md:text-6xl "
            >
              {/* Accent badge */}
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 sm:px-6  py-2 text-sm font-semibold text-[#3f51b5] shadow-sm backdrop-blur">
                <Trophy className="h-4 w-4" />
                Innovation Platform
              </span>

              <span className="block text-[#1f2a5a]">From Code to</span>

              <span className="block bg-gradient-to-r from-[#3f51b5] via-[#5c6bc0] to-[#7986cb] bg-clip-text text-transparent">
                Award-Winning Ideas
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-base text-[#3b4ba3] md:mx-0 md:text-lg lg:text-xl">
              CODE&nbsp;2&nbsp;IDEA is a modern platform where innovation meets
              recognition — submit projects, get mentored, ranked, and voted on
              with complete transparency.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <button className="rounded-xl bg-gradient-to-r from-[#3f51b5] to-[#5c6bc0] px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:scale-105 hover:shadow-2xl">
                Get Started
              </button>
              <button className="rounded-xl border border-slate-300 bg-white/70 px-8 py-4 text-base font-semibold text-slate-700 backdrop-blur transition hover:bg-white">
                Explore Projects
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <motion.img
              src={HeroIllustration}
              alt="Students collaborating and building ideas"
              className="w-full hidden sm:flex lg:max-w-2xl drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
