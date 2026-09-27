import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, 
  Briefcase, ShieldCheck, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target,  Rocket,
   Package, FileCheck, MapPin,UserCheck,
  BadgeCheck,  ShoppingCart, CreditCard, 
  Monitor,  Stethoscope, Pill,  Brain,
  HeartPulse,  Activity, Ambulance, Smile,
  Dna, FileBadge,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const stats = [
  { icon: Clock, value: '3-7', label: 'Days License', color: 'from-teal-400 to-cyan-600' },
  { icon: Globe, value: '100%', label: 'Foreign Ownership', color: 'from-cyan-400 to-sky-600' },
  { icon: DollarSign, value: '0%', label: 'Tax Rate', color: 'from-sky-400 to-blue-600' },
  { icon: HeartPulse, value: 'Global', label: 'Medical Tourism', color: 'from-teal-500 to-emerald-600' },
];

const whyDhcc = [
  { icon: Globe, title: 'Full Ownership, No Sponsor', description: 'Own 100% of your healthcare business with exclusive control over profits and operations.', color: 'from-teal-400 to-cyan-600', size: 'small' },
  { icon: DollarSign, title: 'Zero Income & Corporate Tax', description: '0% personal tax and 0% corporate tax — higher profitability and more reinvestment.', color: 'from-cyan-400 to-sky-600', size: 'small' },
  { icon: ShieldCheck, title: 'Fully Licensed & Compliant', description: 'Operates under Dubai Healthcare City Authority with MOH and DHA clinical standards.', color: 'from-sky-400 to-blue-600', size: 'small' },
  { icon: HeartPulse, title: 'Gateway to Health Tourism', description: 'Part of Dubai\'s world-leading medical tourism network — patients from around the world seeking treatment, surgery, and wellness services.', color: 'from-teal-500 to-emerald-600', size: 'large' },
  { icon: Building2, title: 'Designed for Health Businesses', description: 'Purpose-built commercial spaces for clinics, hospitals, and labs with internationally accepted standards.', color: 'from-cyan-500 to-teal-600', size: 'small' },
  { icon: MapPin, title: 'Prestigious Address, Global Reach', description: 'Central Dubai location with easy access to DXB Airport and major highways.', color: 'from-sky-500 to-cyan-600', size: 'small' },
];

const whoCanOpen = [
  { icon: Stethoscope, label: 'Clinics (Dental, General, Pediatric, Cosmetic)' },
  { icon: Building2, label: 'Multi-specialty & Super-specialty Hospitals' },
  { icon: Pill, label: 'Pharmacies & Diagnostic Labs' },
  { icon: Package, label: 'Medical Equipment Suppliers' },
  { icon: HeartPulse, label: 'Physiotherapy & Rehabilitation Centers' },
  { icon: Ambulance, label: 'Home Healthcare Services' },
  { icon: Monitor, label: 'Telemedicine & Digital Health Startups' },
  { icon: Smile, label: 'Alternative Medicine & Wellness Centers' },
  { icon: Brain, label: 'Medical Training Institutes' },
];

const licenses = [
  { icon: Stethoscope, title: 'Clinical License', description: 'Direct patient care — clinics, hospitals, labs, and pharmacies. Requires DHCC, MOH, and DHA approvals.', code: 'CLN', color: 'from-teal-400 to-cyan-600' },
  { icon: Briefcase, title: 'Non-Clinical License', description: 'For non-patient-facing healthcare businesses and support services.', code: 'NCL', color: 'from-cyan-400 to-sky-600' },
  { icon: ShoppingCart, title: 'Commercial License', description: 'Trading of pharmaceuticals, medical equipment, wellness products, and healthcare supplies.', code: 'COM', color: 'from-sky-400 to-blue-600' },
  { icon: UserCheck, title: 'Freelance Practitioner', description: 'For individual healthcare practitioners, doctors, therapists, and independent consultants.', code: 'FRL', color: 'from-teal-500 to-emerald-600' },
];

const documents = [
  { icon: FileText, label: 'Passport Copy', description: 'Of all shareholders and directors.' },
  { icon: UserCheck, label: 'Passport-Size Photo', description: 'With white background.' },
  { icon: FileBadge, label: '3 Proposed Business Names', description: 'For name reservation and approval.' },
  { icon: FileCheck, label: 'Business Plan', description: 'Required for clinical setups.' },
  { icon: Award, label: 'Academic Certificates', description: 'For medical professionals submitting management or clinical registration for the first time.' },
  { icon: ShieldCheck, label: 'Existing Medical License', description: 'For medical professionals with prior licensing.' },
];

const setupProcess = [
  { step: '01', title: 'Free Consultation', description: 'We understand your business model, medical specialty, visa needs, and budget — and propose the best license.', icon: MessageCircle, color: 'from-teal-400 to-cyan-600', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' },
  { step: '02', title: 'Select Business Type', description: 'Choose from approved medical, wellness, and support activities — clinical or non-clinical.', icon: Target, color: 'from-cyan-400 to-sky-600', image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80' },
  { step: '03', title: 'Submit Docs & Approvals', description: 'We reserve your name, submit documents, and get DHCC initial approval for your proposed business name.', icon: FileCheck, color: 'from-sky-400 to-blue-600', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80' },
  { step: '04', title: 'Payment of License Fees', description: 'Transparent cost breakdown — license fees, registration, and any additional authority charges.', icon: CreditCard, color: 'from-teal-500 to-emerald-600', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80' },
  { step: '05', title: 'Get DHCC License Fast', description: 'License processed and issued within 3-7 business days. Digital trade license for immediate operations.', icon: BadgeCheck, color: 'from-cyan-500 to-teal-600', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80' },
  { step: '06', title: 'Post-License Support', description: 'Investor/employee visas, medicals, Emirates ID, corporate bank account, and PRO services.', icon: Users, color: 'from-sky-500 to-cyan-600', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80' },
];

const whyTrustUs = [
  { icon: MessageCircle, title: 'Free Business Consultation', description: 'Understand your options before committing to anything.' },
  { icon: FileText, title: 'Full Documentation Support', description: 'We handle all paperwork and application support.' },
  { icon: Zap, title: 'Quick License Issuance', description: 'No delays — fast track your license in 3-7 days.' },
  { icon: UserCheck, title: 'Dedicated Account Manager', description: 'One point of contact for your entire setup.' },
  { icon: ShieldCheck, title: 'Full Post-License Support', description: 'Visas, bank account, PRO services — we stay with you.' },
];

const faqs = [
  { q: 'Who is eligible to set up a business in DHCC Free Zone?', a: 'Anyone in the healthcare or wellness industry — doctors, clinics, hospitals, medical consultants, pharmacies, wellness centers, digital health startups, and support services like healthcare training organizations or medical logistics companies.' },
  { q: 'Is 100% foreign ownership permitted in DHCC?', a: 'Yes. DHCC allows 100% foreign ownership — no local sponsor or Emirati partner required.' },
  { q: 'What type of licenses are available in DHCC?', a: 'Clinical, Non-Clinical, Commercial, and Freelance Practitioner licenses — each tailored to different healthcare business models.' },
  { q: 'What are the major benefits of starting a business in DHCC?', a: '100% foreign ownership, 0% tax, world-class healthcare infrastructure, compliance framework, and access to Dubai\'s growing medical tourism market.' },
  { q: 'Do I need to be a healthcare professional to set up in DHCC?', a: 'Not necessarily. Non-clinical and commercial licenses are available for support services, medical equipment suppliers, and healthcare-adjacent businesses.' },
  { q: 'How long does it take to get a DHCC license?', a: 'Typically 3-7 business days once all documents and approvals are in place.' },
  { q: 'Can I apply for a DHCC license remotely?', a: 'Yes. We handle the entire process remotely — you don\'t need to visit Dubai in person.' },
  { q: 'What documents are necessary for business setup in DHCC?', a: 'Passport copies, passport-size photos (white background), 3 proposed business names, business plan (for clinical setups), academic certificates, and existing medical licenses where applicable.' },
  { q: 'Can I apply for a visa with my license in DHCC?', a: 'Yes. We handle investor visas, employment visas, medicals, Emirates ID, and PRO services end-to-end.' },
  { q: 'Why choose Setup Zone Dubai to set up your company in DHCC?', a: 'We offer free consultation, full documentation support, quick license issuance, a dedicated account manager, and full post-license support.' },
];

const relatedServices = [
  { slug: 'bank-account', title: 'Bank Account Opening', description: 'Open UAE business bank accounts with full KYC support.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80', gradient: 'from-teal-400 to-cyan-600' },
  { slug: 'pro-services', title: 'PRO Services', description: 'Emirates ID, labor cards, visa stamping, and renewals.', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80', gradient: 'from-cyan-400 to-sky-600' },
  { slug: 'compliance', title: 'Compliance Services', description: 'UBO, ESR, AML, and VAT advisory.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', gradient: 'from-sky-400 to-blue-600' },
];

// ============ COMPONENT ============
export default function DHCC() {
  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-cyan-900/75 to-teal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <HeartPulse size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Free Zones</span><span>/</span>
                <span className="text-white font-bold">DHCC</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Stethoscope size={14} className="text-teal-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Healthcare & Wellness Hub</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                Dubai Healthcare City <span className="text-teal-300">Free Zone</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                The UAE's most recognized and specialized medical free zone. Open your medical practice with 100% foreign ownership, 0% tax, and access to the global medical tourism market.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-teal-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in Dubai Healthcare City Free Zone setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['100% Ownership', '0% Tax', 'Global Medical Hub'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-teal-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Medical Dashboard Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-cyan-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-sky-300" />
              </motion.div>

              {/* Medical Dashboard Card */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HeartPulse size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">DHCC Medical</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white/90" />
                        <span className="w-2 h-2 rounded-full bg-white/60" />
                        <span className="w-2 h-2 rounded-full bg-white/30" />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg">
                          <Stethoscope size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">License Type</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Clinical Practice</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">License Time</div>
                          <div className="text-lg font-black text-teal-600">3-7 Days</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 border border-cyan-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Tax Rate</div>
                          <div className="text-lg font-black text-cyan-600">0%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <HeartPulse size={18} className="text-teal-500" />
                        <Stethoscope size={18} className="text-cyan-500" />
                        <Pill size={18} className="text-sky-500" />
                        <Brain size={18} className="text-teal-600" />
                        <Dna size={18} className="text-cyan-600" />
                        <Activity size={18} className="text-sky-600" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Launch Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHY DHCC — Bento Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-200 shadow-soft mb-6">
              <Award size={14} className="text-teal-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-teal-700">Why DHCC</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Choose <span className="gradient-text">Dubai Healthcare City?</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">The UAE's most recognized and specialized medical free zone.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Small card 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Globe size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Full Ownership, No Sponsor</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Own 100% of your healthcare business with exclusive control over profits and operations.</p>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-sky-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <DollarSign size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Zero Income & Corporate Tax</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">0% personal tax and 0% corporate tax — higher profitability and more reinvestment.</p>
            </motion.div>

            {/* Small card 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <ShieldCheck size={26} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-black text-[#0A0F1F] mb-2">Fully Licensed & Compliant</h3>
              <p className="text-sm text-[#64748B] font-medium leading-relaxed">Operates under DHCC Authority with MOH and DHA clinical standards.</p>
            </motion.div>

            {/* Large card — Health Tourism */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-8 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-full min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80" alt="Medical Tourism" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 via-cyan-600/80 to-sky-700/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative p-7 h-full flex flex-col justify-between min-h-[300px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                    <HeartPulse size={30} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">Gateway to Health Tourism</h3>
                    <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl">Part of Dubai's world-leading medical tourism network — patients from around the world seeking treatment, surgery, and wellness services.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small card 4 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-4 group relative p-6 rounded-3xl bg-gradient-to-br from-teal-500 via-cyan-600 to-teal-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-6 opacity-15">
                <Building2 size={140} className="text-white" />
              </motion.div>
              <div className="relative h-full flex flex-col justify-between min-h-[280px]">
                <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                  <Building2 size={26} className="text-white" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2">Designed for Health Businesses</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">Purpose-built commercial spaces for clinics, hospitals, and labs.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. WHO CAN OPEN — Chip Cards === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Users size={14} className="text-teal-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Who Can Open</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              For Health & Wellness <span className="gradient-text">Entrepreneurs</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Dubai Healthcare City is open to these healthcare and wellness businesses.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {whoCanOpen.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ y: -4, scale: 1.05 }} className="group">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-50 via-cyan-50 to-sky-50 border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300 cursor-default">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                      <Icon size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-[#0A0F1F]">{item.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 5. LICENSE TYPES — Medical Certificate Cards === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-200 shadow-soft mb-6">
              <FileText size={14} className="text-teal-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-teal-700">License Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Licenses Are Offered <span className="gradient-text">in DHCC?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

      {/* === 6. DOCUMENTS REQUIRED — Checklist Card === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileCheck size={14} className="text-teal-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Documents Required</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              What Documents Do You Need <span className="gradient-text">to Start in DHCC?</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl bg-white border border-border shadow-[0_15px_50px_rgba(20,184,166,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500" />

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc, i) => {
                    const Icon = doc.icon;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-teal-50/50 to-transparent hover:from-teal-50 hover:to-cyan-50/50 transition-all duration-300 border border-transparent hover:border-teal-200">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                            <Icon size={18} className="text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        <div className="flex-1 pt-0.5">
                          <h3 className="text-base font-black text-[#0A0F1F] leading-tight mb-1">{doc.label}</h3>
                          <p className="text-sm text-[#64748B] font-medium leading-relaxed">{doc.description}</p>
                        </div>
                        <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 7. SETUP PROCESS — Horizontal Timeline === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-200 shadow-soft mb-6">
              <Rocket size={14} className="text-teal-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-teal-700">Setup Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Your DHCC <span className="gradient-text">Launch Guide</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six straightforward steps from consultation to license.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-cyan-200 to-sky-200" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {setupProcess.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative">
                    {/* Step circle on timeline */}
                    <div className="hidden lg:flex justify-center mb-6">
                      <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon size={26} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Card with image */}
                    <div className="relative rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                      <div className="relative h-32 overflow-hidden lg:hidden">
                        <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50 mix-blend-multiply`} />
                        <div className="absolute top-3 left-3">
                          <div className={`w-10 h-10 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-lg`}>
                            <Icon size={18} className="text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-[10px] font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent uppercase tracking-widest`}>Step {step.step}</span>
                        </div>
                        <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                        <p className="text-sm text-[#64748B] font-medium leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 8. WHY TRUST US — Numbered List === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <Award size={14} className="text-teal-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Your DHCC Launch Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Why Trust <span className="gradient-text">Setup Zone Dubai?</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-5">
            {whyTrustUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative flex items-center gap-6 p-6 rounded-3xl bg-white border border-border hover:border-teal-200 hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] hover:-translate-x-1 transition-all duration-500 overflow-hidden">
                  <div className="flex-shrink-0 relative">
                    <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-1 leading-tight">{item.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{item.description}</p>
                  </div>

                  <ArrowRight size={16} className="hidden md:block text-[#64748B] group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-teal-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about Dubai Healthcare City. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-teal-500 via-cyan-600 to-sky-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <HeartPulse size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our DHCC healthcare specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about Dubai Healthcare City Free Zone.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-teal-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-3xl bg-white border border-border hover:border-teal-200 hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-teal-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-teal-400 group-open:to-cyan-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-teal-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your DHCC setup.</p>
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
                      <ArrowRight size={14} className="text-teal-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-cyan-900/70 to-teal-900/50" />
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
                    Ready to Launch in <span className="text-teal-300">DHCC?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation. We'll guide you through the setup process — from license selection to post-license support.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for Dubai Healthcare City setup.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-teal-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', '3-7 Days License', 'Post-License Support'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-teal-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss DHCC setup.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-teal-600 hover:text-teal-700 transition">
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