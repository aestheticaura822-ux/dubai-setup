import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Globe,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  FileCheck,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Clock,
  Users,
  Award,
  Wallet,
  Landmark,
  FileText,
  Calendar,
  DollarSign,
  Zap,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Zap, value: '2-5', label: 'Days (Digital)', color: 'from-sky-400 to-blue-600' },
  { icon: Landmark, value: '6+', label: 'Bank Partners', color: 'from-violet-400 to-purple-600' },
  { icon: Users, value: '500+', label: 'Accounts Opened', color: 'from-amber-400 to-orange-600' },
  { icon: Award, value: '100%', label: 'Success Rate', color: 'from-emerald-400 to-teal-600' },
];

const whyNeeded = [
  {
    icon: Wallet,
    title: 'Operate & Receive Payments',
    description: 'Required to accept payments, invoices, and trade legally with local or international clients.',
  },
  {
    icon: Users,
    title: 'Pay Staff via WPS',
    description: 'UAE law requires salary payments through WPS-linked accounts. No account means no compliant payroll.',
  },
  {
    icon: Briefcase,
    title: 'Separate Business & Personal',
    description: 'Proper bookkeeping for VAT, accounting, and audits — essential for compliance.',
  },
  {
    icon: FileCheck,
    title: 'Enable VAT & Tax Filings',
    description: 'Active corporate account is mandatory for FTA VAT registration and corporate tax returns.',
  },
  {
    icon: TrendingUp,
    title: 'Build Credit for Loans',
    description: 'Established banking history enables future financing, credit facilities, and trade finance.',
  },
  {
    icon: ShieldCheck,
    title: 'Central Bank Compliance',
    description: 'UAE Central Bank requires all registered companies to operate with active corporate accounts.',
  },
];

const eligibility = [
  {
    icon: Building2,
    title: 'UAE Mainland Businesses',
    description: 'LLCs, branches of foreign companies, and professional/civil companies registered with DED.',
    color: 'from-sky-400 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Free Zone Companies',
    description: 'All Free Zone licensed entities with valid business license — we match you with the right bank.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    icon: Landmark,
    title: 'Offshore Companies',
    description: 'Allowed in select banks for non-trading purposes — holding assets and investments.',
    color: 'from-cyan-400 to-teal-600',
  },
  {
    icon: TrendingUp,
    title: 'International Investors',
    description: 'Foreign investors with trade license, Emirates ID/residency, and notarized shareholder agreements.',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: Wallet,
    title: 'E-commerce Providers',
    description: 'SaaS, dropshipping, digital marketing, and online businesses with valid Free Zone or Mainland license.',
    color: 'from-pink-400 to-rose-600',
  },
  {
    icon: Briefcase,
    title: 'Freelancers',
    description: 'Permit holders from Dubai Media City, SHAMS, RAKEZ, twofour54, or Abu Dhabi Media Zone.',
    color: 'from-lime-400 to-green-600',
  },
];

const challenges = [
  {
    icon: ShieldCheck,
    title: 'Strict KYC Verification',
    description: 'UAE banks perform deep KYC checks on business, owners, and source of funds. We prepare a complete KYC file that passes first time.',
  },
  {
    icon: Globe,
    title: 'Enhanced Nationality Scrutiny',
    description: 'Certain nationalities and high-risk activities trigger extra vetting. We match you with banks aligned to your profile.',
  },
  {
    icon: Building2,
    title: 'Proof of Local Presence',
    description: 'Banks often require Ejari, tenancy contract, or utility bill. We help you prepare these before applying.',
  },
  {
    icon: Clock,
    title: 'Compliance Delays',
    description: 'Inconsistent documents can delay approval for weeks. Our pre-screened files avoid back-and-forth.',
  },
];

const risks = [
  {
    icon: DollarSign,
    title: 'Payment & Invoicing Delays',
    description: 'Without a corporate account, you cannot issue invoices, collect payments, or conduct B2B transactions — leading to cash flow problems.',
    color: 'from-red-400 to-rose-600',
  },
  {
    icon: FileText,
    title: 'VAT & WPS Issues',
    description: 'No bank account means no VAT registration, no WPS compliance, and possible fines from authorities for non-compliance.',
    color: 'from-orange-400 to-amber-600',
  },
  {
    icon: TrendingUp,
    title: 'Bad History Limits Financing',
    description: 'Even refused applications get recorded in compliance notes — making future loans and trade finance harder to acquire.',
    color: 'from-rose-400 to-pink-600',
  },
  {
    icon: AlertTriangle,
    title: 'Fines for Inactive Businesses',
    description: 'Free Zone or Mainland authorities can penalize companies without active bank accounts — license suspension is possible.',
    color: 'from-red-500 to-red-700',
  },
];

const services = [
  {
    icon: TrendingUp,
    title: 'Bank Match Assessment',
    description: 'Analysis of your business activity, license, and ideal bank match.',
  },
  {
    icon: FileText,
    title: 'KYC File Preparation',
    description: 'Complete documentation, shareholder papers, and business plan.',
  },
  {
    icon: FileCheck,
    title: 'Notarization & Attestation',
    description: 'Document translation and legal attestation support.',
  },
  {
    icon: Calendar,
    title: 'Bank Meetings Scheduled',
    description: 'Pre-scheduled interviews — in-person or online.',
  },
  {
    icon: Users,
    title: 'Banker Coordination',
    description: 'We handle all communication during due diligence.',
  },
  {
    icon: DollarSign,
    title: 'Multi-Currency Setup',
    description: 'AED, USD, EUR accounts and payment gateway integration.',
  },
  {
    icon: Wallet,
    title: 'WPS & VAT Linking',
    description: 'Connect payroll and tax accounts with your bank.',
  },
  {
    icon: Award,
    title: 'Post-Opening Support',
    description: 'Cheque books, cards, internet banking setup.',
  },
];

const banks = [
  {
    name: 'Emirates NBD',
    type: 'Premium Corporate',
    description: 'One of UAE\'s biggest banks with excellent corporate offerings for Mainland and Free Zone companies.',
    color: 'from-red-400 to-rose-600',
  },
  {
    name: 'Mashreq Bank',
    type: 'Digital & Trade Friendly',
    description: 'Highly customizable packages. Great for trading, logistics, and e-commerce with strong international remittance.',
    color: 'from-orange-400 to-amber-600',
  },
  {
    name: 'RAKBANK',
    type: 'SME & Free Zone Focused',
    description: 'Popular among SMEs and Free Zone companies with flexible account options.',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    name: 'First Abu Dhabi Bank (FAB)',
    type: 'Largest UAE Bank',
    description: 'UAE\'s largest bank with premium corporate services and full trade finance.',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    name: 'ADIB',
    type: 'Islamic Banking',
    description: 'Leading Islamic bank with Sharia-compliant business accounts and services.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    name: 'WIO Bank',
    type: 'Digital-First, Fastest',
    description: 'Digital-first bank with the fastest account opening — 2 to 5 business days.',
    color: 'from-cyan-400 to-sky-600',
  },
];

const documents = [
  'Trade license copy',
  'MOA / AOA or Incorporation documents',
  'Shareholder passport and Emirates ID (or entry stamp)',
  'Tenancy contract or utility bill',
  'Business plan (sometimes required)',
  'Company stamp and letterhead',
  'Existing invoices or contracts (optional, helpful)',
];

const timeline = [
  {
    icon: Building2,
    title: 'Mainland Companies',
    days: '5-10',
    unit: 'business days',
    color: 'from-sky-400 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Free Zone Entities',
    days: '7-12',
    unit: 'business days',
    color: 'from-violet-400 to-purple-600',
  },
  {
    icon: Landmark,
    title: 'Offshore Accounts',
    days: '10-20',
    unit: 'business days',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Digital Accounts (WIO)',
    days: '2-5',
    unit: 'business days',
    color: 'from-emerald-400 to-teal-600',
  },
];

const faqs = [
  {
    q: 'Can I open a UAE business bank account without residency?',
    a: 'Yes, non-residents can open corporate accounts — mainly for Free Zone or Offshore companies. Additional due diligence is required. We guide you through the compliant pathway and pre-screen applications.',
  },
  {
    q: 'How long does it take to open a corporate bank account?',
    a: 'Typically 5-20 business days depending on the bank, business profile, and shareholder nationality. Digital banks like WIO can be faster (2-5 days).',
  },
  {
    q: 'What documents are required?',
    a: 'Trade license, MoA, passport copies, Emirates ID, proof of address, business plan, and KYC documents. We help prepare and verify everything.',
  },
  {
    q: 'Which UAE bank should I choose?',
    a: 'It depends on your business type, activity, and nationality. We match you with the most suitable bank — Emirates NBD, Mashreq, RAKBANK, FAB, ADIB, or WIO.',
  },
  {
    q: 'Can Free Zone companies open business bank accounts?',
    a: 'Yes — all Free Zone licensed companies can open accounts. We specialize in matching Free Zone businesses with suitable banks.',
  },
  {
    q: 'Do UAE business bank accounts support multi-currency?',
    a: 'Yes, most banks offer AED, USD, EUR, and GBP accounts with multi-currency features. We help you set up the right combination.',
  },
  {
    q: 'Can I open a zero-balance business account?',
    a: 'Some banks offer low or zero minimum balance accounts. We help find the best fit based on your business needs.',
  },
  {
    q: 'Can offshore companies open bank accounts in UAE?',
    a: 'Yes, offshore companies can open accounts in select banks for non-trading purposes only. We help with documentation and compliance.',
  },
];

const relatedServices = [
  {
    slug: 'corporate-tax-vat',
    title: 'Corporate Tax & VAT',
    description: 'Expert tax advice, FTA registration, and compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    gradient: 'from-emerald-400 to-teal-600',
  },
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
];

// ============ COMPONENT ============
export default function BankAccount() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO BANNER === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-blue-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 right-[35%] opacity-15 hidden lg:block"
        >
          <CreditCard size={100} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block"
        >
          <Landmark size={80} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
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
                <span className="text-white font-bold">Bank Account Opening</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6"
              >
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Fast & Compliant Setup
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg"
              >
                Business Bank Account Opening in{' '}
                <span className="text-sky-300">UAE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
              >
                Open your UAE corporate bank account with top banks like Emirates NBD,
                Mashreq, FAB, RAKBANK, ADIB, and WIO. Full KYC support, documentation,
                and bank introductions — handled end-to-end.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={getWhatsAppLink(
                    "Hi! I need help opening a UAE business bank account. Please share details."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {['6+ Bank Partners', 'Multi-Currency', 'Fast Approval'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                  >
                    <CheckCircle2 size={12} className="text-sky-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Floating Cards */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-[100px]"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              </motion.div>

              {/* Card 1 */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[260px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="absolute -top-2.5 -right-2.5">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
                        <DollarSign size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Account
                        </p>
                        <h3 className="text-base font-black text-[#0A0F1F]">
                          Multi-Currency
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-3xl font-black text-[#0A0F1F]">AED, USD, EUR</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-sky-200 to-transparent mb-3" />
                    <p className="text-xs text-[#64748B] font-medium">
                      Payment gateway ready
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[240px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                        <ShieldCheck size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Verified
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          KYC Compliant
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        Bank-ready docs
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 */}
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
                          Fastest Option
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          Digital Account
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                      2-5 Days
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      Via WIO Bank
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -25, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-24 right-2 w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
              />
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-32 left-4 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
              />

              <motion.svg
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-10 right-40 w-7 h-7 text-sky-300 opacity-80"
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

      {/* === 3. WHY YOU NEED IT === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&q=80"
                  alt="Bank Account"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <CreditCard size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                        Essential For
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        Every UAE Business
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-4">
                  <Sparkles size={14} className="text-sky-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                    Why It Matters
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-4">
                  Why You Need a Business Bank{' '}
                  <span className="gradient-text">Account in UAE</span>
                </h2>
                <p className="text-base text-[#475569] font-medium leading-relaxed">
                  Without a corporate bank account, you cannot operate legally,
                  accept payments, or stay compliant with UAE regulations.
                </p>
              </motion.div>

              <div className="space-y-3">
                {whyNeeded.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="group relative flex gap-4 p-4 rounded-2xl bg-white border border-border hover:border-sky-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:-translate-x-1 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={20} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-base font-black text-[#0A0F1F] mb-1 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 4. WHO CAN OPEN === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Users size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Eligibility
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Who Can Open a Corporate Bank{' '}
              <span className="gradient-text">Account?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Multiple business types and individuals can open UAE corporate accounts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {eligibility.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80 }}
                  className="group relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-snug tracking-tight">
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

      {/* === 5. CHALLENGES WE SOLVE === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <AlertTriangle size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">
                Common Challenges
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Bank Account Opening{' '}
              <span className="text-amber-600">Challenges</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              UAE banks have strict requirements — here's what can go wrong and how we fix it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {challenges.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-6 rounded-3xl bg-white border-2 border-amber-100 shadow-[0_10px_40px_rgba(245,158,11,0.08)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. RISKS OF DELAYING === */}
      {/* === 6. RISKS OF DELAYING === */}
<section className="relative py-14 md:py-20 overflow-hidden">
  {/* Base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-rose-50 to-orange-50" />

  {/* Mesh blobs */}
  <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-red-200/40 blur-[150px] pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-200/40 blur-[150px] pointer-events-none" />

  {/* Dot grid */}
  <div
    className="absolute inset-0 opacity-[0.15] pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(circle, #F87171 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
    }}
  />

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

      {/* === LEFT SIDE — Heading + Warning Visual === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 lg:sticky lg:top-32"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-200 shadow-soft mb-6">
          <AlertTriangle size={14} className="text-red-600" />
          <span className="text-xs font-bold tracking-wider uppercase text-red-700">
            Critical Warning
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
          Risks of Delaying Bank{' '}
          <span className="relative inline-block">
            <span className="text-red-600">Account Setup</span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="10"
              viewBox="0 0 300 10"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                stroke="url(#risksUnderline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="risksUnderline" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#EF4444" />
                  <stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>

        {/* Description */}
        <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
          Waiting too long to open your UAE business bank account can cost you
          more than just time — it can halt operations, trigger penalties, and
          damage your business credibility.
        </p>

        {/* Warning Visual Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-500 via-rose-600 to-orange-600 shadow-[0_25px_70px_rgba(239,68,68,0.35)] p-6 md:p-7">
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-4 -right-4 opacity-25"
          >
            <AlertTriangle size={100} className="text-white" />
          </motion.div>

          <div className="relative">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-white" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                Act Now
              </span>
            </div>

            {/* Big number */}
            <div className="mb-5">
              <div className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight mb-2 drop-shadow-lg">
                AED 10,000+
              </div>
              <p className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Potential fines for non-compliance
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/20 mb-5" />

            {/* Sub stats */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <div className="text-2xl font-black text-white leading-none mb-1">
                  30+
                </div>
                <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                  Days of delay
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white leading-none mb-1">
                  Weeks
                </div>
                <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                  To recover
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={getWhatsAppLink(
                "Hi! I don't want to delay my bank account setup. Please help me get started."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-red-700 font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={16} />
              Start Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mini trust line */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-[#475569]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Free Consultation
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            No Hidden Fees
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Fast Approval
          </div>
        </div>
      </motion.div>

      {/* === RIGHT SIDE — Risk Cards === */}
      <div className="lg:col-span-7 space-y-4">
        {risks.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative flex gap-5 p-5 md:p-6 rounded-3xl bg-white border border-red-100 shadow-[0_10px_40px_rgba(239,68,68,0.06)] group-hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] group-hover:-translate-x-1 transition-all duration-500 overflow-hidden">
                {/* Left gradient bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.color} group-hover:w-2 transition-all duration-300`}
                />

                {/* Number watermark */}
                <div className="absolute top-3 right-4 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500">
                  <span className="text-8xl font-black text-[#0A0F1F] leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl`}
                  />
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <Icon size={24} className="text-white" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 pt-1">
                  {/* Number badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br ${item.color} text-white text-[10px] font-black`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                      Risk #{i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-2 pr-16">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                    {item.description}
                  </p>

                  {/* Warning line */}
                  <div className="mt-3 flex items-center gap-2 pt-3 border-t border-dashed border-red-100">
                    <AlertTriangle size={12} className="text-red-500" strokeWidth={2.5} />
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
                      Preventable
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Bottom note card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative p-5 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-dashed border-amber-200 flex items-start gap-4"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
            <Sparkles size={20} className="text-white" strokeWidth={2.2} />
          </div>
          <div>
            <h4 className="text-sm font-black text-[#0A0F1F] mb-1">
              💡 Our Advice
            </h4>
            <p className="text-xs text-[#64748B] font-medium leading-relaxed">
              Don't wait — bank account opening takes 2-20 days depending on type.
              The sooner you start, the sooner you can operate, receive payments,
              and stay compliant.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* === 7. WHAT'S INCLUDED === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/30 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileCheck size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Our Bank Account Opening{' '}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Complete end-to-end support — from assessment to account activation.
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
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group relative p-5 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
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

      {/* === 8. BANKS WE WORK WITH === */}
<section className="relative py-14 md:py-20 overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
    style={{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1600&q=80)',
    }}
  />

  {/* Gradient base */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/20 to-white" />

  {/* Mesh blobs */}
  <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

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
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14 max-w-3xl mx-auto"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
        <Landmark size={14} className="text-sky-600" />
        <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
          Our Banking Partners
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
        10 Top UAE Banks We{' '}
        <span className="relative inline-block">
          <span className="gradient-text">Work With</span>
          <svg
            className="absolute -bottom-1 left-0 w-full"
            height="10"
            viewBox="0 0 300 10"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
              stroke="url(#banksUnderline)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="banksUnderline" x1="0" y1="0" x2="300" y2="0">
                <stop stopColor="#0EA5E9" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      <p className="text-base text-[#475569] font-medium">
        Strong relationships with leading banks — from premium corporate to
        digital-first and Sharia-compliant options.
      </p>
    </motion.div>

    {/* === FEATURED 3 BANKS (Top row, big cards) === */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {banks.slice(0, 3).map((bank, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: i * 0.12,
            type: 'spring',
            stiffness: 70,
          }}
          className="group relative"
        >
          {/* Glow */}
          <div
            className={`absolute -inset-2 rounded-[36px] bg-gradient-to-br ${bank.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`}
          />

          {/* Card */}
          <div className="relative h-full rounded-[28px] bg-white border border-border overflow-hidden shadow-[0_15px_50px_rgba(15,23,42,0.08)] group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] group-hover:-translate-y-2 transition-all duration-500">
            {/* === IMAGE HEADER === */}
            <div className="relative h-48 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                style={{ backgroundImage: `url(${bank.image})` }}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${bank.color} opacity-75 mix-blend-multiply`}
              />

              {/* Dark overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Number badge — top left */}
              <div className="absolute top-4 left-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/40 blur-md rounded-2xl" />
                  <div className="relative w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg">
                    <span className="text-lg font-black text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Type badge — top right */}
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/25 backdrop-blur-xl border border-white/40 text-white">
                  {bank.type}
                </span>
              </div>

              {/* Floating landmark icon */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity }}
                className="absolute bottom-4 right-4 opacity-30"
              >
                <Landmark size={50} className="text-white" />
              </motion.div>

              {/* Bank name at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-2xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                  {bank.name}
                </h3>
              </div>
            </div>

            {/* === CONTENT === */}
            <div className="relative p-5 md:p-6">
              <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-5">
                {bank.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">
                  ✓ Trusted Partner
                </span>
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${bank.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-45 transition-transform duration-500`}
                >
                  <ArrowRight size={16} className="text-white -rotate-45" strokeWidth={2.5} />
                </div>
              </div>

              {/* Corner deco */}
              <div
                className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${bank.color} opacity-[0.05] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* === REMAINING 7 BANKS (Compact cards) === */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {banks.slice(3).map((bank, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="group relative"
        >
          {/* Glow */}
          <div
            className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-br ${bank.color} opacity-0 group-hover:opacity-25 blur-xl transition-all duration-500`}
          />

          {/* Card */}
          <div className="relative h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.05)] group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] group-hover:-translate-y-2 transition-all duration-500">
            {/* Top gradient line */}
            <div className={`h-1 bg-gradient-to-r ${bank.color}`} />

            <div className="relative p-5">
              {/* Header — number + icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${bank.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <Landmark size={20} className="text-white" strokeWidth={2.2} />
                </div>
                <span
                  className={`text-3xl font-black bg-gradient-to-br ${bank.color} bg-clip-text text-transparent opacity-30 leading-none`}
                >
                  {String(i + 4).padStart(2, '0')}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base font-black text-[#0A0F1F] leading-tight mb-1.5">
                {bank.name}
              </h3>

              {/* Type */}
              <p className="text-[10px] font-bold text-sky-600 uppercase tracking-wider mb-3">
                {bank.type}
              </p>

              {/* Description */}
              <p className="text-xs text-[#64748B] font-medium leading-relaxed mb-4 line-clamp-4">
                {bank.description}
              </p>

              {/* Divider */}
              <div className={`h-px bg-gradient-to-r from-border via-${bank.color.split('-')[0]}-200 to-transparent mb-3`} />

              {/* Footer */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                  Available
                </span>
              </div>

              {/* Corner deco */}
              <div
                className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${bank.color} opacity-[0.04] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* === BOTTOM STRIP === */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-10 md:mt-12 relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-blue-900/75 to-sky-900/60" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <Sparkles size={26} className="text-white" strokeWidth={2.2} />
          </motion.div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-white leading-tight mb-1">
              Not Sure Which Bank to Choose?
            </h3>
            <p className="text-sm text-white/85 font-medium">
              We'll match you with the ideal bank based on your business profile.
            </p>
          </div>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <a
            href={getWhatsAppLink(
              "Hi! I'd like help choosing the right UAE bank for my business."
            )}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href="tel:+971566556645"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
          >
            <Phone size={16} />
            Call
          </a>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* === 9. DOCUMENTS + TIMELINE === */}
      {/* === 9. DOCUMENTS + TIMELINE === */}
<section className="relative py-14 md:py-20 overflow-hidden">
  {/* Background image with heavy blur */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
    style={{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80)',
    }}
  />

  {/* Gradient base */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white" />

  {/* Mesh blobs */}
  <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

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
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14 max-w-3xl mx-auto"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
        <FileCheck size={14} className="text-sky-600" />
        <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
          Prep & Process
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
        Everything You Need to{' '}
        <span className="relative inline-block">
          <span className="gradient-text">Get Started</span>
          <svg
            className="absolute -bottom-1 left-0 w-full"
            height="10"
            viewBox="0 0 300 10"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
              stroke="url(#docsUnderline)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="docsUnderline" x1="0" y1="0" x2="300" y2="0">
                <stop stopColor="#0EA5E9" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      <p className="text-base text-[#475569] font-medium">
        Check the required documents and see how fast your account can be opened.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8">
      {/* === DOCUMENTS CARD === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative"
      >
        {/* Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-sky-400 to-blue-600 opacity-20 blur-3xl rounded-[40px] group-hover:opacity-30 transition-opacity duration-500" />

        <div className="relative rounded-3xl bg-white border border-border shadow-[0_20px_60px_rgba(15,23,42,0.1)] overflow-hidden group-hover:shadow-[0_30px_80px_rgba(14,165,233,0.2)] transition-all duration-500">
          {/* === IMAGE HEADER === */}
          <div className="relative h-44 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80)',
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600/90 via-blue-600/80 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 right-4 opacity-30"
            >
              <FileText size={60} className="text-white" />
            </motion.div>

            {/* Header content */}
            <div className="relative h-full p-6 flex flex-col justify-between">
              {/* Badge top */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 self-start">
                <FileText size={12} className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Required
                </span>
              </div>

              {/* Title bottom */}
              <div>
                <h3 className="text-2xl font-black text-white leading-tight tracking-tight drop-shadow-md mb-1">
                  Documents Checklist
                </h3>
                <p className="text-xs font-semibold text-white/90">
                  7 items to prepare
                </p>
              </div>
            </div>
          </div>

          {/* === CONTENT === */}
          <div className="relative p-6 md:p-7">
            <div className="space-y-2.5">
              {documents.map((doc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group/item flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-sky-50 hover:border-sky-200 hover:translate-x-1 transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform">
                    <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-[#1E293B] leading-snug">
                    {doc}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom tip */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-10 blur-2xl" />
              <div className="relative flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Sparkles size={16} className="text-white" strokeWidth={2.5} />
                </div>
                <p className="text-xs font-semibold text-sky-900 leading-relaxed pt-1.5">
                  We help prepare and verify all documents to avoid rejection or
                  delays — you don't figure it out alone.
                </p>
              </div>
            </div>
          </div>

          {/* Corner deco */}
          <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-[0.06] blur-2xl pointer-events-none" />
        </div>
      </motion.div>

      {/* === TIMELINE CARD === */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative"
      >
        {/* Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-violet-400 to-purple-600 opacity-20 blur-3xl rounded-[40px] group-hover:opacity-30 transition-opacity duration-500" />

        <div className="relative rounded-3xl bg-white border border-border shadow-[0_20px_60px_rgba(15,23,42,0.1)] overflow-hidden group-hover:shadow-[0_30px_80px_rgba(139,92,246,0.2)] transition-all duration-500">
          {/* === IMAGE HEADER === */}
          <div className="relative h-44 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80)',
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/90 via-purple-600/80 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-4 right-4 opacity-30"
            >
              <Clock size={60} className="text-white" />
            </motion.div>

            {/* Header content */}
            <div className="relative h-full p-6 flex flex-col justify-between">
              {/* Badge top */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 self-start">
                <Clock size={12} className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Timeline
                </span>
              </div>

              {/* Title bottom */}
              <div>
                <h3 className="text-2xl font-black text-white leading-tight tracking-tight drop-shadow-md mb-1">
                  How Long It Takes
                </h3>
                <p className="text-xs font-semibold text-white/90">
                  By business type
                </p>
              </div>
            </div>
          </div>

          {/* === CONTENT === */}
          <div className="relative p-6 md:p-7">
            <div className="space-y-3">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group/item relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 hover:border-violet-200 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Left accent */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} opacity-0 group-hover/item:opacity-100 transition-opacity`} />

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.2} />
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-black text-[#0A0F1F] truncate">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">
                        Estimated
                      </div>
                    </div>

                    {/* Days */}
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-black gradient-text leading-none">
                        {item.days}
                      </div>
                      <div className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider mt-0.5">
                        {item.unit}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom tip */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 opacity-10 blur-2xl" />
              <div className="relative flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Zap size={16} className="text-white" strokeWidth={2.5} />
                </div>
                <p className="text-xs font-semibold text-violet-900 leading-relaxed pt-1.5">
                  Digital accounts like WIO can open in as fast as <span className="font-black">2 business days</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Corner deco */}
          <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 opacity-[0.06] blur-2xl pointer-events-none" />
        </div>
      </motion.div>
    </div>

    {/* === BOTTOM STRIP — Instant Help === */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-10 md:mt-12 relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-blue-900/70 to-sky-900/50" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left — Icon + Text */}
        <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg flex-shrink-0"
          >
            <Zap size={26} className="text-white" strokeWidth={2.2} />
          </motion.div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-white leading-tight mb-1">
              Need Help Preparing Documents?
            </h3>
            <p className="text-sm text-white/85 font-medium">
              Our team will help you with every document — start to finish.
            </p>
          </div>
        </div>

        {/* Right — CTA buttons */}
        <div className="flex gap-3 flex-shrink-0">
          <a
            href={getWhatsAppLink(
              "Hi! I need help preparing documents for a UAE business bank account."
            )}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href="tel:+971566556645"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
          >
            <Phone size={16} />
            Call
          </a>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Common Questions
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about opening a UAE business bank
                account. Can't find what you need? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 shadow-[0_20px_60px_rgba(14,165,233,0.3)]">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-3 -right-3 opacity-20"
                >
                  <Landmark size={80} className="text-white" />
                </motion.div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">
                    Get a free consultation. We'll match you with the right bank.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I have a question about UAE business bank accounts."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
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
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative rounded-3xl bg-white border border-border hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-sky-700 transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-sky-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-sky-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">
                          +
                        </span>
                      </div>
                    </div>
                  </summary>

                  <div className="px-6 pb-6 pl-20">
                    <div className="pt-2 border-t border-dashed border-border">
                      <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 11. RELATED SERVICES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
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
              Services that pair well with bank account opening.
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
                      <ArrowRight size={14} className="text-sky-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === 12. FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)',
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/85 via-blue-900/60 to-blue-900/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">
                      Get In Touch
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Open Your{' '}
                    <span className="text-sky-300">Bank Account?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll assess your business, match you
                    with the ideal bank, and handle every step — from KYC to
                    activation.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I'd like a free consultation for opening a UAE business bank account."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
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

                  <div className="flex flex-wrap gap-3">
                    {['6+ Bank Partners', '500+ Accounts Opened', '100% Success Rate'].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                      >
                        <CheckCircle2 size={12} className="text-sky-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a
                    href={getWhatsAppLink(
                      "Hi! I need help opening a UAE business bank account."
                    )}
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
                        className="text-txt-muted group-hover:text-sky-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </motion.a>

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