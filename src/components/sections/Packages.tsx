import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Sparkles,
  ArrowRight,
  Star,
  Crown,
  Building2,
  Globe,
  MessageCircle,
  Phone,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const packages = [
  {
    id: 'freezone',
    name: 'Free Zone License',
    badge: null,
    price: '5,999',
    currency: 'AED',
    period: 'one-time',
    tagline: 'Perfect for freelancers & remote businesses',
    icon: Building2,
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    glowColor: 'rgba(14,165,233,0.3)',
    accentText: 'text-sky-600',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    iconBg: 'from-sky-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    features: [
      '5 Free Business Activities',
      '100% Ownership',
      '0% Personal & Income Tax',
      'Low Corporate Tax',
      'Free Consultation',
      'Lowest Price Guarantee',
    ],
    cta: 'Get Started Now',
    highlighted: false,
  },
  {
    id: 'freezone-residency',
    name: 'Free Zone with Residency',
    badge: 'Most Popular',
    price: '11,999',
    currency: 'AED',
    period: 'one-time',
    tagline: 'Best for entrepreneurs relocating to Dubai',
    icon: Globe,
    gradient: 'from-violet-400 via-purple-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.4)',
    accentText: 'text-violet-600',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-200',
    iconBg: 'from-violet-400 to-purple-600',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    features: [
      'All-Inclusive Free Zone License',
      '5 Free Business Activities',
      '100% Ownership',
      '0% Personal & Income Tax',
      'Low Corporate Tax',
      'Free Consultation',
      'Free Lease Agreement',
      '1 UAE Residency / Investor Visa',
      'Medical, Emirates ID, Status Change',
    ],
    cta: 'Get Started Now',
    highlighted: true,
  },
  {
    id: 'mainland-residency',
    name: 'Mainland with Residency',
    badge: 'Best Value',
    price: '16,999',
    currency: 'AED',
    period: 'one-time',
    tagline: 'For businesses targeting local UAE market',
    icon: Crown,
    gradient: 'from-amber-400 via-orange-500 to-orange-600',
    glowColor: 'rgba(245,158,11,0.4)',
    accentText: 'text-amber-600',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    iconBg: 'from-amber-400 to-orange-600',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    features: [
      'Mainland License',
      '100% Ownership',
      '0% Personal & Income Tax',
      'Low Corporate Tax',
      'Free Consultation',
      '1 UAE Residency / Investor Visa',
      'Medical, Emirates ID, Status Change',
    ],
    cta: 'Get Started Now',
    highlighted: false,
  },
];

// ============ COMPONENT ============
export default function Packages() {
  const [period, setPeriod] = useState<'one-time' | 'installment'>('one-time');

  return (
    <section
      id="packages"
      className="relative py-14 md:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white" />

      {/* Mesh blobs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-sky-100/50 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-violet-100/50 blur-[150px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* === SECTION HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
            <Sparkles size={14} className="text-brand-sky" />
            <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
              Our Packages
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
            Transparent Pricing,{' '}
            <span className="relative inline-block">
              <span className="gradient-text">No Hidden Fees</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                  stroke="url(#pkgUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="pkgUnderline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8">
            Choose the package that fits your business. All prices are
            all-inclusive — no hidden costs, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-border shadow-soft">
            <button
              onClick={() => setPeriod('one-time')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                period === 'one-time'
                  ? 'text-white'
                  : 'text-[#64748B] hover:text-[#0A0F1F]'
              }`}
            >
              {period === 'one-time' && (
                <motion.div
                  layoutId="togglePill"
                  className="absolute inset-0 bg-gradient-brand rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">One-time Payment</span>
            </button>
            <button
              onClick={() => setPeriod('installment')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                period === 'installment'
                  ? 'text-white'
                  : 'text-[#64748B] hover:text-[#0A0F1F]'
              }`}
            >
              {period === 'installment' && (
                <motion.div
                  layoutId="togglePill"
                  className="absolute inset-0 bg-gradient-brand rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">Installments</span>
            </button>
          </div>
        </motion.div>

        {/* === PACKAGES GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isHighlighted = pkg.highlighted;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  type: 'spring',
                  stiffness: 70,
                }}
                className={`group relative ${
                  isHighlighted ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              >
                {/* Hover glow */}
                <div
                  className="absolute -inset-2 rounded-[36px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
                  style={{ background: pkg.glowColor }}
                />

                {/* Highlighted glow (always on) */}
                {isHighlighted && (
                  <div
                    className="absolute -inset-2 rounded-[36px] opacity-60 blur-2xl"
                    style={{ background: pkg.glowColor }}
                  />
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-[28px] bg-white overflow-hidden transition-all duration-500 group-hover:-translate-y-2 ${
                    isHighlighted
                      ? 'border-2 border-violet-300 shadow-[0_25px_80px_rgba(139,92,246,0.25)]'
                      : 'border border-border shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)]'
                  }`}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${pkg.gradient}`} />

                  {/* === IMAGE HEADER === */}
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    />
                    {/* Gradient overlay matching package color */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-65 mix-blend-multiply`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                    {/* Dot pattern */}
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                      }}
                    />

                    {/* Icon — overlapping bottom */}
                    <div className="absolute -bottom-6 left-6 z-10">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.iconBg} blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                        />
                        <div
                          className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.iconBg} flex items-center justify-center shadow-xl ring-4 ring-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                        >
                          <Icon size={24} className="text-white" strokeWidth={2.2} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-7 md:p-8 pt-10">
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-4 right-5 z-20">
                        <div
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${pkg.gradient} shadow-lg`}
                        >
                          {pkg.badge === 'Most Popular' && (
                            <Star size={11} className="text-white" strokeWidth={3} fill="white" />
                          )}
                          {pkg.badge === 'Best Value' && (
                            <BadgeCheck size={11} className="text-white" strokeWidth={3} />
                          )}
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">
                            {pkg.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Name */}
                    <h3 className="text-2xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-2">
                      {pkg.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-6">
                      {pkg.tagline}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                        Starting from
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-black text-[#64748B]">
                        {pkg.currency}
                      </span>
                      <span className="text-5xl md:text-6xl font-black text-[#0A0F1F] leading-none tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-7">
                      {period === 'one-time'
                        ? 'One-time payment'
                        : `Or 3x ${pkg.currency} ${Math.ceil(
                            parseInt(pkg.price.replace(',', '')) / 3
                          ).toLocaleString()}`}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-6" />

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-5 h-5 rounded-full ${pkg.accentBg} ${pkg.accentBorder} border flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            <Check
                              size={11}
                              className={pkg.accentText}
                              strokeWidth={3.5}
                            />
                          </div>
                          <span className="text-sm font-semibold text-[#1E293B] leading-snug">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={getWhatsAppLink(
                        `Hi! I'm interested in the "${pkg.name}" package (${pkg.currency} ${pkg.price}). Please share more details.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className={`group/btn relative flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 overflow-hidden ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                          : `bg-white border-2 ${pkg.accentBorder} ${pkg.accentText} hover:bg-gradient-to-r hover:${pkg.gradient} hover:text-white hover:border-transparent hover:scale-105`
                      }`}
                    >
                      <span className="relative flex items-center gap-2">
                        {pkg.cta}
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* === BOTTOM CTA — Custom Package === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/85 to-[#0A1628]/70" />

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Floating icons */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-6 right-8 opacity-20 hidden md:block"
          >
            <Crown size={80} className="text-white" />
          </motion.div>

          <div className="relative p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left — Icon + Text */}
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <ShieldCheck size={26} className="text-white" strokeWidth={2.2} />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1.5">
                  Need a Custom Package?
                </h3>
                <p className="text-sm text-white/80 font-medium">
                  We'll tailor a package to your exact business needs — Mainland, Free Zone, or Offshore.
                </p>
              </div>
            </div>

            {/* Right — CTAs */}
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href={getWhatsAppLink(
                  "Hi! I need a custom package for my UAE business setup."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A1628] font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Get Custom Quote
              </a>
              <a
                href="tel:+971566556645"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* === TRUST LINE === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm font-semibold text-[#475569]"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
              <Check size={11} className="text-emerald-600" strokeWidth={3.5} />
            </div>
            No Hidden Fees
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center">
              <Check size={11} className="text-sky-600" strokeWidth={3.5} />
            </div>
            Transparent Pricing
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center">
              <Check size={11} className="text-violet-600" strokeWidth={3.5} />
            </div>
            FTA Compliant
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center">
              <Check size={11} className="text-amber-600" strokeWidth={3.5} />
            </div>
            Free Consultation
          </div>
        </motion.div>
      </div>
    </section>
  );
}