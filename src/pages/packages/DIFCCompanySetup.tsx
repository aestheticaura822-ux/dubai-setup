// File: src/pages/packages/DIFCCompanySetup.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  // === Used in the file ===
  ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Phone, MessageCircle, Home as HomeIcon, Clock,
  Award, FileText, DollarSign, Zap, Target, Crown, 
  UserCheck, Landmark, 
  Scale, Layers,  Rocket, 
  RefreshCw, Globe2, ShieldCheck,
  Calculator,  Package, 
  Laptop, Store as StoreIcon,
  ChevronRight,
  Gavel, Users,
  FileSignature, ClipboardCheck, ScrollText,  Receipt,} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Building2, value: '4,000+', label: 'Companies', color: 'from-indigo-400 to-blue-600' },
  { icon: Gavel, value: 'Common Law', label: 'Legal System', color: 'from-blue-400 to-cyan-600' },
  { icon: DollarSign, value: 'AED 25K', label: 'Starting Cost', color: 'from-cyan-400 to-teal-600' },
  { icon: Clock, value: '3-5', label: 'Days Setup', color: 'from-teal-400 to-emerald-600' },
];

const whyChooseDIFC = [
  {
    icon: Gavel,
    title: 'English Common Law',
    description: 'Contracts, courts, and structures familiar to international investors — with DIFC Courts providing an independent common-law judiciary with worldwide recognition.',
    color: 'from-indigo-400 to-blue-600',
  },
  {
    icon: DollarSign,
    title: 'Zero Personal Income Tax',
    description: 'Enjoy 0% personal income tax and 0% tax on qualifying activities. Full profit retention in one of the world\'s most tax-efficient financial hubs.',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    icon: Building2,
    title: '4,000+ Global Companies',
    description: 'Join major global banks, funds, family offices, and wealth managers already operating within the DIFC ecosystem.',
    color: 'from-cyan-400 to-teal-600',
  },
  {
    icon: Scale,
    title: 'DIFC Courts',
    description: 'Independent common-law judiciary with worldwide recognition — a top choice for family offices, wealth managers, and international financial firms.',
    color: 'from-teal-400 to-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Inward Investment Friendly',
    description: 'A leading destination for family offices and wealth managers. Easy access to capital, top talent, and international markets.',
    color: 'from-emerald-400 to-green-600',
  },
  {
    icon: Globe2,
    title: 'Strategic Location',
    description: 'Prime location with excellent connectivity to key transport links, world-class infrastructure, and a thriving business community.',
    color: 'from-green-400 to-lime-600',
  },
];

const services = [
  {
    icon: Building2,
    title: 'Free Zone Company Formation',
    description: 'Set up in DIFC or any UAE free zone with 100% ownership, zero corporate tax, and full profit repatriation.',
    color: 'from-indigo-400 to-blue-600',
  },
  {
    icon: Landmark,
    title: 'Mainland Company Formation',
    description: 'Trade directly in the UAE market with a mainland license. We handle DED paperwork, sponsorship, and licensing.',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    icon: FileText,
    title: 'Trade License in Dubai',
    description: 'Get your commercial, professional, or industrial trade license quickly with full regulatory compliance.',
    color: 'from-cyan-400 to-teal-600',
  },
  
  {
    icon: Receipt,
    title: 'Accounting & Tax Services',
    description: 'Stay compliant with UAE corporate tax and VAT. Bookkeeping, VAT returns, and financial reporting.',
    color: 'from-green-400 to-lime-600',
  },
];

const costTable = [
  { license: 'Commercial License', cost: 'AED 25,000 – 40,000', bestFor: 'Trading, fintech, professional services', color: 'from-indigo-400 to-blue-600', icon: StoreIcon },
  { license: 'Tech Startup License', cost: 'AED 18,000 – 25,000', bestFor: 'Tech & innovation companies', color: 'from-blue-400 to-cyan-600', icon: Laptop },
  { license: 'Branch License', cost: 'AED 20,000 – 30,000', bestFor: 'Existing global firms', color: 'from-cyan-400 to-teal-600', icon: Building2 },
];

const comparisonData = [
  { factor: 'Legal System', difc: 'Common Law', mainland: 'Civil Law', jafza: 'Free Zone Regs', dmcc: 'Free Zone Regs', highlight: true, color: 'from-indigo-400 to-blue-600' },
  { factor: 'Starting Cost', difc: 'AED 25,000', mainland: 'AED 8,500', jafza: 'AED 12,000', dmcc: 'AED 15,000', highlight: false, color: 'from-blue-400 to-cyan-600' },
  { factor: 'Trade Inside UAE', difc: 'Yes (Approved)', mainland: 'Yes', jafza: 'Via Distributor', dmcc: 'Via Partner', highlight: true, color: 'from-cyan-400 to-teal-600' },
  { factor: 'Best For', difc: 'Finance, Funds, Law', mainland: 'Local Market', jafza: 'Logistics', dmcc: 'Commodities, Crypto', highlight: false, color: 'from-teal-400 to-emerald-600' },
];

const setupPackages = [
  {
    id: 'freezone',
    icon: Building2,
    title: 'Free Zone License',
    price: 'AED 5,999',
    tagline: 'No Residency',
    category: 'Entry',
    color: 'from-indigo-500 to-blue-700',
    badge: 'Basic',
    badgeColor: 'from-indigo-500 to-blue-600',
    includes: [
      'Free zone license',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium Dubai address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 'freezone-visa',
    icon: Crown,
    title: 'Free Zone License with Residency',
    price: 'AED 11,999',
    tagline: 'With UAE Residency',
    category: 'Popular',
    color: 'from-blue-500 to-cyan-700',
    badge: 'Popular',
    badgeColor: 'from-blue-500 to-cyan-600',
    includes: [
      'Free zone license',
      '1 UAE residency / investor visa',
      'Medical, Emirates ID & status change',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium Dubai address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 'mainland',
    icon: Landmark,
    title: 'Mainland License with Residency',
    price: 'AED 16,999',
    tagline: 'Full UAE Market',
    category: 'Premium',
    color: 'from-cyan-500 to-teal-700',
    badge: 'Premium',
    badgeColor: 'from-cyan-500 to-teal-600',
    includes: [
      'Mainland license',
      '1 UAE residency / investor visa',
      'Medical, Emirates ID, and status change',
      'Free bank account opening assistance',
      'Free VAT consultation',
    ],
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Choose Legal Structure',
    description: 'Company limited by shares, foreign branch, or investment vehicle — we help you decide.',
    color: 'from-indigo-400 to-blue-600',
  },
  {
    step: '02',
    icon: FileSignature,
    title: 'Reserve Name & Approval',
    description: 'Reserve your name and seek DIFC approval for your proposed business activity.',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Execute Documents',
    description: 'Execute incorporation documents before the DIFC Registrar.',
    color: 'from-cyan-400 to-teal-600',
  },
  {
    step: '04',
    icon: ScrollText,
    title: 'Obtain Trading License',
    description: 'Receive your DIFC trading license after office and fee confirmation.',
    color: 'from-teal-400 to-emerald-600',
  },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: 'End-to-End Support', desc: 'License to launch, fully managed' },
  { icon: Gavel, label: 'DIFC Expertise', desc: 'Deep knowledge of DIFC regulations' },
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees, ever' },
  { icon: UserCheck, label: 'Dedicated Manager', desc: 'Personal relationship manager' },
  { icon: RefreshCw, label: 'Post-Licensing', desc: 'PRO, accounting & compliance' },
  { icon: Zap, label: 'Fast 3-5 Day License', desc: 'Fast-track processing' },
];

const faqs = [
  {
    q: 'How long does it take to set up a business in DIFC?',
    a: 'Most businesses are fully registered and operational within 3-5 working days, depending on the license type and required approvals.'
  },
  {
    q: 'Can I set up a business in DIFC as a foreigner?',
    a: 'Yes. Foreigners can set up businesses in Dubai Free Zones with 100% ownership. Mainland companies may require a local sponsor depending on the business activity.'
  },
  {
    q: 'Do I need to be physically present in Dubai?',
    a: 'Most of the registration process can be done remotely. Our team handles the paperwork and government submissions on your behalf.'
  },
  {
    q: 'What types of businesses can I set up in DIFC?',
    a: 'You can set up commercial, professional, industrial, e-commerce, and freelance businesses depending on your chosen license type. DIFC is especially suited for financial services, fintech, funds, law firms, and wealth management.'
  },
  {
    q: 'What is the starting cost for DIFC setup?',
    a: 'DIFC commercial licenses start from AED 25,000, tech startup licenses from AED 18,000, and branch licenses from AED 20,000. Year 1 estimate ranges from AED 45,000 to 70,000 depending on license and office.'
  },
  {
    q: 'Why is DIFC more expensive than other Free Zones?',
    a: 'DIFC is a premium financial hub offering English common law, DIFC Courts, world-class infrastructure, and access to global financial networks — reflected in the pricing.'
  },
  {
    q: 'What legal system applies in DIFC?',
    a: 'DIFC operates under English common law — contracts, courts, and structures familiar to international investors, with the independent DIFC Courts providing worldwide-recognized judgments.'
  },
  {
    q: 'Can DIFC companies trade inside the UAE?',
    a: 'Yes, for approved activities. DIFC companies can trade with mainland clients through approved channels, subject to regulatory compliance.'
  },
  {
    q: 'Does DIFC offer visa sponsorship?',
    a: 'Yes. DIFC companies can sponsor investor visas, employee visas, and dependent visas for family members with full PRO support.'
  },
  {
    q: 'Why choose Setup Zone Dubai for DIFC setup?',
    a: 'We offer transparent pricing, DIFC expertise, dedicated relationship managers, and end-to-end support — from license to visa to banking. All with a proven track record.'
  },
];

// ============ COMPONENT ============
export default function DIFCCompanySetup() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-indigo-950/80 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Gavel size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Packages</span><span>/</span>
                <span className="text-white font-bold">DIFC Company Setup</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-indigo-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">MEASA's Leading Financial Hub</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                DIFC Company <span className="text-indigo-300">Setup Dubai</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                The Dubai International Financial Centre (DIFC) is the leading financial hub in the Middle East, Africa, and South Asia (MEASA). English common law, independent courts, and 4,000+ global companies.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#packages" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  View Packages
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in DIFC Company Setup in Dubai.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['Common Law', '0% Tax', '3-5 Days', '4,000+ Companies'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Calculator Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-indigo-300 shadow-[0_0_20px_rgba(129,140,248,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-blue-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-cyan-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <Link to="/calculator" className="block group">
                    <div className="relative w-[340px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calculator size={16} className="text-white" strokeWidth={2.5} />
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">Cost Calculator</span>
                        </div>
                        <span className="text-[10px] font-black text-white/80 uppercase tracking-widest group-hover:text-white transition">
                          Try Now →
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            <Calculator size={26} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-0.5">Instant Estimate</div>
                            <div className="text-base font-black text-[#0A0F1F]">Calculate Your Cost</div>
                          </div>
                        </div>

                        <div className="space-y-3 mb-5">
                          <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                            <div className="flex items-center gap-2">
                              <Package size={16} className="text-indigo-600" strokeWidth={2.5} />
                              <span className="text-xs font-bold text-[#0A0F1F]">Choose Package</span>
                            </div>
                            <ChevronRight size={14} className="text-indigo-600" strokeWidth={2.5} />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-indigo-600" strokeWidth={2.5} />
                              <span className="text-xs font-bold text-[#0A0F1F]">Select Visa Count</span>
                            </div>
                            <ChevronRight size={14} className="text-indigo-600" strokeWidth={2.5} />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                            <div className="flex items-center gap-2">
                              <DollarSign size={16} className="text-indigo-600" strokeWidth={2.5} />
                              <span className="text-xs font-bold text-[#0A0F1F]">Get Instant Price</span>
                            </div>
                            <ChevronRight size={14} className="text-indigo-600" strokeWidth={2.5} />
                          </div>
                        </div>

                        <div className="pt-5 border-t border-dashed border-indigo-200">
                          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <Calculator size={16} className="text-white" strokeWidth={2.5} />
                            <span className="text-xs font-black text-white uppercase tracking-widest">Open Calculator</span>
                            <ArrowRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                          </div>
                          <p className="text-center text-[10px] font-semibold text-slate-500 mt-3">
                            💡 Get instant quote in seconds
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. STATS ROW === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(129,140,248,0.15)] hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.color}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#0A0F1F] leading-none mb-0.5">{stat.value}</div>
                        <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHY CHOOSE DIFC — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-indigo-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Why Choose DIFC</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Why Choose <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">DIFC for Your Business?</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six powerful advantages of setting up in DIFC — MEASA's leading financial hub.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseDIFC.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-3 leading-tight">{item.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 4. COST TABLE === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Calculator size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">2026 Cost Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              DIFC <span className="gradient-text">Cost & Packages</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">DIFC is a common-law financial free zone — companies operate under English law with the DIFC Courts and strong investor protection.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-white">
            <div className="bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-700 px-6 py-5">
              <div className="grid grid-cols-12 gap-4 text-xs font-black text-white uppercase tracking-widest">
                <div className="col-span-4">License Type</div>
                <div className="col-span-4">Starting Cost</div>
                <div className="col-span-4">Best For</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {costTable.map((row, i) => {
                const Icon = row.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-indigo-50/50 transition-colors"
                  >
                    <div className="col-span-4 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${row.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-black text-[#0A0F1F]">{row.license}</span>
                    </div>
                    <div className="col-span-4 flex items-center">
                      <span className="text-sm font-black text-indigo-600">{row.cost}</span>
                    </div>
                    <div className="col-span-4 flex items-center">
                      <span className="text-xs font-medium text-[#64748B]">{row.bestFor}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="px-6 py-4 bg-slate-50/70 border-t border-border">
              <p className="text-xs text-[#64748B] font-medium italic">
                DIFC Year 1 estimate: <span className="font-black text-indigo-600">AED 45,000 – 70,000</span> depending on license and office. Premium brand index vs other zones reflected in price.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 5. COMPARISON TABLE === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Scale size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Compare Jurisdictions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              DIFC vs Mainland vs <span className="gradient-text">JAFZA vs DMCC</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">See the differences at a glance to make the right choice.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-white overflow-x-auto">
            <div className="bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-700 px-6 py-5 min-w-[800px]">
              <div className="grid grid-cols-5 gap-4 text-xs font-black text-white uppercase tracking-widest">
                <div>Factor</div>
                <div className="flex items-center gap-2">
                  <Crown size={12} className="text-amber-300" />
                  DIFC
                </div>
                <div>Mainland</div>
                <div>JAFZA</div>
                <div>DMCC</div>
              </div>
            </div>
            <div className="divide-y divide-border min-w-[800px]">
              {comparisonData.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="grid grid-cols-5 gap-4 px-6 py-5 hover:bg-indigo-50/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${row.color} flex items-center justify-center shadow-sm`}>
                      <Layers size={14} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-black text-[#0A0F1F]">{row.factor}</span>
                  </div>
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${row.highlight ? 'bg-gradient-to-r from-indigo-100 to-blue-100 border-indigo-200' : 'bg-slate-50 border-slate-200'}`}>
                      {row.highlight && <CheckCircle2 size={12} className="text-indigo-600" strokeWidth={3} />}
                      <span className={`text-xs font-black ${row.highlight ? 'text-indigo-700' : 'text-slate-700'}`}>{row.difc}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#64748B]">{row.mainland}</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#64748B]">{row.jafza}</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#64748B]">{row.dmcc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 6. SERVICES — Light Grid === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileText size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Our Business Setup <span className="gradient-text">Services in DIFC</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six comprehensive services for your DIFC company formation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-3 leading-tight">{service.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. PACKAGES GRID === */}
      <section id="packages" className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Package size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">All-Inclusive Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Our Business Setup <span className="gradient-text">Packages in DIFC</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Transparent, all-inclusive packages starting from AED 5,999.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupPackages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div key={pkg.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />

                  <div className="relative rounded-3xl bg-white border border-border overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    <div className={`relative h-32 bg-gradient-to-br ${pkg.color} p-5 overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                      <div className="absolute top-4 right-4">
                        <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${pkg.badgeColor} border border-white/30 text-[9px] font-black text-white uppercase tracking-widest shadow-lg`}>
                          {pkg.badge}
                        </span>
                      </div>

                      <div className="relative flex items-start gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0">
                          <Icon size={26} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>

                      <div className="relative mt-4">
                        <div className="text-[9px] font-black text-white/80 uppercase tracking-widest mb-1">{pkg.category}</div>
                        <h3 className="text-lg font-black text-white leading-tight drop-shadow-lg">{pkg.title}</h3>
                      </div>
                    </div>

                    <div className="p-5 border-b border-dashed border-border">
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-1">Starting from</div>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent tracking-tight`}>
                          {pkg.price}
                        </span>
                      </div>
                      <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">{pkg.tagline}</div>
                    </div>

                    <div className="p-5 flex-1">
                      <div className="text-[10px] font-black text-[#0A0F1F] uppercase tracking-widest mb-3">Includes:</div>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle2 size={10} className="text-white" strokeWidth={3} />
                            </div>
                            <span className="text-xs font-medium text-[#475569] leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 pt-0">
                      <a
                        href={getWhatsAppLink(`Hi! I'm interested in the DIFC ${pkg.title} package (${pkg.price}).`)}
                        target="_blank"
                        rel="noreferrer"
                        className={`group/cta flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300`}
                      >
                        <MessageCircle size={14} strokeWidth={2.5} />
                        Enquire Now
                        <ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. PROCESS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Rocket size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">5-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              DIFC Company <span className="gradient-text">Formation Process</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">From legal structure to corporate bank account — we handle everything.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-lg opacity-15">
                      <span className="text-lg font-black text-indigo-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-indigo-600 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. WHY CHOOSE US — Dark === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-indigo-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Your Trusted <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">DIFC Setup Partner</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six reasons why businesses trust us with their DIFC setup.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r from-indigo-400 to-blue-600 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-2 leading-tight">{item.label}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about DIFC Setup. Still have questions? We're one message away.
              </p>

              {/* Mini Calculator CTA */}
              <Link to="/calculator" className="group block relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Calculator size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calculator size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Estimate Your Cost</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Use our calculator to get an instant quote for your DIFC package.</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-indigo-700 font-bold text-xs shadow-lg group-hover:scale-105 transition-transform">
                    Open Calculator
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(129,140,248,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-indigo-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-indigo-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-indigo-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pl-20">
                    <div className="pt-2 border-t border-dashed border-border">
                      <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 11. FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-indigo-950/70 to-blue-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Ready to Launch in DIFC?</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Start Your Business in <span className="text-indigo-300">DIFC?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Contact our team of business setup experts today for a free consultation. We'll guide you through every step of the DIFC company formation process.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for DIFC Company Setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '3-5 Days Setup', 'Common Law'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss DIFC Company Setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-indigo-600 hover:text-indigo-700 transition">
                          Get Directions<ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Clock size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Working Hours</p>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Mon – Fri</span><span className="font-black text-[#0A0F1F]">9 AM – 6 PM</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Saturday</span><span className="font-black text-[#0A0F1F]">10 AM – 5 PM</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Sunday</span><span className="font-black text-red-500">Closed</span></div>
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