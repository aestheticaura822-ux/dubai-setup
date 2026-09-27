// File: src/pages/mainland/MainlandVisa.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, 
  UserCheck, Landmark,  BadgeCheck,
  Shield, Rocket, Wallet,  HeartHandshake,
  Fingerprint, RefreshCw, Home, Globe2, ShieldCheck,
  Camera, Heart, 
  ChevronLeft, ChevronRight,  IdCard, Stamp,
  FileSignature, 
  UserCircle, UsersRound, 
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Clock, value: '2 Yrs', label: 'Renewable Visa', color: 'from-amber-400 to-orange-600' },
  { icon: Globe, value: '7', label: 'Emirates Access', color: 'from-orange-400 to-red-600' },
  { icon: Users, value: 'Unlimited', label: 'Employee Visas', color: 'from-red-400 to-rose-600' },
  { icon: Clock, value: '5-10', label: 'Days Processing', color: 'from-rose-400 to-pink-600' },
];

const whatIsVisa = [
  {
    icon: Landmark,
    title: 'Work Anywhere in the UAE',
    description: 'Conduct business and offer services anywhere in the UAE with full access to all emirates for unlimited growth and partnerships.',
    color: 'from-amber-400 to-orange-600'
  },
  {
    icon: Award,
    title: 'Bid for Government Contracts',
    description: 'Qualify to bid on high-value government projects, boosting revenue, credibility, growth, and opportunities.',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: HeartHandshake,
    title: 'Sponsor Dependents & Employees',
    description: 'Gain long-term UAE stability by sponsoring your family and domestic staff while expanding your business and hiring employees with ease.',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: RefreshCw,
    title: 'Long-Term Residency & Stability',
    description: 'Valid for 2 years, renewable indefinitely, and can lead to long-term options like the Golden Visa.',
    color: 'from-rose-400 to-pink-600'
  },
];

const advantages = [
  {
    icon: Globe2,
    title: 'Freedom to Operate Throughout UAE',
    description: 'Start and operate your business across all seven emirates — full flexibility to access the UAE\'s competitive market.',
    color: 'from-amber-400 to-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Unlimited Potential for Growth',
    description: 'Hire multiple employees based on your office size — seamless team growth and business scaling from small to big.',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: Landmark,
    title: 'Access to Government Projects',
    description: 'Bid for government contracts in construction, healthcare, energy, and technology — establishing credibility in public projects.',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: Heart,
    title: 'Family Sponsorship',
    description: 'Sponsor family and household staff — ensuring safety and stability while building your career and life in the UAE.',
    color: 'from-rose-400 to-pink-600'
  },
  {
    icon: Wallet,
    title: 'Banking & Financial Stability',
    description: 'Mainland companies are seen as credible — easier banking, credit access, and partnerships with clients, suppliers, and investors.',
    color: 'from-pink-400 to-fuchsia-600'
  },
  {
    icon: Shield,
    title: 'Long-Term Stability',
    description: 'Valid for two years, renewable indefinitely, offering a pathway to the UAE Golden Visa for lasting business and personal stability.',
    color: 'from-fuchsia-400 to-purple-600'
  },
];

const visaTypes = [
  {
    id: 'investor',
    icon: Briefcase,
    title: 'Investor / Partner Visa',
    description: 'Designed for entrepreneurs and investors, this Mainland Visa lets you live, work, manage your business, access local and global markets, and gain credibility for long-term success in the UAE.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    color: 'from-amber-500 to-orange-700',
    features: ['Live & Work in UAE', 'Manage Your Business', 'Local + Global Access', 'Long-Term Success'],
    bestFor: 'Entrepreneurs & Investors'
  },
  {
    id: 'employment',
    icon: UserCheck,
    title: 'Employment Visa',
    description: 'This visa is for professionals employed by a UAE mainland company, allowing legal work, Emirates ID, healthcare, and the ability to sponsor dependents.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
    color: 'from-orange-500 to-red-700',
    features: ['Legal Work Permit', 'Emirates ID', 'Healthcare Access', 'Dependent Sponsorship'],
    bestFor: 'Skilled Professionals'
  },
  {
    id: 'dependent',
    icon: UsersRound,
    title: 'Dependent Visa',
    description: 'This visa lets mainland visa holders sponsor family members, ensuring safety and togetherness while pursuing career or business growth in the UAE.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80',
    color: 'from-red-500 to-rose-700',
    features: ['Family Sponsorship', 'Safe & Legal', 'Togetherness', 'Career Growth'],
    bestFor: 'Family Members'
  },
  {
    id: 'domestic',
    icon: Home,
    title: 'Domestic Worker Visa',
    description: 'This visa allows hiring domestic staff legally, ensuring residency, protections, and compliance with UAE labor laws.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    color: 'from-rose-500 to-pink-700',
    features: ['Legal Hiring', 'Full Protections', 'UAE Labor Law', 'Full Residency'],
    bestFor: 'Domestic Staff'
  },
];

const steps = [
  {
    step: '01',
    icon: Building2,
    title: 'Company Registration & Trade License',
    description: 'Your UAE business must be legally registered. Choose company type, reserve trade name, submit documents, obtain approvals, draft MOA if needed, and pay fees.'
  },
  {
    step: '02',
    icon: FileText,
    title: 'Document Preparation',
    description: 'We prepare your valid passport, photos, entry permit, trade license copy, establishment card, employment contract, and medical certificate.'
  },
  {
    step: '03',
    icon: BadgeCheck,
    title: 'Application Submission',
    description: 'Submit your complete application to UAE immigration authorities with our direct coordination for faster approvals.'
  },
  {
    step: '04',
    icon: Fingerprint,
    title: 'Medical Fitness & Emirates ID',
    description: 'Complete medical fitness tests and Emirates ID biometrics at approved UAE centers.'
  },
  {
    step: '05',
    icon: Camera,
    title: 'Visa Stamping',
    description: 'Final residency visa stamped on your passport — you\'re now a legal UAE mainland resident.'
  },
];

const documents = [
  { icon: Camera, label: 'Passport Photos', desc: 'Recent, white background' },
  { icon: FileText, label: 'Entry Permit', desc: 'If required' },
  { icon: Building2, label: 'Trade License Copy', desc: 'For investors or employees' },
  { icon: IdCard, label: 'Establishment Card', desc: 'If requested' },
  { icon: FileSignature, label: 'Employment Contract', desc: 'Or partnership agreement' },
  { icon: Heart, label: 'Medical Certificate', desc: 'For residency' },
  { icon: Fingerprint, label: 'Emirates ID Form', desc: 'Completed application' },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: 'All-Round Residency Solution', desc: 'Designed for long-term success' },
  { icon: Zap, label: 'Expedited Approvals', desc: 'Strong UAE authority network' },
  { icon: DollarSign, label: 'Transparent Fees', desc: 'No hidden charges' },
  { icon: HeartHandshake, label: 'Family Sponsorship', desc: 'End-to-end support' },
  { icon: RefreshCw, label: 'Renewals & PRO', desc: 'Ongoing assistance' },
  { icon: Globe, label: 'Compliance & Speed', desc: 'Accurate every time' },
];

const faqs = [
  {
    q: 'What is a Mainland UAE Visa?',
    a: 'A Mainland UAE Visa is a residence permit issued under a mainland company license, allowing foreign nationals to live, work, and conduct business anywhere in the UAE without restrictions imposed by free zones.'
  },
  {
    q: 'Who can apply for a Mainland UAE Visa?',
    a: 'Entrepreneurs, investors, business owners, skilled professionals, employees of mainland companies, and their family members or domestic workers can all apply.'
  },
  {
    q: 'What are the main types of Mainland UAE Visas?',
    a: 'There are 4 main types: Investor/Partner Visa, Employment Visa, Dependent Visa, and Domestic Worker Visa — each tailored to specific profiles.'
  },
  {
    q: 'What are the advantages of a Mainland UAE Visa?',
    a: 'Key advantages include freedom to operate across all 7 emirates, unlimited potential for growth, government project access, family sponsorship, banking credibility, and long-term stability.'
  },
  {
    q: 'How long is a Mainland UAE Visa valid?',
    a: 'A Mainland Visa is valid for 2 years and is renewable indefinitely. It also offers a pathway to the UAE Golden Visa for long-term stability.'
  },
  {
    q: 'What documents are required for a Mainland UAE Visa?',
    a: 'You\'ll typically need a valid passport (6+ months), recent photos, entry permit, trade license copy, establishment card, employment contract, medical certificate, and completed Emirates ID form.'
  },
  {
    q: 'What is the step-by-step process to obtain a Mainland UAE Visa?',
    a: 'It includes: Company registration & trade license → Document preparation → Application submission → Medical fitness & Emirates ID → Visa stamping.'
  },
  {
    q: 'Can a Mainland UAE Visa holder sponsor family members?',
    a: 'Yes. Mainland visa holders can sponsor spouses, children, and eligible dependents. We handle the entire family sponsorship process end-to-end.'
  },
  {
    q: 'How does Setup Zone Dubai assist with Mainland UAE Visas?',
    a: 'We provide full assistance — consultation, documentation, application submission, medical coordination, Emirates ID, and final stamping. Plus family sponsorship, renewals, and PRO services.'
  },
  {
    q: 'Can Mainland UAE Visa holders operate business across all Emirates?',
    a: 'Yes. A mainland visa allows you to operate freely across all seven emirates without the geographical restrictions that free zone visas impose.'
  },
];

const relatedServices = [
  { slug: 'mainland-activities', title: 'Mainland Activities', description: '2,000+ DED-approved activities across Dubai & UAE.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'office-space-solutions', title: 'UAE Office Space Solutions', description: 'Premium office spaces across Dubai & UAE.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', gradient: 'from-cyan-400 to-blue-600' },
  { slug: 'hiring-employee-management', title: 'Hiring in UAE', description: 'Recruitment & employee management solutions.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', gradient: 'from-blue-400 to-indigo-600' },
];

// ============ COMPONENT ============
export default function MainlandVisa() {
  const [activeVisa, setActiveVisa] = useState(0);

  const nextVisa = () => setActiveVisa((prev) => (prev + 1) % visaTypes.length);
  const prevVisa = () => setActiveVisa((prev) => (prev - 1 + visaTypes.length) % visaTypes.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/95 via-orange-900/75 to-red-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Stamp size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Mainland</span><span>/</span>
                <span className="text-white font-bold">Mainland UAE Visa</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Simplify Your Mainland Visa</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Mainland UAE Visa <span className="text-amber-300">in Dubai & UAE</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Live, work, and establish your business across all 7 emirates without free zone restrictions. Full flexibility, unlimited opportunity.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Mainland UAE Visa.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['2-Year Validity', '7 Emirates Access', 'Renewable', 'Family Sponsorship'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Visa Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-400 to-orange-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-orange-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-red-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">UAE Visa</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg">
                          <UserCircle size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Visa Type</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Mainland UAE</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Validity</div>
                          <div className="text-lg font-black text-amber-600">2 Years</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Emirates</div>
                          <div className="text-lg font-black text-orange-600">All 7</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Briefcase size={18} className="text-amber-500" />
                        <UserCheck size={18} className="text-orange-500" />
                        <UsersRound size={18} className="text-red-500" />
                        <Home size={18} className="text-rose-500" />
                        <Fingerprint size={18} className="text-pink-500" />
                        <ShieldCheck size={18} className="text-fuchsia-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Apply Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
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

      {/* === 3. WHAT IS MAINLAND VISA — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-amber-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="UAE Mainland" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                      <Landmark size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Full UAE Access</div>
                      <div className="text-sm font-black text-[#0A0F1F]">No Restrictions</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Unlimited Opportunities</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What is a <span className="gradient-text">Mainland UAE Visa?</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6">
                A Mainland UAE Visa allows foreign nationals to <span className="font-black text-[#0A0F1F]">live and work anywhere in the UAE</span> without free zone restrictions. It is the most flexible visa option for professionals, entrepreneurs, and investors looking to establish themselves or expand their businesses in the UAE.
              </p>

              <div className="space-y-3">
                {whatIsVisa.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-border hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{item.title}</h3>
                        <p className="text-xs text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. ADVANTAGES — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-red-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-red-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">UAE Mainland, Limitless Potential</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Advantages of a <span className="bg-gradient-to-r from-amber-300 to-red-300 bg-clip-text text-transparent">Mainland UAE Visa</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Six powerful benefits compared to free zone or other visa types.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => {
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

      {/* === 5. VISA TYPES — Swiping Carousel === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <UserCheck size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Your Business, Your Way</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Types of <span className="gradient-text">Mainland UAE Visas</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Swipe through 4 visa categories — find the right one for your profile.</p>
          </motion.div>

          {/* Main Carousel */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-border shadow-2xl h-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVisa}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={visaTypes[activeVisa].image}
                      alt={visaTypes[activeVisa].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${visaTypes[activeVisa].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${visaTypes[activeVisa].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = visaTypes[activeVisa].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Type {String(activeVisa + 1).padStart(2, '0')} / {String(visaTypes.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-amber-400/90 backdrop-blur-xl border border-amber-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {visaTypes[activeVisa].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {visaTypes[activeVisa].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mb-6 drop-shadow">
                        {visaTypes[activeVisa].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {visaTypes[activeVisa].features.map((feature, fi) => (
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
                onClick={prevVisa}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous Visa"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextVisa}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next Visa"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {visaTypes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVisa(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeVisa ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to visa ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-4 gap-3">
              {visaTypes.map((visa, i) => {
                const Icon = visa.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveVisa(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeVisa
                        ? 'ring-2 ring-amber-400 shadow-lg shadow-amber-500/30 scale-105'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <div className="relative h-20">
                      <img src={visa.image} alt={visa.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${visa.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                        <span className="text-[8px] font-black text-white uppercase tracking-wider text-center px-1 leading-tight">
                          {visa.title.split(' ')[0]}
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

      {/* === 6. STEP-BY-STEP PROCESS — Dark Vertical Timeline === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Rocket size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Prepare Documents, Get Visa</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Step-by-Step Process <span className="bg-gradient-to-r from-amber-300 to-red-300 bg-clip-text text-transparent">for Mainland Visa</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Five simple steps to your UAE residency.</p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-400/0 via-amber-400/50 to-amber-400/0 hidden md:block" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative mb-8 md:mb-12 ${isLeft ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'} md:text-${isLeft ? 'right' : 'left'}`}
                >
                  {/* Center Node */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 hidden md:block z-10">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-amber-400 border-4 border-slate-950 shadow-lg" />
                      <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-40" />
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
                    <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                          <Icon size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className={`${isLeft ? 'md:order-first' : ''}`}>
                          <div className="text-xs font-black text-amber-300 uppercase tracking-widest">STEP {step.step}</div>
                        </div>
                      </div>
                      <h3 className="text-lg font-black text-white mb-2 leading-tight">{step.title}</h3>
                      <p className="text-sm text-white/70 font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. REQUIRED DOCUMENTS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-soft mb-6">
              <FileText size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Documentation</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Required <span className="gradient-text">Documents</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Documents generally needed for your Mainland UAE Visa application.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {documents.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500" />
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-600" />
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0F1F] mb-1.5 leading-tight">{doc.label}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{doc.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why Choose Setup Zone Dubai</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Trust Us for <span className="gradient-text">Mainland Visa Services?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Compliance, accuracy, and speed — from start to finish.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
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
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
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
                Everything you need to know about the Mainland UAE Visa. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our Mainland Visa specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Mainland UAE Visa.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-amber-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-amber-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-amber-400 group-open:to-orange-600 group-open:border-transparent transition-all duration-300">
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

      {/* === 10. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Mainland Visa needs.</p>
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
                      <ArrowRight size={14} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-orange-900/70 to-red-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Get Your Visa Today</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Get Your <span className="text-amber-300">Mainland UAE Visa?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Book your consultation and get a customized Mainland UAE Visa quote. Start your UAE residency journey smarter, faster, and with complete peace of mind.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for Mainland UAE Visa.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'Fast Approvals', 'Full Compliance'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss Mainland UAE Visa.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
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