// File: src/pages/services/business-setup/FreeZoneCompanySetup.tsx

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
  BadgeDollarSign, BadgePercent, Receipt as ReceiptIcon,
  GitBranch, Split, GitMerge, ArrowRightLeft, Shuffle, Repeat,
  Building as OfficeIcon, Home as ParentCompanyIcon, Link as LinkIcon,
  Network as NetworkIcon, TreePine as BranchIcon, GitFork,
  Factory as FactoryIcon, CircleCheck, CircleDollarSign,
  Building as BuildingIcon, Network as NetworkIcon2
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Globe, value: '45+', label: 'Free Zones', color: 'from-emerald-400 to-teal-600' },
  { icon: Globe2, value: '100%', label: 'Foreign Ownership', color: 'from-teal-400 to-cyan-600' },
  { icon: DollarSign, value: '0%', label: 'Corporate Tax', color: 'from-cyan-400 to-sky-600' },
  { icon: Clock, value: '3-7', label: 'Days Setup', color: 'from-sky-400 to-blue-600' },
];

const licenseTypes = [
  {
    id: 'commercial',
    icon: StoreIcon,
    title: 'Commercial License',
    tagline: 'Buy, Sell & Trade',
    description: 'For trading companies, import/export businesses, wholesalers, retailers, and distributors. Trade freely within the Free Zone, across UAE, and internationally.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    color: 'from-emerald-500 to-teal-700',
    features: ['Import/Export', 'Wholesale & Retail', 'General Trading', 'Global Sales'],
    bestFor: 'Traders'
  },
  {
    id: 'professional',
    icon: Briefcase,
    title: 'Professional / Service License',
    tagline: 'Expertise & Consulting',
    description: 'For consultants, IT services, marketing agencies, educators, coaches, and professional service providers with 100% ownership.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    color: 'from-teal-500 to-cyan-700',
    features: ['Consultants', 'IT Services', 'Marketing', 'Education'],
    bestFor: 'Consultants'
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial License',
    tagline: 'Manufacture & Produce',
    description: 'For manufacturing, production, assembly, and industrial operations within designated Free Zones with access to industrial land and infrastructure.',
    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=1200&q=80',
    color: 'from-cyan-500 to-blue-700',
    features: ['Manufacturing', 'Production', 'Assembly', 'Industrial Land'],
    bestFor: 'Manufacturers'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce License',
    tagline: 'Digital-First Business',
    description: 'For online stores, digital marketplaces, dropshipping, and e-commerce platforms with 100% ownership, low cost, and tax-free environment.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    color: 'from-blue-500 to-indigo-700',
    features: ['Online Store', 'Digital Marketplace', 'Dropshipping', 'Global Reach'],
    bestFor: 'E-commerce Sellers'
  },
  {
    id: 'freelancer',
    icon: Laptop,
    title: 'Freelancer Permit',
    tagline: 'Individual Professionals',
    description: 'For freelancers, consultants, designers, developers, writers, and digital nomads. Perfect for solo professionals who want legal recognition, invoicing, and visa eligibility.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    color: 'from-indigo-500 to-violet-700',
    features: ['Individual Professionals', 'Legal Invoicing', 'Visa Eligible', 'Low Cost'],
    bestFor: 'Freelancers'
  },
  {
    id: 'holding',
    icon: Crown,
    title: 'Holding License',
    tagline: 'Corporate Structuring',
    description: 'For holding companies, investment vehicles, and asset managers. Manage subsidiaries, real estate, IP, and investments without engaging in commercial activities.',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80',
    color: 'from-violet-500 to-purple-700',
    features: ['Holding Company', 'Investment Vehicle', 'Asset Management', 'Wealth Structuring'],
    bestFor: 'Investors & HNIs'
  },
];

const topFreeZones = [
  { name: 'IFZA', tagline: 'Flexible & Affordable', color: 'from-emerald-500 to-teal-700' },
  { name: 'DMCC', tagline: 'Commodities & Trade', color: 'from-teal-500 to-cyan-700' },
  { name: 'Meydan', tagline: 'Low-Cost Setup', color: 'from-cyan-500 to-sky-700' },
  { name: 'DAFZA', tagline: 'Aviation & Logistics', color: 'from-sky-500 to-blue-700' },
  { name: 'JAFZA', tagline: 'Industrial & Trade', color: 'from-blue-500 to-indigo-700' },
  { name: 'RAKEZ', tagline: 'Low-Cost Multi-Sector', color: 'from-indigo-500 to-violet-700' },
  { name: 'SHAMS', tagline: 'Freelancers & SMEs', color: 'from-violet-500 to-purple-700' },
  { name: 'Dubai CommerCity', tagline: 'E-commerce Hub', color: 'from-purple-500 to-fuchsia-700' },
];

const benefits = [
  {
    icon: Globe2,
    title: '100% Foreign Ownership',
    description: 'Full ownership of your UAE business — no local Emirati sponsor or UAE national partner required.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    icon: DollarSign,
    title: '0% Corporate & Personal Tax',
    description: 'Tax-free environment with 0% corporate tax, 0% personal income tax, and full profit retention.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    icon: Wallet,
    title: 'Full Profit Repatriation',
    description: 'Repatriate 100% of your capital and profits without any currency restrictions.',
    color: 'from-cyan-400 to-sky-600'
  },
  {
    icon: Package,
    title: 'Duty-Free Benefits',
    description: 'No import or export duties within the Free Zone — perfect for trading, e-commerce, and logistics.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    icon: Zap,
    title: 'Fast-Track Setup',
    description: 'Licensed in 3-7 days with streamlined documentation and remote registration available.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Building2,
    title: 'Flexible Office Solutions',
    description: 'Choose from flexi-desks, co-working spaces, private offices, or warehouses — all ready to use.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    icon: Bank,
    title: 'Corporate Bank Account',
    description: 'Open UAE corporate bank accounts with top banks — full support with KYC and documentation.',
    color: 'from-purple-400 to-fuchsia-600'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Choose Your Free Zone',
    description: 'We help you select the best Free Zone based on your activity, budget, and long-term goals.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    step: '02',
    icon: FileSignature,
    title: 'Reserve Trade Name',
    description: 'Reserve your business name with the Free Zone authority — usually approved within hours.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'License Application',
    description: 'Submit your application with passport copies, business plan, and required documents.',
    color: 'from-cyan-400 to-sky-600'
  },
  {
    step: '04',
    icon: Building2,
    title: 'Choose Office Space',
    description: 'Select flexi-desk, co-working space, private office, or warehouse — as per your license.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    step: '05',
    icon: ScrollText,
    title: 'Receive Your License',
    description: 'Get your Free Zone trade license — typically issued within 3-7 working days.',
    color: 'from-blue-400 to-indigo-600'
  },
  
];

const documents = [
  { icon: Camera, label: 'Passport Photos', desc: 'White background' },
  { icon: FileText, label: 'Business Plan', desc: 'For some Free Zones' },
  { icon: FileSignature, label: '3 Proposed Names', desc: 'In order of preference' },
  { icon: Briefcase, label: 'Business Activity', desc: 'From approved list' },
  { icon: CreditCard, label: 'Proof of Address', desc: 'Utility bill / bank statement' },
  { icon: FileCheck, label: 'NOC Certificate', desc: 'For UAE residents' },
  { icon: ScrollText, label: 'CV / Professional Profile', desc: 'For professional activities' },
];

const comparisonData = [
  { factor: 'Ownership', freezone: '100% Foreign', mainland: '100% (Most)', color: 'from-emerald-400 to-teal-600' },
  { factor: 'Setup Time', freezone: '3-7 Days', mainland: '2-4 Weeks', color: 'from-teal-400 to-cyan-600' },
  { factor: 'Cost', freezone: 'Lower', mainland: 'Higher', color: 'from-cyan-400 to-sky-600' },
  { factor: 'Tax', freezone: '0% Corporate', mainland: '0-9% Corporate', color: 'from-sky-400 to-blue-600' },
  { factor: 'UAE Market', freezone: 'Limited', mainland: 'Full Access', color: 'from-blue-400 to-indigo-600' },
  { factor: 'Govt Contracts', freezone: 'No', mainland: 'Yes', color: 'from-indigo-400 to-violet-600' },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: '45+ Free Zones Expertise', desc: 'Deep knowledge of all UAE Free Zones' },
  { icon: Zap, label: 'Fast 3-7 Day Setup', desc: 'Streamlined process for quick launch' },
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees, ever' },
  { icon: UserCheck, label: 'Dedicated Consultant', desc: 'Personal advisor throughout' },
  { icon: Globe, label: 'Multilingual Team', desc: 'English, Arabic, Hindi, Urdu' },
  { icon: Bank, label: 'Corporate Bank Support', desc: 'Top UAE banks network' },
  { icon: RefreshCw, label: 'Ongoing Compliance', desc: 'Renewals, PRO, and updates' },
];

const growthStats = [
  { icon: Building2, value: '10,000+', label: 'Companies Formed', color: 'from-emerald-400 to-teal-600' },
  { icon: Globe, value: '45+', label: 'Free Zones', color: 'from-teal-400 to-cyan-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Setup Expert', color: 'from-cyan-400 to-sky-600' },
  { icon: Zap, value: '3-7', label: 'Days Setup', color: 'from-sky-400 to-blue-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-blue-400 to-indigo-600' },
  { icon: Crown, value: 'Preferred', label: 'Setup Partner', color: 'from-indigo-400 to-violet-600' },
];

const faqs = [
  {
    q: 'What is a UAE Free Zone Company?',
    a: 'A Free Zone Company is a business licensed by one of the 45+ UAE Free Zones. It allows 100% foreign ownership, 0% corporate tax, and full profit repatriation — but typically cannot trade directly within the UAE mainland market.'
  },
  {
    q: 'Which Free Zone is best for my business?',
    a: 'It depends on your activity, budget, and goals. IFZA and Meydan are great for startups and SMEs. DMCC suits commodities. DAFZA fits aviation and logistics. We help you choose the right one based on your business model.'
  },
  {
    q: 'How much does it cost to set up a Free Zone company?',
    a: 'Free Zone company setup starts from around AED 5,750 for a basic license package. Final cost depends on the Free Zone, license type, office space, and visa quota. We provide transparent all-inclusive pricing.'
  },
  {
    q: 'How long does it take to get a Free Zone license?',
    a: 'Typically 3-7 working days with proper documentation. Some Free Zones offer same-day or next-day licenses with our priority network.'
  },
  {
    q: 'Can I own 100% of a Free Zone company?',
    a: 'Yes. All UAE Free Zones allow 100% foreign ownership — no local sponsor or UAE national partner required.'
  },
  {
    q: 'Can I sponsor family with my Free Zone company?',
    a: 'Yes. Depending on the Free Zone and your visa quota, you can sponsor investor visas for yourself, employee visas for staff, and dependent visas for family members.'
  },
  {
    q: 'Can a Free Zone company trade within the UAE mainland?',
    a: 'No. Free Zone companies cannot trade directly in the UAE mainland market. However, they can work through a local distributor or agent, and some Free Zones offer dual licensing options.'
  },
  {
    q: 'What office space options are available in Free Zones?',
    a: 'Free Zones offer flexi-desks, co-working spaces, private offices, executive suites, warehouses, and industrial units — depending on your business activity and license type.'
  },
  {
    q: 'Can I open a corporate bank account with a Free Zone license?',
    a: 'Yes. We provide full assistance with corporate bank account opening at top UAE banks — including KYC preparation, documentation, and follow-ups.'
  },
  {
    q: 'Why choose Setup Zone Dubai for Free Zone setup?',
    a: 'We have expertise across all 45+ UAE Free Zones, offer transparent pricing, provide end-to-end support (license, visa, banking, PRO, compliance), and have a proven track record of 10,000+ successful setups.'
  },
];

const relatedServices = [
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore structures.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'free-zone-locations', title: 'Free Zone Locations Guide', description: 'Compare all 45+ UAE Free Zones.', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80', gradient: 'from-teal-400 to-cyan-600' },
  { slug: 'ecommerce-license', title: 'E-commerce License in Dubai', description: 'Setup your online business in Dubai.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80', gradient: 'from-cyan-400 to-sky-600' },
];

// ============ COMPONENT ============
export default function FreeZoneCompanySetup() {
  const [activeLicense, setActiveLicense] = useState(0);

  const nextLicense = () => setActiveLicense((prev) => (prev + 1) % licenseTypes.length);
  const prevLicense = () => setActiveLicense((prev) => (prev - 1 + licenseTypes.length) % licenseTypes.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-emerald-950/80 to-teal-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Factory size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Rocket size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Business Setup</span><span>/</span>
                <span className="text-white font-bold">Free Zone Company Setup</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">45+ Free Zones. 100% Ownership.</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                UAE <span className="text-emerald-300">Free Zone</span> Company Setup
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Set up your company in one of 45+ UAE Free Zones. 100% foreign ownership, 0% tax, and full profit repatriation — all in as little as 3-7 days.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in UAE Free Zone Company Setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', '3-7 Days Setup', '45+ Free Zones'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Free Zone Dashboard Card */}
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
                      <div className="flex items-center gap-2">
                        <Factory size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Free Zone Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                          <Building2 size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Ready to Launch</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Zones</div>
                          <div className="text-lg font-black text-emerald-600">45+</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup</div>
                          <div className="text-lg font-black text-teal-600">3-7 Days</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <StoreIcon size={18} className="text-emerald-500" />
                        <Briefcase size={18} className="text-teal-500" />
                        <Factory size={18} className="text-cyan-500" />
                        <ShoppingCart size={18} className="text-sky-500" />
                        <Laptop size={18} className="text-blue-500" />
                        <Crown size={18} className="text-indigo-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Launch Now</span>
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

      {/* === 3. WHAT IS IT — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="UAE Free Zone" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Factory size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Tax-Free Zone</div>
                      <div className="text-sm font-black text-[#0A0F1F]">100% Ownership</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What Is It?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is a <span className="gradient-text">Free Zone Company?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  A UAE Free Zone Company is a business licensed by one of the <span className="font-black text-[#0A0F1F]">45+ Free Zones</span> across Dubai, Abu Dhabi, Sharjah, and other emirates. It offers a tax-free environment with 100% foreign ownership.
                </p>
                <p>
                  Free Zone companies can <span className="font-black text-[#0A0F1F]">trade freely within the Free Zone, across the UAE (via distributors), and internationally</span>. They cannot trade directly in the UAE mainland market.
                </p>
                <p>
                  Popular Free Zones include <span className="font-black text-[#0A0F1F]">IFZA, DMCC, Meydan, DAFZA, JAFZA, RAKEZ, SHAMS, and Dubai CommerCity</span> — each with unique benefits for different business activities. At Setup Zone Dubai, we help you choose the right one based on your goals.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['100% Foreign Ownership', '0% Corporate Tax', 'Profit Repatriation', 'Duty-Free Benefits', 'Fast Setup', '45+ Zones Available'].map((item, i) => (
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

      {/* === 4. LICENSE TYPES — Swipe Carousel === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Layers size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">License Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              What <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Free Zone Licenses</span> Can You Get?
            </h2>
            <p className="text-base text-white/70 font-medium">Swipe through 6 license types — pick the right one for your business.</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-[580px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLicense}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={licenseTypes[activeLicense].image}
                      alt={licenseTypes[activeLicense].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${licenseTypes[activeLicense].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${licenseTypes[activeLicense].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = licenseTypes[activeLicense].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Type {String(activeLicense + 1).padStart(2, '0')} / {String(licenseTypes.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-emerald-400/90 backdrop-blur-xl border border-emerald-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {licenseTypes[activeLicense].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-emerald-300 uppercase tracking-widest mb-2">{licenseTypes[activeLicense].tagline}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {licenseTypes[activeLicense].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mb-6 drop-shadow">
                        {licenseTypes[activeLicense].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {licenseTypes[activeLicense].features.map((feature, fi) => (
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
                onClick={prevLicense}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous License"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextLicense}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next License"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {licenseTypes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveLicense(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeLicense ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-6 gap-3">
              {licenseTypes.map((license, i) => {
                const Icon = license.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveLicense(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeLicense
                        ? 'ring-2 ring-emerald-400 shadow-lg shadow-emerald-500/30 scale-105'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <div className="relative h-20">
                      <img src={license.image} alt={license.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${license.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                        <span className="text-[8px] font-black text-white uppercase tracking-wider text-center px-1 leading-tight">
                          {license.title.split(' ')[0]}
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

      {/* === 5. TOP FREE ZONES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <MapPin size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">45+ Free Zones</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Top <span className="gradient-text">Free Zones</span> We Serve
            </h2>
            <p className="text-base text-[#475569] font-medium">From IFZA to Dubai CommerCity — we've got expertise across all UAE Free Zones.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {topFreeZones.map((zone, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -4, scale: 1.03 }} className="group">
                <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${zone.color} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Building2 size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-sm font-black text-[#0A0F1F] mb-1 leading-tight">{zone.name}</h3>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest leading-tight">{zone.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === 6. BENEFITS — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Free Zone Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Benefits of <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Free Zone Setup</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Eight powerful advantages of a UAE Free Zone company.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-white mb-2 leading-tight">{benefit.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. PROCESS — Step Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Rocket size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How to Get Your <span className="gradient-text">Free Zone License</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six simple steps to launching your Free Zone company.</p>
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
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. COMPARISON TABLE — Free Zone vs Mainland === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Scale size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Free Zone vs Mainland</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              <span className="gradient-text">Compare</span> Your Options
            </h2>
            <p className="text-base text-[#475569] font-medium">See the differences at a glance to make the right choice.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-white">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-700 px-6 py-5">
              <div className="grid grid-cols-3 gap-4 text-xs font-black text-white uppercase tracking-widest">
                <div>Factor</div>
                <div>Free Zone</div>
                <div>Mainland</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {comparisonData.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid grid-cols-3 gap-4 px-6 py-5 hover:bg-emerald-50/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${row.color} flex items-center justify-center shadow-sm`}>
                      <Layers size={14} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-black text-[#0A0F1F]">{row.factor}</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200">
                      <CheckCircle2 size={12} className="text-emerald-600" strokeWidth={3} />
                      <span className="text-xs font-black text-emerald-700">{row.freezone}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#64748B]">{row.mainland}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 9. DOCUMENTS + WHY US — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
                  <FileText size={14} className="text-emerald-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">Required Documents</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  What You <span className="gradient-text">Need to Submit</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {documents.map((doc, i) => {
                    const Icon = doc.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex items-start gap-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-50/50 to-teal-50/50 border border-emerald-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md flex-shrink-0">
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 pt-0.5">
                          <h3 className="text-xs font-black text-[#0A0F1F] leading-tight mb-0.5">{doc.label}</h3>
                          <p className="text-[10px] text-[#64748B] font-medium leading-tight">{doc.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6">
                  <Award size={14} className="text-teal-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-teal-700">Why Choose Us</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Your Trusted <span className="gradient-text">Free Zone Partner</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyChooseUs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex flex-col gap-2 p-3 rounded-2xl bg-gradient-to-br from-teal-50/50 to-cyan-50/50 border border-teal-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-md">
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

      {/* === 10. GROWTH STATS === */}
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
            <p className="text-base text-[#475569] font-medium">Your Free Zone setup, in expert hands.</p>
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

      {/* === 11. FAQ === */}
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
                Everything you need to know about UAE Free Zone Company Setup. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Factory size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our Free Zone specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about UAE Free Zone Company Setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-emerald-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* === 12. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with Free Zone Company Setup.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {relatedServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link to={service.slug === 'free-zone-locations' ? '/free-zones/locations' : `/services/${service.slug}`} className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
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
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Launch in 3-7 Days</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Set Up Your <span className="text-emerald-300">Free Zone Company?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the entire process — from choosing the right Free Zone to license issuance and bank account opening.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for UAE Free Zone Company Setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '3-7 Days Setup', '100% Ownership'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss UAE Free Zone Company Setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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