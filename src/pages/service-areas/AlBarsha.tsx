// File: src/pages/service-areas/AlBarsha.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon, Phone, MapPin, MessageCircle, ArrowRight,
  Building2, Globe, FileText, CheckCircle2, Star, Sparkles, Briefcase,
  Users, Zap, Clock, Award, DollarSign, Headset, Layers,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const AREA_NAME = 'Al Barsha';
const AREA_SHORT = 'Al Barsha';

const stats = [
  { icon: Building2, value: '250+', label: 'Companies Setup', color: 'from-cyan-400 to-sky-600' },
  { icon: Clock, value: '3-5', label: 'Days Setup', color: 'from-sky-400 to-blue-600' },
  { icon: Globe, value: '100%', label: 'Ownership', color: 'from-blue-400 to-indigo-600' },
  { icon: DollarSign, value: 'AED 5,999', label: 'Starting From', color: 'from-indigo-400 to-violet-600' },
];

const whyChoose = [
  { icon: MapPin, title: 'Prime Location', desc: 'Excellent connectivity across Dubai' },
  { icon: Users, title: 'Talent Pool', desc: 'Access to diverse professional talent' },
  { icon: Layers, title: 'Infrastructure', desc: 'World-class amenities & facilities' },
  { icon: Briefcase, title: 'Business Community', desc: 'Thriving ecosystem of global companies' },
  { icon: Zap, title: 'Transport Links', desc: 'Proximity to key metro & highways' },
];

const services = [
  { icon: Globe, title: 'Free Zone Company Formation', desc: 'Set up in the most suitable free zone — 100% ownership, zero corporate tax, and full profit repatriation.', color: 'from-cyan-400 to-sky-600' },
  { icon: Building2, title: 'Mainland Company Formation', desc: 'Trade directly in the UAE market with a mainland license. We handle all DED paperwork and licensing.', color: 'from-sky-400 to-blue-600' },
  { icon: FileText, title: 'Trade License in Dubai', desc: 'Get your commercial, professional, or industrial trade license quickly with full regulatory compliance.', color: 'from-blue-400 to-indigo-600' },
  { icon: Users, title: 'Visa Processing & PRO Services', desc: 'Investor, employee, and dependent visas — we handle medical tests, Emirates ID, and visa stamping.', color: 'from-indigo-400 to-violet-600' },
  { icon: DollarSign, title: 'Corporate Bank Account Opening', desc: 'Open a business bank account with leading UAE banks — we handle documentation and KYC.', color: 'from-violet-400 to-purple-600' },
  { icon: FileText, title: 'Accounting & Tax Services', desc: 'Stay compliant with UAE corporate tax and VAT — bookkeeping, VAT returns, and reporting.', color: 'from-purple-400 to-fuchsia-600' },
];

const packages = [
  { name: 'Free Zone License', price: 'AED 5,999', note: 'No Residency', color: 'from-cyan-400 to-sky-600' },
  { name: 'Free Zone License + Residency', price: 'AED 11,999', note: 'With UAE Residency', color: 'from-sky-400 to-blue-600' },
  { name: 'Mainland License + Residency', price: 'AED 16,999', note: 'Mainland + Residency', color: 'from-blue-400 to-indigo-600' },
];

const whyUs = [
  'End-to-end business setup support',
  'Expert knowledge of Dubai free zones and mainland regulations',
  'Transparent pricing with no hidden fees',
  'Dedicated relationship manager',
  'Post-licensing support — PRO, accounting, and compliance',
  'Fast track processing — license in 3-5 working days',
];

const areaFaqs = [
  { q: `How long does it take to set up a business in ${AREA_NAME}?`, a: 'Most businesses are fully registered and operational within 3-5 working days, depending on the license type and required approvals.' },
  { q: `Can I set up a business in ${AREA_NAME} as a foreigner?`, a: 'Yes, foreigners can set up businesses in Dubai free zones with 100% ownership. Mainland companies may require a local sponsor depending on the business activity.' },
  { q: 'Do I need to be physically present in Dubai?', a: 'Most of the registration process can be done remotely. Our team handles the paperwork and government submissions on your behalf.' },
  { q: `What types of businesses can I set up in ${AREA_NAME}?`, a: 'You can set up commercial, professional, industrial, e-commerce, and freelance businesses in Dubai depending on your chosen license type.' },
];

const quickAnswers = [
  { q: 'How much does it cost to start a business in Dubai?', a: 'Business setup in Dubai starts from AED 9,500 for a basic free zone license. Mainland setup starts from AED 14,500.' },
  { q: 'Can a foreigner 100% own a company in Dubai?', a: 'Yes, foreigners can 100% own companies in most free zones and many mainland activities.' },
  { q: 'What is the cheapest free zone in Dubai?', a: 'RAK ICC, Ajman FTZ, and SRTIP offer the most affordable packages starting from AED 5,900.' },
  { q: 'How long does company registration take in Dubai?', a: 'Free zone registration takes 3-7 business days. Mainland takes 2-4 weeks.' },
  { q: 'Do I need a local partner in Dubai?', a: 'Not in free zones. In mainland, many activities now allow 100% foreign ownership.' },
];

const relatedServices = [
  { icon: Building2, title: 'Business Setup in JVC', desc: 'Explore setup options in JVC', color: 'from-cyan-400 to-sky-600', link: '/service-areas/jvc' },
  { icon: FileText, title: 'Company Formation in Dubai Marina', desc: 'Formation guide for Dubai Marina', color: 'from-sky-400 to-blue-600', link: '/service-areas/dubai-marina' },
];

// ============ COMPONENT ============
export default function AlBarsha() {
  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-cyan-950/80 to-sky-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <Building2 size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <span>/</span><span>Service Areas</span><span>/</span>
            <span className="text-white font-bold">{AREA_SHORT}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <MapPin size={14} className="text-cyan-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">Service Area</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mb-6 drop-shadow-lg">
            Business Setup in <span className="text-cyan-300">{AREA_SHORT}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-3xl mb-10 drop-shadow">
            Al Barsha is a well-established residential and commercial district in Dubai, known for its proximity to the Dubai Internet City, Media City, and the Mall of the Emirates. Setting up a business in Al Barsha offers excellent connectivity and a thriving business community.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
            <a href={getWhatsAppLink(`Hi! I want to setup my business in ${AREA_SHORT}.`)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
              <MessageCircle size={16} />WhatsApp Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
              Free Consultation
            </Link>
          </motion.div>
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] hover:-translate-y-1">
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

      {/* ============ 3. WHY CHOOSE ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80" alt="Al Barsha Dubai" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Location</div>
                      <div className="text-sm font-black text-[#0A0F1F]">{AREA_SHORT}, Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
                <Star size={14} className="text-cyan-600" fill="currentColor" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Why Choose {AREA_SHORT}?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                A Thriving <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Business Community</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6">
                Al Barsha offers exceptional advantages for businesses of all sizes. With world-class infrastructure, strategic location, and a supportive business ecosystem, it is the ideal place to establish your company in Dubai.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {whyChoose.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-cyan-200 hover:shadow-md transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#0A0F1F] leading-tight">{item.title}</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">{item.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 4. OUR SERVICES ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <Briefcase size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Business Setup Services in <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">{AREA_SHORT}</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Complete end-to-end solutions for your UAE business.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{service.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 5. PACKAGES ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <DollarSign size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Our Business Setup <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Transparent, all-inclusive business setup packages starting from:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color}`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <DollarSign size={26} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-3xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>{pkg.price}</span>
                  </div>
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-5">{pkg.note}</p>
                  <a
                    href={getWhatsAppLink(`Hi! I'm interested in ${pkg.name} (${pkg.price}) in ${AREA_SHORT}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`group/cta inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all`}
                  >
                    <MessageCircle size={14} strokeWidth={2.5} />
                    Enquire Now
                    <ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. WHY CHOOSE US ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <Award size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">DubaiSetupNow</span>?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <CheckCircle2 size={16} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-sm font-bold text-[#1E293B] leading-snug pt-1">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. CTA ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-4 -right-4 opacity-20">
              <Sparkles size={100} className="text-white" />
            </motion.div>
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-5">
                <Star size={14} className="text-amber-300" fill="currentColor" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">Ready to Start?</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
                Ready to Start Your Business in <span className="text-cyan-200">{AREA_SHORT}</span>?
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                Contact our team of business setup experts today for a free consultation. We'll guide you through every step of the company formation process and help you choose the best jurisdiction for your business.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={getWhatsAppLink(`Hi! I want to setup my business in ${AREA_SHORT}.`)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  <MessageCircle size={16} />Contact Us Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <Phone size={16} />+971 56 655 6645
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 8. AREA FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <Headset size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Area FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Frequently Asked Questions About <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Business Setup in {AREA_SHORT}</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {areaFaqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-sky-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                <summary className="flex items-start gap-4 p-6 list-none">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                    <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-cyan-700 transition-colors">{faq.q}</h3>
                  </div>
                  <div className="relative flex-shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-cyan-400 group-open:to-sky-600 group-open:border-transparent transition-all duration-300">
                      <span className="text-cyan-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      </section>

      {/* ============ 9. QUICK ANSWERS + RELATED SERVICES ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <MessageCircle size={14} className="text-cyan-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Quick Answers</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Quick <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Answers</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Common questions about business setup in Dubai. Still have questions? We're one message away.
              </p>

              <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-600" />
                Related Services & Guides
              </h3>
              <div className="space-y-3">
                {relatedServices.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative">
                      <div className={`absolute -inset-2 rounded-[24px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />
                      <Link to={service.link} className="relative flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-transparent shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                          <Icon size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{service.title}</h4>
                          <p className="text-xs text-slate-500 font-medium">{service.desc}</p>
                        </div>
                        <ArrowRight size={14} className="text-cyan-500 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-2" strokeWidth={2.5} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {quickAnswers.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-cyan-200 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-sky-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-cyan-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-cyan-400 group-open:to-sky-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-cyan-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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

    </div>
  );
}