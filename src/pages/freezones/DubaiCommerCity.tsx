// File: src/pages/freezones/DubaiCommerCity.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, Store, Package, BarChart3,
  ShoppingCart, UserCheck, Cpu,  Warehouse,  Truck, 
  Megaphone,  Shield, Rocket,  CreditCard,
  BadgeCheck, Database, 
  Layout,  QrCode, Code,  Boxes, Video,
  Link2, 
  Leaf, Recycle, Sun, Wind,  TreePine, Globe2, 
  Plane, 
  Route, 
   RefreshCw,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Building2, value: '500+', label: 'E-Commerce Brands', color: 'from-orange-400 to-red-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-red-400 to-rose-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-rose-400 to-pink-600' },
  { icon: Clock, value: '3-5', label: 'Days Setup', color: 'from-pink-400 to-fuchsia-600' },
];

const benefits = [
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'Enjoy full control of your business with no local Emirati sponsor required, ensuring complete authority over operations, profits, and decision-making.',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: DollarSign,
    title: '0% Corporate & Personal Income Tax',
    description: 'Operate at max profitability with tax-free earnings on both corporate and personal income — a significant benefit for startups and global e-commerce brands.',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: Package,
    title: 'Bonded Free Zone & No Customs Duties',
    description: 'Save on duty-free imports and exports within the bonded free zone — perfect for logistics, retail, and global supply chain companies.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Plane,
    title: 'Close Proximity to DXB Airport',
    description: 'DCC is right beside Dubai International Airport — ideal for air freight handling, last-mile logistics, and regional trade.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: Zap,
    title: 'Fast-Track Licensing & Registration',
    description: 'Obtain your FZCO or PLC license in just days! Limited paperwork and all digital processing through DCC\'s robust online system.',
    color: 'from-fuchsia-400 to-purple-600'
  },
  {
    icon: Cpu,
    title: 'Integrated Digital Ecosystem',
    description: 'DCC provides a tech-ready ecosystem featuring integrated CRM, ERP, AI, CMS tools, and e-commerce integrations.',
    color: 'from-purple-400 to-violet-600'
  },
  {
    icon: Clock,
    title: '24/7 Customs Clearance',
    description: 'Supporting customs clearance with the onsite customs team, and 24/7 services at DCC. Ideal for businesses doing high volume.',
    color: 'from-violet-400 to-indigo-600'
  },
  {
    icon: Leaf,
    title: 'Green Building Certified',
    description: 'Eco-friendly, sustainable buildings that use smart energy with contemporary design — align your brand with ESG targets.',
    color: 'from-emerald-400 to-teal-600'
  },
];

const licenseTypes = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce License',
    description: 'Most suitable for businesses selling goods or services online via websites or marketplace platforms. B2B and B2C models with payment gateway connections.',
    code: 'ECM',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: Truck,
    title: 'Trade License',
    description: 'Best for import/export and wholesalers trading in physical goods in the UAE and international markets through DCC\'s logistics network.',
    code: 'TRD',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: Briefcase,
    title: 'Service License',
    description: 'For professional services like digital marketing, media production, IT consulting, and business advisory — locally or globally.',
    code: 'SRV',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Boxes,
    title: 'General Trading License',
    description: 'Broader flexibility to trade multiple, unrelated product categories under a single license — no need for separate trade licenses.',
    code: 'GTL',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: UserCheck,
    title: 'Freelancer License',
    description: 'For individual professionals in content creation, design, software development, digital marketing, and consultancy.',
    code: 'FRL',
    color: 'from-fuchsia-400 to-purple-600'
  },
  {
    icon: Building2,
    title: 'Branch Company Setup',
    description: 'For companies registered overseas or UAE mainland to open a branch in DCC without a new legal entity.',
    code: 'BRN',
    color: 'from-purple-400 to-violet-600'
  },
];

const officeSpaces = [
  {
    icon: Building2,
    title: 'Premium Fitted Offices',
    description: 'Modern offices designed specifically for digital commerce and tech enterprises.',
    color: 'from-orange-400 to-red-600',
    size: 'small'
  },
  {
    icon: Layout,
    title: 'Shell & Core Spaces',
    description: 'Customizable spaces to suit your team size and branding needs.',
    color: 'from-red-400 to-rose-600',
    size: 'small'
  },
  {
    icon: Warehouse,
    title: 'Dedicated Warehouses & 3PL',
    description: 'Purpose-built fulfillment centers and third-party logistics support — ideal for e-commerce brands needing streamlined storage and last-mile delivery. Fully integrated with DCC\'s bonded customs ecosystem.',
    color: 'from-rose-500 to-pink-600',
    size: 'large'
  },
  {
    icon: Users,
    title: 'Smart Desks & Coworking',
    description: 'Flexible, cost-efficient options for freelancers and lean digital teams.',
    color: 'from-pink-400 to-fuchsia-600',
    size: 'small'
  },
  {
    icon: Store,
    title: 'Retail, Food Halls & Kiosks',
    description: 'Event venues, meeting rooms, and pop-up kiosk setups for brands.',
    color: 'from-fuchsia-400 to-purple-600',
    size: 'small'
  },
];

const digitalSupport = [
  { icon: Globe, label: 'Website & E-Commerce Site Development' },
  { icon: Database, label: 'CRM, ERP & CMS Integration' },
  { icon: TrendingUp, label: 'SEO & Digital Marketing Services' },
  { icon: Store, label: 'Marketplace Listing & Content Optimization' },
  { icon: Cpu, label: 'AI Solutions & Blockchain Integration' },
  { icon: CreditCard, label: 'Payment Gateway Setup' },
  { icon: BadgeCheck, label: 'Trademark Registration & Branding' },
];

const logisticsFeatures = [
  {
    icon: Package,
    title: 'Bonded Warehousing',
    description: 'Goods can be stored in fully secured bonded warehouses without incurring import/export duties.',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: Truck,
    title: 'Cross-Border Delivery Management',
    description: 'Seamless coordination of international warehouses for timely global delivery.',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: BarChart3,
    title: 'Inventory Management Centers',
    description: 'Sophisticated centers to control and monitor stock levels in real-time.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Route,
    title: 'Last-Mile Logistics Solutions',
    description: 'Comprehensive last-mile delivery networks for faster fulfillment across UAE and MENA.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: QrCode,
    title: 'DCCWay Digital Clearance',
    description: 'Completely digital customs platform for speedy and transparent import/export approvals.',
    color: 'from-fuchsia-400 to-purple-600'
  },
  {
    icon: Link2,
    title: 'Logiflow Blockchain Integration',
    description: 'Innovative blockchain logistics tool for real-time supply chain visibility and compliance.',
    color: 'from-purple-400 to-violet-600'
  },
];

const businessActivities = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Digital Marketplaces',
    description: 'Launch B2B or B2C online stores, marketplace platforms, or drop-shipping businesses with fast license approvals.',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: Code,
    title: 'Software, CRM, ERP & AI Solutions',
    description: 'Develop and deploy SaaS, enterprise systems, CRM platforms, and AI-driven tools from Dubai\'s tech hub.',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: Megaphone,
    title: 'Marketing & Advertising Agencies',
    description: 'Set up digital marketing firms, content creation studios, SEO agencies, and ad-tech platforms.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Truck,
    title: 'Logistics, Warehousing & Freight',
    description: 'Operate logistics hubs, freight forwarding, third-party warehousing, or last-mile delivery services.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: Store,
    title: 'Retail & Wholesale Trade',
    description: 'Import, export, distribute, or sell physical goods via bonded warehouses with global reach.',
    color: 'from-fuchsia-400 to-purple-600'
  },
  {
    icon: Video,
    title: 'Digital Media Production',
    description: 'Register your media firm for video production, post-editing, animation, podcasting, and live-streaming.',
    color: 'from-purple-400 to-violet-600'
  },
  {
    icon: Briefcase,
    title: 'Business Consulting, FinTech & EdTech',
    description: 'Offer business advisory, financial technology, educational platforms, HR, and IT consulting services.',
    color: 'from-violet-400 to-indigo-600'
  },
];

const ecoFeatures = [
  { icon: Leaf, label: '100% LEED Certified Buildings' },
  { icon: Sun, label: 'Energy-Efficient Logistics Centers' },
  { icon: Wind, label: 'Smart Design Amenities' },
  { icon: Recycle, label: 'Dedicated Waste & Recycling' },
  { icon: Globe2, label: 'Dubai Green Economy Vision' },
  { icon: TreePine, label: 'Reduced Environmental Footprint' },
];

const partnerServices = [
  { icon: FileText, label: 'Company Registration & Trade Name Approval' },
  { icon: CreditCard, label: 'Investor & Employment Visas' },
  { icon: Building2, label: 'Office/Warehouse Allocation' },
  { icon: DollarSign, label: 'Bank Account Assistance' },
  { icon: Shield, label: 'ESR, AML & UBO Compliance' },
  { icon: RefreshCw, label: 'DCC License Renewals' },
  { icon: Rocket, label: 'Digital Launch & Branding' },
];

const growthStats = [
  { icon: Building2, value: '500+', label: 'E-Commerce Brands', color: 'from-orange-400 to-red-600' },
  { icon: Globe, value: 'Global', label: 'Digital Reach', color: 'from-red-400 to-rose-600' },
  { icon: TrendingUp, value: 'Leading', label: 'E-Commerce Hub', color: 'from-rose-400 to-pink-600' },
  { icon: DollarSign, value: 'Growing', label: 'Digital Economy', color: 'from-pink-400 to-fuchsia-600' },
  { icon: BarChart3, value: 'Significant', label: 'Regional Impact', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Crown, value: 'Preferred', label: 'For E-Commerce', color: 'from-purple-400 to-violet-600' },
];

const faqs = [
  {
    q: 'How long does it take to setup a business in Dubai CommerCity?',
    a: 'With our expert advice and support, you can setup your business in 3-5 working days thanks to DCC\'s fast track licensing application process and fully digital process.'
  },
  {
    q: 'What kinds of companies can I register in DCC?',
    a: 'DCC supports e-commerce brands, digital marketplaces, software and SaaS companies, AI and tech providers, logistics and fulfillment companies, digital marketing agencies, media production firms, and business consultancies.'
  },
  {
    q: 'Can I have 100% ownership of my company in Dubai CommerCity?',
    a: 'Yes. DCC allows 100% foreign ownership with no local Emirati sponsor required — you have complete authority over operations, profits, and decision-making.'
  },
  {
    q: 'Is DCC only for e-commerce businesses?',
    a: 'While DCC is the first dedicated e-commerce free zone in the UAE, it also supports tech startups, logistics providers, digital agencies, media production companies, and consulting firms.'
  },
  {
    q: 'Is there tax in DCC?',
    a: 'No. DCC offers 0% corporate and personal income tax — a significant benefit for startups and global e-commerce brands looking to serve the Middle East and beyond.'
  },
  {
    q: 'What type of workspace can I get in DCC?',
    a: 'DCC offers premium fitted offices, shell & core spaces, smart desks, coworking spaces, dedicated warehouses, 3PL support, event venues, food halls, retail spaces, and customizable fulfillment centers.'
  },
  {
    q: 'How does warehousing and logistics operate in DCC?',
    a: 'DCC operates 24/7 with an onsite customs team. You get access to bonded warehouses, cross-border delivery management, inventory management centers, last-mile logistics, DCCWay digital clearance, and Logiflow blockchain integration.'
  },
  {
    q: 'Can I apply for employment visas with Dubai CommerCity?',
    a: 'Yes. We handle investor visas, employment visas for your team, and family sponsorship — complete visa and immigration compliance support through DCC.'
  },
  {
    q: 'Is DCC a green/sustainable free zone?',
    a: 'Absolutely. DCC has 100% LEED Certified buildings, energy-efficient logistics centers, smart design amenities, and dedicated waste recycling facilities aligned with Dubai\'s Green Economy Vision.'
  },
  {
    q: 'Why would I consider Setup Zone Dubai for setting up my DCC company?',
    a: 'With over a decade of experience, we handle company registration, trade name approval, visas, office/warehouse allocation, bank account assistance, compliance (ESR, AML, UBO), license renewals, and digital launch & branding.'
  },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-orange-400 to-red-600' },
  { slug: 'golden-visa', title: 'Golden Visa', description: '10-year UAE residency for investors and talents.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-500' },
  { slug: 'compliance', title: 'Compliance Services', description: 'UBO, ESR, AML, and VAT advisory.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-rose-400 to-pink-600' },
];

// ============ COMPONENT ============
export default function DubaiCommerCity() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/95 via-red-900/75 to-rose-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <ShoppingCart size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Package size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">Dubai CommerCity</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-orange-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Grow Online. Go Global.</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Dubai <span className="text-orange-300">CommerCity</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                The UAE's first dedicated e-commerce free zone. Next to Dubai International Airport — the perfect launchpad for digital-first businesses, tech startups, and global trade.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-orange-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Dubai CommerCity Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', '3-5 Days Setup', 'E-Commerce Ecosystem'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-orange-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — E-Commerce Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-orange-300 shadow-[0_0_20px_rgba(251,146,60,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-red-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-rose-300" />
              </motion.div>

              {/* E-Commerce Dashboard Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShoppingCart size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">DCC Commerce</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg">
                          <Package size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Zone</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Dubai, UAE</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup Time</div>
                          <div className="text-lg font-black text-orange-600">3-5 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Brands</div>
                          <div className="text-lg font-black text-red-600">500+</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <ShoppingCart size={18} className="text-orange-500" />
                        <Package size={18} className="text-red-500" />
                        <Truck size={18} className="text-rose-500" />
                        <Plane size={18} className="text-pink-500" />
                        <Warehouse size={18} className="text-fuchsia-500" />
                        <Globe size={18} className="text-purple-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,146,60,0.15)] hover:-translate-y-1">
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

      {/* === 3. LAUNCH YOUR VENTURE — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-orange-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80" alt="DCC Warehouse" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                      <Warehouse size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">E-Commerce Hub</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Next to DXB Airport</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Rocket size={14} className="text-orange-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Launch Your Venture</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                The Region's First <span className="gradient-text">E-Commerce Free Zone</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  Setting up in Dubai CommerCity (DCC) Free Zone means entering the region's first and only free zone <span className="font-black text-[#0A0F1F]">dedicated entirely to e-commerce businesses</span>. Strategically located next to Dubai International Airport, CommerCity is designed to support online retailers, logistics providers, digital platforms, and tech-driven companies.
                </p>
                <p>
                  Whether you're an online retail start-up, an established e-commerce brand expanding into the Middle East, a logistics and fulfillment provider, or a digital service company — <span className="font-black text-[#0A0F1F]">DCC offers everything you need to scale</span>. From state-of-the-art warehouses to streamlined customs and logistics facilities, it gives businesses the advantage of speed, efficiency, and global connectivity.
                </p>
                <p>
                  At Setup Zone Dubai, we make your CommerCity setup <span className="font-black text-[#0A0F1F]">simple and stress-free</span>. Our team handles the entire process — from company formation and license selection to visas, compliance, and operational setup.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Digital-First Ecosystem', 'Bonded Warehousing', 'Smart Office Space', 'Customs Clearance', 'Logistics Integration', 'Global Connectivity'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
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

      {/* === 4. BENEFITS — Dark Section === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-orange-950 via-red-950 to-rose-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-orange-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Grow Online. Go Global.</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Benefits of Setting Up in <span className="bg-gradient-to-r from-orange-300 to-rose-300 bg-clip-text text-transparent">Dubai CommerCity</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Everything you need to launch, scale, and succeed in e-commerce.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-3 leading-tight">{benefit.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. LICENSE TYPES — Digital Certificate Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-soft mb-6">
              <FileText size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-orange-700">Endless Creative Business Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What License Types Are <span className="gradient-text">Available in DCC?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We assist you in determining the most effective license for your business model.</p>
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

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-sm text-[#64748B] font-medium mt-8 max-w-2xl mx-auto">
            We handle every aspect of the DCC license registration, establishment card, DCCWay Gate Pass setup, and business renewal at DCC.
          </motion.p>
        </div>
      </section>

      {/* === 6. OFFICE SPACES — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Building2 size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Future-Ready Office Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              World-Class Infrastructure & <span className="gradient-text">Business Facilities</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Diverse range of scalable and modern facilities designed for digital commerce.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Building2 size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Premium Fitted Offices</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Modern offices designed specifically for digital commerce and tech enterprises.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-rose-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-400 to-rose-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Layout size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Shell & Core Spaces</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Customizable spaces to suit your team size and branding needs.</p>
            </motion.div>

            {/* Large card — Dedicated Warehouses */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 p-6 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Warehouse size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Warehouse size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2">Dedicated Warehouses & 3PL</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">Purpose-built fulfillment centers and third-party logistics support.</p>
                </div>
              </div>
            </motion.div>

            {/* Small card 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-600" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Users size={22} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-base font-black text-[#0A0F1F] mb-1.5">Smart Desks & Coworking</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">Flexible, cost-efficient options for freelancers and lean digital teams.</p>
            </motion.div>

            {/* Small card 4 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Store size={140} className="text-white" />
              </motion.div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Store size={22} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-2">Retail, Food Halls & Kiosks</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">Event venues, meeting rooms, and pop-up kiosk setups for brands.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. DIGITAL SUPPORT — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Zap size={14} className="text-orange-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Ongoing Digital Business Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Tech & Digital Growth Support <span className="bg-gradient-to-r from-orange-300 to-rose-300 bg-clip-text text-transparent">After Setup</span>
            </h2>
            <p className="text-base text-white/70 font-medium">We don't just build your DCC enterprise — we help you scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {digitalSupport.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-bold text-white leading-tight">{item.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. LOGISTICS FEATURES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-soft mb-6">
              <Truck size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-orange-700">Built for Expansion</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Logistics, Warehousing & <span className="gradient-text">Fulfillment in DCC</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">DCC operates 24/7 with an onsite customs team — unrivaled efficiency in managing your supply chain.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {logisticsFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-3 leading-tight">{feature.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. BUSINESS ACTIVITIES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Target size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Licenses for Modern Businesses</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Dubai CommerCity <span className="gradient-text">Activities Allowed</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">A wide range of business activities for digital-first industries and global trade.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessActivities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{activity.title}</h3>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">{activity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. ECO-FRIENDLY — Dark Green Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80" alt="Eco-Friendly DCC" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Leaf size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Green Innovation</div>
                      <div className="text-sm font-black text-[#0A0F1F]">100% LEED Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Leaf size={14} className="text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Green Innovation at Its Finest</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                The Optimal <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">Eco-Friendly Business Hub</span>
              </h2>

              <div className="space-y-5 text-base text-white/80 font-medium leading-relaxed">
                <p>
                  Dubai CommerCity has raised the bar for <span className="font-black text-white">sustainable business infrastructure</span>. As the first e-commerce free zone in the region designed with sustainable growth in mind, DCC has 100% LEED Certified buildings that meet global standards for energy efficiency and environmental quality.
                </p>
                <p>
                  From state-of-the-art, energy-efficient logistics centers to smart design amenities which conserve power, lighting and cooling, every detail is designed to encourage <span className="font-black text-white">sustainable success</span>.
                </p>
                <p>
                  Whether you are a startup or a multinational corporation, Dubai CommerCity enables you to <span className="font-black text-white">grow sustainably — and profitably</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {ecoFeatures.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs font-bold text-white">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 11. WHY PARTNER WITH US === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-orange-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Launch Confidently With Experts</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Partner with <span className="gradient-text">Setup Zone Dubai?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">With over a decade of experience, we streamline your DCC Free Zone setup.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-bold text-[#0A0F1F] leading-tight">{item.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-sm text-[#64748B] font-medium mt-8 max-w-2xl mx-auto">
            We handle everything so you can focus on running your business.
          </motion.p>
        </div>
      </section>

      {/* === 12. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-orange-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Dubai's Leading <span className="gradient-text">E-Commerce Hub</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Rapidly growing ecosystem for e-commerce, tech, and logistics businesses.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(251,146,60,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-orange-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about Dubai CommerCity Free Zone. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <ShoppingCart size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our DCC specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Dubai CommerCity Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-orange-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-orange-200 hover:shadow-[0_20px_60px_rgba(251,146,60,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-orange-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-orange-400 group-open:to-red-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-orange-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
            <p className="text-base text-[#475569] font-medium">Services that pair well with your DCC setup.</p>
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
                      <ArrowRight size={14} className="text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-950/90 via-red-900/70 to-rose-900/50" />
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
                    Ready to Launch in <span className="text-orange-300">Dubai CommerCity?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the entire setup process — from license to launch.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for Dubai CommerCity setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-orange-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '3-5 Days Setup', 'E-Commerce Ecosystem'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-orange-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss Dubai CommerCity setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-orange-600 hover:text-orange-700 transition">
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