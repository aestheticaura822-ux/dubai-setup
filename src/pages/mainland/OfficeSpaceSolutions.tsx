import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award,  DollarSign, Zap, Target, Crown,
  Factory,
  MapPin, Building, Layers,
  Shield, Star,
  Palette, 
  Landmark, 
  RefreshCw, 
  ClipboardCheck,
  Network, UsersRound, FileSignature, 
  ChevronLeft, ChevronRight, 
 
  Laptop, DoorOpen,
  Armchair, 
  LayoutGrid,  MapPinned,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Building2, value: '500+', label: 'Office Options', color: 'from-cyan-400 to-blue-600' },
  { icon: MapPin, value: '8+', label: 'Prime Locations', color: 'from-blue-400 to-indigo-600' },
  { icon: Users, value: '10,000+', label: 'Businesses Served', color: 'from-indigo-400 to-violet-600' },
  { icon: Clock, value: '48hrs', label: 'Avg Setup Time', color: 'from-violet-400 to-purple-600' },
];

const officeTypes = [
  {
    id: 'flexi',
    icon: Laptop,
    title: 'Flexi Desk (Hot Desk)',
    short: 'Affordable Shared Workspace',
    description: 'A flexi desk is the most affordable office option in Dubai, ideal for startups, freelancers, and solo entrepreneurs. It provides a shared workstation, trade license, business address, and access to reception, common areas, and meeting rooms — without the high costs of a full office.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    color: 'from-cyan-500 to-blue-700',
    features: ['Shared Workstation', 'Trade License Support', 'Business Address', 'Meeting Room Access', 'Cost-Effective'],
    price: 'Lowest Cost'
  },
  {
    id: 'dedicated',
    icon: Armchair,
    title: 'Dedicated Desk',
    short: 'Permanent Private Workspace',
    description: 'A dedicated desk offers a permanent, private workspace in a shared office — ideal for those needing consistency and privacy. Unlike hot desks, it\'s your personal setup to organize as you like. Includes mail handling, utilities, and office amenities.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
    color: 'from-blue-500 to-indigo-700',
    features: ['Permanent Desk', 'Mail Handling', 'Utilities Included', 'Private Setup', 'Office Amenities'],
    price: 'Great Value'
  },
  {
    id: 'private',
    icon: DoorOpen,
    title: 'Private Offices',
    short: 'Enclosed Fully Furnished',
    description: 'A private office offers SMEs and growing businesses a fully enclosed, furnished space with full privacy and control. Ideal for branding, client meetings, and professional operations with an upscale address in premium business towers.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
    color: 'from-indigo-500 to-violet-700',
    features: ['Fully Enclosed', 'Fully Furnished', 'Complete Privacy', 'Branding Freedom', 'Upscale Address'],
    price: 'Most Popular'
  },
  {
    id: 'serviced',
    icon: Crown,
    title: 'Serviced Offices',
    short: 'Fully Equipped Ready-to-Use',
    description: 'Serviced offices are fully equipped, ready-to-use workspaces that cover all your business needs — from reception and high-speed internet to meeting rooms, cleaning, and utilities. Save time and setup costs while focusing on growth.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
    color: 'from-violet-500 to-purple-700',
    features: ['Reception Services', 'High-Speed Internet', 'Meeting Rooms', 'Cleaning & Utilities', 'Plug & Play'],
    price: 'Premium'
  },
  {
    id: 'coworking',
    icon: UsersRound,
    title: 'Coworking Areas',
    short: 'Collaborative Modern Space',
    description: 'Coworking areas are vibrant, modern spaces designed for collaboration, networking, and innovation. Ideal for freelancers, startups, and digital entrepreneurs, offering flexible memberships, quality infrastructure, and a creative environment.',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&q=80',
    color: 'from-purple-500 to-fuchsia-700',
    features: ['Flexible Memberships', 'Networking Access', 'Creative Environment', 'Modern Infrastructure', 'Community Events'],
    price: 'Flexible'
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Leased Offices',
    short: 'Long-Term Prime Location Space',
    description: 'Commercially leased offices are ideal for corporates and multinationals seeking long-term space in prime areas like Business Bay, DIFC, Sheikh Zayed Road, and JLT. Fully customizable with branding and layout options.',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80',
    color: 'from-fuchsia-500 to-pink-700',
    features: ['Long-Term Lease', 'Full Customization', 'Prime Locations', 'Branding Freedom', 'Regional HQ Ready'],
    price: 'Corporate'
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Legal Compliance Made Simple',
    description: 'Every business license in Dubai requires an official registered address or Ejari. The right office keeps your company fully compliant.',
    color: 'from-cyan-400 to-blue-600'
  },
  {
    icon: Award,
    title: 'Professional Brand Image & Credibility',
    description: 'A visible office in a prestigious location builds client trust and strengthens your company image in competitive markets.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Network,
    title: 'Fantastic Networking Opportunity',
    description: 'Shared offices, coworking spaces, and business centers naturally connect you to like-minded entrepreneurs and partners.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    icon: TrendingUp,
    title: 'Scalability for Growth',
    description: 'Start with a flexi desk, then easily upgrade to private or commercial offices as you grow your business.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Operational Efficiency & Cost Savings',
    description: 'Serviced offices give you ready-to-use infrastructure, reception, and utilities — saving time and costs.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    icon: MapPin,
    title: 'Strategic Business Locations',
    description: 'Business Bay, Downtown, Dubai Marina, JLT, and Free Zones — be in the center of the UAE\'s booming commercial sectors.',
    color: 'from-fuchsia-400 to-pink-600'
  },
];

const simplifySteps = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Manage All Documentation & Compliance',
    description: 'We handle the entire process — Ejari registration, tenancy contracts, authority approvals, and all documentation linked to your license.',
    color: 'from-cyan-400 to-blue-600'
  },
  {
    step: '02',
    icon: Layers,
    title: 'Provide Flexible & Scalable Office Solutions',
    description: 'Start with a flexi desk or dedicated desk, then move to private office space — seamless upgrading as your company grows.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    step: '03',
    icon: Target,
    title: 'Carry Out In-Depth Business Needs Assessment',
    description: 'We invest time understanding your company\'s activities, size, and future intentions before recommending the best office type.',
    color: 'from-indigo-400 to-violet-600'
  },
];

const locations = [
  {
    id: 'business-bay',
    name: 'Business Bay',
    tagline: 'Dubai\'s Central Business District',
    description: 'Known for ultra-modern office towers and world-class amenities. Close to DIFC and major financial institutions. Suits everyone from startups to multinationals.',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
    color: 'from-cyan-500 to-blue-700',
    icon: Building2,
    features: ['Central Hub', 'Iconic Towers', 'Near DIFC', 'Premium Amenities']
  },
  {
    id: 'downtown',
    name: 'Downtown Dubai',
    tagline: 'Exclusive Corporate Venues',
    description: 'Prestigious, high-end office spaces with iconic views near Burj Khalifa and Dubai Mall. The go-to address for businesses seeking credibility, luxury, and high-profile presence.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    color: 'from-blue-500 to-indigo-700',
    icon: Crown,
    features: ['Burj Khalifa Views', 'Luxury Offices', 'High Profile', 'Prime Address']
  },
  {
    id: 'jlt',
    name: 'Jumeirah Lake Towers (JLT)',
    tagline: 'Affordable Offices & Metro Access',
    description: 'Perfect mix of affordability and convenience — ideal for startups, SMEs, freelancers, and contractors. Strong road and metro links with a vibrant business community.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
    color: 'from-indigo-500 to-violet-700',
    icon: TrendingUp,
    features: ['Affordable', 'Metro Connected', 'SME Focused', 'Vibrant Community']
  },
  {
    id: 'sheikh-zayed',
    name: 'Sheikh Zayed Road',
    tagline: 'Iconic Business Lane',
    description: 'One of Dubai\'s most prestigious business districts, known for iconic skyscrapers and prime location. Offers high visibility, easy accessibility, and strong credibility.',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80',
    color: 'from-violet-500 to-purple-700',
    icon: Building,
    features: ['Iconic Address', 'High Visibility', 'Global Brands', 'Prime Location']
  },
  {
    id: 'marina',
    name: 'Dubai Marina',
    tagline: 'Waterfront Creative Hub',
    description: 'Stylish office spaces in a vibrant waterfront setting. Popular with creative industries, tech startups, and service providers — with top-tier retail, dining, and residential nearby.',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80',
    color: 'from-purple-500 to-fuchsia-700',
    icon: Palette,
    features: ['Waterfront', 'Creative Hub', 'Tech Startups', 'Lifestyle Amenities']
  },
  {
    id: 'free-zones',
    name: 'Dubai Free Zones',
    tagline: 'Office Facilities Linked to Licenses',
    description: 'DMCC, IFZA, DAFZA, RAKEZ, Meydan, and Shams offer cost-effective office spaces with trade licenses, 100% foreign ownership, tax benefits, and industry ecosystems.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
    color: 'from-fuchsia-500 to-pink-700',
    icon: Factory,
    features: ['Trade License Included', '100% Ownership', 'Tax Benefits', 'Industry Ecosystems']
  },
  {
    id: 'abu-dhabi-sharjah',
    name: 'Abu Dhabi & Sharjah',
    tagline: 'Affordable Regional Operations',
    description: 'Budget-friendly office space with solid infrastructure and strategic locations near trade hubs — ideal for expanding or setting up branch offices outside Dubai.',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
    color: 'from-pink-500 to-rose-700',
    icon: Landmark,
    features: ['Budget Friendly', 'Trade Hub Access', 'Branch Setup', 'Regional Ops']
  },
];

const whyChooseUs = [
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees' },
  { icon: Users, label: 'Direct Stakeholder Access', desc: 'Free zones & business centres' },
  { icon: FileSignature, label: 'Contract Drafting', desc: 'All legal documents' },
  { icon: ClipboardCheck, label: 'Ejari Registration', desc: 'Full compliance' },
  { icon: RefreshCw, label: 'Renewals & Approvals', desc: 'Ongoing support' },
  { icon: TrendingUp, label: 'Scalable Packages', desc: 'Start small, grow big' },
];

const faqs = [
  {
    q: 'What type of office space is offered in Dubai and the UAE?',
    a: 'Depending on your business size, budget, and license requirements, you can select from flexi desks, dedicated desks, private offices, serviced offices, coworking spaces, or long-term commercial leased office space.'
  },
  {
    q: 'Do I need an office to obtain a business license in Dubai?',
    a: 'Yes. Every business license in Dubai requires an official registered address or Ejari. Free zone licenses have the option of flexi-desk packages that provide a business address without a physical office.'
  },
  {
    q: 'What is the difference between a flexi desk and a dedicated desk?',
    a: 'A flexi desk (hot desk) is a shared workstation you use as available, best for freelancers. A dedicated desk is your own permanent desk in a shared office, offering consistency and privacy.'
  },
  {
    q: 'Can I upgrade my office space as my company grows?',
    a: 'Absolutely. We offer scalable solutions — start with a flexi desk or coworking membership, then seamlessly upgrade to a private office or commercial space as your business grows.'
  },
  {
    q: 'Are utilities and internet included in office packages?',
    a: 'Yes. Most of our serviced office and coworking packages include utilities, high-speed internet, reception, cleaning, and access to meeting rooms — all in one monthly fee.'
  },
  {
    q: 'What locations are best suited for renting an office in Dubai?',
    a: 'It depends on your business type. Business Bay and DIFC for corporate, Downtown for prestige, JLT for affordability, Dubai Marina for creative/tech, and Free Zones for trade and international businesses.'
  },
  {
    q: 'How much does office space in Dubai cost?',
    a: 'Costs range from affordable flexi desks (starting around AED 5,000/year) to premium private offices and commercial spaces. We match you with options that fit your budget.'
  },
  {
    q: 'Can I share offices with another company?',
    a: 'Yes. Coworking spaces and shared offices allow you to share common areas with other businesses, while keeping your own dedicated workspace and address.'
  },
  {
    q: 'What is the usual time taken to set up an office space in Dubai?',
    a: 'Typically 2-5 working days for flexi desks and serviced offices. Commercial leased offices and custom fit-outs may take longer depending on requirements.'
  },
  {
    q: 'What are the benefits of using Setup Zone Dubai for my office space needs?',
    a: 'We offer transparent pricing, direct stakeholder access, end-to-end contract drafting, Ejari registration, ongoing renewals and authority approvals, and scalable packages tailored to your business.'
  },
];

const relatedServices = [
  { slug: 'mainland-activities', title: 'Mainland Activities', description: '2,000+ DED-approved activities across Dubai & UAE.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'hiring-employee-management', title: 'Hiring in UAE', description: 'Recruitment & employee management solutions.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', gradient: 'from-blue-400 to-indigo-600' },
  { slug: 'mainland-visa', title: 'Mainland UAE Visa Services', description: 'Investor, employment, and family visas.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', gradient: 'from-cyan-400 to-sky-600' },
];

// ============ COMPONENT ============
export default function OfficeSpaceSolutions() {
  const [activeOffice, setActiveOffice] = useState(0);
  const [activeLocation, setActiveLocation] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const nextOffice = () => setActiveOffice((prev) => (prev + 1) % officeTypes.length);
  const prevOffice = () => setActiveOffice((prev) => (prev - 1 + officeTypes.length) % officeTypes.length);

  const nextLocation = () => setActiveLocation((prev) => (prev + 1) % locations.length);
  const prevLocation = () => setActiveLocation((prev) => (prev - 1 + locations.length) % locations.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/95 via-blue-900/75 to-indigo-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Building size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Mainland</span><span>/</span>
                <span className="text-white font-bold">Office Space Solutions</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-cyan-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Office Spaces for All</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                UAE Office Space <span className="text-cyan-300">Solutions in Dubai</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Flexible, premium & affordable office spaces for every business type. From hot desks to full corporate headquarters.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Office Space Solutions in Dubai.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['500+ Options', '8+ Locations', 'Flexible Terms', 'Full Compliance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Office Dashboard Card */}
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
                        <Building2 size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Office Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <MapPin size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Prime Location</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Dubai, UAE</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Options</div>
                          <div className="text-lg font-black text-cyan-600">500+</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup</div>
                          <div className="text-lg font-black text-blue-600">48 Hrs</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Laptop size={18} className="text-cyan-500" />
                        <Armchair size={18} className="text-blue-500" />
                        <DoorOpen size={18} className="text-indigo-500" />
                        <Crown size={18} className="text-violet-500" />
                        <UsersRound size={18} className="text-purple-500" />
                        <Building2 size={18} className="text-fuchsia-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Find Office</span>
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

      {/* === 3. WHY ESSENTIAL — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Office Space" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Establishes Presence</div>
                      <div className="text-sm font-black text-[#0A0F1F]">& Credibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why Essential</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Why Is Office Space <span className="gradient-text">Essential for Business Setup?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  The modern business centers of Dubai and the UAE rank among the <span className="font-black text-[#0A0F1F]">most vibrant in the world</span>! Beyond licenses and visas, having a professional office space is the cornerstone of business presence.
                </p>
                <p>
                  For most trade and professional licenses, a <span className="font-black text-[#0A0F1F]">registered office address is legally required</span> — and it enhances your company's credibility. When clients, investors, and authorities look at your business, a proper office reinforces your stability and professionalism.
                </p>
                <p>
                  Whether it's a flexi desk, a serviced office, or a corporate HQ — the choice of office solution has a <span className="font-black text-[#0A0F1F]">direct link to your efficiency, costs, and long-term success</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Legal Requirement', 'Client Trust', 'Investor Confidence', 'Professional Image', 'Business Efficiency', 'Cost Optimization'].map((item, i) => (
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

      {/* === 4. OFFICE TYPES — Swiping Gallery === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <LayoutGrid size={14} className="text-cyan-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Various Office Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              What Types of <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Office Spaces</span> Are Available?
            </h2>
            <p className="text-base text-white/70 font-medium">Swipe through 6 premium office solutions — from affordable desks to full corporate HQ.</p>
          </motion.div>

          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffice}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={officeTypes[activeOffice].image}
                      alt={officeTypes[activeOffice].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${officeTypes[activeOffice].color} opacity-85 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${officeTypes[activeOffice].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                          {(() => {
                            const Icon = officeTypes[activeOffice].icon;
                            return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                          })()}
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                            Type {String(activeOffice + 1).padStart(2, '0')} / {String(officeTypes.length).padStart(2, '0')}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-400/90 backdrop-blur-xl border border-amber-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                            <Star size={10} fill="currentColor" />
                            {officeTypes[activeOffice].price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-cyan-300 uppercase tracking-widest mb-2">{officeTypes[activeOffice].short}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {officeTypes[activeOffice].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mb-6 drop-shadow">
                        {officeTypes[activeOffice].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {officeTypes[activeOffice].features.map((feature, fi) => (
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
                onClick={prevOffice}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous Office"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextOffice}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next Office"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {officeTypes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveOffice(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeOffice ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to office ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-6 gap-3">
              {officeTypes.map((office, i) => {
                const Icon = office.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveOffice(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeOffice
                        ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/30 scale-105'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <div className="relative h-20">
                      <img src={office.image} alt={office.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${office.color} opacity-70 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 5. BENEFITS — Premium Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Award size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Right Office Boosts Success</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of Having an <span className="gradient-text">Office in Dubai</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six powerful reasons to secure the right office space for your business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-3 leading-tight">{benefit.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. HOW WE SIMPLIFY — 3 Steps === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Zap size={14} className="text-cyan-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">How We Simplify</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              How Does Setup Zone Dubai <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Simplify Office Setup?</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Three simple steps to your perfect office space.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {simplifySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="group relative">
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg opacity-10`}>
                      <span className="text-4xl font-black text-cyan-600">{step.step}</span>
                    </div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={28} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-cyan-300 mb-3">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-white mb-3 leading-tight">{step.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. LOCATIONS — Swiping Map Carousel === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <MapPinned size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Most In-Demand Locations</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Where Can You <span className="gradient-text">Rent an Office</span> in Dubai & UAE?
            </h2>
            <p className="text-base text-[#475569] font-medium">Swipe through our 7 prime locations — each with unique advantages.</p>
          </motion.div>

          {/* Location Carousel */}
          <div className="relative">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Left — Location Image */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-[32px] overflow-hidden border border-border shadow-2xl h-[500px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLocation}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <img
                        src={locations[activeLocation].image}
                        alt={locations[activeLocation].name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${locations[activeLocation].color} opacity-75 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Location Badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${locations[activeLocation].color} flex items-center justify-center shadow-2xl backdrop-blur-xl border border-white/30`}>
                          {(() => {
                            const Icon = locations[activeLocation].icon;
                            return <Icon size={28} className="text-white" strokeWidth={2.2} />;
                          })()}
                        </div>
                      </div>

                      {/* Location Info */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest mb-3">
                          {locations[activeLocation].tagline}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                          {locations[activeLocation].name}
                        </h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevLocation}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                    aria-label="Previous Location"
                  >
                    <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={nextLocation}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                    aria-label="Next Location"
                  >
                    <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                  </button>

                  {/* Progress Indicators */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-1.5 z-10">
                    {locations.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveLocation(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeLocation ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to location ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Location Details */}
              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLocation}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {/* Location Counter */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${locations[activeLocation].color} flex items-center justify-center shadow-md`}>
                        <MapPin size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-xs font-black text-[#64748B] uppercase tracking-widest">
                        Location {String(activeLocation + 1).padStart(2, '0')} / {String(locations.length).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight">
                      {locations[activeLocation].name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                      {locations[activeLocation].description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {locations[activeLocation].features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${locations[activeLocation].color} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                          </div>
                          <span className="text-xs font-bold text-[#1E293B]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={getWhatsAppLink(`Hi! I'm interested in office space in ${locations[activeLocation].name}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-gradient-to-r ${locations[activeLocation].color} text-white font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <MessageCircle size={16} />
                      Enquire About This Location
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Location Thumbnails Row */}
            <div className="mt-8 grid grid-cols-4 md:grid-cols-7 gap-3">
              {locations.map((loc, i) => {
                const Icon = loc.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveLocation(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeLocation
                        ? 'ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/30 scale-105'
                        : 'ring-1 ring-slate-200 hover:ring-slate-300'
                    }`}
                  >
                    <div className="relative h-16">
                      <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${loc.color} opacity-75 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[7px] font-black text-white uppercase tracking-wider text-center px-1 leading-tight">
                          {loc.name.split(' ')[0]}
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

      {/* === 8. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Award size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Reliable Office Setup Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Choose <span className="gradient-text">Setup Zone Dubai</span> for Office Space?
            </h2>
            <p className="text-base text-[#475569] font-medium">Direct stakeholder access, transparent pricing, and end-to-end support.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{item.label}</h3>
                        <p className="text-xs text-[#64748B] font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center text-sm text-[#64748B] font-medium mt-8 max-w-2xl mx-auto">
            We service entrepreneurs, investors, and international firms who want a convenient, affordable, and professional solution to office space in Dubai and UAE.
          </motion.p>
        </div>
      </section>

      {/* === 9. FAQ === */}
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
                Everything you need to know about Office Space Solutions. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Building2 size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our office space specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about office space in Dubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* === 10. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Office Space needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {relatedServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link to={`/mainland/${service.slug}`} className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
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
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-blue-900/70 to-indigo-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Find Your Perfect Office</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Find the <span className="text-cyan-300">Perfect Office Space?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Your business deserves more than just a desk — it needs a space that fuels growth, credibility, and success.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for office space in Dubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '500+ Options', 'Full Compliance'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss office space in Dubai.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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