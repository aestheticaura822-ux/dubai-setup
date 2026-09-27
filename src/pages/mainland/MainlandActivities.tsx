// File: src/pages/mainland/MainlandActivities.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign,  Target, Crown, Store, UserCheck, Factory,  Ship, Anchor,
  MapPin,  CreditCard,  Building, Scale, Layers,
  Shield, Rocket,  Compass,
  Wallet,  Code,
   BarChart3,  Landmark, GraduationCap, HeartHandshake,  ClipboardCheck,  Route, 
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Building2, value: '2,000+', label: 'Approved Activities', color: 'from-emerald-400 to-teal-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-teal-400 to-cyan-600' },
  { icon: Landmark, value: '7', label: 'Emirates Covered', color: 'from-cyan-400 to-sky-600' },
  { icon: Clock, value: '2-4', label: 'Weeks Setup', color: 'from-sky-400 to-blue-600' },
];

const advantages = [
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'Thanks to recent UAE business reforms, most mainland activities now allow complete foreign ownership — full control without a local partner.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    icon: Route,
    title: 'Freedom to Trade Across the UAE',
    description: 'Operate across all emirates and expand globally — unlimited access to both local and international markets without restrictions.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    icon: MapPin,
    title: 'No Restrictions on Office Location',
    description: 'Set up your main office, branches, or outlets anywhere on the UAE mainland — greater flexibility in choosing prime business locations.',
    color: 'from-cyan-400 to-sky-600'
  },
  {
    icon: Landmark,
    title: 'Eligibility for Government Contracts',
    description: 'Work directly with government entities and participate in high-value tenders — not possible for most free zone companies.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    icon: Users,
    title: 'Unlimited Visas (Subject to Office Space)',
    description: 'Depending on office space, obtain multiple employment visas — ideal for organizations planning to expand their workforce.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Wallet,
    title: 'No Currency Restrictions',
    description: 'Complete freedom to transfer capital, repatriate 100% of profits, and conduct transactions in any currency.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    icon: Layers,
    title: 'Ability to Expand Business Activities',
    description: 'Add new activities, open additional branches, or diversify services without major restrictions — future expansion is simple.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: Award,
    title: 'Global Recognition & Credibility',
    description: 'A UAE mainland company is seen as a trusted, credible business entity worldwide — enhancing corporate reputation.',
    color: 'from-purple-400 to-fuchsia-600'
  },
];

const activityCategories = [
  {
    icon: Store,
    title: 'Commercial Activities',
    description: 'General trading, import/export, retail, wholesale, distribution, and consumer goods businesses.',
    examples: ['General Trading', 'Import/Export', 'Retail & Wholesale', 'E-Commerce'],
    color: 'from-emerald-400 to-teal-600'
  },
  {
    icon: Briefcase,
    title: 'Professional Activities',
    description: 'Consultancy, IT services, marketing, management, legal, and other knowledge-based services.',
    examples: ['Business Consulting', 'IT Services', 'Marketing & Advertising', 'Management Consulting'],
    color: 'from-teal-400 to-cyan-600'
  },
  {
    icon: Factory,
    title: 'Industrial Activities',
    description: 'Manufacturing, food processing, textiles, equipment production — with advanced infrastructure and global shipping access.',
    examples: ['Manufacturing', 'Food Processing', 'Textiles', 'Equipment Production'],
    color: 'from-cyan-400 to-sky-600'
  },
  {
    icon: GraduationCap,
    title: 'Educational Activities',
    description: 'Training institutes, vocational education, language centers, and knowledge-based enterprises.',
    examples: ['Training Centers', 'Vocational Education', 'Language Institutes', 'E-Learning'],
    color: 'from-sky-400 to-blue-600'
  },
  {
    icon: HeartHandshake,
    title: 'Tourism & Hospitality',
    description: 'Hotels, restaurants, travel agencies, event management, and other hospitality-focused ventures.',
    examples: ['Restaurants & Cafes', 'Travel Agencies', 'Event Management', 'Hospitality'],
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Code,
    title: 'Technology & Digital',
    description: 'Software development, SaaS, AI, blockchain, e-commerce platforms, and digital-first businesses.',
    examples: ['Software Development', 'SaaS Platforms', 'AI & Blockchain', 'Digital Media'],
    color: 'from-indigo-400 to-violet-600'
  },
];

const emiratesData = [
  {
    name: 'Dubai',
    icon: Building2,
    description: 'The DED Dubai issues one of the widest activity ranges in the UAE — commercial trading, professional services, consultancy, tourism, industrial, and e-commerce. Dubai is the UAE\'s business capital.',
    color: 'from-emerald-400 to-teal-600',
    bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    highlight: 'Business Capital'
  },
  {
    name: 'Abu Dhabi',
    icon: Landmark,
    description: 'The capital emirate offers diverse mainland activities with premium infrastructure, government contracts, and industrial zones.',
    color: 'from-teal-400 to-cyan-600',
    bg: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
    highlight: 'Government Hub'
  },
  {
    name: 'Sharjah',
    icon: Building,
    description: 'A thriving hub for manufacturing, logistics, and trade with direct access to major ports and industrial zones.',
    color: 'from-cyan-400 to-sky-600',
    bg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    highlight: 'Industrial Hub'
  },
  {
    name: 'Ras Al Khaimah',
    icon: Factory,
    description: 'Growing economic zone with cost-effective setup options for manufacturing and industrial businesses.',
    color: 'from-sky-400 to-blue-600',
    bg: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=1200&q=80',
    highlight: 'Emerging Market'
  },
  {
    name: 'Ajman',
    icon: Anchor,
    description: 'Strategically located between Dubai and Sharjah with excellent connectivity to ports and highways.',
    color: 'from-blue-400 to-indigo-600',
    bg: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
    highlight: 'Strategic Location'
  },
  {
    name: 'Umm Al Quwain',
    icon: Ship,
    description: 'Small but mighty — UAQ offers cost-effective mainland activities for startups and SMEs.',
    color: 'from-indigo-400 to-violet-600',
    bg: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=80',
    highlight: 'SME Friendly'
  },
  {
    name: 'Fujairah',
    icon: Compass,
    description: 'The only emirate on the Gulf of Oman — ideal for shipping, logistics, and maritime businesses.',
    color: 'from-violet-400 to-purple-600',
    bg: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80',
    highlight: 'Maritime Gateway'
  },
];

const setupProcess = [
  {
    step: '01',
    icon: Target,
    title: 'Free Consultation',
    description: 'We match you with the right DED-approved mainland activity for your business goals.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    step: '02',
    icon: FileText,
    title: 'Trade Name Reservation',
    description: 'Reserve your trade name with DED — ensuring compliance and availability.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    step: '03',
    icon: Scale,
    title: 'Legal Structure Setup',
    description: 'Choose the right legal entity — LLC, Sole Establishment, or Civil Company.',
    color: 'from-cyan-400 to-sky-600'
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'License Application',
    description: 'Submit documentation and obtain your DED mainland trade license.',
    color: 'from-sky-400 to-blue-600'
  },
  {
    step: '05',
    icon: UserCheck,
    title: 'Visa Processing',
    description: 'Apply for investor and employment visas for your team and dependents.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    step: '06',
    icon: DollarSign,
    title: 'Corporate Bank Account',
    description: 'Open your UAE corporate bank account with top banks — full KYC support.',
    color: 'from-indigo-400 to-violet-600'
  },
];

const whyChooseUs = [
  { icon: DollarSign, label: 'Free Initial Consultation' },
  { icon: FileText, label: 'DED Activity Selection Support' },
  { icon: Building2, label: 'Trade Name & Licensing' },
  { icon: Scale, label: 'Legal Structure Advisory' },
  { icon: UserCheck, label: 'Visa & PRO Services' },
  { icon: CreditCard, label: 'Corporate Bank Account Assistance' },
  { icon: Shield, label: 'Compliance & Renewals' },
  { icon: TrendingUp, label: 'Business Growth Advisory' },
];

const growthStats = [
  { icon: Building2, value: '2,000+', label: 'Approved Activities', color: 'from-emerald-400 to-teal-600' },
  { icon: Globe, value: '7', label: 'Emirates Covered', color: 'from-teal-400 to-cyan-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Business Hub', color: 'from-cyan-400 to-sky-600' },
  { icon: DollarSign, value: 'Growing', label: 'Local Economy', color: 'from-sky-400 to-blue-600' },
  { icon: BarChart3, value: 'Significant', label: 'Global Impact', color: 'from-blue-400 to-indigo-600' },
  { icon: Crown, value: 'Preferred', label: 'For Growth', color: 'from-indigo-400 to-violet-600' },
];

const faqs = [
  {
    q: 'What are mainland activities in Dubai and the UAE?',
    a: 'Mainland activities refer to business activities legally permitted under a mainland trade license from the Department of Economic Development (DED) in Dubai, or from the relevant authority in any other emirate. They precisely determine the legal business operations of your company and are the basis of your business license.'
  },
  {
    q: 'How many mainland activities are in Dubai?',
    a: 'Dubai DED offers over 2,000 approved mainland activities across commercial, professional, industrial, educational, tourism, and technology categories — one of the widest ranges in the UAE.'
  },
  {
    q: 'What is the difference between mainland and free zone activities?',
    a: 'Mainland companies can trade freely across the UAE and internationally, bid on government contracts, and set up anywhere on the mainland. Free zone companies are restricted to operating within the free zone and internationally, with limited mainland access.'
  },
  {
    q: 'Is it true that foreign investors can completely own a mainland business in Dubai?',
    a: 'Yes. Recent UAE business reforms now allow 100% foreign ownership for most mainland activities — no local sponsor required. This is a major advantage over the old rules.'
  },
  {
    q: 'What types of mainland activities can I select from?',
    a: 'You can choose from commercial (trading, retail, e-commerce), professional (consultancy, IT, marketing), industrial (manufacturing, processing), educational, tourism & hospitality, and technology & digital activities.'
  },
  {
    q: 'What are the benefits of a mainland license as opposed to a free zone license?',
    a: 'Mainland licenses offer unlimited access to the UAE market, government contracts, no office location restrictions, unlimited visas, easier expansion, and global credibility — advantages free zones cannot fully match.'
  },
  {
    q: 'Which emirate would be the best one to set a mainland company up in?',
    a: 'It depends on your business. Dubai is the most popular for trade and services. Abu Dhabi offers government contracts. Sharjah and RAK are ideal for manufacturing. Fujairah suits maritime businesses. We help you choose the best fit.'
  },
  {
    q: 'What factors should I consider when deciding the right mainland activity for my business?',
    a: 'Consider your business model, target market, ownership structure, visa requirements, office space needs, and long-term expansion plans. Our experts guide you through every factor.'
  },
  {
    q: 'How long does it take to obtain a local business license in Dubai?',
    a: 'Typically 2-4 weeks for mainland setup, depending on the activity, documentation, and approvals required. We fast-track the process for our clients.'
  },
  {
    q: 'Can DubaiSetupNow help with the complete mainland setup service?',
    a: 'Yes. We provide end-to-end mainland setup — free consultation, DED activity selection, trade name reservation, licensing, legal structure, visas, PRO services, corporate bank account, compliance, and renewals.'
  },
];

const relatedServices = [
  { slug: 'mainland-visa', title: 'Mainland UAE Visa Services', description: 'Investor, employment, and family visas for mainland UAE companies.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'office-space-solutions', title: 'UAE Office Space Solutions', description: 'Premium office spaces across Dubai & UAE — flexi-desks to full floors.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', gradient: 'from-teal-400 to-cyan-600' },
  { slug: 'launch-operate-expand', title: 'Launch, Operate & Expand', description: 'Complete business lifecycle support — from setup to scaling.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', gradient: 'from-cyan-400 to-sky-600' },
];

// ============ COMPONENT ============
export default function MainlandActivities() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-teal-900/75 to-cyan-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Landmark size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Mainland</span><span>/</span>
                <span className="text-white font-bold">Mainland Activities</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Build Your Future with Setup Zone Dubai</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Mainland Activities <span className="text-emerald-300">in Dubai & UAE</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Choose from 2,000+ DED-approved activities across Dubai and all 7 emirates. Unlock unlimited access to the UAE market with full government contract eligibility.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Mainland Activities setup in Dubai.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['2,000+ Activities', '100% Ownership', '7 Emirates', 'Govt Contract Ready'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Mainland Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-teal-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-cyan-300" />
              </motion.div>

              {/* Mainland Dashboard Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Mainland UAE</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                          <Landmark size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Authority</div>
                          <div className="text-sm font-black text-[#0A0F1F]">DED Licensed</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Activities</div>
                          <div className="text-lg font-black text-emerald-600">2K+</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup Time</div>
                          <div className="text-lg font-black text-teal-600">2-4 Wks</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Store size={18} className="text-emerald-500" />
                        <Briefcase size={18} className="text-teal-500" />
                        <Factory size={18} className="text-cyan-500" />
                        <GraduationCap size={18} className="text-sky-500" />
                        <HeartHandshake size={18} className="text-blue-500" />
                        <Code size={18} className="text-indigo-500" />
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

      {/* === 3. WHAT ARE MAINLAND ACTIVITIES — Swipe Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80" alt="Mainland Dubai" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                      <Landmark size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">DED Approved</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Mainland License</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Mainland Setup Offers Flexibility</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Are Mainland Activities <span className="gradient-text">in Dubai & UAE?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  Mainland activities are the <span className="font-black text-[#0A0F1F]">officially approved business operations</span> that companies can carry out under a mainland trade license issued by the Department of Economic Development (DED) in Dubai, or the corresponding authority in other emirates.
                </p>
                <p>
                  These activities outline the exact nature of your company's work and ensure that your business <span className="font-black text-[#0A0F1F]">complies with local laws and regulations</span>. By defining what your company is legally allowed to do, mainland activities serve as the foundation of your business license.
                </p>
                <p>
                  Selecting the right mainland activity is <span className="font-black text-[#0A0F1F]">far more than just a regulatory formality</span> — it's a strategic decision that influences your license type, ownership structure, visa quota, and the sectors or clients you can engage with.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['DED-Approved Operations', 'Legal Compliance', 'License Foundation', 'Strategic Decision', 'Visa Quota Impact', 'Market Access'].map((item, i) => (
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

      {/* === 4. ADVANTAGES — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Enjoy Low Setup Costs</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Advantages of <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Mainland Activities</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Opting for a Dubai Mainland License gives your business several advantages that free zones cannot match.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-3 leading-tight">{advantage.title}</h3>
                    <p className="text-xs text-white/70 font-medium leading-relaxed">{advantage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. ACTIVITY CATEGORIES — Premium Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Target size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">Mainland Activity Categories UAE</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Categories of <span className="gradient-text">Mainland Activities</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">When you apply for a mainland license, select the correct activity category.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityCategories.map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={30} className="text-white" strokeWidth={2.2} />
                    </div>

                    <h3 className="text-lg font-black text-[#0A0F1F] mb-3 leading-tight">{category.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4">{category.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {category.examples.map((example, ei) => (
                        <span key={ei} className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 text-[10px] font-bold text-[#1E293B] border border-border`}>
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. EMIRATES — Premium Image Cards === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <MapPin size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Mainland Activities in Different Emirates</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Choose Your <span className="gradient-text">Emirate</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Each emirate in the UAE offers its own set of mainland activities under local authorities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emiratesData.map((emirate, i) => {
              const Icon = emirate.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                    {/* Background Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-110" style={{ backgroundImage: `url(${emirate.bg})` }} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${emirate.color} opacity-75 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                          <Icon size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-block px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 text-[9px] font-black text-white uppercase tracking-widest mb-2">
                          {emirate.highlight}
                        </div>
                        <h3 className="text-2xl font-black text-white leading-tight drop-shadow-lg">{emirate.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 bg-white">
                      <p className="text-xs text-[#64748B] font-medium leading-relaxed mb-4">{emirate.description}</p>
                      <div className="flex items-center gap-2 text-xs font-black text-emerald-600">
                        <span>Explore Activities</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. SETUP PROCESS — Dark Premium Step Timeline === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-emerald-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Fast-Track Your Formation</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Mainland Setup <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six simple steps to launch your mainland business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setupProcess.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg opacity-10`}>
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

      {/* === 8. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why Choose Setup Zone Dubai</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Your Trusted <span className="gradient-text">Mainland Partner</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We don't just register companies — we build the foundation for long-term success.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-bold text-[#0A0F1F] leading-tight">{item.label}</span>
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
              <TrendingUp size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Unlimited <span className="gradient-text">Growth Potential</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">The UAE mainland is the fastest-growing economy in the region.</p>
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

      {/* === 10. FAQ === */}
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
                Everything you need to know about Mainland Activities. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Building2 size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our Mainland specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Mainland Activities in Dubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-emerald-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Mainland setup.</p>
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
                      <ArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-teal-900/70 to-cyan-900/50" />
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
                    Ready to Launch Your <span className="text-emerald-300">Mainland Business?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Contact us today to explore the complete list of UAE mainland activities and take the first step toward your entrepreneurial success.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for Mainland setup in Dubai.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '2,000+ Activities', 'DED Approved'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-emerald-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss Mainland setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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