// File: src/pages/packages/RAKEZSetupPackage.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store,
  UserCheck, Landmark, MapPin, Calendar, CreditCard, BadgeCheck,
  Scale, Layers, Shield, Rocket, Star, Wallet, Plane, HeartHandshake,
  RefreshCw, Home, Globe2, ShieldCheck, Handshake, Heart,
  Calculator, Percent, TrendingDown, Package, Gift,
  Laptop, Store as StoreIcon,
  ChevronRight,
  Gavel,
  FileSignature, ClipboardCheck, ScrollText, Receipt,
  Camera, Music, Palette, PenTool, Film, Megaphone,
  ShoppingCart, Dumbbell, Tv,
  Factory, Truck, Ship, Container, Warehouse, Cog, Hammer, Wrench,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: DollarSign, value: 'AED 5,999', label: 'Starting From', color: 'from-emerald-400 to-teal-600' },
  { icon: Package, value: '11', label: 'Packages', color: 'from-teal-400 to-green-600' },
  { icon: Clock, value: '3-7', label: 'Days Setup', color: 'from-green-400 to-emerald-600' },
  { icon: Globe, value: '100%', label: 'Ownership', color: 'from-emerald-400 to-teal-500' },
];

const packages = [
  {
    id: 1,
    icon: Plane,
    title: 'Travel & Tourism Consultancy',
    price: 'AED 14,499',
    tagline: 'With Residency Visa',
    category: 'Premium',
    color: 'from-emerald-500 to-teal-700',
    badge: 'Popular',
    badgeColor: 'from-emerald-500 to-teal-600',
    includes: [
      'Free zone license',
      '1 UAE residency / investor visa',
      'Medical, Emirates ID & status change',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 2,
    icon: Camera,
    title: 'Event Management',
    price: 'AED 14,499',
    tagline: 'With Residency Visa',
    category: 'Premium',
    color: 'from-teal-500 to-green-700',
    badge: 'Premium',
    badgeColor: 'from-teal-500 to-green-600',
    includes: [
      'Free zone license',
      '1 UAE residency / investor visa',
      'Medical, Emirates ID & status change',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: 'General Trading',
    price: 'AED 15,999',
    tagline: 'With Residency Visa',
    category: 'Premium',
    color: 'from-green-500 to-emerald-700',
    badge: 'Best Value',
    badgeColor: 'from-green-500 to-emerald-600',
    includes: [
      'Free zone license',
      '1 UAE Residency / Investor Visa',
      'Medical, Emirates ID & status change',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 4,
    icon: Palette,
    title: 'Fashion Design',
    price: 'AED 5,999',
    tagline: 'Up to 5 Activities',
    category: 'Economy',
    color: 'from-emerald-500 to-green-700',
    badge: 'Creative',
    badgeColor: 'from-emerald-500 to-green-600',
    includes: [
      'Free zone license',
      'Free lease agreement',
      'Up to 5 business activities',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 5,
    icon: Dumbbell,
    title: 'Fitness & Lifestyle',
    price: 'AED 5,999',
    tagline: 'Up to 5 Activities',
    category: 'Economy',
    color: 'from-teal-500 to-cyan-700',
    badge: 'Affordable',
    badgeColor: 'from-teal-500 to-cyan-600',
    includes: [
      'Free zone license',
      'Free lease agreement',
      'Up to 5 business activities',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 6,
    icon: ShoppingCart,
    title: 'E-Commerce',
    price: 'AED 5,999',
    tagline: 'Online Business Ready',
    category: 'Economy',
    color: 'from-cyan-500 to-teal-700',
    badge: 'Popular',
    badgeColor: 'from-cyan-500 to-teal-600',
    includes: [
      'Free zone license',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 7,
    icon: Laptop,
    title: 'IT Services',
    price: 'AED 6,449',
    tagline: 'Up to 5 Activities',
    category: 'Professional',
    color: 'from-sky-500 to-cyan-700',
    badge: 'Tech',
    badgeColor: 'from-sky-500 to-cyan-600',
    includes: [
      'Free zone license',
      'Free lease agreement',
      'Up to 5 business activities',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 8,
    icon: StoreIcon,
    title: 'General Trading',
    price: 'AED 7,999',
    tagline: 'Entry Level Trading',
    category: 'Standard',
    color: 'from-blue-500 to-sky-700',
    badge: 'Best Seller',
    badgeColor: 'from-blue-500 to-sky-600',
    includes: [
      'Free zone license',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 9,
    icon: Crown,
    title: 'Free Zone License with Lifetime UAE Residency',
    price: 'AED 11,999',
    tagline: 'Lifetime Residency',
    category: 'Premium',
    color: 'from-indigo-500 to-blue-700',
    badge: 'Exclusive',
    badgeColor: 'from-indigo-500 to-blue-600',
    includes: [
      'Free zone license',
      'Free UAE residency / investor visa for life',
      'Free lease agreement',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
  },
  {
    id: 10,
    icon: Landmark,
    title: 'Mainland License with UAE Residency',
    price: 'AED 16,999',
    tagline: 'Mainland + Residency',
    category: 'Mainland',
    color: 'from-slate-600 to-slate-800',
    badge: 'Mainland',
    badgeColor: 'from-slate-600 to-slate-700',
    includes: [
      'Mainland license',
      '1 UAE residency / investor visa',
      'Medical, Emirates ID, and status change',
      'Free bank account opening assistance',
      'Free VAT consultation',
    ],
    exampleActivities: [
      'Project management',
      'Management consultancy',
      'Commercial broker',
      'Facility management',
      'Cleaning services',
      'Building maintenance',
    ],
  },
  {
    id: 11,
    icon: Heart,
    title: 'Women Entrepreneurship',
    price: 'AED 5,999',
    tagline: 'Designed for Women Founders',
    category: 'Special',
    color: 'from-rose-500 to-pink-700',
    badge: 'Special',
    badgeColor: 'from-rose-500 to-pink-600',
    includes: [
      'Free zone license',
      'Free lease agreement',
      'Up to 5 business activities',
      'Free bank account opening assistance',
      'Premium address & shared P.O. box',
      'Free VAT consultation',
    ],
    exampleActivities: [
      'Lifestyle Coaching',
      'Digital Marketing',
      'Fashion & clothes designing',
      'Event management',
      'Consultancy services',
    ],
  },
];

// RAKEZ-specific: Industrial & Commercial Industries
const businessIndustries = [
  { icon: Factory, title: 'Industrial & Manufacturing', desc: 'Light manufacturing, assembly, production', color: 'from-emerald-400 to-teal-600' },
  { icon: Truck, title: 'Logistics & Distribution', desc: 'Warehousing, freight, supply chain', color: 'from-teal-400 to-green-600' },
  { icon: Ship, title: 'Maritime & Shipping', desc: 'Marine services, shipping, port logistics', color: 'from-green-400 to-emerald-600' },
  { icon: Container, title: 'General Trading', desc: 'Import/export, wholesale, commodities', color: 'from-cyan-400 to-teal-600' },
  { icon: Cog, title: 'Engineering & Technical', desc: 'Consultancy, contracting, technical services', color: 'from-sky-400 to-cyan-600' },
  { icon: Warehouse, title: 'Storage & Warehousing', desc: 'Bonded, cold storage, distribution hubs', color: 'from-blue-400 to-sky-600' },
];

const benefits = [
  { icon: Factory, title: 'Industrial Hub', desc: 'RAK\'s economic engine', color: 'from-emerald-400 to-teal-600' },
  { icon: DollarSign, title: 'Low-Cost Setup', desc: 'Starting from AED 5,999', color: 'from-teal-400 to-green-600' },
  { icon: Globe, title: '100% Foreign Ownership', desc: 'Full foreign ownership', color: 'from-green-400 to-emerald-600' },
  { icon: Zap, title: 'Fast 3-7 Day Setup', desc: 'Quick license issuance', color: 'from-emerald-400 to-teal-500' },
  { icon: Wallet, title: '0% Tax Environment', desc: 'Tax-free benefits', color: 'from-cyan-400 to-teal-600' },
  { icon: ShieldCheck, title: 'Cost-Effective', desc: 'Best value in UAE', color: 'from-sky-400 to-cyan-600' },
];

const processSteps = [
  { step: '01', icon: Target, title: 'Choose Your Package', desc: 'Select from our industrial-focused packages.', color: 'from-emerald-400 to-teal-600' },
  { step: '02', icon: FileSignature, title: 'Submit Documents', desc: 'Passport copies, business plan, and photos.', color: 'from-teal-400 to-green-600' },
  { step: '03', icon: ClipboardCheck, title: 'License Application', desc: 'We file with RAKEZ authority.', color: 'from-green-400 to-emerald-600' },
  { step: '04', icon: ScrollText, title: 'Receive Your License', desc: 'Licensed within 3-7 days.', color: 'from-emerald-400 to-teal-500' },
];

const whyChooseUs = [
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees, ever' },
  { icon: Zap, label: 'Fast 3-7 Day Setup', desc: 'Quick license issuance' },
  { icon: ShieldCheck, label: '100% Compliance', desc: 'Fully government approved' },
  { icon: UserCheck, label: 'Dedicated Consultant', desc: 'Personal advisor' },
  { icon: Globe, label: 'Multilingual Team', desc: 'English, Arabic, Hindi, Urdu' },
  { icon: RefreshCw, label: 'VAT Consultation', desc: 'Included free' },
  { icon: Award, label: '10,000+ Companies', desc: 'Successfully launched' },
  { icon: Handshake, label: 'End-to-End Support', desc: 'License to bank account' },
];

const faqs = [
  {
    q: 'What is RAKEZ Free Zone?',
    a: 'RAKEZ (Ras Al Khaimah Economic Zone) is one of the largest and most cost-effective free zones in the UAE — home to over 21,000 companies from 100+ countries. It offers low-cost setup, 100% foreign ownership, and quick licensing within 3-7 working days.'
  },
  {
    q: 'Where is RAKEZ located?',
    a: 'RAKEZ is located in Ras Al Khaimah, UAE — the northernmost emirate. It provides excellent connectivity to Dubai, Sharjah, and other emirates with easy access to major highways, RAK Port, and international airports.'
  },
  {
    q: 'What is included in the RAKEZ setup package?',
    a: 'Depending on the package, you get the Free Zone license, residency visa, medical & Emirates ID, lease agreement, bank account assistance, premium address, and free VAT consultation.'
  },
  {
    q: 'How much does a RAKEZ package cost?',
    a: 'Our RAKEZ packages start from AED 5,999 (Economy) and go up to AED 16,999 (Mainland + Residency). Premium packages with visa start at AED 14,499.'
  },
  {
    q: 'How long does setup take?',
    a: 'Typically 3-7 working days for license issuance, and additional 1-2 weeks for visa processing and bank account opening.'
  },
  {
    q: 'Can I customize my package?',
    a: 'Yes. All packages are starting points and can be customized to match your industrial, trading, or service business needs and budget.'
  },
  {
    q: 'Do I get a UAE residency visa?',
    a: 'Yes, select packages include a UAE investor/residency visa with medical, Emirates ID, and status change. The Free Zone License with Lifetime UAE Residency even offers lifetime residency.'
  },
  {
    q: 'Is bank account opening included?',
    a: 'Yes. All packages include free assistance with corporate bank account opening at top UAE banks.'
  },
  {
    q: 'What activities can I do in RAKEZ?',
    a: 'RAKEZ supports industrial & manufacturing, logistics & distribution, maritime & shipping, general trading, engineering & technical, storage & warehousing, and other commercial industries — with up to 5 activities in most economy packages.'
  },
  {
    q: 'Why choose Setup Zone Dubai for RAKEZ setup?',
    a: 'We offer transparent pricing, industrial sector expertise, dedicated consultants, and end-to-end support — from license to visa to bank account. All with 10,000+ successful setups.'
  },
];

// ============ COMPONENT ============
export default function RAKEZSetupPackage() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-emerald-950/80 to-teal-950/50" />
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
                <span>/</span><span>Packages</span><span>/</span>
                <span className="text-white font-bold">RAKEZ Setup Package</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Industrial & Trading Hub</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                RAKEZ Setup <span className="text-emerald-300">Package</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Ras Al Khaimah Economic Zone's cost-effective hub for industrial, trading, and commercial businesses. Affordable packages starting from just AED 5,999 — license, visa, bank account, and more.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#packages" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  View Packages
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in RAKEZ Setup Package.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['From AED 5,999', '11 Packages', '3-7 Days Setup', '100% Ownership'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Calculator Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-teal-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-green-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-2xl rounded-3xl" />
                  <Link to="/calculator" className="block group">
                    <div className="relative w-[340px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 flex items-center justify-between">
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
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            <Calculator size={26} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest mb-0.5">Instant Estimate</div>
                            <div className="text-base font-black text-[#0A0F1F]">Calculate Your Cost</div>
                          </div>
                        </div>

                        <div className="space-y-3 mb-5">
                          <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                            <div className="flex items-center gap-2">
                              <Package size={16} className="text-emerald-600" strokeWidth={2.5} />
                              <span className="text-xs font-bold text-[#0A0F1F]">Choose Package</span>
                            </div>
                            <ChevronRight size={14} className="text-emerald-600" strokeWidth={2.5} />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-emerald-600" strokeWidth={2.5} />
                              <span className="text-xs font-bold text-[#0A0F1F]">Select Visa Count</span>
                            </div>
                            <ChevronRight size={14} className="text-emerald-600" strokeWidth={2.5} />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                            <div className="flex items-center gap-2">
                              <DollarSign size={16} className="text-emerald-600" strokeWidth={2.5} />
                              <span className="text-xs font-bold text-[#0A0F1F]">Get Instant Price</span>
                            </div>
                            <ChevronRight size={14} className="text-emerald-600" strokeWidth={2.5} />
                          </div>
                        </div>

                        <div className="pt-5 border-t border-dashed border-emerald-200">
                          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg group-hover:scale-105 transition-transform duration-300">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(52,211,153,0.15)] hover:-translate-y-1">
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

      {/* === 3. INTRO — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80" alt="RAKEZ Ras Al Khaimah" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Factory size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">RAKEZ Free Zone</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Ras Al Khaimah, UAE</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">We're Here to Help!</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Affordable RAKEZ Setup Packages <span className="gradient-text">for Your UAE Business</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  Are you looking to establish your business in the thriving UAE market? Our expert team specializes in helping entrepreneurs set up successful companies across <span className="font-black text-[#0A0F1F]">65+ jurisdictions</span>.
                </p>
                <p>
                  Whether you prefer the flexibility of a Free Zone or the prestige of a Mainland trade license, we offer <span className="font-black text-[#0A0F1F]">Dubai's best business setup packages</span> to match your industrial, trading, and commercial business goals.
                </p>
                <p>
                  All packages offer a starting point for your business journey and can be <span className="font-black text-[#0A0F1F]">customized to suit your needs</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['65+ Jurisdictions', 'Industrial-First Zone', 'Customizable Packages', 'From AED 5,999', 'Fast 3-7 Day Setup', 'Full Support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
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

      {/* === 4. BUSINESS INDUSTRIES — Dark === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Factory size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Industrial & Commercial Ecosystem</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Built for <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Industry & Trade</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six industrial sectors that thrive in RAKEZ Free Zone.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessIndustries.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-3 leading-tight">{item.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. PACKAGES GRID === */}
      <section id="packages" className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Package size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">Dubai Affordable Setup Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Our <span className="gradient-text">RAKEZ Setup Packages</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">11 premium packages designed for industrial and trading businesses. All customizable.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div key={pkg.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} className="group relative">
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
                        <div className="text-[9px] font-black text-white/80 uppercase tracking-widest mb-1">{pkg.category} Package</div>
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
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">{pkg.tagline}</div>
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

                      {pkg.exampleActivities && (
                        <div className="mt-4 pt-4 border-t border-dashed border-border">
                          <div className="text-[10px] font-black text-[#0A0F1F] uppercase tracking-widest mb-2">Example Activities:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {pkg.exampleActivities.map((activity, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold text-[#475569]">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-5 pt-0">
                      <a
                        href={getWhatsAppLink(`Hi! I'm interested in the RAKEZ ${pkg.title} package (${pkg.price}).`)}
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

          {/* Custom Package CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 max-w-3xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-600 to-green-700 p-8 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Gift size={28} className="text-white" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white leading-tight mb-1">Need a Custom Industrial Package?</h3>
                  <p className="text-sm text-white/90 font-medium">Tell us your industrial or trading vision and we'll build the perfect package.</p>
                </div>
                <a
                  href={getWhatsAppLink("Hi! I need a custom RAKEZ setup package.")}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <MessageCircle size={15} />
                  Custom Quote
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 6. BENEFITS — Light Grid === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Award size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">Why RAKEZ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of <span className="gradient-text">RAKEZ Setup</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six powerful advantages for industrial and trading businesses.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full text-center overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`} />
                    <div className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xs font-black text-[#0A0F1F] mb-1 leading-tight">{benefit.title}</h3>
                    <p className="text-[10px] text-[#64748B] font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. PROCESS — Step Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Rocket size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How to <span className="gradient-text">Get Started</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">From package selection to bank account — we handle everything.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg opacity-15">
                      <span className="text-lg font-black text-emerald-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-emerald-600 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. WHY CHOOSE US — Dark === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Your Trusted <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">RAKEZ Setup Partner</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Eight reasons why industrial businesses trust us.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group">
                  <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-sm font-black text-white leading-tight mb-1">{item.label}</h3>
                        <p className="text-xs text-white/70 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about RAKEZ Free Zone. Still have questions? We're one message away.
              </p>

              <Link to="/calculator" className="group block relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-green-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Calculator size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calculator size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Estimate Your Cost</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Use our calculator to get an instant quote for your RAKEZ package.</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 font-bold text-xs shadow-lg group-hover:scale-105 transition-transform">
                    Open Calculator
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-emerald-200 hover:shadow-[0_20px_60px_rgba(52,211,153,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-emerald-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-emerald-400 group-open:to-teal-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-emerald-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 10. FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-emerald-950/70 to-teal-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Start Your Industrial Business Today</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Launch in <span className="text-emerald-300">RAKEZ Ras Al Khaimah?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll help you choose the right package and get your industrial business running in days.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for RAKEZ Setup Package.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971522973861" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['From AED 5,999', '3-7 Days Setup', '100% Ownership'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss RAKEZ Setup Package.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-emerald-600 hover:text-emerald-700 transition">
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
                          <div className="flex justify-between items-center"><span className="text-[#64748B] font-medium">Mon – Fri</span><span className="font-black text-[#0A0F1F]">8 AM – 6 PM</span></div>
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