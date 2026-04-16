'use client';

import type React from 'react';
import { AuraHero } from './AuraHero';
import { AuraServices } from './AuraServices';
import { AuraTestimonials } from './AuraTestimonials';

function HomePage(): React.ReactElement {
  return (
    <main className="bg-aura-cream selection:bg-aura-aquamarine/30">
      <AuraHero />
      <AuraServices />
      <AuraTestimonials />
    </main>
  );
}

export default HomePage;
