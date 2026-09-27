import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Megaphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Globe,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  Phone,
  MessageCircle,
  Home as HomeIcon,
  Clock,
  Users,
  Award,
  Wallet,
  FileText,
  DollarSign,
  Zap,
  Target,
  Eye,
  BarChart3,
  Search,
  Music2,
  MousePointer,
  Heart,
  Share2,
  Hash,
  Mail,
  Settings,
  Rocket,
  Flag,
  Lightbulb,
  PieChart,
  LineChart,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: TrendingUp, value: '5x', label: 'Average ROI', color: 'from-pink-400 to-rose-600' },
  { icon: Target, value: '50+', label: 'Campaigns Run', color: 'from-violet-400 to-purple-600' },
  { icon: Eye, value: '100M+', label: 'Impressions', color: 'from-amber-400 to-orange-600' },
  { icon: Zap, value: '24h', label: 'Report Turnaround', color: 'from-emerald-400 to-teal-600' },
];

const whyEssential = [
  {
    icon: Users,
    title: 'Reach Your Exact Audience',
    description: 'Target customers by location, age, interest, and behavior — no wasted budget.',
  },
  {
    icon: TrendingUp,
    title: 'Drive Measurable Growth',
    description: 'Every campaign is tracked — clicks, leads, conversions, and ROI.',
  },
  {
    icon: Target,
    title: 'Beat Your Competitors',
    description: 'Stay ahead with data-driven strategies and real-time optimization.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Marketing',
    description: 'Digital campaigns cost less than traditional ads with better targeting.',
  },
  {
    icon: Heart,
    title: 'Build Brand Loyalty',
    description: 'Consistent engagement turns customers into lifelong brand advocates.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Know exactly what works and scale it — no more guessing.',
  },
];

const pillars = [
  {
    icon: Search,
    title: 'Get Found on Google',
    description: 'SEO + Google Ads bring customers searching for your services right to your website.',
    color: 'from-sky-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80',
  },
  {
    icon: FaInstagram,
    title: 'Build a Community',
    description: 'Social media marketing builds brand awareness, engagement, and loyal followers.',
    color: 'from-pink-400 to-rose-600',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
  },
  {
    icon: MousePointer,
    title: 'Generate Instant Leads',
    description: 'PPC campaigns drive targeted traffic and leads from day one.',
    color: 'from-violet-400 to-purple-600',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
  },
];

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Dominate Google with competitive keywords, local SEO, and technical optimization for UAE businesses.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80',
  },
  {
    icon: MousePointer,
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'Google Ads, Meta (Facebook & Instagram), LinkedIn — high-ROI paid campaigns with smart targeting.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
  },
  {
    icon: FaInstagram,
    title: 'Social Media Marketing',
    description: 'Content for Instagram, Facebook, LinkedIn, TikTok, YouTube — plus community management.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'SEO-optimized blogs, articles, videos, and whitepapers that establish your brand as a leader.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
  },
  {
    icon: Mail,
    title: 'Email Marketing Campaigns',
    description: 'Audience segmentation, targeted emails, and automated drip campaigns that convert.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
  },
  {
    icon: Settings,
    title: 'Website Optimization & Analytics',
    description: 'Speed, mobile responsiveness, UX, and SEO. Google Analytics + heat maps to track behavior.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Introductory Consultation',
    description: 'We understand your business model, brand values, short-term goals, and long-term vision.',
    icon: MessageCircle,
    color: 'from-pink-400 to-rose-600',
  },
  {
    step: '02',
    title: 'Market Research & Analysis',
    description: 'Thorough trend analysis, competitor benchmarking, and customer behavior research.',
    icon: Search,
    color: 'from-violet-400 to-purple-600',
  },
  {
    step: '03',
    title: 'Tailored Strategy',
    description: 'A multi-channel strategy — SEO, PPC, social, content, email — working in sync.',
    icon: Target,
    color: 'from-amber-400 to-orange-600',
  },
  {
    step: '04',
    title: 'Execution & Optimization',
    description: 'Live campaigns with real-time monitoring. Continuous adjustments for maximum ROI.',
    icon: Rocket,
    color: 'from-emerald-400 to-teal-600',
  },
];

const platforms = [
  {
    icon: FaInstagram,
    name: 'Instagram',
    stats: '2B+ Users',
    description: 'B2C brands, lifestyle, fashion, and food.',
    color: 'from-pink-500 to-fuchsia-600',
  },
  {
    icon: FaFacebookF,
    name: 'Facebook',
    stats: '3B+ Users',
    description: 'Wide reach for local businesses and communities.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Search,
    name: 'Google Ads',
    stats: 'High Intent',
    description: 'Capture customers actively searching for you.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FaLinkedinIn,
    name: 'LinkedIn',
    stats: '900M+ Users',
    description: 'Best for B2B, professional services, lead gen.',
    color: 'from-sky-500 to-blue-700',
  },
  {
    icon: Music2,
    name: 'TikTok',
    stats: '1B+ Users',
    description: 'Viral reach for younger audiences.',
    color: 'from-slate-700 to-black',
  },
  {
    icon: FaYoutube,
    name: 'YouTube Ads',
    stats: '2B+ Users',
    description: 'Video ads for brand awareness and demos.',
    color: 'from-red-500 to-red-700',
  },
];

const whyChooseUs = [
  { icon: Award, label: 'Certified Marketing Professionals' },
  { icon: Target, label: 'Custom Strategies — No Templates' },
  { icon: DollarSign, label: 'Transparent Pricing, No Hidden Fees' },
  { icon: BarChart3, label: 'Monthly Reports & Live Dashboards' },
  { icon: Zap, label: 'Fast Execution & Quick Iterations' },
  { icon: TrendingUp, label: 'Proven ROI-Focused Approach' },
];

const faqs = [
  {
    q: 'What is digital marketing and why is it important in Dubai?',
    a: 'Digital marketing reaches customers via search engines, social media, email, and websites. In Dubai\'s competitive market, it is essential to reach specific audiences, generate quality leads, and build brand visibility.',
  },
  {
    q: 'How does Setup Zone Dubai improve my Google ranking?',
    a: 'We combine on-page SEO, technical optimization, quality backlinks, and local SEO for Dubai to push your business up the search rankings.',
  },
  {
    q: 'What digital marketing service is best for my business?',
    a: 'It depends on your goals. E-commerce → PPC + social. B2B → LinkedIn + SEO. Local → Google Ads + local SEO. We build a custom mix for you.',
  },
  {
    q: 'Will you manage my social media accounts?',
    a: 'Yes. We handle posting, community management, engagement, content creation, and paid social campaigns.',
  },
  {
    q: 'How long does SEO take to show results in Dubai?',
    a: 'Typically 3-6 months for significant SEO results. Competitive keywords may take longer, but we show progress monthly.',
  },
  {
    q: 'What is the difference between SEO and PPC?',
    a: 'SEO is organic, long-term growth. PPC is paid advertising that delivers immediate traffic and leads.',
  },
  {
    q: 'Do you send monthly reports?',
    a: 'Yes. Every client receives a detailed monthly report with impressions, clicks, leads, conversions, and ROI.',
  },
  {
    q: 'Can small businesses afford digital marketing in Dubai?',
    a: 'Absolutely. We offer flexible packages for startups and SMEs — ad spend is separate and adjustable to your budget.',
  },
  {
    q: 'Do you run Google Ads campaigns in the UAE?',
    a: 'Yes. We run and manage Google Ads campaigns for businesses across UAE — Search, Display, YouTube, and Shopping.',
  },
];

const relatedServices = [
  {
    slug: 'seo',
    title: 'SEO Services',
    description: 'Rank higher on Google and drive organic traffic.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80',
    gradient: 'from-lime-400 to-green-600',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Modern websites that convert visitors into customers.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    gradient: 'from-amber-400 to-orange-600',
  },
  {
    slug: 'accounting',
    title: 'Accounting',
    description: 'Bookkeeping, VAT, and financial reporting.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
    gradient: 'from-violet-400 to-purple-600',
  },
];

// ============ COMPONENT ============
export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO BANNER (DARK PINK) === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-950/95 via-rose-900/75 to-pink-900/40" />
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
          <Megaphone size={100} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 right-[45%] opacity-15 hidden lg:block"
        >
          <TrendingUp size={80} className="text-white" />
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
                <span>Services</span>
                <span>/</span>
                <span className="text-white font-bold">Digital Marketing</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6"
              >
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Grow Your Business Online
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg"
              >
                Digital Marketing Services in{' '}
                <span className="text-pink-300">Dubai</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
              >
                Result-driven digital marketing to boost your brand visibility,
                drive targeted traffic, and increase conversions. SEO, PPC,
                social media, content, and email — all under one roof.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-pink-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={getWhatsAppLink(
                    "Hi! I'm interested in digital marketing services for my UAE business."
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
                {['SEO & PPC Experts', 'Social Media', 'ROI-Focused'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                  >
                    <CheckCircle2 size={12} className="text-pink-300" strokeWidth={3} />
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-pink-400 to-rose-600 opacity-40 blur-[100px]"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
              </motion.div>

              {/* Card 1 — ROI */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[260px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="absolute -top-2.5 -right-2.5">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-pink-400 to-rose-600 text-white shadow-md">
                        Live
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shadow-lg">
                        <TrendingUp size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Campaign ROI
                        </p>
                        <h3 className="text-base font-black text-[#0A0F1F]">
                          This Month
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-black text-emerald-600">5.2x</span>
                      <span className="text-sm font-bold text-emerald-600">↑</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-pink-200 to-transparent mb-3" />
                    <p className="text-xs text-[#64748B] font-medium">
                      Every AED returns 5.2 AED
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 — Leads */}
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
                        <Target size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          New Leads
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          Today
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                      247
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      +32% vs yesterday
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 — Reach */}
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
                        <Eye size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Total Reach
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          This Week
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                      1.2M
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      Across all platforms
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

      {/* === 3. WHY ESSENTIAL === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-pink-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80"
                  alt="Digital Marketing"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center">
                      <Megaphone size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                        Competitive Edge
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        Essential for UAE Growth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-4">
                  <Sparkles size={14} className="text-pink-600" />
                  <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                    Why It Matters
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-4">
                  Why Is Digital Marketing{' '}
                  <span className="gradient-text">Essential in Dubai?</span>
                </h2>
                <p className="text-base text-[#475569] font-medium leading-relaxed">
                  In Dubai's competitive market, nearly all customers search online
                  before buying. Without digital marketing, you'll disappear.
                </p>
              </motion.div>

              <div className="space-y-3">
                {whyEssential.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="group relative flex gap-4 p-4 rounded-2xl bg-white border border-border hover:border-pink-200 hover:shadow-[0_15px_40px_rgba(236,72,153,0.1)] hover:-translate-x-1 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={20} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-base font-black text-[#0A0F1F] mb-1 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 4. DIGITAL BATTLEFIELD (DARK PINK) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-pink-950 via-rose-950 to-pink-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-pink-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none" />

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
            className="text-center mb-14 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Flag size={14} className="text-pink-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">
                The Digital Battlefield
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Your Customers Are Online{' '}
              <span className="bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
                Right Now
              </span>
            </h2>

            <p className="text-lg text-white/85 font-medium leading-relaxed max-w-3xl mx-auto">
              They're searching, scrolling, and deciding. Will they find you —
              or your competitor? We ensure your brand appears at the exact
              moment they're ready to buy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  {/* Image background */}
                  <div className="relative h-80">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${pillar.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Dot pattern */}
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Icon top */}
                    <div className="absolute top-5 left-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="absolute top-4 right-5">
                      <span className="text-6xl font-black text-white/25 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-black text-white leading-tight mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-white/85 font-medium leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. WHAT WE OFFER (6 services with images) === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-pink-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Zap size={14} className="text-pink-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Tailored Marketing For Dubai
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Digital Marketing Services{' '}
              <span className="gradient-text">Do We Offer?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              A full suite of solutions tailored to your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
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
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/85 via-rose-600/70 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="absolute top-3 right-4">
                      <span className="text-5xl font-black text-white/25 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-lg font-black text-[#0A0F1F] leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                      {service.description}
                    </p>

                    {/* Corner deco */}
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 opacity-[0.05] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. PROCESS (4 steps with progress line) === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Rocket size={14} className="text-pink-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How We Build Your{' '}
              <span className="gradient-text">Marketing Engine</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              A proven 4-step process that delivers measurable results.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-violet-300 to-emerald-300 opacity-40" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />

                      {/* Icon */}
                      <div className="relative mb-5">
                        <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                          <Icon size={24} className="text-white" strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Step number */}
                      <div className="absolute top-5 right-5">
                        <span className={`text-5xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 leading-none`}>
                          {step.step}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#0A0F1F] leading-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                        {step.description}
                      </p>

                      <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-[0.05] blur-2xl pointer-events-none`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 7. PLATFORMS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-200 shadow-soft mb-6">
              <Share2 size={14} className="text-pink-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-pink-700">
                Platforms We Master
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              We Run Campaigns Across{' '}
              <span className="gradient-text">Every Major Platform</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Right audience, right channel, right message.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${platform.color} opacity-[0.05] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500`} />

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0`}>
                      <Icon size={24} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-[#0A0F1F] leading-tight mb-0.5">
                        {platform.name}
                      </h3>
                      <p className="text-[10px] font-bold text-pink-600 uppercase tracking-wider">
                        {platform.stats}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. WHY CHOOSE US (DARK PINK with Dashboard) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-pink-950 via-rose-950 to-fuchsia-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-pink-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Award size={14} className="text-pink-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
                Your Growth{' '}
                <span className="bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Partner
                </span>
              </h2>

              <p className="text-base text-white/85 font-medium leading-relaxed mb-8">
                We don't just provide marketing services — we become your
                growth partner, committed to your business's success in the
                digital landscape.
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
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-pink-400/40 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <a
                href={getWhatsAppLink(
                  "Hi! I'd like to discuss digital marketing for my business."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-pink-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Talk to a Strategist
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* RIGHT — Analytics Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-fuchsia-600 opacity-30 blur-[100px] rounded-full" />

              <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs font-bold text-white/70">
                    Setup Zone Dubai — Marketing Dashboard
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  {/* Top stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/30 to-rose-500/30 backdrop-blur-xl border border-white/20">
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Leads This Month
                      </p>
                      <p className="text-2xl font-black text-white">1,247</p>
                      <p className="text-xs font-bold text-emerald-300 mt-1">+42% ↑</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 backdrop-blur-xl border border-white/20">
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Conversions
                      </p>
                      <p className="text-2xl font-black text-white">18.4%</p>
                      <p className="text-xs font-bold text-emerald-300 mt-1">+8% ↑</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                        Traffic Growth
                      </span>
                      <span className="text-[10px] font-bold text-emerald-300">
                        ↑ 156%
                      </span>
                    </div>
                    <div className="flex items-end gap-2 h-24">
                      {[35, 50, 42, 65, 58, 80, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-pink-500 to-fuchsia-400"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-white/50">
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                      <span>Jan</span>
                    </div>
                  </div>

                  {/* Campaign status */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">5 Campaigns Active</p>
                      <p className="text-[10px] text-white/70">All performing above benchmark</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-pink-100/40 blur-[140px] pointer-events-none" />

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
                <MessageCircle size={14} className="text-pink-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Common Questions
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about digital marketing in Dubai.
                Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-pink-500 via-rose-600 to-fuchsia-700 shadow-[0_20px_60px_rgba(236,72,153,0.3)]">
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
                  <Megaphone size={80} className="text-white" />
                </motion.div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">
                    Get a free marketing audit and strategy consultation.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I have a question about digital marketing in Dubai."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-pink-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
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
                  className="group relative rounded-3xl bg-white border border-border hover:border-pink-200 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-rose-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-400 to-rose-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-pink-700 transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-pink-400 group-open:to-rose-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-pink-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">
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
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-pink-50/40 overflow-hidden">
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
              Services that pair well with digital marketing.
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
                      <ArrowRight size={14} className="text-pink-600 group-hover:translate-x-1 transition-transform" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-pink-950/90 via-rose-900/70 to-fuchsia-900/50" />
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
                      Get In Touch
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Grow Your{' '}
                    <span className="text-pink-300">Business Online?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free marketing audit and strategy consultation. We'll
                    show you exactly how to reach more customers and boost
                    revenue in Dubai's competitive market.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I'd like a free marketing audit for my business."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-pink-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
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
                    {['Free Marketing Audit', '500+ Clients', 'ROI-Focused'].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                      >
                        <CheckCircle2 size={12} className="text-pink-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a
                    href={getWhatsAppLink(
                      "Hi! I'd like to discuss digital marketing for my UAE business."
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
                        className="text-txt-muted group-hover:text-pink-600 group-hover:translate-x-1 transition-all"
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0">
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
                          className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-pink-600 hover:text-pink-700 transition"
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