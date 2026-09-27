import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Briefcase,
  ShieldCheck,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Clock,
  Users,
  Award,
  FileText,
  DollarSign,
  Zap,
  Target,
  Rocket,
  Star,
  Crown,
  Plane,
  Package,
  Truck,
  Code,
  Store,
  Landmark,
  FileCheck,
  MapPin,
  BarChart3,
  BadgeCheck,
  Layers,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Clock, value: '2-4', label: 'Days Setup', color: 'from-sky-400 to-blue-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-violet-400 to-purple-600' },
  { icon: DollarSign, value: '0%', label: 'Income Tax', color: 'from-emerald-400 to-teal-600' },
  { icon: Users, value: '500+', label: 'Businesses', color: 'from-amber-400 to-orange-600' },
];

const benefits = [
  {
    icon: Globe,
    title: '100% Foreign Ownership',
    description: 'Full control of your company — no local sponsor required. Perfect for international entrepreneurs.',
    color: 'from-sky-400 to-blue-600',
  },
  {
    icon: DollarSign,
    title: 'Zero Tax Benefits',
    description: 'No personal or corporate income tax. Full repatriation of profits and capital.',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    icon: Zap,
    title: 'Fast Registration',
    description: 'Complete setup in just 2-4 business days. Quick approvals and licensing.',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: Plane,
    title: 'Strategic Location',
    description: 'Next to Al Maktoum International Airport and Expo 2020 site — logistics corridor.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    icon: Layers,
    title: 'Flexible Packages',
    description: 'Solutions for startups, SMEs, and multinationals — tailored to your needs.',
    color: 'from-pink-400 to-rose-600',
  },
  {
    icon: Rocket,
    title: 'Startup Ecosystem',
    description: 'Networking, co-working spaces, and business accelerators all in one place.',
    color: 'from-cyan-400 to-sky-600',
  },
];

const setupSteps = [
  {
    step: '01',
    title: 'Identify Business Activity',
    description: 'Choose from logistics, trading, consultancy, e-commerce, IT services, and more.',
    icon: Target,
    color: 'from-sky-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    step: '02',
    title: 'Choose Legal Structure',
    description: 'FZE (single shareholder), FZCO (multiple), or Branch Office for existing companies.',
    icon: Building2,
    color: 'from-violet-400 to-purple-600',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    step: '03',
    title: 'Reserve Trade Name',
    description: 'Submit your desired company name for approval — must comply with UAE naming guidelines.',
    icon: FileText,
    color: 'from-amber-400 to-orange-600',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
  },
  {
    step: '04',
    title: 'Submit Documents',
    description: 'Passport copies, photos, application form, and any additional required documents.',
    icon: FileCheck,
    color: 'from-emerald-400 to-teal-600',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
  },
  {
    step: '05',
    title: 'License Issued',
    description: 'Receive your Commercial, Service, or Industrial license — usually within days.',
    icon: BadgeCheck,
    color: 'from-cyan-400 to-sky-600',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80',
  },
  {
    step: '06',
    title: 'Visa & Bank Account',
    description: 'Apply for residency visas and open a corporate bank account to start operating.',
    icon: Landmark,
    color: 'from-pink-400 to-rose-600',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
];

const whyIdeal = [
  {
    icon: DollarSign,
    title: 'Flexible & Affordable',
    description: 'Affordable license packages with options for startups and independent entrepreneurs.',
  },
  {
    icon: Globe,
    title: 'Strategic Connectivity',
    description: 'Near Al Maktoum International Airport and major ports for global trade.',
  },
  {
    icon: Users,
    title: '100% Foreign Ownership',
    description: 'No local sponsor required — entrepreneurs can own it all.',
  },
  {
    icon: Rocket,
    title: 'Startup Ecosystem',
    description: 'Networking, co-working spaces, and access to business accelerators.',
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    description: 'Register and license in days, not weeks.',
  },
  {
    icon: BarChart3,
    title: 'Future-Ready Infrastructure',
    description: 'Built for digital, e-commerce, and tech-focused businesses.',
  },
];

const whoShould = [
  {
    icon: Truck,
    title: 'Logistics & Freight',
    description: 'Freight forwarding and logistics companies serving GCC and beyond.',
    color: 'from-sky-400 to-blue-600',
  },
  {
    icon: Package,
    title: 'E-commerce',
    description: 'Online stores with fulfillment centers and delivery operations.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    icon: Plane,
    title: 'Aviation Services',
    description: 'Aircraft maintenance, charter services, and aviation support.',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: Store,
    title: 'Trading Companies',
    description: 'Import/export businesses targeting the GCC market and beyond.',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    icon: Briefcase,
    title: 'Consultancies',
    description: 'Service-based startups and professional consulting firms.',
    color: 'from-pink-400 to-rose-600',
  },
  {
    icon: Code,
    title: 'Tech & Software',
    description: 'Software development, IT services, and digital platforms.',
    color: 'from-cyan-400 to-sky-600',
  },
];

const whyChooseUs = [
  { icon: Award, label: 'Certified Free Zone Specialists' },
  { icon: Zap, label: 'Fast-Tracked Approvals' },
  { icon: DollarSign, label: 'Transparent Pricing' },
  { icon: ShieldCheck, label: '100% Compliance' },
  { icon: Users, label: 'Dedicated Account Manager' },
  { icon: Clock, label: '24/7 Support' },
];

const faqs = [
  {
    q: 'What is Dubai South Free Zone and why is it ideal for company formation?',
    a: 'Dubai South Free Zone is a government-backed economic zone next to Al Maktoum International Airport and Expo 2020 site. It supports logistics, e-commerce, aviation, and trade with 100% foreign ownership, zero taxes, and world-class infrastructure.',
  },
  {
    q: 'What are the key benefits of setting up in Dubai South Free Zone?',
    a: '100% foreign ownership, zero personal and corporate income tax, fast registration (2-4 days), flexible packages for all business sizes, and a complete startup ecosystem.',
  },
  {
    q: 'Which business activities are allowed in Dubai South Free Zone?',
    a: 'Logistics, aviation services, e-commerce, trade, consulting, IT services, digital platforms, and more. The complete list is available on the official Dubai South website.',
  },
  {
    q: 'Do I need a local sponsor to start a company in Dubai South Free Zone?',
    a: 'No. Dubai South Free Zone allows 100% foreign ownership — you do not need a local sponsor to set up or operate your business.',
  },
  {
    q: 'What types of licenses are available?',
    a: 'Commercial, Service, and Industrial licenses depending on your business activity. Each has different visa quotas and office requirements.',
  },
  {
    q: 'What legal structures are allowed?',
    a: 'Free Zone Establishment (FZE) for single shareholders, Free Zone Company (FZCO) for multiple shareholders, and Branch Offices for existing UAE or foreign companies.',
  },
  {
    q: 'Can I set up a Dubai South Free Zone company remotely?',
    a: 'Yes. We handle the entire process remotely — from document collection to license issuance — no need to visit Dubai.',
  },
  {
    q: 'What are the visa options after setting up?',
    a: 'You can apply for residency visas for yourself, family, and employees. Visa quotas depend on your office size (flexi desk or private office).',
  },
];

const relatedServices = [
  {
    slug: 'bank-account',
    title: 'Bank Account Opening',
    description: 'Open UAE business bank accounts with full KYC support.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    slug: 'golden-visa',
    title: 'Golden Visa',
    description: '10-year UAE residency for investors and talents.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    slug: 'corporate-tax-vat',
    title: 'Corporate Tax & VAT',
    description: 'Expert tax advice, FTA registration, and compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    gradient: 'from-emerald-400 to-teal-600',
  },
];

// ============ COMPONENT ============
export default function DubaiSouth() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO BANNER === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-blue-900/75 to-sky-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 right-[35%] opacity-15 hidden lg:block"
        >
          <Plane size={100} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block"
        >
          <Truck size={80} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap"
              >
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5">
                  <HomeIcon size={14} />
                  Home
                </Link>
                <span>/</span>
                <span>Free Zones</span>
                <span>/</span>
                <span className="text-white font-bold">Dubai South</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6"
              >
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Beyond Borders Business
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg"
              >
                Dubai South Free Zone{' '}
                <span className="text-sky-300">Company Setup</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
              >
                Your gateway to global growth. Strategic location next to Al Maktoum
                International Airport. 100% foreign ownership, zero taxes, and
                fast-tracked licensing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={getWhatsAppLink(
                    "Hi! I'm interested in Dubai South Free Zone company setup."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {['100% Ownership', 'Zero Tax', '2-4 Days Setup'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                  >
                    <CheckCircle2 size={12} className="text-sky-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Floating Cards */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-[100px]"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              </motion.div>

              {/* Card 1 — Setup Time */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }}
                className="absolute top-0 right-0 z-30"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[260px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="absolute -top-2.5 -right-2.5">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-teal-600 text-white shadow-md">
                        Fast Setup
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
                        <Clock size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Setup Time
                        </p>
                        <h3 className="text-base font-black text-[#0A0F1F]">
                          2-4 Days
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-3xl font-black text-emerald-600">98%</span>
                      <span className="text-sm font-bold text-emerald-600">success</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-sky-200 to-transparent mb-3" />
                    <p className="text-xs text-[#64748B] font-medium">
                      Fastest in UAE free zones
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 — Ownership */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0, type: 'spring', stiffness: 80 }}
                className="absolute top-48 left-0 z-20"
              >
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[240px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg">
                        <Globe size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Ownership
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          100% Foreign
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                      No Sponsor
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        Full control
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 — Location */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2, type: 'spring', stiffness: 80 }}
                className="absolute bottom-0 right-8 z-10"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[250px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                        <Plane size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Location
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          Next to Airport
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                      Al Maktoum
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      Global logistics hub
                    </p>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                    <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.08] blur-xl`} />
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={20} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-none mb-1.5">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 3. WHAT IS DUBAI SOUTH === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-sky-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1200&q=80"
                  alt="Dubai South"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                        Located in
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        South Dubai, UAE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Smart Growth Zone
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Dubai South Free Zone{' '}
                <span className="gradient-text">Explained</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  Dubai South Free Zone is a fully government-supported economic
                  area located in the southern end of Dubai, next to the world's
                  largest airport. It offers a simplified legal and regulatory
                  framework for local and international businesses.
                </p>
                <p>
                  Entrepreneurs benefit from{' '}
                  <span className="font-black text-[#0A0F1F]">full repatriation of profits</span>,{' '}
                  <span className="font-black text-[#0A0F1F]">no income and corporate taxes</span>, and{' '}
                  flexible packages for startups, SMEs, and multinational corporations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {[
                  'Full Profit Repatriation',
                  'No Income Tax',
                  'No Corporate Tax',
                  'Flexible Packages',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
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

      {/* === 4. BENEFITS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-soft mb-6">
              <Star size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-sky-700">
                Key Benefits
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of Setting Up in{' '}
              <span className="gradient-text">Dubai South</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Everything you need to grow your business globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80 }}
                  className="group relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${benefit.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-snug tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. SETUP PROCESS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Rocket size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Setup Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How to Set Up Your Company{' '}
              <span className="gradient-text">in 6 Steps</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              A streamlined process from activity selection to bank account opening.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setupSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image header */}
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${step.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-75 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />

                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    <div className="absolute top-3 right-4">
                      <span className="text-5xl font-black text-white/25 leading-none">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-lg font-black text-[#0A0F1F] leading-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                      {step.description}
                    </p>

                    <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-[0.05] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. WHY IDEAL (DARK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-sky-950 via-blue-950 to-sky-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-sky-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Crown size={14} className="text-sky-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">
                Why It's Ideal
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Future-Proof Your{' '}
              <span className="bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">
                Business
              </span>
            </h2>
            <p className="text-base text-white/75 font-medium">
              Dubai South Free Zone is built for the modern entrepreneur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyIdeal.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-sky-400/40 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />

                  <div className="relative mb-5">
                    <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-base font-black text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. WHO SHOULD ESTABLISH === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-soft mb-6">
              <Users size={14} className="text-sky-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-sky-700">
                Who It's For
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Who Should Establish in{' '}
              <span className="gradient-text">Dubai South?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Perfect for these industries and business types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whoShould.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80 }}
                  className="group relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 max-w-3xl mx-auto p-5 rounded-2xl bg-white border-2 border-dashed border-sky-200 flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
              <MapPin size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <p className="text-sm text-[#475569] font-medium leading-relaxed">
              <span className="font-black text-[#0A0F1F]">Strategic Advantage:</span>{' '}
              Located near Al Maktoum International Airport, Jebel Ali Port, and
              with direct access to road, air, and sea — a zone built for
              companies needing speed, access, and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === 8. WHY CHOOSE US (DARK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0B1F3A] to-[#0A1628]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-sky-500/15 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Award size={14} className="text-sky-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
                Your Trusted Partner for{' '}
                <span className="bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">
                  Dubai South Setup
                </span>
              </h2>

              <p className="text-base text-white/85 font-medium leading-relaxed mb-8">
                We make your Dubai South Free Zone setup simple, transparent, and
                stress-free. From activity selection to visa processing and bank
                account opening — we handle everything.
              </p>

              <div className="space-y-3 mb-8">
                {whyChooseUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <a
                href={getWhatsAppLink(
                  "Hi! I'd like to set up my business in Dubai South Free Zone."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Talk to an Expert
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Right — Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-violet-500 opacity-30 blur-[100px] rounded-full" />

              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, value: '2-4', label: 'Days Avg. Setup', color: 'from-sky-500 to-blue-500', bg: 'from-sky-500/30 to-blue-500/30' },
                  { icon: Zap, value: '98%', label: 'Success Rate', color: 'from-violet-500 to-purple-500', bg: 'from-violet-500/30 to-purple-500/30' },
                  { icon: Users, value: '500+', label: 'Clients Served', color: 'from-emerald-500 to-teal-500', bg: 'from-emerald-500/30 to-teal-500/30' },
                  { icon: Award, value: '15+', label: 'Years Experience', color: 'from-amber-500 to-orange-500', bg: 'from-amber-500/30 to-orange-500/30' },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 80 }}
                      className={`p-6 rounded-3xl bg-gradient-to-br ${stat.bg} backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500`}
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-4`}>
                        <Icon size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-3xl font-black text-white leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-white/70 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-sky-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Common Questions
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about Dubai South Free Zone. Still
                have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-sky-500 via-blue-600 to-violet-700 shadow-[0_20px_60px_rgba(14,165,233,0.3)]">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-3 -right-3 opacity-20"
                >
                  <Globe size={80} className="text-white" />
                </motion.div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">
                    Get a free consultation with our Dubai South specialists.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I have a question about Dubai South Free Zone."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+971566556645"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-xs hover:bg-white/25 transition-all duration-300"
                    >
                      <Phone size={14} />
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative rounded-3xl bg-white border border-border hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-sky-700 transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-sky-400 group-open:to-blue-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-sky-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">
                          +
                        </span>
                      </div>
                    </div>
                  </summary>

                  <div className="px-6 pb-6 pl-20">
                    <div className="pt-2 border-t border-dashed border-border">
                      <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 10. RELATED SERVICES === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-sky-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Services that pair well with your Free Zone setup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block h-full rounded-3xl bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.15)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 text-xl font-black text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-black">
                      <span className="gradient-text">Read More</span>
                      <ArrowRight size={14} className="text-sky-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === 11. FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-blue-900/70 to-sky-900/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">
                      Start Today
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Launch in{' '}
                    <span className="text-sky-300">Dubai South?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the setup
                    process — from activity selection to license issuance and
                    bank account opening.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I'd like a free consultation for Dubai South Free Zone setup."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sky-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle size={16} />
                      WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="tel:+971566556645"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
                    >
                      <Phone size={16} />
                      Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '500+ Clients', '2-4 Days Setup'].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                      >
                        <CheckCircle2 size={12} className="text-sky-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a
                    href={getWhatsAppLink(
                      "Hi! I'd like to discuss Dubai South Free Zone setup."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">
                          WhatsApp Us
                        </p>
                        <p className="text-base font-black text-[#0A0F1F]">
                          +971 56 655 6645
                        </p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">
                          ● Instant replies almost anytime
                        </p>
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-txt-muted group-hover:text-sky-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">
                          Visit Our Dubai Office
                        </p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">
                          Office M08-27, M1 Floor, Crystal Tower
                        </p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">
                          Business Bay, Dubai, U.A.E — PO Box: 554552
                        </p>
                        <a
                          href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-sky-600 hover:text-sky-700 transition"
                        >
                          Get Directions
                          <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Clock size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">
                          Working Hours
                        </p>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-[#64748B] font-medium">Mon – Fri</span>
                            <span className="font-black text-[#0A0F1F]">9:00 AM – 6:00 PM</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#64748B] font-medium">Saturday</span>
                            <span className="font-black text-[#0A0F1F]">10:00 AM – 5:00 PM</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#64748B] font-medium">Sunday</span>
                            <span className="font-black text-red-500">Closed</span>
                          </div>
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