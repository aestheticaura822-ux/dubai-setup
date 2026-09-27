// File: src/pages/freezones/RAKEZ.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store, Package,
  ShoppingCart, UserCheck, Factory, Warehouse, Truck, Ship, 
  CreditCard, BadgeCheck,  Scale, Layers,
   Database,  Shield, Rocket, Percent,
  Wallet, Code, Megaphone, Palette,  BarChart3,  Leaf, GraduationCap,
   RefreshCw, HeartHandshake, ClipboardCheck, Microscope, 
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Building2, value: '18,000+', label: 'Global Companies', color: 'from-rose-400 to-red-600' },
  { icon: Globe, value: '100+', label: 'Countries', color: 'from-red-400 to-orange-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-orange-400 to-amber-600' },
  { icon: Clock, value: '3-5', label: 'Days Setup', color: 'from-amber-400 to-yellow-600' },
];

const whyChoose = [
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'No local Emirati sponsor required. Complete control over your business operations, profits, and decision-making.',
    color: 'from-rose-400 to-red-600'
  },
  {
    icon: DollarSign,
    title: '0% Corporate & Personal Tax',
    description: 'No corporate income tax or personal income tax — maximize profits and minimize long-term financial liabilities.',
    color: 'from-red-400 to-orange-600'
  },
  {
    icon: Wallet,
    title: 'Full Repatriation of Capital & Profits',
    description: 'Transfer your profits back to your home country without restrictions — a big bonus for international businesses and foreign investors.',
    color: 'from-orange-400 to-amber-600'
  },
  {
    icon: Package,
    title: 'Duty-Free Business Zone',
    description: 'Trade in the Free Zone without import and export customs duties — cost-effective operations for logistics, e-commerce, manufacturing, and trade.',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    icon: Truck,
    title: 'Direct Access to RAK Logistics',
    description: 'Immediate access to RAK seaports, UAE highways, and international airports — faster supply chain movement for import-export operations.',
    color: 'from-yellow-400 to-lime-600'
  },
  {
    icon: Zap,
    title: 'Rapid Company Formation',
    description: 'From license approval and visa processing to office setup — your business can be up and running in just a few days.',
    color: 'from-lime-400 to-emerald-600'
  },
];

const licenseTypes = [
  {
    icon: Store,
    title: 'Commercial License',
    description: 'For general trading, retail, and import-export businesses.',
    code: 'CML',
    color: 'from-rose-400 to-red-600'
  },
  {
    icon: Factory,
    title: 'Industrial License',
    description: 'For manufacturing, packaging, and assembling operations.',
    code: 'IND',
    color: 'from-red-400 to-orange-600'
  },
  {
    icon: Briefcase,
    title: 'Service License',
    description: 'For marketing, legal, logistics, and professional services.',
    code: 'SRV',
    color: 'from-orange-400 to-amber-600'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce License',
    description: 'Sell products online worldwide with full e-commerce capabilities.',
    code: 'ECM',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    icon: UserCheck,
    title: 'Freelance Permit',
    description: 'For creative professionals, consultants, and independent specialists.',
    code: 'FRL',
    color: 'from-yellow-400 to-lime-600'
  },
  {
    icon: Layers,
    title: 'Dual License',
    description: 'Conduct business in RAKEZ and the UAE mainland under one license.',
    code: 'DUAL',
    color: 'from-lime-400 to-emerald-600'
  },
];

const facilities = [
  {
    icon: Building2,
    title: 'Smart Offices',
    description: 'Furnished, plug-and-play offices designed for startups, consultants, and small businesses.',
    color: 'from-rose-400 to-red-600',
    size: 'small'
  },
  {
    icon: Crown,
    title: 'Executive Suites',
    description: 'High-standard offices in a dedicated business building — perfect for regional head offices.',
    color: 'from-red-400 to-orange-600',
    size: 'small'
  },
  {
    icon: Factory,
    title: 'Industrial Land Lease',
    description: 'Long-term leases of large industrial land plots with complete utility support and zoning approvals. Perfect for building custom factories, large-scale storage, and logistics centers with direct access to RAK Ports and UAE highways.',
    color: 'from-orange-500 to-amber-700',
    size: 'large'
  },
  {
    icon: Warehouse,
    title: 'Warehouses',
    description: 'Finished product units for logistics, distribution, storage, or light manufacturing.',
    color: 'from-amber-400 to-yellow-600',
    size: 'small'
  },
  {
    icon: GraduationCap,
    title: 'RAK Academic & Innovation Cluster',
    description: 'Unique ecosystem for tech startups, R&D, and education companies.',
    color: 'from-yellow-400 to-lime-600',
    size: 'small'
  },
];

const visaServices = [
  { icon: UserCheck, label: 'Investor Visas & Establishment Card' },
  { icon: Users, label: 'Employment Visas for Staff' },
  { icon: HeartHandshake, label: 'Family Visa Management' },
  { icon: CreditCard, label: 'Emirates ID & Medical Test' },
  { icon: BadgeCheck, label: 'Visa Stamping' },
  { icon: Crown, label: 'Golden Visa UAE Advice' },
  { icon: Shield, label: 'Full PRO Services' },
];

const formationServices = [
  { icon: Target, label: 'Business Activity Selection' },
  { icon: FileText, label: 'Domain Name Reservation' },
  { icon: ClipboardCheck, label: 'RAKEZ Company Registration' },
  { icon: Database, label: 'Document Drafting & Application' },
  { icon: DollarSign, label: 'UAE Bank Account Application' },
  { icon: Percent, label: 'RAKEZ VAT Registration' },
  { icon: Scale, label: 'Corporate Structuring' },
  { icon: Shield, label: 'Monthly Compliance Monitoring' },
];

const taxBenefits = [
  { icon: Percent, label: '0% Personal & Corporate Income Tax', detail: 'Maximum profit retention' },
  { icon: Globe, label: 'Full Foreign Ownership', detail: 'No local sponsor needed' },
  { icon: Wallet, label: 'Free Repatriation of Capital & Profits', detail: 'No restrictions' },
  { icon: Package, label: 'No Import/Export Duties', detail: 'Duty-free operations' },
  { icon: DollarSign, label: 'No Currency Restrictions', detail: 'Global transactions ready' },
  { icon: Shield, label: 'UAE Tax Advisory & VAT Registration', detail: 'Full compliance support' },
];

const digitalServices = [
  {
    icon: Globe,
    title: 'Website & E-Commerce Development',
    description: 'Professional website and online store development for your brand.',
    color: 'from-rose-400 to-red-600'
  },
  {
    icon: Database,
    title: 'CRM & CMS Integration',
    description: 'Powerful integrations to optimize your business administration.',
    color: 'from-red-400 to-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'SEO Services in RAK',
    description: 'Dominate search results and build organic traffic and credibility.',
    color: 'from-orange-400 to-amber-600'
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description: 'Tailored social media, PPC, and content strategies for engagement.',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description: 'Create a digital storefront that reflects your business vision.',
    color: 'from-yellow-400 to-lime-600'
  },
  {
    icon: BadgeCheck,
    title: 'Product Registration & Trademarks',
    description: 'Full support for product registration and trademark protection in the UAE.',
    color: 'from-lime-400 to-emerald-600'
  },
];

const postLicenseSupport = [
  { icon: FileText, label: 'Audit-Ready Bookkeeping' },
  { icon: RefreshCw, label: 'License Renewal Support' },
  { icon: Scale, label: 'Legal Drafting & Compliance' },
  { icon: CreditCard, label: 'Payment Gateway Integration' },
  { icon: DollarSign, label: 'Banking & KYC Documentation' },
  { icon: UserCheck, label: 'Visa Renewals & PRO Services' },
];

const businessActivities = [
  { icon: Store, label: 'General Trading, Retail & Wholesale', color: 'from-rose-400 to-red-600' },
  { icon: Megaphone, label: 'Media, Advertising & Creative Agencies', color: 'from-red-400 to-orange-600' },
  { icon: ShoppingCart, label: 'Online Stores, Marketplaces & E-Commerce', color: 'from-orange-400 to-amber-600' },
  { icon: Code, label: 'IT & SaaS Services, Cloud Computing', color: 'from-amber-400 to-yellow-600' },
  { icon: Microscope, label: 'Research, Education & Healthcare', color: 'from-yellow-400 to-lime-600' },
  { icon: Leaf, label: 'Renewable Energy & Advanced Manufacturing', color: 'from-lime-400 to-emerald-600' },
];

const growthStats = [
  { icon: Building2, value: '18,000+', label: 'Global Companies', color: 'from-rose-400 to-red-600' },
  { icon: Globe, value: '100+', label: 'Countries Served', color: 'from-red-400 to-orange-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Economic Zone', color: 'from-orange-400 to-amber-600' },
  { icon: DollarSign, value: 'Growing', label: 'Business Economy', color: 'from-amber-400 to-yellow-600' },
  { icon: BarChart3, value: 'Significant', label: 'Regional Impact', color: 'from-yellow-400 to-lime-600' },
  { icon: Crown, value: 'Preferred', label: 'For Global Business', color: 'from-lime-400 to-emerald-600' },
];

const faqs = [
  {
    q: 'How long does it take to register a company in RAKEZ?',
    a: 'It usually takes approximately 3-5 working days to register a company with RAKEZ, subject to business activity, documentation, and visa requirements. We fast-track the process to get your company registered without hiccups.'
  },
  {
    q: 'Can I own a company in RAKEZ as a foreigner?',
    a: 'Yes. RAKEZ allows 100% foreign ownership with no local Emirati sponsor required. You have complete control over your business operations, profits, and decision-making.'
  },
  {
    q: 'Do I need a physical office to set up in RAKEZ?',
    a: 'Not necessarily. RAKEZ offers flexible options including Smart Offices, Executive Suites, and shared workspaces. However, certain licenses and visa quotas may require a physical presence.'
  },
  {
    q: 'Is there a visa included in the company formation at RAKEZ?',
    a: 'RAKEZ license packages include visa eligibility. We handle investor visas, employment visas, family visas, Emirates ID, medical tests, and visa stamping — complete end-to-end support.'
  },
  {
    q: 'Can I open a bank account with a RAKEZ company in the UAE?',
    a: 'Yes. We provide complete assistance with UAE corporate bank account opening — including KYC documentation and bank liaison — as part of our setup services.'
  },
  {
    q: 'Is RAKEZ good for e-commerce and online businesses?',
    a: 'Absolutely. RAKEZ offers an E-Commerce License specifically designed for online stores, marketplaces, dropshipping, and digital product sellers — with full payment gateway integration support.'
  },
  {
    q: 'Is there a tax benefit in RAKEZ?',
    a: 'Yes. RAKEZ offers 0% personal and corporate income tax, no import/export duties, free repatriation of capital and profits, no currency restrictions, and UAE tax advisory with VAT registration.'
  },
  {
    q: 'Can I operate in both Free Zone and UAE Mainland with an RAKEZ company?',
    a: 'Yes. RAKEZ offers a Dual License option that combines Free Zone benefits with access to the UAE mainland — perfect for businesses wanting maximum market reach.'
  },
  {
    q: 'What if I need help post company set up?',
    a: 'We provide extensive post-license support including audit-ready bookkeeping, license renewal, legal drafting, payment gateway integration, banking documentation, and visa renewals with full PRO services.'
  },
  {
    q: 'Why should I choose Setup Zone Dubai for RAKEZ setup?',
    a: 'We provide end-to-end support — from business activity selection and domain name reservation to company registration, bank account, VAT, compliance, and digital growth services. Our track record speaks for speed, accuracy, and full transparency.'
  },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-rose-400 to-red-600' },
  { slug: 'golden-visa', title: 'Golden Visa', description: '10-year UAE residency for investors and talents.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-500' },
  { slug: 'compliance', title: 'Compliance Services', description: 'UBO, ESR, AML, and VAT advisory.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-orange-400 to-red-600' },
];

// ============ COMPONENT ============
export default function RAKEZ() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-red-900/75 to-orange-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Factory size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Ship size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">RAKEZ Free Zone</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-rose-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Business Begins with RAKEZ</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                RAKEZ <span className="text-rose-300">Free Zone</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                One of the most powerful business ecosystems in the UAE. Cost-effective, flexible, and central — with access to regional and global markets.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in RAKEZ Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', '3-5 Days Setup', '18,000+ Companies'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — RAKEZ Ecosystem Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-rose-400 to-red-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-rose-300 shadow-[0_0_20px_rgba(251,113,133,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-red-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-orange-300" />
              </motion.div>

              {/* RAKEZ Ecosystem Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-red-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Factory size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">RAKEZ</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg">
                          <Building2 size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Location</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Ras Al Khaimah, UAE</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Companies</div>
                          <div className="text-lg font-black text-rose-600">18K+</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Countries</div>
                          <div className="text-lg font-black text-red-600">100+</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Factory size={18} className="text-rose-500" />
                        <Warehouse size={18} className="text-red-500" />
                        <Truck size={18} className="text-orange-500" />
                        <Ship size={18} className="text-amber-500" />
                        <ShoppingCart size={18} className="text-yellow-500" />
                        <GraduationCap size={18} className="text-lime-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center">
                          <ArrowRight size={12} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,113,133,0.15)] hover:-translate-y-1">
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

      {/* === 3. INTRODUCTION — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-rose-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80" alt="RAKEZ Free Zone" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Economic Zone</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Ras Al Khaimah, UAE</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Growth-Friendly Business Zone</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Open Up <span className="gradient-text">Global Business Opportunities</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  RAKEZ (Ras Al Khaimah Economic Zone) is one of the most powerful business ecosystems in the UAE — providing a <span className="font-black text-[#0A0F1F]">cost-effective, central, and flexible option</span> for global entrepreneurs, SMEs, manufacturers, and startups.
                </p>
                <p>
                  Whether you're setting up a trading company, tech startup, consultancy, or manufacturing — RAKEZ provides the <span className="font-black text-[#0A0F1F]">infrastructure, license combinations, tax incentives, and more</span> to enable a successful UAE experience.
                </p>
                <p>
                  As a gateway to regional and global markets, RAKEZ combines the power of a <span className="font-black text-[#0A0F1F]">world-class free zone with the benefits of a dynamic mainland economy</span>. It supports over 18,000 companies from 100+ countries — and you could be next.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['100% Foreign Ownership', 'Zero Tax Environment', 'Fast-Track Licensing', 'Global Market Access', 'Dual License Options', 'World-Class Infrastructure'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center">
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

      {/* === 4. WHY CHOOSE — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-rose-950 via-red-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Growth-Friendly Business Zone</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Why Choose <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">RAKEZ Free Zone?</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six powerful reasons to launch your business in RAKEZ.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => {
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

      {/* === 5. LICENSE TYPES — Digital Certificate Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <FileText size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Flexible Licenses, Global Reach</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What License Types Are <span className="gradient-text">Available in RAKEZ?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We help you determine the best RAKEZ license considering your activity.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {licenseTypes.map((license, i) => {
              const Icon = license.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${license.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                    <div className={`h-1.5 bg-gradient-to-r ${license.color}`} />

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                          <Icon size={26} className="text-white" strokeWidth={2.2} />
                        </div>
                        <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${license.color} shadow-md`}>
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">{license.code}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight">{license.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4">{license.description}</p>

                      <div className="relative py-2 mb-3">
                        <div className="border-t-2 border-dashed border-border" />
                        <div className="absolute -left-8 -top-1 w-4 h-4 rounded-full bg-slate-100 border-r-2 border-dashed border-border" />
                        <div className="absolute -right-8 -top-1 w-4 h-4 rounded-full bg-slate-100 border-l-2 border-dashed border-border" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">Available</span>
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${license.color} flex items-center justify-center`}>
                          <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. FACILITIES — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Building2 size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Office & Warehouse Facilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Scalable Infrastructure <span className="gradient-text">for Every Business Size</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">From startups to large industrial companies — RAKEZ has flexible, economical, long-term value.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-red-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Building2 size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Smart Offices</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Furnished, plug-and-play offices designed for startups, consultants, and small businesses.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-400 to-orange-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Crown size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Executive Suites</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">High-standard offices in a dedicated business building — perfect for regional head offices.</p>
            </motion.div>

            {/* Large card — Industrial Land Lease */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-500 via-red-600 to-orange-700 p-6 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Factory size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Factory size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2">Industrial Land Lease</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">Long-term leases of large industrial land plots with complete utility support.</p>
                </div>
              </div>
            </motion.div>

            {/* Small card 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-600" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Warehouse size={22} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-base font-black text-[#0A0F1F] mb-1.5">Warehouses</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">Finished product units for logistics, distribution, storage, or light manufacturing.</p>
            </motion.div>

            {/* Small card 4 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-gradient-to-br from-yellow-500 via-lime-600 to-emerald-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <GraduationCap size={140} className="text-white" />
              </motion.div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <GraduationCap size={22} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-base font-black text-white mb-1.5">RAK Academic & Innovation Cluster</h3>
                  <p className="text-xs text-white/90 font-medium leading-relaxed">Unique ecosystem for tech startups, R&D, and education companies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. VISA SERVICES — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Shield size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">RAKEZ Visa Process Simplified</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Visa & Immigration <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">Services for Entrepreneurs</span>
            </h2>
            <p className="text-base text-white/70 font-medium">From visa stamping to issuing immigration cards — everything is covered.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visaServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group">
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-white leading-tight">{service.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. FORMATION SERVICES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <Rocket size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Fast, Hassle-Free Formation</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How We Help You <span className="gradient-text">Start a RAKEZ Company</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Complete end-to-end business setup services — from activity selection to compliance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formationServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-bold text-[#0A0F1F] leading-tight">{service.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. TAX & OWNERSHIP BENEFITS — Dark === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-rose-950 via-red-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <DollarSign size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">RAKEZ Offers Full Control</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Tax & Ownership <span className="bg-gradient-to-r from-rose-300 to-orange-300 bg-clip-text text-transparent">Benefits of RAKEZ</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Perfect for global investors and entrepreneurs seeking maximum profit efficiency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {taxBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r from-rose-400 to-orange-600 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-2 leading-tight">{benefit.label}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{benefit.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. DIGITAL GROWTH SERVICES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Wide Range. Easy Setup.</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Grow Your Business <span className="gradient-text">Digitally in RAKEZ</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We equip you with digital infrastructure and marketing tools to compete in the marketplace.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {digitalServices.map((service, i) => {
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

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-sm text-[#64748B] font-medium mt-8 max-w-2xl mx-auto">
            With Setup Zone Dubai, you're not just starting a business — you're developing a sustainable brand that's ready to grow, scale, and succeed.
          </motion.p>
        </div>
      </section>

      {/* === 11. POST-LICENSE SUPPORT + BUSINESS ACTIVITIES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-rose-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left — Post-License Support */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-6">
                  <Shield size={14} className="text-rose-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Post-License Support</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Compliance Services <span className="gradient-text">We Provide</span>
                </h2>

                <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-6">
                  We ensure operational continuity and compliance — long after you're licensed.
                </p>

                <div className="space-y-3">
                  {postLicenseSupport.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-rose-50/50 to-red-50/50 border border-rose-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0">
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold text-[#0A0F1F]">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right — Business Activities */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
                  <Target size={14} className="text-orange-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-orange-700">Business Activities</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  What Activities Are <span className="gradient-text">Allowed in RAKEZ?</span>
                </h2>

                <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-6">
                  We align your business goals with RAKEZ's approved categories.
                </p>

                <div className="space-y-3">
                  {businessActivities.map((activity, i) => {
                    const Icon = activity.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-orange-50/50 to-amber-50/50 border border-orange-100">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold text-[#0A0F1F]">{activity.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 12. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              A Leading <span className="gradient-text">Economic Zone in the UAE</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Rapidly growing ecosystem for global entrepreneurs and international businesses.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(251,113,133,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>

                  <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-none mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 13. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about RAKEZ Free Zone. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-rose-500 via-red-600 to-orange-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Factory size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our RAKEZ specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about RAKEZ Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-rose-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
                      <MessageCircle size={14} />WhatsApp
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all duration-300">
                      <Phone size={14} />Call Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-rose-200 hover:shadow-[0_20px_60px_rgba(251,113,133,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-red-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-400 to-red-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-rose-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-rose-400 group-open:to-red-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-rose-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 14. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services & Guides</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your RAKEZ setup.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {relatedServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link to={`/services/${service.slug}`} className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-xl font-black text-white">{service.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm font-black">
                      <span className="gradient-text">Read More</span>
                      <ArrowRight size={14} className="text-rose-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-red-900/70 to-orange-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Launch Today</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Launch in <span className="text-rose-300">RAKEZ Free Zone?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the entire setup process — from license to launch.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for RAKEZ setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '3-5 Days Setup', '18,000+ Companies'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss RAKEZ setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-rose-600 hover:text-rose-700 transition">
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