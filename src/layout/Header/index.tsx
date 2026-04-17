'use client';

import { cn } from '@Lib/utils';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MENU_ITEMS = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Services', href: '#services' },
  { label: 'Booking', href: '#booking' },
  { label: 'About Us', href: '#about' }
];

function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-50 mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500 md:px-12',
        isScrolled
          ? 'mt-2 border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      {/* Logo */}
      <Link href="/" className="group flex items-center gap-2">
        <span className="font-bold font-outfit text-2xl text-white tracking-tight drop-shadow-md">
          Aura<span className="text-aura-aquamarine">Stay</span>
        </span>
      </Link>

      {/* Menu - Desktop */}
      <div className="hidden items-center gap-8 md:flex">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative font-medium text-white/80 transition-colors duration-300 hover:text-aura-aquamarine"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-aura-aquamarine transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-4">
        <Button className="font-semibold shadow-lg">Login / Sign Up</Button>
      </div>
    </nav>
  );
}

export default Header;
