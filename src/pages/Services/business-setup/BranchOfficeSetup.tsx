// File: src/pages/services/business-setup/BranchOfficeSetup.tsx

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
  Network as NetworkIcon, TreePine as BranchIcon, GitFork
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: GitBranch, value: '2', label: 'Branch Types', color: 'from-rose-400 to-pink-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-pink-400 to-fuchsia-600' },
  { icon: Zap, value: '2-4', label: 'Weeks Setup', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Building2, value: 'No', label: 'New Legal Entity', color: 'from-purple-400 to-violet-600' },
];

const branchTypes = [
  {
    id: 'foreign',
    icon: Globe,
    title: 'Foreign Company Branch',
    tagline: 'International Expansion',
    description: 'A branch of an existing foreign company registered outside the UAE. Allows your international business to operate in the UAE under the parent company name — no new legal entity required.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    color: 'from-rose-500 to-pink-700',
    features: ['Parent Company Name', 'No New Entity', 'International Expansion', 'Full UAE Market Access'],
    bestFor: 'Foreign Companies'
  },
  {
    id: 'local',
    icon: Building2,
    title: 'UAE Company Branch',
    tagline: 'Local Expansion',
    description: 'A branch of an existing UAE-registered company (mainland or free zone) to expand across the UAE or open in a different jurisdiction. Operates under the parent company with no separate legal identity.',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
    color: 'from-pink-500 to-fuchsia-700',
    features: ['Same Legal Entity', 'Multi-Jurisdiction', 'Expand Operations', 'Cross-Emirate Access'],
    bestFor: 'UAE Companies'
  },
];

const benefits = [
  {
    icon: Building2,
    title: 'No New Legal Entity',
    description: 'A branch is an extension of the parent company — no separate legal entity, no new shareholders, and simplified corporate structure.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Award,
    title: 'Leverage Parent Brand',
    description: 'Operate under the established parent company name — inherit credibility, brand recognition, and track record in the UAE market.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'Foreign company branches can be 100% foreign-owned in most cases, with no local sponsor or UAE national partner required.',
    color: 'from-fuchsia-400 to-purple-600'
  },
  {
    icon: Landmark,
    title: 'Government Contracts',
    description: 'Access government tenders and public sector projects — a major advantage over Free Zone companies.',
    color: 'from-purple-400 to-violet-600'
  },
  {
    icon: Users,
    title: 'Streamlined Operations',
    description: 'Simplified corporate governance — the branch reports to the parent company, reducing duplication of management and compliance.',
    color: 'from-violet-400 to-indigo-600'
  },
  {
    icon: RefreshCw,
    title: 'Easy Multi-Jurisdiction',
    description: 'Open a branch in Dubai while your parent company operates in another emirate, free zone, or country — seamless expansion.',
    color: 'from-indigo-400 to-blue-600'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Eligibility Assessment',
    description: 'We confirm your parent company is eligible to open a UAE branch — activity, ownership, and documents.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Document Attestation',
    description: 'Parent company documents must be notarized, attested by UAE Embassy, and MOFA legalized.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Application Preparation',
    description: 'We prepare the branch application — trade name, activity approval, and initial approvals.',
    color: 'from-fuchsia-400 to-purple-600'
  },
  {
    step: '04',
    icon: Building2,
    title: 'Office & Ejari',
    description: 'Lease office space or flexi-desk depending on jurisdiction. Register Ejari for mainland branches.',
    color: 'from-purple-400 to-violet-600'
  },
  {
    step: '05',
    icon: ScrollText,
    title: 'Branch License Issuance',
    description: 'Final branch license is issued by DED (mainland) or the Free Zone authority — typically within 2-4 weeks.',
    color: 'from-violet-400 to-indigo-600'
  },
  {
    step: '06',
    icon: RefreshCw,
    title: 'Visa, Banking & Compliance',
    description: 'Opening corporate bank account, processing visa applications, and setting up ongoing compliance.',
    color: 'from-indigo-400 to-blue-600'
  },
];

const documents = [
  { icon: ScrollText, label: 'Certificate of Incorporation', desc: 'Parent company' },
  { icon: FileCheck, label: 'Board Resolution', desc: 'Approving UAE branch' },
  { icon: FileSignature, label: 'Power of Attorney', desc: 'For branch manager' },
  { icon: FileText, label: 'Memorandum & Articles', desc: 'Parent company' },
  { icon: Receipt, label: 'Audited Financial Statements', desc: 'Last 2 years' },
  { icon: FileCheck, label: 'Certificate of Good Standing', desc: 'Parent company' },
  { icon: IdCard, label: 'Branch Manager Documents', desc: 'Passport & CV' },
];

const comparisonData = [
  { factor: 'Legal Entity', branch: 'Extension of parent', subsidiary: 'Separate legal entity', color: 'from-rose-400 to-pink-600' },
  { factor: 'Ownership', branch: '100% Parent Company', subsidiary: 'Parent + shareholders', color: 'from-pink-400 to-fuchsia-600' },
  { factor: 'Setup Time', branch: '2-4 Weeks', subsidiary: '3-6 Weeks', color: 'from-fuchsia-400 to-purple-600' },
  { factor: 'Cost', branch: 'Lower', subsidiary: 'Higher', color: 'from-purple-400 to-violet-600' },
  { factor: 'Liability', branch: 'Parent Company', subsidiary: 'Limited to subsidiary', color: 'from-violet-400 to-indigo-600' },
  { factor: 'Compliance', branch: 'Follows parent', subsidiary: 'Independent compliance', color: 'from-indigo-400 to-blue-600' },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: 'Expert Attestation', desc: 'Handle all MOFA & Embassy attestation' },
  { icon: Zap, label: 'Fast Processing', desc: '2-4 week branch setup' },
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees' },
  { icon: UserCheck, label: 'Dedicated Consultant', desc: 'Personal branch specialist' },
  { icon: Globe, label: 'Multilingual Team', desc: 'English, Arabic, Hindi, Urdu' },
  { icon: Layers, label: 'Multi-Jurisdiction', desc: 'DED + Free Zone expertise' },
  { icon: Bank, label: 'Bank Account Support', desc: 'Top UAE banking network' },
  { icon: RefreshCw, label: 'Renewals & PRO', desc: 'Ongoing compliance support' },
];

const growthStats = [
  { icon: Building2, value: '500+', label: 'Branches Formed', color: 'from-rose-400 to-pink-600' },
  { icon: Globe, value: '50+', label: 'Countries', color: 'from-pink-400 to-fuchsia-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Branch Expert', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Zap, value: '2-4', label: 'Weeks Setup', color: 'from-purple-400 to-violet-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-violet-400 to-indigo-600' },
  { icon: Crown, value: 'Preferred', label: 'Branch Partner', color: 'from-indigo-400 to-blue-600' },
];

const faqs = [
  {
    q: 'What is a UAE branch office?',
    a: 'A UAE branch office is an extension of an existing parent company (foreign or UAE-registered) that operates in the UAE under the parent company name. It has no separate legal identity — the parent company remains fully liable for the branch\'s operations.'
  },
  {
    q: 'What is the difference between a branch and a subsidiary?',
    a: 'A branch has no separate legal identity — it operates under the parent company name and the parent is fully liable. A subsidiary is a separate legal entity (like an LLC) with its own shareholders, limited liability, and independent compliance.'
  },
  {
    q: 'Can a foreign company open a branch in the UAE?',
    a: 'Yes. Foreign companies can open branches in the UAE mainland (DED), Free Zones, or specific jurisdictions like DIFC and ADGM. Requirements include notarized and attested parent company documents.'
  },
  {
    q: 'How long does it take to open a branch office?',
    a: 'Typically 2-4 weeks, depending on document attestation, jurisdiction, and activity approvals. We fast-track the process through our priority government network.'
  },
  {
    q: 'What are the requirements to open a UAE branch?',
    a: 'You need notarized and MOFA-attested parent company documents (Certificate of Incorporation, MOA, Board Resolution, Power of Attorney, financials), a local office space, and a branch manager.'
  },
  {
    q: 'Can a branch office sponsor visas in the UAE?',
    a: 'Yes. Once the branch is licensed, it can sponsor investor visas for the parent company\'s representatives, employee visas for staff, and dependent visas for their family members.'
  },
  {
    q: 'Does a branch need an office space in the UAE?',
    a: 'Yes. Mainland branches require a physical office (Ejari). Free Zone branches can operate from flexi-desk or shared workspaces. Some jurisdictions allow virtual offices.'
  },
  {
    q: 'Can a branch be 100% foreign-owned?',
    a: 'Yes. Branch offices in the UAE can be 100% foreign-owned — no local sponsor or UAE national partner is required for most activities.'
  },
  {
    q: 'Can a branch participate in government tenders?',
    a: 'Yes. Mainland branch offices can bid for government contracts and public sector projects — a major advantage over Free Zone companies.'
  },
  {
    q: 'Why choose Setup Zone Dubai for branch office setup?',
    a: 'We handle the entire process — document attestation, application filing, licensing, office space, visas, and banking. With a proven track record and direct government access, we ensure fast, compliant setup.'
  },
];

const relatedServices = [
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore structures.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-rose-400 to-pink-600' },
  { slug: 'mainland-company-formation', title: 'Mainland Company Formation', description: 'Full UAE market access with DET license.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-pink-400 to-fuchsia-600' },
  { slug: 'free-zone-company-setup', title: 'Free Zone Company Setup', description: '100% ownership in tax-free zones.', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80', gradient: 'from-fuchsia-400 to-purple-600' },
];

// ============ COMPONENT ============
export default function BranchOfficeSetup() {
  const [activeType, setActiveType] = useState(0);

  const nextType = () => setActiveType((prev) => (prev + 1) % branchTypes.length);
  const prevType = () => setActiveType((prev) => (prev - 1 + branchTypes.length) % branchTypes.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-rose-950/80 to-pink-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <GitBranch size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Building2 size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Business Setup</span><span>/</span>
                <span className="text-white font-bold">Branch Office Setup</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-rose-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Expand Without New Entity</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                UAE Branch <span className="text-rose-300">Office Setup</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Expand your existing company into the UAE without creating a new legal entity. Operate under your parent company name, access the full UAE market, and bid for government contracts.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in UAE Branch Office Setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['No New Entity', '100% Ownership', '2-4 Weeks', 'Govt Contracts'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Branch Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-rose-400 to-pink-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-rose-300 shadow-[0_0_20px_rgba(251,113,133,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-pink-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-fuchsia-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GitBranch size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Branch Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg">
                          <Building2 size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Extension Ready</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup</div>
                          <div className="text-lg font-black text-rose-600">2-4 Wks</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-pink-50 to-fuchsia-50 border border-pink-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Ownership</div>
                          <div className="text-lg font-black text-pink-600">100%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <GitBranch size={18} className="text-rose-500" />
                        <Building2 size={18} className="text-pink-500" />
                        <Globe size={18} className="text-fuchsia-500" />
                        <Bank size={18} className="text-purple-500" />
                        <Landmark size={18} className="text-violet-500" />
                        <Crown size={18} className="text-indigo-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
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

      {/* === 3. WHAT IS IT — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-rose-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80" alt="UAE Branch Office" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
                      <GitBranch size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Parent Extension</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Same Legal Entity</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What Is It?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is a <span className="gradient-text">UAE Branch Office?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  A UAE branch office is an <span className="font-black text-[#0A0F1F]">extension of an existing parent company</span> (foreign or UAE-registered) that operates in the UAE under the parent company name.
                </p>
                <p>
                  Unlike a subsidiary, a branch has <span className="font-black text-[#0A0F1F]">no separate legal identity</span> — the parent company remains fully liable for the branch's operations. This makes it a fast, cost-effective way to expand into the UAE market.
                </p>
                <p>
                  Branches can be opened in the <span className="font-black text-[#0A0F1F]">UAE mainland (DED), Free Zones, or specific jurisdictions like DIFC and ADGM</span>. Requirements include notarized and attested parent company documents.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Extension of Parent', 'No New Legal Entity', '100% Ownership', 'Parent Company Name', 'Govt Contracts', 'Fast Setup'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
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

      {/* === 4. BRANCH TYPES — Swipe Carousel === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-pink-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <GitBranch size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Types of Branch Offices</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Types of <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">UAE Branches</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Swipe through 2 branch types — pick the right one for your business.</p>
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
                      src={branchTypes[activeType].image}
                      alt={branchTypes[activeType].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${branchTypes[activeType].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${branchTypes[activeType].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = branchTypes[activeType].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Type {String(activeType + 1).padStart(2, '0')} / {String(branchTypes.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-rose-400/90 backdrop-blur-xl border border-rose-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {branchTypes[activeType].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-rose-300 uppercase tracking-widest mb-2">{branchTypes[activeType].tagline}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {branchTypes[activeType].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mb-6 drop-shadow">
                        {branchTypes[activeType].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {branchTypes[activeType].features.map((feature, fi) => (
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
                {branchTypes.map((_, i) => (
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
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {branchTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveType(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeType
                        ? 'ring-2 ring-rose-400 shadow-lg shadow-rose-500/30 scale-105'
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
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <Award size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Branch Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of a <span className="gradient-text">UAE Branch</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six powerful advantages of branch office setup.</p>
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

      {/* === 6. PROCESS — Dark Step Grid === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-pink-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              How to Set Up a <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">Branch Office</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six simple steps to a UAE branch office.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg opacity-15`}>
                      <span className="text-3xl font-black text-rose-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-rose-300 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. COMPARISON TABLE — Branch vs Subsidiary === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <Scale size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Branch vs Subsidiary</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              <span className="gradient-text">Compare</span> Your Options
            </h2>
            <p className="text-base text-[#475569] font-medium">See the differences at a glance to make the right choice.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-white">
            <div className="bg-gradient-to-r from-rose-500 via-pink-600 to-fuchsia-700 px-6 py-5">
              <div className="grid grid-cols-3 gap-4 text-xs font-black text-white uppercase tracking-widest">
                <div>Factor</div>
                <div>Branch Office</div>
                <div>Subsidiary Company</div>
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
                  className="grid grid-cols-3 gap-4 px-6 py-5 hover:bg-rose-50/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${row.color} flex items-center justify-center shadow-sm`}>
                      <Layers size={14} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-black text-[#0A0F1F]">{row.factor}</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200">
                      <CheckCircle2 size={12} className="text-rose-600" strokeWidth={3} />
                      <span className="text-xs font-black text-rose-700">{row.branch}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#64748B]">{row.subsidiary}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 8. DOCUMENTS + WHY US — Split === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-6">
                  <FileText size={14} className="text-rose-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Required Documents</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  What You <span className="gradient-text">Need to Submit</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {documents.map((doc, i) => {
                    const Icon = doc.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex items-start gap-3 p-3 rounded-2xl bg-gradient-to-r from-rose-50/50 to-pink-50/50 border border-rose-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-md flex-shrink-0">
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
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-fuchsia-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200 mb-6">
                  <Award size={14} className="text-pink-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-pink-700">Why Choose Us</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Your Trusted <span className="gradient-text">Branch Partner</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whyChooseUs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="flex flex-col gap-2 p-3 rounded-2xl bg-gradient-to-br from-pink-50/50 to-fuchsia-50/50 border border-pink-100">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-fuchsia-600 flex items-center justify-center shadow-md">
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
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <TrendingUp size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Trusted by <span className="gradient-text">Global Companies</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your branch expansion, in expert hands.</p>
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

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
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
                Everything you need to know about UAE Branch Office Setup. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <GitBranch size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our branch setup specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about UAE Branch Office Setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-rose-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-pink-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-400 to-pink-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-rose-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-rose-400 group-open:to-pink-600 group-open:border-transparent transition-all duration-300">
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

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with Branch Office Setup.</p>
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
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-rose-950/70 to-pink-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Expand Your Business</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Open a <span className="text-rose-300">UAE Branch Office?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the entire branch setup process — from document attestation to license issuance.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for UAE Branch Office Setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '2-4 Weeks Setup', 'Full Support'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss UAE Branch Office Setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0">
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