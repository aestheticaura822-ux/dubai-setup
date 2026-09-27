import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Globe,
  MapPin,
  ArrowRight,
  Landmark,
  Briefcase,
  Cpu,
  Heart,
  Factory,
  Crown,
  Rocket,
  Star,
  Building2,
  Users,
  UserCheck,
  Target,
  FileText,
  Scale,
  Shield,
  UserPlus,
  Home,
  Wallet,
  Store,
  ShoppingCart,
  Plane,
  Award,
  Network,
  GitBranch,
  Globe2,
  Layers,
  BadgeCheck,
  IdCard,
  Fingerprint,
  Handshake,
  Building,
  Banknote,
} from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

// ============ FREE ZONE DATA ============
const freeZoneCategories = [
  {
    title: 'Business & Trade',
    icon: Briefcase,
    color: 'from-sky-400 to-blue-600',
    zones: [
      { name: 'Free Zone Locations Guide', slug: 'locations' },
      { name: 'IFZA Free Zone', slug: 'ifza' },
      { name: 'Meydan Free Zone', slug: 'meydan' },
      { name: 'DUQE Free Zone', slug: 'duqe' },
      { name: 'Dubai CommerCity', slug: 'dubai-commercity' },
      { name: 'DWTC Free Zone', slug: 'dwtc' },
    ],
  },
  {
    title: 'Media & Tech',
    icon: Cpu,
    color: 'from-violet-400 to-purple-600',
    zones: [
      { name: 'Dubai Media City', slug: 'dubai-media-city' },
      { name: 'Dubai Internet City', slug: 'dubai-internet-city' },
      { name: 'Dubai Design District', slug: 'dubai-design-district' },
      { name: 'Dubai Knowledge Park', slug: 'dubai-knowledge-park' },
      { name: 'Dubai Silicon Oasis', slug: 'dubai-silicon-oasis' },
    ],
  },
  {
    title: 'Industrial',
    icon: Factory,
    color: 'from-amber-400 to-orange-600',
    zones: [
      { name: 'JAFZA Free Zone', slug: 'jafza' },
      { name: 'Dubai Airport Free Zone', slug: 'dubai-airport-free-zone' },
      { name: 'DMCC Free Zone', slug: 'dmcc' },
      { name: 'Dubai South Free Zone', slug: 'dubai-south' },
    ],
  },
  {
    title: 'Healthcare',
    icon: Heart,
    color: 'from-pink-400 to-rose-600',
    zones: [
      { name: 'Dubai Healthcare City', slug: 'dubai-healthcare-city' },
    ],
  },
  {
    title: 'Abu Dhabi',
    icon: Landmark,
    color: 'from-emerald-400 to-teal-600',
    zones: [
      { name: 'ADGM Free Zone', slug: 'adgm' },
      { name: 'KIZAD Abu Dhabi', slug: 'kizad' },
    ],
  },
  {
    title: 'Northern Emirates',
    icon: MapPin,
    color: 'from-cyan-400 to-sky-600',
    zones: [
      { name: 'SHAMS Sharjah', slug: 'shams' },
      { name: 'SAIF Sharjah', slug: 'saif' },
      { name: 'Hamriyah Free Zone', slug: 'hamriyah' },
      { name: 'RAKEZ Ras Al Khaimah', slug: 'rakez' },
      { name: 'Fujairah Creative City', slug: 'fujairah-creative-city' },
      { name: 'Ajman Free Zone', slug: 'ajman-free-zone' },
      { name: 'UAQ Free Zone', slug: 'uaq-free-zone' },
    ],
  },
];

// ============ MAINLAND DATA ============
const mainlandServices = [
  {
    name: 'Mainland Activities in Dubai & UAE',
    slug: 'mainland-activities',
    icon: Target,
    description: 'Explore 2,000+ approved business activities across Dubai & UAE mainland.',
    color: 'from-sky-400 to-blue-600',
  },
  {
    name: 'Hiring in UAE – Employee Management',
    slug: 'hiring-employee-management',
    icon: Users,
    description: 'End-to-end HR, payroll, and employee management solutions for your UAE business.',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    name: 'UAE Office Space Solutions',
    slug: 'office-space-solutions',
    icon: Building2,
    description: 'Premium office spaces across Dubai & UAE — flexi-desks to full floors.',
    color: 'from-indigo-400 to-violet-600',
  },
  {
    name: 'Mainland UAE Visa Services',
    slug: 'mainland-visa',
    icon: UserCheck,
    description: 'Investor, employment, and family visas for mainland UAE companies.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    name: 'Launch, Operate & Expand Your UAE Business',
    slug: 'launch-operate-expand',
    icon: Rocket,
    description: 'Complete business lifecycle support — from setup to scaling across the UAE.',
    color: 'from-purple-400 to-fuchsia-600',
  },
];

// ============ BUSINESS SETUP DATA ============
const businessSetupCategories = [
  {
    title: 'Company Formation',
    icon: Building2,
    color: 'from-orange-400 to-red-600',
    services: [
      { name: 'Company Formation in Dubai – Free Zone & Mainland', slug: 'company-formation' },
      { name: 'Mainland Company Formation Dubai', slug: 'mainland-company-formation' },
      { name: 'Free Zone Company Setup', slug: 'free-zone-company-setup' },
      { name: 'Offshore Company Setup', slug: 'offshore-company-setup' },
      { name: 'UAE Branch Office Setup', slug: 'branch-office-setup' },
      { name: 'UAE Free Zone Company Setup', slug: 'uae-free-zone-company' },
    ],
  },
  {
    title: 'Licenses & Registration',
    icon: FileText,
    color: 'from-amber-400 to-orange-600',
    services: [
      { name: 'Company Registration in Dubai – Fast & Affordable', slug: 'company-registration' },
      { name: 'Trade License in Dubai', slug: 'trade-license' },
      { name: 'E-commerce License Dubai – Online Business Setup', slug: 'ecommerce-license' },
      { name: 'UAE Company Name Registration in Dubai', slug: 'company-name-registration' },
    ],
  },
  {
    title: 'Partners & Sponsorship',
    icon: Handshake,
    color: 'from-red-400 to-rose-600',
    services: [
      { name: 'Local Corporate Sponsor in Dubai', slug: 'local-corporate-sponsor' },
      { name: 'UAE Local Business Partner', slug: 'local-business-partner' },
    ],
  },
  {
    title: 'Visas & Residency',
    icon: IdCard,
    color: 'from-rose-400 to-pink-600',
    services: [
      { name: 'Golden Visa Services', slug: 'golden-visa-services' },
      { name: 'UAE Residence Visa Services in Dubai, UAE', slug: 'residence-visa' },
      { name: 'UAE Dependent Residence Visa', slug: 'dependent-visa' },
    ],
  },
];

const navLinks = [
  { name: 'Home', href: '/', hasDropdown: false },
  { name: 'Free Zone', href: '#', hasDropdown: true, dropdownType: 'freezone' },
  { name: 'Mainland', href: '#', hasDropdown: true, dropdownType: 'mainland' },
  { name: 'Business Setup', href: '#', hasDropdown: true, dropdownType: 'businesssetup' },
  { name: 'Our Packages', href: '/#packages', hasDropdown: false },
  { name: 'Resources', href: '/resources', hasDropdown: false },
];

// ============ COMPONENT ============
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileFreeZoneOpen, setMobileFreeZoneOpen] = useState(false);
  const [mobileMainlandOpen, setMobileMainlandOpen] = useState(false);
  const [mobileBusinessSetupOpen, setMobileBusinessSetupOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <>
      {/* ============ TOP BAR (New Premium Design) ============ */}
      <div className="hidden md:block relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-white/5 overflow-hidden">
        {/* Animated glow line */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent"
        />

        {/* Radial pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-wide">Mon – Fri: 8.00 am – 6.00pm</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Globe size={12} className="text-white/50" />
              <span className="font-semibold tracking-wide">English</span>
              <ChevronDown size={10} className="text-white/50" />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+971566556645"
              className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors font-semibold tracking-wide"
            >
              <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-400/30 transition-all">
                <Phone size={11} />
              </div>
              +971 56 655 6645
            </a>
            <a
              href={getWhatsAppLink("Hi! I'd like to know more about your services.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold tracking-wide"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                <MessageCircle size={11} />
              </div>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ============ MAIN NAVBAR (New Style) ============ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.08)]'
            : 'bg-gradient-to-b from-white to-slate-50/30 border-b border-transparent'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-3.5">
            {/* === LOGO (New Style) === */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 blur-lg"
                />
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 flex items-center justify-center shadow-[0_8px_24px_rgba(56,189,248,0.4)] group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(56,189,248,0.6)] transition-all duration-300">
                  <span className="text-white font-black text-lg tracking-tight">SZ</span>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
                </div>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-[1.4rem] font-black bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300 origin-left tracking-tight">
                  Setup Zone Dubai
                </span>
                <span className="text-[9px] text-slate-400 tracking-[0.25em] uppercase font-bold mt-1">
                  Operated by Brightlink
                </span>
              </div>
            </Link>

            {/* === DESKTOP MENU (New Pill Style) === */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-slate-100/60 p-1 rounded-2xl border border-slate-200/50">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                >
                  {link.hasDropdown ? (
                    <button
                      className={`group relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                        activeDropdown === link.name
                          ? 'text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <ChevronDown
                        size={13}
                        className={`relative z-10 transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2.5}
                      />
                      {activeDropdown === link.name && (
                        <motion.div
                          layoutId="navActive"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="group relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 transition-all duration-300"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-violet-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  )}

                  {/* ========== FREE ZONE DROPDOWN ========== */}
                  <AnimatePresence>
                    {link.hasDropdown &&
                      activeDropdown === link.name &&
                      link.dropdownType === 'freezone' && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          onMouseEnter={() => handleMouseEnter(link.name)}
                          className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[1120px] z-50"
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />

                          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                            <div className="h-1 bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500" />

                            <div className="relative grid grid-cols-12 gap-0">
                              <div className="col-span-10 p-5">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md">
                                      <Globe size={17} className="text-white" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                      <h3 className="text-base font-black text-slate-900 leading-tight">
                                        All Free Zones
                                      </h3>
                                      <p className="text-[10px] text-slate-500 font-medium">26 zones across the UAE</p>
                                    </div>
                                  </div>
                                  <span className="text-[10px] font-black text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full uppercase tracking-widest">
                                    Live
                                  </span>
                                </div>

                                <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                                  {freeZoneCategories.map((category, ci) => {
                                    const CatIcon = category.icon;
                                    return (
                                      <div key={ci}>
                                        <div className="flex items-center gap-2 mb-2">
                                          <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                                            <CatIcon size={11} className="text-white" strokeWidth={2.5} />
                                          </div>
                                          <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">
                                            {category.title}
                                          </span>
                                          <span className="text-[9px] font-bold text-slate-400">
                                            ({category.zones.length})
                                          </span>
                                        </div>

                                        <div className="space-y-0.5">
                                          {category.zones.map((zone, zi) => (
                                            <Link
                                              key={zi}
                                              to={`/free-zones/${zone.slug}`}
                                              className="group/item flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-sky-700 hover:bg-gradient-to-r hover:from-sky-50 hover:to-transparent transition-all duration-150"
                                            >
                                              <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover/item:opacity-100 transition-opacity`} />
                                              <span className="truncate">{zone.name}</span>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="col-span-2 relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-5 overflow-hidden">
                                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-500/20 blur-3xl" />
                                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-violet-500/20 blur-3xl" />
                                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                                <motion.div
                                  animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
                                  transition={{ duration: 5, repeat: Infinity }}
                                  className="absolute top-3 right-3 opacity-15"
                                >
                                  <Crown size={48} className="text-white" />
                                </motion.div>

                                <div className="relative flex flex-col h-full">
                                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4">
                                    <Sparkles size={18} className="text-white" strokeWidth={2.2} />
                                  </div>

                                  <h4 className="text-sm font-black text-white leading-tight mb-2">
                                    Not Sure Which Zone?
                                  </h4>
                                  <p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">
                                    Free consultation to match you with the right zone.
                                  </p>

                                  <a
                                    href={getWhatsAppLink("Hi! I need help choosing the right Free Zone.")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"
                                  >
                                    <MessageCircle size={13} strokeWidth={2.5} />
                                    Ask Expert
                                    <ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Star size={12} className="text-amber-400" fill="currentColor" />
                                <span className="text-[11px] font-bold text-slate-600">
                                  <span className="text-slate-900">500+ businesses</span> launched
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  Zero Tax
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                  100% Ownership
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                    {/* ========== MAINLAND DROPDOWN ========== */}
                    {link.hasDropdown &&
                      activeDropdown === link.name &&
                      link.dropdownType === 'mainland' && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          onMouseEnter={() => handleMouseEnter(link.name)}
                          className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[980px] z-50"
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />

                          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                            <div className="h-1 bg-gradient-to-r from-emerald-400 via-sky-500 to-violet-500" />

                            <div className="relative grid grid-cols-12 gap-0">
                              <div className="col-span-9 p-5">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-600 flex items-center justify-center shadow-md">
                                      <Building2 size={17} className="text-white" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                      <h3 className="text-base font-black text-slate-900 leading-tight">
                                        Mainland Services
                                      </h3>
                                      <p className="text-[10px] text-slate-500 font-medium">5 premium services</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                  {mainlandServices.map((service, si) => {
                                    const Icon = service.icon;
                                    return (
                                      <Link
                                        key={si}
                                        to={`/mainland/${service.slug}`}
                                        className="group/item relative flex items-start gap-3 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-white border border-transparent hover:border-slate-200 transition-all duration-200"
                                      >
                                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300`}>
                                          <Icon size={20} className="text-white" strokeWidth={2.5} />
                                        </div>
                                        <div className="flex-1 min-w-0 pt-0.5">
                                          <h4 className="text-sm font-black text-slate-900 leading-tight mb-1 group-hover/item:text-sky-700 transition-colors">
                                            {service.name}
                                          </h4>
                                          <p className="text-[11px] text-slate-500 font-medium leading-snug">
                                            {service.description}
                                          </p>
                                        </div>
                                        <ArrowRight size={14} className="text-slate-400 group-hover/item:text-sky-600 group-hover/item:translate-x-0.5 transition-all mt-2.5 flex-shrink-0" strokeWidth={2.5} />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="col-span-3 relative bg-gradient-to-br from-emerald-950 via-slate-900 to-sky-950 p-5 overflow-hidden">
                                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl" />
                                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-sky-500/20 blur-3xl" />
                                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                                <motion.div
                                  animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
                                  transition={{ duration: 5, repeat: Infinity }}
                                  className="absolute top-3 right-3 opacity-15"
                                >
                                  <Landmark size={48} className="text-white" />
                                </motion.div>

                                <div className="relative flex flex-col h-full">
                                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4">
                                    <Sparkles size={18} className="text-white" strokeWidth={2.2} />
                                  </div>

                                  <h4 className="text-sm font-black text-white leading-tight mb-2">
                                    Go Mainland?
                                  </h4>
                                  <p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">
                                    Get expert advice on mainland setup, visas, and office solutions.
                                  </p>

                                  <a
                                    href={getWhatsAppLink("Hi! I need help with Mainland UAE business setup.")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"
                                  >
                                    <MessageCircle size={13} strokeWidth={2.5} />
                                    Ask Expert
                                    <ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                                  </a>

                                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-white/60">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                      Full UAE Market
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-white/60">
                                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                      Govt Contracts
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Star size={12} className="text-amber-400" fill="currentColor" />
                                <span className="text-[11px] font-bold text-slate-600">
                                  <span className="text-slate-900">2,000+ activities</span> approved
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  Full Local Trading
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                  100% Ownership
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                    {/* ========== BUSINESS SETUP DROPDOWN ========== */}
                    {link.hasDropdown &&
                      activeDropdown === link.name &&
                      link.dropdownType === 'businesssetup' && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          onMouseEnter={() => handleMouseEnter(link.name)}
                          className="fixed top-[72px] left-0 right-0 mx-auto w-[calc(100vw-3rem)] max-w-[1180px] z-50"
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10 rounded-sm" />

                          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden">
                            <div className="h-1 bg-gradient-to-r from-orange-400 via-red-500 to-rose-500" />

                            <div className="relative grid grid-cols-12 gap-0">
                              <div className="col-span-10 p-5">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-md">
                                      <Briefcase size={17} className="text-white" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                      <h3 className="text-base font-black text-slate-900 leading-tight">
                                        Business Setup Services
                                      </h3>
                                      <p className="text-[10px] text-slate-500 font-medium">15 services across company formation, licenses, visas & more</p>
                                    </div>
                                  </div>
                                  <span className="text-[10px] font-black text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full uppercase tracking-widest">
                                    Complete
                                  </span>
                                </div>

                                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                  {businessSetupCategories.map((category, ci) => {
                                    const CatIcon = category.icon;
                                    return (
                                      <div key={ci}>
                                        <div className="flex items-center gap-2 mb-2">
                                          <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                                            <CatIcon size={11} className="text-white" strokeWidth={2.5} />
                                          </div>
                                          <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider">
                                            {category.title}
                                          </span>
                                          <span className="text-[9px] font-bold text-slate-400">
                                            ({category.services.length})
                                          </span>
                                        </div>

                                        <div className="space-y-0.5">
                                          {category.services.map((service, si) => (
                                            <Link
                                              key={si}
                                              to={`/services/${service.slug}`}
                                              className="group/item flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-all duration-150"
                                            >
                                              <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover/item:opacity-100 transition-opacity`} />
                                              <span className="truncate">{service.name}</span>
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="col-span-2 relative bg-gradient-to-br from-orange-950 via-slate-950 to-red-950 p-5 overflow-hidden">
                                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-orange-500/20 blur-3xl" />
                                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-red-500/20 blur-3xl" />
                                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                                <motion.div
                                  animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
                                  transition={{ duration: 5, repeat: Infinity }}
                                  className="absolute top-3 right-3 opacity-15"
                                >
                                  <Rocket size={48} className="text-white" />
                                </motion.div>

                                <div className="relative flex flex-col h-full">
                                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4">
                                    <Sparkles size={18} className="text-white" strokeWidth={2.2} />
                                  </div>

                                  <h4 className="text-sm font-black text-white leading-tight mb-2">
                                    Start Your Business?
                                  </h4>
                                  <p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4 flex-1">
                                    Complete setup services — from trade license to visa & bank account.
                                  </p>

                                  <a
                                    href={getWhatsAppLink("Hi! I need help with business setup in Dubai.")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/cta inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 font-bold text-[11px] shadow-lg hover:scale-105 transition-all duration-300"
                                  >
                                    <MessageCircle size={13} strokeWidth={2.5} />
                                    Get Started
                                    <ArrowRight size={12} className="group-hover/cta:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="relative px-5 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Star size={12} className="text-amber-400" fill="currentColor" />
                                <span className="text-[11px] font-bold text-slate-600">
                                  <span className="text-slate-900">10,000+ companies</span> setup successfully
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                  Trade License
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                  Visa & Banking
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                  Golden Visa
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* === RIGHT SIDE — CTAs (New Style) === */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={getWhatsAppLink("Hi! I'd like to know more about your services.")}
                target="_blank"
                rel="noreferrer"
                className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 hover:border-emerald-300 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} className="text-emerald-600" strokeWidth={2.2} />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping" />
                </span>
              </a>

              <a
                href="tel:+971566556645"
                className="group w-10 h-10 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 hover:border-sky-300 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20"
                aria-label="Call"
              >
                <Phone size={18} className="text-sky-600" strokeWidth={2.2} />
              </a>

              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold text-xs shadow-[0_8px_30px_rgba(15,23,42,0.25)] hover:shadow-[0_12px_45px_rgba(15,23,42,0.4)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Rocket size={14} className="relative" strokeWidth={2.5} />
                <span className="relative">Free Consultation</span>
              </Link>
            </div>

            {/* === MOBILE TOGGLE === */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X size={20} className="text-slate-900" strokeWidth={2.5} />
              ) : (
                <Menu size={20} className="text-slate-900" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* ============ MOBILE MENU ============ */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
            >
              <div className="px-6 py-5 space-y-1 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    {link.hasDropdown && link.dropdownType === 'freezone' ? (
                      <div>
                        <button
                          onClick={() => setMobileFreeZoneOpen(!mobileFreeZoneOpen)}
                          className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-sky-50 transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <Globe size={16} className="text-sky-600" strokeWidth={2.5} />
                            {link.name}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-500 transition-transform ${mobileFreeZoneOpen ? 'rotate-180' : ''}`}
                            strokeWidth={2.5}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileFreeZoneOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 ml-6 border-l-2 border-sky-100"
                            >
                              <div className="py-2 space-y-3">
                                {freeZoneCategories.map((category, ci) => {
                                  const CatIcon = category.icon;
                                  return (
                                    <div key={ci} className="pt-2">
                                      <div className="flex items-center gap-2 mb-1.5 px-3">
                                        <div className={`w-4 h-4 rounded bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                          <CatIcon size={9} className="text-white" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                                          {category.title}
                                        </span>
                                      </div>
                                      {category.zones.map((zone, zi) => (
                                        <Link
                                          key={zi}
                                          to={`/free-zones/${zone.slug}`}
                                          className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                                        >
                                          {zone.name}
                                        </Link>
                                      ))}
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : link.hasDropdown && link.dropdownType === 'mainland' ? (
                      <div>
                        <button
                          onClick={() => setMobileMainlandOpen(!mobileMainlandOpen)}
                          className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-emerald-50 transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <Building2 size={16} className="text-emerald-600" strokeWidth={2.5} />
                            {link.name}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-500 transition-transform ${mobileMainlandOpen ? 'rotate-180' : ''}`}
                            strokeWidth={2.5}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileMainlandOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 ml-6 border-l-2 border-emerald-100"
                            >
                              <div className="py-2 space-y-1">
                                {mainlandServices.map((service, si) => {
                                  const Icon = service.icon;
                                  return (
                                    <Link
                                      key={si}
                                      to={`/mainland/${service.slug}`}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-emerald-50 transition-colors"
                                    >
                                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                                        <Icon size={16} className="text-white" strokeWidth={2.5} />
                                      </div>
                                      <span className="text-[13px] font-semibold text-slate-600 hover:text-emerald-600">
                                        {service.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : link.hasDropdown && link.dropdownType === 'businesssetup' ? (
                      <div>
                        <button
                          onClick={() => setMobileBusinessSetupOpen(!mobileBusinessSetupOpen)}
                          className="w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-orange-50 transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <Briefcase size={16} className="text-orange-600" strokeWidth={2.5} />
                            {link.name}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-500 transition-transform ${mobileBusinessSetupOpen ? 'rotate-180' : ''}`}
                            strokeWidth={2.5}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileBusinessSetupOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 ml-6 border-l-2 border-orange-100"
                            >
                              <div className="py-2 space-y-3">
                                {businessSetupCategories.map((category, ci) => {
                                  const CatIcon = category.icon;
                                  return (
                                    <div key={ci} className="pt-2">
                                      <div className="flex items-center gap-2 mb-1.5 px-3">
                                        <div className={`w-4 h-4 rounded bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                          <CatIcon size={9} className="text-white" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                                          {category.title}
                                        </span>
                                      </div>
                                      {category.services.map((service, si) => (
                                        <Link
                                          key={si}
                                          to={`/services/${service.slug}`}
                                          className="block px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="block p-3.5 rounded-xl text-sm font-bold text-slate-900 hover:bg-sky-50 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4 mt-2 border-t border-slate-200 space-y-3"
                >
                  <a
                    href={getWhatsAppLink("Hi! I'd like to know more about your services.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-sm"
                  >
                    <MessageCircle size={16} strokeWidth={2.5} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+971566556645"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-bold text-sm"
                  >
                    <Phone size={16} strokeWidth={2.5} />
                    +971 56 655 6645
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold text-sm shadow-lg"
                  >
                    <Rocket size={16} strokeWidth={2.5} />
                    Free Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}