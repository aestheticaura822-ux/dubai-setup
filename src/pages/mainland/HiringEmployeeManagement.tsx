// File: src/pages/mainland/HiringEmployeeManagement.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award,  Zap, Target, Crown,  Factory,  CreditCard, Scale, Layers,
  Shield, 
  
  GraduationCap,
   HeartHandshake,Eye,
   UserPlus, Globe2, Route,
 Cpu,
  FileSearch,  BookOpen,
 Handshake, Heart, 
  UserCircle, UsersRound, 
  Trophy, 
  ChevronLeft, ChevronRight, Plus, Minus, 
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Users, value: '10,000+', label: 'Placements Made', color: 'from-blue-400 to-indigo-600' },
  { icon: Globe, value: '4', label: 'Continents Sourced', color: 'from-indigo-400 to-violet-600' },
  { icon: Shield, value: '100%', label: 'MOHRE Compliant', color: 'from-violet-400 to-purple-600' },
  { icon: Clock, value: '48hrs', label: 'Avg Shortlist Time', color: 'from-purple-400 to-fuchsia-600' },
];

const industries = [
  {
    icon: Briefcase,
    title: 'Corporate & Administrative',
    description: 'Executive administrators, accountants, HR managers, office administrators, corporate secretaries, and senior executive support.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    color: 'from-blue-500 to-indigo-700',
    roles: ['Executive Admin', 'Accountants', 'HR Managers', 'Corporate Secretaries']
  },
  {
    icon: TrendingUp,
    title: 'Sales & Marketing',
    description: 'Business development, digital marketing, marketing managers, sales managers, account executives, and brand specialists.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    color: 'from-indigo-500 to-violet-700',
    roles: ['Business Dev', 'Digital Marketing', 'Sales Managers', 'Brand Specialists']
  },
  {
    icon: Cpu,
    title: 'IT & Technology',
    description: 'Developers, IT engineers, data analysts, cybersecurity experts, cloud computing, and digital transformation consultants.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    color: 'from-violet-500 to-purple-700',
    roles: ['Developers', 'IT Engineers', 'Data Analysts', 'Cybersecurity']
  },
  {
    icon: Crown,
    title: 'Hospitality & Tourism',
    description: 'Hotel managers, executive chefs, guest relations, event managers, housekeeping managers, and travel consultants.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    color: 'from-purple-500 to-fuchsia-700',
    roles: ['Hotel Managers', 'Executive Chefs', 'Guest Relations', 'Event Managers']
  },
  {
    icon: Factory,
    title: 'Construction & Engineering',
    description: 'Project managers, civil/mechanical/electrical engineers, architects, site supervisors, and skilled labourers.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    color: 'from-fuchsia-500 to-pink-700',
    roles: ['Project Managers', 'Engineers', 'Architects', 'Site Supervisors']
  },
  {
    icon: HeartHandshake,
    title: 'Healthcare & Wellness',
    description: 'Doctors, nurses, physiotherapists, pharmacists, therapists, medical technicians, and clinic managers.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    color: 'from-pink-500 to-rose-700',
    roles: ['Doctors', 'Nurses', 'Pharmacists', 'Therapists']
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Qualified teachers, academic coordinators, curriculum developers, lecturers, trainers, and learning specialists.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    color: 'from-rose-500 to-red-700',
    roles: ['Teachers', 'Coordinators', 'Lecturers', 'Trainers']
  },
];

const hiringProcess = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Talent Sourcing',
    description: 'Access a network of highly-skilled professionals in Dubai, Abu Dhabi, and internationally using various recruitment platforms and industry connections.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    step: '02',
    icon: FileSearch,
    title: 'Candidate Screening',
    description: 'Pre-qualifying, thorough vetting, background checks, reference checks, and testing technical skills to weed out disqualified candidates.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    step: '03',
    icon: Users,
    title: 'Interview Management',
    description: 'Complete interview process — scheduling, candidate follow-up, and gathering employer feedback for smooth, efficient hiring.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    step: '04',
    icon: Handshake,
    title: 'Offer Management',
    description: 'Negotiate salary, build benefits packages, structure employment terms, and develop contracts within your budget.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    step: '05',
    icon: CreditCard,
    title: 'Visa & Onboarding',
    description: 'Pre-employment visa process, medical tests, Emirates ID, residency paperwork, and labor contract preparation.',
    color: 'from-fuchsia-400 to-pink-600'
  },
];

const benefits = [
  {
    icon: Globe2,
    title: 'Access to Local & International Talent',
    description: 'Connect with top UAE professionals and global talent — Emiratis, GCC executives, or international hires.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Shield,
    title: 'Compliance with UAE Labour Laws',
    description: '100% compliant with UAE Labour Laws, MOHRE regulations, free zone authority rules, and visa regulations.',
    color: 'from-indigo-400 to-violet-600'
  },
  {
    icon: Zap,
    title: 'Faster Recruitment Timeline',
    description: 'Efficient sourcing and advanced screening shorten time-to-hire and quickly match you with the right talent.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: Cpu,
    title: 'Industry-Specific Knowledge',
    description: 'Industry-expert consultants ensure you hire professionals with the right skills, qualifications, and cultural fit.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    icon: Layers,
    title: 'All Hiring & Visa Solutions',
    description: 'End-to-end recruitment — contracts, approvals, visas, medicals, Emirates ID, and onboarding, all managed in-house.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    icon: Target,
    title: 'Tailor-Made for the Business',
    description: 'Customized hiring solutions matching your goals, budget, and workforce plans — startup or multinational.',
    color: 'from-pink-400 to-rose-600'
  },
];

const emiratisationFeatures = [
  { icon: UsersRound, label: 'Emiratisation Compliance', desc: 'Meet government hiring quotas' },
  { icon: Trophy, label: 'UAE National Hiring', desc: 'Sourcing & placing Emirati talent' },
  { icon: BookOpen, label: 'Onboarding Programs', desc: 'Tailored cultural integration' },
  { icon: TrendingUp, label: 'Career Development', desc: 'Ongoing training & growth' },
  { icon: Award, label: 'Corporate Reputation', desc: 'Community engagement' },
  { icon: Scale, label: 'Full Compliance', desc: 'UAE employment laws' },
];

const whyChooseUs = [
  {
    icon: Trophy,
    title: 'Proven Recruitment Success',
    description: 'Strong record of placing qualified candidates within leading UAE organisations across many industries.'
  },
  {
    icon: Target,
    title: 'Customised Hiring Solutions',
    description: 'Every business is unique — we customize each hire to your industry and culture for the right fit.'
  },
  {
    icon: Eye,
    title: 'Total Transparency',
    description: 'Fully transparent recruitment with no hidden fees. Clear updates at every stage for full confidence.'
  },
  {
    icon: Heart,
    title: 'Post-Hire Integration & Support',
    description: 'Support continues after hiring with follow-up for smooth onboarding, cultural fit, and retention.'
  },
];

const faqs = [
  {
    q: 'What is involved in the process of hiring employees in the UAE?',
    a: 'Hiring in the UAE involves candidate sourcing, job offer preparation, employment contract preparation, obtaining work permits and visas, medicals, Emirates ID registration, and MOHRE approval for the employment contract. Every step must comply with UAE labour laws.'
  },
  {
    q: 'Can foreign companies hire employees in the UAE?',
    a: 'Yes. Foreign companies with a valid UAE entity (free zone or mainland) can hire employees. We help you navigate all legal requirements including work permits, visas, and MOHRE compliance.'
  },
  {
    q: 'How long does it take to hire someone in the UAE?',
    a: 'Typically, sourcing and shortlisting takes 1-2 weeks, interviews and offers 1-2 weeks, and visa processing 2-4 weeks. Our efficient process shortens time-to-hire significantly.'
  },
  {
    q: 'Does Emiratisation affect companies when hiring?',
    a: 'Yes. Certain companies must meet Emiratisation quotas for hiring UAE Nationals. We help you comply with these requirements while finding the best talent for your business.'
  },
  {
    q: 'Can employers hire talent outside of the UAE?',
    a: 'Absolutely. We provide local and international talent sourcing from Asia, Europe, Africa, and the Americas with full compliance with MOHRE and immigration laws.'
  },
  {
    q: 'What industries do you recruit for in the UAE?',
    a: 'We recruit across corporate & administrative, sales & marketing, IT & technology, hospitality & tourism, construction & engineering, healthcare & wellness, and education & training.'
  },
  {
    q: 'What are the costs associated with onboarding employees in UAE?',
    a: 'Costs include visa processing, medical tests, Emirates ID, labour contracts, and mandatory benefits. We provide transparent pricing with no hidden fees.'
  },
  {
    q: 'Can Setup Zone Dubai help with bulk recruitment projects?',
    a: 'Yes. We specialize in mass recruitment for offices, hotels, free zones, and large projects — handling sourcing to onboarding with full compliance.'
  },
  {
    q: 'Do you support overseas recruitment for UAE jobs?',
    a: 'Yes. Our end-to-end overseas hiring covers sourcing, vetting, MOHRE compliance, employment visas, work permits, and relocation support.'
  },
  {
    q: 'Why use Setup Zone Dubai to hire in the UAE?',
    a: 'We offer proven recruitment success, customized solutions, total transparency, post-hire support, and full compliance — saving you time and mitigating risk.'
  },
];

const relatedServices = [
  { slug: 'mainland-activities', title: 'Mainland Activities', description: '2,000+ DED-approved activities across Dubai & UAE.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'office-space-solutions', title: 'UAE Office Space Solutions', description: 'Premium office spaces across Dubai & UAE.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', gradient: 'from-teal-400 to-cyan-600' },
  { slug: 'mainland-visa', title: 'Mainland UAE Visa Services', description: 'Investor, employment, and family visas.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', gradient: 'from-cyan-400 to-sky-600' },
];

// ============ COMPONENT ============
export default function HiringEmployeeManagement() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const nextIndustry = () => setActiveIndustry((prev) => (prev + 1) % industries.length);
  const prevIndustry = () => setActiveIndustry((prev) => (prev - 1 + industries.length) % industries.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-indigo-900/75 to-violet-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Users size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Handshake size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Mainland</span><span>/</span>
                <span className="text-white font-bold">Hiring in UAE</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-blue-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Find & Recruit the Best Talent</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Hiring in UAE — <span className="text-blue-300">Employee Management</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Professional recruitment and hiring solutions in Dubai and across the UAE. From sourcing to onboarding — we find the talent that grows your business.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Hiring services in UAE.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['10,000+ Placements', 'MOHRE Compliant', 'Bulk Hiring', 'Emiratisation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-blue-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Team Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-indigo-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-violet-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Talent Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg">
                          <UserCircle size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Recruiting Now</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Placements</div>
                          <div className="text-lg font-black text-blue-600">10K+</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Shortlist</div>
                          <div className="text-lg font-black text-indigo-600">48 Hrs</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Briefcase size={18} className="text-blue-500" />
                        <Cpu size={18} className="text-indigo-500" />
                        <Crown size={18} className="text-violet-500" />
                        <Factory size={18} className="text-purple-500" />
                        <HeartHandshake size={18} className="text-fuchsia-500" />
                        <GraduationCap size={18} className="text-pink-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Hire Now</span>
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

      {/* === 3. WHY HIRING MATTERS — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-blue-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" alt="Team Meeting" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Right Talent</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Right Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why It Matters</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Why Is Hiring the Right Talent <span className="gradient-text">So Important?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  The UAE's highly competitive and fast-moving business climate shows that the basis for success hinges not only on hiring employees, but hiring the <span className="font-black text-[#0A0F1F]">right skilled, qualified, and motivated people</span> who can link directly to your business growth story.
                </p>
                <p>
                  In finance, banking, technology, IT services, e-commerce, retail, hospitality, tourism, construction, logistics, healthcare, education, and creative industries — finding and keeping the right talent is one of the <span className="font-black text-[#0A0F1F]">key differentiators that drives growth</span> in leading businesses.
                </p>
                <p>
                  With Setup Zone Dubai's recruitment solutions, we simplify hiring through <span className="font-black text-[#0A0F1F]">end-to-end services</span> — profile matching, screening, background checks, skill assessments, visa processing, and contract management.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Right Skills', 'Cultural Fit', 'Industry Knowledge', 'Productivity Boost', 'Stability', 'Sustainable Growth'].map((item, i) => (
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

      {/* === 4. INDUSTRIES — Swiping Image Carousel === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Briefcase size={14} className="text-blue-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Talent Solutions, Every Industry</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              What Industries Do We <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">Hire For?</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Swipe through our industry expertise — 7 sectors, endless possibilities.</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={industries[activeIndustry].image}
                      alt={industries[activeIndustry].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${industries[activeIndustry].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${industries[activeIndustry].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = industries[activeIndustry].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest mb-4">
                        Industry {String(activeIndustry + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {industries[activeIndustry].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mb-6 drop-shadow">
                        {industries[activeIndustry].description}
                      </p>

                      {/* Roles Tags */}
                      <div className="flex flex-wrap gap-2">
                        {industries[activeIndustry].roles.map((role, ri) => (
                          <span key={ri} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-xs font-bold text-white">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevIndustry}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous Industry"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextIndustry}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next Industry"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {industries.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndustry(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndustry ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to industry ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails Strip */}
            <div className="mt-6 grid grid-cols-7 gap-3">
              {industries.map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndustry(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeIndustry
                        ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/30 scale-105'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <div className="relative h-20">
                      <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-70 mix-blend-multiply`} />
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

      {/* === 5. HIRING PROCESS — Folding Accordion === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-soft mb-6">
              <Route size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Efficient Hiring, Reduced Risk</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How Does Our <span className="gradient-text">UAE Hiring Process</span> Work?
            </h2>
            <p className="text-base text-[#475569] font-medium">Click on each step to expand and see full details.</p>
          </motion.div>

          {/* Folding Accordion */}
          <div className="max-w-5xl mx-auto space-y-4">
            {hiringProcess.map((step, i) => {
              const Icon = step.icon;
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group"
                >
                  <motion.div
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                      isOpen
                        ? `bg-gradient-to-br ${step.color} shadow-2xl`
                        : 'bg-white border border-border shadow-md hover:shadow-xl'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-5 p-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-500 ${
                        isOpen ? 'bg-white/25 backdrop-blur-xl border border-white/40' : `bg-gradient-to-br ${step.color}`
                      }`}>
                        <Icon size={26} className={isOpen ? 'text-white' : 'text-white'} strokeWidth={2.2} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-black mb-1 ${isOpen ? 'text-white/80' : 'text-blue-600'}`}>
                          STEP {step.step}
                        </div>
                        <h3 className={`text-xl font-black leading-tight ${isOpen ? 'text-white' : 'text-[#0A0F1F]'}`}>
                          {step.title}
                        </h3>
                      </div>

                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        isOpen ? 'bg-white/25 backdrop-blur-xl border border-white/40' : 'bg-blue-50 border border-blue-200'
                      }`}>
                        {isOpen ? (
                          <Minus size={18} className="text-white" strokeWidth={2.5} />
                        ) : (
                          <Plus size={18} className="text-blue-600" strokeWidth={2.5} />
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-24">
                            <div className="pt-4 border-t border-white/20">
                              <p className="pt-4 text-base text-white/95 font-medium leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Subtle pattern when open */}
                    {isOpen && (
                      <div
                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. BENEFITS — Dark Premium Grid === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-violet-950 via-purple-950 to-fuchsia-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-violet-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Why Partner With Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Benefits of Hiring <span className="bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">with Setup Zone Dubai</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six powerful benefits that make us your ideal recruitment partner.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* === 7. EMIRATISATION — Split Premium === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Trophy size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Emiratisation Support</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Do We Support <span className="gradient-text">Emiratisation Hiring?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  At Setup Zone Dubai, we help employer groups meet their <span className="font-black text-[#0A0F1F]">Emiratisation commitments</span> and government hiring quotas — engaging in sourcing, vetting, and placement of qualified <span className="font-black text-[#0A0F1F]">UAE Nationals</span> across all levels.
                </p>
                <p>
                  Employing Emiratis enables <span className="font-black text-[#0A0F1F]">compliance while connecting to the community</span> — with the added benefit of improving corporate reputation and contributing to workforce development for the nation.
                </p>
                <p>
                  We offer <span className="font-black text-[#0A0F1F]">tailored onboarding programs, cultural integration support</span>, and ongoing training initiatives designed to empower UAE Nationals within your organization.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {emiratisationFeatures.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#0A0F1F] leading-tight">{item.label}</div>
                        <div className="text-[10px] text-[#64748B] font-medium leading-tight mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-20 blur-[80px] rounded-full" />

              <div className="relative grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl group h-64"
                >
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" alt="Emirati Professional" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-black text-amber-300 uppercase tracking-widest mb-1">Compliance</div>
                    <div className="text-lg font-black text-white leading-tight">Government Quotas</div>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl group h-64 mt-8"
                >
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Team Meeting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-black text-orange-300 uppercase tracking-widest mb-1">Development</div>
                    <div className="text-lg font-black text-white leading-tight">Career Growth</div>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl group h-64 -mt-8"
                >
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Team Collaboration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-black text-amber-300 uppercase tracking-widest mb-1">Integration</div>
                    <div className="text-lg font-black text-white leading-tight">Cultural Onboarding</div>
                  </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl group h-64"
                >
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" alt="Leadership" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-black text-orange-300 uppercase tracking-widest mb-1">Leadership</div>
                    <div className="text-lg font-black text-white leading-tight">Executive Roles</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 8. WHY CHOOSE US — 4 Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-soft mb-6">
              <Award size={14} className="text-blue-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-blue-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Choose <span className="gradient-text">Setup Zone Dubai</span> for Recruitment?
            </h2>
            <p className="text-base text-[#475569] font-medium">Four pillars that make us the trusted recruitment partner for UAE businesses.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-7 rounded-3xl bg-white border border-border shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full text-center overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600`} />
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={28} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-3 leading-tight">{item.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. BULK + OVERSEAS — Split Dark === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bulk Hiring */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Bulk Hiring" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-violet-900/80" />
              </div>
              <div className="relative p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg mb-6">
                  <UsersRound size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-3">Mass Recruitment</div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">
                  Can We Handle Mass Hiring for UAE Projects?
                </h3>
                <p className="text-sm text-white/85 font-medium leading-relaxed mb-6">
                  We deliver mass recruitment solutions for organizations that need to scale effectively across multiple departments. From offices and hotels to free zones and large projects — handling sourcing to onboarding with full compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Offices', 'Hotels', 'Free Zones', 'Large Projects'].map((tag, ti) => (
                    <span key={ti} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-xs font-bold text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Overseas */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80" alt="Overseas Hiring" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-purple-900/85 to-fuchsia-900/80" />
              </div>
              <div className="relative p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg mb-6">
                  <Globe2 size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div className="text-[10px] font-black text-violet-300 uppercase tracking-widest mb-3">Global Talent</div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">
                  Do We Assist with Overseas Recruitment?
                </h3>
                <p className="text-sm text-white/85 font-medium leading-relaxed mb-6">
                  Yes — we provide local and international talent sourcing from Asia, Europe, Africa, and the Americas. Our end-to-end overseas hiring covers sourcing, vetting, MOHRE compliance, employment visas, work permits, and relocation support.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Asia', 'Europe', 'Africa', 'Americas'].map((tag, ti) => (
                    <span key={ti} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-xs font-bold text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 10. FAQ === */}
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
                Everything you need to know about Hiring in the UAE. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Users size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our Hiring specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Hiring in UAE.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Hiring needs.</p>
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
                      <ArrowRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-indigo-900/70 to-violet-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Build Your Dream Team</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Hire the <span className="text-blue-300">Right Talent?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll help you find, screen, and onboard the best professionals for your UAE business.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for hiring in UAE.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '10K+ Placements', 'Full Compliance'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-blue-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss hiring in UAE.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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