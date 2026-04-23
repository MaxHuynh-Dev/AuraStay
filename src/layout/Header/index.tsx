'use client';

import { cn } from '@Lib/utils';
import { Button, Drawer, Separator, useOverlayState } from '@heroui/react';
import { linkVariants } from '@heroui/styles';
import { Menu } from 'lucide-react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

const MENU_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' }
];

function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenu = useOverlayState();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 right-0 left-0 z-50 mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl px-6 py-3.5 transition-all duration-500 md:px-10',
        isScrolled
          ? 'mt-2 border border-white/15 bg-black/30 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      {/* Logo */}
      <NextLink href="/" className="group flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aura-aquamarine to-emerald-500 shadow-aura-aquamarine/20 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <span className="font-extrabold text-sm text-white">A</span>
        </div>
        <span className="font-bold text-white text-xl tracking-tight drop-shadow-md">
          Aura<span className="text-aura-aquamarine">Stay</span>
        </span>
      </NextLink>

      {/* Desktop Menu */}
      <ul className="hidden items-center gap-1 md:flex">
        {MENU_ITEMS.map((item) => (
          <li key={item.href}>
            <NextLink
              href={item.href}
              className={cn(
                linkVariants().base(),
                'relative rounded-lg px-4 py-2 font-medium text-white/75 no-underline transition-all duration-300 hover:bg-white/10 hover:text-white'
              )}
            >
              {item.label}
            </NextLink>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="primary"
          size="sm"
          className="hidden bg-aura-aquamarine font-semibold text-white shadow-aura-aquamarine/25 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-aura-aquamarine/40 hover:shadow-xl sm:flex"
        >
          Book Now
        </Button>

        {/* Mobile Menu Toggle */}
        <Drawer state={mobileMenu}>
          <Button
            variant="ghost"
            isIconOnly
            className="text-white md:hidden"
            onPress={() => mobileMenu.open()}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Drawer.Backdrop variant="blur">
            <Drawer.Content placement="right">
              <Drawer.Dialog className="max-w-[320px] bg-[#0a1a14]/95 text-white backdrop-blur-2xl">
                <Drawer.CloseTrigger className="text-white/60 hover:text-white" />

                <Drawer.Header className="pb-2">
                  <Drawer.Heading className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-aura-aquamarine to-emerald-500">
                      <span className="font-extrabold text-white text-xs">A</span>
                    </div>
                    <span className="font-bold text-lg text-white">
                      Aura<span className="text-aura-aquamarine">Stay</span>
                    </span>
                  </Drawer.Heading>
                </Drawer.Header>

                <Separator className="bg-white/10" />

                <Drawer.Body className="py-6">
                  <ul className="flex flex-col gap-1">
                    {MENU_ITEMS.map((item) => (
                      <li key={item.href}>
                        <NextLink
                          href={item.href}
                          onClick={() => mobileMenu.close()}
                          className="flex items-center rounded-xl px-4 py-3 font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-aura-aquamarine"
                        >
                          {item.label}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </Drawer.Body>

                <Separator className="bg-white/10" />

                <Drawer.Footer className="flex-col gap-3 pt-4">
                  <Button
                    variant="primary"
                    fullWidth
                    className="bg-aura-aquamarine font-semibold text-white shadow-aura-aquamarine/25 shadow-lg"
                    onPress={() => mobileMenu.close()}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    className="border-white/20 font-semibold text-white hover:bg-white/10"
                    onPress={() => mobileMenu.close()}
                  >
                    Login / Sign Up
                  </Button>
                </Drawer.Footer>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </nav>
  );
}

export default Header;
