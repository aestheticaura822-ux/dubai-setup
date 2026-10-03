// File: src/pages/services/business-setup/DependentVisa.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ArrowRight, Sparkles, CheckCircle2, Building2, TrendingUp,
  Briefcase, Phone, MessageCircle, Home as HomeIcon, Clock,
  Users, Award, FileText, DollarSign, Zap, Target, Crown, 
  UserCheck, BadgeCheck, Baby,
   Shield, Rocket,  Plane, HeartHandshake,
  RefreshCw, Home,  ShieldCheck,  Heart,
  ChevronLeft, ChevronRight, 
   FileSignature, 
   UsersRound,  Send, IdCard,
  Car,
   Camera,
 
  FileCheck, ScrollText, Stamp, Building as Bank, GraduationCap,
  Stethoscope,}
  from 'lucide-react';
import { getWhatsAppLink } from '../../../lib/whatsapp';

// ============ DATA ============

const stats = [
  { icon: Users, value: '4', label: 'Dependent Types', color: 'from-violet-400 to-purple-600' },
  { icon: Clock, value: '2-3', label: 'Years Validity', color: 'from-purple-400 to-fuchsia-600' },
  { icon: Zap, value: 'Fast', label: 'Processing', color: 'from-fuchsia-400 to-pink-600' },
  { icon: Shield, value: '100%', label: 'Compliant', color: 'from-pink-400 to-rose-600' },
];

const dependentTypes = [
  {
    id: 'spouse',
    icon: Heart,
    title: 'Spouse Visa',
    tagline: 'Husband or Wife',
    description: 'Sponsor your husband or wife to live with you in the UAE. Full residency rights including work permit eligibility, banking access, and healthcare.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    color: 'from-violet-500 to-purple-700',
    features: ['Husband/Wife', 'Work Permit Eligible', 'Banking Access', 'Healthcare Access'],
    bestFor: 'Married Couples'
  },
  {
    id: 'children',
    icon: Baby,
    title: 'Children Visa',
    tagline: 'Sons & Daughters',
    description: 'Sponsor your sons up to 25 years old (students) and daughters of any age (unmarried). Full access to UAE education, healthcare, and lifestyle.',
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80',
    color: 'from-purple-500 to-fuchsia-700',
    features: ['Sons up to 25', 'Daughters Any Age', 'School Access', 'Healthcare'],
    bestFor: 'Parents'
  },
  {
    id: 'parents',
    icon: UsersRound,
    title: 'Parents Visa',
    tagline: 'Father & Mother',
    description: 'Sponsor your parents (60+ years) to live with you in the UAE. Requires minimum salary, housing, and health insurance.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=1200&q=80',
    color: 'from-fuchsia-500 to-pink-700',
    features: ['Parents 60+', 'Health Insurance', 'Adequate Housing', 'Full Residency'],
    bestFor: 'Adult Children'
  },
  {
    id: 'domestic',
    icon: Home,
    title: 'Domestic Worker Visa',
    tagline: 'Household Staff',
    description: 'Sponsor domestic workers like housemaids, cooks, drivers, nannies, and gardeners. Fully compliant with UAE labor laws.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    color: 'from-pink-500 to-rose-700',
    features: ['Housemaids', 'Cooks & Drivers', 'Nannies & Gardeners', 'Labor Law Compliant'],
    bestFor: 'Families'
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Family Togetherness',
    description: 'Live together with your loved ones in the UAE — no more long-distance relationships.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: GraduationCap,
    title: 'Education Access',
    description: 'Children can attend top UAE schools, universities, and international curriculum programs.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Access',
    description: 'Full access to world-class UAE healthcare facilities and medical insurance.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    icon: Bank,
    title: 'Banking Access',
    description: 'Dependents can open UAE bank accounts and access financial services.',
    color: 'from-pink-400 to-rose-600'
  },
  {
    icon: Plane,
    title: 'Visa-Free Travel',
    description: 'Dependents enjoy easy travel in and out of the UAE with multiple-entry visas.',
    color: 'from-rose-400 to-red-600'
  },
  {
    icon: Briefcase,
    title: 'Work Permit Eligible',
    description: 'Spouses can apply for work permits with their dependent visa.',
    color: 'from-red-400 to-orange-600'
  },
  {
    icon: IdCard,
    title: 'Emirates ID',
    description: 'Dependents get their own Emirates ID for full UAE services access.',
    color: 'from-orange-400 to-amber-600'
  },
  {
    icon: Car,
    title: "Driver's License",
    description: 'Dependents can obtain a UAE driving license and own vehicles.',
    color: 'from-amber-400 to-yellow-600'
  },
];

const processSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Eligibility Check',
    description: 'We confirm your eligibility — sponsor status, minimum salary, housing, and insurance.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Document Collection',
    description: 'Attested marriage certificates, birth certificates, passport copies, and photos.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    step: '03',
    icon: Send,
    title: 'Application Submission',
    description: 'We submit the application to ICA or GDRFA through our priority network.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    step: '04',
    icon: BadgeCheck,
    title: 'Approval & Entry Permit',
    description: 'Approval issued with entry permit for your dependents to enter the UAE.',
    color: 'from-pink-400 to-rose-600'
  },
  {
    step: '05',
    icon: Stethoscope,
    title: 'Medical & Emirates ID',
    description: 'Dependents complete medical fitness tests and biometrics for Emirates ID.',
    color: 'from-rose-400 to-red-600'
  },
  {
    step: '06',
    icon: Stamp,
    title: 'Visa Stamping',
    description: 'Final residency visa stamped on passports — your family is now officially in the UAE.',
    color: 'from-red-400 to-orange-600'
  },
];

const requirements = [
  {
    icon: DollarSign,
    title: 'Minimum Salary Requirement',
    description: 'Sponsor must earn a minimum monthly salary of AED 4,000 (or AED 3,000 + accommodation) for spouse and children. For parents, salary should be AED 20,000+.',
    color: 'from-violet-400 to-purple-600'
  },
  {
    icon: Home,
    title: 'Adequate Housing',
    description: 'Sponsor must provide adequate accommodation (Ejari or tenancy contract) sized appropriately for the family.',
    color: 'from-purple-400 to-fuchsia-600'
  },
  {
    icon: Stethoscope,
    title: 'Health Insurance',
    description: 'Valid UAE health insurance is required for all dependents as part of the visa application.',
    color: 'from-fuchsia-400 to-pink-600'
  },
  {
    icon: ScrollText,
    title: 'Attested Documents',
    description: 'Marriage certificate and birth certificates must be attested by UAE Embassy and MOFA.',
    color: 'from-pink-400 to-rose-600'
  },
];

const documents = [
  { icon: IdCard, label: 'Sponsor Emirates ID', desc: 'Front and back' },
  { icon: ScrollText, label: 'Attested Marriage Certificate', desc: 'For spouse visa' },
  { icon: Baby, label: 'Attested Birth Certificates', desc: 'For children visa' },
  { icon: Camera, label: 'Passport Photos', desc: 'White background' },
  { icon: FileSignature, label: 'Salary Certificate', desc: 'From employer' },
  { icon: Home, label: 'Ejari / Tenancy Contract', desc: 'Proof of housing' },
  { icon: Stethoscope, label: 'Health Insurance', desc: 'For dependents' },
  { icon: FileText, label: 'Medical Fitness Certificate', desc: 'For residency' },
];

const whyChooseUs = [
  { icon: ShieldCheck, label: 'Direct Authority Access', desc: 'Priority ICA & GDRFA network' },
  { icon: Zap, label: 'Fast Processing', desc: 'Expedited approvals' },
  { icon: UserCheck, label: 'Dedicated Expert', desc: 'Personal family visa specialist' },
  { icon: DollarSign, label: 'Transparent Pricing', desc: 'No hidden fees' },
  { icon: Globe, label: 'Multilingual Team', desc: 'English, Arabic, Hindi, Urdu' },
  { icon: RefreshCw, label: 'Renewal Support', desc: 'Ongoing visa management' },
  { icon: HeartHandshake, label: 'Family Integration', desc: 'Complete family support' },
  { icon: Award, label: 'Proven Track Record', desc: 'Thousands of approvals' },
];

const growthStats = [
  { icon: Users, value: '5,000+', label: 'Family Visas', color: 'from-violet-400 to-purple-600' },
  { icon: Globe, value: '180+', label: 'Nationalities', color: 'from-purple-400 to-fuchsia-600' },
  { icon: TrendingUp, value: 'Leading', label: 'Family Expert', color: 'from-fuchsia-400 to-pink-600' },
  { icon: Zap, value: 'Fast', label: 'Processing', color: 'from-pink-400 to-rose-600' },
  { icon: ShieldCheck, value: '100%', label: 'Compliant', color: 'from-rose-400 to-red-600' },
  { icon: Crown, value: 'Preferred', label: 'Family Partner', color: 'from-red-400 to-orange-600' },
];

const faqs = [
  {
    q: 'Who can sponsor dependents in the UAE?',
    a: 'Any UAE residence visa holder with a valid employment or investor visa can sponsor dependents. Requirements include minimum salary (AED 4,000+ or AED 3,000 + accommodation), adequate housing, and health insurance.'
  },
  {
    q: 'What is the minimum salary to sponsor family?',
    a: 'For spouse and children: AED 4,000 monthly (or AED 3,000 + accommodation). For parents: typically AED 20,000 monthly salary with accommodation and insurance.'
  },
  {
    q: 'Can my spouse work in the UAE with a dependent visa?',
    a: 'Yes. Your spouse can apply for a work permit after obtaining the dependent visa. Many employers sponsor this change.'
  },
  {
    q: 'How long is a dependent visa valid?',
    a: 'Dependent visas are typically valid for 2-3 years, matching the sponsor\'s visa validity. They must be renewed along with the sponsor\'s visa.'
  },
  {
    q: 'Can I sponsor my parents in the UAE?',
    a: 'Yes. You can sponsor your parents (60+ years old) if you meet the minimum salary requirement (AED 20,000+ per month), provide adequate housing, and valid health insurance.'
  },
  {
    q: 'What documents need to be attested?',
    a: 'Marriage certificate (for spouse), birth certificates (for children), and educational certificates must be attested by the UAE Embassy in your home country and the MOFA in the UAE.'
  },
  {
    q: 'Can I sponsor my domestic worker?',
    a: 'Yes. You can sponsor domestic workers including housemaids, cooks, drivers, nannies, and gardeners under the domestic worker visa category.'
  },
  {
    q: 'How long does the dependent visa process take?',
    a: 'Typically 2-4 weeks depending on document readiness and processing times. We fast-track the process through our priority government network.'
  },
  {
    q: 'Can children study in the UAE with a dependent visa?',
    a: 'Yes. Children with dependent visas can enroll in UAE schools and universities. They need their Emirates ID and school-specific documentation.'
  },
  {
    q: 'Why choose Setup Zone Dubai for dependent visa services?',
    a: 'We provide end-to-end support — eligibility assessment, documentation, application filing, medicals, Emirates ID, and visa stamping. With a proven track record and direct authority access, we ensure fast, compliant processing.'
  },
];

const relatedServices = [
  { slug: 'residence-visa', title: 'UAE Residence Visa', description: '2-10 year residency options.', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80', gradient: 'from-emerald-400 to-teal-600' },
  { slug: 'golden-visa-services', title: 'Golden Visa Services', description: '10-year UAE residency for investors & talent.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', gradient: 'from-amber-400 to-yellow-600' },
  { slug: 'company-formation', title: 'Company Formation in Dubai', description: 'Free Zone, Mainland & Offshore.', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80', gradient: 'from-cyan-400 to-blue-600' },
];

// ============ COMPONENT ============
export default function DependentVisa() {
  const [activeType, setActiveType] = useState(0);

  const nextType = () => setActiveType((prev) => (prev + 1) % dependentTypes.length);
  const prevType = () => setActiveType((prev) => (prev - 1 + dependentTypes.length) % dependentTypes.length);

  return (
    <div className="min-h-screen bg-white">
      {/* === 1. HERO === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-violet-950/80 to-purple-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[35%] opacity-15 hidden lg:block">
          <HeartHandshake size={140} className="text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 left-[10%] opacity-10 hidden lg:block">
          <Users size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
                <span>/</span><span>Business Setup</span><span>/</span>
                <span className="text-white font-bold">UAE Dependent Visa</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                <Sparkles size={14} className="text-violet-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">Bring Your Family Together</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6 drop-shadow-lg">
                UAE Dependent <span className="text-violet-300">Residence Visa</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
                Sponsor your spouse, children, parents, and domestic staff to live with you in the UAE. Complete family sponsorship with full residency benefits.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href={getWhatsAppLink("Hi! I'm interested in UAE Dependent Visa services.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                  <MessageCircle size={16} />WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
                {['4 Dependent Types', '2-3 Years Valid', 'Family Together', 'Full Benefits'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                    <CheckCircle2 size={12} className="text-violet-300" strokeWidth={3} />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Family Visa Card */}
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-400 to-purple-600 opacity-40 blur-[100px]" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-purple-300" />
                <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-fuchsia-300" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 opacity-40 blur-2xl rounded-3xl" />
                  <div className="relative w-[320px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HeartHandshake size={16} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Family Hub</span>
                      </div>
                      <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Live</span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg">
                          <Users size={22} className="text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[9px] font-bold text-txt-muted uppercase tracking-widest">Status</div>
                          <div className="text-sm font-black text-[#0A0F1F]">Family Together</div>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 shadow-md">
                          <span className="text-[9px] font-black text-white uppercase tracking-widest">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Types</div>
                          <div className="text-lg font-black text-violet-600">4 Options</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100">
                          <div className="text-[8px] font-bold text-txt-muted uppercase tracking-widest mb-1">Validity</div>
                          <div className="text-lg font-black text-purple-600">2-3 Yrs</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                        <Heart size={18} className="text-violet-500" />
                        <Baby size={18} className="text-purple-500" />
                        <UsersRound size={18} className="text-fuchsia-500" />
                        <Home size={18} className="text-pink-500" />
                        <GraduationCap size={18} className="text-rose-500" />
                        <Stethoscope size={18} className="text-red-500" />
                      </div>

                      <div className="pt-4 border-t border-dashed border-border flex items-center justify-between">
                        <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">Apply Now</span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center">
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
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-border hover:border-transparent transition-all duration-500 p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1">
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

      {/* === 3. WHAT IS IT — Split === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-violet-50/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 opacity-20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80" alt="UAE Family" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center">
                      <HeartHandshake size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">Family Together</div>
                      <div className="text-sm font-black text-[#0A0F1F]">Full Residency</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <Sparkles size={14} className="text-violet-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What Is It?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-6">
                What Is a <span className="gradient-text">UAE Dependent Visa?</span>
              </h2>

              <div className="space-y-5 text-base text-[#475569] font-medium leading-relaxed">
                <p>
                  A UAE Dependent Residence Visa allows <span className="font-black text-[#0A0F1F]">UAE residence visa holders to sponsor their family members</span> — spouse, children, parents, and domestic workers — to live with them in the UAE.
                </p>
                <p>
                  If you hold an employment or investor visa with a minimum salary of AED 4,000, you can sponsor your <span className="font-black text-[#0A0F1F]">spouse and children under your residency</span>. For parents, the requirement is AED 20,000+ with additional documents.
                </p>
                <p>
                  Dependent visa holders enjoy <span className="font-black text-[#0A0F1F]">full residency rights — work permits, banking, healthcare, education, and Emirates ID</span>. At Setup Zone Dubai, we handle the complete family sponsorship process from documentation to visa stamping.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {['Family Togetherness', 'Work Permit Eligible', 'Banking Access', 'Healthcare Access', 'Education Access', 'Emirates ID'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center">
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

      {/* === 4. DEPENDENT TYPES — Swipe Carousel === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <Users size={14} className="text-violet-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Who Can You Sponsor?</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Types of <span className="bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">Dependent Visas</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Swipe through 4 dependent categories — bring your loved ones to the UAE.</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-[580px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <img
                      src={dependentTypes[activeType].image}
                      alt={dependentTypes[activeType].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${dependentTypes[activeType].color} opacity-80 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${dependentTypes[activeType].color} flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl border border-white/30`}>
                        {(() => {
                          const Icon = dependentTypes[activeType].icon;
                          return <Icon size={36} className="text-white" strokeWidth={2.2} />;
                        })()}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-[10px] font-black text-white uppercase tracking-widest">
                          Type {String(activeType + 1).padStart(2, '0')} / {String(dependentTypes.length).padStart(2, '0')}
                        </span>
                        <span className="inline-block px-3 py-1.5 rounded-full bg-violet-400/90 backdrop-blur-xl border border-violet-300/50 text-[10px] font-black text-white uppercase tracking-widest">
                          Best for {dependentTypes[activeType].bestFor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-black text-violet-300 uppercase tracking-widest mb-2">{dependentTypes[activeType].tagline}</div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
                        {dependentTypes[activeType].title}
                      </h3>
                      <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-3xl mb-6 drop-shadow">
                        {dependentTypes[activeType].description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {dependentTypes[activeType].features.map((feature, fi) => (
                          <span key={fi} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-xs font-bold text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevType}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Previous Type"
              >
                <ChevronLeft size={22} className="text-white group-hover:-translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>
              <button
                onClick={nextType}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 group"
                aria-label="Next Type"
              >
                <ChevronRight size={22} className="text-white group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {dependentTypes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveType(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeType ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-4 gap-3">
              {dependentTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveType(i)}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === activeType
                        ? 'ring-2 ring-violet-400 shadow-lg shadow-violet-500/30 scale-105'
                        : 'ring-1 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <div className="relative h-24">
                      <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-80 mix-blend-multiply`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <Icon size={22} className="text-white" strokeWidth={2.5} />
                        <span className="text-[10px] font-black text-white uppercase tracking-wider">
                          {type.title.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === 5. BENEFITS === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 shadow-soft mb-6">
              <Award size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-violet-700">Family Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Benefits of <span className="gradient-text">Dependent Visa</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Eight powerful advantages for your family in the UAE.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-500`} />
                  <div className="relative p-5 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`} />
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={22} className="text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-black text-[#0A0F1F] mb-2 leading-tight">{benefit.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 6. REQUIREMENTS — Dark Premium === */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80)' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-500/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
              <CheckCircle2 size={14} className="text-violet-300" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Sponsorship Requirements</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              What You <span className="bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">Need to Sponsor</span>
            </h2>
            <p className="text-base text-white/70 font-medium">Four key requirements to sponsor your family.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, i) => {
              const Icon = req.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className={`absolute -inset-2 rounded-[28px] bg-gradient-to-r ${req.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${req.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon size={26} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-base font-black text-white mb-2 leading-tight">{req.title}</h3>
                        <p className="text-xs text-white/70 font-medium leading-relaxed">{req.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 7. PROCESS — Step Grid === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 shadow-soft mb-6">
              <Rocket size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-violet-700">6-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              How to Get Your <span className="gradient-text">Dependent Visa</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Six simple steps to bring your family to the UAE.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg opacity-15">
                      <span className="text-lg font-black text-violet-600">{step.step}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon size={26} className="text-white" strokeWidth={2.2} />
                    </div>
                    <div className="text-xs font-black text-violet-600 mb-2">STEP {step.step}</div>
                    <h3 className="text-lg font-black text-[#0A0F1F] mb-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-[#64748B] font-medium leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 8. DOCUMENTS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <FileText size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">What You'll Need</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Required <span className="gradient-text">Documents</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">We handle the complete paperwork and approvals on your behalf.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {documents.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="group relative">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-violet-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-600" />
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={20} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-xs font-black text-[#0A0F1F] leading-tight mb-1">{doc.label}</h3>
                        <p className="text-[10px] text-[#64748B] font-medium leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 9. WHY CHOOSE US === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 shadow-soft mb-6">
              <Award size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-violet-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Your Trusted <span className="gradient-text">Family Visa Partner</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Eight reasons why families trust us.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group">
                  <div className="relative p-5 rounded-3xl bg-gradient-to-br from-white to-violet-50/30 border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-600" />
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h3 className="text-sm font-black text-[#0A0F1F] leading-tight mb-1">{item.label}</h3>
                        <p className="text-xs text-[#64748B] font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 10. GROWTH STATS === */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
              <TrendingUp size={14} className="text-violet-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Business Growth Outlook</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Trusted by <span className="gradient-text">Thousands of Families</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Your family's residency, in expert hands.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {growthStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative p-6 rounded-3xl bg-white border border-border shadow-md hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${stat.color} opacity-[0.06] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <Icon size={26} className="text-white" strokeWidth={2.2} />
                  </div>

                  <div className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-none mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === 11. FAQ === */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft mb-6">
                <MessageCircle size={14} className="text-violet-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">Common Questions</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know about UAE Dependent Visas. Still have questions? We're one message away.
              </p>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <HeartHandshake size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Sparkles size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Still Have Questions?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-5">Get a free consultation with our family visa specialists.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={getWhatsAppLink("Hi! I have a question about UAE Dependent Visa.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-violet-700 font-bold text-xs shadow-lg hover:scale-105 transition-all duration-300">
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
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-border hover:border-violet-200 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-purple-600 opacity-0 group-open:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-400 to-purple-600 opacity-0 group-open:opacity-100 transition-opacity duration-300" />

                  <summary className="flex items-start gap-4 p-6 list-none">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0 group-open:scale-110 transition-transform duration-300">
                      <span className="text-sm font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-black text-[#0A0F1F] text-base md:text-lg leading-snug tracking-tight pr-4 group-hover:text-violet-700 transition-colors">{faq.q}</h3>
                    </div>
                    <div className="relative flex-shrink-0 pt-1">
                      <div className="w-8 h-8 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center group-open:bg-gradient-to-br group-open:from-violet-400 group-open:to-purple-600 group-open:border-transparent transition-all duration-300">
                        <span className="text-violet-600 font-black text-lg leading-none group-open:text-white group-open:rotate-45 transition-all duration-300 inline-block">+</span>
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
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
              Related <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base text-[#475569] font-medium">Services that pair well with your Dependent Visa.</p>
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
                      <ArrowRight size={14} className="text-violet-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-violet-950/70 to-purple-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <HeartHandshake size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Bring Your Family Together</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    Ready to Sponsor Your <span className="text-violet-300">Family in the UAE?</span>
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Contact us today and let our experts guide you through the complete family sponsorship process — from documents to visa stamping.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation for UAE Dependent Visa.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+971566556645" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      <Phone size={16} />Call Now
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'Fast Processing', 'Full Support'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs">
                        <CheckCircle2 size={12} className="text-violet-300" strokeWidth={3} />
                        <span className="font-semibold text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <motion.a href={getWhatsAppLink("Hi! I'd like to discuss UAE Dependent Visa.")} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group block relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-0.5">WhatsApp Us</p>
                        <p className="text-base font-black text-[#0A0F1F]">+971 56 655 6645</p>
                        <p className="text-[11px] text-green-600 font-semibold mt-0.5">● Instant replies almost anytime</p>
                      </div>
                      <ArrowRight size={18} className="text-txt-muted group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>

                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Building2 size={22} className="text-white" strokeWidth={2.2} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-txt-muted uppercase tracking-wider mb-1">Visit Our Dubai Office</p>
                        <p className="text-sm font-bold text-[#0A0F1F] leading-snug mb-1">Office M08-27, M1 Floor, Crystal Tower</p>
                        <p className="text-xs text-[#64748B] font-medium leading-snug">Business Bay, Dubai, U.A.E — PO Box: 554552</p>
                        <a href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-violet-600 hover:text-violet-700 transition">
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