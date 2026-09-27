import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
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
  Users,
  Award,
  FileText,
  Zap,
  Target,
  Eye,
  BarChart3,
  Settings,
  Rocket,
  Lightbulb,
  MapPin,
  ShoppingCart,
  Code,
  Link2,
  FileSearch,
  GraduationCap,
  Hotel,
  Home as Home2,
  Scale,
  Stethoscope,
  Smartphone,
  Star,
  Globe2,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: TrendingUp, value: 'Top 3', label: 'Avg. Google Rank', color: 'from-emerald-400 to-teal-600' },
  { icon: Eye, value: '+250%', label: 'Organic Traffic', color: 'from-lime-400 to-green-600' },
  { icon: Search, value: '100+', label: 'Keywords Ranked', color: 'from-sky-400 to-blue-600' },
  { icon: Users, value: '500+', label: 'Clients Served', color: 'from-amber-400 to-orange-600' },
];

const strategySteps = [
  {
    step: '01',
    title: 'In-depth SEO Audit',
    description: 'Full evaluation of your site — structure, technical issues, keywords, and backlinks.',
    icon: FileSearch,
    color: 'from-emerald-400 to-teal-600',
  },
  {
    step: '02',
    title: 'Keyword & Competitor Research',
    description: 'We identify high-value keywords and analyze what your competitors rank for.',
    icon: Target,
    color: 'from-lime-400 to-green-600',
  },
  {
    step: '03',
    title: 'On-Page & Technical Fixes',
    description: 'Optimize pages, fix technical issues, improve speed, and structure data.',
    icon: Settings,
    color: 'from-sky-400 to-blue-600',
  },
  {
    step: '04',
    title: 'Content & Link Building',
    description: 'Create content that ranks and build quality backlinks for authority.',
    icon: Link2,
    color: 'from-violet-400 to-purple-600',
  },
];

const services = [
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate "near me" searches in Dubai — Google Business Profile, Maps, and location-based keywords.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce SEO',
    description: 'Product visibility, category optimization, and schema markup for Shopify, WooCommerce, Magento.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    icon: Code,
    title: 'Technical SEO',
    description: 'Site speed, mobile-first, HTTPS, structured data, crawl fixes, and Core Web Vitals.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    icon: FileText,
    title: 'Content SEO',
    description: 'SEO blogs, service pages, landing pages — keyword-rich and audience-focused.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
  },
  {
    icon: Link2,
    title: 'Link Building',
    description: 'Ethical white-hat backlinks from authoritative sites to boost domain authority.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    icon: FileSearch,
    title: 'SEO Audits',
    description: 'Complete on-page, off-page, and technical audit with actionable improvement plans.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
  },
];

const localSeoHighlights = [
  {
    icon: MapPin,
    title: 'Google Business Profile',
    description: 'Fully optimized GBP with keyword-rich descriptions, images, and updates.',
  },
  {
    icon: Star,
    title: 'Reviews & Reputation',
    description: 'Manage reviews, build trust, and improve local ranking signals.',
  },
  {
    icon: Link2,
    title: 'Local Citations',
    description: 'Consistent business listings across trusted local directories.',
  },
  {
    icon: Home2,
    title: 'Location Content',
    description: 'Location-specific content that resonates with local Dubai audiences.',
  },
];

const technicalPoints = [
  { icon: Zap, title: 'Site Speed Optimization', description: 'Faster load times, better Core Web Vitals' },
  { icon: Smartphone, title: 'Mobile Responsiveness', description: 'Seamless experience on every device' },
  { icon: ShieldCheck, title: 'HTTPS Security', description: 'Secure protocols for user trust' },
  { icon: Code, title: 'Structured Data', description: 'Schema markup for rich results' },
  { icon: FileSearch, title: 'Crawl & Index Fixes', description: 'Broken links, sitemaps, and duplicate content' },
  { icon: Settings, title: 'URL Structure', description: 'SEO-friendly URL architecture' },
];

const industries = [
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Product visibility, targeted traffic, and sales growth.',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    icon: Home2,
    title: 'Real Estate',
    description: 'Quality property leads with location-based keywords.',
    color: 'from-sky-400 to-blue-600',
  },
  {
    icon: Hotel,
    title: 'Hospitality & Tourism',
    description: 'More bookings from local and international travellers.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Connect with students searching for your courses.',
    color: 'from-amber-400 to-orange-600',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Wellness',
    description: 'Build trust and visibility for clinics and wellness brands.',
    color: 'from-pink-400 to-rose-600',
  },
  {
    icon: Scale,
    title: 'Professional Services',
    description: 'Authority positioning for law, finance, and consulting.',
    color: 'from-cyan-400 to-teal-600',
  },
];

const whyChooseUs = [
  { icon: TrendingUp, label: 'Sustainable Long-Term Growth' },
  { icon: Award, label: 'Proven Results Across Industries' },
  { icon: Target, label: 'Custom SEO Solutions (No Templates)' },
  { icon: BarChart3, label: 'Transparent Monthly Reporting' },
  { icon: Lightbulb, label: 'Data-Driven & AI-Powered Insights' },
  { icon: Globe2, label: 'Local + Global Market Expertise' },
];

const faqs = [
  {
    q: 'What is SEO and why is it important for my business in Dubai?',
    a: 'SEO increases your website visibility in search engines. In Dubai\'s competitive market, it drives high-quality leads, improves brand credibility, and delivers ongoing organic traffic without relying on paid ads.',
  },
  {
    q: 'How long until I see results from SEO?',
    a: 'Typically 3-6 months to see significant results. Competitive keywords may take longer, but we show progress monthly with transparent reporting.',
  },
  {
    q: 'Do I need SEO if I am running paid ads?',
    a: 'Yes. SEO builds long-term organic growth, while paid ads deliver immediate traffic. Together, they maximize ROI and reduce dependency on ads.',
  },
  {
    q: 'What SEO services do you provide?',
    a: 'Local SEO, e-commerce SEO, technical SEO, content SEO, link building, and full SEO audits — all under one roof.',
  },
  {
    q: 'Can SEO help my business attract customers in Dubai?',
    a: 'Absolutely. Local SEO puts you at the top of Google Maps and "near me" searches — critical for Dubai businesses.',
  },
  {
    q: 'Will SEO work for my industry?',
    a: 'Yes. We serve retail, e-commerce, real estate, hospitality, education, healthcare, and professional services.',
  },
  {
    q: 'How do you track and report success?',
    a: 'Monthly reports with keyword rankings, traffic growth, backlinks, conversions, and clear ROI metrics.',
  },
  {
    q: 'How is your SEO different from others?',
    a: 'We deliver holistic, data-driven, 360° SEO with white-hat tactics, custom strategies, and transparent reporting. No shortcuts.',
  },
  {
    q: 'Do you offer one-time or ongoing SEO?',
    a: 'SEO is most effective as an ongoing service. However, we offer SEO audits as one-time engagements for businesses seeking a roadmap.',
  },
];

const relatedServices = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Custom campaigns, social media, and content strategy.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
    gradient: 'from-pink-400 to-rose-600',
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
export default function SEO() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO BANNER === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-green-900/75 to-emerald-900/40" />
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
          <Search size={100} className="text-white" />
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
                <span className="text-white font-bold">SEO Services</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6"
              >
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Rank Higher, Get Found
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg"
              >
                SEO Services in{' '}
                <span className="text-lime-300">Dubai</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow"
              >
                Comprehensive SEO strategies to boost your rankings, drive
                targeted traffic, and convert visitors into loyal customers.
                No shortcuts — just sustainable organic growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free SEO Audit
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={getWhatsAppLink(
                    "Hi! I'm interested in SEO services for my UAE business."
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
                {['White-Hat Only', 'Local + Global', 'Monthly Reports'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                  >
                    <CheckCircle2 size={12} className="text-lime-300" strokeWidth={3} />
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 opacity-40 blur-[100px]"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-lime-300 shadow-[0_0_20px_rgba(163,230,53,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
              </motion.div>

              {/* Card 1 — Google Rank */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-lime-500 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[260px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="absolute -top-2.5 -right-2.5">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-lime-500 text-white shadow-md">
                        Live
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow-lg">
                        <TrendingUp size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Google Rank
                        </p>
                        <h3 className="text-base font-black text-[#0A0F1F]">
                          Average Position
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-black text-emerald-600">#3</span>
                      <span className="text-sm font-bold text-emerald-600">↑</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border via-emerald-200 to-transparent mb-3" />
                    <p className="text-xs text-[#64748B] font-medium">
                      Across 100+ keywords
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 — Traffic */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[240px] p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
                        <Eye size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Organic Traffic
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          This Month
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-emerald-600 mb-1">
                      +250%
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      vs. baseline traffic
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 — Keywords */}
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
                        <Search size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                          Keywords
                        </p>
                        <h3 className="text-sm font-black text-[#0A0F1F]">
                          Page 1 Rankings
                        </h3>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#0A0F1F] mb-1">
                      47
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">
                      Top 10 Google results
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

      {/* === 3. WHAT IS SEO === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-lime-500 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1200&q=80"
                  alt="SEO"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center">
                      <Search size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                        Organic Growth
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        Sustainable & Compounding
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
                <Lightbulb size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  What Is SEO?
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                Why Is SEO{' '}
                <span className="gradient-text">Crucial in Dubai?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  <span className="font-black text-[#0A0F1F]">Search Engine Optimization (SEO)</span>{' '}
                  is the process of enhancing your website's visibility on
                  Google, Bing, and Yahoo — ensuring it ranks higher when
                  customers search for your services.
                </p>
                <p>
                  In Dubai's competitive market, a well-executed SEO strategy
                  is no longer optional. It drives targeted, high-intent
                  traffic, builds brand trust, and reduces dependency on
                  costly paid ads. Unlike short-term campaigns, organic
                  rankings deliver sustainable, long-term results.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {[
                  'Higher Google Rankings',
                  'Targeted Organic Traffic',
                  'Reduced Ad Dependency',
                  'Long-Term Sustainable ROI',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center">
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

      {/* === 4. STRATEGY PROCESS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
              <Rocket size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">
                Our SEO Strategy
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How Does Our SEO{' '}
              <span className="gradient-text">Strategy Work?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              A structured 4-step process to deliver sustainable and scalable results.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 via-sky-300 to-violet-300 opacity-40" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategySteps.map((step, i) => {
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

                      <div className="relative mb-5">
                        <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                          <Icon size={24} className="text-white" strokeWidth={2.2} />
                        </div>
                      </div>

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

      {/* === 5. SERVICES WE OFFER === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Search size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Complete SEO Services{' '}
              <span className="gradient-text">For Lasting Visibility</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Every element of SEO — from audits to link building.
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
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/85 via-green-600/70 to-transparent mix-blend-multiply" />
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
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6">
                    <h3 className="text-lg font-black text-[#0A0F1F] leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                      {service.description}
                    </p>

                    <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 opacity-[0.05] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. LOCAL SEO === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-soft mb-6">
                <MapPin size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">
                  Local SEO
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-5">
                Why Is Local SEO a{' '}
                <span className="gradient-text">Game-Changer?</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6">
                When someone in Dubai searches for your services, you want to
                be the first option they see. Local SEO makes your business the
                winner in "near me" searches, Google Maps, and local intent
                keywords — turning searches into footfall, calls, and bookings.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {localSeoHighlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group p-4 rounded-2xl bg-white border border-border hover:border-emerald-200 hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-white" strokeWidth={2.2} />
                      </div>
                      <h3 className="text-sm font-black text-[#0A0F1F] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-lime-500 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80"
                  alt="Local SEO"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />

                {/* Map pin floating card */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-5 left-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-400 opacity-40 blur-md rounded-xl" />
                      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center">
                        <MapPin size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                        Live Now
                      </div>
                      <div className="text-sm font-black text-[#0A0F1F]">
                        1st in "near me"
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Rating card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute bottom-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-white"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <div className="text-xs font-black text-[#0A0F1F]">
                    4.9 on Google Maps
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. TECHNICAL SEO (DARK GREEN) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-emerald-950 via-green-950 to-emerald-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-lime-500/20 blur-[150px] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT — Technical Points */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                <Code size={14} className="text-lime-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Technical SEO
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
                How Technical SEO{' '}
                <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
                  Impacts Rankings
                </span>
              </h2>

              <p className="text-base text-white/85 font-medium leading-relaxed mb-8">
                Even great content won't rank without a strong technical
                foundation. We fix what's stopping search engines from
                crawling, indexing, and ranking your pages.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {technicalPoints.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-lime-400/40 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-white mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/70 font-medium leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT — Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-lime-500 opacity-30 blur-[100px] rounded-full" />

              <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs font-bold text-white/70">
                    SEO Dashboard — Live
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  {/* Top stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-xl border border-white/20 text-center">
                      <p className="text-[9px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Rank
                      </p>
                      <p className="text-2xl font-black text-white">#3</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-lime-500/30 to-green-500/30 backdrop-blur-xl border border-white/20 text-center">
                      <p className="text-[9px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Traffic
                      </p>
                      <p className="text-2xl font-black text-white">+250%</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-500/30 to-blue-500/30 backdrop-blur-xl border border-white/20 text-center">
                      <p className="text-[9px] font-bold text-white/70 uppercase tracking-wider mb-1">
                        Keywords
                      </p>
                      <p className="text-2xl font-black text-white">47</p>
                    </div>
                  </div>

                  {/* Line chart mockup */}
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                        Organic Traffic Growth
                      </span>
                      <span className="text-[10px] font-bold text-lime-300">
                        +156% YoY
                      </span>
                    </div>
                    <svg viewBox="0 0 300 100" className="w-full h-24">
                      <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#84cc16" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 Q30,70 60,65 T120,50 T180,30 T240,20 T300,10 L300,100 L0,100 Z"
                        fill="url(#lineGradient)"
                      />
                      <path
                        d="M0,80 Q30,70 60,65 T120,50 T180,30 T240,20 T300,10"
                        stroke="#84cc16"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-white/50">
                      <span>Feb</span>
                      <span>Apr</span>
                      <span>Jun</span>
                      <span>Aug</span>
                      <span>Oct</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* Status card */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-lime-500/20 backdrop-blur-xl border border-lime-400/30">
                    <div className="w-8 h-8 rounded-xl bg-lime-500 flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">
                        3 Keywords Entered Top 5
                      </p>
                      <p className="text-[10px] text-white/70">
                        Last 7 days — momentum building
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 8. INDUSTRIES === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Briefcase size={14} className="text-emerald-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              SEO Strategies for{' '}
              <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">
              Custom SEO campaigns designed for your specific industry vertical.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80 }}
                  className="group relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${industry.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>

                  <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-snug tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. WHY CHOOSE US (DARK GREEN) === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-emerald-950 via-green-950 to-emerald-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1600&q=80)',
          }}
        />

        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-lime-500/20 blur-[150px] pointer-events-none" />

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
                <Award size={14} className="text-lime-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
                Driving Rankings, Traffic,{' '}
                <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
                  and Leads
                </span>
              </h2>

              <p className="text-base text-white/85 font-medium leading-relaxed mb-8">
                We don't chase short-term rankings. We build sustainable SEO
                foundations that compound growth over time.
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
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-lime-400/40 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold text-white">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <a
                href={getWhatsAppLink(
                  "Hi! I'd like to know more about your SEO services."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Talk to an SEO Expert
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Right — Metric cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-lime-500 opacity-30 blur-[100px] rounded-full" />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, value: '+250%', label: 'Avg. Traffic Growth', color: 'from-emerald-500 to-teal-500', bg: 'from-emerald-500/30 to-teal-500/30' },
                  { icon: Target, value: '47', label: 'Keywords in Top 10', color: 'from-lime-500 to-green-500', bg: 'from-lime-500/30 to-green-500/30' },
                  { icon: Award, value: '98%', label: 'Client Retention', color: 'from-sky-500 to-blue-500', bg: 'from-sky-500/30 to-blue-500/30' },
                  { icon: Users, value: '500+', label: 'Businesses Served', color: 'from-amber-500 to-orange-500', bg: 'from-amber-500/30 to-orange-500/30' },
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

      {/* === 10. FAQ === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none" />

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
                <MessageCircle size={14} className="text-emerald-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
                  Common Questions
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about SEO in Dubai. Still have
                questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500 via-green-600 to-lime-700 shadow-[0_20px_60px_rgba(16,185,129,0.3)]">
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
                  <Search size={80} className="text-white" />
                </motion.div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">
                    Get Your Free SEO Audit
                  </h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">
                    We'll analyze your website and show you exactly how to rank higher.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I'd like a free SEO audit for my website."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-emerald-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300"
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
                  className="group relative rounded-3xl bg-white border border-border hover:border-emerald-200 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-lime-500 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-500 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-emerald-700 transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-emerald-400 group-open:to-lime-500 group-open:border-transparent transition-all duration-300">
                        <span className="text-emerald-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">
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

      {/* === 11. RELATED + FINAL CTA === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden">
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
              Services that pair well with SEO.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
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
                      <ArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-green-900/70 to-lime-900/50" />
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
                      Ready to Rank?
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Dominate{' '}
                    <span className="text-lime-300">Google Rankings?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free SEO audit and strategy consultation. We'll show
                    you exactly how to outrank competitors and grow organically.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a
                      href={getWhatsAppLink(
                        "Hi! I'd like a free SEO audit for my website."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
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
                    {['Free SEO Audit', 'White-Hat Only', 'Monthly Reports'].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs"
                      >
                        <CheckCircle2 size={12} className="text-lime-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a
                    href={getWhatsAppLink(
                      "Hi! I'd like to discuss SEO for my business."
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
                        className="text-txt-muted group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center shadow-lg flex-shrink-0">
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
                          className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-emerald-600 hover:text-emerald-700 transition"
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