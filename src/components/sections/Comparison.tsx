import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Minus,
  TrendingUp,
  Users,
  ShieldCheck,
  Wallet,
  Landmark,
  Zap,
  MessageCircle,
  Phone,
  Target,
  Award,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const zones = [
  {
    id: 'freezone',
    name: 'Free Zone',
    short: 'FZ',
    icon: Globe,
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    glow: 'rgba(14,165,233,0.4)',
    accentText: 'text-sky-600',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1200&q=80',
    bestFor: 'International trade, online services, consulting',
    highlight: '100% ownership, tax benefits, no customs duties',
    limitation: 'Limited visas based on office size',
  },
  {
    id: 'mainland',
    name: 'Mainland',
    short: 'ML',
    icon: Building2,
    gradient: 'from-violet-400 via-purple-500 to-purple-600',
    glow: 'rgba(139,92,246,0.4)',
    accentText: 'text-violet-600',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-200',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    bestFor: 'Local retail, construction, restaurants, agencies',
    highlight: 'Full UAE market access, no trading restrictions',
    limitation: 'Higher visa eligibility needs more office space',
  },
];

const features = [
  {
    icon: Wallet,
    label: 'Ownership',
    freezone: { value: '100%', score: 100 },
    mainland: { value: '100%', score: 100 },
  },
  {
    icon: TrendingUp,
    label: 'Tax Benefits',
    freezone: { value: '0% - 9%', score: 90 },
    mainland: { value: '0% - 9%', score: 85 },
  },
  {
    icon: Target,
    label: 'UAE Market Access',
    freezone: { value: 'Limited', score: 40 },
    mainland: { value: 'Full', score: 100 },
  },
  {
    icon: Users,
    label: 'Visa Eligibility',
    freezone: { value: 'Limited', score: 60 },
    mainland: { value: 'High', score: 90 },
  },
  {
    icon: Landmark,
    label: 'Local Trade',
    freezone: { value: 'Restricted', score: 30 },
    mainland: { value: 'Unlimited', score: 100 },
  },
  {
    icon: Zap,
    label: 'Setup Speed',
    freezone: { value: '3-7 Days', score: 95 },
    mainland: { value: '2-4 Weeks', score: 50 },
  },
];

// ============ COMPONENT ============
export default function Comparison() {
  const [hoveredSide, setHoveredSide] = useState<'freezone' | 'mainland' | null>(null);

  return (
    <section
      id="comparison"
      className="relative py-14 md:py-20 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

      {/* Mesh blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-sky-100/50 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-100/50 blur-[150px] pointer-events-none" />

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
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
            <Sparkles size={14} className="text-brand-sky" />
            <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
              Structure Your Business Smartly
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
            What's Better for You —{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Free Zone or Mainland?</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                  stroke="url(#compUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="compUnderline" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed">
            The right company structure depends on where you plan to operate,
            how many visas you need, and your budget. Here's a quick breakdown.
          </p>
        </motion.div>

        {/* === COMPARISON CARDS — SPLIT === */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">

          {/* === CENTER VS BADGE (Desktop) === */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
              className="relative"
            >
              {/* Outer glow */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 blur-2xl"
              />
              {/* Circle */}
              <div className="relative w-20 h-20 rounded-full bg-white border-4 border-border shadow-2xl flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl tracking-tight">
                    VS
                  </span>
                </div>
              </div>
              {/* Sparkle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-3 -right-3"
              >
                <Sparkles size={24} className="text-amber-400" fill="currentColor" />
              </motion.div>
            </motion.div>
          </div>

          {/* === LEFT — FREE ZONE === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            onMouseEnter={() => setHoveredSide('freezone')}
            onMouseLeave={() => setHoveredSide(null)}
            className="group relative"
            style={{ perspective: '1500px' }}
          >
            {/* Hover glow */}
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-br from-sky-400 to-blue-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700" />

            {/* Card */}
            <div className="relative h-full rounded-[32px] bg-white border border-border overflow-hidden shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_30px_80px_rgba(14,165,233,0.2)] group-hover:-translate-y-2 transition-all duration-500">
              {/* Top gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600" />

              {/* === IMAGE HEADER === */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                  style={{ backgroundImage: `url(${zones[0].image})` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/85 via-blue-600/70 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Icon top left */}
                <div className="absolute top-5 left-5">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-white/40 blur-lg rounded-2xl" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                      <Globe size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                  </motion.div>
                </div>

                {/* Badge top right */}
                <div className="absolute top-5 right-5">
                  <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/25 backdrop-blur-xl border border-white/40 text-white">
                    International
                  </span>
                </div>

                {/* Number watermark */}
                <div className="absolute bottom-3 right-4">
                  <span className="text-8xl font-black text-white/15 leading-none">
                    01
                  </span>
                </div>

                {/* Title bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight drop-shadow-lg mb-1.5">
                    Free Zone
                  </h3>
                  <p className="text-xs font-bold text-white/85 uppercase tracking-widest">
                    Best for Global Businesses
                  </p>
                </div>
              </div>

              {/* === CONTENT === */}
              <div className="relative p-7 md:p-8">
                {/* Best For */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center">
                      <Target size={12} className="text-sky-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest">
                      Best For
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#1E293B] leading-relaxed">
                    {zones[0].bestFor}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-border via-sky-200 to-transparent mb-5" />

                {/* Benefits */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={11} className="text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B] leading-snug">
                      {zones[0].highlight}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Minus size={11} className="text-amber-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#64748B] leading-snug">
                      {zones[0].limitation}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={getWhatsAppLink(
                    "Hi! I'm interested in setting up a Free Zone company in Dubai."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-sm font-black text-sky-600 hover:text-sky-700"
                >
                  Explore Free Zone Setup
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Corner deco */}
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-[0.05] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* === RIGHT — MAINLAND === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            onMouseEnter={() => setHoveredSide('mainland')}
            onMouseLeave={() => setHoveredSide(null)}
            className="group relative"
            style={{ perspective: '1500px' }}
          >
            {/* Hover glow */}
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-br from-violet-400 to-purple-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700" />

            {/* Card */}
            <div className="relative h-full rounded-[32px] bg-white border border-border overflow-hidden shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_30px_80px_rgba(139,92,246,0.2)] group-hover:-translate-y-2 transition-all duration-500">
              {/* Top gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-violet-400 via-purple-500 to-purple-600" />

              {/* === IMAGE HEADER === */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                  style={{ backgroundImage: `url(${zones[1].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/85 via-purple-600/70 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Icon top left */}
                <div className="absolute top-5 left-5">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-white/40 blur-lg rounded-2xl" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                      <Building2 size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                  </motion.div>
                </div>

                {/* Badge top right */}
                <div className="absolute top-5 right-5">
                  <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/25 backdrop-blur-xl border border-white/40 text-white">
                    Local Market
                  </span>
                </div>

                {/* Number watermark */}
                <div className="absolute bottom-3 right-4">
                  <span className="text-8xl font-black text-white/15 leading-none">
                    02
                  </span>
                </div>

                {/* Title bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight drop-shadow-lg mb-1.5">
                    Mainland
                  </h3>
                  <p className="text-xs font-bold text-white/85 uppercase tracking-widest">
                    Best for Local Growth
                  </p>
                </div>
              </div>

              {/* === CONTENT === */}
              <div className="relative p-7 md:p-8">
                {/* Best For */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-violet-50 border border-violet-200 flex items-center justify-center">
                      <Target size={12} className="text-violet-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">
                      Best For
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#1E293B] leading-relaxed">
                    {zones[1].bestFor}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-border via-violet-200 to-transparent mb-5" />

                {/* Benefits */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={11} className="text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B] leading-snug">
                      {zones[1].highlight}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Minus size={11} className="text-amber-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-[#64748B] leading-snug">
                      {zones[1].limitation}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={getWhatsAppLink(
                    "Hi! I'm interested in setting up a Mainland company in Dubai."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-sm font-black text-violet-600 hover:text-violet-700"
                >
                  Explore Mainland Setup
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Corner deco */}
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 opacity-[0.05] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* === FEATURE COMPARISON TABLE === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl bg-white border border-border shadow-[0_15px_50px_rgba(15,23,42,0.08)] overflow-hidden mb-12"
        >
          {/* Top gradient line */}
          <div className="h-1 bg-gradient-to-r from-sky-400 via-violet-400 to-purple-600" />

          {/* Header */}
          <div className="relative p-6 md:p-8 border-b border-border">
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-4 md:col-span-4">
                <span className="text-xs font-black text-[#64748B] uppercase tracking-widest">
                  Features
                </span>
              </div>
              <div className="col-span-4 md:col-span-4 text-center">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md">
                    <Globe size={14} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-black text-[#0A0F1F]">
                    Free Zone
                  </span>
                </div>
              </div>
              <div className="col-span-4 md:col-span-4 text-center">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-md">
                    <Building2 size={14} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-black text-[#0A0F1F]">
                    Mainland
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div>
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isWinnerFZ = feature.freezone.score > feature.mainland.score;
              const isWinnerML = feature.mainland.score > feature.freezone.score;
              const isTie = feature.freezone.score === feature.mainland.score;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className={`grid grid-cols-12 items-center gap-4 p-5 md:p-6 border-b border-border last:border-b-0 hover:bg-slate-50/50 transition-colors ${
                    i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
                  }`}
                >
                  {/* Feature label */}
                  <div className="col-span-4 md:col-span-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border border-border flex items-center justify-center shadow-sm flex-shrink-0">
                      <Icon size={16} className="text-[#475569]" strokeWidth={2.2} />
                    </div>
                    <span className="text-sm md:text-base font-black text-[#0A0F1F] leading-tight">
                      {feature.label}
                    </span>
                  </div>

                  {/* Free Zone value */}
                  <div className="col-span-4 md:col-span-4">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-black ${
                          isWinnerFZ
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-50 text-[#64748B] border border-border'
                        }`}
                      >
                        {isWinnerFZ && (
                          <CheckCircle2 size={12} className="text-emerald-600" strokeWidth={3} />
                        )}
                        {feature.freezone.value}
                      </div>
                      {/* Progress bar */}
                      <div className="w-full max-w-[120px] h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${feature.freezone.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            isWinnerFZ
                              ? 'from-emerald-400 to-teal-500'
                              : 'from-sky-400 to-blue-500'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mainland value */}
                  <div className="col-span-4 md:col-span-4">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-black ${
                          isWinnerML
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-50 text-[#64748B] border border-border'
                        }`}
                      >
                        {isWinnerML && (
                          <CheckCircle2 size={12} className="text-emerald-600" strokeWidth={3} />
                        )}
                        {feature.mainland.value}
                      </div>
                      <div className="w-full max-w-[120px] h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${feature.mainland.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            isWinnerML
                              ? 'from-emerald-400 to-teal-500'
                              : 'from-violet-400 to-purple-500'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* === BOTTOM CTA === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80)',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0B1F3A]/90 to-[#0A1628]/75" />

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Glow accents */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/20 blur-[120px]" />

          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-6 right-8 opacity-15 hidden md:block"
          >
            <Award size={100} className="text-white" />
          </motion.div>

          <div className="relative p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <ShieldCheck size={28} className="text-white" strokeWidth={2.2} />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                  Still Not Sure Which One to Choose?
                </h3>
                <p className="text-sm md:text-base text-white/75 font-medium max-w-lg">
                  Get a free consultation. We'll analyze your business activity
                  and recommend the best structure for you.
                </p>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href={getWhatsAppLink(
                  "Hi! I need help deciding between Free Zone and Mainland. Can we discuss?"
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A1628] font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Talk to an Expert
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+971566556645"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}