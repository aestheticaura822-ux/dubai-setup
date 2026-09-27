import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Store, Package,  MapPin, BarChart3,
   Layers, Heart,  Scale,Plane,
  FileBadge, UserCheck,  Send, RefreshCw, Cpu,
  Monitor, Megaphone, Compass, Palette, Camera, Film, Music, Pen,
  Scissors,  Sparkle, Shirt,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Clock, value: '3-7', label: 'Days Setup', color: 'from-rose-400 to-pink-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-pink-400 to-fuchsia-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Palette, value: 'Creative', label: 'Innovation Hub', color: 'from-violet-400 to-purple-600' },
];

const startInStyle = [
  { icon: Building2, title: 'Company Establishment', description: 'FZE, FZCO, or branch office — we set it up correctly.', color: 'from-rose-400 to-pink-600', size: 'small' },
  { icon: Layers, title: 'Correct Legal Structure', description: 'Sole proprietorship, partnership — we guide you to the right choice.', color: 'from-pink-400 to-fuchsia-600', size: 'small' },
  { icon: FileText, title: 'Business License Assistance', description: 'Trade, service, or industrial license — keeping your business compliant.', color: 'from-fuchsia-400 to-purple-600', size: 'small' },
  { icon: Sparkles, title: 'The Ultimate Creative Hub', description: 'Be part of the D3 ecosystem — surrounded by industry leaders, entrepreneurs, and visionary individuals in design, technology, and media.', color: 'from-violet-400 to-purple-600', size: 'large' },
];

const activities = [
  { icon: Shirt, title: 'Fashion & Design', description: 'Emerging designers and established fashion houses — a complete ecosystem for fashion labels, interior design studios, and art galleries.', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80', color: 'from-rose-500 to-pink-600' },
  { icon: Megaphone, title: 'Media & Marketing', description: 'Media production, advertising, digital marketing, and branding agencies — capitalize on Dubai\'s growing demand for content creation.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80', color: 'from-pink-500 to-fuchsia-600' },
  { icon: Cpu, title: 'Technology & Innovation', description: 'AI, nanotechnology, and e-commerce projects — D3 is a leading area for IT companies, tech startups, and R&D based companies.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80', color: 'from-fuchsia-500 to-purple-600' },
];

const workspaces = [
  { icon: Monitor, title: 'Flexible Office Spaces', description: 'Suited to the needs of your team at any stage.', color: 'from-rose-400 to-pink-600' },
  { icon: Briefcase, title: 'Private & Executive Offices', description: 'For an exclusive, professional environment.', color: 'from-pink-400 to-fuchsia-600' },
  { icon: Users, title: 'Coworking Space', description: 'For startups and freelancers to collaborate.', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Store, title: 'Showrooms & Retail Suites', description: 'Physical presence and visibility for your brand.', color: 'from-violet-400 to-purple-600' },
  { icon: Sparkle, title: 'Event Spaces', description: 'Host launches, exhibitions, and creative gatherings.', color: 'from-purple-400 to-indigo-600' },
];

const visaServices = [
  { icon: UserCheck, title: 'Investor & Partner Visas', description: 'For foreign nationals establishing businesses.', stampColor: 'from-rose-500 to-pink-600' },
  { icon: Briefcase, title: 'Employment Visas', description: 'For employees and staff of your D3 business.', stampColor: 'from-pink-500 to-fuchsia-600' },
  { icon: FileBadge, title: 'Freelancer Permits', description: 'For independent professionals and creatives.', stampColor: 'from-fuchsia-500 to-purple-600' },
  { icon: Users, title: 'Family Visas', description: 'For dependents of the entrepreneur.', stampColor: 'from-violet-500 to-purple-600' },
  { icon: RefreshCw, title: 'Visa Renewals & Transfers', description: 'Stay fully compliant with renewals and transfers.', stampColor: 'from-purple-500 to-indigo-600' },
];

const growthSupport = [
  { icon: FileBadge, title: 'PRO Services', description: 'Regulatory paperwork and government processes handled on your behalf.', color: 'from-rose-400 to-pink-600' },
  { icon: Scale, title: 'Legal Advisory', description: 'Guidance on business laws, regulations, and compliance in the UAE.', color: 'from-pink-400 to-fuchsia-600' },
  { icon: BarChart3, title: 'Accounting & Auditing', description: 'UAE tax regulation compliance and financial reporting.', color: 'from-fuchsia-400 to-purple-600' },
  { icon: TrendingUp, title: 'Business Development', description: 'Connect with entrepreneurs, industry leaders, and potential partners through D3 events.', color: 'from-violet-400 to-purple-600' },
];

const strategicAdvantages = [
  { icon: Globe, title: 'Global Creative Hub', description: 'A world-leading hub for creative industries and innovation.' },
  { icon: DollarSign, title: 'Zero Tax', description: 'No personal or corporate taxes — key advantage for international entrepreneurs.' },
  { icon: Plane, title: 'Airport Proximity', description: 'Close to Dubai International Airport for easy travel and shipping.' },
  { icon: Package, title: 'Port Access', description: 'Easy access to Jebel Ali Port, one of the busiest ports in the world.' },
  { icon: Heart, title: 'Sustainable Smart City', description: 'Promotes sustainability and environmental consciousness.' },
  { icon: MapPin, title: 'Prime Location', description: 'Proximity to Downtown Dubai and major highways.' },
];

const whyChooseUs = [
  { icon: MessageCircle, title: 'Personalized Consultation', description: 'Tailored services matched to your exact needs and industry.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', color: 'from-rose-400 to-pink-600' },
  { icon: Zap, title: 'Hassle-Free Formation', description: 'Fast-track registration, licensing, and visa services.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', color: 'from-pink-400 to-fuchsia-600' },
  { icon: Scale, title: 'Expert Legal & Financial Guidance', description: 'Navigate local laws with financial structuring advice.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', color: 'from-fuchsia-400 to-purple-600' },
  { icon: Users, title: 'End-to-End Support', description: 'From office leasing to business setup, visas, and PRO services.', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', color: 'from-violet-400 to-purple-600' },
];

const faqs = [
  { q: 'What is Dubai Design District Free Zone (d3), and which businesses should set up here?', a: 'D3 is a government-backed free zone for creatives, innovators, and entrepreneurs in fashion, design, media, art, and technology. Suited for new and existing businesses looking for a global hub focused on creativity, networking, and innovation.' },
  { q: 'What kind of business can be set up in d3?', a: 'Fashion labels, design studios, art galleries, media agencies, architects, lifestyle brands, tech startups, and R&D companies.' },
  { q: 'What type of licenses can you get in D3?', a: 'Trade, Service, Industrial, and Freelance permits — each tailored to different creative and business activities.' },
  { q: 'What are the types of company formations in d3?', a: 'FZE (Free Zone Establishment), FZCO (Free Zone Company), and Branch Office structures.' },
  { q: 'Can freelancers set up a business in D3?', a: 'Yes. D3 offers Freelancer Permits for independent professionals and creatives.' },
  { q: 'What are the requirements to start a business in d3?', a: 'Passport copies, business plan (for some activities), and proposed business name. We help you with every step.' },
  { q: 'How long does it take to register a company in d3?', a: 'Typically 3-7 business days with complete documentation.' },
  { q: 'Can I sponsor employees and family for my D3 business?', a: 'Yes. D3 allows sponsoring investor visas, employment visas, freelancer permits, and family visas.' },
  { q: 'What office spaces are there at d3?', a: 'Flexible office spaces, private/executive offices, coworking, showrooms, retail suites, and event spaces.' },
  { q: 'What ongoing support is available from Setup Zone Dubai?', a: 'PRO services, legal advisory, accounting & auditing, and business development support.' },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-rose-400 to-pink-600' },
  { slug: 'digital-marketing', title: 'Digital Marketing', description: 'Social media, paid ads, and content strategy.', image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80', gradient: 'from-fuchsia-400 to-purple-600' },
  { slug: 'web-development', title: 'Web Development', description: 'Modern websites for creative businesses.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80', gradient: 'from-violet-400 to-purple-600' },
];

// ============ COMPONENT ============
export default function D3() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/95 via-pink-900/75 to-rose-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Palette size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block">
          <Sparkles size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">d3</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-rose-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Creative Hub of the World</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Dubai Design District <span className="text-rose-300">Free Zone</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                One of the coolest creative hubs in the world — a fertile environment for design, fashion, media, and technology businesses.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Dubai Design District Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', 'Creative Ecosystem'].map((item, i) => (
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
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-pink-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-fuchsia-300" />
              </motion.div>

              {/* Creative Portfolio Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Palette size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">d3 Creative</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white/90" />
                        <span className="w-2 h-2 rounded-full bg-white/60" />
                        <span className="w-2 h-2 rounded-full bg-white/30" />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg">
                          <Sparkles size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">District</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Design • Fashion • Media</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup Time</div>
                          <div className="text-lg font-black text-rose-600">3-7 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-50 to-purple-50 border border-fuchsia-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Tax Rate</div>
                          <div className="text-lg font-black text-fuchsia-600">0%</div>
                        </div>
                      </div>

                      {/* Creative icons row */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Palette size={18} className="text-rose-500" />
                        <Scissors size={18} className="text-pink-500" />
                        <Camera size={18} className="text-fuchsia-500" />
                        <Film size={18} className="text-purple-500" />
                        <Music size={18} className="text-violet-500" />
                        <Pen size={18} className="text-indigo-500" />
                      </div>

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

      {/* === 2. STATS ROW === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.15)] hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.color}`} />
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-xl font-black text-[#0A0F1F] leading-none mb-0.5">{stat.value}</div>
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

      {/* === 3. START IN STYLE — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <Sparkles size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Start in Style</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Establish in the Center of <span className="gradient-text">Dubai's Creative Economy</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">D3 is an ecosystem that fosters growth and collaboration — surrounded by industry leaders, entrepreneurs, and visionaries.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-pink-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Building2 size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Company Establishment</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">FZE, FZCO, or branch office — we set it up correctly.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Layers size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Correct Legal Structure</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Sole proprietorship, partnership — we guide the right choice.</p>
            </motion.div>

            {/* Small card 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-purple-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <FileText size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Business License Assistance</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Trade, service, or industrial license — keeping you compliant.</p>
            </motion.div>

            {/* Large card — The Ultimate Creative Hub */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-12 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-full min-h-[320px]">
                <img src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=1600&q=80" alt="Creative Hub" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/90 via-pink-600/80 to-fuchsia-700/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative p-8 md:p-10 h-full flex flex-col justify-between min-h-[320px]">
                  <div className="w-20 h-20 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                    <Sparkles size={36} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">The Ultimate Creative Hub</h3>
                    <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed max-w-2xl">Be part of the D3 ecosystem — surrounded by industry leaders, entrepreneurs, and visionary individuals in design, technology, and media. Creativity, innovation, and collaboration at every step.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. BUSINESS ACTIVITIES — Full-Width Image Cards === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Target size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Activities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Endless Creative <span className="gradient-text">Business Options</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Whether it's fashion, art, design, or technology — be part of a vibrant creative community.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activities.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-[500px]">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="relative h-full p-7 flex flex-col justify-between">
                      <div className={`w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={30} className="text-white" strokeWidth={2.2} />
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">{item.title}</h3>
                        <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. WORKSPACE OPTIONS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <Building2 size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Workspaces</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Workspaces That <span className="gradient-text">Empower Growth</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">From coworking environments for freelancers to executive office suites for larger teams.</p>
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

      {/* === 6. VISA SERVICES — Passport Stamp Cards === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <UserCheck size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Visa & Immigration</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Move Freely, <span className="gradient-text">Build Boldly</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Easy access to visa services for you, your employees, and family members.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visaServices.map((visa, i) => {
              const Icon = visa.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative rounded-3xl bg-white border-2 border-dashed border-rose-100 hover:border-rose-300 p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
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
                      <Send size={10} className="text-rose-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. BUSINESS GROWTH SUPPORT === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-soft mb-6">
              <TrendingUp size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-rose-700">Scale Smarter</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Business Growth <span className="gradient-text">& Support Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We don't just include setup — we help you scale successfully in Dubai's competitive market.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {growthSupport.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(244,63,94,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{item.title}</h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. STRATEGIC LOCATION (DARK) — Split === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-rose-950 via-pink-950 to-fuchsia-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-rose-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-fuchsia-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80" alt="d3 Location" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Located in</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Downtown Dubai District</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Compass size={14} className="text-rose-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Strategic Roots, Global Reach</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Strategic Location & <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">Competitive Advantages</span>
              </h2>

              <div className="space-y-3">
                {strategicAdvantages.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-rose-400/40 transition-all duration-300 group">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-white mb-0.5">{item.title}</h3>
                        <p className="text-xs text-white/70 font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 9. WHY CHOOSE US — Numbered List with Images === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-rose-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              We Simplify <span className="gradient-text">Your Start</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your trusted partner with years of experience setting up businesses in Dubai Design District.</p>
          </motion.div>

          <div className="space-y-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`grid lg:grid-cols-12 gap-6 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
                  {/* Image */}
                  <div className={`lg:col-span-4 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500">
                      <img src={item.image} alt={item.title} className="w-full h-[220px] object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 mix-blend-multiply`} />
                      <div className="absolute top-4 left-4">
                        <span className="text-6xl font-black text-white/30 leading-none">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <Icon size={26} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="pt-1">
                        <h3 className="text-xl font-black text-[#0A0F1F] mb-2 leading-tight">{item.title}</h3>
                        <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[140px] pointer-events-none" />

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
                Everything you need to know about Dubai Design District. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Palette size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our D3 specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Dubai Design District.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-rose-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your D3 setup.</p>
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
                      <ArrowRight size={14} className="text-rose-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-pink-900/70 to-rose-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Create Your Future</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Launch in <span className="text-rose-300">D3?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the setup process — from license to launch.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for D3 setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-rose-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'Creative Ecosystem', '3-7 Days Setup'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-rose-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss D3 setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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