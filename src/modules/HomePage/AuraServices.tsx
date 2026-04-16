'use client';

import { motion } from 'framer-motion';
import { Bed, Map, Sparkles, Utensils } from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  {
    title: 'Stay',
    description:
      'Experience unparalleled comfort in our architecturally stunning rooms and suites.',
    image: '/images/aurastay/stay.png',
    icon: <Bed className="h-6 w-6" />,
    color: 'bg-aura-aquamarine'
  },
  {
    title: 'Spa',
    description:
      'Rejuvenate your soul with ancient healing traditions and modern wellness therapies.',
    image: '/images/aurastay/spa.png',
    icon: <Sparkles className="h-6 w-6" />,
    color: 'bg-aura-gold'
  },
  {
    title: 'Dine',
    description:
      'A symphony of flavors crafted from locally sourced ingredients and global techniques.',
    image: '/images/aurastay/dine.png',
    icon: <Utensils className="h-6 w-6" />,
    color: 'bg-aura-wood'
  },
  {
    title: 'Activities',
    description: 'Discover the hidden gems of the coast with our curated adventure experiences.',
    image: '/images/aurastay/activities.png',
    icon: <Map className="h-6 w-6" />,
    color: 'bg-aura-aquamarine-dark'
  }
];

export const AuraServices = () => {
  return (
    <section id="services" className="bg-aura-cream px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-bold text-aura-aquamarine text-sm uppercase tracking-[0.2em]"
          >
            Refined Living
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-bold font-outfit text-4xl text-foreground tracking-tight md:text-5xl"
          >
            Featured Services
          </motion.h2>
          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-aura-aquamarine" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-aura-border/50 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

                {/* Icon Badge */}
                <div
                  className={`absolute top-4 right-4 h-12 w-12 ${service.color} flex items-center justify-center rounded-full border-2 border-white/20 text-white shadow-lg`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-3 font-bold font-outfit text-2xl text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="group/link mt-6 flex cursor-pointer items-center gap-2 font-bold text-aura-aquamarine">
                  <span className="group-hover/link:underline">Learn More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
