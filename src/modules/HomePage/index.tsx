'use client';

import { AuraFooter } from '@Components/AuraFooter';
import { AuraNavbar } from '@Components/AuraNavbar';
import type React from 'react';
import { AuraHero } from './AuraHero';
import { AuraServices } from './AuraServices';
import { AuraTestimonials } from './AuraTestimonials';

function HomePage(): React.ReactElement {
  return (
    <main className="bg-aura-cream selection:bg-aura-aquamarine/30">
      <AuraNavbar />
      <AuraHero />
      <AuraServices />
      <AuraTestimonials />
      <AuraFooter />
    </main>
  );
}

export default HomePage;
