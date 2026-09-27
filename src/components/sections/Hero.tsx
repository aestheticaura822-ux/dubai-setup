import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Building2, Globe, CreditCard, Check } from 'lucide-react';

const floatingCards = [
  {
    icon: Building2,
    title: 'Free Zone License',
    price: 'AED 5,999',
    tag: 'Most Popular',
    tagColor: 'gold',
    delay: 0.8,
    position: { right: '0px', top: '20px' },
    z: 30,
  },
  {
    icon: Globe,
    title: 'Mainland Setup',
    price: 'AED 16,999',
    tag: 'Best Value',
    tagColor: 'sky',
    delay: 1.0,
    position: { right: '100px', top: '220px' },
    z: 20,
  },
  {
    icon: CreditCard,
    title: 'Bank Account',
    price: 'Fast Approval',
    tag: 'Quick',
    tagColor: 'violet',
    delay: 1.2,
    position: { right: '40px', top: '420px' },
    z: 10,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* === BACKGROUND LAYERS === */}

      {/* Layer 1: Video — FULL OPACITY (fix) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-bg-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Layer 2: Light overlay — SIRF LEFT SIDE (text ke peeche) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

      {/* Layer 3: Bottom fade (text ke liye) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />

      {/* Layer 4: Soft gradient blobs (halka) */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-brand-sky/15 blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-violet/15 blur-[140px] animate-float pointer-events-none" />

      {/* Layer 5: Dot grid (bahut halka) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #64748B 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at left center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at left center, black 20%, transparent 70%)',
        }}
      />

      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent" />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE — Text */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-border shadow-soft mb-8"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-brand-green opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-green" />
              </span>
              <Sparkles size={14} className="text-brand-sky" />
              <span className="text-xs font-semibold tracking-wide text-txt">
                Trusted by 500+ businesses across UAE
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-[#0A0F1F] drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]"
            >
              Launch Your
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">Dubai Business</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C60 3 120 2 180 4C220 5.5 260 7 298 10"
                    stroke="url(#underline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#0EA5E9" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              In Days, Not Months.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#1E293B] max-w-2xl leading-relaxed mb-10 font-semibold drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)]"
            >
              From company formation to visas, banking, and tax — we handle
              everything end-to-end so you can focus on growing your business
              in the UAE's thriving economy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-brand text-white font-bold text-base shadow-[0_10px_40px_rgba(14,165,233,0.4)] hover:shadow-[0_15px_60px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get Free Consultation</span>
                <ArrowRight
                  size={18}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#video"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/95 backdrop-blur-xl border border-border hover:border-brand-sky/40 hover:shadow-soft transition-all duration-300"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={16} className="text-white ml-0.5" fill="white" />
                </span>
                <span className="font-bold text-[#0A0F1F]">Watch 60s Overview</span>
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {['100% Ownership', '0% Personal Tax', 'Fast Licensing'].map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-border shadow-soft text-sm"
                >
                  <span className="w-4 h-4 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <Check size={10} className="text-brand-green" strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-[#1E293B]">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Mini avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i === 1 ? '#0EA5E9' : i === 2 ? '#8B5CF6' : i === 3 ? '#F59E0B' : '#10B981'
                      }, ${i === 1 ? '#3B82F6' : i === 2 ? '#EC4899' : i === 3 ? '#FBBF24' : '#059669'})`,
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-brand-gold">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="text-sm">{s}</span>
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#1E293B]">
                  <span className="text-[#0A0F1F]">4.9/5</span> from 75+ reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — Floating Cards */}
          <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
            {/* Big cloud blob */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-brand blur-[120px]"
            />

            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px]"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-brand-sky shadow-glow" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-brand-violet shadow-glow-violet" />
              <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-brand-gold" />
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              const tagColors: Record<string, string> = {
                gold: 'bg-gradient-gold text-white',
                sky: 'bg-gradient-sky text-white',
                violet: 'bg-gradient-violet text-white',
              };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: card.delay,
                    type: 'spring',
                    stiffness: 80,
                  }}
                  className="absolute"
                  style={{
                    right: card.position.right,
                    top: card.position.top,
                    zIndex: card.z,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -18, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 rounded-3xl" />

                      <div className="relative w-[280px] p-5 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(14,165,233,0.15)] hover:shadow-[0_30px_80px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all duration-500">
                        <div className="absolute -top-2.5 -right-2.5">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${tagColors[card.tagColor]}`}
                          >
                            {card.tag}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-brand blur-md opacity-50" />
                            <div className="relative w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg">
                              <Icon size={22} className="text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                              Service
                            </p>
                            <h3 className="text-base font-black text-[#0A0F1F] leading-tight">
                              {card.title}
                            </h3>
                          </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-border via-brand-sky/30 to-transparent mb-3" />

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-txt-muted font-semibold">
                              Starting from
                            </p>
                            <p className="text-lg font-black gradient-text">
                              {card.price}
                            </p>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-brand-sky/10 flex items-center justify-center group-hover:bg-gradient-brand transition-all duration-300">
                            <ArrowRight
                              size={14}
                              className="text-brand-sky group-hover:text-white group-hover:translate-x-0.5 transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-20 right-96 w-4 h-4 rounded-full bg-gradient-brand shadow-glow"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-96 right-0 w-3 h-3 rounded-full bg-brand-gold shadow-md"
            />
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-32 right-44 w-2.5 h-2.5 rounded-full bg-brand-violet shadow-glow-violet"
            />

            <motion.svg
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-10 right-20 w-8 h-8 text-brand-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </motion.svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#1E293B]/40 flex items-start justify-center p-2 bg-white/60 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-brand-sky"
          />
        </div>
      </motion.div>
    </section>
  );
}