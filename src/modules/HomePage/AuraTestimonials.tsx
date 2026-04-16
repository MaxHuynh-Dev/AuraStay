'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Eleanor Vance',
    role: 'Travel Journalist',
    content:
      'AuraStay redefined my concept of luxury. The attention to detail and the seamless connection with nature is truly breathtaking.',
    rating: 5
  },
  {
    name: 'Julian Thorne',
    role: 'CEO, Horizon Ventures',
    content:
      'The perfect escape for the modern professional. The refined atmosphere and flawless service allowed me to truly disconnect.',
    rating: 5
  },
  {
    name: 'Sophia Chen',
    role: 'Luxury Lifestyle Blogger',
    content:
      'From the sunset at the infinity pool to the curated dining experience, every moment felt like a cinematic masterpiece.',
    rating: 5
  }
];

export const AuraTestimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-bold text-aura-gold text-sm uppercase tracking-[0.2em]"
          >
            Guest Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-bold font-outfit text-4xl text-foreground tracking-tight"
          >
            Memories of AuraStay
          </motion.h2>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="embla__slide min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-aura-border/30 bg-aura-cream p-10 shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  <Quote className="absolute top-6 right-8 h-12 w-12 text-aura-aquamarine/10 transition-colors group-hover:text-aura-aquamarine/20" />

                  <div>
                    <div className="mb-6 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i.toString()}
                          className="h-4 w-4 fill-aura-gold text-aura-gold"
                        />
                      ))}
                    </div>
                    <p className="mb-8 font-light text-foreground/80 text-xl italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold font-outfit text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="font-medium text-aura-aquamarine text-sm tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
