// File: src/pages/services/business-setup/GoldenVisaServices.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store, IdCard,
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
  Wallet as WalletIcon2, Home as HomeIcon2, Heart as HeartIcon2
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Calendar, value: '10', label: 'Years Validity', color: 'from-amber-400 to-yellow-600' },
  { icon: Users, value: 'Family', label: 'Sponsorship', color: 'from-yellow-400 to-lime-600' },
  { icon: Globe, value: '100%', label: 'Company Ownership', color: 'from-lime-400 to-emerald-600' },
  { icon: RefreshCw, value: 'Renewable', label: 'Long-Term', color: 'from-emerald-400 to-teal-600' },
];

const categories = [
  {
    id: 'investors',
    icon: TrendingUp,
    title: 'Investors',
    tagline: 'Property or Business Investment',
    description: 'For investors with a minimum public investment of AED 2 million in property, business, or investment funds. Full ownership and long-term stability for you and your family.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    color: 'from-amber-500 to-yellow-700',
    features: ['AED 2M+ Property', 'Business Investment', 'Investment Funds', '100% Ownership'],
    bestFor: 'Property & Business Investors'
  },
  {
    id: 'entrepreneurs',
    icon: Rocket,
    title: 'Entrepreneurs',
    tagline: 'Business Owners & Founders',
    description: 'For entrepreneurs who own an SME with an annual revenue of AED 1 million or more. Also for founders with a project valued at minimum AED 500,000 approved by an accredited incubator.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    color: 'from-orange-500 to-red-700',
    features: ['SME Revenue AED 1M+', 'Approved Incubator', 'Project Value AED 500K+', 'Business Ownership'],
    bestFor: 'Business Owners'
  },
  {
    id: 'talents',
    icon: Palette,
    title: 'Exceptional Talents',
    tagline: 'Creative & Cultural Leaders',
    description: 'For exceptional talents in culture, art, sports, media, and creative industries, endorsed by UAE cultural authorities. Includes influencers, artists, actors, and world-class athletes.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80',
    color: 'from-red-500 to-rose-700',
    features: ['Culture & Arts', 'Sports Achievements', 'Media & Content', 'Creative Industries'],
    bestFor: 'Artists & Athletes'
  },
  {
    id: 'scientists',
    icon: Microscope,
    title: 'Scientists & Researchers',
    tagline: 'Academic Excellence',
    description: 'For scientists, researchers, and top academics with outstanding achievements in their fields — endorsed by the Emirates Scientists Council.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80',
    color: 'from-rose-500 to-pink-700',
    features: ['Top Researcher', 'PhD + Publications', 'Council Endorsement', 'Academic Excellence'],
    bestFor: 'Scientists & Academics'
  },
  {
    id: 'professionals',
    icon: Stethoscope,
    title: 'Skilled Professionals',
    tagline: 'Doctors, Engineers & Executives',
    description: 'For highly skilled professionals like doctors, engineers, IT specialists, and executives with exceptional experience and qualifications — and salaries of AED 30,000+ per month.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    color: 'from-pink-500 to-fuchsia-700',
    features: ['Doctors & Engineers', 'IT Specialists', 'Senior Executives', 'AED 30K+ Salary'],
    bestFor: 'Top Professionals'
  },
  {
    id: 'students',
    icon: GraduationCap,
    title: 'Outstanding Students',
    tagline: 'Top Academic Achievers',
    description: 'For top-performing students with exceptional academic records from UAE high schools or universities — a 10-year Golden Visa to build their future in the UAE.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    color: 'from-fuchsia-500 to-purple-700',
    features: ['High School Graduates', 'University Honors', 'Academic Achievers', 'Youth Excellence'],
    bestFor: 'Outstanding Students'
  },
];

const benefits = [
  {
    icon: Calendar,
    title: '10-Year Residency',
    description: 'Long-term 10-year renewable residency visa for you and your family — no need for frequent renewals.',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    icon: Users,
    title: 'Family Sponsorship',
    description: 'Sponsor your spouse, children, and dependent parents for the same duration of your Golden Visa.',
    color: 'from-yellow-400 to-lime-600'
  },
  {
    icon: Globe,
    title: '100% Company Ownership',
    description: 'Full ownership of your UAE business without requiring a local sponsor or UAE national partner.',
    color: 'from-lime-400 to-emerald-600'
  },
  {
    icon: Home,
    title: 'Live Outside UAE',
    description: 'Golden Visa remains valid even if you spend extended periods outside the UAE — unlike standard visas.',
    color: 'from-emerald-400 to-teal-600'
  },
  
  {
    icon: Bank,
    title: 'Banking & Financial Freedom',
    description: 'Easy access to premium banking, credit facilities, and wealth management services with your Golden Visa.',
    color: 'from-cyan-400 to-sky-600'
  },
  {
    icon: Shield,
    title: 'Pathway to Citizenship',
    description: 'Long-term residency that can lead to UAE citizenship for exceptional cases — approved by UAE authorities.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    icon: HeartHandshake,
    title: 'Full UAE Benefits',
    description: 'Access to healthcare, education, business opportunities, and all UAE government services.',
    color: 'from-blue-400 to-indigo-600'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Eligibility Assessment',
    description: 'We evaluate your profile against Golden Visa criteria to identify the best category for you.',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Document Preparation',
    description: 'We collect and prepare all required documents including proof of investment, qualifications, and endorsements.',
    color: 'from-yellow-400 to-lime-600'
  },
  {
    step: '03',
    icon: Send,
    title: 'Application Submission',
    description: 'Your application is submitted to the relevant UAE authority through our priority government network.',
    color: 'from-lime-400 to-emerald-600'
  },
  {
    step: '04',
    icon: BadgeCheck,
    title: 'Approval & Medical',
    description: 'Once approved, we coordinate medical fitness tests, biometrics, and Emirates ID processing.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    step: '05',
    icon: Stamp,
    title: 'Visa Stamping',
    description: 'Your 10-year Golden Visa is stamped on your passport — you\'re now officially a Golden Visa holder.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    step: '06',
    icon: Users,
    title: 'Family Sponsorship',
    description: 'We process Golden Visas for your spouse, children, and dependents under your sponsorship.',
    color: 'from-cyan-400 to-sky-600'
  },
];

const documents = [
  
  { icon: Camera, label: 'Passport Photos', desc: 'White background' },
  { icon: FileText, label: 'Proof of Investment', desc: 'For investors' },
  { icon: Award, label: 'Endorsement Letter', desc: 'For talents & researchers' },
  { icon: BookOpen, label: 'Academic Certificates', desc: 'For professionals & scientists' },
  { icon: Bank, label: 'Financial Statements', desc: 'Bank statements & proof' },
  { icon: IdCard, label: 'Current UAE ID', desc: 'If applicable' },
  { icon: FileSignature, label: 'NOC Certificate', desc: 'For existing visa holders' },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: 'Direct Authority Access', desc: 'Priority government network' },
  { icon: Zap, label: 'Fast Processing', desc: 'Expedited approvals' },
  { icon: UserCheck, label: 'Dedicated Expert', desc: 'Personal Golden Visa specialist' },
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees' },
  { icon: Globe, label: 'Multilingual Team', desc: 'English, Arabic, Hindi, Urdu' },
  { icon: RefreshCw, label: 'Renewal Support', desc: 'Ongoing visa management' },
  { icon: HeartHandshake, label: 'Family Integration', desc: 'Complete family support' },
  { icon: Award, label: 'Proven Track Record', desc: 'Thousands of approvals' },
];

const growthStats = [
  { icon: Calendar, value: '10', label: 'Years Validity', color: 'from-amber-400 to-yellow-600' },
  { icon: Users, value: '5', label: 'Categories', color: 'from-yellow-400 to-lime-600' },
  { icon: Building2, value: '1000+', label: 'Approved', color: 'from-lime-400 to-emerald-600' },
  { icon: Zap, value: 'Fast', label: 'Processing', color: 'from-emerald-400 to-teal-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-teal-400 to-cyan-600' },
  { icon: Crown, value: 'Premium', label: 'Visa Tier', color: 'from-cyan-400 to-sky-600' },
];

const faqs = [
  {
    q: 'What is the UAE Golden Visa?',
    a: 'The UAE Golden Visa is a long-term 10-year renewable residence visa for investors, entrepreneurs, specialized talents, researchers, outstanding students, and professionals — offering full ownership, family sponsorship, and stability.'
  },
  {
    q: 'Who is eligible for the Golden Visa?',
    a: 'Investors (AED 2M+), entrepreneurs (SME AED 1M+ revenue), exceptional talents, scientists and researchers, skilled professionals (AED 30K+ salary), and outstanding students.'
  },
  {
    q: 'How long is the Golden Visa valid?',
    a: 'The Golden Visa is valid for 10 years and is renewable indefinitely, provided you continue to meet the eligibility criteria.'
  },
  {
    q: 'Can I sponsor my family with a Golden Visa?',
    a: 'Yes. You can sponsor your spouse, children, and dependent parents for the same 10-year duration of your Golden Visa.'
  },
  {
    q: 'Can I own 100% of a UAE business with a Golden Visa?',
    a: 'Yes. Golden Visa holders can own 100% of their UAE business without needing a local sponsor or UAE national partner.'
  },
  {
    q: 'Do I need to stay in the UAE to keep my Golden Visa?',
    a: 'No. Unlike standard residence visas, the Golden Visa remains valid even if you spend extended periods outside the UAE.'
  },
  {
    q: 'How long does the Golden Visa application take?',
    a: 'Typically 4-8 weeks depending on the category and documentation. We expedite the process through our priority government network.'
  },
  {
    q: 'What documents are required for the Golden Visa?',
    a: 'Valid passport, passport photos, proof of investment or endorsement letter, academic or professional certificates, bank statements, and current UAE ID (if applicable).'
  },
  {
    q: 'Can I work in the UAE with a Golden Visa?',
    a: 'Yes. The Golden Visa gives you full work rights and allows you to sponsor employees and dependents.'
  },
  {
    q: 'Why choose Setup Zone Dubai for Golden Visa services?',
    a: 'We provide end-to-end support — eligibility assessment, documentation, application submission, medical coordination, visa stamping, and family sponsorship. With a proven track record and direct authority access, we ensure fast, compliant processing.'
  },
];

const relatedServices = [
  { slug: 'residence-visa', title: 'UAE Residence Visa', description: '2-10 year residency options.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-600' },
  { slug: 'residence-visa', title: 'UAE Residence Visa', description: 'Family & dependent sponsorship.', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80', gradient: 'from-cyan-400 to-blue-600' },
];

// ============ COMPONENT ============
export default function GoldenVisaServices() {
  const [activeCategory, setActiveCategory] = useState(0);

  const nextCategory = () => setActiveCategory((prev) => (prev + 1) % categories.length);
  const prevCategory = () => setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/95 via-yellow-950/80 to-orange-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Crown size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Medal size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Business Setup</span><span>/</span>
                <span className="text-white font-bold">Golden Visa Services</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Crown size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">10-Year Premium Residency</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Golden Visa <span className="text-amber-300">Services</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Secure 10-year UAE residency for investors, entrepreneurs, exceptional talents, scientists, and top professionals. Full ownership, family sponsorship, and stability.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Check Your Eligibility
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Golden Visa Services.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['10-Year Validity', 'Family Sponsorship', '100% Ownership', 'Renewable'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Golden Visa Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-yellow-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-lime-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Crown size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Golden Visa</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg">
                          <Medal size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">10 Years Valid</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Premium</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Validity</div>
                          <div className="text-lg font-black text-amber-600">10 Years</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-50 to-lime-50 border border-yellow-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Family</div>
                          <div className="text-lg font-black text-yellow-600">Included</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <TrendingUp size={18} className="text-amber-500" />
                        <Rocket size={18} className="text-yellow-500" />
                        <Palette size={18} className="text-lime-500" />
                        <Microscope size={18} className="text-emerald-500" />
                        <Stethoscope size={18} className="text-teal-500" />
                        <GraduationCap size={18} className="text-cyan-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Apply Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHAT IS GOLDEN VISA — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-amber-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="Golden Visa Dubai" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
                      <Crown size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Premium Visa</div>
                      <div className="text-sm font-black text-[#0A0F1F]">10-Year Residency</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What Is It?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is the <span className="gradient-text">UAE Golden Visa?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  The UAE Golden Visa is a <span className="font-black text-[#0A0F1F]">long-term 10-year renewable residence visa</span> for investors, entrepreneurs, specialized talents, researchers, outstanding students, and professionals.
                </p>
                <p>
                  Introduced to attract global talent and investment, it offers <span className="font-black text-[#0A0F1F]">100% business ownership, family sponsorship, and unmatched stability</span> — without requiring a local sponsor or partner.
                </p>
                <p>
                  Golden Visa holders can live, work, and study in the UAE for 10 years, sponsor family members for the same duration, and enjoy <span className="font-black text-[#0A0F1F]">full access to UAE healthcare, education, and business opportunities</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['10-Year Residency', 'Renewable Indefinitely', 'Family Sponsorship', '100% Business Ownership', 'Multiple Entry', 'Live Abroad & Return'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center">
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

      {/* === 4. WHO QUALIFIES — Dark Premium Grid === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-yellow-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Target size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Eligibility Categories</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Who <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Qualifies</span> for Golden Visa?
            </h2>
            <p className="text-base text-white/70 font-medium">Six premium categories — find your path to 10-year residency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                    <div className="relative h-44 overflow-hidden">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-75 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                          <Icon size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-[10px] font-black text-amber-300 uppercase tracking-widest mb-1">{cat.tagline}</div>
                        <h3 className="text-lg font-black text-white leading-tight drop-shadow">{cat.title}</h3>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs text-white/80 font-medium leading-relaxed mb-4">{cat.description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {cat.features.map((feature, fi) => (
                          <span key={fi} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[9px] font-bold text-white uppercase tracking-wide">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. BENEFITS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <Award size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Why Golden Visa</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of the <span className="gradient-text">UAE Golden Visa</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Eight powerful advantages of the UAE's premium residency program.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
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

      {/* === 6. PROCESS — Dark Step Timeline === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-yellow-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              How to Get Your <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Golden Visa</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six simple steps to 10-year UAE residency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg opacity-15`}>
                      <span className="text-3xl font-black text-amber-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-amber-300 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. DOCUMENTS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileText size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What You'll Need</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Required <span className="gradient-text">Documents</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We handle the complete paperwork and approvals on your behalf.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {documents.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-amber-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-600" />
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{doc.label}</h3>
                        <p className="text-xs text-[#64748B] font-medium leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <Award size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Your Trusted <span className="gradient-text">Golden Visa Partner</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Eight reasons why exceptional talent trusts us.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-amber-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-600" />
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{item.label}</h3>
                        <p className="text-xs text-[#64748B] font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Our track record speaks for itself.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about the UAE Golden Visa. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Crown size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free eligibility assessment with our Golden Visa specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Golden Visa Services.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-amber-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-yellow-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-yellow-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-amber-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-amber-400 group-open:to-yellow-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-amber-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Golden Visa.</p>
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
                      <ArrowRight size={14} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-yellow-950/70 to-orange-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Crown size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Check Your Eligibility</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready for Your <span className="text-amber-300">10-Year Golden Visa?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free eligibility assessment. Our specialists will evaluate your profile and guide you through the entire process.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free eligibility assessment for the Golden Visa.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />Free Assessment
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Assessment', '10-Year Validity', 'Family Included'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss the Golden Visa.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-amber-600 hover:text-amber-700 transition">
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