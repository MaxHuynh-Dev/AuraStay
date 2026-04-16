'use client';

import { ROUTER } from '@Constants/router';
import Link from 'next/link';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';

function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-netlink-dark/95 shadow-black/20 shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-1">
          <span className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-white tracking-tight">
            Net
          </span>
          <span className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-netlink-green tracking-tight">
            Link
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {ROUTER.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-5 py-2 font-medium text-sm text-white/70 transition-colors duration-300 hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="-translate-x-1/2 absolute bottom-0 left-1/2 h-[2px] w-0 bg-netlink-green transition-all duration-300 group-hover:w-6" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-sm bg-netlink-green px-6 font-semibold text-netlink-dark text-sm transition-all duration-300 hover:bg-netlink-green-dark hover:shadow-lg hover:shadow-netlink-green/20"
          >
            <span>GET IN TOUCH</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-white/5 lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex w-6 flex-col items-end gap-[5px]">
            <span
              className={`h-[2px] rounded-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'w-full translate-y-[7px] rotate-45' : 'w-full'
              }`}
            />
            <span
              className={`h-[2px] rounded-full bg-netlink-green transition-all duration-300 ${
                isMobileMenuOpen ? 'w-full opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-[2px] rounded-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-[7px] -rotate-45 w-full' : 'w-full'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-netlink-dark/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {ROUTER.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="font-semibold text-2xl text-white transition-all duration-300 hover:text-netlink-green"
              style={{
                transitionDelay: isMobileMenuOpen ? `${String(index * 50)}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(16px)'
              }}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="mt-6 transition-all duration-300"
            style={{
              transitionDelay: isMobileMenuOpen ? `${String(ROUTER.length * 50)}ms` : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(16px)'
            }}
          >
            <Link
              href="/contact"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-netlink-green px-8 font-semibold text-base text-netlink-dark transition-all duration-300 hover:bg-netlink-green-dark"
            >
              <span>GET IN TOUCH</span>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
