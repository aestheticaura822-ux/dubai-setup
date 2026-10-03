// File: src/pages/services/business-setup/LocalBusinessPartner.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store,
  UserCheck, Landmark, MapPin, Calendar, CreditCard, BadgeCheck,
  Scale, Layers, Shield, Rocket, Star, Wallet, Plane, HeartHandshake,
  RefreshCw, Home, Globe2, ShieldCheck, Handshake, Heart,
  ChevronLeft, ChevronRight, Plus, Minus,
  ClipboardCheck, FileSignature, Gavel,
  UserPlus, UsersRound, Factory, Cog,
  Briefcase as BriefcaseAlt, Trophy, Medal,
  BarChart3, PieChart, Network, Link2, Share2,
  Laptop, Code, Megaphone, Palette, Camera,
  Container, Truck, Ship, Anchor,
  Landmark as LandmarkIcon, Building,
  FileCheck, ScrollText, Stamp, UserIcon,
  Banknote, Receipt, Calculator, TrendingDown,
  Lock, Key, Fingerprint, ScanFace,
  Layers3, Box, Boxes, PackageCheck,
  Compass, Navigation, Milestone, Flag,
  Sunrise, Sunset, CloudSun, Wind,
  Leaf, Sun, Moon, TreePine, Flower2,
  Eye, EyeOff, Send, Database, Server,
  Umbrella, Building as Bank, GraduationCap,
  Stethoscope, Activity, ShoppingCart, Utensils,
  Scissors, Dumbbell, Car, Plane as PlaneIcon,
  Heart as HeartIcon, Briefcase as HandshakeIcon,

  Percent, 
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Percent, value: '51/49', label: 'Legal Split', color: 'from-sky-400 to-blue-600' },
  { icon: Globe, value: '100%', label: 'Control (via agreements)', color: 'from-blue-400 to-indigo-600' },
  { icon: DollarSign, value: 'Fixed', label: 'Annual Fee', color: 'from-indigo-400 to-violet-600' },
  { icon: Shield, value: '0%', label: 'Profit Sharing', color: 'from-violet-400 to-purple-600' },
];

const partnerTypes = [
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate Sponsor',
    tagline: 'UAE-Owned Company',
    description: 'A UAE-based company (100% Emirati owned) holds 51% of shares in your mainland business. Provides professional legal structure, binding contracts, and nominee arrangements allowing full control.',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
    color: 'from-sky-500 to-blue-700',
    features: ['Professional Legal Structure', 'Binding Contracts', 'Nominee Arrangements', 'Full Operational Control'],
    bestFor: 'Commercial & Industrial Activities'
  },
  {
    id: 'individual',
    icon: UserIcon,
    title: 'Individual Sponsor',
    tagline: 'Emirati National',
    description: 'An Emirati national holds 51% of shares as an individual. Similar to corporate sponsorship but with a person rather than a company. Requires thorough background checks and legal safeguards.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    color: 'from-blue-500 to-indigo-700',
    features: ['Emirati Individual', '51% Legal Shares', 'Side Agreements', 'POA Protection'],
    bestFor: 'Commercial Activities'
  },
  {
    id: 'lsa',
    icon: Handshake,
    title: 'Local Service Agent',
    tagline: 'No Equity Partner',
    description: 'An Emirati national or UAE-owned company acts as administrative liaison with government departments. Holds ZERO shares — you retain 100% ownership. Required for Professional Licenses and Branch Offices.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    color: 'from-indigo-500 to-violet-700',
    features: ['Zero Equity', '100% Foreign Ownership', 'Administrative Liaison', 'Fixed Annual Fee'],
    bestFor: 'Professional Services & Branches'
  },
];

const benefits = [
  {
    icon: Globe,
    title: 'Full Market Access',
    description: 'Operate across all seven Emirates with no geographical restrictions — access UAE local market, government contracts, and B2B/B2C customers.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    icon: Landmark,
    title: 'Government Contracts',
    description: 'Bid for government tenders and public sector projects — a major advantage that Free Zone companies do not have.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'Comprehensive legal structure with MOA, side agreements, POA, and nominee agreements — all notarized and legally binding.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    icon: Wallet,
    title: '100% Profit Retention',
    description: 'Through legal side agreements, you retain 100% of profits. The sponsor receives only a fixed annual fee — no share of revenue.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: Gavel,
    title: 'Full Operational Control',
    description: 'Power of Attorney gives you sole decision-making authority on all business matters — no sponsor interference.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    icon: RefreshCw,
    title: 'Path to 100% Ownership',
    description: 'As UAE laws evolve, many activities now allow full foreign ownership. We help you convert your license when eligible.',
    color: 'from-fuchsia-400 to-pink-600'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Activity Assessment',
    description: 'We determine if your business activity requires a local partner, corporate sponsor, or local service agent.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    step: '02',
    icon: UserPlus,
    title: 'Partner Selection',
    description: 'We match you with a reliable, verified Emirati partner or corporate sponsor with a proven track record.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    step: '03',
    icon: FileSignature,
    title: 'Legal Documentation',
    description: 'Drafting and notarizing MOA, side agreements, POA, and nominee agreements to protect your interests.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    step: '04',
    icon: ScrollText,
    title: 'License Application',
    description: 'We file your trade license application with DED and coordinate all government approvals.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Business Bank Account',
    description: 'Assistance with opening your corporate bank account with top UAE banks.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    step: '06',
    icon: RefreshCw,
    title: 'Ongoing Support',
    description: 'License renewals, PRO services, compliance, and future conversion to 100% ownership when eligible.',
    color: 'from-fuchsia-400 to-pink-600'
  },
];

const legalProtection = [
  { icon: ScrollText, title: 'MOA Drafting', desc: 'Memorandum of Association drafted to comply with UAE law while protecting your rights.', color: 'from-sky-400 to-blue-600' },
  { icon: Handshake, title: 'Beneficial Ownership Agreement', desc: 'Private legal documents confirming you are the actual sole beneficial owner.', color: 'from-blue-400 to-indigo-600' },
  { icon: Gavel, title: 'Business Power of Attorney', desc: 'Notarized POA giving you sole dominion over all business decisions and bank accounts.', color: 'from-indigo-400 to-violet-600' },
  { icon: Shield, title: 'Sponsor Limitation Agreement', desc: 'Clauses legally prohibiting the sponsor from interfering in your business operations.', color: 'from-violet-400 to-purple-600' },
  { icon: Banknote, title: 'Fixed Annual Fee', desc: 'Sponsor receives a fixed annual fee — no share of profits, revenue, or expenses.', color: 'from-purple-400 to-fuchsia-600' },
  { icon: FileCheck, title: 'Notarized Documents', desc: 'All documents signed and notarized, providing full clarity and legal security.', color: 'from-fuchsia-400 to-pink-600' },
];

const requirements = [
  { icon: Percent, title: '51% Legal Share', description: 'Local partner holds 51% legal shares while you retain 49% on paper.', color: 'from-sky-400 to-blue-600' },
  { icon: FileSignature, title: 'Side Agreements', description: 'Legal agreements ensure you retain full control and profits.', color: 'from-blue-400 to-indigo-600' },
  { icon: DollarSign, title: 'Fixed Annual Fee', description: 'Sponsor paid a fixed amount annually — no profit sharing.', color: 'from-indigo-400 to-violet-600' },
  { icon: RefreshCw, title: 'Exit Options', description: 'Flexible transfer, sponsorship change, or 100% ownership conversion.', color: 'from-violet-400 to-purple-600' },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: 'Reliable Partners', desc: 'Verified Emirati sponsors with proven track record' },
  { icon: FileCheck, label: 'Legal Documentation', desc: 'All agreements notarized and legally binding' },
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees or commissions' },
  { icon: Globe, label: 'Multilingual Team', desc: 'English, Arabic, Hindi, Urdu' },
  { icon: Zap, label: 'Fast Approvals', desc: 'Direct DED and government network' },
  { icon: RefreshCw, label: 'Ongoing Support', desc: 'Renewals, PRO, and conversion assistance' },
  { icon: Users, label: 'Trusted by Thousands', desc: 'Proven track record of successful setups' },
  { icon: Crown, label: 'Long-Term Partnership', desc: 'We protect your future, not just your setup' },
];

const growthStats = [
  { icon: Building2, value: '10,000+', label: 'Companies Formed', color: 'from-sky-400 to-blue-600' },
  { icon: Globe, value: '100%', label: 'Control Preserved', color: 'from-blue-400 to-indigo-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Sponsorship Expert', color: 'from-indigo-400 to-violet-600' },
  { icon: DollarSign, value: 'Fixed', label: 'Annual Fee', color: 'from-violet-400 to-purple-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-purple-400 to-fuchsia-600' },
  { icon: Crown, value: 'Preferred', label: 'Partner', color: 'from-fuchsia-400 to-pink-600' },
];

const faqs = [
  {
    q: 'Is a Local Business Partner compulsory for all businesses in Dubai?',
    a: 'No. Since 2021 reforms, most mainland business activities allow 100% foreign ownership. Local sponsors are required only for specific commercial or industrial activities. Professional services and Free Zone companies can enjoy 100% ownership.'
  },
  {
    q: 'What is the difference between a Local Partner and a Local Service Agent?',
    a: 'A Local Partner (Sponsor) holds 51% legal shares in your company. A Local Service Agent (LSA) holds ZERO shares — they only act as an administrative liaison with government departments for a fixed annual fee.'
  },
  {
    q: 'Can I retain 100% control with a Local Partner?',
    a: 'Yes. Through structured nominee agreements, Power of Attorney, and side agreements, you retain 100% operational, financial, and managerial control. The sponsor is a silent partner with no involvement.'
  },
  {
    q: 'How much does a Local Partner cost?',
    a: 'Corporate sponsorship fees typically range from AED 8,000 to AED 20,000 annually, depending on the scope of services and sponsor reputation. This is a fixed fee — no profit sharing.'
  },
  {
    q: 'What happens if I want to exit or transfer ownership?',
    a: 'We offer flexible exit and transfer options — sell your business, bring in a new partner, transfer sponsorship, or upgrade to 100% ownership if laws allow.'
  },
  {
    q: 'Will the sponsor interfere in my business operations?',
    a: 'No. Our Sponsor Limitation Agreement legally prohibits interference. The sponsor is a silent partner with no access to operations, finances, or decision-making.'
  },
  {
    q: 'Can I convert to 100% ownership in the future?',
    a: 'Yes. As UAE laws evolve, many activities now allow full foreign ownership. We monitor updates and help you convert your license when eligible by removing the sponsor and updating your documents.'
  },
  {
    q: 'What legal documents protect my interest?',
    a: 'Key documents include MOA, Beneficial Ownership Agreement, Power of Attorney, and Sponsor Limitation Agreement. All documents are notarized and legally binding.'
  },
  {
    q: 'Does having a local sponsor help with government approvals?',
    a: 'Yes. Our established corporate sponsors help speed up DED licensing, renewals, municipality approvals, civil defence, and industry regulatory approvals.'
  },
  {
    q: 'Why choose Setup Zone Dubai for Local Partner services?',
    a: 'We provide reliable Emirati partners, comprehensive legal documentation, transparent pricing, and end-to-end support. With a proven track record and direct government access, we ensure fast, compliant, and secure setup.'
  },
];

const relatedServices = [
  { slug: 'local-corporate-sponsor', title: 'Local Corporate Sponsor', description: 'Secure 100% control with a trusted sponsor.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-sky-400 to-blue-600' },
  { slug: 'mainland-company-formation', title: 'Mainland Company Formation', description: 'Full UAE market access with DET license.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-blue-400 to-indigo-600' },
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore structures.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-indigo-400 to-violet-600' },
];

// ============ COMPONENT ============
export default function LocalBusinessPartner() {
  const [activeType, setActiveType] = useState(0);

  const nextType = () => setActiveType((prev) => (prev + 1) % partnerTypes.length);
  const prevType = () => setActiveType((prev) => (prev - 1 + partnerTypes.length) % partnerTypes.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-sky-950/80 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Handshake size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Users size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Business Setup</span><span>/</span>
                <span className="text-white font-bold">Local Business Partner</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-sky-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Your Trusted UAE Partner</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                UAE Local <span className="text-sky-300">Business Partner</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Secure your mainland business with a reliable local partner. Full legal protection, 100% operational control, and fixed annual fees — no profit sharing.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in UAE Local Business Partner services.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Control', 'Fixed Annual Fee', 'Legal Protection', 'No Profit Sharing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-sky-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Partner Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-blue-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-indigo-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Handshake size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Partner Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <Shield size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">100% Control</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Legal Split</div>
                          <div className="text-lg font-black text-sky-600">51/49</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Your Share</div>
                          <div className="text-lg font-black text-blue-600">100%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Shield size={18} className="text-sky-500" />
                        <Gavel size={18} className="text-blue-500" />
                        <FileSignature size={18} className="text-indigo-500" />
                        <Bank size={18} className="text-violet-500" />
                        <EyeOff size={18} className="text-purple-500" />
                        <Crown size={18} className="text-fuchsia-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Secure Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHAT IS IT — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-sky-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80" alt="UAE Business Partner" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <Handshake size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Legal Partner</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Mainland Setup</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Understanding the Setup</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is a <span className="gradient-text">Local Business Partner?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  A local business partner (also called a local sponsor) is a <span className="font-black text-[#0A0F1F]">UAE national or UAE-owned company</span> holding 51% of shares in a mainland business while the foreign investor holds 49%.
                </p>
                <p>
                  This arrangement exists for <span className="font-black text-[#0A0F1F]">certain commercial and industrial activities</span> in the UAE mainland. Unlike individual sponsorship, a corporate sponsor provides more professional legal structure and binding contracts.
                </p>
                <p>
                  Through <span className="font-black text-[#0A0F1F]">structured nominee agreements and side agreements</span>, you legally maintain 100% control over business operations, finances, and decision-making. This is an effective and compliant means to access Dubai's mainland economy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Corporate Entity', 'Nominee Agreement', 'Power of Attorney', 'Side Agreements', 'Fixed Annual Fee', 'Legally Compliant'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
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

      {/* === 4. PARTNER TYPES — Swipe Carousel === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-sky-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Users size={14} className="text-sky-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Types of Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Types of <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">Local Partners</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Swipe through 3 partner types — choose the right one for your business.</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-[580px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={partnerTypes[activeType].image}
                      alt={partnerTypes[activeType].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${partnerTypes[activeType].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${partnerTypes[activeType].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = partnerTypes[activeType].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Type {String(activeType + 1).padStart(2, '0')} / {String(partnerTypes.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-sky-400/90 backdrop-blur-xl border border-sky-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {partnerTypes[activeType].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-sky-300 uppercase tracking-widest mb-2">{partnerTypes[activeType].tagline}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {partnerTypes[activeType].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mb-6 drop-shadow">
                        {partnerTypes[activeType].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {partnerTypes[activeType].features.map((feature, fi) => (
                          <span key={fi} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-xs font-bold text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevType}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous Type"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextType}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next Type"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {partnerTypes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveType(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeType ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {partnerTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveType(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeType
                        ? 'ring-2 ring-sky-400 shadow-lg shadow-sky-500/30 scale-105'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <div className="relative h-24">
                      <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <Icon size={22} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-wider">
                          {type.title.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 5. BENEFITS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-soft mb-6">
              <Award size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-sky-700">Why Local Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of <span className="gradient-text">Local Partnership</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six powerful advantages for your mainland business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`} />
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-tight">{benefit.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. LEGAL PROTECTION — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-sky-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <ShieldCheck size={14} className="text-sky-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Legal Protection</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              How We <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">Protect Your Interest</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six legal safeguards for complete peace of mind.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {legalProtection.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. PROCESS — Step Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-soft mb-6">
              <Rocket size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-sky-700">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How We <span className="gradient-text">Secure Your Business</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six simple steps to a fully protected mainland business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg opacity-15">
                      <span className="text-lg font-black text-sky-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-sky-600 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. REQUIREMENTS + WHY US — Split === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Requirements */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 mb-6">
                  <CheckCircle2 size={14} className="text-sky-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-sky-700">Key Requirements</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  What You <span className="gradient-text">Need to Know</span>
                </h2>

                <div className="space-y-3">
                  {requirements.map((req, i) => {
                    const Icon = req.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-r from-sky-50/50 to-blue-50/50 border border-sky-100">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${req.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 pt-0.5">
                          <h3 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{req.title}</h3>
                          <p className="text-xs text-[#64748B] font-medium leading-relaxed">{req.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                  <Award size={14} className="text-blue-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Why Choose Us</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Your Trusted <span className="gradient-text">Local Partner</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyChooseUs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex flex-col gap-2 p-3 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-md">
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className="text-xs font-black text-[#0A0F1F] leading-tight">{item.label}</div>
                          <div className="text-[10px] text-[#64748B] font-medium leading-tight mt-0.5">{item.desc}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 9. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-soft mb-6">
              <TrendingUp size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-sky-700">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your business protection, in expert hands.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about UAE Local Business Partners. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Handshake size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our local partner specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about UAE Local Business Partner.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-sky-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-sky-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-sky-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with Local Business Partner.</p>
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
                      <ArrowRight size={14} className="text-sky-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-sky-950/70 to-blue-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Secure Your Business</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready for a <span className="text-sky-300">Trusted Local Partner?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll help you set up your mainland business with a reliable local partner and full legal protection.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for UAE Local Business Partner.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '100% Control', 'Fixed Fee'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-sky-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss UAE Local Business Partner.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-sky-600 hover:text-sky-700 transition">
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