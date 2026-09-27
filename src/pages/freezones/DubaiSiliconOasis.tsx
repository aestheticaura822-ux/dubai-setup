import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Clock,
  Plane,
  Users,
  FileText,
  DollarSign,
  Zap,
  Target,
  Rocket,
  Star,
  Code,
  Store,
  Landmark,
  FileCheck,
  MapPin,
  BadgeCheck,
  Layers,
  Factory,
  Heart,
  Cpu,
  Bot,
  Wifi,
  Server,
  ShoppingCart,
  Truck,
  GraduationCap,
  Home as Home2,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Clock, value: '3-5', label: 'Days Setup', color: 'from-indigo-400 to-purple-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-violet-400 to-purple-600' },
  { icon: DollarSign, value: '0%', label: 'Income Tax', color: 'from-emerald-400 to-teal-600' },
  { icon: Users, value: '5000+', label: 'Companies', color: 'from-amber-400 to-orange-600' },
];

const whyChoose = [
  {
    icon: Cpu,
    title: 'Smart Tech Hub',
    description: 'Dubai\'s premier innovation district for AI, software, robotics, and future industries.',
    color: 'from-indigo-400 to-purple-600',
    size: 'large',
  },
  {
    icon: GraduationCap,
    title: 'Talent Access',
    description: 'Near top universities and innovation centers.',
    color: 'from-violet-400 to-purple-600',
    size: 'small',
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    description: '3-5 day license processing.',
    color: 'from-amber-400 to-orange-600',
    size: 'small',
  },
  {
    icon: Server,
    title: 'Advanced Infrastructure',
    description: 'Data centers, innovation labs, logistics hubs, and secure workspaces.',
    color: 'from-cyan-400 to-teal-600',
    size: 'large',
  },
  {
    icon: ShieldCheck,
    title: 'Smart Regulations',
    description: 'Friendlier business-friendly legal framework.',
    color: 'from-emerald-400 to-teal-600',
    size: 'small',
  },
];

const smartCityFeatures = [
  { icon: Building2, title: 'Office Infrastructure', description: 'Co-working spaces, executive suites, innovation labs, logistics hubs, and secure data centers.' },
  { icon: Home2, title: 'Community & Liveability', description: 'Smart villas, international schools, gyms, shops, and eco-parks for a balanced lifestyle.' },
  { icon: Layers, title: 'All-inclusive Support', description: 'Website, e-commerce, CRM, branding, banking, VAT, bookkeeping — all in-house.' },
  { icon: MapPin, title: 'Strategic Location', description: 'Only 20 mins from DXB Airport with direct access to major highways.' },
  { icon: Plane, title: 'Visa & Immigration', description: 'End-to-end visa lifecycle — investor, employee, and dependent visas.' },
];

const setupSteps = [
  { step: '01', title: 'Choose Business Activity', description: 'Select from DSO\'s approved tech and innovation activities including software, AI, and e-commerce.', icon: Target, color: 'from-indigo-400 to-purple-600' },
  { step: '02', title: 'Pick Legal Structure', description: 'FZE for single shareholders, FZCO for multiple, or Branch Office for existing companies.', icon: Building2, color: 'from-violet-400 to-purple-600' },
  { step: '03', title: 'Reserve Trade Name', description: 'Submit your company name for approval following DSO naming guidelines.', icon: FileText, color: 'from-amber-400 to-orange-600' },
  { step: '04', title: 'Submit Documents', description: 'Passport copies, photos, application form, and any additional required documents.', icon: FileCheck, color: 'from-emerald-400 to-teal-600' },
  { step: '05', title: 'License Issued', description: 'Receive your Trade, Service, Industrial, or E-commerce license within days.', icon: BadgeCheck, color: 'from-cyan-400 to-teal-600' },
  { step: '06', title: 'Visa & Bank Account', description: 'Apply for residency visas and open a corporate bank account to start operating.', icon: Landmark, color: 'from-pink-400 to-rose-600' },
];

const licenses = [
  { icon: Store, title: 'Trade License', description: 'For buying and selling of goods.', color: 'from-indigo-400 to-purple-600' },
  { icon: Briefcase, title: 'Service License', description: 'For consultancies, software, and media.', color: 'from-violet-400 to-purple-600' },
  { icon: Factory, title: 'Industrial License', description: 'For manufacturing and industrial activities.', color: 'from-amber-400 to-orange-600' },
  { icon: ShoppingCart, title: 'E-commerce License', description: 'For digital and online stores.', color: 'from-emerald-400 to-teal-600' },
];

const activities = [
  { icon: Code, label: 'Software & App Development' },
  { icon: Bot, label: 'AI & Machine Learning' },
  { icon: Cpu, label: 'Robotics & Automation' },
  { icon: Wifi, label: 'IoT & Smart Devices' },
  { icon: ShieldCheck, label: 'Cybersecurity' },
  { icon: Layers, label: 'Blockchain' },
  { icon: Server, label: 'Data Centers' },
  { icon: MicrochipIcon, label: 'Electronics Assembly' },
  { icon: ShoppingCart, label: 'E-commerce' },
  { icon: Truck, label: 'Logistics Platforms' },
  { icon: TrendingUp, label: 'Fintech' },
  { icon: Heart, label: 'Biotech' },
];

const whoShould = [
  { icon: Cpu, title: 'AI & Robotics', description: 'Artificial intelligence and robotics companies.', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80', color: 'from-indigo-400 to-purple-600' },
  { icon: Code, title: 'Software & Apps', description: 'Software, app, and platform developers.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', color: 'from-violet-400 to-purple-600' },
  { icon: ShieldCheck, title: 'Cybersecurity', description: 'Cybersecurity and blockchain firms.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', color: 'from-cyan-400 to-teal-600' },
  { icon: ShoppingCart, title: 'E-commerce', description: 'Online businesses and digital platforms.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', color: 'from-emerald-400 to-teal-600' },
  { icon: Factory, title: 'Advanced Manufacturing', description: 'Electronics assembly and chip design.', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80', color: 'from-amber-400 to-orange-600' },
  { icon: Truck, title: 'Logistics Tech', description: 'Supply chain and logistics platforms.', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80', color: 'from-pink-400 to-rose-600' },
];

const faqs = [
  { q: 'What is Dubai Silicon Oasis Free Zone and who should set up here?', a: 'DSO is a government-backed innovation park and free zone designed for tech-enabled businesses, startups, and advanced manufacturing. Ideal for AI, software, robotics, e-commerce, fintech, and IoT companies.' },
  { q: 'What licenses are available in DSO?', a: 'Trade License (buying/selling goods), Service License (consultancies, software, media), Industrial License (manufacturing), and E-commerce License (online stores).' },
  { q: 'Can a freelancer register a company in DSO?', a: 'Yes. DSO offers freelancer permits and cost-effective packages for individual professionals.' },
  { q: 'What is the time frame to set up a DSO company?', a: 'Typically 3-5 business days depending on documentation and license type.' },
  { q: 'What documents do I need?', a: 'Passport copies, digital photos, application form, business plan (for some activities), and NOC if applicable.' },
  { q: 'Can I apply for visas under my DSO company?', a: 'Yes. DSO allows visa quotas based on office type and size — investor, employee, and dependent visas.' },
  { q: 'What kinds of offices are available?', a: 'Co-working spaces, executive suites, private offices, innovation labs, logistics hubs, and data centers.' },
  { q: 'What are the setup costs?', a: 'Starting from approximately AED 15,500 depending on activity, structure, and package. Contact us for a custom quote.' },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-sky-400 to-blue-600' },
  { slug: 'web-development', title: 'Web Development', description: 'Modern websites for tech businesses.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80', gradient: 'from-violet-400 to-purple-600' },
  { slug: 'golden-visa', title: 'Golden Visa', description: '10-year UAE residency for investors and talents.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-500' },
];

// Helper for chip icon
function MicrochipIcon({ size = 20, className = '', strokeWidth = 2.5 }: any) {
  return <Cpu size={size} className={className} strokeWidth={strokeWidth} />;
}

// ============ COMPONENT ============
export default function DubaiSiliconOasis() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO BANNER === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-purple-900/75 to-indigo-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <Cpu size={100} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block">
          <Rocket size={80} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">Dubai Silicon Oasis</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Launch Smart. Grow Fast.</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Dubai Silicon Oasis <span className="text-indigo-300">Free Zone</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Build your future in Dubai's smart tech hub. Purpose-built smart city for
                entrepreneurs, innovators, and future businesses — AI, robotics, e-commerce,
                and software.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Dubai Silicon Oasis Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', 'Zero Tax', '3-5 Days Setup'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Circular floating cards */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-40 blur-[100px]" />
              
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-indigo-300 shadow-[0_0_20px_rgba(129,140,248,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              </motion.div>

              {/* Circular card 1 */}
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-0 right-0 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-40 blur-2xl rounded-full" />
                  <div className="relative w-[220px] h-[220px] rounded-full bg-white/95 backdrop-blur-2xl border-2 border-white shadow-2xl flex flex-col items-center justify-center p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg mb-3">
                      <Cpu size={26} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-3xl font-black text-indigo-600 mb-1">Tech</div>
                    <div className="text-xs font-bold text-txt-muted uppercase tracking-widest text-center">Smart City Hub</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Circular card 2 */}
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.0, type: 'spring', stiffness: 80 }} className="absolute bottom-0 left-0 z-20">
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 opacity-40 blur-2xl rounded-full" />
                  <div className="relative w-[200px] h-[200px] rounded-full bg-white/95 backdrop-blur-2xl border-2 border-white shadow-2xl flex flex-col items-center justify-center p-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg mb-2">
                      <Rocket size={22} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-2xl font-black text-violet-600 mb-1">5,000+</div>
                    <div className="text-[10px] font-bold text-txt-muted uppercase tracking-widest text-center">Businesses</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. STATS ROW — Horizontal Bar Style === */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 flex items-center gap-4 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.color}`} />
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#0A0F1F] leading-none mb-0.5">{stat.value}</div>
                      <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHAT IS DSO === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-indigo-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80" alt="Dubai Silicon Oasis" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Located in</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Dubai Silicon Oasis</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-indigo-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Tech Hub of Dubai</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Why Choose Dubai Silicon Oasis{' '}
                <span className="gradient-text">Free Zone?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  Dubai Silicon Oasis Free Zone (DSO) is an <span className="font-black text-[#0A0F1F]">award-winning innovation district</span>, created for startups, tech companies, and advanced manufacturers.
                </p>
                <p>
                  It blends a prime Dubai location with smart city living — providing business owners a uniquely designed platform from which to innovate, interact, and grow. Access to talent, solid legal frameworks, advanced smart infrastructure, and friendlier regulations make DSO a platform that allows businesses to <span className="font-black text-[#0A0F1F]">future-proof themselves</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Award-Winning District', 'Smart City Living', 'Advanced Infrastructure', 'Global Market Access'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
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

      {/* === 4. BENTO GRID — Why Choose (Different Style) === */}
      <section className="relative py-14 md:py-20 bg-indigo-50/40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Star size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Why DSO</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Your Gateway to{' '}
              <span className="gradient-text">Tech Innovation</span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Large card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 p-7 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Cpu size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg">
                  <Cpu size={30} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Smart Tech Hub</h3>
                  <p className="text-sm md:text-base text-white/85 font-medium leading-relaxed max-w-md">Dubai's premier innovation district for AI, software, robotics, and future industries.</p>
                </div>
              </div>
            </motion.div>

            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <GraduationCap size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-black text-[#0A0F1F] mb-2">Talent Access</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Near top universities and innovation centers for skilled workforce.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-5 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Zap size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-black text-[#0A0F1F] mb-2">Fast Setup</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">3-5 day license processing — the fastest among tech free zones.</p>
            </motion.div>

            {/* Large card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500 via-teal-600 to-cyan-700 p-7 min-h-[280px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Server size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg">
                  <Server size={30} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Advanced Infrastructure</h3>
                  <p className="text-sm md:text-base text-white/85 font-medium leading-relaxed max-w-md">Data centers, innovation labs, logistics hubs, and secure workspaces all in one ecosystem.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 5. SMART CITY FEATURES (DARK) — Icon + Text Style === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Building2 size={14} className="text-indigo-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Smart City Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Everything in{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                One Smart City
              </span>
            </h2>
            <p className="text-base text-white/75 font-medium">Business, life, and innovation — all integrated.</p>
          </motion.div>

          {/* Icon + Text style (no cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {smartCityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex gap-5 group">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg md:text-xl font-black text-white mb-2 leading-tight">{feature.title}</h3>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. SETUP PROCESS — Vertical Timeline (Different Style) === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Rocket size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Setup Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Smart Setup in a{' '}
              <span className="gradient-text">Smart City</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">A streamlined 6-step process from activity selection to bank account opening.</p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-200 via-violet-200 to-indigo-200" />

            {setupSteps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: isLeft ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className={`relative flex items-center gap-8 mb-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  {/* Content */}
                  <div className="flex-1 md:text-right w-full md:w-auto">
                    <div className={`relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group ${!isLeft ? 'md:text-left' : ''}`}>
                      <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} h-full w-1 bg-gradient-to-b ${step.color}`} />
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform order-${isLeft ? '2' : '1'}`}>
                          <Icon size={18} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className={`text-[10px] font-black text-txt-muted uppercase tracking-widest order-${isLeft ? '1' : '2'}`}>Step {step.step}</span>
                      </div>
                      <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex relative z-10 flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} shadow-lg ring-4 ring-white`} />
                  </div>

                  {/* Empty space */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. LICENSE TYPES — Horizontal Strip Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <FileText size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">License Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              DSO Business <span className="gradient-text">Licenses</span>
            </h2>
          </motion.div>

          {/* Horizontal Strip Cards */}
          <div className="space-y-4">
            {licenses.map((license, i) => {
              const Icon = license.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-white border border-border hover:border-transparent hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-x-0 transition-all duration-500 overflow-hidden">
                    {/* Left gradient */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${license.color} group-hover:w-2 transition-all duration-300`} />

                    {/* Number */}
                    <div className="hidden md:block text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-black text-[#0A0F1F] mb-1 leading-tight">{license.title}</h3>
                      <p className="text-sm text-[#64748B] font-medium">{license.description}</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-border flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-400 group-hover:to-purple-500 group-hover:border-transparent transition-all duration-300">
                        <ArrowRight size={16} className="text-[#64748B] group-hover:text-white group-hover:translate-x-0.5 transition-all" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. BUSINESS ACTIVITIES — Chip/Tag Style === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Target size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Activities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Where Ideas <span className="gradient-text">Take Off</span>
            </h2>
            <p className="text-base text-[#475569] font-medium max-w-2xl mx-auto">
              DSO supports a broad spectrum of cutting-edge industries. If you're in tech, DSO is where your competitors, partners, and customers already hang out.
            </p>
          </motion.div>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 cursor-default">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                      <Icon size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-[#0A0F1F]">{activity.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 max-w-3xl mx-auto p-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-dashed border-indigo-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
              <Sparkles size={22} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-base font-black text-[#0A0F1F] mb-1.5">Need help choosing?</h3>
              <p className="text-sm text-[#475569] font-medium leading-relaxed">
                We help you define your business activity and make sure it fits within DSO's approved permitted categories — while staying flexible for future growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === 9. WHO SHOULD — Image Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-soft mb-6">
              <Users size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-indigo-700">Who It's For</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Who Should Establish in <span className="gradient-text">DSO?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Perfect for these industries and business types.</p>
          </motion.div>

          {/* Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoShould.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80 }} className="group relative rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-black text-white leading-tight drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. FAQ === */}
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
                Everything you need to know about Dubai Silicon Oasis Free Zone. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our DSO specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Dubai Silicon Oasis Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-indigo-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative rounded-3xl bg-white border border-border hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-purple-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-indigo-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-indigo-400 group-open:to-purple-600 group-open:border-transparent transition-all duration-300">
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

      {/* === 11. RELATED SERVICES + FINAL CTA === */}
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
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-purple-900/70 to-indigo-900/50" />
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
                    Ready to Launch in <span className="text-indigo-300">Dubai Silicon Oasis?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the setup process — from activity selection to license issuance and bank account opening.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for Dubai Silicon Oasis Free Zone setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '5000+ Clients', '3-5 Days Setup'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-indigo-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss Dubai Silicon Oasis setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
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