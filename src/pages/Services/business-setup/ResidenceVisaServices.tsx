// File: src/pages/services/business-setup/ResidenceVisaServices.tsx

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
  Baby, Dog, PawPrint, GraduationCap as GraduationCapIcon2,
  Heart as HeartIcon3, Plane as PlaneIcon2, Compass as CompassIcon
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Clock, value: '2-10', label: 'Years Validity', color: 'from-emerald-400 to-teal-600' },
  { icon: Users, value: '7', label: 'Visa Categories', color: 'from-teal-400 to-cyan-600' },
  { icon: Globe, value: '180+', label: 'Nationalities', color: 'from-cyan-400 to-sky-600' },
  { icon: Zap, value: 'Fast', label: 'Processing', color: 'from-sky-400 to-blue-600' },
];

const visaCategories = [
  {
    id: 'employment',
    icon: Briefcase,
    title: 'Employment Visa',
    tagline: 'Most Common Visa',
    description: 'Sponsored by a UAE employer. Valid for 2 years (Mainland) or 3 years (Free Zone). Includes Emirates ID, bank account, insurance, and dependent sponsorship.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    color: 'from-emerald-500 to-teal-700',
    features: ['Employer Sponsored', '2-3 Years Validity', 'Emirates ID', 'Insurance Included'],
    bestFor: 'Employees'
  },
  {
    id: 'investor',
    icon: TrendingUp,
    title: 'Investor Visa',
    tagline: 'Property or Business Investment',
    description: 'For those investing in UAE property (AED 750K-2M) or company shares. Provides 2-10 years residency, family sponsorship, and path to permanent residency.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    color: 'from-teal-500 to-cyan-700',
    features: ['Property AED 750K+', 'Company Shares', '2-10 Years', 'Family Sponsorship'],
    bestFor: 'Investors'
  },
  {
    id: 'freelancer',
    icon: Laptop,
    title: 'Freelancer / Remote Worker',
    tagline: 'Digital Nomads',
    description: 'Perfect for freelancers, remote workers, and digital nomads. Options include Free Zone freelance visa, residence permit, or the Virtual Work Program.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    color: 'from-cyan-500 to-blue-700',
    features: ['Free Zone Visa', 'Virtual Work Program', 'Portfolio Validation', 'Legal Work Rights'],
    bestFor: 'Freelancers & Nomads'
  },
  {
    id: 'family',
    icon: HeartHandshake,
    title: 'Family Visa',
    tagline: 'Dependent Sponsorship',
    description: 'Lets employment or investor visa holders sponsor their spouse, children, parents, or domestic staff. Requires minimum salary, housing, and insurance.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80',
    color: 'from-blue-500 to-indigo-700',
    features: ['Spouse Sponsorship', 'Children & Parents', 'Domestic Staff', 'Full Family Support'],
    bestFor: 'Families'
  },
  {
    id: 'retiree',
    icon: Home,
    title: 'UAE Retiree Visa',
    tagline: 'For Expats 55+',
    description: 'Available for expats 55+. Valid for 5 years with renewal. Requires property worth AED 1M, savings of AED 1M, or AED 20K monthly income. Covers dependents.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    color: 'from-indigo-500 to-violet-700',
    features: ['Expats 55+', '5 Years Validity', 'Property/Savings/Income', 'Covers Dependents'],
    bestFor: 'Retirees'
  },
  {
    id: 'golden',
    icon: Crown,
    title: 'Golden Visa',
    tagline: '10-Year Residency',
    description: 'The UAE\'s premium residency option for investors, entrepreneurs, scientists, academics, and talents. Offers 100% company ownership, long-term residency, and family sponsorship.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    color: 'from-violet-500 to-purple-700',
    features: ['10-Year Residency', '100% Company Ownership', 'Family Sponsorship', 'Multiple Entries'],
    bestFor: 'High-Net-Worth & Talent'
  },
  {
    id: 'green',
    icon: Leaf,
    title: 'Green Visa',
    tagline: '5-Year Self-Sponsored',
    description: 'For skilled professionals, freelancers, and self-employed individuals. 5-year self-sponsored residency without needing an employer or sponsor.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    color: 'from-lime-500 to-emerald-700',
    features: ['Self-Sponsored', '5 Years Validity', 'No Employer Needed', 'Skilled Professionals'],
    bestFor: 'Self-Employed & Skilled'
  },
];

const benefits = [
  { icon: Clock, label: 'Legal Long-Term Stay', desc: '2-10 years of uninterrupted residency', color: 'from-emerald-400 to-teal-600' },
  { icon: Briefcase, label: 'Work Rights', desc: 'Legally work in the UAE', color: 'from-teal-400 to-cyan-600' },
  { icon: Home, label: 'Property Ownership', desc: 'Own UAE real estate', color: 'from-cyan-400 to-sky-600' },
  { icon: Bank, label: 'Banking Access', desc: 'Open UAE bank accounts', color: 'from-sky-400 to-blue-600' },
  { icon: HeartHandshake, label: 'Family Sponsorship', desc: 'Bring your family to UAE', color: 'from-blue-400 to-indigo-600' },
  { icon: Stethoscope, label: 'Healthcare Access', desc: 'World-class medical facilities', color: 'from-indigo-400 to-violet-600' },
  { icon: GraduationCap, label: 'Education Access', desc: 'Premium schools & universities', color: 'from-violet-400 to-purple-600' },
  { icon: Plane, label: 'Visa-Free Travel', desc: 'Easy GCC + global travel', color: 'from-purple-400 to-fuchsia-600' },
  { icon: Coins, label: 'Tax-Free Income', desc: '0% personal income tax', color: 'from-fuchsia-400 to-pink-600' },
  { icon: Car, label: 'Driver\'s License', desc: 'UAE driving license access', color: 'from-pink-400 to-rose-600' },
  { icon: IdCard, label: 'Emirates ID', desc: 'Official UAE identity document', color: 'from-rose-400 to-red-600' },
  { icon: Shield, label: 'Long-Term Stability', desc: 'Renewable & secure residency', color: 'from-red-400 to-orange-600' },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Eligibility Assessment',
    description: 'We evaluate your profile and recommend the best visa category for your goals.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Document Preparation',
    description: 'We collect and prepare all required documents including passport, visa copies, and certificates.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    step: '03',
    icon: Send,
    title: 'Application Submission',
    description: 'Your application is submitted to the relevant UAE authority — ICA, GDRFA, or Free Zone.',
    color: 'from-cyan-400 to-sky-600'
  },
  {
    step: '04',
    icon: Stethoscope,
    title: 'Medical Fitness Test',
    description: 'We coordinate your medical fitness test at approved UAE centers.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    step: '05',
    icon: Fingerprint,
    title: 'Biometrics & Emirates ID',
    description: 'Complete biometrics and Emirates ID processing at approved centers.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    step: '06',
    icon: Stamp,
    title: 'Visa Stamping',
    description: 'Final residency visa stamped on your passport — you\'re now a UAE resident!',
    color: 'from-indigo-400 to-violet-600'
  },
];

const whyChooseUs = [
  {
    icon: DollarSign,
    title: '100% Transparency',
    description: 'Clear pricing structures with no hidden costs. All fees disclosed upfront.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Visa Consultant',
    description: 'A dedicated expert and PRO liaison responsible for all government dealings.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    description: 'Priority government portals with fast processing times for applications and medicals.',
    color: 'from-cyan-400 to-sky-600'
  },
  {
    icon: Shield,
    title: 'GDRFA & ICA Compliant',
    description: 'Strictly compliant with all UAE visa, residency, and immigration regulations.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'English, Arabic, Hindi, Urdu — our team speaks your language.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Layers,
    title: 'Visa, License & Banking',
    description: 'Everything you need in one place — no running from agency to agency.',
    color: 'from-indigo-400 to-violet-600'
  },
];

const growthStats = [
  { icon: Users, value: '10,000+', label: 'Visas Processed', color: 'from-emerald-400 to-teal-600' },
  { icon: Globe, value: '180+', label: 'Nationalities', color: 'from-teal-400 to-cyan-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Visa Expert', color: 'from-cyan-400 to-sky-600' },
  { icon: Zap, value: 'Fast', label: 'Processing', color: 'from-sky-400 to-blue-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-blue-400 to-indigo-600' },
  { icon: Crown, value: 'Preferred', label: 'Visa Partner', color: 'from-indigo-400 to-violet-600' },
];

const faqs = [
  {
    q: 'How long does a UAE Residence Visa last?',
    a: 'Duration depends on the type. Employment or family visas are typically 2-3 years. Investor or retirement visas are 5 or 10 years. Golden Visa is 10 years, renewable after that. Green Visa is 5 years.'
  },
  {
    q: 'Does a UAE residence visa allow me to work in the UAE?',
    a: 'Yes. A residence visa allows you to legally live and work in the UAE. The type of work depends on your visa category (employment, investor, freelancer, etc.).'
  },
  {
    q: 'What is the difference between a tourist visa and a residence visa?',
    a: 'A tourist visa allows short-term visits (typically 30-90 days) with no work rights. A residence visa allows long-term legal stay, work rights, banking, property ownership, family sponsorship, and healthcare access.'
  },
  {
    q: 'Can I sponsor my family members if I have a residence visa?',
    a: 'Yes. Employment and investor visa holders can sponsor spouse, children, and in some cases parents and domestic staff. We handle the entire family sponsorship process.'
  },
  {
    q: 'What are the salary requirements for sponsoring my family?',
    a: 'Requirements vary. Generally you need a minimum monthly salary (typically AED 4,000-5,000+) plus adequate housing and insurance. We assess your specific case and advise.'
  },
  {
    q: 'Is medical testing required for a residence visa in the UAE?',
    a: 'Yes. Medical fitness tests (blood test + chest X-ray) are mandatory for all residence visas. We coordinate the entire medical process for you.'
  },
  {
    q: 'Can freelancers or digital nomads apply for UAE residency?',
    a: 'Yes. Options include Free Zone freelance visa, freelance residence permit, the Virtual Work Program, or the Green Visa for self-employed individuals.'
  },
  {
    q: 'What if I need to cancel or renew my visa?',
    a: 'We handle all renewals, cancellations, and re-issues end-to-end — ensuring your stay in the UAE remains legal and hassle-free.'
  },
  {
    q: 'Do I have to be physically in Dubai to apply?',
    a: 'Most steps can be initiated remotely, but medical tests and Emirates ID biometrics require you to be physically present. We coordinate everything so your visit is quick and efficient.'
  },
  {
    q: 'How can Setup Zone Dubai help me obtain my UAE residence visa?',
    a: 'We provide end-to-end visa services — eligibility assessment, documentation, application filing, medicals, Emirates ID, family sponsorship, and ongoing renewals. A dedicated consultant guides you throughout.'
  },
];

const relatedServices = [
  { slug: 'golden-visa-services', title: 'Golden Visa Services', description: '10-year UAE residency for investors & talent.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-600' },
  { slug: 'dependent-visa', title: 'UAE Dependent Residence Visa', description: 'Family sponsorship made easy.', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-cyan-400 to-blue-600' },
];

// ============ COMPONENT ============
export default function ResidenceVisaServices() {
  const [activeVisa, setActiveVisa] = useState(0);

  const nextVisa = () => setActiveVisa((prev) => (prev + 1) % visaCategories.length);
  const prevVisa = () => setActiveVisa((prev) => (prev - 1 + visaCategories.length) % visaCategories.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-emerald-950/80 to-teal-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />


        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <IdCard size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Business Setup</span><span>/</span>
                <span className="text-white font-bold">UAE Residence Visa</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Unlock Full Residency Benefits</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                UAE Residence <span className="text-emerald-300">Visa Services</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Get your UAE residence visa sorted — expert guidance on eligibility, documentation, medicals, Emirates ID, and family sponsorship. Fully compliant, rejection-free.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in UAE Residence Visa services.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['7 Visa Categories', '2-10 Years Validity', 'Family Sponsorship', 'Tax-Free'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Visa Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-teal-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-cyan-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 flex items-center justify-between">
                      
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                          <IdCard size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Ready to Process</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Categories</div>
                          <div className="text-lg font-black text-emerald-600">7 Types</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Validity</div>
                          <div className="text-lg font-black text-teal-600">2-10 Yrs</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Briefcase size={18} className="text-emerald-500" />
                        <TrendingUp size={18} className="text-teal-500" />
                        <Laptop size={18} className="text-cyan-500" />
                        <HeartHandshake size={18} className="text-sky-500" />
                        <Home size={18} className="text-blue-500" />
                        <Crown size={18} className="text-indigo-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Apply Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHAT IS VISA — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="UAE Residence Visa" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                  
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Legal Residency</div>
                      <div className="text-sm font-black text-[#0A0F1F]">2-10 Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why It Matters</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is a <span className="gradient-text">UAE Residence Visa?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  A UAE residence visa is a <span className="font-black text-[#0A0F1F]">government document that permits foreign nationals to reside in the UAE</span> for a valid duration between 2 and 10 years.
                </p>
                <p>
                  Unlike a tourist visa, a residence visa lets you <span className="font-black text-[#0A0F1F]">legally live, work, own property, access public health, and sponsor dependents</span> in Dubai and any emirate. It is a requirement for anyone wishing to reside long-term in the UAE.
                </p>
                <p>
                  At Setup Zone Dubai, we provide <span className="font-black text-[#0A0F1F]">personalized, compliant, and time-efficient residence visa solutions</span> to individuals, investors, families, and business owners.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Legal Long-Term Stay', 'Work Rights', 'Property Ownership', 'Banking Access', 'Family Sponsorship', 'Healthcare Access'].map((item, i) => (
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

      {/* === 4. BENEFITS — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Live Better with UAE Visa</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Benefits of a <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">UAE Residence Visa</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Twelve powerful advantages of living, working, and thriving in the UAE.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-white mb-1.5 leading-tight">{benefit.label}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. VISA CATEGORIES — Swipe Carousel === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Layers size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">Choose the Right Visa</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Types of <span className="gradient-text">UAE Residence Visas</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Swipe through 7 categories — find the right one for your goals.</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-border shadow-2xl h-[620px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVisa}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={visaCategories[activeVisa].image}
                      alt={visaCategories[activeVisa].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${visaCategories[activeVisa].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${visaCategories[activeVisa].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = visaCategories[activeVisa].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Category {String(activeVisa + 1).padStart(2, '0')} / {String(visaCategories.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-emerald-400/90 backdrop-blur-xl border border-emerald-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {visaCategories[activeVisa].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-emerald-300 uppercase tracking-widest mb-2">{visaCategories[activeVisa].tagline}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {visaCategories[activeVisa].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mb-6 drop-shadow">
                        {visaCategories[activeVisa].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {visaCategories[activeVisa].features.map((feature, fi) => (
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
                onClick={prevVisa}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous Visa"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextVisa}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next Visa"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {visaCategories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVisa(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeVisa ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-4 md:grid-cols-7 gap-3">
              {visaCategories.map((visa, i) => {
                const Icon = visa.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveVisa(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeVisa
                        ? 'ring-2 ring-emerald-400 shadow-lg shadow-emerald-500/30 scale-105'
                        : 'ring-1 ring-slate-200 hover:ring-slate-300'
                    }`}
                  >
                    <div className="relative h-20">
                      <img src={visa.image} alt={visa.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${visa.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                        <span className="text-[8px] font-black text-white uppercase tracking-wider text-center px-1 leading-tight">
                          {visa.title.split(' ')[0]}
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

      {/* === 6. PROCESS — Dark Step Timeline === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              How to Get Your <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">UAE Residence Visa</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six simple steps to UAE residency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg opacity-15`}>
                      <span className="text-3xl font-black text-emerald-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-emerald-300 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Award size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Visa Services <span className="gradient-text">You Can Count On</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six reasons clients trust us with their UAE residency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{item.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your residency, in expert hands.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
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
                Everything you need to know about UAE Residence Visas. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our visa specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about UAE Residence Visa.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-emerald-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-emerald-200 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
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

      {/* === 10. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your UAE Residence Visa.</p>
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
                      <ArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-emerald-950/70 to-teal-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Get Started Today</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Secure Your <span className="text-emerald-300">UAE Residence Visa?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Contact us today and let our experts guide you with full legal transparency, fixed fees, and no hidden costs.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for UAE Residence Visa.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'Fixed Fees', 'No Hidden Costs'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss UAE Residence Visa.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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