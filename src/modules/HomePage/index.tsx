import type React from 'react';
import { AuraAbout } from './AuraAbout';
import { AuraGallery } from './AuraGallery';
import { AuraHero } from './AuraHero';
import { AuraServices } from './AuraServices';
import { AuraTestimonials } from './AuraTestimonials';

function HomePage(): React.ReactElement {
  return (
    <main className="bg-aura-cream selection:bg-aura-aquamarine/30">
      <AuraHero />
      <AuraAbout />
      <AuraServices />
      <AuraGallery />
      <AuraTestimonials />
    </main>
  );
}

export default HomePage;
