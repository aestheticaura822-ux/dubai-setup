import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  Home as HomeIcon,
} from 'lucide-react';
import { specializedServices } from '../data/specializedServices';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = specializedServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0A0F1F] mb-4">
            Service Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-bold"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* === HERO BANNER === */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium"
          >
            <Link to="/" className="hover:text-white transition flex items-center gap-1.5">
              <HomeIcon size={14} />
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-white font-bold">{service.shortTitle}</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-6"
          >
            <Sparkles size={14} className="text-white" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">
              {service.tagline}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mb-6"
          >
            {service.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-3xl mb-10"
          >
            {service.heroDescription}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A0F1F] font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://wa.me/971522973861"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/30 transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* === DYNAMIC SECTIONS === */}
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        {service.sections.map((section, sIdx) => {
          // TEXT SECTION
          if (section.type === 'text') {
            return (
              <motion.section
                key={sIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto mb-14 md:mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-5">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed">
                  {section.content}
                </p>
              </motion.section>
            );
          }

          // FEATURES SECTION
          if (section.type === 'features') {
            return (
              <motion.section
                key={sIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14 md:mb-20"
              >
                <div className="text-center mb-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-3">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="text-base text-[#64748B] font-medium">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.items?.map((item: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="group relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                    >
                      {/* Top gradient line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                      />

                      {/* Check icon */}
                      <div
                        className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500`}
                      >
                        <CheckCircle2
                          size={18}
                          className="text-white"
                          strokeWidth={2.5}
                        />
                      </div>

                      <h3 className="text-base font-black text-[#0A0F1F] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#64748B] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          }

          // PROCESS SECTION
          if (section.type === 'process') {
            return (
              <motion.section
                key={sIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14 md:mb-20"
              >
                <div className="text-center mb-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                  {section.items?.map((item: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative p-6 rounded-3xl bg-white border border-border shadow-[0_10px_40px_rgba(15,23,42,0.05)] text-center"
                    >
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${service.gradient}`}
                      />
                      <div
                        className={`text-4xl font-black bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent mb-3 leading-none`}
                      >
                        {item.step}
                      </div>
                      <h3 className="text-sm font-black text-[#0A0F1F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          }

          // FAQ SECTION
          if (section.type === 'faq') {
            return (
              <motion.section
                key={sIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14 md:mb-20 max-w-3xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.items?.map((item: any, i: number) => (
                    <motion.details
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="group p-5 rounded-2xl bg-white border border-border hover:border-transparent hover:shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-300 cursor-pointer"
                    >
                      <summary className="flex items-center justify-between font-black text-[#0A0F1F] text-base list-none">
                        {item.q}
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-sky to-brand-violet flex items-center justify-center text-white text-sm flex-shrink-0 ml-4 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-[#475569] font-medium leading-relaxed">
                        {item.a}
                      </p>
                    </motion.details>
                  ))}
                </div>
              </motion.section>
            );
          }

          return null;
        })}

        {/* === FINAL CTA === */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-12"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-base font-medium mb-8">
              Talk to our experts about {service.shortTitle} and get a free
              consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A0F1F] font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+971522973861"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/30 transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}