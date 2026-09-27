import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Rocket, Crown, Store,  Landmark,  MapPin, BarChart3,
   CreditCard, Scale,Plane,
  FileBadge, UserCheck, Boxes, Send, 
  RefreshCw, Cpu, Monitor, Megaphone,  MonitorPlay, Blocks, Compass, 
  Receipt,  Coins,
   Landmark as Bank,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Crown, value: '$1T+', label: 'Trillion Dollar Zone', color: 'from-indigo-400 to-violet-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-violet-400 to-purple-600' },
  { icon: DollarSign, value: '0%', label: 'Income Tax', color: 'from-emerald-400 to-teal-600' },
  { icon: Clock, value: 'Fast', label: 'Registration', color: 'from-amber-400 to-orange-600' },
];

const whyADGM = [
  { icon: Globe, title: '100% Foreign Ownership', description: 'Full ownership of your business with no local sponsor required.', color: 'from-indigo-400 to-violet-600' },
  { icon: DollarSign, title: 'Zero Income Tax', description: 'No corporate or personal income tax — maximum profitability.', color: 'from-violet-400 to-purple-600' },
  { icon: Bank, title: 'Global Banking Access', description: 'Recognized worldwide banking, legal, and financial systems.', color: 'from-purple-400 to-fuchsia-600' },
  { icon: Zap, title: 'Streamlined Registration', description: 'Fast and efficient business registration process.', color: 'from-amber-400 to-orange-600' },
  { icon: Scale, title: 'English Common Law', description: 'Regulated by globally recognized authority following English common law.', color: 'from-cyan-400 to-blue-600' },
  { icon: Coins, title: 'Perfect for Fintech', description: 'Ideal for fintech, wealth management, crypto, and professional services.', color: 'from-emerald-400 to-teal-600' },
];

const licenseTypes = [
  { icon: Store, title: 'ADGM Commercial License', description: 'For businesses who trade and provide services.', code: 'COM', color: 'from-indigo-400 to-violet-600' },
  { icon: Briefcase, title: 'ADGM Professional License', description: 'For consultants, professional services, legal, or IT.', code: 'PRO', color: 'from-violet-400 to-purple-600' },
  { icon: Building2, title: 'ADGM Holding Company License', description: 'For asset protection and cross-border investments.', code: 'HLD', color: 'from-purple-400 to-fuchsia-600' },
  { icon: Boxes, title: 'ADGM SPV', description: 'Special Purpose Vehicle for structuring and investment holding.', code: 'SPV', color: 'from-amber-400 to-orange-600' },
  { icon: Cpu, title: 'ADGM Fintech License', description: 'For modern digital finance and innovation.', code: 'FIN', color: 'from-cyan-400 to-blue-600' },
  { icon: Blocks, title: 'Digital Assets & Crypto License', description: 'For regulated blockchain businesses.', code: 'CRY', color: 'from-emerald-400 to-teal-600' },
];

const visaServices = [
  { icon: UserCheck, title: 'Investor & Partner Visas', description: 'For business owners and shareholders in ADGM.', stampColor: 'from-indigo-500 to-violet-600' },
  { icon: Briefcase, title: 'Employment Visas', description: 'For employees sponsored by your ADGM company.', stampColor: 'from-violet-500 to-purple-600' },
  { icon: Users, title: 'Family Visa Applications', description: 'For spouse, children, and dependents.', stampColor: 'from-purple-500 to-fuchsia-600' },
  { icon: RefreshCw, title: 'Visa Renewals & Transfers', description: 'Full lifecycle support for all visa types.', stampColor: 'from-amber-500 to-orange-600' },
];

const officeOptions = [
  { icon: Monitor, title: 'Coworking Spaces', description: 'Flexible shared workspaces for startups and freelancers.', color: 'from-indigo-400 to-violet-600', size: 'small' },
  { icon: Briefcase, title: 'Flexi Desks', description: 'Cost-effective shared desks with premium amenities.', color: 'from-violet-400 to-purple-600', size: 'small' },
  { icon: Building2, title: 'Private Offices', description: 'Customizable secure spaces in Al Maryah Island — perfect for growing firms.', color: 'from-purple-400 to-fuchsia-600', size: 'large' },
  { icon: Globe, title: 'Virtual Offices', description: 'Ideal for remote businesses needing an ADGM legal presence.', color: 'from-cyan-400 to-blue-600', size: 'small' },
];

const businessSupport = [
  { icon: Scale, title: 'Legal Advisory', description: 'Contracts, compliance, and regulatory filings.' },
  { icon: CreditCard, title: 'Banking Services', description: 'Corporate and personal accounts with UAE banks.' },
  { icon: BarChart3, title: 'Accounting & Auditing', description: 'VAT compliance and financial reporting.' },
  { icon: FileBadge, title: 'PRO Services', description: 'Documentation, licensing renewals, and approvals.' },
  { icon: MonitorPlay, title: 'Website Development', description: 'SEO-optimized websites and CRM setup.' },
  { icon: Megaphone, title: 'Digital Branding', description: 'Brand identity and lead generation support.' },
];

const strategicAdvantages = [
  { icon: MapPin, title: 'Al Maryah Island', description: 'Located in Abu Dhabi\'s premier financial district.' },
  { icon: Blocks, title: 'Digital Asset Friendly', description: 'One of the few zones supporting digital assets and SPVs legally.' },
  { icon: Plane, title: 'Airport Proximity', description: 'Close to Abu Dhabi International Airport, embassies, and government authorities.' },
  { icon: Globe, title: 'Global Investment Hub', description: 'A central hub for international business and investment.' },
  { icon: ShieldCheck, title: 'FSRA Regulated', description: 'Regulated by the Financial Services Regulatory Authority.' },
  { icon: Landmark, title: 'Prestigious Address', description: 'Enhances brand credibility and investor confidence.' },
];

const whyChooseUs = [
  { icon: Award, title: 'All-in-One Packages', description: 'Complete ADGM setup, licensing, and visa processing.', color: 'from-indigo-400 to-violet-600' },
  { icon: Target, title: 'Expert Consultation', description: 'Tailored advice based on your industry and legal needs.', color: 'from-violet-400 to-purple-600' },
  { icon: Receipt, title: 'Transparent Pricing', description: 'Clear pricing with no hidden charges.', color: 'from-purple-400 to-fuchsia-600' },
  { icon: Rocket, title: 'Full Support', description: 'Digital branding, CRM setup, SEO, and lead generation.', color: 'from-amber-400 to-orange-600' },
];

const faqs = [
  { q: 'How do I establish a business in ADGM?', a: 'Register through the Registration Authority. We act on your behalf for trade name reservation, license application, legal structure, and visa services — start to finish.' },
  { q: 'What types of licenses are available in ADGM?', a: 'Commercial, Professional, Holding Company, SPV, Fintech, and Digital Assets/Crypto licenses — each tailored to different business models.' },
  { q: 'Is ADGM for just startups or international businesses?', a: 'ADGM is for both. From fintech startups to multinational corporations, SPVs, and holding companies — ADGM supports all sizes and stages.' },
  { q: 'What is an ADGM SPV and who can use it?', a: 'SPV (Special Purpose Vehicle) is used for structuring, investment holding, and asset protection — ideal for cross-border investors.' },
  { q: 'Can I open a bank account for an ADGM company?', a: 'Yes. ADGM\'s global banking ties make corporate account opening easier with top UAE and international banks.' },
  { q: 'Do I need office space to register in ADGM?', a: 'Yes, you need a physical or virtual office presence. We offer flexible options including coworking, flexi desks, private, and virtual offices.' },
  { q: 'What is the ADGM visa process?', a: 'We handle the full process: entry permits, medical tests, Emirates ID, and residence visa stamping — for investors, employees, and family members.' },
  { q: 'How quickly can I establish an ADGM company?', a: 'Typically 1-2 weeks depending on documentation and license type. We fast-track the process where possible.' },
  { q: 'Is ADGM regulated as a financial business?', a: 'Yes. ADGM is regulated by the Financial Services Regulatory Authority (FSRA) and follows English common law.' },
  { q: 'Why should I engage Setup Zone Dubai for ADGM setup?', a: 'We offer all-in-one packages, expert consultation, transparent pricing, and full post-setup support — with government ties for fast processing.' },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-indigo-400 to-violet-600' },
  { slug: 'compliance', title: 'Compliance Services', description: 'UBO, ESR, AML, and VAT advisory.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-cyan-400 to-blue-600' },
  { slug: 'golden-visa', title: 'Golden Visa', description: '10-year UAE residency for investors.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-500' },
];

// ============ COMPONENT ============
export default function ADGM() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO — Financial Dashboard === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-violet-900/75 to-indigo-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Landmark size={120} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">ADGM</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Crown size={14} className="text-indigo-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Trillion Dollar Financial Zone</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                ADGM <span className="text-indigo-300">Free Zone</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Abu Dhabi Global Market — a globally renowned financial free zone leading the charge on progressive regulations. Perfect for fintech, crypto, SPVs, and holding companies.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in ADGM Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', 'FSRA Regulated'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Financial Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-indigo-300 shadow-[0_0_20px_rgba(129,140,248,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-violet-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-emerald-300" />
              </motion.div>

              {/* Financial Dashboard Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Landmark size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">ADGM Dashboard</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      {/* Balance */}
                      <div className="mb-5">
                        <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest mb-1">Business Zone</div>
                        <div className="text-3xl font-black text-[#0A0F1F] leading-none mb-1">$1 Trillion+</div>
                        <div className="flex items-center gap-1.5">
                          <TrendingUp size={12} className="text-emerald-600" />
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Global financial hub</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Ownership</div>
                          <div className="text-lg font-black text-indigo-600">100%</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Tax Rate</div>
                          <div className="text-lg font-black text-emerald-600">0%</div>
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Financial Growth</span>
                          <span className="text-[9px] font-black text-emerald-600">↑ 240%</span>
                        </div>
                        <div className="flex items-end gap-1 h-12">
                          {[30, 50, 40, 65, 55, 80, 95, 75, 100].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 0.8, delay: 1 + i * 0.08 }}
                              className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-violet-400"
                            />
                          ))}
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

      {/* === 2. STATS ROW — Vertical Bar Style === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative rounded-2xl bg-white border border-border overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-5 flex flex-col items-center text-center">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-3xl font-black text-[#0A0F1F] leading-none mb-1.5">{stat.value}</div>
                    <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHY ADGM — Hexagon Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Award size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Why ADGM</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Set Up a Business in <span className="gradient-text">ADGM Free Zone?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">One of the most sophisticated and reputable regulatory environments in the Middle East.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyADGM.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] leading-tight pt-1">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 4. BEGIN JOURNEY (DARK) — Split Image + Text === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-600 opacity-30 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1200&q=80" alt="ADGM" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Located in</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Al Maryah Island, Abu Dhabi</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Sparkles size={14} className="text-indigo-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Begin Your ADGM Journey</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Start Your Business in <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">ADGM</span>
              </h2>

              <div className="space-y-5 text-base text-white/80 font-medium leading-relaxed">
                <p>
                  Starting your business in ADGM (Abu Dhabi Global Market) is not just about company registration — it's about engaging with one of the most <span className="font-black text-white">prestigious, dynamic financial hubs</span> in the world.
                </p>
                <p>
                  Dubbed a <span className="font-black text-white">Trillion Dollar Financial Zone</span>, ADGM is an elite marketplace for entrepreneurs, investors, and corporate leaders who want to transact with confidence.
                </p>
                <p>
                  Whether you're a startup founder, a seasoned investor, or a corporate strategist — ADGM offers the perfect environment to grow your dreams with a collaborative ecosystem and world-class regulatory framework.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Prestigious Financial Hub', 'Regulated by FSRA', 'Global Access', 'Innovation Ecosystem'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center">
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

      {/* === 5. LICENSE OPTIONS — Certificate Style === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <FileText size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">License Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              ADGM Business <span className="gradient-text">License Types</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Get the appropriate license based on your business activities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {licenseTypes.map((license, i) => {
              const Icon = license.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${license.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative rounded-3xl bg-white border border-border overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 p-6">
                    {/* Top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${license.color}`} />

                    {/* Certificate header */}
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-dashed border-border">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${license.color} shadow-md`}>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{license.code}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{license.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4">{license.description}</p>

                    {/* Bottom cert-style bar */}
                    <div className="pt-4 border-t border-dashed border-border flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${license.color}`} />
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Available Now</span>
                    </div>
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
              <UserCheck size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Visa Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Visa & Immigration <span className="gradient-text">Assistance</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Faster visa processing for both investors and employees.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visaServices.map((visa, i) => {
              const Icon = visa.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative">
                  <div className="relative rounded-3xl bg-white border-2 border-dashed border-indigo-100 hover:border-indigo-300 p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    {/* Stamp circle top-right */}
                    <div className={`absolute top-4 right-4 w-14 h-14 rounded-full border-2 border-dashed bg-gradient-to-br ${visa.stampColor} opacity-30 group-hover:opacity-60 group-hover:rotate-12 transition-all duration-700 flex items-center justify-center`}>
                      <span className="text-[7px] font-black text-white uppercase tracking-widest text-center leading-tight">APPROVED</span>
                    </div>

                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${visa.stampColor} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>

                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{visa.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{visa.description}</p>

                    <div className="mt-4 pt-3 border-t border-dashed border-indigo-100 flex items-center gap-2">
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-300 to-transparent rounded" />
                      <Send size={10} className="text-indigo-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. OFFICE SOLUTIONS — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Building2 size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Office Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Modern Office <span className="gradient-text">Solutions in ADGM</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Premium coworking spaces, flexi desks, private offices, and virtual offices in Al Maryah Island.</p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small - Coworking */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-violet-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Monitor size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Coworking Spaces</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Flexible shared workspaces for startups and freelancers.</p>
            </motion.div>

            {/* Small - Flexi */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Briefcase size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Flexi Desks</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Cost-effective shared desks with premium amenities.</p>
            </motion.div>

            {/* Small - Virtual */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Globe size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Virtual Offices</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Ideal for remote businesses needing an ADGM legal presence.</p>
            </motion.div>

            {/* Large - Private Office */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-12 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-violet-600 to-fuchsia-600 p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Building2 size={180} className="text-white" />
              </motion.div>
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Building2 size={30} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Private Offices</h3>
                  <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-3xl">
                    Customizable secure spaces in Al Maryah Island — perfect for growing firms. Get guidance on the best office solution based on your visa quota, budget, and operational requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 8. BUSINESS SUPPORT — Horizontal Chip Cards === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Support Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Complete Support <span className="gradient-text">by Setup Zone Dubai</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We continue to support you to ensure your business is successful.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businessSupport.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative flex items-start gap-4 p-5 rounded-2xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-base font-black text-[#0A0F1F] mb-1 leading-tight">{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. STRATEGIC LOCATION (DARK) — Icon + Text === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Compass size={14} className="text-indigo-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Strategic Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Key Benefits of ADGM's <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">Location & Ecosystem</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {strategicAdvantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="flex gap-5 group">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg md:text-xl font-black text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. WHY CHOOSE US — Numbered List with Images === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Award size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Choose <span className="gradient-text">Setup Zone Dubai?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Transparency, efficiency, and personalized service for your ADGM journey.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative flex items-center gap-6 p-6 rounded-3xl bg-white border border-border hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:-translate-x-1 transition-all duration-500 overflow-hidden">
                  <div className="flex-shrink-0 relative">
                    <div className={`text-6xl md:text-7xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity leading-none`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-1 leading-tight">{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                  </div>

                  <ArrowRight size={16} className="hidden md:block text-[#64748B] group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 11. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about ADGM Free Zone. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-indigo-500 via-violet-600 to-fuchsia-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Landmark size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our ADGM specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about ADGM Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-indigo-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-violet-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-violet-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-indigo-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-indigo-400 group-open:to-violet-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-indigo-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

      {/* === 12. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-indigo-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Free Zone setup.</p>
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
                      <ArrowRight size={14} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-violet-900/70 to-indigo-900/50" />
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
                    Ready to Launch in <span className="text-indigo-300">ADGM?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the setup process — from license selection to bank account opening.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for ADGM setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'FSRA Regulated', 'Fast Setup'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss ADGM setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-indigo-600 hover:text-indigo-700 transition">
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