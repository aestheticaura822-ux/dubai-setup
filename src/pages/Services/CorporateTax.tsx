import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Receipt,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Globe,
  TrendingUp,
  Briefcase,
  FileCheck,
  ShieldCheck,
  Calculator,
  FileText,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Clock,
  Percent,
  Users,
  Award,
} from 'lucide-react';

// ============ DATA ============
const stats = [
  { icon: Percent, value: '9%', label: 'Corporate Tax Rate', color: 'from-emerald-400 to-teal-600' },
  { icon: Receipt, value: '5%', label: 'VAT Rate', color: 'from-sky-400 to-blue-600' },
  { icon: TrendingUp, value: '375K', label: 'AED Threshold', color: 'from-violet-400 to-purple-600' },
  { icon: Users, value: '500+', label: 'Filings Done', color: 'from-amber-400 to-orange-600' },
];

const whoNeeds = [
  {
    icon: Building2,
    title: 'Taxable UAE Businesses',
    description: 'All Mainland and Free Zone companies must register, file returns, and comply with UAE Corporate Tax and VAT laws.',
  },
  {
    icon: TrendingUp,
    title: 'Businesses Over AED 375K',
    description: 'If your net profit exceeds AED 375,000 annually, you are in the Corporate Tax regime and must pay 9% on applicable profits.',
  },
  {
    icon: Receipt,
    title: 'VAT Over AED 375K',
    description: 'If your taxable supplies exceed AED 375,000 over 12 months, VAT registration is mandatory with quarterly or monthly filings.',
  },
  {
    icon: Globe,
    title: 'Global Expansion Firms',
    description: 'Businesses scaling, restructuring, or forming tax groups need expert guidance on compliance and financial reporting.',
  },
];

const services = [
  { icon: FileCheck, title: 'Tax Registration & Filing', description: 'Register with FTA, determine taxable profits, submit accurate returns on time.' },
  { icon: Receipt, title: 'VAT Setup & Updates', description: 'Complete VAT registration, amendments, and cancellation when required.' },
  { icon: Calculator, title: 'VAT Return Filing', description: 'Prepare and submit quarterly or monthly VAT returns to FTA accurately.' },
  { icon: TrendingUp, title: 'VAT Tracking & Reconciliation', description: 'Track input/output VAT, reconcile, and document for proper credits.' },
  { icon: Award, title: 'Tax Refunds & Compliance', description: 'Manage refund claims when input VAT exceeds output or for new businesses.' },
  { icon: FileText, title: 'Bookkeeping & Advisory', description: 'Structured bookkeeping and record-keeping to meet FTA requirements.' },
  { icon: ShieldCheck, title: 'FTA Audit Support', description: 'Full documentation, financial statements, and representation during audits.' },
  { icon: Briefcase, title: 'Tax Advice & Structuring', description: 'Tax planning, group structures, and quarterly updates on legislation.' },
];

const freeZoneRules = [
  {
    icon: CheckCircle2,
    title: 'Free Zone Tax Exemption',
    description: 'Certain Free Zone entities may qualify for 0% Corporate Tax, subject to conditions set by the UAE Ministry of Finance.',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    icon: AlertTriangle,
    title: 'External Income Taxable',
    description: 'Income from Mainland transactions or non-qualifying sources (passive income, interest) may be taxed at standard 9%.',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: ShieldCheck,
    title: 'Exemption Check & Advice',
    description: 'We assess your business model, income sources, and structure to determine exemption eligibility and restructuring options.',
    color: 'from-sky-400 to-blue-600',
  },
];

const faqs = [
  {
    q: 'Is Corporate Tax compulsory for businesses in Dubai?',
    a: 'Yes. Corporate Tax is mandatory for UAE businesses with annual net profits exceeding AED 375,000. All qualifying businesses must register with FTA and submit returns.',
  },
  {
    q: 'When does a business need to register for VAT in the UAE?',
    a: 'VAT registration is mandatory when taxable supplies exceed AED 375,000 per year. Voluntary registration is available above AED 187,500.',
  },
  {
    q: 'What documents do I need for Corporate Tax and VAT registration?',
    a: 'Trade license, MoA, passport copies, Emirates ID, financial statements, and bank details. We prepare and verify all documents for you.',
  },
  {
    q: 'Are Corporate Tax applicable to Free Zone companies?',
    a: 'Yes, but with conditions. Qualifying Free Zone entities may get 0% rate on qualifying income. Non-qualifying income is taxed at 9%.',
  },
  {
    q: 'What is the penalty for missing a VAT return deadline?',
    a: 'Penalties range from AED 500 to AED 1,000 per month for late filing, plus additional fines for repeated violations.',
  },
  {
    q: 'Can I claim VAT refunds in the UAE?',
    a: 'Yes. If your input VAT exceeds output VAT, you can claim refunds. We handle the entire refund process.',
  },
  {
    q: 'How does Setup Zone Dubai help during an FTA audit?',
    a: 'We prepare all documentation, coordinate with FTA officials, and represent you throughout the audit process.',
  },
  {
    q: 'What are the costs associated with Corporate Tax and VAT services?',
    a: 'Our pricing is transparent and depends on your business size and complexity. Contact us for a custom quote with no hidden fees.',
  },
];

const relatedServices = [
  {
    slug: 'accounting',
    title: 'Accounting',
    description: 'Bookkeeping, payroll, and financial reporting.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
    gradient: 'from-violet-400 to-purple-600',
  },
  {
    slug: 'compliance',
    title: 'Compliance Services',
    description: 'UBO filings, ESR reports, and regulatory support.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    gradient: 'from-cyan-400 to-blue-600',
  },
  {
    slug: 'bank-account',
    title: 'Bank Account Opening',
    description: 'Open UAE business bank accounts with full KYC support.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80',
    gradient: 'from-sky-400 to-blue-600',
  },
];

// ============ COMPONENT ============
export default function CorporateTax() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO BANNER === */}
      {/* === 1. HERO BANNER === */}
<section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80)',
    }}
  />

  {/* Left gradient overlay — text ke peeche */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/60 to-transparent" />

  {/* Top + bottom subtle overlays for depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

  {/* Dot pattern */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
      backgroundSize: '32px 32px',
    }}
  />

  {/* Floating icons */}
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-32 right-[35%] opacity-15 hidden lg:block"
  >
    <Receipt size={100} className="text-white" />
  </motion.div>
  <motion.div
    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block"
  >
    <Calculator size={80} className="text-white" />
  </motion.div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      {/* === LEFT SIDE — Content === */}
      <div className="lg:col-span-7">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap"
        >
          <Link to="/" className="hover:text-white transition flex items-center gap-1.5">
            <HomeIcon size={14} />
            Home
          </Link>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span className="text-white font-bold">Corporate Tax & VAT</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6"
        >
          <Sparkles size={14} className="text-white" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            Stay Compliant & Penalty-Free
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg"
        >
          Corporate Tax & VAT Services in{' '}
          <span className="text-amber-300">UAE</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
        >
          Expert tax advice, FTA registration, and compliance services to keep
          your UAE business penalty-free. From VAT filings to Corporate Tax
          returns — we handle everything.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/971522973861"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {['FTA Registered', '15+ Years Experience', '500+ Clients'].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
            >
              <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
              <span className="font-semibold text-white">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* === RIGHT SIDE — Attractive Floating Cards === */}
      <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
        {/* Big glow blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-[100px]"
        />

        {/* Orbiting ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]"
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
          <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
        </motion.div>

        {/* === Floating Card 1 — Tax Rate === */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }}
          className="absolute top-0 right-0 z-30"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-2xl rounded-3xl" />
            <div className="relative w-[260px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
              <div className="absolute -top-2.5 -right-2.5">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-teal-600 text-white shadow-md">
                  Live Rate
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                  <Percent size={22} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                    Corporate Tax
                  </p>
                  <h3 className="text-base font-black text-[#0A0F1F]">
                    UAE Rate
                  </h3>
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-black text-[#0A0F1F]">9%</span>
                <span className="text-sm font-bold text-emerald-600">on profits</span>
              </div>
              <div className="h-px bg-gradient-to-r from-border via-emerald-200 to-transparent mb-3" />
              <p className="text-xs text-[#64748B] font-medium">
                Above AED 375,000 net profit
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* === Floating Card 2 — FTA Badge === */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, type: 'spring', stiffness: 80 }}
          className="absolute top-48 left-0 z-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
            <div className="relative w-[240px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
                  <ShieldCheck size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                    Certified
                  </p>
                  <h3 className="text-sm font-black text-[#0A0F1F]">
                    FTA Registered
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  Active & Compliant
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* === Floating Card 3 — VAT Filing === */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, type: 'spring', stiffness: 80 }}
          className="absolute bottom-0 right-8 z-10"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-40 blur-2xl rounded-3xl" />
            <div className="relative w-[250px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Clock size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                    Next Deadline
                  </p>
                  <h3 className="text-sm font-black text-[#0A0F1F]">
                    VAT Filing
                  </h3>
                </div>
              </div>
              <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                Q1 2026
              </div>
              <p className="text-xs text-[#64748B] font-medium">
                Due in 28 days — we handle it
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative floating dots */}
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-24 right-2 w-3 h-3 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-32 left-4 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
        />

        {/* Sparkle */}
        <motion.svg
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-40 w-7 h-7 text-amber-300 opacity-80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </motion.svg>
      </div>
    </div>
  </div>
</section>

      {/* === 2. STATS ROW === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                    <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.08] blur-xl`} />
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-none mb-1.5">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHAT IS CORPORATE TAX & VAT === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
                  alt="Corporate Tax"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Receipt size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                        Administered By
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        Federal Tax Authority (FTA)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Understanding the Basics
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Are Corporate Tax and VAT in the{' '}
                <span className="gradient-text">UAE?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  In the UAE, two tax provisions apply to businesses —{' '}
                  <span className="font-black text-[#0A0F1F]">Corporate Tax</span>{' '}
                  and{' '}
                  <span className="font-black text-[#0A0F1F]">Value Added Tax (VAT)</span>.
                  Corporate Tax is set at 9% for companies with net profits above
                  AED 375,000 annually. VAT is charged at 5% on most goods and
                  services.
                </p>
                <p>
                  Both taxes are administered by the Federal Tax Authority (FTA).
                  While the FTA manages both, they require separate registration,
                  accurate filings, and proper record-keeping. Missing deadlines
                  leads to penalties, so managing documentation carefully is
                  critical.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  'Registered with FTA',
                  'Penalty-free compliance',
                  'Expert tax advisory',
                  'Free Zone expertise',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. WHO NEEDS IT — BENTO GRID === */}
<section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
  {/* Mesh bg */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />

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
      className="text-center mb-14 max-w-3xl mx-auto"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
        <Users size={14} className="text-emerald-600" />
        <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
          Essential for UAE Businesses
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
        Who Needs Corporate Tax &{' '}
        <span className="relative inline-block">
          <span className="gradient-text">VAT Services?</span>
          <svg
            className="absolute -bottom-1 left-0 w-full"
            height="10"
            viewBox="0 0 300 10"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
              stroke="url(#whoUnderline)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="whoUnderline" x1="0" y1="0" x2="300" y2="0">
                <stop stopColor="#10B981" />
                <stop offset="1" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      <p className="text-base text-[#475569] font-medium">
        If your business falls into any of these categories, professional
        tax services are essential.
      </p>
    </motion.div>

    {/* === BENTO GRID === */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">

      {/* === CARD 1 — BIG with image (left top) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500 min-h-[300px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/95 via-teal-600/85 to-transparent" />

        {/* Content */}
        <div className="relative h-full p-7 md:p-8 flex flex-col justify-between min-h-[300px]">
          {/* Top — badge */}
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Building2 size={26} className="text-white" strokeWidth={2.2} />
            </div>
            <span className="px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 text-[10px] font-bold uppercase tracking-widest text-white">
              Primary
            </span>
          </div>

          {/* Bottom — text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight mb-3">
              {whoNeeds[0].title}
            </h3>
            <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl">
              {whoNeeds[0].description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* === CARD 2 — Small (right top) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-border bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500"
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
        {/* Corner blob */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-sky-100 opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-7 md:p-8">
          <div className="flex items-center justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <TrendingUp size={26} className="text-white" strokeWidth={2.2} />
            </div>
            <span className="text-5xl font-black text-sky-100 leading-none">
              02
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
            {whoNeeds[1].title}
          </h3>
          <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-5">
            {whoNeeds[1].description}
          </p>

          {/* Mini stat */}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <div className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200">
              <span className="text-xs font-black text-sky-700">AED 375K+</span>
            </div>
            <span className="text-xs font-semibold text-[#64748B]">
              Annual profit threshold
            </span>
          </div>
        </div>
      </motion.div>

      {/* === CARD 3 — Small (left bottom) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-border bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500"
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-600" />
        {/* Corner blob */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-amber-100 opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-7 md:p-8">
          <div className="flex items-center justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Receipt size={26} className="text-white" strokeWidth={2.2} />
            </div>
            <span className="text-5xl font-black text-amber-100 leading-none">
              03
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
            {whoNeeds[2].title}
          </h3>
          <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-5">
            {whoNeeds[2].description}
          </p>

          {/* Mini stat */}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <div className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200">
              <span className="text-xs font-black text-amber-700">Quarterly</span>
            </div>
            <span className="text-xs font-semibold text-[#64748B]">
              VAT filing requirement
            </span>
          </div>
        </div>
      </motion.div>

      {/* === CARD 4 — BIG with image (right bottom) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500 min-h-[300px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/95 via-purple-600/85 to-transparent" />

        {/* Content */}
        <div className="relative h-full p-7 md:p-8 flex flex-col justify-between min-h-[300px]">
          {/* Top — badge */}
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Globe size={26} className="text-white" strokeWidth={2.2} />
            </div>
            <span className="px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 text-[10px] font-bold uppercase tracking-widest text-white">
              Global
            </span>
          </div>

          {/* Bottom — text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight mb-3">
              {whoNeeds[3].title}
            </h3>
            <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl">
              {whoNeeds[3].description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* === BOTTOM — 3 mini indicators === */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mt-10 flex flex-wrap items-center justify-center gap-4"
    >
      {[
        { icon: ShieldCheck, label: 'FTA Registered', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
        { icon: Award, label: 'Certified Experts', color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
        { icon: FileCheck, label: 'Audit-Ready Records', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${item.bg} ${item.border} border shadow-soft`}
          >
            <Icon size={14} className={item.color} strokeWidth={2.5} />
            <span className="text-xs font-black text-[#0A0F1F]">{item.label}</span>
          </div>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* === 5. WHAT'S INCLUDED — 8 CARDS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/30 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/30 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileCheck size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Comprehensive Tax Support
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Do Our Services{' '}
              <span className="gradient-text">Include?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Complete tax solutions — from registration to audit support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative p-5 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600" />
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={20} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Award size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Trusted UAE Tax{' '}
                <span className="gradient-text">Experts</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6">
                We have extensive knowledge of UAE Corporate Tax Law and VAT laws
                to ensure your business is compliant and audit-ready at all times.
                Our certified accountants, legal advisors, and compliance
                specialists manage every detail of your FTA registration and tax
                return filing.
              </p>

              {/* Feature list */}
              <div className="space-y-3">
                {[
                  'Certified accountants & tax specialists',
                  'Transparent pricing — no hidden fees',
                  'Real-time tracking & deadline notifications',
                  'Free Zone, Mainland & Offshore expertise',
                  'Audit-ready records maintained for you',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Right with cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
                  alt="Tax Experts"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />

                {/* Floating stat card 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute top-5 right-5 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-border"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Award size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-txt-muted uppercase">
                        Experience
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">15+ Years</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating stat card 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-5 left-5 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-border"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <Users size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-txt-muted uppercase">
                        Clients
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">500+ Served</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. PENALTIES SECTION === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-red-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-200 shadow-soft mb-6">
              <AlertTriangle size={14} className="text-red-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-red-700">
                Warning — Don't Ignore Deadlines
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Penalties for{' '}
              <span className="text-red-600">Non-Compliance</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              FTA imposes significant fines for late registration, missed filings,
              and inaccurate returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Late Registration',
                amount: 'AED 10,000',
                description: 'Fixed penalty for failing to register for Corporate Tax on time.',
              },
              {
                icon: FileText,
                title: 'Late VAT Filing',
                amount: 'AED 500-1,000/mo',
                description: 'Monthly penalty for each late VAT return submission.',
              },
              {
                icon: AlertTriangle,
                title: 'Incorrect Returns',
                amount: 'AED 1,000-5,000',
                description: 'Penalty for inaccurate filings or under-declared tax amounts.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative p-6 rounded-3xl bg-white border-2 border-red-100 shadow-[0_10px_40px_rgba(239,68,68,0.1)] hover:shadow-[0_20px_60px_rgba(239,68,68,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-500" />
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-400 to-orange-600 flex items-center justify-center shadow-lg mb-4">
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-base font-black text-[#0A0F1F] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-2xl font-black text-red-600 mb-3">
                    {item.amount}
                  </div>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. FREE ZONE RULES — 3 COLUMNS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Building2 size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Special Rules for Free Zones
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Do Free Zone Companies Pay{' '}
              <span className="gradient-text">Corporate Tax?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Free Zone tax rules are complex — here's what you need to know.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freeZoneRules.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group relative p-7 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-[0.06] blur-2xl`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={24} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A0F1F] mb-3 leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
<section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
  {/* Mesh bg */}
  <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />

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
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

      {/* === LEFT SIDE — Heading + Info Card === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-5 lg:sticky lg:top-32"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
          <MessageCircle size={14} className="text-emerald-600" />
          <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
            Common Questions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
          Frequently Asked{' '}
          <span className="relative inline-block">
            <span className="gradient-text">Questions</span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="10"
              viewBox="0 0 300 10"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                stroke="url(#faqUnderline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="faqUnderline" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#10B981" />
                  <stop offset="1" stopColor="#0EA5E9" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>

        {/* Description */}
        <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
          Everything you need to know about Corporate Tax and VAT in the UAE.
          Can't find what you're looking for? Our experts are one message away.
        </p>

        {/* Help card */}
        <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 shadow-[0_20px_60px_rgba(16,185,129,0.3)]">
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-3 -right-3 opacity-20"
          >
            <MessageCircle size={80} className="text-white" />
          </motion.div>

          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
              <Sparkles size={22} className="text-white" strokeWidth={2.2} />
            </div>

            <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">
              Still Have Questions?
            </h3>
            <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">
              Our tax experts are ready to help. Get a free consultation today.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/971566556645"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-emerald-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href="tel:+971566556645"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all duration-300"
              >
                <Phone size={14} />
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white border border-border shadow-soft">
            <div className="text-2xl font-black gradient-text leading-none mb-1">
              24h
            </div>
            <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
              Response Time
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-border shadow-soft">
            <div className="text-2xl font-black gradient-text leading-none mb-1">
              100%
            </div>
            <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
              Free Consultation
            </div>
          </div>
        </div>
      </motion.div>

      {/* === RIGHT SIDE — FAQ Accordion === */}
      <div className="lg:col-span-7 space-y-4">
        {faqs.map((faq, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rounded-3xl bg-white border border-border hover:border-emerald-200 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
          >
            {/* Left accent bar (visible on open/hover) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

            {/* Question */}
            <summary className="flex items-start gap-4 p-6 list-none">
              {/* Number badge */}
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                <span className="text-sm font-black text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Question text */}
              <div className="flex-1 pt-1">
                <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-emerald-700 transition-colors">
                  {faq.q}
                </h3>
              </div>

              {/* Toggle icon */}
              <div className="relative flex-shrink-0 pt-1">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-emerald-400 group-open:to-teal-600 group-open:border-transparent transition-all duration-300">
                  <span className="text-emerald-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">
                    +
                  </span>
                </div>
              </div>
            </summary>

            {/* Answer */}
            <div className="px-6 pb-6 pl-20">
              <div className="pt-2 border-t border-dashed border-border">
                <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>

            {/* Corner deco */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-[0.04] group-open:opacity-[0.08] blur-2xl transition-opacity duration-500 pointer-events-none" />
          </motion.details>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* === 10. RELATED SERVICES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Services that pair well with Corporate Tax & VAT compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-xl font-black text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-black">
                      <span className="gradient-text">Read More</span>
                      <ArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === 11. FINAL CTA === */}
<section className="relative py-14 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]"
    >
      {/* === BACKGROUND IMAGE === */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)',
        }}
      />

      {/* Light overlay — image saaf dikhe, text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-emerald-900/60 to-emerald-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 right-[45%] opacity-15 hidden lg:block"
      >
        <Receipt size={100} className="text-white" />
      </motion.div>

      {/* === CONTENT === */}
      <div className="relative p-8 md:p-14 lg:p-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* === LEFT SIDE — Content === */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
              <Sparkles size={14} className="text-white" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
              Ready to Stay{' '}
              <span className="text-amber-300">Tax Compliant?</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
              Get a free consultation with our tax experts and never worry about
              FTA deadlines again. Visit our Business Bay office or reach out
              online — we handle everything.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/971566556645"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+971566556645"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Quick trust indicators */}
            <div className="flex flex-wrap gap-3">
              {[
                '15+ Years Experience',
                '500+ Happy Clients',
                'FTA Registered',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                >
                  <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT SIDE — Contact Cards === */}
          <div className="lg:col-span-5 space-y-4">

            {/* Card 1 — WhatsApp */}
            <motion.a
              href="https://wa.me/971566556645"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">
                    WhatsApp Us
                  </p>
                  <p className="text-base font-black text-[#0A0F1F]">
                    +971 56 655 6645
                  </p>
                  <p className="text-[11px] text-green-600 font-semibold mt-0.5">
                    ● Instant replies almost anytime
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-txt-muted group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.a>

            {/* Card 2 — Office Visit */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Building2 size={22} className="text-white" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">
                    Visit Our Dubai Office
                  </p>
                  <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">
                    Office M08-27, M1 Floor, Crystal Tower
                  </p>
                  <p className="text-xs text-[#64748B] font-medium leading-snug">
                    Business Bay, Dubai, U.A.E — PO Box: 554552
                  </p>
                  <a
                    href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-sky-600 hover:text-sky-700 transition"
                  >
                    Get Directions
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3 — Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Clock size={22} className="text-white" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">
                    Working Hours
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-[#64748B] font-medium">Mon – Fri</span>
                      <span className="font-black text-[#0A0F1F]">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#64748B] font-medium">Saturday</span>
                      <span className="font-black text-[#0A0F1F]">10:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#64748B] font-medium">Sunday</span>
                      <span className="font-black text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}