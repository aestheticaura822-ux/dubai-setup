import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, 
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target,  Rocket,
   Store, Package,  FileCheck, Layers,  ShoppingCart, CreditCard, 
  FileBadge, UserCheck,  Percent, Send, Plane,
  RefreshCw,  Cpu, Monitor, Megaphone, Palette, MonitorPlay,  ClipboardCheck, Video,  Camera, Music,
  Film, Pen,  BookOpen, GraduationCap, 
  Coffee,  Wifi, Home as Home2, Laptop, Radio, Podcast,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Zap, value: '3-5', label: 'Days Setup', color: 'from-rose-400 to-pink-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-pink-400 to-fuchsia-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Users, value: '1000+', label: 'Creative Businesses', color: 'from-violet-400 to-purple-600' },
];

const whyShams = [
  { icon: Globe, title: '100% Foreign Ownership', description: 'Full ownership — no local sponsor needed.', color: 'from-rose-400 to-pink-600', size: 'small' },
  { icon: DollarSign, title: 'No Tax', description: 'Zero income tax and corporate tax — keep everything you earn.', color: 'from-pink-400 to-fuchsia-600', size: 'small' },
  { icon: Zap, title: 'Fast Processing', description: 'Company registration completed in just a few business days.', color: 'from-fuchsia-400 to-purple-600', size: 'small' },
  { icon: Video, title: 'Built for Creators', description: 'Ideal for influencers, developers, consultants, designers, and e-commerce traders — the UAE\'s top choice for digital-first businesses.', color: 'from-violet-400 to-purple-600', size: 'large' },
  { icon: Home2, title: 'No Office Required', description: 'Start with flexible workspace or work from home.', color: 'from-purple-400 to-indigo-600', size: 'small' },
];

const licenses = [
  { icon: Film, title: 'Media License', description: 'For digital creators, film production, publishing, and broadcasting.', code: 'MED', color: 'from-rose-400 to-pink-600' },
  { icon: ShoppingCart, title: 'E-commerce License', description: 'Ideal for online sellers, dropshipping, and marketplace owners.', code: 'ECM', color: 'from-pink-400 to-fuchsia-600' },
  { icon: Briefcase, title: 'Consultancy License', description: 'For advisors in management, finance, HR, and education.', code: 'CNS', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Store, title: 'Trading License', description: 'Suitable for product import/export and warehousing.', code: 'TRD', color: 'from-violet-400 to-purple-600' },
  { icon: UserCheck, title: 'Freelance Permit', description: 'For individuals offering creative, technical, or advisory services.', code: 'FRL', color: 'from-purple-400 to-indigo-600' },
  { icon: Layers, title: 'Service License', description: 'Covers a broad range of professional services and support operations.', code: 'SRV', color: 'from-indigo-400 to-blue-600' },
];

const workspaces = [
  { icon: Laptop, title: 'Smart Desks & Flexi-desks', description: 'For entrepreneurs working remotely or hybrid.', color: 'from-rose-400 to-pink-600' },
  { icon: Building2, title: 'Executive Office Units', description: 'For teams or client-facing businesses.', color: 'from-pink-400 to-fuchsia-600' },
  { icon: Podcast, title: 'Studios & Podcast Rooms', description: 'Fully-equipped media and audio production spaces.', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Wifi, title: 'Co-working Environments', description: 'High-speed connectivity and collaborative spaces.', color: 'from-violet-400 to-purple-600' },
  { icon: Coffee, title: 'Lifestyle Amenities', description: 'Cafés, lounges, and fitness areas on-site.', color: 'from-purple-400 to-indigo-600' },
];

const activities = [
  { icon: Film, label: 'Film Production & Videography' },
  { icon: Camera, label: 'Post-Production' },
  { icon: ShoppingCart, label: 'E-commerce Marketplaces' },
  { icon: Package, label: 'Digital Product Sales' },
  { icon: Megaphone, label: 'Advertising & PR' },
  { icon: Radio, label: 'Media Buying' },
  { icon: Briefcase, label: 'Business Consulting' },
  { icon: GraduationCap, label: 'Educational Consulting' },
  { icon: DollarSign, label: 'Financial Consulting' },
  { icon: Cpu, label: 'App Development' },
  { icon: Monitor, label: 'IT Services' },
  { icon: BookOpen, label: 'Publishing Houses' },
  { icon: Music, label: 'Content Businesses' },
  { icon: Sparkles, label: 'Game Design' },
  { icon: MonitorPlay, label: 'Streaming Services' },
  { icon: Palette, label: 'Animation & Web Design' },
  { icon: Pen, label: 'Branding Services' },
];

const visaServices = [
  { icon: UserCheck, title: 'Investor & Shareholder Visas', description: 'For business owners and shareholders in SHAMS.', stampColor: 'from-rose-500 to-pink-600' },
  { icon: Briefcase, title: 'Employment Visas', description: 'For employees sponsored by your SHAMS company.', stampColor: 'from-pink-500 to-fuchsia-600' },
  { icon: Users, title: 'Family Sponsorship', description: 'Sponsor spouse, children, and dependents.', stampColor: 'from-fuchsia-500 to-purple-600' },
  { icon: FileBadge, title: 'Emirates ID & Medical', description: 'Full coordination for medical tests and Emirates ID.', stampColor: 'from-violet-500 to-purple-600' },
  { icon: RefreshCw, title: 'Visa Renewals', description: 'Renewals and status tracking support.', stampColor: 'from-purple-500 to-indigo-600' },
  { icon: ShieldCheck, title: 'Immigration & PRO', description: 'Immigration card creation and PRO services.', stampColor: 'from-indigo-500 to-blue-600' },
];

const taxAdvantages = [
  { icon: DollarSign, title: '0% Corporate & Personal Income Tax', description: 'Keep everything you earn — no taxes deducted.' },
  { icon: Send, title: 'Full Repatriation of Profits', description: 'Move your profits freely to your home country.' },
  { icon: FileCheck, title: 'No Audit Required', description: 'Most companies don\'t require audits.' },
  { icon: Package, title: 'No Customs Duty', description: 'No customs duties within the Free Zone.' },
  { icon: Percent, title: 'Optional VAT Registration', description: 'Depending on your turnover threshold.' },
  { icon: CreditCard, title: 'Bank Account Opening', description: 'With UAE and international banks.' },
];

const howWeHelp = [
  { step: '01', title: 'Consultation & Activity Selection', description: 'We help you decide which business activity suits your goals and reserve a company name per SHAMS regulations.', icon: MessageCircle, color: 'from-rose-400 to-pink-600' },
  { step: '02', title: 'License Application & Processing', description: 'We file all applications, manage the license process, and obtain your establishment card.', icon: FileText, color: 'from-pink-400 to-fuchsia-600' },
  { step: '03', title: 'Immigration File Creation', description: 'We create your immigration file and handle all visa steps.', icon: Users, color: 'from-fuchsia-400 to-purple-600' },
  { step: '04', title: 'Visa Processing & Emirates ID', description: 'Full visa applications for investors and employees — plus Emirates ID and medical steps.', icon: UserCheck, color: 'from-violet-400 to-purple-600' },
  { step: '05', title: 'Bank Account & Compliance', description: 'Bank account setup with documents in place — plus license renewals and compliance.', icon: CreditCard, color: 'from-purple-400 to-indigo-600' },
  { step: '06', title: 'Post-Setup Growth Support', description: 'Branding, profile creation, and web planning — we help you grow.', icon: Rocket, color: 'from-indigo-400 to-blue-600' },
];

const faqs = [
  { q: 'How fast can I get my SHAMS license?', a: 'The whole company setup process takes about 3-5 working days with all documents properly prepared. Our end-to-end coordination means your business can be operational in less than a week.' },
  { q: 'Can I get a visa with my SHAMS license?', a: 'Yes. SHAMS allows visa quotas based on your license and package. We handle investor, employment, and family visas end-to-end.' },
  { q: 'What if I am working from a physical location outside the UAE?', a: 'SHAMS allows 100% remote setup. You can operate from anywhere in the world — we handle everything digitally.' },
  { q: 'Is a trade license required for my online store?', a: 'Yes. E-commerce activities require an E-commerce License from SHAMS. We help you choose the right license type.' },
  { q: 'How many business activities can I include in one license?', a: 'Depends on the license type. Many SHAMS licenses allow multiple activities — we help you maximize value.' },
  { q: 'Do I have to prepare a business plan for registration?', a: 'Not usually. Some activities may require additional documentation — we guide you on what\'s needed.' },
  { q: 'Is SHAMS cost-effective for new businesses?', a: 'Absolutely. SHAMS is one of the most affordable free zones for creative, digital, and freelance businesses — with no hidden fees.' },
  { q: 'Can I set up a SHAMS company without being in the UAE?', a: 'Yes. SHAMS allows 100% remote setup — no need to visit UAE.' },
  { q: 'Can I register an influencer brand or content creation company?', a: 'Yes! SHAMS is specifically designed for influencers, content creators, and media businesses.' },
  { q: 'Will you assist me after I have my license?', a: 'Yes. We provide post-setup support including license renewals, compliance, branding, and business growth services.' },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-rose-400 to-pink-600' },
  { slug: 'digital-marketing', title: 'Digital Marketing', description: 'Social media, paid ads, and content strategy.', image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80', gradient: 'from-fuchsia-400 to-purple-600' },
  { slug: 'web-development', title: 'Web Development', description: 'Modern websites for creative businesses.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80', gradient: 'from-violet-400 to-purple-600' },
];

// ============ COMPONENT ============
export default function SHAMS() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO — Creative Portfolio Card === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-pink-900/75 to-rose-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Sparkles size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block">
          <Video size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">SHAMS</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-rose-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Launch Fast. Grow Smart.</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                SHAMS <span className="text-rose-300">Free Zone</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Sharjah Media City — the creative, digital, and freelance hub in the UAE. Built for content creators, consultants, tech startups, and e-commerce platforms.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in SHAMS Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', 'Remote Setup'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Creative Portfolio Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-rose-400 to-pink-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-rose-300 shadow-[0_0_20px_rgba(251,113,133,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-fuchsia-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-violet-300" />
              </motion.div>

              {/* Portfolio Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">SHAMS Creator</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white/90" />
                        <span className="w-2 h-2 rounded-full bg-white/60" />
                        <span className="w-2 h-2 rounded-full bg-white/30" />
                      </div>
                    </div>

                    <div className="p-5">
                      {/* Profile row */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg">
                          <Video size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">License Type</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Media & Creative</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup Time</div>
                          <div className="text-lg font-black text-rose-600">3-5 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Tax Rate</div>
                          <div className="text-lg font-black text-fuchsia-600">0%</div>
                        </div>
                      </div>

                      {/* Social icons row */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        
                        <Music size={18} className="text-emerald-500" />
                        <Podcast size={18} className="text-rose-500" />
                        <Camera size={18} className="text-fuchsia-500" />
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
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

      {/* === 2. STATS ROW — Circular Badges === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm" />
                      <Icon size={28} className="relative text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] leading-none mb-1.5">{stat.value}</div>
                    <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHY SHAMS — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <Award size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Why SHAMS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Makes SHAMS a <span className="gradient-text">Standout Free Zone?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">The Free Zone designed for digital-first, service-based, and creative businesses.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-pink-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Globe size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">100% Foreign Ownership</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Full ownership — no local sponsor required.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <DollarSign size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">No Tax</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Zero income tax and corporate tax — keep everything you earn.</p>
            </motion.div>

            {/* Small card 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Zap size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Fast Processing</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Company registration in just a few business days.</p>
            </motion.div>

            {/* Large card — Creators */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-8 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-full min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80" alt="Creators" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/90 via-pink-600/80 to-fuchsia-700/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative p-7 h-full flex flex-col justify-between min-h-[300px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                    <Video size={30} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Built for Creators</h3>
                    <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl">Ideal for influencers, developers, consultants, designers, and e-commerce traders — the UAE's top choice for digital-first businesses.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small card 4 — No office */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-600 to-violet-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Home2 size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between min-h-[280px]">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Home2 size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2">No Office Required</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">Start with flexible workspace or work from home.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. READY TO LAUNCH (DARK) — Split === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-rose-950 via-pink-950 to-fuchsia-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-fuchsia-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" alt="SHAMS" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
                      <Rocket size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Launch In</div>
                      <div className="text-sm font-black text-[#0A0F1F]">3-5 Working Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Sparkles size={14} className="text-rose-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Ready to Launch?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Start Your SHAMS <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">Free Zone Business</span>
              </h2>

              <div className="space-y-5 text-base text-white/80 font-medium leading-relaxed">
                <p>
                  Whether you're a <span className="font-black text-white">freelancer, content creator, or e-commerce entrepreneur</span> — SHAMS Free Zone is the UAE's top choice for flexible, fast, and future-ready company formation.
                </p>
                <p>
                  We help you with end-to-end setup services including trade license, visa, and business bank account assistance. With quick approvals, planned costs, and no hidden fees, SHAMS is the ideal location for digital creators, consultants, and small business owners.
                </p>
                <p>
                  We handle everything from license to launch — so you can stay focused on growing your brand.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Licence to Launch', 'No Hidden Fees', 'Fast Approvals', 'Compliance Ready'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 5. LICENSE CATEGORIES — Creative Ticket Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <FileText size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">License Categories</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              One Zone. <span className="gradient-text">Many Possibilities.</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Each license can be customized to include single or multiple activities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {licenses.map((license, i) => {
              const Icon = license.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${license.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                    {/* Top gradient bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${license.color}`} />

                    <div className="p-6">
                      {/* Header with dot pattern */}
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

                      {/* Perforated divider */}
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
        </div>
      </section>

      {/* === 6. WORKSPACE OPTIONS — Feature Showcase === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Laptop size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Workspace Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Office Flexibility <span className="gradient-text">Built for Modern Work</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Operate from home, coworking space, or scale to a private office as needed.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {workspaces.map((option, i) => {
              const Icon = option.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  {/* Icon circle */}
                  <div className="relative flex justify-center mb-5">
                    <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${option.color} blur-xl opacity-40 group-hover:opacity-70 transition-opacity`} />
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={30} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>

                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.color}`} />
                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{option.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{option.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. HOW WE HELP — Numbered Process === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <ClipboardCheck size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">How We Help</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How We Help You <span className="gradient-text">Launch in SHAMS</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">An all-inclusive, guided business formation — from first meeting to post-setup support.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {howWeHelp.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  {/* Big number watermark */}
                  <div className="absolute top-3 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className={`text-7xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent leading-none`}>
                      {item.step}
                    </span>
                  </div>

                  <div className="relative mb-4">
                    <div className={`absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} blur-md opacity-40 group-hover:opacity-70 transition-opacity`} />
                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="relative text-base font-black text-[#0A0F1F] mb-2 leading-tight pr-16">{item.title}</h3>
                  <p className="relative text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. TOP BUSINESS ACTIVITIES — Chip Cloud === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Target size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Top Activities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              SHAMS Empowers <span className="gradient-text">Your Niche</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">SHAMS continues to expand as a hub for creative and digital businesses.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all duration-300 cursor-default">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                      <Icon size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-[#0A0F1F]">{activity.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }} className="text-center text-xs font-bold text-[#94A3B8] uppercase tracking-widest mt-8">
            We identify your activity with the correct SHAMS license codes
          </motion.p>
        </div>
      </section>

      {/* === 9. VISA SERVICES — Passport Style Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <UserCheck size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Visa & Immigration</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Visa Services for <span className="gradient-text">SHAMS Businesses</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We ensure your team stays compliant — and your operations are never interrupted.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visaServices.map((visa, i) => {
              const Icon = visa.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative rounded-3xl bg-white border-2 border-dashed border-rose-100 hover:border-rose-300 p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    {/* "APPROVED" stamp */}
                    <div className={`absolute top-4 right-4 w-14 h-14 rounded-full border-2 border-dashed bg-gradient-to-br ${visa.stampColor} opacity-30 group-hover:opacity-60 group-hover:rotate-12 transition-all duration-700 flex items-center justify-center`}>
                      <span className="text-[7px] font-black text-white uppercase tracking-widest text-center leading-tight">APPROVED</span>
                    </div>

                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${visa.stampColor} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>

                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight pr-14">{visa.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{visa.description}</p>

                    <div className="mt-4 pt-3 border-t border-dashed border-rose-100 flex items-center gap-2">
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-rose-300 to-transparent rounded" />
                      <Plane size={10} className="text-rose-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. TAX & FINANCIAL ADVANTAGES (DARK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-rose-950 via-pink-950 to-fuchsia-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <DollarSign size={14} className="text-rose-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Tax & Financial Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Compelling <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">Financial Incentives</span>
            </h2>
            <p className="text-base text-white/75 font-medium">We assist in structuring your finances for compliance and scalability.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {taxAdvantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex gap-5 group">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-black text-white mb-1.5 leading-tight">{item.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 11. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-rose-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about SHAMS Free Zone. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Sparkles size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our SHAMS specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about SHAMS Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-rose-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-rose-200 hover:shadow-[0_20px_60px_rgba(244,63,94,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-pink-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-400 to-pink-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-rose-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-rose-400 group-open:to-pink-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-rose-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 12. RELATED SERVICES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-rose-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your SHAMS Free Zone setup.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <ArrowRight size={14} className="text-rose-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === 13. FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-pink-900/70 to-rose-900/50" />
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
                    Ready to Launch in <span className="text-rose-300">SHAMS?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the entire setup process — from license to launch.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for SHAMS setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'No Hidden Fees', '3-5 Days Setup'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss SHAMS setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-rose-600 hover:text-rose-700 transition">
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