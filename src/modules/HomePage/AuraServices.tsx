'use client';

import { useInView } from '@Hooks/useInView';
import { Button, Card } from '@heroui/react';
import { Bed, Map as MapIcon, Sparkles, Utensils } from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  {
    title: 'Stay',
    description:
      'Experience unparalleled comfort in our architecturally stunning rooms and suites.',
    image: '/images/aurastay/stay.png',
    icon: Bed,
    gradient: 'from-aura-aquamarine to-emerald-600'
  },
  {
    title: 'Spa',
    description:
      'Rejuvenate your soul with ancient healing traditions and modern wellness therapies.',
    image: '/images/aurastay/spa.png',
    icon: Sparkles,
    gradient: 'from-aura-gold to-amber-600'
  },
  {
    title: 'Dine',
    description:
      'A symphony of flavors crafted from locally sourced ingredients and global techniques.',
    image: '/images/aurastay/dine.png',
    icon: Utensils,
    gradient: 'from-aura-wood to-amber-900'
  },
  {
    title: 'Activities',
    description: 'Discover the hidden gems of the coast with our curated adventure experiences.',
    image: '/images/aurastay/activities.png',
    icon: MapIcon,
    gradient: 'from-aura-aquamarine-dark to-teal-700'
  }
];

export const AuraServices = () => {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>({
    threshold: 0.05
  });

  return (
    <section id="services" className="bg-aura-cream px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={`anim-fade-in-up mb-20 text-center ${headerInView ? 'in-view' : ''}`}
        >
          <span className="font-bold text-aura-aquamarine text-sm uppercase tracking-[0.2em]">
            Refined Living
          </span>
          <h2 className="mt-4 font-bold text-4xl text-foreground tracking-tight md:text-5xl">
            Featured Services
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-aura-aquamarine to-emerald-400" />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`group anim-fade-in-up cursor-pointer overflow-hidden border-none shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${gridInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-colors duration-300" />

                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br ${service.gradient} text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title overlay on image */}
                  <div className="absolute bottom-4 left-6 z-20">
                    <h3 className="font-bold text-2xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <Card.Content className="p-6">
                  <p className="text-left text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card.Content>

                <Card.Footer className="px-6 pt-0 pb-6">
                  <Button
                    variant="ghost"
                    className="h-auto p-0 font-bold text-aura-aquamarine transition-colors hover:text-aura-aquamarine-dark"
                  >
                    <span>Learn More</span>
                    <span className="anim-arrow ml-1">→</span>
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
