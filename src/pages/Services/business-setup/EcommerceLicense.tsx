// File: src/pages/services/business-setup/EcommerceLicense.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
   Award, FileText, DollarSign, Zap, Target, Crown, Store,
  UserCheck,  MapPin, CreditCard, 
  Rocket,  Wallet, IdCard,
   Home, Globe2, ShieldCheck,Percent,ShoppingCart,
  ChevronLeft, ChevronRight, FileSignature,  Factory, 
  Laptop, Code,  Palette, Camera,
  Truck, Building, 
  FileCheck, ScrollText,  Boxes,Package,
  ShoppingBag, 
} from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Clock, value: '1-5', label: 'Days Setup', color: 'from-fuchsia-400 to-pink-600' },
  { icon: DollarSign, value: 'AED 7,500', label: 'Starting Cost', color: 'from-pink-400 to-rose-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-rose-400 to-red-600' },
  { icon: Percent, value: '0%', label: 'Corporate Tax', color: 'from-red-400 to-orange-600' },
];

const whoNeedsIt = [
  { icon: Package, label: 'Dropshipping Store Owners', desc: 'Sell without inventory management', color: 'from-fuchsia-400 to-pink-600' },
  { icon: ShoppingBag, label: 'Amazon FBA & Noon Sellers', desc: 'Sell on marketplaces legally', color: 'from-pink-400 to-rose-600' },
  { icon: UserCheck, label: 'Freelancers with Services', desc: 'Package and sell services online', color: 'from-rose-400 to-red-600' },
  { icon: Camera, label: 'Social Media Influencers', desc: 'Sell products via social platforms', color: 'from-red-400 to-orange-600' },
  { icon: Briefcase, label: 'Digital Consultants & Coaches', desc: 'Sell consulting or coaching programs', color: 'from-orange-400 to-amber-600' },
  { icon: Boxes, label: 'Subscription Box Services', desc: 'Recurring product delivery models', color: 'from-amber-400 to-yellow-600' },
  { icon: Code, label: 'Digital Products & Software', desc: 'Sell courses, downloads, SaaS', color: 'from-yellow-400 to-lime-600' },
];

const benefits = [
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'Keep full control of your business with no local sponsor required. Full authority over decisions and 100% profit retention.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    icon: DollarSign,
    title: '0% Income & Corporate Tax',
    description: 'E-commerce businesses in eligible Free Zones enjoy 0% personal income tax and 0% corporate tax. Reinvest earnings in growth.',
    color: 'from-pink-400 to-rose-600'
  },
  {
    icon: Zap,
    title: 'Quick Establishment',
    description: 'Licensed in 1-5 days depending on jurisdiction. We handle activity selection, documents, name reservation, and approvals.',
    color: 'from-rose-400 to-red-600'
  },
  {
    icon: Globe2,
    title: 'Access to UAE & World Markets',
    description: 'Ship across UAE and expand to Middle East, Africa, Europe, and Asia. Leverage Dubai\'s ports and free trade jurisdiction.',
    color: 'from-red-400 to-orange-600'
  },
  {
    icon: Wallet,
    title: 'Affordable Setup & Renewals',
    description: 'One of the most affordable business license options — ideal for freelancers, solopreneurs, and small businesses.',
    color: 'from-orange-400 to-amber-600'
  },
  
  {
    icon: CreditCard,
    title: 'Online Payment Gateway Access',
    description: 'Integrate with PayTabs, Telr, Stripe, and Network International — accept cards, digital wallets, and bank transfers.',
    color: 'from-yellow-400 to-lime-600'
  },
  {
    icon: Truck,
    title: 'Logistics Integration',
    description: 'Partner with Aramex, Fetchr, DHL, Emirates Post for shipping, tracking, warehousing, and fulfillment.',
    color: 'from-lime-400 to-emerald-600'
  },
  {
    icon: Building2,
    title: 'Digital Office & Flexi-Desk Options',
    description: 'No requirement for physical location or warehouse. Operate from flexi-desks and shared workspaces.',
    color: 'from-emerald-400 to-teal-600'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Define Your Activities',
    description: 'Choose the specific e-commerce activity (online trading, web portal, online services).',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    step: '02',
    icon: MapPin,
    title: 'Choose Jurisdiction',
    description: 'Decide between Mainland and Free Zone based on your target market and budget.',
    color: 'from-pink-400 to-rose-600'
  },
  {
    step: '03',
    icon: FileSignature,
    title: 'Register Trade Name',
    description: 'Choose a unique, brandable name for your online business.',
    color: 'from-rose-400 to-red-600'
  },
  {
    step: '04',
    icon: FileCheck,
    title: 'Submit Application',
    description: 'Prepare passport copies, visa, business plan (if needed), and photos.',
    color: 'from-red-400 to-orange-600'
  },
  {
    step: '05',
    icon: Building2,
    title: 'Lease Digital Office',
    description: 'Required for license issuance. Flexi-desk or shared workspace.',
    color: 'from-orange-400 to-amber-600'
  },
  {
    step: '06',
    icon: ScrollText,
    title: 'Get Your License',
    description: 'Issued in 1-5 days depending on jurisdiction.',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    step: '09',
    icon: CreditCard,
    title: 'Connect Payment Gateways',
    description: 'Stripe, Telr, PayTabs, or your chosen processor.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    step: '10',
    icon: Rocket,
    title: 'Launch Your Store',
    description: 'Start selling! Full platform integration support available.',
    color: 'from-teal-400 to-cyan-600'
  },
];

const jurisdictions = [
  {
    id: 'freezone',
    icon: Factory,
    title: 'Free Zone',
    tagline: 'Ideal for International & B2B',
    description: 'Offers 100% ownership, no tax, lower cost. Ideal for selling internationally or B2B. Popular Free Zones: IFZA, SHAMS, CommerCity, SPC.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
    color: 'from-fuchsia-500 to-pink-700',
    features: ['100% Foreign Ownership', 'No Corporate Tax', 'Lower Setup Cost', 'IFZA · SHAMS · CommerCity · SPC'],
    bestFor: 'International Sellers'
  },
  {
    id: 'mainland',
    icon: Building,
    title: 'Mainland',
    tagline: 'Required for Local B2C Sales',
    description: 'Required if you want to sell directly to customers inside the UAE (B2C). You can now own 100% of your business in most sectors with no local partner.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    color: 'from-pink-500 to-rose-700',
    features: ['Direct Local B2C Sales', '100% Ownership (Most Sectors)', 'UAE Market Access', 'Government Contracts'],
    bestFor: 'Local UAE Sellers'
  },
];

const documents = [
  { icon: IdCard, label: 'Visa or Entry Stamp', desc: 'If applicable' },
  { icon: Camera, label: 'Passport-Size Photos', desc: 'Recent, white background' },
  { icon: FileSignature, label: 'Three Proposed Trade Names', desc: 'Unique & brandable' },
  { icon: Home, label: 'Office Lease Agreement', desc: 'For some Free Zones or Mainland' },
  { icon: FileCheck, label: 'NOC Certificate', desc: 'For UAE residents with existing visas' },
];

const platforms = [
  { name: 'Amazon.ae', icon: ShoppingBag, color: 'from-fuchsia-400 to-pink-600' },
  { name: 'Noon.com', icon: Store, color: 'from-pink-400 to-rose-600' },
  { name: 'Shopify', icon: ShoppingCart, color: 'from-rose-400 to-red-600' },
  { name: 'WooCommerce', icon: Laptop, color: 'from-red-400 to-orange-600' },
  { name: 'Wix Store', icon: Globe, color: 'from-orange-400 to-amber-600' },
  { name: 'AliExpress Dropship', icon: Package, color: 'from-amber-400 to-yellow-600' },
];

const paymentGateways = [
  { name: 'Stripe', icon: CreditCard, color: 'from-fuchsia-400 to-pink-600' },
  { name: 'PayTabs', icon: CreditCard, color: 'from-pink-400 to-rose-600' },
  { name: 'Telr', icon: CreditCard, color: 'from-rose-400 to-red-600' },
  { name: 'Network International', icon: CreditCard, color: 'from-red-400 to-orange-600' },
];

const logisticsPartners = [
  { name: 'Aramex', icon: Truck, color: 'from-fuchsia-400 to-pink-600' },
  { name: 'Fetchr', icon: Truck, color: 'from-pink-400 to-rose-600' },
  { name: 'DHL', icon: Truck, color: 'from-rose-400 to-red-600' },
  { name: 'Emirates Post', icon: Truck, color: 'from-red-400 to-orange-600' },
];

const whyChooseUs = [
  { icon: UserCheck, label: 'Business Launch Specialists', desc: 'Trained personnel guide you A to Z' },
  { icon: Rocket, label: 'Fast License Approvals', desc: '2-5 days with our proven process' },
  { icon: ShieldCheck, label: 'Full Government Coordination', desc: 'Accurate applications, smooth approvals' },
  { icon: CreditCard, label: 'Secure Payment Gateways', desc: 'Set up on day one' },
  { icon: Laptop, label: 'Platform Training', desc: 'Shopify, Amazon, Noon guidance' },
  { icon: UserCheck, label: 'Dedicated Account Manager', desc: 'Personal relationship manager' },
  { icon: Palette, label: 'Branding, CRM & Website', desc: 'Complete digital setup' },
];

const growthStats = [
  { icon: Building2, value: '10,000+', label: 'Companies Formed', color: 'from-fuchsia-400 to-pink-600' },
  { icon: Globe, value: 'Global', label: 'Seller Reach', color: 'from-pink-400 to-rose-600' },
  { icon: TrendingUp, value: 'Leading', label: 'E-commerce Hub', color: 'from-rose-400 to-red-600' },
  { icon: DollarSign, value: 'AED 7.5K', label: 'Starting Cost', color: 'from-red-400 to-orange-600' },
  { icon: Zap, value: '1-5', label: 'Days Setup', color: 'from-orange-400 to-amber-600' },
  { icon: Crown, value: 'Preferred', label: 'Seller Partner', color: 'from-amber-400 to-yellow-600' },
];

const faqs = [
  {
    q: 'Can I run my e-commerce business from outside of Dubai?',
    a: 'Yes. Many Free Zones allow you to operate remotely. If you are a UAE resident and want a bank account, you may need to visit Dubai on a temporary basis for KYC.'
  },
  {
    q: 'Is a warehouse needed for the e-commerce license?',
    a: 'No. Most e-commerce licenses only require a flexi-desk or shared workspace. Warehouses are optional and can be added later if you need physical storage.'
  },
  {
    q: 'Can I sell products and services using the same license?',
    a: 'Yes. An e-commerce license covers both physical products and digital services — including online trading, web portals, and downloadable products.'
  },
  {
    q: 'What payment gateways can I use?',
    a: 'You can integrate with Stripe, PayTabs, Telr, Network International, and other regional and international processors. We assist with setup and integration.'
  },
  {
    q: 'Do I need a banking account in the UAE?',
    a: 'It is highly recommended. A UAE corporate bank account allows you to accept local payments, integrate with payment gateways, and manage finances efficiently.'
  },
  {
    q: 'Can I employ staff with this licence?',
    a: 'Yes. An e-commerce license allows you to sponsor employment visas for staff and dependent visas for family members, based on your visa quota.'
  },
  {
    q: 'Will I get a visa with this licence?',
    a: 'Yes. You can apply for an investor visa (as the owner) and employee visas for your team. We handle the entire visa process including medicals and Emirates ID.'
  },
  {
    q: 'Is my business taxed in Dubai?',
    a: 'E-commerce businesses in eligible Free Zones enjoy 0% personal income tax and 0% corporate tax. We provide full tax advisory and VAT registration guidance.'
  },
  {
    q: 'How long does it take to obtain the licence?',
    a: 'Typically 1-5 working days depending on your jurisdiction and how quickly documents are provided. We fast-track the entire process.'
  },
  {
    q: 'Can I upgrade or expand the licence at a later date?',
    a: 'Yes. You can add new activities, upgrade your office space, increase visa quota, or expand to multiple jurisdictions as your business grows.'
  },
];

const relatedServices = [
  { slug: 'company-registration', title: 'Company Registration in Dubai', description: 'Fast & affordable registration from AED 5,750.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-fuchsia-400 to-pink-600' },
  { slug: 'residence-visa', title: 'UAE Residence Visa', description: '2-10 year residency for entrepreneurs.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-pink-400 to-rose-600' },
  { slug: 'free-zone-company-setup', title: 'Free Zone Company Setup', description: '100% ownership in tax-free zones.', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80', gradient: 'from-rose-400 to-red-600' },
];

// ============ COMPONENT ============
export default function EcommerceLicense() {
  const [activeJurisdiction, setActiveJurisdiction] = useState(0);

  const nextJurisdiction = () => setActiveJurisdiction((prev) => (prev + 1) % jurisdictions.length);
  const prevJurisdiction = () => setActiveJurisdiction((prev) => (prev - 1 + jurisdictions.length) % jurisdictions.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-fuchsia-950/80 to-pink-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <ShoppingCart size={140} className="text-white" />
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
                <span className="text-white font-bold">E-commerce License</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-fuchsia-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Online Business Setup</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                E-commerce License <span className="text-fuchsia-300">in Dubai</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Start your online business in Dubai with 100% ownership, 0% tax, and full access to UAE and global markets. Launch in as little as 1-5 days.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-fuchsia-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in E-commerce License in Dubai.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['AED 7,500 Start', '1-5 Days Setup', '100% Ownership', '0% Tax'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-fuchsia-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_20px_rgba(232,121,249,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-pink-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-rose-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-fuchsia-500 to-pink-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShoppingCart size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">E-com Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center shadow-lg">
                          <Store size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Ready to Sell</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 border border-fuchsia-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup</div>
                          <div className="text-lg font-black text-fuchsia-600">1-5 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">From</div>
                          <div className="text-lg font-black text-pink-600">AED 7.5K</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <ShoppingBag size={18} className="text-fuchsia-500" />
                        <ShoppingCart size={18} className="text-pink-500" />
                        <CreditCard size={18} className="text-rose-500" />
                        <Truck size={18} className="text-red-500" />
                        <Globe size={18} className="text-orange-500" />
                        <Rocket size={18} className="text-amber-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-fuchsia-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(232,121,249,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHAT IS E-COM LICENSE — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-fuchsia-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" alt="E-commerce" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center">
                      <ShoppingCart size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Online Store</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Legalize Your Business</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-fuchsia-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Start E-Commerce in UAE</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is an <span className="gradient-text">E-commerce License</span> in Dubai?
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  A business license for e-commerce is a <span className="font-black text-[#0A0F1F]">legal license issued by Dubai's Department of Economic Development (DED)</span>, or applicable Free Zone authorities, that allows you to set up and run a business online.
                </p>
                <p>
                  It allows businesses to <span className="font-black text-[#0A0F1F]">advertise, sell, and deliver products or services online</span>, via mobile apps, or marketplaces. The E-Commerce License permits you to trade locally throughout the UAE or globally, depending on your jurisdiction.
                </p>
                <p>
                  Best Free Zone options for e-commerce licenses include <span className="font-black text-[#0A0F1F]">IFZA, Shams, Dubai CommerCity, and RAKEZ</span> — offering low-cost startup, 100% foreign ownership, and minimal restrictions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['100% Ownership', '0% Tax', '1-5 Days Setup', 'UAE + Global Markets', 'Payment Gateways', 'Logistics Partners'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center">
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

      {/* === 4. WHO NEEDS IT — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-fuchsia-950 to-pink-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-pink-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <UserCheck size={14} className="text-fuchsia-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Who Needs This License?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Anyone Selling <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent">Online in Dubai</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Without a valid license, promoting or transacting online in the UAE is illegal — heavy fines or bans apply.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whoNeedsIt.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-white mb-2 leading-tight">{item.label}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="group relative">
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-fuchsia-400 to-pink-600 opacity-40 blur-2xl" />
              <div className="relative p-5 rounded-3xl bg-gradient-to-br from-fuchsia-500 via-pink-600 to-rose-700 shadow-xl h-full flex flex-col justify-center text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg mb-3">
                    <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-sm font-black text-white mb-1 leading-tight">Not Sure If You Need One?</h3>
                  <p className="text-xs text-white/90 font-medium mb-3 leading-tight">Talk to our experts</p>
                  <a
                    href={getWhatsAppLink("Hi! I need to know if I need an E-commerce License in Dubai.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-fuchsia-700 font-bold text-[10px] shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle size={11} />
                    Ask Expert
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 5. BENEFITS — Light Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-fuchsia-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-fuchsia-200 shadow-soft mb-6">
              <Award size={14} className="text-fuchsia-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-fuchsia-700">Legalize Your Online Store</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of an <span className="gradient-text">E-commerce License</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Nine powerful advantages for launching your online venture in Dubai.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* === 6. PROCESS — Dark Vertical Timeline === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-fuchsia-950 to-pink-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-pink-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-fuchsia-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">We Simplify Your Start</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              How to Get an <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent">E-commerce License</span>
            </h2>
            <p className="text-base text-white/70 font-medium">10 simple steps from activity to launch.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center shadow-lg opacity-15">
                      <span className="text-lg font-black text-fuchsia-600">{step.step}</span>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-[10px] font-black text-fuchsia-300 uppercase tracking-widest mb-1">STEP {step.step}</div>
                    <h3 className="text-sm font-black text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. JURISDICTIONS — Swipe Carousel === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-fuchsia-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-fuchsia-200 shadow-soft mb-6">
              <MapPin size={14} className="text-fuchsia-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-fuchsia-700">Compare, Choose, Start Smart</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Mainland or <span className="gradient-text">Free Zone?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Swipe to compare jurisdictions and pick what fits your business.</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-border shadow-2xl h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJurisdiction}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={jurisdictions[activeJurisdiction].image}
                      alt={jurisdictions[activeJurisdiction].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${jurisdictions[activeJurisdiction].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${jurisdictions[activeJurisdiction].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = jurisdictions[activeJurisdiction].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Option {String(activeJurisdiction + 1).padStart(2, '0')} / {String(jurisdictions.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-fuchsia-400/90 backdrop-blur-xl border border-fuchsia-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {jurisdictions[activeJurisdiction].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-fuchsia-300 uppercase tracking-widest mb-2">{jurisdictions[activeJurisdiction].tagline}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {jurisdictions[activeJurisdiction].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mb-6 drop-shadow">
                        {jurisdictions[activeJurisdiction].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {jurisdictions[activeJurisdiction].features.map((feature, fi) => (
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
                onClick={prevJurisdiction}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextJurisdiction}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {jurisdictions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveJurisdiction(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeJurisdiction ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {jurisdictions.map((j, i) => {
                const Icon = j.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveJurisdiction(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeJurisdiction
                        ? 'ring-2 ring-fuchsia-400 shadow-lg shadow-fuchsia-500/30 scale-105'
                        : 'ring-1 ring-slate-200 hover:ring-slate-300'
                    }`}
                  >
                    <div className="relative h-24">
                      <img src={j.image} alt={j.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${j.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <Icon size={22} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-wider">
                          {j.title}
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

      {/* === 8. DOCUMENTS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileText size={14} className="text-fuchsia-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What You'll Need</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Required <span className="gradient-text">Documents</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We handle the complete paperwork and approvals on your behalf.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-fuchsia-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-400 to-pink-600" />
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
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

      {/* === 9. PLATFORMS + INTEGRATIONS — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-fuchsia-950 to-pink-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-pink-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <ShoppingBag size={14} className="text-fuchsia-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Sell Anywhere</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Sell on <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent">Any Platform</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Register, sell, and market on major marketplaces and social platforms.</p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-14">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-black text-white leading-tight">{platform.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight mb-2">
              Payment Gateways & Logistics Partners
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentGateways.map((gateway, i) => {
              const Icon = gateway.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gateway.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:rotate-12 transition-transform`}>
                      <Icon size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black text-white leading-tight">{gateway.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {logisticsPartners.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:rotate-12 transition-transform`}>
                      <Icon size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black text-white leading-tight">{partner.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-fuchsia-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Business Launch <span className="gradient-text">Specialists</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Eight reasons entrepreneurs trust us for their e-commerce setup.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-fuchsia-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-400 to-pink-600" />
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
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

      {/* === 11. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-fuchsia-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-fuchsia-200 shadow-soft mb-6">
              <TrendingUp size={14} className="text-fuchsia-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-fuchsia-700">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Launch Your <span className="gradient-text">Dream Business</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your online business in expert hands.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(232,121,249,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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

      {/* === 12. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-fuchsia-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-fuchsia-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about E-commerce License in Dubai. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-fuchsia-500 via-pink-600 to-rose-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <ShoppingCart size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our e-commerce specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about E-commerce License in Dubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-fuchsia-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-fuchsia-200 hover:shadow-[0_20px_60px_rgba(232,121,249,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-fuchsia-400 to-pink-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-400 to-pink-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-fuchsia-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-fuchsia-50 border border-fuchsia-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-fuchsia-400 group-open:to-pink-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-fuchsia-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 13. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your E-commerce License.</p>
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
                      <ArrowRight size={14} className="text-fuchsia-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-fuchsia-950/70 to-pink-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Legalize Your Online Store</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Launch Your <span className="text-fuchsia-300">E-commerce Business?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Own your business in Dubai with ease. From licensing and visa to payment gateways and bank accounts — we handle everything.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for E-commerce License.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-fuchsia-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'AED 7,500 Start', '1-5 Days Setup'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-fuchsia-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss E-commerce License.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-fuchsia-600 hover:text-fuchsia-700 transition">
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