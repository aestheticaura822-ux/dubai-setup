// File: src/pages/service-areas/DubaiMarina.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon, Phone, Mail, MapPin, MessageCircle, ArrowRight,
  Building2, Globe, FileText, CheckCircle2, Star, Sparkles, Briefcase,
  Users, Zap, Clock, Award, DollarSign, Headset, Ship, Landmark,
  TrendingUp, Layers, Calendar,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const AREA_NAME = 'Dubai Marina';
const AREA_SUBTITLE = 'Business Setup in Dubai Marina: Jurisdictions, Costs & Process';

const stats = [
  { icon: Building2, value: '300+', label: 'Companies Setup', color: 'from-cyan-400 to-sky-600' },
  { icon: Clock, value: '3-7', label: 'Days Setup', color: 'from-sky-400 to-blue-600' },
  { icon: Globe, value: '100%', label: 'Ownership', color: 'from-blue-400 to-indigo-600' },
  { icon: DollarSign, value: 'AED 9,500', label: 'Starting From', color: 'from-indigo-400 to-violet-600' },
];

const whyChoose = [
  { icon: MapPin, title: 'Prime Postal Address', desc: 'A Marina tower address carries prestige for clients and banks' },
  { icon: Users, title: 'Fast-Growing SME Community', desc: 'Consultancies, real estate, marketing, and trading firms cluster here' },
  { icon: Zap, title: 'Excellent Transport', desc: 'Sheikh Zayed Road, Metro (JLT/Sobha Realty stations), and Dubai Harbour nearby' },
  { icon: Landmark, title: 'Walkable Lifestyle', desc: 'Client meetings, co-working spaces, and residential options within minutes' },
];

const jurisdictions = [
  {
    name: 'DMCC Free Zone (JLT)',
    bestFor: 'Trading, commodities, and international companies',
    cost: 'from AED 9,500',
    notes: 'Two minutes from the Marina; world-class trading infrastructure.',
    color: 'from-cyan-400 to-sky-600',
    icon: Globe,
  },
  {
    name: 'Dubai Multi Commodities other zones',
    bestFor: 'Media, tech, and creative businesses',
    cost: 'from AED 9,000',
    notes: 'Adjacent to the Marina on the same strip of Sheikh Zayed Road.',
    color: 'from-sky-400 to-blue-600',
    icon: Layers,
  },
  {
    name: 'Mainland (DED)',
    bestFor: 'Retail, restaurants, gyms, and local trade',
    cost: 'from AED 14,500',
    notes: 'Requires a registered office (Ejari) and allows trading anywhere in the UAE.',
    color: 'from-blue-400 to-indigo-600',
    icon: Landmark,
  },
];

const steps = [
  { num: '01', title: 'Choose Your Activity', desc: 'Confirm it fits a free zone or mainland license.', color: 'from-cyan-400 to-sky-600' },
  { num: '02', title: 'Reserve a Trade Name', desc: 'Check availability with the authority.', color: 'from-sky-400 to-blue-600' },
  { num: '03', title: 'Prepare Documents', desc: 'Passport copies and, for mainland, your tenancy contract.', color: 'from-blue-400 to-indigo-600' },
  { num: '04', title: 'Submit Application', desc: 'Free zones approve in 3–7 days, mainland in 2–4 weeks.', color: 'from-indigo-400 to-violet-600' },
  { num: '05', title: 'Collect License', desc: 'Apply for your visa and open a corporate bank account.', color: 'from-violet-400 to-purple-600' },
];

const areaFaqs = [
  { q: 'Can I use a Marina residential address as my business address?', a: 'Free zones require their own registered address (typically a flexi-desk or office). A residential apartment cannot serve as the licensed commercial address.' },
  { q: 'Is Dubai Marina in a free zone?', a: 'No – the Marina itself is mainland Dubai. Businesses use the surrounding free zones (DMCC JLT, Media City) or a mainland DED license.' },
  { q: 'What is the fastest way to get a Marina business license?', a: 'A DMCC free zone license can be issued within a week when documents are complete.' },
  { q: 'Do I need to visit Dubai to incorporate?', a: 'No – most free zones allow remote setup with electronic document processing and a representative on the ground.' },
];

const quickAnswers = [
  { q: 'How much does it cost to start a business in Dubai?', a: 'Business setup in Dubai starts from AED 9,500 for a basic free zone license. Mainland setup starts from AED 14,500.' },
  { q: 'Can a foreigner 100% own a company in Dubai?', a: 'Yes, foreigners can 100% own companies in most free zones and many mainland activities.' },
  { q: 'What is the cheapest free zone in Dubai?', a: 'RAK ICC, Ajman FTZ, and SRTIP offer the most affordable packages starting from AED 5,900.' },
  { q: 'How long does company registration take in Dubai?', a: 'Free zone registration takes 3-7 business days. Mainland takes 2-4 weeks.' },
  { q: 'Do I need a local partner in Dubai?', a: 'Not in free zones. In mainland, many activities now allow 100% foreign ownership.' },
];

const relatedServices = [
  { icon: FileText, title: 'Dubai Company Registration Checklist', desc: 'Free downloadable PDF guide', color: 'from-cyan-400 to-sky-600', link: '#' },
];

// ============ COMPONENT ============
export default function DubaiMarina() {
  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-cyan-950/80 to-sky-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <Ship size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <span>/</span><span>Service Areas</span><span>/</span>
            <span className="text-white font-bold">{AREA_NAME}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <MapPin size={14} className="text-cyan-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">Service Area</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mb-6 drop-shadow-lg">
            Business Setup in <span className="text-cyan-300">{AREA_NAME}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-3xl mb-10 drop-shadow">
            Dubai Marina is one of the city's most desirable business addresses: a waterfront district of towers, restaurants, and professionals, located minutes from DMCC's Jumeirah Lakes Towers (JLT) cluster and Dubai Media City.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
            <a href={getWhatsAppLink(`Hi! I want to setup my business in ${AREA_NAME}.`)} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-cyan-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
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

      {/* ============ 3. WHY CHOOSE MARINA ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80" alt="Dubai Marina" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Location</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Dubai Marina, Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
                <Star size={14} className="text-cyan-600" fill="currentColor" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Why Businesses Choose {AREA_NAME}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                A Waterfront <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Business Address</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-6">
                Companies setting up in the Marina usually choose a free zone license from the nearby JLT authorities, a mainland DED license, or one of the city's business districts — each with different costs and permissions.
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

      {/* ============ 4. BEST JURISDICTIONS ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <Globe size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Best Jurisdictions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Best Jurisdictions for a <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Marina Business</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Choose the right license type for your business goals.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jurisdictions.map((j, i) => {
              const Icon = j.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${j.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden flex flex-col">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${j.color}`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${j.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-base font-black text-[#0A0F1F] mb-3 leading-tight">{j.name}</h3>

                    <div className="space-y-3 flex-1">
                      <div>
                        <div className="text-[10px] font-black text-cyan-700 uppercase tracking-widest mb-1">Best For</div>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{j.bestFor}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-cyan-700 uppercase tracking-widest mb-1">Typical Cost</div>
                        <p className={`text-lg font-black bg-gradient-to-r ${j.color} bg-clip-text text-transparent`}>{j.cost}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-cyan-700 uppercase tracking-widest mb-1">Notes</div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{j.notes}</p>
                      </div>
                    </div>

                    <a
                      href={getWhatsAppLink(`Hi! I'm interested in ${j.name} for a Marina business.`)}
                      target="_blank"
                      rel="noreferrer"
                      className={`group/cta mt-5 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${j.color} text-white font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all`}
                    >
                      <MessageCircle size={14} strokeWidth={2.5} />
                      Enquire Now
                      <ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 5. TYPICAL COSTS 2026 ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <DollarSign size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Cost Guide 2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Typical Marina <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Setup Costs</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden p-8 md:p-10 bg-white border border-cyan-100 shadow-xl">
            <div className="h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 absolute top-0 left-0 right-0" />
            <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
              <p>
                A <span className="font-black text-[#0A0F1F]">free zone license</span> for a Marina-based services company typically lands between <span className="font-black text-cyan-700">AED 9,000 and AED 15,000</span> including the trade license, activity fees, and a flexi-desk.
              </p>
              <p>
                Adding a <span className="font-black text-[#0A0F1F]">residency visa</span> raises the total by roughly <span className="font-black text-cyan-700">AED 5,000–8,000</span> (visa, Emirates ID, medical, and typing).
              </p>
              <p className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 text-amber-900">
                <span className="font-black">Note: </span>
                Mainland costs start higher because of the mandatory office lease.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 6. STEPS TO REGISTER ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <CheckCircle2 size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Steps to Register in the <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Marina Area</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                <div className="relative p-5 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                  <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center shadow-lg opacity-15">
                    <span className="text-lg font-black text-cyan-600">{step.num}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-base font-black text-white">{step.num}</span>
                  </div>
                  <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. AREA FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
              <Headset size={14} className="text-cyan-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-700">Area FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
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

      {/* ============ 8. QUICK ANSWERS + RELATED SERVICES ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
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