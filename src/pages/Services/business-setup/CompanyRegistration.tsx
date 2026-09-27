// File: src/pages/services/business-setup/CompanyRegistration.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
   Award, FileText, DollarSign, Zap, Target, Crown,
  UserCheck, 
  Scale, Layers, Shield, Rocket,  Wallet,Route,
   Home, Globe2, ShieldCheck,IdCard,
  ChevronLeft, ChevronRight, 
  ClipboardCheck, FileSignature,  Megaphone, Palette,  Truck, 
  FileCheck, ScrollText,  Calculator, Fingerprint, 
  Compass,
  Eye,  Building as Bank, GraduationCap,
   Store as StoreIcon, Cpu, Coins, 
  HeartPulse, XCircle, AlertCircle
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Zap, value: '2-5', label: 'Days Licensing', color: 'from-cyan-400 to-blue-600' },
  { icon: DollarSign, value: 'AED 5,750', label: 'Starting Cost', color: 'from-blue-400 to-indigo-600' },
  { icon: Globe, value: '45+', label: 'Free Zones', color: 'from-indigo-400 to-violet-600' },
  { icon: Building2, value: '2,500+', label: 'Business Activities', color: 'from-violet-400 to-purple-600' },
];

const benefits = [
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'Own your Dubai-based company 100% with full control — no local UAE sponsor or partner required. Keep all profits and run your business independently.',
    color: 'from-cyan-400 to-blue-600'
  },
  {
    icon: DollarSign,
    title: '100% Tax Exemption',
    description: 'Zero corporate income tax, zero personal income tax, zero capital gains tax — legally maximize profits and reinvest in growth.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Wallet,
    title: 'Total Profit Freedom',
    description: 'No currency control restrictions. Repatriate all your profit and capital back to your home country without any financial limitations.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    icon: Compass,
    title: 'Global Business Hub',
    description: 'Located at the intersection of Europe, Asia, and Africa — ideal time zone, extensive aviation networks, world-class logistics infrastructure.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: Award,
    title: 'Globally Trusted Brand',
    description: 'A Dubai company opens doors internationally with high credibility — building trust with clients, suppliers, banks, and investors.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    icon: Zap,
    title: 'Speedy Setup Process',
    description: 'Free Zone and Mainland companies licensed in 2-5 business days with proper documentation — quick, easy, and fully compliant.',
    color: 'from-pink-400 to-rose-600'
  },
  {
    icon: Building2,
    title: 'High-End Workspaces',
    description: 'Premium infrastructure — modern offices, co-working spaces, warehouses, logistics hubs, and smart business parks to suit any business model.',
    color: 'from-rose-400 to-red-600'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Identify a Business Activity',
    description: 'Choose from over 2,500 activities — trading, consulting, e-commerce, IT, media, healthcare, and finance. Defines your license type and jurisdiction.',
    color: 'from-cyan-400 to-blue-600'
  },
  {
    step: '02',
    icon: FileSignature,
    title: 'Reserve a Trade Name',
    description: 'Select a unique business name compliant with UAE rules. We check availability and officially reserve it with DED or Free Zone.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    step: '03',
    icon: Scale,
    title: 'Choose Legal Structure',
    description: 'Select from Sole Proprietorship, LLC, Civil Company, or Free Zone Establishment (FZE). Determines ownership, liability, and visa quotas.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    step: '04',
    icon: FileCheck,
    title: 'Compile & Submit Paperwork',
    description: 'Prepare and submit passport copies, visa stamps, proof of address, shareholder details, and business plan. We handle all translations and notifications.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    step: '05',
    icon: Building2,
    title: 'Find Office Space',
    description: 'Choose a physical office (Mainland) or flexi-desk (Free Zone). We help you find affordable options and issue all tenancy documentation.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    step: '06',
    icon: ScrollText,
    title: 'Get Your Business License',
    description: 'Following approval and payment you receive your business license — commercial, professional, or industrial.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  
  {
    step: '08',
    icon: Bank,
    title: 'Introduce Corporate Bank Account',
    description: 'Set up your corporate account with Emirates NBD, Mashreq, ADCB, RAKBANK. We assist with KYC and expedite the process.',
    color: 'from-rose-400 to-red-600'
  },
];

const documents = [
  { icon: IdCard, label: 'Visa Copy or Entry Stamp', desc: 'If applicable' },
  { icon: Home, label: 'Proof of Address', desc: 'Utility bill or bank statement' },
  { icon: ClipboardCheck, label: 'Business Plan', desc: 'For some Free Zones' },
  { icon: FileSignature, label: 'NOC from Sponsor', desc: 'If on existing visa' },
  { icon: Fingerprint, label: 'Emirates ID & Medical', desc: 'For Residency Visa' },
];

const businessActivities = [
  {
    id: 'general-trading',
    icon: StoreIcon,
    title: 'General Trading & E-commerce',
    tagline: 'Global Trade & Digital Commerce',
    description: 'Start your General Trading or E-commerce business in Dubai — a global nexus of international trade and digital commerce. Import/export products or start an online business with world-class infrastructure.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    color: 'from-cyan-500 to-blue-700',
    features: ['Import/Export', 'E-commerce', 'Dropshipping', 'Worldwide Sales'],
    bestFor: 'Traders & Retailers'
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing & IT Services',
    tagline: 'MENA Region Demand',
    description: 'Start a Digital Marketing or IT Services business in Dubai — SEO agencies, app developers, cybersecurity consultants, cloud providers. Benefit from business-friendly regulation and MENA region growth.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    color: 'from-blue-500 to-indigo-700',
    features: ['SEO Agencies', 'App Development', 'Cybersecurity', 'Cloud Services'],
    bestFor: 'Tech & Marketing Firms'
  },
  {
    id: 'consulting',
    icon: Briefcase,
    title: 'Consulting & Management Services',
    tagline: 'Strategic Advisory',
    description: 'Start your Consulting or Business Management business in Dubai — advise startups, SMEs, or corporates on strategy, HR, finance, and operations. Choose between Free Zone or Mainland license.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    color: 'from-indigo-500 to-violet-700',
    features: ['Strategy Consulting', 'HR Advisory', 'Finance Consulting', 'Operations'],
    bestFor: 'Consultants'
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics, Import & Export',
    tagline: 'Global Trade Routes',
    description: 'Launch a Logistics, Import and Export business in the UAE — connect globally through air, sea, and land routes. World-class ports make Dubai the ideal transit hub.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
    color: 'from-violet-500 to-purple-700',
    features: ['Freight Forwarding', 'Warehousing', 'Customs Codes', 'Re-Export'],
    bestFor: 'Logistics Firms'
  },
  {
    id: 'fintech',
    icon: Coins,
    title: 'FinTech & Crypto Firms',
    tagline: 'Emerging Financial Hub',
    description: 'Dubai is a leading location for FinTech and Cryptocurrency startups with clear regulations. Launch digital payments, online banking, crypto exchanges, or blockchain solutions.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
    color: 'from-purple-500 to-fuchsia-700',
    features: ['Digital Payments', 'Crypto Exchanges', 'Blockchain', 'DIFC/ADGM/DMCC'],
    bestFor: 'FinTech Startups'
  },
  {
    id: 'web-ai-saas',
    icon: Cpu,
    title: 'Web, AI & SaaS Companies',
    tagline: 'Next Wave of Innovation',
    description: 'Start a Web3, AI, or SaaS company in Dubai. Develop decentralized platforms, AI software, or SaaS B2B products with government-backed tech clusters and 100% ownership.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    color: 'from-fuchsia-500 to-pink-700',
    features: ['Web3 Platforms', 'AI Software', 'SaaS Products', 'IP Repurposing'],
    bestFor: 'Tech Innovators'
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare & Wellness Services',
    tagline: 'Medical Tourism Hub',
    description: 'Launch your Healthcare or Wellness business in Dubai — clinics, telemedicine, wellness retreats. UAE is heavily investing in healthcare infrastructure and medical tourism.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    color: 'from-pink-500 to-rose-700',
    features: ['Clinics', 'Telemedicine', 'Wellness Centers', 'Medical Consulting'],
    bestFor: 'Healthcare Providers'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Educational & Recruitment Services',
    tagline: 'Talent & Learning',
    description: 'Establish your education or recruitment agency in the UAE. Online courses, K-12 education, tutoring, or manpower recruitment — Dubai Knowledge Park and mainland licensing.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    color: 'from-rose-500 to-red-700',
    features: ['Online Courses', 'K-12 Education', 'Tutoring', 'Manpower Services'],
    bestFor: 'Education & HR'
  },
];

const compliance = [
  { icon: Eye, label: 'Beneficial Ownership Disclosure (UBO)', color: 'from-cyan-400 to-blue-600' },
  { icon: Layers, label: 'Economic Substance Regulations (ESR)', color: 'from-blue-400 to-indigo-600' },
  { icon: Shield, label: 'Anti-Money Laundering (AML) Laws', color: 'from-indigo-400 to-violet-600' },
  { icon: Globe2, label: 'OECD CRS Reporting Standards', color: 'from-violet-400 to-purple-600' },
];

const banks = [
  { name: 'Emirates NBD', icon: Bank, color: 'from-cyan-400 to-blue-600' },
  { name: 'Mashreq Bank', icon: Bank, color: 'from-blue-400 to-indigo-600' },
  { name: 'ADCB', icon: Bank, color: 'from-indigo-400 to-violet-600' },
  { name: 'RAKBANK', icon: Bank, color: 'from-violet-400 to-purple-600' },
  { name: 'International Banks', icon: Globe, color: 'from-purple-400 to-fuchsia-600' },
];

const costComparison = [
  { route: 'Free Zone LLC', cost: 'AED 5,750', ownership: '100% Foreign', timeline: '3-5 Days', bestFor: 'Online & Export', color: 'from-cyan-400 to-blue-600' },
  { route: 'Mainland LLC', cost: 'AED 8,500', ownership: '100% Foreign', timeline: '5-7 Days', bestFor: 'Local Market', color: 'from-blue-400 to-indigo-600' },
  { route: 'Offshore', cost: 'AED 4,500', ownership: '100% Foreign', timeline: '3-5 Days', bestFor: 'Holding & Assets', color: 'from-indigo-400 to-violet-600' },
  { route: 'DIFC', cost: 'AED 25,000', ownership: '100% Foreign', timeline: '7-10 Days', bestFor: 'Finance & Law', color: 'from-violet-400 to-purple-600' },
];

const mistakes = [
  { icon: XCircle, label: 'Picking the wrong legal structure', desc: 'Free zone vs mainland vs offshore changes tax and trading rights.', color: 'from-red-500 to-rose-700' },
  { icon: AlertCircle, label: 'Unclear business activity', desc: 'Authorities reject vague activity descriptions.', color: 'from-rose-500 to-pink-700' },
  { icon: XCircle, label: 'Ignoring name-approval rules', desc: 'Some names are restricted or need NOC.', color: 'from-pink-500 to-fuchsia-700' },
  { icon: AlertCircle, label: 'No bank-account plan', desc: 'Incorporate in a jurisdiction the banks actually accept.', color: 'from-fuchsia-500 to-purple-700' },
  { icon: XCircle, label: 'DIY processing', desc: 'One wrong document can add weeks. Our team files it first time.', color: 'from-purple-500 to-violet-700' },
];

const whyChooseUs = [
  { icon: Target, label: 'Personalized Packages', desc: 'Tailored to your industry, vision & budget' },
  { icon: Zap, label: 'Fast 2-5 Day Licensing', desc: 'Proven process for quick launch' },
  { icon: Scale, label: 'Legal & Tax Advisory', desc: 'Throughout your business setup' },
  { icon: UserCheck, label: 'Dedicated Manager', desc: 'Personal relationship manager' },
  { icon: Bank, label: 'Corporate Bank Account', desc: 'Opening with major UAE banks' },
  { icon: Palette, label: 'CRM, Website & Branding', desc: 'Digital presence development' },
  { icon: ShieldCheck, label: 'End-to-End Compliance', desc: 'Visa, immigration & PRO services' },
  { icon: Globe, label: 'Multilingual Support', desc: 'English, Hindi & Urdu' },
];

const growthStats = [
  { icon: Building2, value: '10,000+', label: 'Companies Formed', color: 'from-cyan-400 to-blue-600' },
  { icon: Globe, value: 'Global', label: 'Client Reach', color: 'from-blue-400 to-indigo-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Setup Expert', color: 'from-indigo-400 to-violet-600' },
  { icon: Zap, value: '2-5', label: 'Days Licensing', color: 'from-violet-400 to-purple-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-purple-400 to-fuchsia-600' },
  { icon: Crown, value: 'Preferred', label: 'Setup Partner', color: 'from-fuchsia-400 to-pink-600' },
];

const faqs = [
  {
    q: 'What is the estimated cost to register a company in Dubai?',
    a: 'Costs vary based on business activity, jurisdiction (Free Zone or Mainland), number of visas, and office space. Free Zone registration starts from AED 5,750. We offer transparent pricing with no hidden fees.'
  },
  {
    q: 'Do I need a local sponsor to set up a company in Dubai?',
    a: 'No. Recent UAE reforms allow 100% foreign ownership in most Free Zones and many Mainland activities. Only specific strategic activities may still require a local partner.'
  },
  {
    q: 'What is the difference between Free Zone and Mainland company setup?',
    a: 'Free Zone companies operate within the zone and internationally with 100% foreign ownership. Mainland companies can trade directly in the UAE market, bid for government contracts, and operate across all 7 Emirates.'
  },
  {
    q: 'Am I able to register a company in Dubai if I am not physically present?',
    a: 'Yes. Most of the process can be completed remotely. Only medical tests and Emirates ID biometrics require physical presence — we coordinate everything for a quick visit.'
  },
  {
    q: 'How many visas can I apply for under my company license?',
    a: 'Visa quota depends on your license type and office space. Free Zones typically allow 1-6 visas per license. Mainland allows unlimited visas based on office size.'
  },
  {
    q: 'What are the best business activities to register in Dubai that can be very profitable?',
    a: 'Popular profitable activities include General Trading, E-commerce, Digital Marketing, IT Services, Consulting, Logistics, FinTech, Web3/AI/SaaS, Healthcare, and Education.'
  },
  {
    q: 'Can my company issue me a residence visa for the UAE?',
    a: 'Yes. Your company can sponsor your investor or employment visa, and then sponsor your family members as dependents. We handle the entire visa process.'
  },
  {
    q: 'Is Dubai a tax-free jurisdiction?',
    a: 'Dubai offers 0% personal income tax, 0% capital gains tax, and no currency restrictions. Corporate tax applies at current thresholds with qualifying small businesses potentially benefiting from 0% tax.'
  },
  {
    q: 'Can I open a corporate bank account in the UAE?',
    a: 'Yes. We assist with opening corporate bank accounts at Emirates NBD, Mashreq, ADCB, RAKBANK, and international banks. Full support with KYC, documents, and activation.'
  },
  {
    q: 'How long does it take to get my business license in Dubai?',
    a: 'Free Zone licenses typically in 2-5 working days. Mainland licenses take 5-7 days for license, with complete setup (including visas and office) taking 2-4 weeks.'
  },
];

const relatedServices = [
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore structures.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-cyan-400 to-blue-600' },
  { slug: 'mainland-company-formation', title: 'Mainland Company Formation', description: 'Full UAE market access with DET license.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-blue-400 to-indigo-600' },
  { slug: 'trade-license', title: 'Trade License in Dubai', description: 'Get your DET trade license in 2-5 days.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-indigo-400 to-violet-600' },
];

// ============ COMPONENT ============
export default function CompanyRegistration() {
  const [activeActivity, setActiveActivity] = useState(0);

  const nextActivity = () => setActiveActivity((prev) => (prev + 1) % businessActivities.length);
  const prevActivity = () => setActiveActivity((prev) => (prev - 1 + businessActivities.length) % businessActivities.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-cyan-950/80 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
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
                <span className="text-white font-bold">Company Registration</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-cyan-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Fast & Affordable</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Company Registration <span className="text-cyan-300">in Dubai</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Register your company in 2-5 days from AED 5,750. Full support for licensing, banking, visas, and compliance across Free Zone, Mainland, and Offshore.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Company Registration in Dubai.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', '2-5 Days', 'AED 5,750 Start'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-blue-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-indigo-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Rocket size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Registration Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <Building2 size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Ready to Register</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Timeline</div>
                          <div className="text-lg font-black text-cyan-600">2-5 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">From</div>
                          <div className="text-lg font-black text-blue-600">AED 5.7K</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <StoreIcon size={18} className="text-cyan-500" />
                        <Megaphone size={18} className="text-blue-500" />
                        <Briefcase size={18} className="text-indigo-500" />
                        <Truck size={18} className="text-violet-500" />
                        <Coins size={18} className="text-purple-500" />
                        <Cpu size={18} className="text-fuchsia-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Start Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHAT IS REGISTRATION — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="Dubai Business" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Global Hub</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Europe · Asia · Africa</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Zero Tax & Global Access</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is <span className="gradient-text">Company Registration in Dubai?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  Registering your company in Dubai means <span className="font-black text-[#0A0F1F]">legally registering a business in the UAE</span> mainland, free zone, or offshore jurisdictions.
                </p>
                <p>
                  At Setup Zone Dubai, we assist in the full <span className="font-black text-[#0A0F1F]">legal, administrative, and compliance processes</span> of company registration — delivering your trade license, visa, and business bank account setup as quickly as possible.
                </p>
                <p>
                  Dubai offers everything your business needs to grow in a hyper-competitive world, with <span className="font-black text-[#0A0F1F]">zero personal and corporate tax</span>, world-class infrastructure, and easy registration. Positioned at the intersection of Europe, Asia, and Africa — the best location for logistics, trade, e-commerce, and consultancy services.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['100% Ownership', '0% Tax', '2-5 Days', '45+ Free Zones', '2,500+ Activities', 'Global Access'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
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

      {/* === 4. BENEFITS — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-cyan-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Why Register in Dubai</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Benefits of <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Company Registration</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Eight powerful advantages that make Dubai the top choice for global businesses.</p>
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

      {/* === 5. PROCESS STEPS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Route size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">8-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Is the <span className="gradient-text">Registration Process?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Eight simple steps from activity to bank account.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg opacity-15">
                      <span className="text-lg font-black text-cyan-600">{step.step}</span>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-1">STEP {step.step}</div>
                    <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. DOCUMENTS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileText size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Prepare, Submit, Get Approved</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What <span className="gradient-text">Documents</span> Do You Need?
            </h2>
            <p className="text-base text-[#475569] font-medium">We manage translations, notarizations, and submissions.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-cyan-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
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

      {/* === 7. BUSINESS ACTIVITIES — Swipe Carousel === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Target size={14} className="text-cyan-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Finance Innovation Made Easy</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Which <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Business Activities</span> Can You Register?
            </h2>
            <p className="text-base text-white/70 font-medium">Swipe through 8 high-demand activities — find your fit.</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeActivity}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={businessActivities[activeActivity].image}
                      alt={businessActivities[activeActivity].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${businessActivities[activeActivity].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${businessActivities[activeActivity].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = businessActivities[activeActivity].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Activity {String(activeActivity + 1).padStart(2, '0')} / {String(businessActivities.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-cyan-400/90 backdrop-blur-xl border border-cyan-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {businessActivities[activeActivity].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-cyan-300 uppercase tracking-widest mb-2">{businessActivities[activeActivity].tagline}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {businessActivities[activeActivity].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mb-6 drop-shadow">
                        {businessActivities[activeActivity].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {businessActivities[activeActivity].features.map((feature, fi) => (
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
                onClick={prevActivity}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextActivity}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {businessActivities.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveActivity(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeActivity ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-3">
              {businessActivities.map((activity, i) => {
                const Icon = activity.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveActivity(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeActivity
                        ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/30 scale-105'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <div className="relative h-20">
                      <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 8. COMPLIANCE + BANKING — Split === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Compliance */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
                  <ShieldCheck size={14} className="text-cyan-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Global Compliance</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Is Your Company <span className="gradient-text">Fully Compliant?</span>
                </h2>

                <div className="space-y-3">
                  {compliance.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-cyan-50/50 to-blue-50/50 border border-cyan-100">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm font-bold text-[#0A0F1F]">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <p className="text-xs text-[#64748B] font-medium leading-relaxed mt-6 pt-6 border-t border-dashed border-border">
                  Setup Zone Dubai ensures full compliance — while maintaining business confidentiality and privacy.
                </p>
              </div>
            </motion.div>

            {/* Banking */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-10 blur-[80px] rounded-full" />
              <div className="relative p-8 rounded-3xl bg-white border border-border shadow-lg h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                  <Bank size={14} className="text-blue-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Corporate Banking</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                  Can You Open a <span className="gradient-text">Business Bank Account?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {banks.map((bank, i) => {
                    const Icon = bank.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bank.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-xs font-bold text-[#0A0F1F] leading-tight">{bank.name}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <p className="text-xs text-[#64748B] font-medium leading-relaxed mt-6 pt-6 border-t border-dashed border-border">
                  We support with KYC preparation, document collection, and account activation — including IBAN and multi-currency support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 9. COST COMPARISON TABLE === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Calculator size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">2026 Cost Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Company Registration <span className="gradient-text">Cost Comparison</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Compare routes and pick the best fit for your business.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-white">
            <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 px-6 py-5">
              <div className="grid grid-cols-5 gap-4 text-xs font-black text-white uppercase tracking-widest">
                <div>Route</div>
                <div>Starting Cost</div>
                <div>Ownership</div>
                <div>Timeline</div>
                <div>Best For</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {costComparison.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="grid grid-cols-5 gap-4 px-6 py-5 hover:bg-cyan-50/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${row.color} flex items-center justify-center shadow-sm`}>
                      <Building2 size={14} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-black text-[#0A0F1F]">{row.route}</span>
                  </div>
                  <div>
                    <span className="text-sm font-black text-cyan-600">{row.cost}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600">{row.ownership}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#64748B]">{row.timeline}</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#64748B]">{row.bestFor}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-4 bg-slate-50/70 border-t border-border">
              <p className="text-xs text-[#64748B] font-medium italic">
                All prices are starting figures; final cost depends on activity, office package, and visa allocation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 10. MISTAKES TO AVOID — Dark === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-red-950 via-rose-950 to-pink-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <AlertCircle size={14} className="text-red-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Avoid These Mistakes</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              5 Mistakes That <span className="bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">Delay Your Registration</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Learn from others' mistakes — save weeks of delays.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {mistakes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full overflow-hidden">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-[10px] font-black text-red-300 uppercase tracking-widest mb-1">Mistake {String(i + 1).padStart(2, '0')}</div>
                    <h3 className="text-sm font-black text-white mb-2 leading-tight">{item.label}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10 max-w-3xl mx-auto p-6 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                <Zap size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-black text-white mb-1">Fast-Track Your Registration</h3>
                <p className="text-xs text-white/90 font-medium">Get a free consultation and register your Dubai company in as little as 3 days from AED 5,999.</p>
              </div>
              <a
                href={getWhatsAppLink("Hi! I'd like to fast-track my company registration.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
              >
                <MessageCircle size={13} />
                Start Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 11. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Not Just Service Providers — <span className="gradient-text">Long-Term Partners</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Eight reasons why entrepreneurs trust us.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-cyan-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
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

      {/* === 12. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <TrendingUp size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Trusted by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your registration, in expert hands.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about Company Registration in Dubai. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Rocket size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our registration specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Company Registration in Dubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-cyan-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-cyan-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-cyan-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with Company Registration.</p>
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
                      <ArrowRight size={14} className="text-cyan-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-cyan-950/70 to-blue-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Launch Your Company in Dubai</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to <span className="text-cyan-300">Register Your Company?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Fast business licensing in 2-5 days, full support for banking, visas, and compliance. Everything under one roof.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for Company Registration.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'AED 5,750 Start', '100% Ownership'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss Company Registration.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-cyan-600 hover:text-cyan-700 transition">
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