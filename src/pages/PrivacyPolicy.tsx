// File: src/pages/PrivacyPolicy.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon, ShieldCheck, FileText, Lock, Cookie, Users,
  Share2, Globe, AlertCircle, CheckCircle2, Mail, ArrowRight,
  Sparkles, Scale, Server, Eye, Edit3, RefreshCw, Building2,
  Phone, MessageCircle, Star, Info, ClipboardList,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';

// ============ DATA ============
const sections = [
  { id: 'info-collection', title: 'Information Collection & Usage' },
  { id: 'disclosure', title: 'Disclosure of Information' },
  { id: 'use-of-info', title: 'Use of Information' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'content-providers', title: 'Content Providers, Advertisers & Partners' },
  { id: 'opting', title: 'Opting In and Out' },
  { id: 'protection', title: 'Protecting Your Personal Information' },
  { id: 'overseas', title: 'Disclosure of Information Overseas' },
  { id: 'holding', title: 'Holding, Correcting & Updating Information' },
  { id: 'amendments', title: 'Amendments' },
  { id: 'acceptance', title: 'Acceptance' },
  { id: 'contact', title: 'How to Contact Us' },
];

const faqs = [
  { q: 'How much does it cost to start a business in Dubai?', a: 'Business setup in Dubai starts from AED 9,500 for a basic free zone license. Mainland setup starts from AED 14,500.' },
  { q: 'Can a foreigner 100% own a company in Dubai?', a: 'Yes, foreigners can 100% own companies in most free zones and many mainland activities.' },
  { q: 'What is the cheapest free zone in Dubai?', a: 'RAK ICC, Ajman FTZ, and SRTIP offer the most affordable packages starting from AED 5,900.' },
  { q: 'How long does company registration take in Dubai?', a: 'Free zone registration takes 3-7 business days. Mainland takes 2-4 weeks.' },
  { q: 'Do I need a local partner in Dubai?', a: 'Not in free zones. In mainland, many activities now allow 100% foreign ownership.' },
];

// ============ COMPONENT ============
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <ShieldCheck size={140} className="text-white" />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-20 left-[10%] opacity-10 hidden lg:block">
          <Lock size={100} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <span>/</span><span>Privacy Policy</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Sparkles size={14} className="text-indigo-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">Legal</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6">
            Privacy <span className="text-indigo-300">Policy</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-3xl">
            Learn how DubaiSetupNow FZCO collects, uses, and protects your personal information. Your privacy is our priority.
          </motion.p>
        </div>
      </section>

      {/* ============ 2. TRUST BADGES ============ */}
      <section className="relative py-8 bg-white -mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Lock, label: 'TLS 1.2 Secured', color: 'from-emerald-400 to-teal-600' },
              { icon: Server, label: 'Encrypted Data', color: 'from-sky-400 to-blue-600' },
              { icon: ShieldCheck, label: 'DET Licensed', color: 'from-amber-400 to-orange-600' },
              { icon: CheckCircle2, label: 'GDPR Ready', color: 'from-indigo-400 to-purple-600' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-md"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-black text-[#0A0F1F] leading-tight">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 3. MAIN CONTENT ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* ========== LEFT: TABLE OF CONTENTS (STICKY) ========== */}
            <motion.aside
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <div className="rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500" />
                <div className="p-6">
                  <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-5 flex items-center gap-2">
                    <ClipboardList size={16} className="text-indigo-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section, i) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center gap-2.5 p-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-200"
                      >
                        <span className="w-5 h-5 rounded-md bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center flex-shrink-0 text-[10px] font-black text-slate-500 group-hover:text-indigo-700 transition-colors">
                          {i + 1}
                        </span>
                        <span className="flex-1 leading-snug">{section.title}</span>
                      </a>
                    ))}
                  </nav>

                  {/* Contact Card */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 p-5 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                      <motion.div animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                        <ShieldCheck size={60} className="text-white" />
                      </motion.div>
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-3">
                          <Mail size={18} className="text-white" strokeWidth={2.2} />
                        </div>
                        <h4 className="text-sm font-black text-white leading-tight mb-1">Privacy Concerns?</h4>
                        <p className="text-[11px] text-white/80 font-medium mb-3 leading-relaxed">
                          Contact us for any privacy-related questions.
                        </p>
                        <a
                          href="mailto:info@setupzonedubai.ae"
                          className="inline-flex items-center gap-1.5 w-full justify-center px-3 py-2 rounded-lg bg-white text-indigo-700 font-black text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
                        >
                          <Mail size={11} strokeWidth={2.5} />
                          Email Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* ========== RIGHT: CONTENT ========== */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 space-y-8"
            >

              {/* Intro */}
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 absolute top-0 left-0 right-0" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Info size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Introduction</h2>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-0.5">Please Read Carefully</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  <p>
                    This Privacy Policy (hereinafter referred to as the <span className="font-black text-[#0A0F1F]">"Policy"</span>) governs the manner in which <span className="font-black text-[#0A0F1F]">DubaiSetupNow FZCO</span> and its affiliates (collectively referred to as <span className="font-black text-[#0A0F1F]">"DubaiSetupNow"</span>, "we", "us", or "our") collect, use, maintain, and disclose personal information. It also explains your rights regarding access, correction, and control of your personal data.
                  </p>
                  <p>
                    This Policy applies to all personal information and aggregated information collected through our website <a href="https://www.dubaisetupnow.ae" className="text-indigo-600 font-bold hover:underline">www.dubaisetupnow.ae</a> (the "Website"), and must be read in conjunction with our Terms of Use.
                  </p>
                  <p className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 text-amber-900">
                    <span className="font-black">Important: </span>
                    By accessing, browsing, or using this Website and/or obtaining any services from us, you acknowledge and agree to the terms of this Policy. If you do not agree, please refrain from using or accessing the Website.
                  </p>
                </div>
              </div>

              {/* 1. Information Collection */}
              <div id="info-collection" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-blue-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <FileText size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-0.5">Section 01</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Information Collection & Usage</h2>
                  </div>
                </div>

                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  <p>
                    While using our Website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Therefore, we may gather two types of information about you:
                  </p>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                    <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center text-white text-xs font-black">a</span>
                      Personal Information
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Personal information including but not limited to, your name, address, phone number, email address, date of birth, and payment information, which may be collected from you when you voluntarily provide the same through the following methods:
                    </p>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Registering and creating a membership account',
                        'Participating in surveys and other promotions available on the Website',
                        'Communicating with us through Contact Us, Live Chat, or telephone',
                        'Interaction on our social media platforms (Facebook, Instagram, Twitter, LinkedIn)',
                        'Other sources such as third parties where reasonably necessary for our business practices',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={11} className="text-white" strokeWidth={3} />
                          </span>
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100">
                    <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center text-white text-xs font-black">b</span>
                      Aggregate Information
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Aggregate information is generated by DubaiSetupNow's systems, which is not directly related to you personally. Whenever you interact with DubaiSetupNow Products and/or Services, we automatically receive and record information on our server logs including your IP address, device identification "cookie" information, browser/device type, and page or feature you requested.
                    </p>
                  </div>

                  <p className="p-4 rounded-xl bg-slate-50 border-l-4 border-slate-300 text-sm">
                    <span className="font-black text-[#0A0F1F]">Note: </span>
                    Failure to provide necessary personal information when requested may result in certain services not being available to you.
                  </p>
                </div>
              </div>

              {/* 2. Disclosure */}
              <div id="disclosure" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-sky-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-sky-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Share2 size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-0.5">Section 02</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Disclosure of Information</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed mb-4">
                  DubaiSetupNow may disclose Personal Information about you provided you have granted authority for the following:
                </p>
                <ol className="space-y-3">
                  {[
                    'To disclose with our affiliates worldwide, licensees and joint venture partners for the purposes described in this Privacy Policy',
                    'Any information that it gathers about you to third parties for the purposes of providing you with services that you request',
                    'Aggregate tracking information and other information that does not personally identify you to third parties',
                    'Your personal information to third parties, when DubaiSetupNow believes in good faith that it is required to do so by law or legal process',
                    'Your authorized personal information to third parties which shall be obtained at the time of collecting the information from you',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-sky-600 flex items-center justify-center flex-shrink-0 text-white text-[11px] font-black">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-600 font-medium leading-snug pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 3. Use of Information */}
              <div id="use-of-info" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-cyan-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Eye size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-sky-600 uppercase tracking-widest mb-0.5">Section 03</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Use of Information</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed mb-4">
                  DubaiSetupNow shall use the personal information it collects:
                </p>
                <ol className="space-y-3">
                  {[
                    'To verify your identity and assist you if you forget your password or login details',
                    'To assist in providing the services requested by you',
                    'To provide further information about other websites and services which DubaiSetupNow considers may be of interest to you',
                    'For future marketing, promotional and publicity purposes, including direct marketing, market research and surveys',
                    'For internal purposes, development and administration of our sites, data analytics, and compliance with our legal obligations',
                    'For ensuring that you are shown the information that is most relevant to you and your interests',
                    'To prevent and detect any misuse of, or fraudulent activities; and for any other use that you authorize',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center flex-shrink-0 text-white text-[11px] font-black">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-slate-600 font-medium leading-snug pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 4. Cookies */}
              <div id="cookies" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-teal-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Cookie size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-0.5">Section 04</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Cookies & Tracking</h2>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  <p>
                    This Website uses a <span className="font-black text-[#0A0F1F]">"Cookies and Tracking"</span> file that is transferred to your computer's hard drive, which can identify details of your IP address, operating system, browser, locale, and other user information.
                  </p>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100">
                    <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-wider mb-3">DubaiSetupNow may use cookies to:</h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Track traffic patterns to and from the Website',
                        'Ensure any advertising is being shown to the most appropriate person',
                        'Enable you to enter the Website and use certain services',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={11} className="text-white" strokeWidth={3} />
                          </span>
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 text-sm text-amber-900">
                    <span className="font-black">Note: </span>
                    Should you wish to refuse to accept cookies, you may choose to disable it in your browser. However, some web pages may not function properly should the cookies be disabled.
                  </p>
                  <p>
                    DubaiSetupNow's use of <span className="font-black text-[#0A0F1F]">Google Analytics</span> is in compliance with Google's Terms of Service and this Privacy Policy.
                  </p>
                </div>
              </div>

              {/* 5. Content Providers */}
              <div id="content-providers" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-emerald-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Globe size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-0.5">Section 05</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Content Providers, Advertisers & Partners</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  This Privacy Policy shall not be applicable to other third-party websites to which we may link. <span className="font-black text-[#0A0F1F]">DubaiSetupNow is not responsible</span> for the data collection practices, privacy policies or the contents of other websites other than this Website. You should contact the operators of that particular website directly should you wish to enquire about their privacy practices.
                </p>
              </div>

              {/* 6. Opting In/Out */}
              <div id="opting" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Users size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-0.5">Section 06</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Opting In and Out</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed mb-4">
                  Should DubaiSetupNow's intended collection, use or disclosure of your personal information be outside the collection, use or disclosure set out in this Privacy Policy, DubaiSetupNow shall provide you the option to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Opt Out', desc: 'Neither receive certain services nor participate in certain interactive areas' },
                    { title: 'Opt In', desc: 'Agree to be contacted in relation to certain matters such as notification of new features, beta testing or promotional activities' },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
                      <h3 className="text-sm font-black text-emerald-700 uppercase tracking-wider mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Protection */}
              <div id="protection" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-lime-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 to-lime-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Lock size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-0.5">Section 07</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Protecting Your Personal Information</h2>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  <p>
                    The security of your personal information is important to DubaiSetupNow. We recognize industry standards and practice appropriate administrative, technical and physical security safeguards to protect your personal information.
                  </p>

                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      { icon: Lock, label: 'TLS 1.2 Encryption' },
                      { icon: Server, label: 'Secure Servers' },
                      { icon: ShieldCheck, label: 'VeriSign Gateway' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="p-4 rounded-2xl bg-gradient-to-br from-green-50 to-lime-50 border border-green-100 text-center">
                          <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-green-400 to-lime-600 flex items-center justify-center shadow-md mb-2">
                            <Icon size={18} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div className="text-[10px] font-black text-green-700 uppercase tracking-wider">{item.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <p className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 text-sm text-amber-900">
                    <span className="font-black">Important: </span>
                    No method of transmission over the Internet, or method of electronic storage, is 100% secure. DubaiSetupNow shall not guarantee the absolute security of your personal information.
                  </p>
                </div>
              </div>

              {/* 8. Overseas */}
              <div id="overseas" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 to-yellow-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-lime-400 to-yellow-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Globe size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-lime-600 uppercase tracking-widest mb-0.5">Section 08</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Disclosure of Information Overseas</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  We may require to transfer your collected personal information to countries other than the country in which you originally provided the information. These countries may not have the same data protection laws. When we transfer your information to other countries, <span className="font-black text-[#0A0F1F]">DubaiSetupNow shall protect that information</span> as described in this Privacy Notice.
                </p>
              </div>

              {/* 9. Holding */}
              <div id="holding" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Edit3 size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-0.5">Section 09</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Holding, Correcting & Updating Information</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  We offer you the ability to <span className="font-black text-[#0A0F1F]">correct or change</span> the information collected at any time and as often as necessary, with the exception of certain restricted data fields. Where you wish to amend a restricted data field or have any questions, please contact DubaiSetupNow Customer Service.
                </p>
              </div>

              {/* 10. Amendments */}
              <div id="amendments" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-rose-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-rose-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <RefreshCw size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-0.5">Section 10</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Amendments</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  DubaiSetupNow reserves the right to change this Privacy Policy at any time and without providing you notice. Your continued use of the Website constitutes your acceptance of the modified Privacy Policy.
                </p>
              </div>

              {/* 11. Acceptance */}
              <div id="acceptance" className="relative rounded-3xl bg-white border border-slate-200 shadow-lg p-6 md:p-8 overflow-hidden scroll-mt-32">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-pink-600" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-0.5">Section 11</div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] leading-tight">Acceptance</h2>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#475569] font-medium leading-relaxed">
                  By using DubaiSetupNow's Website, you signify your <span className="font-black text-[#0A0F1F]">acceptance to this Policy</span>.
                </p>
              </div>

              {/* 12. Contact */}
              <div id="contact" className="relative rounded-3xl overflow-hidden shadow-2xl scroll-mt-32">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Mail size={100} className="text-white" />
                </motion.div>
                <div className="relative p-6 md:p-10">
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-md flex-shrink-0">
                      <Mail size={20} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-0.5">Section 12</div>
                      <h2 className="text-xl md:text-2xl font-black text-white leading-tight">How to Contact Us</h2>
                    </div>
                  </div>
                  <p className="text-base text-white/90 font-medium leading-relaxed mb-6">
                    If you have any questions or comments regarding our privacy practices, contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <a href="mailto:info@setupzonedubai.ae" className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Mail size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Email</div>
                        <div className="text-sm font-black text-white break-all">info@setupzonedubai.ae</div>
                      </div>
                    </a>
                    <a href="tel:+971566556645" className="flex items-center gap-3 p-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Phone size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Phone</div>
                        <div className="text-sm font-black text-white">+971 56 655 6645</div>
                      </div>
                    </a>
                    <a href={getWhatsAppLink("Hi! I have a privacy-related question.")} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white text-indigo-700 hover:scale-[1.02] transition-all shadow-lg md:col-span-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md">
                        <MessageCircle size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">WhatsApp</div>
                        <div className="text-sm font-black text-[#0A0F1F]">Chat With Us Instantly</div>
                      </div>
                      <ArrowRight size={16} className="text-indigo-500" strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ 4. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <MessageCircle size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Quick Answers</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
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
                  <div className="pt-2 border-t border-dashed border-slate-200">
                    <p className="pt-4 text-sm md:text-base text-[#475569] font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}