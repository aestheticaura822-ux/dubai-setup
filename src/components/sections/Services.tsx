import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Globe,
  Briefcase,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    id: 'freezone',
    icon: Building2,
    title: 'Free Zone Setup',
    tagline: 'For international & remote businesses',
    description:
      '100% ownership, zero tax, remote-friendly — we match you with the best free zone for your activity and budget.',
    image:
      'https://images.pexels.com/photos/36260007/pexels-photo-36260007.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      '100% foreign ownership',
      '0% personal & corporate tax',
      '5 free business activities',
      'Remote-friendly setup',
    ],
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    glowColor: 'rgba(14,165,233,0.4)',
    accentColor: 'text-sky-600',
    bgAccent: 'bg-sky-50',
    borderAccent: 'border-sky-200',
    number: '01',
  },
  {
    id: 'mainland',
    icon: Globe,
    title: 'Mainland Setup',
    tagline: 'For local UAE market operations',
    description:
      'Trade across the UAE, hire freely, and expand your footprint. We handle all DED paperwork, licensing, and office support.',
    image:
      'https://images.pexels.com/photos/32761488/pexels-photo-32761488.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Full UAE market access',
      'No trading restrictions',
      'Hire employees freely',
      'Government tenders eligible',
    ],
    gradient: 'from-violet-400 via-purple-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.4)',
    accentColor: 'text-violet-600',
    bgAccent: 'bg-violet-50',
    borderAccent: 'border-violet-200',
    number: '02',
  },
  {
    id: 'support',
    icon: Briefcase,
    title: 'Business Support',
    tagline: 'For active companies in UAE',
    description:
      'Running a company? We take care of the backend: VAT, banking, renewals, payroll, visas, legal docs & more.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    features: [
      'VAT & corporate tax filing',
      'Bank account management',
      'License & visa renewals',
      'Payroll & accounting',
    ],
    gradient: 'from-amber-400 via-orange-500 to-orange-600',
    glowColor: 'rgba(245,158,11,0.4)',
    accentColor: 'text-amber-600',
    bgAccent: 'bg-amber-50',
    borderAccent: 'border-amber-200',
    number: '03',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        type: 'spring',
        stiffness: 60,
      }}
      className="group relative"
      style={{ perspective: '1500px' }}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-2 rounded-[36px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
        style={{ background: service.glowColor }}
      />

      {/* Card */}
      <div className="relative h-full rounded-[32px] bg-white border border-border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)] group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)] group-hover:-translate-y-3 transition-all duration-500">
        {/* Top gradient line */}
        <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundColor: '#E2E8F0',
            }}
          />

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-70 mix-blend-multiply`}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Number — top right */}
          <div className="absolute top-5 right-5">
            <span className="text-6xl font-black text-white/20 leading-none tracking-tight">
              {service.number}
            </span>
          </div>

          {/* Icon — top left */}
          <div className="absolute top-5 left-5">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/30 blur-lg rounded-2xl" />
              <div className="relative w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg">
                <Icon size={26} className="text-white" strokeWidth={2.2} />
              </div>
            </motion.div>
          </div>

          {/* Title — bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-1.5">
              {service.tagline}
            </p>
            <h3 className="text-2xl font-black text-white leading-tight tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-7">
          {/* Description */}
          <p className="text-sm text-[#475569] font-medium leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features List */}
          <div className="space-y-2.5 mb-7">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <div
                  className={`w-5 h-5 rounded-full ${service.bgAccent} ${service.borderAccent} border flex items-center justify-center flex-shrink-0`}
                >
                  <CheckCircle2
                    size={12}
                    className={service.accentColor}
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-5" />

          {/* CTA */}
          <a
            href={`#${service.id}`}
            className="group/btn flex items-center justify-between"
          >
            <span className="text-sm font-black text-[#0A0F1F] group-hover/btn:text-transparent group-hover/btn:bg-clip-text group-hover/btn:bg-gradient-to-r group-hover/btn:from-sky-600 group-hover/btn:to-violet-600 transition-all">
              Learn More
            </span>
            <div
              className={`w-9 h-9 rounded-full ${service.bgAccent} ${service.borderAccent} border flex items-center justify-center group-hover/btn:scale-110 transition-all duration-300`}
            >
              <ArrowUpRight
                size={16}
                className={`${service.accentColor} transition-colors`}
                strokeWidth={2.5}
              />
            </div>
          </a>
        </div>

        {/* Corner deco */}
        <div
          className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.04] group-hover:opacity-[0.1] blur-2xl transition-opacity duration-500 pointer-events-none`}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden"
    >
      {/* Mesh background */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-brand-sky/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-brand-violet/8 blur-[150px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-border shadow-soft mb-6">
            <Sparkles size={14} className="text-brand-sky" />
            <span className="text-xs font-bold tracking-wider uppercase text-txt-muted">
              Our Core Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
            Comprehensive Business Setup in{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Dubai & UAE</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7C60 2 120 1 180 3C220 4.5 260 6 298 8"
                  stroke="url(#servicesUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="servicesUnderline"
                    x1="0"
                    y1="0"
                    x2="300"
                    y2="0"
                  >
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed">
            Free Zone, Mainland, and Full Business Support — everything you need
            to launch and grow in the UAE, all in one place.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 md:mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-border shadow-soft">
            <span className="text-sm font-semibold text-[#475569]">
              Not sure which is right for you?
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-white font-bold text-sm shadow-[0_8px_30px_rgba(14,165,233,0.35)] hover:shadow-[0_12px_45px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300"
            >
              Talk to an Expert
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}