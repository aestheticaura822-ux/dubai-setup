// File: src/pages/freezones/KIZAD.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
 Award, FileText, DollarSign, Zap, Target, Crown,  Package, BarChart3,
  ShoppingCart,  Factory, Warehouse, Container, Truck, Ship,
  Anchor,Plane, Train,Fuel, Leaf,
  Layers,  Rocket,  MapPin, Calendar, Building, Scale, Droplets,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Factory, value: '500+', label: 'Industrial Companies', color: 'from-blue-400 to-indigo-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-indigo-400 to-violet-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-violet-400 to-purple-600' },
  { icon: Clock, value: '5-10', label: 'Days Setup', color: 'from-purple-400 to-fuchsia-600' },
];

const whatIsKizad = [
  {
    icon: Factory,
    title: 'Industrial Start-Up with Low Costs',
    description: 'KIZAD Free Zone is one of the lowest-cost zones in the UAE to establish a business in the industrial sector. Rentals for land, warehouses and office space are highly competitive, which is attractive to entrepreneurs and SMEs.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Ship,
    title: 'Connectivity to World-Class Markets',
    description: 'KIZAD has a direct connection to Khalifa Port, one of the region\'s most sophisticated deep-sea ports, and is a short drive to Abu Dhabi International Airport — placing itself at the heart of logistics management.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    icon: Globe,
    title: '100% Foreign Ownership & Profit Repatriation',
    description: 'KIZAD Free Zone allows entrepreneurs to enjoy 100% foreign ownership with no UAE national local sponsorship requirement. Full repatriation of profits and capital with zero personal and corporate income taxes.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: Building2,
    title: 'Accessible and Scalable Infrastructure',
    description: 'Choose pre-built LIUs (light industrial units), customizable warehouses, standard office space, or rental office space. Whether starting with a single unit or a large facility, KIZAD has tailored options for your industry.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    icon: Zap,
    title: 'Fast Licensing & Government Support',
    description: 'Most commercial and industrial licenses are issued in 5-10 working days. Dedicated support services for registration, visas, and compliance with a streamlined single-window clearing system.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    icon: Layers,
    title: 'A Strategic Ecosystem for Industrial Growth',
    description: 'KIZAD is home to diverse sectors — from advanced manufacturing to renewable energy, oil and gas services, and e-commerce logistics. Part of Abu Dhabi Ports strategy for a connected industrial ecosystem.',
    color: 'from-pink-400 to-rose-600'
  },
];

const benefits = [
  { icon: Globe, label: '100% Foreign Ownership & Full Profit Repatriation' },
  { icon: DollarSign, label: 'No Personal and Corporate Income Tax' },
  { icon: Calendar, label: 'Flexible Leasing Options' },
  { icon: Ship, label: 'Direct Connectivity to Khalifa Port' },
];

const industries = [
  { icon: Fuel, label: 'Oil & Gas Engineering', color: 'from-amber-400 to-orange-600' },
  { icon: Leaf, label: 'Renewable Energy & Recycling', color: 'from-emerald-400 to-teal-600' },
  { icon: Package, label: 'Packaging & Logistics', color: 'from-blue-400 to-indigo-600' },
  { icon: ShoppingCart, label: 'Digital Trade & E-Commerce Hubs', color: 'from-violet-400 to-purple-600' },
  { icon: Factory, label: 'Heavy Manufacturing & Fabrication', color: 'from-slate-400 to-gray-600' },
  { icon: Container, label: 'Food Processing & Cold Storage', color: 'from-rose-400 to-pink-600' },
  { icon: Truck, label: 'Automotive Assembly & Distribution', color: 'from-cyan-400 to-sky-600' },
  { icon: Droplets, label: 'Industrial Chemicals & Lubricants', color: 'from-fuchsia-400 to-purple-600' },
];

const facilityTypes = [
  {
    icon: Factory,
    title: 'Light Industrial Units (LIUs)',
    description: 'Pre-built units ready for immediate industrial operations — perfect for small to medium manufacturing.',
    color: 'from-blue-400 to-indigo-600',
    size: 'small'
  },
  {
    icon: Warehouse,
    title: 'Customizable Warehouses',
    description: 'Bonded and non-bonded warehouses with flexible sizing to match your storage and logistics needs.',
    color: 'from-indigo-400 to-violet-600',
    size: 'small'
  },
  {
    icon: Building2,
    title: 'Land Plots for Heavy Industry',
    description: 'KIZAD offers some of the largest industrial land plots in the UAE — with direct access to Khalifa Port, Etihad Rail, and major highways. Ideal for heavy manufacturing, oil & gas, and large-scale logistics operations with competitive power and utilities.',
    color: 'from-violet-500 to-purple-700',
    size: 'large'
  },
  {
    icon: Building,
    title: 'Standard Office Spaces',
    description: 'Professional office spaces for administration and management teams.',
    color: 'from-purple-400 to-fuchsia-600',
    size: 'small'
  },
  {
    icon: Briefcase,
    title: 'Flexi-Desks & Rental Offices',
    description: 'Flexible, cost-effective options for startups and SMEs.',
    color: 'from-fuchsia-400 to-pink-600',
    size: 'small'
  },
];

const setupSteps = [
  { step: '01', title: 'Select Your Business Activity', description: 'Choose from manufacturing, warehousing, logistics, trade, oil & gas services, e-commerce fulfillment, or food processing.', icon: Target },
  { step: '02', title: 'Choose License Type', description: 'Based on your activity, select the appropriate license — industrial, trading, or service.', icon: FileText },
  { step: '03', title: 'Reserve Facilities', description: 'Choose your LIU, warehouse, land plot, or office space based on your operational needs.', icon: Building2 },
  { step: '04', title: 'Register & Launch', description: 'Submit documentation, obtain approvals, and receive your license — typically in 5-10 working days.', icon: Rocket },
];

const locationFeatures = [
  { icon: MapPin, label: 'Between Abu Dhabi & Dubai' },
  { icon: Ship, label: 'Direct Khalifa Port Access' },
  { icon: Truck, label: 'Highway Connectivity' },
  { icon: Plane, label: 'Near Abu Dhabi Airport' },
  { icon: Train, label: 'Etihad Rail Proximity' },
  { icon: Scale, label: 'On-Site Customs Clearance' },
];

const costBreakdown = [
  { component: 'License', cost: '12,700 - 20,000', notes: 'Industrial / trading / services' },
  { component: 'Registration', cost: '1,500 - 2,500', notes: 'One-time' },
  { component: 'Flexi-desk', cost: '7,000 - 12,000', notes: 'Annual' },
  { component: 'Visa (per person)', cost: '4,500 - 6,000', notes: 'Emirates ID included' },
  { component: 'Warehouse (if industrial)', cost: '25,000 - 100,000', notes: 'Varies by size' },
];

const comparisonData = [
  { factor: 'Location', kizad: 'Abu Dhabi / Taweelah', jafza: 'Jebel Ali, Dubai', ifza: 'Dubai Silicon Oasis' },
  { factor: 'Best for', kizad: 'Manufacturing, logistics', jafza: 'Logistics, trading', ifza: 'Trading, SMEs' },
  { factor: 'Visa quota', kizad: 'Up to 12', jafza: 'Up to 6', ifza: 'Up to 15' },
  { factor: 'Industrial land', kizad: 'Large plots', jafza: 'Limited', ifza: 'None' },
];

const growthStats = [
  { icon: Factory, value: '500+', label: 'Industrial Companies', color: 'from-blue-400 to-indigo-600' },
  { icon: Globe, value: 'Global', label: 'Trade Network', color: 'from-indigo-400 to-violet-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Industrial Hub', color: 'from-violet-400 to-purple-600' },
  { icon: DollarSign, value: 'Growing', label: 'Industrial Economy', color: 'from-purple-400 to-fuchsia-600' },
  { icon: BarChart3, value: 'Significant', label: 'Regional Impact', color: 'from-fuchsia-400 to-pink-600' },
  { icon: Crown, value: 'Preferred', label: 'For Manufacturing', color: 'from-pink-400 to-rose-600' },
];

const faqs = [
  {
    q: 'What is KIZAD and why is it ideal for business setup in Abu Dhabi?',
    a: 'KIZAD (Khalifa Industrial Zone Abu Dhabi) is a significant industrial free zone situated between Abu Dhabi and Dubai, connected through Khalifa Port. It has superior infrastructure, efficient logistics, and a flexible licensing regime — making it perfect for manufacturing, logistics, trade, and industrial companies seeking strategic opportunities in the UAE and global market.'
  },
  {
    q: 'What are the main benefits of setting up a company in KIZAD Free Zone?',
    a: 'Key benefits include 100% foreign ownership, full profit repatriation, no personal or corporate income tax, flexible leasing options, and direct connectivity to Khalifa Port — one of the region\'s most sophisticated deep-sea ports.'
  },
  {
    q: 'What types of businesses can operate in KIZAD?',
    a: 'KIZAD supports oil & gas engineering, renewable energy and recycling, packaging and logistics, digital trade and e-commerce hubs, heavy manufacturing and fabrication, food processing and cold storage, automotive assembly and distribution, and industrial chemicals and lubricants.'
  },
  {
    q: 'What legal structures are available for company formation in KIZAD?',
    a: 'KIZAD offers Free Zone Establishment (FZE), Free Zone Company (FZCO), Branch of a Foreign Company, and various hybrid structures that combine free zone and onshore benefits for maximum flexibility.'
  },
  {
    q: 'What types of facilities can I lease or purchase in KIZAD?',
    a: 'You can choose from pre-built Light Industrial Units (LIUs), customizable warehouses, large industrial land plots for heavy industry, standard office spaces, and flexi-desks or rental offices.'
  },
  {
    q: 'What documents are required to register a company in KIZAD?',
    a: 'Required documents typically include passport copies of shareholders, proposed trade names, business activity details, proof of address, and a completed application form. We handle the entire documentation process for you.'
  },
  {
    q: 'What types of business licenses does KIZAD offer?',
    a: 'KIZAD offers industrial licenses, trading licenses, and service licenses — each tailored to specific business activities. Your activity selection determines the appropriate license type.'
  },
  {
    q: 'How long does it take to get a business license in KIZAD?',
    a: 'Most commercial and industrial licenses are issued within 5-10 working days. Our team ensures a smooth and speedy process from application to issuance.'
  },
  {
    q: 'Can I apply for visas and open a bank account after registering in KIZAD?',
    a: 'Yes. We assist with visa applications, Emirates ID, medical tests, and bank account opening as part of our comprehensive setup services.'
  },
  {
    q: 'Why should I choose KIZAD over other UAE free zones?',
    a: 'KIZAD is the UAE\'s largest industrial free zone with direct Khalifa Port access, massive land plots for heavy industry, competitive power and utilities, and a hybrid free zone/onshore model that allows both UAE and international trade — ideal for manufacturers, exporters, and logistics firms.'
  },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-blue-400 to-indigo-600' },
  { slug: 'golden-visa', title: 'Golden Visa', description: '10-year UAE residency for investors and talents.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-500' },
  { slug: 'compliance', title: 'Compliance Services', description: 'UBO, ESR, AML, and VAT advisory.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-violet-400 to-purple-600' },
];

// ============ COMPONENT ============
export default function KIZAD() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-indigo-900/75 to-violet-900/40" />
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
                <span className="text-white font-bold">KIZAD Abu Dhabi</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-blue-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Smart Zone for Smart Businesses</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Khalifa Industrial Zone <span className="text-blue-300">Abu Dhabi</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                The UAE's top industrial free zone. Located between Abu Dhabi and Dubai with direct Khalifa Port access — ideal for manufacturing, logistics, and industrial businesses.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in KIZAD Abu Dhabi Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', '5-10 Days Setup', 'Industrial Hub'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-blue-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Industrial Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-indigo-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-violet-300" />
              </motion.div>

              {/* Industrial Dashboard Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Factory size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">KIZAD Industrial</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg">
                          <Ship size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Zone</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Abu Dhabi, UAE</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup Time</div>
                          <div className="text-lg font-black text-blue-600">5-10 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Companies</div>
                          <div className="text-lg font-black text-indigo-600">500+</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Ship size={18} className="text-blue-500" />
                        <Factory size={18} className="text-indigo-500" />
                        <Warehouse size={18} className="text-violet-500" />
                        <Truck size={18} className="text-purple-500" />
                        <Container size={18} className="text-fuchsia-500" />
                        <Anchor size={18} className="text-pink-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(96,165,250,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHAT IS KIZAD — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-blue-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?w=1200&q=80" alt="KIZAD Industrial Port" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                      <Anchor size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Strategic Location</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Khalifa Port Connected</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Building2 size={14} className="text-blue-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What is KIZAD?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                The UAE's Top <span className="gradient-text">Industrial Free Zone</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  KIZAD (Khalifa Industrial Zone Abu Dhabi) is one of the UAE's most strategically located industrial free zones, supporting light and heavy manufacturing, logistics, warehousing, and advanced manufacturing operations. Directly integrated with <span className="font-black text-[#0A0F1F]">Khalifa Port</span>, KIZAD provides unmatched access to global shipping lanes.
                </p>
                <p>
                  What sets KIZAD apart is its <span className="font-black text-[#0A0F1F]">hybrid offering</span> — it combines the advantages of a free zone (100% foreign ownership, zero personal income tax) with the flexibility of onshore business licensing. This enables companies to trade within the UAE and internationally.
                </p>
                <p>
                  It's a top choice for <span className="font-black text-[#0A0F1F]">manufacturers, exporters, and logistics firms</span> looking for cost-effective company formation in Abu Dhabi.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Hybrid Free Zone + Onshore', 'Direct Khalifa Port Access', '100% Foreign Ownership', 'Zero Personal & Corporate Tax', 'Full Profit Repatriation', 'World-Class Infrastructure'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
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

      {/* === 4. WHY KIZAD — Dark Section === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-violet-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Zap size={14} className="text-blue-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Built for Growth, Backed by Innovation</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              What Makes KIZAD the Best Option <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">for Entrepreneurs?</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six powerful reasons industrial businesses choose KIZAD.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIsKizad.map((item, i) => {
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

      {/* === 5. BENEFITS — 4 Card Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-soft mb-6">
              <Award size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Benefits of Setting Up in KIZAD</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Businesses <span className="gradient-text">Choose KIZAD</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Strategic location, world-class infrastructure, and optimal free zone policies.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={28} className="text-white" strokeWidth={2.2} />
                    </div>
                    <p className="text-sm font-black text-[#0A0F1F] leading-tight">{benefit.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-sm text-[#64748B] font-medium mt-8 max-w-2xl mx-auto">
            KIZAD provides more than just space; it provides infrastructure, support and access that businesses need to develop sustainably and gain competitive advantages globally.
          </motion.p>
        </div>
      </section>

      {/* === 6. FACILITY TYPES — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Building2 size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Industrial Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Facilities You Can <span className="gradient-text">Lease in KIZAD</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">From light industrial units to massive land plots for heavy industry.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Factory size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Light Industrial Units (LIUs)</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Pre-built units ready for immediate industrial operations.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-violet-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Warehouse size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Customizable Warehouses</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Bonded and non-bonded warehouses with flexible sizing.</p>
            </motion.div>

            {/* Large card — Land Plots */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 p-6 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Building2 size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Building2 size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2">Land Plots for Heavy Industry</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">Some of the largest industrial land plots in the UAE.</p>
                </div>
              </div>
            </motion.div>

            {/* Small card 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-600" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-fuchsia-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Building size={22} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-base font-black text-[#0A0F1F] mb-1.5">Standard Office Spaces</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">Professional office spaces for administration and management teams.</p>
            </motion.div>

            {/* Small card 4 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-6 group relative p-6 rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Briefcase size={140} className="text-white" />
              </motion.div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Briefcase size={22} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-2">Flexi-Desks & Rental Offices</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">Flexible, cost-effective options for startups and SMEs.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. SETUP PROCESS — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565891741441-64926e441838?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-blue-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Quick Guide to Establishing in KIZAD</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              KIZAD Company Setup <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Simple 4-step process to launch your industrial business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg opacity-10">
                      <span className="text-3xl font-black text-blue-600">{step.step}</span>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-blue-300 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{step.description}</p>
                  </div>
                  {i < setupSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. INDUSTRIES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-soft mb-6">
              <Target size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Driving Growth Across Sectors</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Industries That Are <span className="gradient-text">Successful in KIZAD</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Unique industrial infrastructure and location make KIZAD ideal for heavy and light sectors.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                  <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl transition-all duration-300 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform`}>
                      <Icon size={22} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black text-[#0A0F1F] leading-tight">{industry.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. LOCATION & ACCESS — Dark === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-violet-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <MapPin size={14} className="text-blue-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Access Made Easy</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                KIZAD Location, <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">Maps & Accessibility</span>
              </h2>

              <div className="space-y-5 text-base text-white/80 font-medium leading-relaxed">
                <p>
                  KIZAD is favorably located <span className="font-black text-white">between Abu Dhabi and Dubai</span> and provides convenient access to other major cities of the UAE. Located directly south of Khalifa City with direct connected highways and on-site customs clearance.
                </p>
                <p>
                  KIZAD has a distinct logistical advantage with <span className="font-black text-white">Khalifa Port and Etihad Rail close by</span>, and Abu Dhabi International Airport extremely close by.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {locationFeatures.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs font-bold text-white">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80" alt="KIZAD Location" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Strategic Location</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Between Abu Dhabi & Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 10. COST BREAKDOWN TABLE === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <DollarSign size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              KIZAD <span className="gradient-text">Cost Breakdown 2026</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Full transparency — no hidden fees.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-border shadow-xl">
            <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-700 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-xs font-black text-white uppercase tracking-widest">
                <div className="col-span-4">Component</div>
                <div className="col-span-4">Cost (AED)</div>
                <div className="col-span-4">Notes</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {costBreakdown.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-blue-50/50 transition-colors">
                  <div className="col-span-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600" />
                    <span className="text-sm font-black text-[#0A0F1F]">{item.component}</span>
                  </div>
                  <div className="col-span-4">
                    <span className="text-sm font-black text-blue-600">{item.cost}</span>
                  </div>
                  <div className="col-span-4">
                    <span className="text-xs font-medium text-[#64748B]">{item.notes}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 11. COMPARISON TABLE === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-soft mb-6">
              <BarChart3 size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Compare Zones</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              KIZAD vs <span className="gradient-text">Other UAE Zones</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">See why KIZAD wins for industrial and manufacturing businesses.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-white">
            <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-700 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-xs font-black text-white uppercase tracking-widest">
                <div className="col-span-3">Factor</div>
                <div className="col-span-3 flex items-center gap-2">
                  <Crown size={12} className="text-amber-300" />
                  KIZAD
                </div>
                <div className="col-span-3">JAFZA</div>
                <div className="col-span-3">IFZA</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {comparisonData.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-blue-50/50 transition-colors">
                  <div className="col-span-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600" />
                    <span className="text-sm font-black text-[#0A0F1F]">{item.factor}</span>
                  </div>
                  <div className="col-span-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200">
                      <CheckCircle2 size={12} className="text-blue-600" strokeWidth={3} />
                      <span className="text-xs font-black text-blue-700">{item.kizad}</span>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <span className="text-xs font-bold text-[#64748B]">{item.jafza}</span>
                  </div>
                  <div className="col-span-3">
                    <span className="text-xs font-bold text-[#64748B]">{item.ifza}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-700 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center flex-shrink-0">
                <Crown size={22} className="text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-lg font-black mb-2">KIZAD is the UAE's Largest Industrial Free Zone</h3>
                <p className="text-sm text-white/90 font-medium leading-relaxed">
                  If your business needs warehouse, manufacturing, or large-scale storage, it almost always wins on land and power costs. Ask us for a KIZAD industrial quote.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 12. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Abu Dhabi's Leading <span className="gradient-text">Industrial Hub</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Rapidly growing ecosystem for industrial, manufacturing, and logistics businesses.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(96,165,250,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-blue-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about KIZAD Abu Dhabi. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Factory size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our KIZAD specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about KIZAD Abu Dhabi Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(96,165,250,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-blue-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-blue-400 group-open:to-indigo-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-blue-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
            <p className="text-base text-[#475569] font-medium">Services that pair well with your KIZAD setup.</p>
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
                      <ArrowRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-indigo-900/70 to-violet-900/50" />
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
                    Ready to Launch in <span className="text-blue-300">KIZAD Abu Dhabi?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the entire setup process — from license to launch.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for KIZAD setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '5-10 Days Setup', 'Industrial Hub'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-blue-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss KIZAD setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-blue-600 hover:text-blue-700 transition">
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