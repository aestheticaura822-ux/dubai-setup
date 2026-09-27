import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Globe,
  TrendingUp,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Clock,
  Users,
  Award,
  FileText,
  DollarSign,
  Eye,
  FileSearch,
  Scale,
  Receipt,
  UserCheck,
  ClipboardCheck,
  Ban,
  XCircle,
  TrendingDown,
  ShieldAlert,
  Lock,
  Fingerprint,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Ban, value: 'AED 1M', label: 'Max Fines', color: 'from-red-400 to-rose-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliance Rate', color: 'from-cyan-400 to-blue-600' },
  { icon: FileText, value: '5+', label: 'Filing Types', color: 'from-violet-400 to-purple-600' },
  { icon: Users, value: '500+', label: 'Businesses Served', color: 'from-emerald-400 to-teal-600' },
];

const services = [
  {
    icon: Scale,
    title: 'ESR Compliance & Filing',
    description: 'Evaluate ESR applicability, prepare substance declarations, maintain local substance, and file reports with Ministry of Finance.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    icon: Receipt,
    title: 'Corporate Tax & FTA',
    description: 'Corporate Tax registration with FTA, structure advice, and reporting requirements under 2024 rules.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    icon: Building2,
    title: 'Free Zone Governance',
    description: 'Board Resolutions, shareholder updates, license renewals, and regulatory filings for DMCC, IFZA, RAKEZ, DAFZA.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    icon: Fingerprint,
    title: 'UBO Declarations',
    description: 'Identify true beneficial owners, structure shareholder info, and file UBO disclosures via MOE Portal.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
  },
  {
    icon: UserCheck,
    title: 'Labour & Visa Compliance',
    description: 'Employee contract audits, MoHRE compliance, visa status reviews, onboarding/termination procedures.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
  },
  {
    icon: ClipboardCheck,
    title: 'VAT Registration & Filing',
    description: 'VAT registration, monthly/quarterly returns, and FTA audit preparation — fully aligned with your activity.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
];

const whoNeeds = [
  {
    icon: Building2,
    title: 'Mainland Multi-National Companies',
    description: 'Mainland LLCs and branches operating across jurisdictions must comply with ESR, Corporate Tax, and MoHRE.',
    color: 'from-cyan-400 to-blue-600',
  },
  {
    icon: Scale,
    title: 'DNFBPs',
    description: 'Real estate, legal, accounting, gold trading — must register goAML and appoint a Compliance Officer.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    icon: Users,
    title: 'WPS & Labour Compliance',
    description: 'Companies onboarding expat workers must ensure contracts meet UAE Labour Law and WPS standards.',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    icon: FileSearch,
    title: 'Businesses Under Audit',
    description: 'Entities under VAT, Tax, or MoHRE audit need proper financial, tax, payroll, and labour documentation.',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Free Zone Expanding Companies',
    description: 'DMCC, IFZA, RAKEZ, DAFZA companies expanding or restructuring need compliance review.',
    color: 'from-pink-400 to-rose-600',
  },
  {
    icon: Globe,
    title: 'Offshore Companies',
    description: 'RAK ICC, JAFZA Offshore — must disclose UBOs, file ESR reports, and maintain annual compliance.',
    color: 'from-sky-400 to-blue-600',
  },
];

const risks = [
  {
    icon: Ban,
    title: 'License Suspension or Cancelation',
    description: 'Failure to file ESR, UBO, or Corporate Tax can lead to suspension or cancelation of your business license.',
    color: 'from-red-400 to-rose-600',
  },
  {
    icon: DollarSign,
    title: 'Fines Up to AED 500,000',
    description: 'FTA, MoHRE, or Free Zones impose fines — from AED 10,000 for minor violations to AED 500,000 for serious ones.',
    color: 'from-orange-400 to-red-600',
  },
  {
    icon: XCircle,
    title: 'Visa Rejections',
    description: 'MoHRE and immigration require updated labour contracts, WPS, and documents — errors cause visa non-approvals.',
    color: 'from-rose-400 to-pink-600',
  },
  {
    icon: TrendingDown,
    title: 'Bank Delays',
    description: 'Incomplete ESR/UBO declarations or tax issues delay or deny bank accounts and credit facilities.',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: ShieldAlert,
    title: 'Personal Legal Liability',
    description: 'Directors and shareholders can face personal fines, disqualification, or even criminal liability.',
    color: 'from-red-500 to-red-700',
  },
];

const whyChooseUs = [
  { icon: Award, label: 'Deep UAE Regulatory Expertise' },
  { icon: Globe, label: 'Mainland, Free Zone & Offshore' },
  { icon: Clock, label: 'Real-Time Deadline Monitoring' },
  { icon: ShieldCheck, label: 'MOF, FTA, MoHRE Compliance' },
  { icon: Eye, label: 'Fully Transparent Pricing' },
  { icon: Lock, label: 'Local + Global Standards' },
];

const faqs = [
  {
    q: 'What is corporate compliance in the UAE, and why is it important?',
    a: 'Corporate compliance in the UAE means fulfilling regulatory requirements — ESR, UBO, Corporate Tax, VAT, AML/CFT, and labour laws. It ensures your business remains licensed, banked, and legally protected.',
  },
  {
    q: 'Who must file Economic Substance Regulations (ESR) in the UAE?',
    a: 'ESR applies to businesses conducting relevant activities — consultancy, holding, shipping, financing, and IP. They must file notifications and ESR reports with the Ministry of Finance.',
  },
  {
    q: 'What happens if I miss my UBO filing deadlines?',
    a: 'Fines up to AED 100,000, license cancellation, and Free Zone or DED investigations. We help avoid this with accurate, on-time filings.',
  },
  {
    q: 'Is Corporate Tax mandatory for Free Zone companies?',
    a: 'Yes. Free Zone companies must register for Corporate Tax. Qualifying income may get 0% rate; non-qualifying income is taxed at 9%.',
  },
  {
    q: 'Do small businesses need compliance services in the UAE?',
    a: 'Absolutely. ESR, UBO, VAT, and WPS obligations apply to all registered businesses — regardless of size.',
  },
  {
    q: 'What is AML/CFT compliance, and who needs to comply?',
    a: 'Anti-Money Laundering / Counter-Terrorism Financing. DNFBPs (real estate, legal, accounting, gold) must register goAML and appoint a Compliance Officer.',
  },
  {
    q: 'What is WPS, and how do I comply?',
    a: 'Wages Protection System. Employers must pay salaries through WPS-linked bank accounts and maintain MoHRE-compliant records.',
  },
  {
    q: 'Will you help during a government audit?',
    a: 'Yes. We prepare all documentation, represent you to MOF/FTA/MoHRE, and ensure a clean audit closure.',
  },
  {
    q: 'What are the penalties for non-compliance?',
    a: 'Fines up to AED 500,000+, license suspension, visa rejections, bank delays, and personal legal liability for directors.',
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
    description: 'Bookkeeping, VAT, and financial reporting.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
    gradient: 'from-violet-400 to-purple-600',
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
export default function Compliance() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO BANNER === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/95 via-blue-900/75 to-cyan-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

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
          <ShieldCheck size={100} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block"
        >
          <Scale size={80} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
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
                <span className="text-white font-bold">Compliance Services</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6"
              >
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Stay Legally Sound
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg"
              >
                Compliance Services in{' '}
                <span className="text-cyan-300">UAE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
              >
                End-to-end regulatory support for Mainland, Free Zone, and
                Offshore jurisdictions. ESR, UBO, Corporate Tax, VAT, AML, and
                WPS — all managed by experts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={getWhatsAppLink(
                    "Hi! I need compliance services for my UAE business."
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
                {['UBO Filing', 'ESR Reports', 'Zero Penalties'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                  >
                    <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-[100px]"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              </motion.div>

              {/* Card 1 — UBO Filed */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[260px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="absolute -top-2.5 -right-2.5">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-teal-600 text-white shadow-md">
                        Filed
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                        <Fingerprint size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          UBO
                        </p>
                        <h3 className="text-base font-black text-[#0A0F1F]">
                          Declaration
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-3xl font-black text-emerald-600">Up to date</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-cyan-200 to-transparent mb-3" />
                    <p className="text-xs text-[#64748B] font-medium">
                      MOE Portal submitted
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 — ESR */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[240px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg">
                        <Scale size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          ESR Report
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          Ministry of Finance
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                      Compliant
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        Submitted on time
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 — Zero Fines */}
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
                        <ShieldCheck size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Penalties
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          This Year
                        </h3>
                      </div>
                    </div>
                    <div className="text-3xl font-black text-emerald-600 mb-1">
                      AED 0
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      Zero fines incurred
                    </p>
                  </div>
                </motion.div>
              </motion.div>
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

      {/* === 3. UBO SECTION === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                  alt="UBO Filing"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <Fingerprint size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                        Mandatory
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        For Every UAE Business
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Fingerprint size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  UBO Filing
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is UBO and Why Is It{' '}
                <span className="gradient-text">Mandatory?</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6">
                UBO regulations require UAE businesses to disclose who
                ultimately controls or benefits from the company — even if
                they operate through other legal entities or nominees.
              </p>

              {/* Warning card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-red-500 via-rose-600 to-red-700 shadow-[0_20px_60px_rgba(239,68,68,0.3)] mb-6">
                <div
                  className="absolute inset-0 opacity-15"
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
                  <AlertTriangle size={80} className="text-white" />
                </motion.div>

                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle size={16} className="text-white" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      Failure to File
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">
                    Up to AED 100,000
                  </div>
                  <p className="text-sm text-white/90 font-medium mb-4">
                    in fines + license cancellation + authority investigations
                  </p>
                  <a
                    href={getWhatsAppLink(
                      "Hi! I need help with UBO filing for my UAE business."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-red-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle size={14} />
                    File UBO Now
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Identify true beneficial owners',
                  'Structure shareholder info',
                  'File via MOE Portal',
                  'Avoid administrative penalties',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
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

      {/* === 4. WHAT WE OFFER === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <ShieldCheck size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              End-to-End Compliance{' '}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Every regulatory filing and obligation managed for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/85 via-blue-600/70 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />

                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    <div className="absolute top-3 right-4">
                      <span className="text-5xl font-black text-white/25 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6">
                    <h3 className="text-lg font-black text-[#0A0F1F] leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                      {service.description}
                    </p>

                    <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-[0.05] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. ESR SECTION === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
                <Scale size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">
                  ESR Compliance
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-5">
                What Is ESR and{' '}
                <span className="gradient-text">Why Does It Matter?</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6">
                Economic Substance Regulations apply to UAE businesses
                conducting relevant activities — consultancy, holding,
                shipping, financing, and intellectual property. Filing must
                be timely and accurate to avoid penalties.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { label: 'Applicable Activities', value: 'Consultancy, Holding, Shipping, IP' },
                  { label: 'Filing Portal', value: 'Ministry of Finance' },
                  { label: 'Filing Frequency', value: 'Annual Notification + Report' },
                  { label: 'Penalties', value: 'Up to AED 500,000 + License Suspension' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-border"
                  >
                    <span className="text-sm font-bold text-[#64748B]">
                      {item.label}
                    </span>
                    <span className="text-sm font-black text-[#0A0F1F] text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppLink(
                  "Hi! I need help with ESR compliance and filing."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Get ESR Support
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
                  alt="ESR Filing"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent" />

                {/* Filing status card */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-5 left-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-400 opacity-40 blur-md rounded-xl" />
                      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                        <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                        Filed
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        ESR Report 2025
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Deadline card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute bottom-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-white"
                >
                  <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">
                    Next Deadline
                  </div>
                  <div className="text-sm font-black text-[#0A0F1F]">
                    Q2 2026
                  </div>
                  <div className="text-[10px] font-bold text-cyan-600 mt-0.5">
                    128 days left
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 6. WHO NEEDS IT === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Users size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Who Needs It
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Who Needs{' '}
              <span className="gradient-text">Compliance Services?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Every UAE business — regardless of size or jurisdiction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whoNeeds.map((item, i) => {
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

      {/* === 7. RISKS SECTION (DARK RED) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-red-950 via-rose-950 to-red-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-red-400/30 mb-6">
              <AlertTriangle size={14} className="text-red-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-red-200">
                Warning — Non-Compliance Risks
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              What Happens When You{' '}
              <span className="text-red-400">Don't Comply</span>
            </h2>
            <p className="text-base text-white/75 font-medium">
              Penalties, license issues, and reputational damage await the non-compliant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {risks.map((risk, i) => {
              const Icon = risk.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`group relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-red-400/20 hover:border-red-400/40 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                    i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${risk.color}`} />

                  <div className="relative mb-5">
                    <div className={`absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${risk.color} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${risk.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-base font-black text-white mb-2 leading-snug">
                    {risk.title}
                  </h3>
                  <p className="text-xs text-white/70 font-medium leading-relaxed">
                    {risk.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. WHY CHOOSE US (DARK CYAN) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-cyan-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Award size={14} className="text-cyan-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
                Stay 100% Compliant.{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Zero Penalties.
                </span>
              </h2>

              <p className="text-base text-white/85 font-medium leading-relaxed mb-8">
                We monitor every deadline, file every report, and ensure your
                business stays fully aligned with UAE laws across Mainland,
                Free Zones, and Offshore jurisdictions.
              </p>

              <div className="space-y-3 mb-8">
                {whyChooseUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <a
                href={getWhatsAppLink(
                  "Hi! I'd like to know more about your compliance services."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Talk to a Compliance Expert
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Right — Compliance Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-30 blur-[100px] rounded-full" />

              <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs font-bold text-white/70">
                    Compliance Status Dashboard
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-xl border border-white/20">
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Compliance Score
                      </p>
                      <p className="text-2xl font-black text-white">100%</p>
                      <p className="text-xs font-bold text-emerald-300 mt-1">
                        ✓ Fully Compliant
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-xl border border-white/20">
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Filings Pending
                      </p>
                      <p className="text-2xl font-black text-white">0</p>
                      <p className="text-xs font-bold text-emerald-300 mt-1">
                        All submitted
                      </p>
                    </div>
                  </div>

                  {/* Compliance checklist */}
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-2">
                    {[
                      { label: 'UBO Filing', status: 'Filed' },
                      { label: 'ESR Report', status: 'Filed' },
                      { label: 'Corporate Tax', status: 'Registered' },
                      { label: 'VAT Return', status: 'Up to date' },
                      { label: 'WPS Payroll', status: 'Compliant' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center justify-between py-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center">
                            <CheckCircle2 size={11} className="text-emerald-300" strokeWidth={3} />
                          </div>
                          <span className="text-xs font-bold text-white">{item.label}</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                          {item.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

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
                <MessageCircle size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Common Questions
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about UAE compliance. Still have
                questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-700 shadow-[0_20px_60px_rgba(6,182,212,0.3)]">
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
                  <ShieldCheck size={80} className="text-white" />
                </motion.div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">
                    Get Free Compliance Audit
                  </h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">
                    We'll review your business and highlight any compliance gaps.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I'd like a free compliance audit for my business."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
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
                  className="group relative rounded-3xl bg-white border border-border hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-cyan-700 transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-cyan-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-cyan-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">
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

      {/* === 10. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
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
              Services that pair well with compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
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
                      <ArrowRight size={14} className="text-cyan-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-blue-900/70 to-cyan-900/50" />
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
                      Stay Compliant
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Stay{' '}
                    <span className="text-cyan-300">Fully Compliant?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free compliance audit. We'll identify gaps, fix them
                    fast, and keep your business protected from penalties.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I'd like a free compliance audit for my business."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
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
                    {['Free Audit', 'Zero Penalties', 'Full Compliance'].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                      >
                        <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a
                    href={getWhatsAppLink(
                      "Hi! I'd like to discuss compliance for my business."
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
                        className="text-txt-muted group-hover:text-cyan-600 group-hover:translate-x-1 transition-all"
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
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
                          className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-cyan-600 hover:text-cyan-700 transition"
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