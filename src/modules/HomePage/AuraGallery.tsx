'use client';

import { useInView } from '@Hooks/useInView';
import { Button, Card } from '@heroui/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const GALLERY_ITEMS = [
  {
    title: 'Infinity Pool',
    category: 'Relaxation',
    image:
      'https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=1200&auto=format&fit=crop',
    span: 'row-span-2'
  },
  {
    title: 'Ocean Suite',
    category: 'Accommodation',
    image: '/images/aurastay/stay.png',
    span: ''
  },
  {
    title: 'Spa Retreat',
    category: 'Wellness',
    image: '/images/aurastay/spa.png',
    span: ''
  },
  {
    title: 'Fine Dining',
    category: 'Culinary',
    image: '/images/aurastay/dine.png',
    span: 'row-span-2'
  },
  {
    title: 'Beach Activities',
    category: 'Adventure',
    image: '/images/aurastay/activities.png',
    span: ''
  },
  {
    title: 'Tropical Garden',
    category: 'Nature',
    image: '/images/aurastay/hero.png',
    span: ''
  }
];

export const AuraGallery = () => {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>({
    threshold: 0.05
  });

  return (
    <section id="gallery" className="bg-gradient-to-b from-aura-cream to-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`anim-fade-in-up mb-16 text-center ${headerInView ? 'in-view' : ''}`}
        >
          <span className="font-bold text-aura-aquamarine text-sm uppercase tracking-[0.2em]">
            Visual Journey
          </span>
          <h2 className="mt-4 font-bold text-4xl text-foreground tracking-tight md:text-5xl">
            Gallery
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-aura-aquamarine to-emerald-400" />
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <Card
              key={item.title}
              variant="transparent"
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border-none ${item.span} anim-scale-in ${gridInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/50">
                <div className="flex flex-col items-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="mb-2 font-medium text-aura-aquamarine text-xs uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="mb-4 font-bold text-2xl text-white">{item.title}</h3>
                  <Button
                    variant="outline"
                    className="border-white/40 text-white transition-all hover:border-white hover:bg-white/10"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
