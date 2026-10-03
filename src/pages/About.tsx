// File: src/pages/About.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon, ChevronRight, Building2, Users, Award, Target,
  Sparkles, CheckCircle2, MessageCircle, ArrowRight, Rocket, Globe,
  Heart, TrendingUp, ShieldCheck, Handshake, Star, Briefcase, Eye,
  Zap, DollarSign, UserCheck, Factory, Layers, MapPin, Phone, Mail,
  GraduationCap, Store, Laptop, Crown, Scale, FileText, Clock, RefreshCw,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Building2, value: '10,000+', label: 'Companies Setup', color: 'from-amber-400 to-orange-600' },
  { icon: Globe, value: '65+', label: 'Jurisdictions', color: 'from-orange-400 to-red-600' },
  { icon: Award, value: '15+', label: 'Years Experience', color: 'from-red-400 to-rose-600' },
  { icon: Users, value: '50+', label: 'Expert Team', color: 'from-rose-400 to-pink-600' },
];

const whatWeDo = [
  { icon: Globe, title: 'Free Zone Business Setup in Dubai', desc: 'Complete free zone company formation across 26+ UAE free zones.', color: 'from-amber-400 to-orange-600' },
  { icon: Building2, title: 'Mainland Business Formation in UAE', desc: 'Full mainland company setup with local sponsor & PRO support.', color: 'from-orange-400 to-red-600' },
  { icon: Briefcase, title: 'Business Support Services', desc: 'Visa, tax, accounting, bank account opening & more.', color: 'from-red-400 to-rose-600' },
  { icon: Crown, title: 'Golden Visa & PRO Services', desc: 'Golden visa processing, PRO services & government liaison.', color: 'from-rose-400 to-pink-600' },
  { icon: ShieldCheck, title: 'Company Renewals & Compliance', desc: 'License renewals, VAT filing, and compliance management.', color: 'from-pink-400 to-fuchsia-600' },
];

const whoWeServe = [
  { icon: Rocket, title: 'First-time Entrepreneurs', desc: 'Launch your first UAE business with expert guidance', color: 'from-amber-400 to-orange-600' },
  { icon: Globe, title: 'Global Founders', desc: 'Expanding to the UAE from around the world', color: 'from-orange-400 to-red-600' },
  { icon: Laptop, title: 'E-commerce Startups', desc: 'Digital businesses & online brands', color: 'from-red-400 to-rose-600' },
  { icon: Factory, title: 'Corporate Entities', desc: 'Entering the MENA market with confidence', color: 'from-rose-400 to-pink-600' },
  { icon: UserCheck, title: 'Freelancers', desc: 'Setting up in Dubai Free Zones', color: 'from-pink-400 to-fuchsia-600' },
];

const whyChooseUs = [
  { icon: ShieldCheck, text: '100% ownership setups in Free Zones & select Mainland areas' },
  { icon: Layers, text: 'End-to-end support — from license & visa to bank account & office setup' },
  { icon: DollarSign, text: 'Transparent pricing with no hidden charges' },
  { icon: Zap, text: 'Fast company registration (as quick as 3–5 working days)' },
  { icon: RefreshCw, text: 'Ongoing business support — PRO, compliance, renewals & more' },
  { icon: UserCheck, text: 'Personalized expert guidance at every stage' },
];

const growthFeatures = [
  { icon: FileText, title: 'Name Reservation', desc: 'Company name search & approval', color: 'from-amber-400 to-orange-600' },
  { icon: Scale, title: 'Legal Documentation', desc: 'Drafting & legal translations', color: 'from-orange-400 to-red-600' },
  { icon: Briefcase, title: 'License Application', desc: 'Government approvals & filing', color: 'from-red-400 to-rose-600' },
  { icon: UserCheck, title: 'Visa Processing', desc: 'Investor & employment visas', color: 'from-rose-400 to-pink-600' },
  { icon: DollarSign, title: 'Bank Account Opening', desc: 'Corporate bank accounts', color: 'from-pink-400 to-fuchsia-600' },
  { icon: ShieldCheck, title: 'VAT Registration', desc: 'Tax compliance setup', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Laptop, title: 'Website & CRM', desc: 'Digital infrastructure setup', color: 'from-purple-400 to-violet-600' },
  { icon: TrendingUp, title: 'Digital Marketing', desc: 'Growth & lead generation', color: 'from-violet-400 to-indigo-600' },
];

const faqs = [
  { q: 'How much does it cost to start a business in Dubai?', a: 'Business setup in Dubai starts from AED 9,500 for a basic free zone license. Mainland setup starts from AED 14,500.' },
  { q: 'Can a foreigner 100% own a company in Dubai?', a: 'Yes, foreigners can 100% own companies in most free zones and many mainland activities.' },
  { q: 'What is the cheapest free zone in Dubai?', a: 'RAK ICC, Ajman FTZ, and SRTIP offer the most affordable packages starting from AED 5,900.' },
  { q: 'How long does company registration take in Dubai?', a: 'Free zone registration takes 3-7 business days. Mainland takes 2-4 weeks.' },
  { q: 'Do I need a local partner in Dubai?', a: 'Not in free zones. In mainland, many activities now allow 100% foreign ownership.' },
];

// ============ COMPONENT ============
export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-amber-950/80 to-orange-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Sparkles size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>About Us</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-amber-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">About DubaiSetupNow</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Your Trusted <span className="text-amber-300">UAE Business Setup</span> Partner
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                At DubaiSetupNow, we are more than just business setup service experts — we are your long-term growth partners. From trade license to corporate bank account, we handle everything.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href={getWhatsAppLink("Hi! I'd like to know more about DubaiSetupNow.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  Free Consultation
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['10,000+ Companies', '65+ Jurisdictions', '15+ Years', '100% Compliance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Info Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-30 blur-2xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" alt="Team" className="w-full h-[420px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                        <Handshake size={24} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">Since 2010</div>
                        <div className="text-lg font-black text-white">15+ Years of Excellence</div>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 font-medium leading-relaxed">
                      Trusted by 10,000+ entrepreneurs across 65+ countries.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. STATS ROW ============ */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(251,146,60,0.15)] hover:-translate-y-1">
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

      {/* ============ 3. WHO WE ARE — Split ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-amber-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" alt="Team meeting" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Our Team</div>
                      <div className="text-sm font-black text-[#0A0F1F]">50+ Business Experts</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <Users size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Who We Are?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                More Than Just <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Service Providers</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  At <span className="font-black text-[#0A0F1F]">DUBAISETUPNOW</span>, we are more than just business setup service experts — we are your <span className="font-black text-[#0A0F1F]">long-term growth partners</span>. Whether you're launching a startup, expanding to the UAE, or shifting your base to Dubai's thriving market, our mission is to make your journey smooth, compliant, and fast.
                </p>
                <p>
                  With deep knowledge of UAE's <span className="font-black text-[#0A0F1F]">Free Zone and Mainland company formation jurisdictions</span>, we help entrepreneurs, freelancers, and corporations launch and scale seamlessly. From securing your trade license to setting up corporate bank accounts, we offer complete business setup solutions.
                </p>
                <p>
                  Our team ensures your UAE business is fully compliant, investor-ready, and positioned for <span className="font-black text-[#0A0F1F]">long-term success</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['15+ Years Experience', 'Multi-lingual Team', 'Transparent Pricing', '100% Compliance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
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

      {/* ============ 4. WHAT MAKES US DIFFERENT — Dark ============ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Award size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">What Makes Us Different?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Expertise You Can <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Trust</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-5xl mx-auto">
            <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="space-y-5 text-base md:text-lg text-white/90 font-medium leading-relaxed">
                <p>
                  At <span className="font-black text-white">DUBAISETUPNOW</span>, we don't only provide business setup services, we provide <span className="font-black text-amber-300">custom business launch solutions</span> that are quick, cost effective, and tailored according to your goals.
                </p>
                <p>
                  We have helped businesses ranging from choosing the appropriate Free Zone or Mainland jurisdiction through to securing trade licenses, investor visas, and corporate bank accounts. You have access to expert advice through every step.
                </p>
                <p>
                  The clients love our <span className="font-black text-white">transparent pricing, multilingual support, and 100% guarantee for compliance</span>, which gives entrepreneurs, startups and foreign investors in the UAE the confidence required to start and grow a Dubai business without effort.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
                {[
                  { icon: DollarSign, label: 'Transparent' },
                  { icon: Globe, label: 'Multilingual' },
                  { icon: ShieldCheck, label: '100% Compliant' },
                  { icon: Zap, label: 'Fast Setup' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md mb-2">
                      <item.icon size={22} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-xs font-black text-white uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 5. WHAT WE DO ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Briefcase size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              We <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Specialize</span> In
            </h2>
            <p className="text-base text-[#475569] font-medium">Complete business setup solutions across the UAE.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="group relative">
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 opacity-20">
                  <Rocket size={100} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg mb-5">
                    <Rocket size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 leading-tight">Ready to Start?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation from our experts.</p>
                </div>
                <a href={getWhatsAppLink("Hi! I want a free consultation.")} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-amber-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition">
                  <MessageCircle size={14} strokeWidth={2.5} />Talk to Expert
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 6. WHO WE SERVE ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Users size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Who We Serve</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              We <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Work</span> With
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {whoWeServe.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full text-center overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                    <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-tight">{item.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 7. MISSION & VISION ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Target size={14} className="text-amber-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Our Mission & Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Drives <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Us Forward</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="group relative">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-amber-400 to-orange-600 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-amber-50 border border-amber-100 shadow-lg h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg">
                    <Target size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-amber-600 uppercase tracking-widest mb-1">01 — Our Mission</div>
                    <h3 className="text-2xl font-black text-[#0A0F1F]">Empowering Entrepreneurs</h3>
                  </div>
                </div>
                <p className="text-base text-[#475569] font-medium leading-relaxed">
                  To empower entrepreneurs with a <span className="font-black text-[#0A0F1F]">simple, transparent, and fast business setup experience</span> in Dubai — built on trust, expertise, and scalable solutions.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="group relative">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-orange-400 to-rose-600 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-orange-50 border border-orange-100 shadow-lg h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-600 flex items-center justify-center shadow-lg">
                    <Eye size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-orange-600 uppercase tracking-widest mb-1">02 — Our Vision</div>
                    <h3 className="text-2xl font-black text-[#0A0F1F]">Most Trusted Brand</h3>
                  </div>
                </div>
                <p className="text-base text-[#475569] font-medium leading-relaxed">
                  To become the <span className="font-black text-[#0A0F1F]">most trusted business setup brand</span> for modern entrepreneurs in Dubai — combining digital-first tools with real human support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 8. WHY CHOOSE US ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-6">
              <Star size={14} className="text-amber-600" fill="currentColor" />
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Choose <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">DUBAISETUPNOW</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
                  <div className="relative p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                      <p className="text-sm font-bold text-[#1E293B] leading-snug pt-1">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 9. SETUP SIMPLIFIED — Growth Features ============ */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-amber-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Layers size={14} className="text-amber-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Setup Simplified For You</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              We Deal With <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Everything</span> So You Focus on Growth
            </h2>
            <p className="text-base text-white/70 font-medium max-w-2xl mx-auto">
              At dubaisetupnow, we're much more than a company registered — we work to take you from idea to full business establishment in the UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {growthFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative">
                  <div className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full text-center">
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xs font-black text-white mb-1 leading-tight">{item.title}</h3>
                    <p className="text-[10px] text-white/60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-center text-sm md:text-base text-white/70 font-medium leading-relaxed max-w-3xl mx-auto mt-12">
            We use our years of experience, established relationships with UAE authorities, and commitment to service excellence to save you time, setup costs and help you start, manage, and thrive in a compliant manner. Using dubaisetupnow, you're not simply launching a business; you're laying a solid foundation for future growth, regional presence and global reach.
          </motion.p>
        </div>
      </section>

      {/* ============ 10. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <MessageCircle size={14} className="text-amber-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Quick Answers</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know before starting your UAE business. Still have questions? We're one message away.
              </p>

              {/* Contact Card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-amber-500 via-orange-600 to-rose-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Phone size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Get In Touch</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Talk to our experts about setup, visas, and costs.</p>

                  <div className="space-y-3">
                    <a href="tel:+971566556645" className="flex items-center gap-2.5 text-white hover:text-amber-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Phone size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold">+971 56 655 6645</span>
                    </a>
                    <a href="mailto:info@setupzonedubai.ae" className="flex items-center gap-2.5 text-white hover:text-amber-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Mail size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold break-all">info@setupzonedubai.ae</span>
                    </a>
                    <a href={getWhatsAppLink("Hi! I need guidance on UAE business setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-amber-700 font-bold text-xs shadow-lg hover:scale-105 transition-transform">
                      <MessageCircle size={14} strokeWidth={2.5} />WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-amber-200 hover:shadow-[0_20px_60px_rgba(251,146,60,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
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
                    <div className="pt-2 border-t border-dashed border-slate-200">
                      <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 11. FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-amber-950/70 to-orange-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Let's Build Your UAE Business</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Starting Your Dream Business Has Never Been <span className="text-amber-300">Easier</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Explore our Free Zone, Mainland, and Business Support services today — and let's build success together.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      Contact Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['10,000+ Companies', '15+ Years', '100% Ownership'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-amber-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss UAE business setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Mail size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                        <p className="text-sm font-bold text-[#0A0F1F] break-all">info@setupzonedubai.ae</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">We reply within 24 hours</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <MapPin size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Visit Our Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-slate-500 font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box 554552</p>
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