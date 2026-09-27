import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
   Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Target,Search, Rocket,
  Store, Package,  FileCheck, MapPin, 
  BadgeCheck, Layers,ShoppingCart, CreditCard, 
  UserCheck, RefreshCw, Cpu, Monitor,ClipboardCheck,
  Megaphone,  Code, Smartphone, Database, Wifi, Server, Cloud,
  Palette,  Terminal, Binary, 
  Bot, Camera, 
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Clock, value: '3-7', label: 'Days Setup', color: 'from-cyan-400 to-blue-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-blue-400 to-indigo-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-indigo-400 to-violet-600' },
  { icon: Cpu, value: 'Tech', label: 'Innovation Hub', color: 'from-sky-400 to-cyan-600' },
];

const benefits = [
  { icon: Globe, title: '100% Foreign Ownership', description: 'Full control of operations, decisions, and profits — no local sponsor needed.', color: 'from-cyan-400 to-blue-600', size: 'small' },
  { icon: DollarSign, title: '0% Corporate & Personal Tax', description: 'Zero tax on corporate profits and personal income — reinvest more into growth.', color: 'from-blue-400 to-indigo-600', size: 'small' },
  { icon: Package, title: 'No Customs Duties', description: 'Fully exempt from import/export duties — perfect for software, IT hardware, media, cloud services.', color: 'from-indigo-400 to-violet-600', size: 'small' },
  { icon: Users, title: 'Efficient Visa Quota Allocation', description: 'DIC\'s axs platform provides smooth approvals for owners, employees, and dependents — solo traders or full teams.', color: 'from-sky-500 to-cyan-600', size: 'large' },
  { icon: MapPin, title: 'Strategic Location', description: 'On Sheikh Zayed Road — near metro stations, airports, and commercial areas.', color: 'from-violet-400 to-purple-600', size: 'small' },
  { icon: Building2, title: 'Strong Business Infrastructure', description: 'High-tech coworking at D/Quarters, expandable private offices, light industrial units, commercial studios.', color: 'from-cyan-500 to-teal-600', size: 'small' },
];

const licenses = [
  { icon: ShoppingCart, title: 'DIC Commercial License', description: 'Standard trade (goods) online sale and e-commerce businesses.', code: 'COM', color: 'from-cyan-400 to-blue-600' },
  { icon: Code, title: 'IT License', description: 'Software, SaaS, artificial intelligence, and cloud computing companies.', code: 'IT', color: 'from-blue-400 to-indigo-600' },
  { icon: Wifi, title: 'Telecom License', description: 'Connectivity, satellite, or telecom infrastructure companies.', code: 'TEL', color: 'from-indigo-400 to-violet-600' },
  { icon: Palette, title: 'Digital Media License', description: 'Media agencies, content creators, and advertising businesses.', code: 'MED', color: 'from-sky-400 to-cyan-600' },
  { icon: UserCheck, title: 'DIC Freelance Permit', description: 'Individuals (single operator) via GoFreelance.', code: 'FRL', color: 'from-violet-400 to-purple-600' },
  { icon: Server, title: 'Data Centre License', description: 'Data hosting, storage, and enterprise IT businesses.', code: 'DTC', color: 'from-cyan-500 to-teal-600' },
];

const facilities = [
  { icon: Monitor, title: 'Fitted Office Spaces', description: 'Flexible office leases with fully fitted spaces for all sizes.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { icon: Users, title: 'Coworking at D/Quarters', description: 'Plug-and-play office solutions for collaboration and creativity.', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80' },
  { icon: Layers, title: 'Light Industrial Units', description: 'For production, testing, and logistics support.', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80' },
  { icon: Store, title: 'Commercial Retail Spaces', description: 'Customer-facing outlets in a vibrant tech ecosystem.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
];

const howWeHelp = [
  { step: '01', title: 'Business Activities Selection', description: 'We help you choose the right DIC-approved activity aligned with your tech business model.', icon: Target, color: 'from-cyan-400 to-blue-600' },
  { step: '02', title: 'Company Name Reservation', description: 'Reserve your trade name quickly in accordance with DIC regulations.', icon: FileText, color: 'from-blue-400 to-indigo-600' },
  { step: '03', title: 'Document Preparation', description: 'Complete documentation — passport copies, business plan, and required forms.', icon: FileCheck, color: 'from-indigo-400 to-violet-600' },
  { step: '04', title: 'DIC License Approval', description: 'Direct submission through TECOM and axs for fast approval.', icon: BadgeCheck, color: 'from-sky-400 to-cyan-600' },
  { step: '05', title: 'Establishment Card & Visa Quota', description: 'Apply for the DIC establishment card and visa quota applications.', icon: Users, color: 'from-violet-400 to-purple-600' },
  { step: '06', title: 'Bank Account Opening', description: 'Corporate bank account setup with top UAE banks.', icon: CreditCard, color: 'from-cyan-500 to-teal-600' },
  { step: '07', title: 'License Renewal & Compliance', description: 'Ongoing renewal, PRO services, and medical registration.', icon: RefreshCw, color: 'from-blue-500 to-indigo-600' },
];

const digitalScale = [
  { icon: Monitor, title: 'Professional Websites', description: 'Custom websites and e-commerce platforms tailored to your business.' },
  { icon: Layers, title: 'CRM & CMS Integration', description: 'Smart platforms to keep your business digitally operational.' },
  { icon: Search, title: 'SEO Services', description: 'More Google searches and organic traffic for your DIC business.' },
  { icon: Megaphone, title: 'Social Media Marketing', description: 'Build your brand voice and tone across channels.' },
  { icon: Palette, title: 'Logo & Brand Design', description: 'Creative branding advice and design assets.' },
  { icon: Award, title: 'Trademark Registration', description: 'Protect your intellectual property and brand.' },
];

const activities = [
  { icon: Code, label: 'Software Development & SaaS' },
  { icon: Smartphone, label: 'Web & Mobile App Development' },
  { icon: Megaphone, label: 'Digital Advertising & Content' },
  { icon: Server, label: 'Data Centre Management & Hosting' },
  { icon: Terminal, label: 'IT Consulting & Systems Integration' },
  { icon: Wifi, label: 'Telecom & Network Infrastructure' },
  { icon: Camera, label: 'Creative Media & Filmmaking' },
  { icon: Binary, label: 'Academic Research & R&D' },
  { icon: ShoppingCart, label: 'E-commerce & Tech Retail' },
  { icon: Package, label: 'Enterprise Hardware & Software' },
  { icon: Bot, label: 'AI & Machine Learning' },
  { icon: Cloud, label: 'Cloud Services' },
];

const faqs = [
  { q: 'Why is Dubai Internet City (DIC) the most attractive free zone for technology companies?', a: 'DIC is the UAE\'s leading innovation hub for IT, telecom, digital media, and software development — part of TECOM Group with first-class infrastructure, proximity to startup centres, and modern office facilities.' },
  { q: 'What is the cost of setting up a business in Dubai Internet City?', a: 'Costs vary based on license type, office size, and visa requirements. Contact us for a transparent breakdown tailored to your business.' },
  { q: 'What types of licenses are available in Dubai Internet City?', a: 'DIC Commercial, IT, Telecom, Digital Media, Freelance Permit, and Data Centre licenses.' },
  { q: 'Can freelancers or solo professionals register in DIC?', a: 'Yes. DIC offers the Freelance Permit through GoFreelance — perfect for individual tech professionals.' },
  { q: 'What are the benefits of being a DIC Free Zone company regarding visas?', a: 'DIC provides efficient visa quota allocation through the axs platform — for owners, employees, and dependents.' },
  { q: 'Does DIC Free Zone have space for startups and SMEs?', a: 'Yes. D/Quarters coworking spaces and flexible office options are perfect for startups and SMEs.' },
  { q: 'Can I open a corporate bank account with a DIC entity?', a: 'Yes. We help you open a corporate bank account with top UAE banks — with all documents in place.' },
  { q: 'What continued support does Setup Zone Dubai provide after company setup?', a: 'We provide license renewal, compliance, PRO services, medical registration, and digital growth services like websites, SEO, and branding.' },
  { q: 'How long does it take to establish a commercial license in DIC?', a: 'Typically 3-7 business days with all documents ready. Our end-to-end coordination makes it faster.' },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-cyan-400 to-blue-600' },
  { slug: 'web-development', title: 'Web Development', description: 'Modern websites for tech businesses.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80', gradient: 'from-blue-400 to-indigo-600' },
  { slug: 'digital-marketing', title: 'Digital Marketing', description: 'Social media, paid ads, and content strategy.', image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80', gradient: 'from-violet-400 to-purple-600' },
];

// ============ COMPONENT ============
export default function DIC() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/95 via-blue-900/75 to-cyan-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Cpu size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block">
          <Code size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">DIC</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Cpu size={14} className="text-cyan-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Business Begins with Tech</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Dubai Internet City <span className="text-cyan-300">Free Zone</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                The UAE's leading innovation hub for IT, telecom, digital media, and software development companies. Part of TECOM Group — with first-class infrastructure and modern tech facilities.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Dubai Internet City Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', 'TECOM Group'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Tech Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-blue-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-indigo-300" />
              </motion.div>

              {/* Tech Dashboard Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">DIC Terminal</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white/90" />
                        <span className="w-2 h-2 rounded-full bg-white/60" />
                        <span className="w-2 h-2 rounded-full bg-white/30" />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <Code size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">License Type</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Tech & Innovation</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Setup Time</div>
                          <div className="text-lg font-black text-cyan-600">3-7 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Tax Rate</div>
                          <div className="text-lg font-black text-blue-600">0%</div>
                        </div>
                      </div>

                      {/* Tech icons row */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Terminal size={18} className="text-cyan-500" />
                        <Code size={18} className="text-blue-500" />
                        <Database size={18} className="text-indigo-500" />
                        <Cloud size={18} className="text-sky-500" />
                        <Wifi size={18} className="text-violet-500" />
                        <Bot size={18} className="text-purple-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Launch Now</span>
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

      {/* === 3. BENEFITS — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Award size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Strategic Base for Tech</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of Forming in <span className="gradient-text">Dubai Internet City</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">One of the most appealing technology services hub free zones in the Middle East.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Globe size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">100% Foreign Ownership</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Full control of operations, decisions, and profits — no local sponsor needed.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <DollarSign size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">0% Corporate & Personal Tax</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Zero tax on corporate profits and personal income — reinvest more into growth.</p>
            </motion.div>

            {/* Small card 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-violet-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Package size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">No Customs Duties</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Fully exempt from import/export duties — perfect for software, IT hardware, cloud services.</p>
            </motion.div>

            {/* Large card — Visa Quota */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-7 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Users size={160} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <UserCheck size={30} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Efficient Visa Quota Allocation</h3>
                  <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-md">DIC's axs platform provides smooth approvals for owners, employees, and dependents — solo traders or full teams.</p>
                </div>
              </div>
            </motion.div>

            {/* Small card 4 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-5 group relative p-6 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-600 to-violet-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <MapPin size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between min-h-[280px]">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <MapPin size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2">Strategic Location</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">On Sheikh Zayed Road — near metro stations, airports, and commercial areas.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. LICENSE TYPES — Digital Certificate Cards === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileText size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">License Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Flexible Licenses, <span className="gradient-text">Global Reach</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We help you identify the appropriate DIC license for your industry and business model.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {licenses.map((license, i) => {
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
        </div>
      </section>

      {/* === 5. FACILITIES — Image Showcase === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Building2 size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Facilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Facilities Can You <span className="gradient-text">Access in DIC?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Modern infrastructure and all-inclusive workspace options for all organizations.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative rounded-3xl bg-white border border-border overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/70 to-blue-700/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-11 h-11 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={20} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{facility.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{facility.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. HOW WE HELP — Numbered Process === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <ClipboardCheck size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">How We Help</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Start Fast in DIC with <span className="gradient-text">Setup Zone Dubai</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We handle everything from activity selection to bank account opening.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {howWeHelp.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className="absolute top-3 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className={`text-6xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent leading-none`}>
                      {item.step}
                    </span>
                  </div>

                  <div className="relative mb-4">
                    <div className={`absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} blur-md opacity-40 group-hover:opacity-70 transition-opacity`} />
                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="relative text-base font-black text-[#0A0F1F] mb-2 leading-tight pr-12">{item.title}</h3>
                  <p className="relative text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="group relative p-6 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative h-full flex flex-col justify-between min-h-[200px]">
                <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Rocket size={22} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-2 leading-tight">Ready to Launch?</h3>
                  <a href={getWhatsAppLink("Hi! I'm ready to launch my DIC business.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                    Start Now
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. DIGITAL SCALE (DARK) — Split === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-indigo-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80" alt="Digital Scale" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <TrendingUp size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Growth Path</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Startup to Scale-up</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Rocket size={14} className="text-cyan-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Scale Digitally</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Can You Scale Your Business <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Digitally in DIC?</span>
              </h2>

              <p className="text-base text-white/80 font-medium leading-relaxed mb-6">
                Indeed. As the premier tech ecosystem in the Middle East, DIC provides a full innovation ecosystem for your business to grow, develop, and dominate the digital space.
              </p>

              <div className="space-y-2.5">
                {digitalScale.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
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

      {/* === 8. BUSINESS ACTIVITIES — Chip Cloud === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-soft mb-6">
              <Target size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Business Activities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Activities for <span className="gradient-text">Modern Enterprises</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Whether you're in innovation, tech, digital media, or telecom — DIC allows a wide range of activities.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 border border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-default">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                      <Icon size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-[#0A0F1F]">{activity.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[140px] pointer-events-none" />

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
                Everything you need to know about Dubai Internet City. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Cpu size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our DIC specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Dubai Internet City.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
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
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your DIC setup.</p>
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
                      <ArrowRight size={14} className="text-cyan-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-blue-900/70 to-indigo-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Start Today</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Launch in <span className="text-cyan-300">DIC?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the setup process — from license selection to bank account opening.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for DIC setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'TECOM Group', '3-7 Days Setup'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-cyan-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss DIC setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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