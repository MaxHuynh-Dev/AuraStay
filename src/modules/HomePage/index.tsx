'use client';

import { Container } from '@Components/Container';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useRef, useState } from 'react';

/* ─── Partner Logos Data ─── */
const partners = [
  'Veeam',
  'Citrix',
  'VMware',
  'Dell Technologies',
  'HP Enterprise',
  'Microsoft',
  'Cisco',
  'Fortinet'
];

/* ─── Services Tabs Data ─── */
const serviceTabs = [
  {
    id: '01',
    title: 'Multichannel Commerce',
    description:
      'We support you from the initial analysis to the implementation of your commerce project and develop your individual solution for a successful omnichannel strategy.',
    features: ['E-Commerce Platform', 'PIM Systems', 'ERP Integration', 'Analytics Dashboard']
  },
  {
    id: '02',
    title: 'Business Intelligence',
    description:
      'Transform your raw data into actionable insights with our comprehensive BI solutions. We help you make data-driven decisions that accelerate growth.',
    features: [
      'Data Warehousing',
      'Report Automation',
      'Predictive Analytics',
      'Real-time Dashboards'
    ]
  },
  {
    id: '03',
    title: 'Cloud Architecture',
    description:
      'Design and deploy scalable cloud infrastructure that grows with your business. Our architects ensure high availability, security, and cost optimization.',
    features: ['Cloud Migration', 'Hybrid Solutions', 'Auto-Scaling', 'Cost Management']
  },
  {
    id: '04',
    title: 'Managed Services',
    description:
      'Focus on your core business while we handle your IT infrastructure. Our 24/7 managed services ensure uptime, security, and performance.',
    features: ['24/7 Monitoring', 'Incident Response', 'Patch Management', 'Performance Tuning']
  },
  {
    id: '05',
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with enterprise-grade security solutions. From threat detection to compliance, we keep your business safe.',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Training']
  },
  {
    id: '06',
    title: 'Digital Transformation',
    description:
      'Modernize your business processes with cutting-edge digital solutions. We guide your transformation journey from strategy to execution.',
    features: ['Process Automation', 'Legacy Modernization', 'API Integration', 'Change Management']
  },
  {
    id: '07',
    title: 'IT Consulting',
    description:
      'Get expert guidance on technology decisions that matter. Our consultants bring decades of experience across industries and technologies.',
    features: ['Technology Assessment', 'Roadmap Planning', 'Vendor Selection', 'ROI Analysis']
  }
];

/* ─── Industry Solutions Data ─── */
const industrySolutions = [
  {
    title: 'IT for Healthcare',
    description:
      'Secure, compliant IT infrastructure tailored for healthcare organizations and patient data management.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    )
  },
  {
    title: 'IT for Business & Law',
    description:
      'Robust solutions for legal firms and business enterprises requiring strict data governance and compliance.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    )
  },
  {
    title: 'IT for Finance',
    description:
      'High-performance, secure IT systems for financial institutions requiring real-time processing and compliance.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    )
  },
  {
    title: 'IT for Laboratories',
    description:
      'Specialized IT solutions for research labs and scientific institutions with custom data processing needs.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l.8 2.685a1.125 1.125 0 01-1.087 1.437H4.487a1.125 1.125 0 01-1.087-1.437L4.2 15.3"
        />
      </svg>
    )
  },
  {
    title: 'IT for SME',
    description:
      'Scalable, cost-effective IT solutions designed specifically for small and medium-sized enterprises.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    )
  }
];

/* ─── Core Services Data ─── */
const coreServices = [
  {
    title: 'Private Cloud',
    description:
      'Dedicated cloud infrastructure with maximum control and security for your critical workloads.'
  },
  {
    title: 'Digital Workspace',
    description: 'Modern workplace solutions enabling flexible, secure remote work from anywhere.'
  },
  {
    title: 'Colocation',
    description: 'World-class data center hosting with redundant power, cooling, and connectivity.'
  },
  {
    title: 'Endpoint Management',
    description: 'Centralized management and security for all your devices across the organization.'
  },
  {
    title: 'Managed IT',
    description: 'Comprehensive IT management so you can focus on growing your business.'
  },
  {
    title: 'Microsoft 365',
    description: 'Expert deployment, migration, and management of your Microsoft 365 environment.'
  },
  {
    title: 'Infrastructure as a Service',
    description: 'Scalable, on-demand infrastructure without the complexity of physical hardware.'
  },
  {
    title: 'Backup as a Service',
    description:
      'Automated, secure backup solutions protecting your data against loss and ransomware.'
  }
];

function HomePage(): React.ReactElement {
  const [activeTab, setActiveTab] = useState(0);
  const aboutRef = useRef<HTMLElement>(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.1, margin: '0px 0px -50px 0px' });

  const servicesRef = useRef<HTMLElement>(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
    margin: '0px 0px -50px 0px'
  });

  const industryRef = useRef<HTMLElement>(null);
  const industryInView = useInView(industryRef, {
    once: true,
    amount: 0.1,
    margin: '0px 0px -50px 0px'
  });

  const coreRef = useRef<HTMLElement>(null);
  const coreInView = useInView(coreRef, { once: true, amount: 0.1, margin: '0px 0px -50px 0px' });

  const ctaRef = useRef<HTMLElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.1, margin: '0px 0px -50px 0px' });

  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-screen overflow-hidden bg-netlink-dark">
        {/* Tech grid pattern overlay */}
        <div className="tech-grid-pattern pointer-events-none absolute inset-0" />
        <div className="circuit-pattern pointer-events-none absolute inset-0" />

        {/* Animated glow effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="-left-32 absolute top-1/4 h-[500px] w-[500px] animate-pulse-glow rounded-full bg-netlink-green/5 blur-[128px]" />
          <div className="-right-32 absolute bottom-1/4 h-[400px] w-[400px] animate-pulse-glow rounded-full bg-netlink-green/3 blur-[128px] [animation-delay:1.5s]" />
        </div>

        {/* Content */}
        <Container className="relative z-10 flex min-h-screen max-w-[1440px] items-end pt-32 pb-20 lg:items-center lg:pt-0 lg:pb-0">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left - Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="animate-slide-up font-[family-name:var(--font-raleway)] font-bold text-5xl text-white leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[82px]">
                SIMPLY
                <br />
                SOLVING
                <br />
                <span className="text-netlink-green">THE FUTURE</span>
              </h1>

              <p className="mt-8 max-w-md animate-slide-up text-base text-white/60 leading-relaxed [animation-delay:200ms]">
                We close the gap between product life-cycle management and the real production world
                with cutting-edge IT solutions.
              </p>

              <div className="mt-10 flex animate-slide-up items-center gap-4 [animation-delay:400ms]">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center gap-3 bg-netlink-green px-8 font-semibold text-netlink-dark text-sm transition-all duration-300 hover:bg-netlink-green-dark hover:shadow-lg hover:shadow-netlink-green/20"
                >
                  <span>Talk to an Expert</span>
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
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center px-6 font-medium text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  Our Services →
                </Link>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative h-[400px] w-[340px] overflow-hidden sm:h-[500px] sm:w-[420px] lg:h-[600px] lg:w-[500px]">
                {/* Green accent border */}
                <div className="-right-2 -bottom-2 absolute h-full w-full border-2 border-netlink-green/20" />
                <Image
                  src="/images/hero-portrait.png"
                  alt="NetLink IT Solutions - Professional team"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 340px, (max-width: 1024px) 420px, 500px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-netlink-dark/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-netlink-dark to-transparent" />
      </section>

      {/* ═══════════════════ PARTNERS LOGO BAR ═══════════════════ */}
      <section className="relative overflow-hidden border-white/5 border-y bg-netlink-darker py-8">
        <Container>
          <p className="mb-6 text-center font-medium text-white/30 text-xs uppercase tracking-[0.2em]">
            Trusted Technology Partners
          </p>
        </Container>
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-netlink-darker to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-netlink-darker to-transparent" />

          {/* Marquee track */}
          <div className="marquee-track flex items-center">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${String(i)}`}
                className="mx-10 flex-shrink-0 font-semibold text-lg text-white/20 tracking-wider transition-colors duration-300 hover:text-white/50"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT SECTION ═══════════════════ */}
      <section id="about-section" ref={aboutRef} className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div
              className={`transition-all duration-700 ${
                aboutInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="font-semibold text-netlink-green text-xs uppercase tracking-[0.2em]">
                About NetLink
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-raleway)] font-bold text-3xl text-netlink-dark leading-tight sm:text-4xl lg:text-5xl">
                We close the gap between product life-cycle management and the real production world
              </h2>
              <div className="mt-4 h-1 w-16 bg-netlink-green" />
            </div>

            {/* Right */}
            <div
              className={`transition-all delay-200 duration-700 ${
                aboutInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <p className="text-base text-gray-600 leading-relaxed">
                With over a decade of experience in IT solutions, NetLink bridges the gap between
                technology and business success. Our team of certified experts delivers tailored
                solutions that drive efficiency, security, and growth for organizations of all
                sizes.
              </p>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                From cloud infrastructure to endpoint management, we provide end-to-end IT services
                that transform how businesses operate in the digital age.
              </p>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-netlink-dark text-sm transition-colors duration-300 hover:text-netlink-green"
              >
                Learn more about us
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
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SERVICES OVERVIEW (TABS) ═══════════════════ */}
      <section id="services-tabs" ref={servicesRef} className="bg-gray-50 py-24 lg:py-32">
        <Container>
          <div
            className={`mb-16 transition-all duration-700 ${
              servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="font-semibold text-netlink-green text-xs uppercase tracking-[0.2em]">
              What We Do
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-raleway)] font-bold text-3xl text-netlink-dark sm:text-4xl">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Tab Navigation */}
            <div className="lg:col-span-4">
              <div className="flex flex-row gap-2 overflow-x-auto pb-4 lg:flex-col lg:gap-1 lg:overflow-x-visible lg:pb-0">
                {serviceTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(index);
                    }}
                    className={`group flex flex-shrink-0 cursor-pointer items-center gap-4 rounded-lg px-5 py-4 text-left transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-netlink-dark text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span
                      className={`font-bold text-xs ${
                        activeTab === index ? 'text-netlink-green' : 'text-gray-300'
                      }`}
                    >
                      {tab.id}
                    </span>
                    <span className="whitespace-nowrap font-semibold text-sm lg:whitespace-normal">
                      {tab.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-8">
              <div
                className={`rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 lg:p-12 ${
                  servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-bold text-4xl text-netlink-green/20">
                    {serviceTabs[activeTab].id}
                  </span>
                  <div>
                    <h3 className="font-bold text-netlink-dark text-xl sm:text-2xl">
                      {serviceTabs[activeTab].title}
                    </h3>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                      {serviceTabs[activeTab].description}
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {serviceTabs[activeTab].features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-netlink-green/10">
                            <svg
                              className="h-3 w-3 text-netlink-green"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="group mt-8 inline-flex items-center gap-2 font-semibold text-netlink-dark text-sm transition-colors hover:text-netlink-green"
                    >
                      Learn more
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ INDUSTRY SPECIFIC SOLUTIONS ═══════════════════ */}
      <section id="industry-solutions" ref={industryRef} className="bg-white py-24 lg:py-32">
        <Container>
          <div
            className={`mb-16 transition-all duration-700 ${
              industryInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="font-semibold text-netlink-green text-xs uppercase tracking-[0.2em]">
              Our Expertise
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-raleway)] font-bold text-3xl text-netlink-dark sm:text-4xl">
              Industry Specific Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base text-gray-600">
              We understand that every industry has unique challenges. Our specialized solutions are
              designed to meet the specific needs of your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`group hover:-translate-y-1 cursor-pointer rounded-xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-netlink-green/20 hover:shadow-netlink-green/5 hover:shadow-xl ${
                  industryInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${String(index * 100)}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-netlink-dark/5 text-netlink-dark transition-colors duration-300 group-hover:bg-netlink-green/10 group-hover:text-netlink-green">
                  {solution.icon}
                </div>
                <h3 className="font-bold text-lg text-netlink-dark">{solution.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                <div className="mt-6 flex items-center gap-2 font-semibold text-netlink-dark text-sm transition-colors duration-300 group-hover:text-netlink-green">
                  <span>Learn more</span>
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
                </div>
              </div>
            ))}

            {/* See All CTA Card */}
            <div className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-netlink-green/30 border-dashed bg-netlink-green/5 p-8 transition-all duration-300 hover:border-netlink-green/60 hover:bg-netlink-green/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-netlink-green/20 text-netlink-green transition-all duration-300 group-hover:scale-110">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-netlink-dark">See All Solutions</span>
              <span className="mt-1 text-gray-500 text-sm">Explore our full catalog</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ CORE SERVICES GRID ═══════════════════ */}
      <section
        id="core-services"
        ref={coreRef}
        className="relative overflow-hidden bg-netlink-dark py-24 lg:py-32"
      >
        {/* Background patterns */}
        <div className="tech-grid-pattern pointer-events-none absolute inset-0" />

        <Container className="relative z-10 max-w-[1440px]">
          {/* Section header */}
          <div
            className={`mb-6 text-center transition-all duration-700 ${
              coreInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="font-semibold text-netlink-green text-xs uppercase tracking-[0.2em]">
              Our Solutions
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-raleway)] font-bold text-3xl text-white leading-tight sm:text-4xl">
              We close the gap between product life-cycle management and the real production world
            </h2>
            <Link
              href="/contact"
              className="group mt-8 inline-flex h-12 items-center gap-3 bg-netlink-green px-8 font-semibold text-netlink-dark text-sm transition-all duration-300 hover:bg-netlink-green-dark"
            >
              <span>Talk to an Expert</span>
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

          {/* Scrollable cards */}
          <div className="mt-16 overflow-x-auto pb-4">
            <div className="flex gap-5" style={{ minWidth: 'max-content' }}>
              {coreServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`group hover:-translate-y-1 w-[280px] flex-shrink-0 cursor-pointer rounded-xl border border-netlink-border bg-netlink-card p-7 transition-all duration-500 hover:border-netlink-green/30 hover:bg-netlink-card-hover ${
                    coreInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${String(index * 80)}ms` }}
                >
                  {/* Service icon placeholder */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-netlink-green/10">
                    <svg
                      className="h-8 w-8 text-netlink-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>

                  <h3 className="font-bold text-lg text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-medium text-netlink-green text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Explore</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section id="cta-section" ref={ctaRef} className="bg-white py-24 lg:py-32">
        <Container
          className={`max-w-[1440px] text-center transition-all duration-700 ${
            ctaInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="font-[family-name:var(--font-raleway)] font-bold text-3xl text-netlink-dark sm:text-4xl lg:text-5xl">
            Ready to Maximize Your
            <br />
            <span className="text-netlink-green">IT Potential?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600">
            Let{"'"}s discuss how NetLink can transform your IT infrastructure and drive your
            business forward with tailored solutions.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex h-14 items-center gap-3 bg-netlink-dark px-10 font-semibold text-base text-white transition-all duration-300 hover:bg-netlink-darker hover:shadow-xl"
          >
            <span>Talk to an Expert</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
