// File: src/pages/Blog.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon, ChevronRight, BookOpen, Search, Calendar, Tag,
  ArrowRight, Clock, User, MessageCircle, Phone, Mail, MapPin,
  Star, Sparkles, TrendingUp, FileText, Folder, Filter, ArrowUpRight,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';

// ============ DATA ============
const blogPosts = [
  { title: 'How to Notarize UAE Documents for Business Use', date: 'Oct 15, 2026', readTime: '5 min', category: 'Legal', excerpt: 'Learn the step-by-step process to notarize your UAE business documents legally and efficiently.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
  { title: 'Dubai Lease Regulations for Business Owners', date: 'Oct 12, 2026', readTime: '7 min', category: 'Legal', excerpt: 'A complete guide to Dubai commercial lease regulations every business owner must know.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80' },
  { title: 'A Dubai Holding Structure Example for Investors', date: 'Oct 10, 2026', readTime: '6 min', category: 'Business Setup', excerpt: 'Real-world example of how to structure a Dubai holding company for maximum benefits.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
  { title: 'DMCC License Review: Costs, Fit, and Key Rules', date: 'Oct 08, 2026', readTime: '8 min', category: 'Free Zones', excerpt: 'In-depth review of DMCC free zone license costs, requirements, and benefits.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80' },
  { title: 'How to Issue UAE Invoices Without Compliance Errors', date: 'Oct 05, 2026', readTime: '5 min', category: 'Accounting', excerpt: 'Ensure your UAE invoices meet all compliance requirements with these tips.', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80' },
  { title: 'Are Flexi Desks Mandatory in UAE Business Setup?', date: 'Oct 02, 2026', readTime: '4 min', category: 'Business Setup', excerpt: 'Everything you need to know about flexi desks in UAE company formation.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { title: 'Shared Desk Versus Private Office in Dubai', date: 'Sep 28, 2026', readTime: '6 min', category: 'Living in Dubai', excerpt: 'Comparing shared desk vs private office options for your Dubai business.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
  { title: 'Foreign Investment in Dubai: A Practical Guide', date: 'Sep 25, 2026', readTime: '9 min', category: 'Entrepreneurship', excerpt: 'Practical guide for foreign investors looking to invest in Dubai businesses.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80' },
  { title: 'How to Change UAE Shareholders Without Delays', date: 'Sep 22, 2026', readTime: '5 min', category: 'Legal', excerpt: 'Step-by-step process to change shareholders in your UAE company efficiently.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80' },
  { title: 'UAE E-Commerce Licensing Trends Shaping 2026', date: 'Sep 20, 2026', readTime: '7 min', category: 'Business Setup', excerpt: 'Discover the latest UAE e-commerce licensing trends for 2026 and beyond.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80' },
  { title: 'Dubai Business Districts: Choose the Right Base', date: 'Sep 18, 2026', readTime: '8 min', category: 'Living in Dubai', excerpt: 'Compare Dubai business districts to find the perfect location for your business.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
  { title: 'Freezone Audit Requirements for UAE Companies', date: 'Sep 15, 2026', readTime: '6 min', category: 'Accounting', excerpt: 'Understanding free zone audit requirements for UAE companies in 2026.', image: 'https://images.unsplash.com/photo-1554224312-3bb0e02b0a8a?w=800&q=80' },
  { title: 'How to Liquidate a UAE Company: Key Steps', date: 'Sep 12, 2026', readTime: '7 min', category: 'Legal', excerpt: 'Complete process to liquidate a UAE company with minimal complications.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80' },
  { title: 'Top UAE Accounting Mistakes That Cost Firms', date: 'Sep 10, 2026', readTime: '5 min', category: 'Accounting', excerpt: 'Avoid these common UAE accounting mistakes that cost businesses money.', image: 'https://images.unsplash.com/photo-1554224312-53e05c1c5a6d?w=800&q=80' },
  { title: 'UAE Sole Proprietorship Versus LLC Compared', date: 'Sep 08, 2026', readTime: '6 min', category: 'Business Setup', excerpt: 'Sole proprietorship vs LLC in UAE — which is right for your business?', image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80' },
  { title: 'How to Get UAE Establishment Card for Your Company', date: 'Sep 05, 2026', readTime: '5 min', category: 'Business Setup', excerpt: 'Everything you need to know about UAE establishment cards.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80' },
  { title: 'Dubai License Amendments: When to Update', date: 'Sep 02, 2026', readTime: '4 min', category: 'Legal', excerpt: 'When and how to update your Dubai business license amendments.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80' },
  { title: 'UAE UBO Compliance Requirements for Businesses', date: 'Aug 28, 2026', readTime: '7 min', category: 'Legal', excerpt: 'Complete guide to UAE Ultimate Beneficial Owner compliance requirements.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
  { title: '10 Best Activities for Online Businesses in UAE', date: 'Aug 25, 2026', readTime: '8 min', category: 'Business Setup', excerpt: 'Top 10 business activities for online businesses in the UAE.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80' },
  { title: 'UAE Employee Sponsorship for Growing Companies', date: 'Aug 22, 2026', readTime: '6 min', category: 'Human Resources', excerpt: 'Guide to UAE employee sponsorship for companies looking to grow.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80' },
  { title: 'UAE Holding Company Versus SPV Compared', date: 'Aug 20, 2026', readTime: '7 min', category: 'Business Setup', excerpt: 'Holding company vs SPV in UAE — pros, cons, and use cases.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
  { title: 'Consultant License Options in Dubai and the UAE', date: 'Aug 18, 2026', readTime: '6 min', category: 'Business Setup', excerpt: 'Explore your consultant license options in Dubai and across the UAE.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
  { title: 'Investor Visa Versus Employment Visa in the UAE', date: 'Aug 15, 2026', readTime: '5 min', category: 'Business Visa', excerpt: 'Comparing investor visa and employment visa options in the UAE.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80' },
  { title: 'Dubai Economic Substance Regulations Guide', date: 'Aug 12, 2026', readTime: '8 min', category: 'Legal', excerpt: 'Complete guide to Dubai Economic Substance Regulations for businesses.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
  { title: 'Business Banking in Dubai for New Companies', date: 'Aug 10, 2026', readTime: '6 min', category: 'Finance', excerpt: 'How to open a business bank account in Dubai for your new company.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80' },
  { title: 'Does UAE VAT Apply to Freelancers? Key Rules', date: 'Aug 08, 2026', readTime: '5 min', category: 'Accounting', excerpt: 'Understanding UAE VAT rules for freelancers and self-employed professionals.', image: 'https://images.unsplash.com/photo-1554224312-3bb0e02b0a8a?w=800&q=80' },
  { title: 'Restaurant Licensing Example for Dubai Investors', date: 'Aug 05, 2026', readTime: '7 min', category: 'Business Setup', excerpt: 'A practical example of restaurant licensing in Dubai for investors.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { title: 'Dubai Startup Expansion for Smarter Market Entry', date: 'Aug 02, 2026', readTime: '6 min', category: 'Entrepreneurship', excerpt: 'Smart strategies for startups expanding into the Dubai market.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
  { title: 'UAE Trademark Registration Guide for Business Owners', date: 'Jul 28, 2026', readTime: '8 min', category: 'Legal', excerpt: 'Complete guide to registering a trademark in the UAE for your business.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80' },
];

const categories = [
  { name: 'Accounting', count: 4 },
  { name: 'Business and Leadership Skills', count: 3 },
  { name: 'Business Plan Templates', count: 2 },
  { name: 'Business Setup', count: 12 },
  { name: 'Business Software and Tools', count: 3 },
  { name: 'Business Success and Challenges', count: 4 },
  { name: 'Entrepreneurship', count: 5 },
  { name: 'Featured Posts', count: 6 },
  { name: 'Finance', count: 3 },
  { name: 'Free Zones', count: 5 },
  { name: 'Human Resources', count: 2 },
  { name: 'Legal', count: 9 },
  { name: 'Living in Dubai', count: 4 },
  { name: 'Mainland', count: 3 },
  { name: 'UAE Company Setup', count: 8 },
];

const archives = [
  'October 2026', 'September 2026', 'August 2026', 'July 2026',
  'June 2026', 'May 2026', 'April 2026', 'March 2026',
  'February 2026', 'January 2026', 'December 2025',
  'October 2025', 'September 2025', 'July 2025', 'June 2025',
];

const popularTags = [
  'Business Visa', 'UAE Company Formation', 'Dubai Business Consultancy',
  'Dubai Business License', 'Dubai Business Opportunities', 'Free Zone Company Setup',
  'Golden Visa', 'UAE Investor Visa', 'UAE Mainland', 'Company Registration',
  'Start a Business in UAE', 'UAE Business Immigration', 'UAE Business Setup',
  'UAE Company Registration',
];

const faqs = [
  { q: 'How much does it cost to start a business in Dubai?', a: 'Business setup in Dubai starts from AED 9,500 for a basic free zone license. Mainland setup starts from AED 14,500.' },
  { q: 'Can a foreigner 100% own a company in Dubai?', a: 'Yes, foreigners can 100% own companies in most free zones and many mainland activities.' },
  { q: 'What is the cheapest free zone in Dubai?', a: 'RAK ICC, Ajman FTZ, and SRTIP offer the most affordable packages starting from AED 5,900.' },
  { q: 'How long does company registration take in Dubai?', a: 'Free zone registration takes 3-7 business days. Mainland takes 2-4 weeks.' },
  { q: 'Do I need a local partner in Dubai?', a: 'Not in free zones. In mainland, many activities now allow 100% foreign ownership.' },
];

// ============ COMPONENT ============
export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">

      {/* ============ 1. HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <BookOpen size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <span>/</span><span>Blog</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <Sparkles size={14} className="text-violet-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">Resources & Insights</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-3xl mb-6">
            Business Setup <span className="text-violet-300">Blog</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl">
            Dubai Company Blog — expert guides, tips & insights on UAE business setup, visas, taxes, and more.
          </motion.p>
        </div>
      </section>

      {/* ============ 2. MAIN CONTENT — 2 COLUMN ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-violet-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

            {/* ========== LEFT: BLOG POSTS GRID ========== */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-black text-[#0A0F1F] mb-1">Latest Articles</h2>
                  <p className="text-sm text-slate-500 font-medium">
                    {searchQuery ? `${filteredPosts.length} results for "${searchQuery}"` : `Showing ${blogPosts.length} articles`}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200">
                  <TrendingUp size={14} className="text-violet-600" />
                  <span className="text-xs font-bold text-violet-700 uppercase tracking-wider">Trending</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                    className="group relative"
                  >
                    <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-white text-[10px] font-black text-violet-700 uppercase tracking-wider shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} />
                            {post.date}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                          <span className="flex items-center gap-1.5">
                            <Clock size={11} />
                            {post.readTime} read
                          </span>
                        </div>

                        <h3 className="text-base font-black text-[#0A0F1F] leading-snug mb-3 group-hover:text-violet-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <Link
                          to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="group/btn inline-flex items-center gap-2 text-xs font-black text-violet-700 hover:text-violet-900 uppercase tracking-widest transition-colors"
                        >
                          Read More
                          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <Search size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 font-bold">No articles found</p>
                  <button onClick={() => setSearchQuery('')} className="mt-4 text-sm text-violet-600 font-bold hover:underline">
                    Clear search
                  </button>
                </div>
              )}
            </div>

            {/* ========== RIGHT: SIDEBAR ========== */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Search */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} className="text-violet-600" />
                  Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-400 focus:bg-white outline-none transition-colors text-sm font-medium text-slate-900 placeholder:text-slate-400"
                  />
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock size={14} className="text-violet-600" />
                  Recent Posts
                </h3>
                <div className="space-y-3">
                  {blogPosts.slice(0, 5).map((post, i) => (
                    <Link
                      key={i}
                      to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="group flex items-start gap-3 p-2 rounded-xl hover:bg-violet-50 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-[#0A0F1F] leading-snug mb-1 line-clamp-2 group-hover:text-violet-700 transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                          <Calendar size={9} /> {post.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Archives */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar size={14} className="text-violet-600" />
                  Archives
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {archives.map((month, i) => (
                    <Link
                      key={i}
                      to={`/blog/archive/${month.toLowerCase().replace(' ', '-')}`}
                      className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <ChevronRight size={11} className="text-violet-500 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                        {month}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Folder size={14} className="text-violet-600" />
                  Categories
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {categories.map((cat, i) => (
                    <Link
                      key={i}
                      to={`/blog/category/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-violet-700 hover:bg-violet-50 transition-colors"
                    >
                      <span className="flex items-center gap-2 truncate">
                        <Tag size={11} className="text-violet-500 flex-shrink-0" />
                        <span className="truncate">{cat.name}</span>
                      </span>
                      <span className="text-[10px] font-black text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-violet-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, i) => (
                    <Link
                      key={i}
                      to={`/blog/tag/${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-700 transition-all"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Sparkles size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight mb-2">Need Help with Setup?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">
                    Talk to our experts — free consultation for your UAE business.
                  </p>
                  <a
                    href={getWhatsAppLink("Hi! I need help with UAE business setup.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-violet-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={14} strokeWidth={2.5} />Ask Expert
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ 3. FAQ ============ */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <MessageCircle size={14} className="text-violet-600" />
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Quick Answers</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1F] leading-[1.1] tracking-tight mb-5">
                Frequently Asked <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Questions</span>
              </h2>

              <p className="text-base text-[#475569] font-medium leading-relaxed mb-8">
                Everything you need to know before starting your UAE business. Still have questions? We're one message away.
              </p>

              {/* Contact Card */}
              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-3 -right-3 opacity-20">
                  <Phone size={80} className="text-white" />
                </motion.div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <MessageCircle size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2">Get In Touch</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Talk to our experts about setup, visas, and costs.</p>

                  <div className="space-y-3">
                    <a href="tel:+971566556645" className="flex items-center gap-2.5 text-white hover:text-violet-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Phone size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold">+971 56 655 6645</span>
                    </a>
                    <a href="mailto:info@setupzonedubai.ae" className="flex items-center gap-2.5 text-white hover:text-violet-200 transition">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xl flex items-center justify-center">
                        <Mail size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold break-all">info@setupzonedubai.ae</span>
                    </a>
                    <a href={getWhatsAppLink("Hi! I need guidance on UAE business setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-violet-700 font-bold text-xs shadow-lg hover:scale-105 transition-transform">
                      <MessageCircle size={14} strokeWidth={2.5} />WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-3xl bg-white border border-slate-200 hover:border-violet-200 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
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

      {/* ============ 4. FINAL CTA ============ */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-violet-950/70 to-purple-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
                    <Sparkles size={14} className="text-white" />
                    <span className="text-xs font-bold tracking-wider uppercase text-white">Start Your Dubai Business</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                    From <span className="text-violet-300">AED 5,999</span> — Calculate Your Cost
                  </h2>

                  <p className="text-base md:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-xl drop-shadow">
                    Get a free consultation and instant quote for your UAE business setup. No hidden fees.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm shadow-xl hover:scale-105 transition-all duration-300">
                      <MessageCircle size={16} />WhatsApp Us
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all duration-300">
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '10,000+', label: 'Companies Setup' },
                      { value: '15+', label: 'Years Experience' },
                      { value: '65+', label: 'Jurisdictions' },
                      { value: '24/7', label: 'Customer Care' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center"
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
        </div>
      </section>
    </div>
  );
}