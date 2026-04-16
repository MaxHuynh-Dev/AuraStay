'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AuraHero = () => {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aurastay/hero.png"
          alt="Luxury resort infinity pool at sunset"
          fill
          priority
          className="object-cover"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-aura-wood/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-extrabold font-outfit text-5xl text-white leading-[1.1] tracking-tight drop-shadow-2xl md:text-7xl lg:text-8xl">
            AuraStay: A Seamless <br />
            <span className="text-aura-aquamarine drop-shadow-none">Resort Experience.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl font-light text-white/90 text-xl tracking-wide drop-shadow-lg md:text-2xl"
          >
            Pure. Refined. Connected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <button
              type="button"
              className="group relative overflow-hidden rounded-full bg-aura-aquamarine px-10 py-5 font-bold text-lg text-white shadow-[0_0_20px_rgba(79,209,197,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,209,197,0.6)] active:scale-95"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                Explore Our Spaces
              </span>
              <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
            </button>

            <button
              type="button"
              className="rounded-full border border-white/30 bg-white/10 px-10 py-5 font-bold text-lg text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20"
            >
              Watch Experience
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[100px] w-[calc(100%+1.3px)]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.67,54.16,123.39,59,192.69,58.86A440.39,440.39,0,0,0,321.39,56.44Z"
            className="fill-aura-cream opacity-100"
          />
        </svg>
      </div>

      {/* Subtle Golden Glows */}
      <div className="pointer-events-none absolute -top-1/4 -right-1/4 h-[500px] w-[500px] animate-pulse-glow rounded-full bg-aura-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-1/4 h-[400px] w-[400px] animate-pulse-glow rounded-full bg-aura-aquamarine/10 blur-[100px] [animation-delay:2s]" />
    </section>
  );
};
