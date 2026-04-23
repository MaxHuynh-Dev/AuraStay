'use client';

import { useInView } from '@Hooks/useInView';
import { Avatar, Card, Chip } from '@heroui/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useCallback } from 'react';

const TESTIMONIALS = [
  {
    name: 'Eleanor Vance',
    role: 'Travel Journalist',
    avatar: 'EV',
    content:
      'AuraStay redefined my concept of luxury. The attention to detail and the seamless connection with nature is truly breathtaking.',
    rating: 5
  },
  {
    name: 'Julian Thorne',
    role: 'CEO, Horizon Ventures',
    avatar: 'JT',
    content:
      'The perfect escape for the modern professional. The refined atmosphere and flawless service allowed me to truly disconnect.',
    rating: 5
  },
  {
    name: 'Sophia Chen',
    role: 'Luxury Lifestyle Blogger',
    avatar: 'SC',
    content:
      'From the sunset at the infinity pool to the curated dining experience, every moment felt like a cinematic masterpiece.',
    rating: 5
  },
  {
    name: 'Marcus Williams',
    role: 'Architect',
    avatar: 'MW',
    content:
      'The architecture alone is worth the visit. A masterful blend of modern design and organic elements that inspires at every turn.',
    rating: 5
  }
];

export const AuraTestimonials = () => {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`anim-fade-in-up mb-16 flex flex-col items-center justify-between gap-8 md:flex-row ${headerInView ? 'in-view' : ''}`}
        >
          <div>
            <span className="font-bold text-aura-gold text-sm uppercase tracking-[0.2em]">
              Guest Stories
            </span>
            <h2 className="mt-4 font-bold text-4xl text-foreground tracking-tight md:text-5xl">
              Memories of AuraStay
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-white text-foreground/60 shadow-sm transition-all duration-300 hover:border-aura-aquamarine hover:text-aura-aquamarine hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-white text-foreground/60 shadow-sm transition-all duration-300 hover:border-aura-aquamarine hover:text-aura-aquamarine hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="embla__slide min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
              >
                <Card className="group relative flex h-full flex-col border border-foreground/5 bg-aura-cream shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <Card.Content className="flex flex-1 flex-col gap-6 p-8">
                    {/* Quote Icon */}
                    <Quote className="absolute top-6 right-8 h-10 w-10 text-aura-aquamarine/8 transition-colors duration-300 group-hover:text-aura-aquamarine/15" />

                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i.toString()}
                          className="h-4 w-4 fill-aura-gold text-aura-gold"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="flex-1 font-light text-foreground/75 text-lg italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 border-foreground/5 border-t pt-6">
                      <Avatar className="h-11 w-11">
                        <Avatar.Fallback className="bg-gradient-to-br from-aura-aquamarine to-emerald-600 font-semibold text-white text-xs">
                          {testimonial.avatar}
                        </Avatar.Fallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <Chip className="mt-0.5 h-auto border-none bg-aura-aquamarine/10 px-2 py-0.5 font-medium text-aura-aquamarine text-xs">
                          {testimonial.role}
                        </Chip>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
