import Link from 'next/link';
import type React from 'react';

function Footer(): React.ReactElement {
  return (
    <footer className="bg-foreground px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <span className="font-bold font-outfit text-2xl tracking-tight">AuraStay</span>
            </Link>
            <p className="font-light text-white/60 leading-relaxed">
              Redefining luxury through seamless resort experiences. Pure. Refined. Connected.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 font-bold font-outfit text-lg">Discover</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  The Spa
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  Cuisine
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  Adventures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold font-outfit text-lg">Company</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-aura-aquamarine">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold font-outfit text-lg">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>reservation@aurastay.com</li>
              <li>+1 (555) 789 1234</li>
              <li>123 Luxury Lane, Paradise Coast</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-white/10 border-t pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 AuraStay. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
