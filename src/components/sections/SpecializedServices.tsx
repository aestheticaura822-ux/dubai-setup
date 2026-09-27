import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Receipt,
  CreditCard,
  Calculator,
  Megaphone,
  Code,
  Search,
  ShieldCheck,
  Crown,
  FileText,
  ArrowUpRight,
  Sparkles,
  Check,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Receipt,
  CreditCard,
  Calculator,
  Megaphone,
  Code,
  Search,
  ShieldCheck,
  Crown,
  FileText,
};

const services = [
  {
    slug: 'corporate-tax-vat',
    icon: 'Receipt',
    title: 'Corporate Tax & VAT',
    description: 'Expert tax advice, VAT registration, filing, and FTA compliance.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    gradient: 'from-emerald-400 to-teal-600',
    points: [
      'VAT registration & filing',
      'Corporate tax returns',
      'FTA audit support',
      'Tax advisory services',
      'Amendments & corrections',
    ],
  },
  {
    slug: 'bank-account',
    icon: 'CreditCard',
    title: 'Bank Account Opening',
    description: 'Open UAE business bank accounts with top-tier banks. Full KYC support.',
    image:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80',
    gradient: 'from-sky-400 to-blue-600',
    points: [
      'Mainland & Free Zone accounts',
      'KYC file preparation',
      'Bank interview scheduling',
      'Multi-currency setup (AED/USD)',
      'WPS & VAT account linking',
    ],
  },
  {
    slug: 'accounting',
    icon: 'Calculator',
    title: 'Accounting',
    description: 'Bookkeeping, payroll, audits, and reconciliation handled by experts.',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
    gradient: 'from-violet-400 to-purple-600',
    points: [
      'Daily bookkeeping',
      'WPS payroll processing',
      'VAT reconciliation',
      'Financial statements',
      'Audit preparation',
    ],
  },
  {
    slug: 'digital-marketing',
    icon: 'Megaphone',
    title: 'Digital Marketing',
    description: 'Custom campaigns, social media, and content strategy that converts.',
    image:
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
    gradient: 'from-pink-400 to-rose-600',
    points: [
      'Social media management',
      'Google & Meta Ads',
      'Content strategy',
      'Email marketing',
      'Analytics & reporting',
    ],
  },
  {
    slug: 'web-development',
    icon: 'Code',
    title: 'Web Development',
    description: 'Modern, responsive websites — landing pages to full e-commerce.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    gradient: 'from-amber-400 to-orange-600',
    points: [
      'Custom business websites',
      'E-commerce stores',
      'High-converting landing pages',
      'Mobile responsive design',
      'Speed optimization',
    ],
  },
  {
    slug: 'seo',
    icon: 'Search',
    title: 'SEO Services',
    description: 'On-page & off-page SEO, keyword targeting, and performance tracking.',
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80',
    gradient: 'from-lime-400 to-green-600',
    points: [
      'Keyword research',
      'On-page optimization',
      'Technical SEO audit',
      'Quality link building',
      'Local SEO (Google Maps)',
    ],
  },
  {
    slug: 'compliance',
    icon: 'ShieldCheck',
    title: 'Compliance Services',
    description: 'UBO filings, ESR reports, license renewals, and regulatory support.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    gradient: 'from-cyan-400 to-blue-600',
    points: [
      'UBO filings & updates',
      'ESR reports submission',
      'License renewals',
      'AML compliance',
      'Annual returns filing',
    ],
  },
  {
    slug: 'golden-visa',
    icon: 'Crown',
    title: 'Golden Visa Assistance',
    description: 'Get your 10-year UAE residency visa with full paperwork support.',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    gradient: 'from-yellow-400 to-amber-600',
    points: [
      'Investor Golden Visa',
      'Property owner category',
      'Entrepreneur visa',
      'Specialized talent visa',
      'Family sponsorship',
    ],
  },
  {
    slug: 'pro-services',
    icon: 'FileText',
    title: 'PRO Services',
    description: 'Emirates ID, labor cards, visa stamping, and company renewals.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    gradient: 'from-indigo-400 to-purple-600',
    points: [
      'Emirates ID processing',
      'Visa stamping & renewals',
      'Labor cards (MOHRE)',
      'Trade license renewals',
      'MOFA document attestation',
    ],
  },
];

function FlipCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        type: 'spring',
        stiffness: 80,
      }}
      className="group relative h-[380px]"
      style={{ perspective: '1500px' }}
    >
      {/* Glow */}
      <div
        className={`absolute -inset-1 rounded-[28px] bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
      />

      {/* Flip Container */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(0deg)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'rotateY(180deg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotateY(0deg)';
        }}
      >
        {/* === FRONT SIDE === */}
        <div
          className="absolute inset-0 rounded-[26px] bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Image */}
          <div className="relative h-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundColor: '#E2E8F0',
              }}
            />

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 mix-blend-multiply`}
            />

            {/* Dark gradient for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Icon badge */}
            <div className="absolute top-5 left-5">
              <div className="relative">
                <div className="absolute inset-0 bg-white/40 blur-md rounded-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                  <Icon size={24} className="text-white" strokeWidth={2.2} />
                </div>
              </div>
            </div>

            {/* Number */}
            <div className="absolute top-4 right-5">
              <span className="text-5xl font-black text-white/25 leading-none tracking-tight">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Title bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-black text-white leading-tight tracking-tight drop-shadow-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/85 font-medium leading-snug">
                {service.description}
              </p>
            </div>

            {/* Hover hint */}
            <div className="absolute top-5 right-5 translate-y-12 opacity-0 group-hover:opacity-0 transition-opacity">
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                Hover
              </span>
            </div>
          </div>
        </div>

        {/* === BACK SIDE === */}
        <div
          className="absolute inset-0 rounded-[26px] bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-6 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Top gradient line */}
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
          />

          {/* Corner deco */}
          <div
            className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.06] blur-2xl`}
          />

          {/* Header */}
          <div className="flex items-center gap-3 mb-5 relative">
            <div
              className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <Icon size={20} className="text-white" strokeWidth={2.2} />
            </div>
            <h3 className="text-base font-black text-[#0A0F1F] leading-tight tracking-tight">
              {service.title}
            </h3>
          </div>

          {/* Points List */}
          <div className="flex-1 space-y-2.5 mb-5">
            {service.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-2.5"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                >
                  <Check size={11} className="text-white" strokeWidth={3.5} />
                </div>
                <span className="text-sm font-semibold text-[#1E293B] leading-snug">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to={`/services/${service.slug}`}
            className="group/btn relative flex items-center justify-between pt-4 border-t border-border"
          >
            <span
              className={`text-sm font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
            >
              Read Full Details
            </span>
            <div
              className={`w-9 h-9 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md group-hover/btn:scale-110 transition-transform duration-300`}
            >
              <ArrowUpRight size={16} className="text-white" strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function SpecializedServices() {
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
      {/* Mesh bg */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-brand-sky/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-violet/8 blur-[140px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-border shadow-soft mb-6">
            <Sparkles size={14} className="text-brand-sky" />
            <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
              Specialized Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
            Focused on Your{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Success</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                  stroke="url(#specUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="specUnderline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-3">
            Beyond company formation — we offer a full suite of specialized services
            to keep your UAE business growing and compliant.
          </p>

          <p className="text-xs text-[#94A3B8] font-bold uppercase tracking-widest">
            ← Hover on card to see details →
          </p>
        </motion.div>

        {/* Grid — Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service, index) => (
            <FlipCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}