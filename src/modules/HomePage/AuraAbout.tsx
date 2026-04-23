'use client';

import { useInView } from '@Hooks/useInView';
import { Button, Chip } from '@heroui/react';
import { Award, Leaf, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

const STATS = [
  { icon: MapPin, label: 'Beachfront Location', value: 'Private Beach' },
  { icon: Users, label: 'Guest Satisfaction', value: '98%' },
  { icon: Award, label: 'Awards Won', value: '15+' },
  { icon: Leaf, label: 'Eco Certified', value: 'Green Resort' }
];

export const AuraAbout = () => {
  const [leftRef, leftInView] = useInView<HTMLDivElement>();
  const [rightRef, rightInView] = useInView<HTMLDivElement>();

  return (
    <section id="about" className="overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Image Grid */}
          <div ref={leftRef} className={`anim-slide-right relative ${leftInView ? 'in-view' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aurastay/stay.png"
                    alt="Luxury room"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aurastay/spa.png"
                    alt="Spa experience"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aurastay/dine.png"
                    alt="Fine dining"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aurastay/activities.png"
                    alt="Resort activities"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-3xl bg-aura-aquamarine/10" />
            <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-aura-gold/10" />
          </div>

          {/* Right: Content */}
          <div ref={rightRef} className={`anim-slide-left ${rightInView ? 'in-view' : ''}`}>
            <Chip className="mb-6 border border-aura-aquamarine/20 bg-aura-aquamarine/10 px-3 py-1 font-bold text-aura-aquamarine text-xs uppercase tracking-[0.15em]">
              About Us
            </Chip>

            <h2 className="font-bold text-4xl text-foreground tracking-tight md:text-5xl">
              A Sanctuary of
              <br />
              <span className="text-aura-aquamarine">Refined Living</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nestled along a pristine coastline, AuraStay is more than a resort—it&apos;s a
              philosophy of living. We blend contemporary architecture with organic elements,
              creating spaces that inspire relaxation, creativity, and connection.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every corner of our resort tells a story—from the locally sourced materials in our
              villas to the curated wellness programs designed by world-renowned practitioners.
              Here, luxury is not just about opulence; it&apos;s about intentional living.
            </p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group flex items-start gap-3 rounded-2xl border border-foreground/5 bg-aura-cream/50 p-4 transition-all duration-300 hover:border-aura-aquamarine/20 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aura-aquamarine/10 to-emerald-100 text-aura-aquamarine transition-colors group-hover:from-aura-aquamarine/20 group-hover:to-emerald-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{stat.value}</p>
                      <p className="text-muted-foreground text-xs">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              variant="primary"
              className="mt-10 bg-aura-aquamarine px-8 font-semibold text-white shadow-aura-aquamarine/20 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
