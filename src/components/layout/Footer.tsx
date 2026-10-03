// File: src/components/layout/Footer.tsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowUp,
  Sparkles,
  Building2,
  ShieldCheck,
  Star,
  ChevronRight,
  Home as HomeIcon,
  FileText,
  Users,
  Wallet,
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaPinterestP,
  FaTelegramPlane,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ DATA ============
const quickLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Our Packages', href: '/#packages', icon: Wallet },
  { name: 'Resources', href: '/resources', icon: FileText },
  { name: 'Contact Us', href: '/contact', icon: MessageCircle },
];

const serviceLinks = [
  { name: 'Free Zone Setup', slug: 'freezone' },
  { name: 'Mainland Setup', slug: 'mainland' },
  { name: 'Corporate Tax & VAT', slug: 'corporate-tax-vat' },
  { name: 'Bank Account Opening', slug: 'bank-account' },
  { name: 'Golden Visa', slug: 'golden-visa' },
  { name: 'PRO Services', slug: 'pro-services' },
  { name: 'Compliance Services', slug: 'compliance' },
];

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/brightlinkconsulting.uae/', color: 'from-blue-500 to-blue-700' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/brightlink.consulting/', color: 'from-pink-500 to-fuchsia-600' },
  { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@brightlink.consulting', color: 'from-slate-800 to-black' },
  { name: 'YouTube', icon: FaYoutube, href: 'https://www.youtube.com/@brightlinkconsulting', color: 'from-red-500 to-red-700' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/brightlink-management-consultancy/', color: 'from-sky-500 to-blue-700' },
  { name: 'X (Twitter)', icon: FaXTwitter, href: 'https://x.com/BRIGHTLINKCONS1', color: 'from-slate-700 to-black' },
  { name: 'Telegram', icon: FaTelegramPlane, href: 'https://t.me/brightlinkgroup', color: 'from-sky-400 to-blue-600' },
  { name: 'Pinterest', icon: FaPinterestP, href: 'https://www.pinterest.com/brightlinkconsulting/', color: 'from-red-500 to-red-700' },
];

// ============ COMPONENT ============
export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* === MAIN FOOTER === */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0B1F3A] to-[#0A1628] text-white">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)',
          }}
        />

        {/* Mesh blobs */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />

        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

        {/* === CTA BANNER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto px-6 pt-14 md:pt-20"
        >
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80)',
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600/95 via-blue-700/90 to-violet-700/85" />
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Glow orbs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/20 blur-[100px]"
            />

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-6 right-8 opacity-20 hidden md:block"
            >
              <Sparkles size={100} className="text-white" />
            </motion.div>

            <div className="relative p-8 md:p-12 lg:p-14 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left */}
              <div className="lg:col-span-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-5">
                  <Star size={14} className="text-amber-300" fill="currentColor" />
                  <span className="text-xs font-bold tracking-widest uppercase text-white">
                    Trusted by 500+ Businesses
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4 drop-shadow-lg">
                  Start Your Dubai Business{' '}
                  <span className="text-amber-300">Today</span>
                </h2>

                <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                  Get a free consultation from our experts. From company formation
                  to visas, banking, and compliance — we handle it all.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {/* ✅ WhatsApp button — with same MessageCircle icon */}
                  <a
                    href={getWhatsAppLink("Hi! I'd like to start my Dubai business setup.")}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A1628] font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    Get Free Consultation
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href="tel:+971566556645"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Right — Stats */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '500+', label: 'Happy Clients' },
                    { value: '15+', label: 'Years Experience' },
                    { value: '25+', label: 'Expert Consultants' },
                    { value: '24/7', label: 'Customer Care' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-black text-white leading-none mb-1.5">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === MAIN FOOTER CONTENT === */}
        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* === COLUMN 1 — Brand === */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <Link to="/" className="inline-flex flex-col gap-1.5 group mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 to-violet-600 blur-md"
                    />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-violet-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-xl">SZ</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                      Setup Zone Dubai
                    </h3>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">
                      Operated by Brightlink
                    </p>
                  </div>
                </div>
              </Link>

              {/* Description */}
              <p className="text-sm text-white/70 font-medium leading-relaxed mb-6 max-w-sm">
                Your trusted UAE partner for business setup, residency, and
                professional services — delivering clear guidance and seamless
                support every step of the way.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70">
                  <ShieldCheck size={11} className="text-emerald-400" strokeWidth={2.5} />
                  Licensed
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70">
                  <Star size={11} className="text-amber-400" fill="currentColor" />
                  4.9 Rating
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70">
                  <Building2 size={11} className="text-sky-400" strokeWidth={2.5} />
                  DET Approved
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">
                  Connect With Us
                </h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ y: -4, scale: 1.1 }}
                        className={`group relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 overflow-hidden`}
                        aria-label={social.name}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <Icon size={16} className="relative text-white/70 group-hover:text-white transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* === COLUMN 2 — Quick Links === */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className="group flex items-center gap-2 text-sm text-white/60 hover:text-white font-medium transition-colors duration-300"
                      >
                        <ChevronRight
                          size={12}
                          className="text-sky-400 group-hover:translate-x-1 transition-transform"
                          strokeWidth={3}
                        />
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* === COLUMN 3 — Services === */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((service, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white font-medium transition-colors duration-300"
                    >
                      <ChevronRight
                        size={12}
                        className="text-violet-400 group-hover:translate-x-1 transition-transform"
                        strokeWidth={3}
                      />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* === COLUMN 4 — Contact === */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                Get In Touch
              </h4>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+971566556645"
                  className="group flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Phone size={15} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-0.5">
                      Call Us
                    </p>
                    <p className="text-sm font-black text-white">+971 56 655 6645</p>
                    <p className="text-[10px] text-white/60 font-medium mt-0.5">
                      Mon-Sat: 9 AM - 6 PM
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@brightlinkconsulting.ae"
                  className="group flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Mail size={15} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-0.5">
                      Email Us
                    </p>
                    <p className="text-sm font-black text-white break-all">
                      info@brightlinkconsulting.ae
                    </p>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://maps.app.goo.gl/LNRyUy4djwMDFsQ46"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-400/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <MapPin size={15} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-0.5">
                      Visit Us
                    </p>
                    <p className="text-sm font-bold text-white leading-snug">
                      Office M08-27, M1 Floor, Crystal Tower
                    </p>
                    <p className="text-[10px] text-white/60 font-medium mt-0.5">
                      Business Bay, Dubai, UAE — PO Box 554552
                    </p>
                  </div>
                </a>

                {/* ✅ WhatsApp — Same MessageCircle icon */}
                <a
                  href={getWhatsAppLink("Hi! I'd like to know more about your services.")}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 border border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
                >
                  <MessageCircle size={16} className="text-white" strokeWidth={2.5} />
                  <span className="text-sm font-black text-white">WhatsApp Us</span>
                  <span className="relative flex w-2 h-2 ml-1">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* === GOOGLE REVIEWS WIDGET === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-10 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left — Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: star * 0.05 }}
                    >
                      <Star
                        size={20}
                        className="text-amber-400"
                        fill="currentColor"
                      />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-white leading-none">4.9</span>
                    <span className="text-sm font-bold text-white/60">/ 5.0</span>
                  </div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mt-0.5">
                    75+ Verified Reviews
                  </p>
                </div>
              </div>

              {/* Center — Google */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-black text-white">Google Reviews</span>
              </div>

              {/* Right — CTA */}
              <a
                href="https://g.page/r/CdQ9UxY-AOkxEAE/review"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Star size={14} className="text-amber-400" fill="currentColor" />
                <span className="text-sm font-bold text-white">Write a Review</span>
                <ArrowRight size={14} className="text-white/60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

              {/* Left — Copyright */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <p className="text-xs font-bold text-white/60">
                  © 2026 <span className="text-white">Setup Zone Dubai</span> — Operated by Brightlink.
                </p>
                <p className="text-xs text-white/40">
                  All rights reserved.
                </p>
              </div>

              {/* Right — Made with love (Privacy/Terms/Refund/Sitemap REMOVED) */}
              <p className="text-xs font-bold text-white/40 flex items-center gap-1.5">
                Made with
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-red-500"
                >
                  ❤️
                </motion.span>
                in Dubai
              </p>
            </div>

            {/* === DISCLAIMER SECTION === */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                <p className="text-[10px] text-white/40 font-medium leading-relaxed max-w-5xl">
                  <span className="font-black text-white/60">Disclaimer: </span>
                  Setupzonedubai.ae is operated by Brightlink Management Consultancy LLC, a private third-party service provider licensed in Dubai. We are not a government authority and have no affiliation with, or endorsement from, the Government of the UAE or any of its departments. We assist customers with business setup, visa-related typing, documentation, application filling and submission through the relevant official channels (DET, GDRFA Dubai, ICP, MOFA), acting on the customer's behalf and with their consent. Government fees are set by the authorities and paid to them; our service fee is charged separately and disclosed before any commitment. Applicants can complete the same applications directly through the official portals: <span className="text-sky-400">icp.gov.ae</span>, <span className="text-sky-400">gdrfad.gov.ae</span>, <span className="text-sky-400">u.ae</span>. Estimates shown are for information only and do not constitute legal advice.
                </p>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className="text-[10px] text-white/40 font-medium whitespace-nowrap">
                    Content last reviewed 01-09-2026
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                      Verified Business
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* === BACK TO TOP BUTTON === */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-24 right-6 z-40 group w-12 h-12 rounded-full bg-white shadow-[0_10px_40px_rgba(15,23,42,0.2)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Back to top"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
        <ArrowUp
          size={20}
          className="relative text-[#0A1628] group-hover:text-white group-hover:-translate-y-0.5 transition-all"
          strokeWidth={2.5}
        />
      </motion.button>
    </>
  );
}