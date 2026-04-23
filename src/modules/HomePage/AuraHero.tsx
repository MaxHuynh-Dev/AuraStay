'use client';

import { Button, Chip } from '@heroui/react';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export const AuraHero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury resort infinity pool at sunset"
          fill
          priority
          className="object-cover"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-aura-wood/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 text-center">
        {/* Badge */}
        <div className="anim-hero-enter">
          <Chip className="mb-8 border border-white/20 bg-white/10 px-4 py-2 font-medium text-sm text-white/90 backdrop-blur-md">
            ✨ Luxury Resort & Spa
          </Chip>
        </div>

        {/* Heading */}
        <h1 className="anim-hero-enter font-extrabold text-5xl text-white leading-[1.1] tracking-tight drop-shadow-2xl md:text-7xl lg:text-8xl">
          Discover Your
          <br />
          <span className="bg-gradient-to-r from-aura-aquamarine to-emerald-300 bg-clip-text text-transparent drop-shadow-none">
            Perfect Escape.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="anim-hero-enter-delayed mx-auto mt-8 max-w-2xl font-light text-white/85 text-xl tracking-wide drop-shadow-lg md:text-2xl">
          Where refined luxury meets nature's serenity. Experience an unforgettable stay at
          AuraStay.
        </p>

        {/* CTA Buttons */}
        <div className="anim-hero-enter-delayed-2 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            size="lg"
            variant="primary"
            className="bg-aura-aquamarine px-8 font-semibold text-white shadow-aura-aquamarine/30 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-aura-aquamarine/50 hover:shadow-xl"
          >
            Explore Our Spaces
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/40 px-8 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/80 hover:bg-white/10"
          >
            Watch Experience
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="anim-hero-enter-delayed-2 font-medium text-white/60 text-xs uppercase tracking-[0.2em]">
          Scroll to discover
        </span>
        <ArrowDown className="anim-bounce h-5 w-5 text-white/60" />
      </div>
    </section>
  );
};
