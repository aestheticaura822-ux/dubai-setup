// File: src/pages/services/business-setup/CompanyNameRegistration.tsx

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
  FileCheck, ScrollText, Stamp, 
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
  Warehouse, Store as StoreIcon, Megaphone as MegaphoneIcon,
  ShoppingBag, Cpu, Coins, TrendingUp as TrendingUpAlt,
  HeartPulse, Wallet as WalletIcon, XCircle, AlertCircle,
  Package, PackageCheck as PackageCheckIcon, Truck as TruckIcon,
  Microscope, FlaskConical, Atom, Dna, Brain, Lightbulb,
  Presentation, Pen, BookOpen, Music, Palette as PaletteIcon,
  Trophy as TrophyIcon, Crown as CrownIcon, Gem, Diamond,
  Users as UsersIcon, UserCircle, IdCard as IdCardIcon,
  Briefcase as BriefcaseIcon, Banknote as BanknoteIcon,
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,
  Cpu as CpuIcon, Rocket as RocketIcon, Award as AwardIcon,
  Globe as GlobeIcon, TrendingUp as TrendingUpIcon,
  Wallet as WalletIcon2, Home as HomeIcon2, Heart as HeartIcon2,
  UserCog, Contact, Users2, IdCard, Fingerprint as FingerprintIcon,
  Baby, PawPrint, School, Hospital, Syringe, Pill, Ambulance,
  BookMarked, Award as AwardIcon2, Shield as ShieldIcon2,
  Pen as PenIcon, Type, Hash, SpellCheck, Languages,
  Search, Filter, Grid, List, LayoutGrid, Compass as CompassIcon2,
  AlertTriangle, Info, Check, Copy, Share, Tag,
  BadgeDollarSign, BadgePercent, Receipt as ReceiptIcon
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Type, value: '3', label: 'Name Options', color: 'from-indigo-400 to-blue-600' },
  { icon: Clock, value: '24hrs', label: 'Approval Time', color: 'from-blue-400 to-cyan-600' },
  { icon: Shield, value: '100%', label: 'Compliant', color: 'from-cyan-400 to-teal-600' },
  { icon: BadgeCheck, value: 'Free', label: 'Availability Check', color: 'from-teal-400 to-emerald-600' },
];

const nameRules = [
  {
    icon: CheckCircle2,
    title: 'Unique & Available',
    description: 'Your chosen name must not be identical or similar to an existing registered trade name in the UAE.',
    color: 'from-emerald-400 to-teal-600',
    type: 'allowed'
  },
  {
    icon: Building2,
    title: 'Reflect Business Activity',
    description: 'The name should reasonably relate to your business activity — e.g., "Trading" for a trade license.',
    color: 'from-teal-400 to-cyan-600',
    type: 'allowed'
  },
  {
    icon: Globe,
    title: 'UAE Naming Conventions',
    description: 'Must follow UAE naming conventions — no offensive, religious, political, or restricted words.',
    color: 'from-cyan-400 to-sky-600',
    type: 'allowed'
  },
  {
    icon: Layers,
    title: 'Legal Structure Suffix',
    description: 'The name should include the correct legal structure — LLC, FZE, FZCO, or Sole Establishment.',
    color: 'from-sky-400 to-blue-600',
    type: 'allowed'
  },
  {
    icon: XCircle,
    title: 'No Religious References',
    description: 'Names with references to God, religion, or religious figures are strictly prohibited.',
    color: 'from-red-500 to-rose-700',
    type: 'prohibited'
  },
  {
    icon: XCircle,
    title: 'No Political Names',
    description: 'Political party names, government references, and political figures are not allowed.',
    color: 'from-red-500 to-rose-700',
    type: 'prohibited'
  },
  {
    icon: XCircle,
    title: 'No Trademark Conflicts',
    description: 'Names identical to registered trademarks — local or international — will be rejected.',
    color: 'from-red-500 to-rose-700',
    type: 'prohibited'
  },
  {
    icon: XCircle,
    title: 'No Restricted Words',
    description: 'Words like "bank", "insurance", "university", and country names require special approval or are banned.',
    color: 'from-red-500 to-rose-700',
    type: 'prohibited'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Brain,
    title: 'Name Brainstorming',
    description: 'We help you brainstorm 3 unique, brandable, and compliant business name options.',
    color: 'from-indigo-400 to-blue-600'
  },
  {
    step: '02',
    icon: Search,
    title: 'Availability Check',
    description: 'We check name availability with DED and Free Zone authorities in real-time.',
    color: 'from-blue-400 to-cyan-600'
  },
  {
    step: '03',
    icon: FileSignature,
    title: 'Reservation Application',
    description: 'We prepare and submit the trade name reservation application with the right authority.',
    color: 'from-cyan-400 to-teal-600'
  },
  {
    step: '04',
    icon: BadgeCheck,
    title: 'Initial Approval',
    description: 'Name gets preliminary approval — typically within 24 hours depending on authority.',
    color: 'from-teal-400 to-emerald-600'
  },
  {
    step: '05',
    icon: ScrollText,
    title: 'Name Reservation Certificate',
    description: 'Receive official Trade Name Reservation Certificate — valid for 6 months for license process.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    step: '06',
    icon: Rocket,
    title: 'Proceed to Licensing',
    description: 'Use your reserved name to apply for your business license and complete company formation.',
    color: 'from-teal-400 to-cyan-600'
  },
];

const services = [
  {
    icon: Sparkles,
    title: 'Brandable Name Suggestions',
    description: 'We suggest catchy, memorable names that fit your industry and business vision.',
    color: 'from-indigo-400 to-blue-600'
  },
  {
    icon: Search,
    title: 'Real-Time Availability Check',
    description: 'Free name availability check with DED and all major Free Zones before you commit.',
    color: 'from-blue-400 to-cyan-600'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Verification',
    description: 'We verify your name against UAE naming rules to avoid rejections and delays.',
    color: 'from-cyan-400 to-teal-600'
  },
  {
    icon: FileSignature,
    title: 'Reservation Application',
    description: 'We file the reservation application on your behalf — no paperwork for you.',
    color: 'from-teal-400 to-emerald-600'
  },
  {
    icon: BadgeCheck,
    title: 'Approval Follow-Up',
    description: 'We follow up with authorities to ensure fast approval — usually within 24 hours.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    icon: ScrollText,
    title: 'Certificate Delivery',
    description: 'We deliver the official Trade Name Reservation Certificate directly to you.',
    color: 'from-teal-400 to-cyan-600'
  },
];

const documents = [
  { icon: FileText, label: '3 Proposed Names', desc: 'In order of preference' },
  { icon: Briefcase, label: 'Business Activity', desc: 'Type of business' },
  { icon: Building2, label: 'Legal Structure', desc: 'LLC, FZE, FZCO, etc.' },
  { icon: FileSignature, label: 'Application Form', desc: 'Completed by us' },
  { icon: CreditCard, label: 'Payment', desc: 'Reservation fees' },
];

const namingTips = [
  { icon: Lightbulb, label: 'Keep it Short & Memorable', desc: 'Easy to spell and pronounce globally', color: 'from-indigo-400 to-blue-600' },
  { icon: Globe, label: 'Consider Global Appeal', desc: 'Works in English and Arabic markets', color: 'from-blue-400 to-cyan-600' },
  { icon: Search, label: 'Check Domain Availability', desc: 'Match your .com and .ae domain', color: 'from-cyan-400 to-teal-600' },
  { icon: ShieldCheck, label: 'Avoid Restricted Words', desc: 'Skip bank, insurance, university', color: 'from-teal-400 to-emerald-600' },
  { icon: Type, label: 'Use Easy Spelling', desc: 'Avoid complex letter combinations', color: 'from-emerald-400 to-teal-600' },
  { icon: Crown, label: 'Match Your Brand', desc: 'Align with your vision and industry', color: 'from-teal-400 to-cyan-600' },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: 'Compliance Experts', desc: 'Deep knowledge of UAE naming rules' },
  { icon: Zap, label: '24hr Approval', desc: 'Fast reservation processing' },
  { icon: DollarSign, label: 'Free Name Check', desc: 'No-charge availability verification' },
  { icon: Sparkles, label: 'Creative Suggestions', desc: 'Brandable name ideas for free' },
  { icon: UserCheck, label: 'Dedicated Consultant', desc: 'Personal advisor throughout' },
  { icon: Globe, label: 'Multilingual Team', desc: 'English, Arabic, Hindi, Urdu' },
  { icon: Layers, label: 'DED + Free Zone', desc: 'Both jurisdictions covered' },
  { icon: RefreshCw, label: 'Renewal Support', desc: 'Extension if needed' },
];

const growthStats = [
  { icon: Building2, value: '10,000+', label: 'Names Reserved', color: 'from-indigo-400 to-blue-600' },
  { icon: Globe, value: 'DED + FZ', label: 'Coverage', color: 'from-blue-400 to-cyan-600' },
  { icon: Zap, value: '24hrs', label: 'Fast Approval', color: 'from-cyan-400 to-teal-600' },
  { icon: DollarSign, value: 'Free', label: 'Name Check', color: 'from-teal-400 to-emerald-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-emerald-400 to-teal-600' },
  { icon: Crown, value: 'Preferred', label: 'Name Partner', color: 'from-teal-400 to-cyan-600' },
];

const faqs = [
  {
    q: 'What are the rules for choosing a company name in Dubai?',
    a: 'Your name must be unique, not similar to existing trade names, reflect your business activity, follow UAE naming conventions, and include the correct legal structure suffix. No religious, political, or restricted words are allowed.'
  },
  {
    q: 'How many name options should I submit?',
    a: 'You should submit 3 proposed names in order of preference. If your first choice is rejected, the authority checks the next option — saving time and multiple applications.'
  },
  {
    q: 'How long does name approval take?',
    a: 'Typically 24-48 hours depending on the authority. Some Free Zones process name approvals within hours with our priority network.'
  },
  {
    q: 'How long is a reserved name valid?',
    a: 'A Trade Name Reservation Certificate is typically valid for 6 months, allowing you to complete your license application during that period.'
  },
  {
    q: 'What happens if my name is rejected?',
    a: 'If your first choice is rejected, we resubmit your next option without extra fees (in most cases). We also help you brainstorm alternatives if all 3 are rejected.'
  },
  {
    q: 'Can I change my company name after registration?',
    a: 'Yes. You can apply for a name change after registration with the relevant authority — we handle the entire process including updating your license and documents.'
  },
  {
    q: 'Can I use a foreign name for my UAE company?',
    a: 'Yes. Foreign-sounding names are allowed as long as they comply with UAE naming rules, don\'t conflict with trademarks, and don\'t include restricted words.'
  },
  {
    q: 'Do I need to have a name before registering a company?',
    a: 'Yes. Name reservation is the first step before license application in both Mainland and Free Zone jurisdictions.'
  },
  {
    q: 'Are there any words banned in company names?',
    a: 'Yes. Words like "bank", "insurance", "university", "God", "Allah", country names, political references, and registered trademarks are restricted or banned.'
  },
  {
    q: 'How can Setup Zone Dubai help with company name registration?',
    a: 'We provide free name availability checks, brandable name suggestions, compliance verification, application filing, and follow-up with authorities. Typically, you get approval within 24 hours.'
  },
];

const relatedServices = [
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore structures.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-indigo-400 to-blue-600' },
  { slug: 'trade-license', title: 'Trade License in Dubai', description: 'Get your DET trade license in 2-5 days.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-blue-400 to-cyan-600' },
  { slug: 'company-registration', title: 'Company Registration', description: 'Fast & affordable registration from AED 5,750.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-cyan-400 to-teal-600' },
];

// ============ COMPONENT ============
export default function CompanyNameRegistration() {
  const [activeTab, setActiveTab] = useState<'allowed' | 'prohibited'>('allowed');

  const allowedRules = nameRules.filter(r => r.type === 'allowed');
  const prohibitedRules = nameRules.filter(r => r.type === 'prohibited');

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-indigo-950/80 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Type size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <FileSignature size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Business Setup</span><span>/</span>
                <span className="text-white font-bold">Company Name Registration</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-indigo-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Reserve Your Brand Identity</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Company Name <span className="text-indigo-300">Registration in Dubai</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Reserve your unique, brandable, and compliant business name in the UAE. Free availability check with DED and Free Zones — approval within 24 hours.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Check Name Availability
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I need help with Company Name Registration in Dubai.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['Free Name Check', '24hr Approval', 'DED + Free Zones', '100% Compliant'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Name Dashboard Card */}
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
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Type size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Name Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <Search size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Ready to Reserve</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Options</div>
                          <div className="text-lg font-black text-indigo-600">3 Names</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Approval</div>
                          <div className="text-lg font-black text-blue-600">24 Hrs</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Search size={18} className="text-indigo-500" />
                        <FileSignature size={18} className="text-blue-500" />
                        <BadgeCheck size={18} className="text-cyan-500" />
                        <ScrollText size={18} className="text-teal-500" />
                        <ShieldCheck size={18} className="text-emerald-500" />
                        <Rocket size={18} className="text-green-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Check Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center">
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

      {/* === 3. WHAT IS IT — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-indigo-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80" alt="Company Name Registration" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center">
                      <Type size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Brand Identity</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Name Reservation</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">First Step to Business</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is <span className="gradient-text">Company Name Registration?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  Company Name Registration in Dubai (also called <span className="font-black text-[#0A0F1F]">Trade Name Reservation</span>) is the official process of reserving a unique business name with the Department of Economic Development (DED) or a Free Zone authority.
                </p>
                <p>
                  It is the <span className="font-black text-[#0A0F1F]">first mandatory step</span> in setting up a UAE company — you cannot apply for a trade license without a reserved name.
                </p>
                <p>
                  At Setup Zone Dubai, we provide <span className="font-black text-[#0A0F1F]">free name availability checks, brandable name suggestions, compliance verification, and full application filing</span> — typically resulting in approval within 24 hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['First Step to Business', 'Name Reservation Certificate', 'Valid 6 Months', 'DED + Free Zone', 'Free Availability Check', '24hr Approval'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center">
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

      {/* === 4. NAMING RULES — Tabbed Section === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <ShieldCheck size={14} className="text-indigo-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">UAE Naming Rules</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              What's <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">Allowed & Prohibited</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Know the rules before you choose your business name.</p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <button
                onClick={() => setActiveTab('allowed')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'allowed'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <CheckCircle2 size={16} strokeWidth={2.5} />
                Allowed Names
              </button>
              <button
                onClick={() => setActiveTab('prohibited')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'prohibited'
                    ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <XCircle size={16} strokeWidth={2.5} />
                Prohibited Names
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="wait">
              {(activeTab === 'allowed' ? allowedRules : prohibitedRules).map((rule, i) => {
                const Icon = rule.icon;
                return (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${rule.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                    <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${rule.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <h3 className="text-base font-black text-white mb-3 leading-tight">{rule.title}</h3>
                      <p className="text-xs text-white/70 font-medium leading-relaxed">{rule.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* === 5. SERVICES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Award size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Complete <span className="gradient-text">Name Registration Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six comprehensive services for your name reservation.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* === 6. PROCESS — Dark Step Timeline === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-indigo-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              How to <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">Reserve Your Name</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six simple steps to a reserved business name.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg opacity-15`}>
                      <span className="text-3xl font-black text-indigo-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-indigo-300 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. NAMING TIPS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Lightbulb size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Pro Naming Tips</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Choose the <span className="gradient-text">Perfect Business Name</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six expert tips to pick a name that stands the test of time.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {namingTips.map((tip, i) => {
              const Icon = tip.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${tip.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-indigo-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-blue-600" />
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tip.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{tip.label}</h3>
                        <p className="text-xs text-[#64748B] font-medium leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. DOCUMENTS + WHY US — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-6">
                  <FileText size={14} className="text-indigo-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">What You'll Need</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Required <span className="gradient-text">Documents</span>
                </h2>

                <div className="space-y-3">
                  {documents.map((doc, i) => {
                    const Icon = doc.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-indigo-50/50 to-blue-50/50 border border-indigo-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-black text-[#0A0F1F] leading-tight">{doc.label}</div>
                          <div className="text-[10px] text-[#64748B] font-medium leading-tight mt-0.5">{doc.desc}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                  <Award size={14} className="text-blue-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Why Choose Us</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Your Trusted <span className="gradient-text">Name Partner</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyChooseUs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex flex-col gap-2 p-3 rounded-2xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border border-blue-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center shadow-md">
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
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your brand identity, in expert hands.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(129,140,248,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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
                Everything you need to know about Company Name Registration. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Type size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our name registration specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Company Name Registration in Dubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-indigo-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with Name Registration.</p>
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
                      <ArrowRight size={14} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-indigo-950/70 to-blue-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Free Name Check</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to <span className="text-indigo-300">Reserve Your Name?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free name availability check. Our experts will help you pick a brandable, compliant, and unique business name.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free name check for my UAE company.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <Search size={16} />Free Name Check
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Check', '24hr Approval', 'DED + Free Zones'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss Company Name Registration.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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