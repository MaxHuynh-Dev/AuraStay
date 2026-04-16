import Link from 'next/link';
import type React from 'react';

const footerLinks = {
  Solutions: [
    { label: 'Private Cloud', href: '#' },
    { label: 'Digital Workspace', href: '#' },
    { label: 'Colocation', href: '#' },
    { label: 'Endpoint Management', href: '#' }
  ],
  Services: [
    { label: 'Managed IT', href: '#' },
    { label: 'Microsoft 365', href: '#' },
    { label: 'IaaS', href: '#' },
    { label: 'BaaS', href: '#' }
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: '#' },
    { label: 'News', href: '#' }
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Support', href: '#' }
  ]
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
];

function Footer(): React.ReactElement {
  return (
    <footer className="relative bg-netlink-dark">
      {/* Top gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-netlink-green/40 to-transparent" />

      <div className="mx-auto max-w-[1440px] px-8 pt-20 pb-8 lg:px-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-12">
          {/* Brand section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-white tracking-tight">
                Net
              </span>
              <span className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-netlink-green tracking-tight">
                Link
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-white/50 leading-relaxed">
              Simply Solving The Future. We close the gap between product life-cycle management and
              the real production world.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-all duration-300 hover:bg-netlink-green/10 hover:text-netlink-green"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1 lg:col-span-2">
              <h3 className="font-semibold text-netlink-green text-sm uppercase tracking-wider">
                {title}
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-white/50 transition-colors duration-300 hover:text-white"
                    >
                      <span className="mr-0 w-0 overflow-hidden text-netlink-green opacity-0 transition-all duration-200 group-hover:mr-1.5 group-hover:w-3 group-hover:opacity-100">
                        →
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-white/5 border-t" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} NetLink IT Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
