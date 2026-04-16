'use client';

import { Button } from '@heroui/react';
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
            <Button>Explore Our Spaces</Button>

            <Button>Watch Experience</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
