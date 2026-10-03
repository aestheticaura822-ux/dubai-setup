// File: src/pages/BlogTagPage.tsx

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home as HomeIcon, ChevronRight, Calendar, Clock, Tag as TagIcon,
  ArrowRight, Star, Sparkles, Phone, Headset, BookOpen,
  Search, Folder, ArrowUpRight, MessageCircle, Hash, User,
} from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';

// ============ ALL BLOG POSTS ============
const allPosts = [
  { slug: 'how-to-notarize-uae-documents-for-business-use', title: 'How to Notarize UAE Documents for Business Use', date: 'Oct 15, 2026', readTime: '8 min', category: 'Legal', tags: ['Legal', 'UAE Business Setup'], excerpt: 'A bank may request a notarized board resolution. Learn the full process for notarizing UAE documents.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
  { slug: 'dubai-lease-regulations-for-business-owners', title: 'Dubai Lease Regulations for Business Owners', date: 'Oct 12, 2026', readTime: '10 min', category: 'Legal', tags: ['Legal', 'Dubai Business License'], excerpt: 'Commercial leases in Dubai are governed by specific regulations every business owner must understand.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80' },
  { slug: 'a-dubai-holding-structure-example-for-investors', title: 'A Dubai Holding Structure Example for Investors', date: 'Oct 10, 2026', readTime: '9 min', category: 'Business Setup', tags: ['Business Setup', 'UAE Investor Visa'], excerpt: 'A Dubai holding structure is a common way for investors to organize assets and subsidiaries.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
  { slug: 'dmcc-license-review-costs-fit-and-key-rules', title: 'DMCC License Review: Costs, Fit, and Key Rules', date: 'Oct 08, 2026', readTime: '11 min', category: 'Free Zones', tags: ['Free Zones', 'Dubai Business License'], excerpt: 'The DMCC is one of the largest and most established free zones in Dubai. Is it right for you?', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80' },
  { slug: 'how-to-issue-uae-invoices-without-compliance-errors', title: 'How to Issue UAE Invoices Without Compliance Errors', date: 'Oct 05, 2026', readTime: '8 min', category: 'Accounting', tags: ['Accounting', 'UAE Business Setup'], excerpt: 'UAE invoices are legal documents. If they don\'t meet FTA requirements, they cause problems.', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80' },
  { slug: 'are-flexi-desks-mandatory-in-uae-business-setup', title: 'Are Flexi Desks Mandatory in UAE Business Setup?', date: 'Oct 02, 2026', readTime: '6 min', category: 'Business Setup', tags: ['Business Setup', 'Free Zone Company Setup'], excerpt: 'Do you really need a flexi desk? It depends on your license type and jurisdiction.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { slug: 'shared-desk-versus-private-office-in-dubai', title: 'Shared Desk Versus Private Office in Dubai', date: 'Sep 28, 2026', readTime: '8 min', category: 'Living in Dubai', tags: ['Living in Dubai'], excerpt: 'Shared desks and private offices are the two most common workspace options in Dubai.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
  { slug: 'foreign-investment-in-dubai-a-practical-guide', title: 'Foreign Investment in Dubai: A Practical Guide', date: 'Sep 25, 2026', readTime: '12 min', category: 'Entrepreneurship', tags: ['Entrepreneurship', 'UAE Business Immigration'], excerpt: 'Dubai is one of the world\'s most attractive destinations for foreign investment.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80' },
  { slug: 'how-to-change-uae-shareholders-without-delays', title: 'How to Change UAE Shareholders Without Delays', date: 'Sep 22, 2026', readTime: '8 min', category: 'Legal', tags: ['Legal', 'UAE Company Registration'], excerpt: 'Changing shareholders in a UAE company is common but has specific steps to avoid delays.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80' },
  { slug: 'uae-e-commerce-licensing-trends-shaping-2026', title: 'UAE E-Commerce Licensing Trends Shaping 2026', date: 'Sep 20, 2026', readTime: '9 min', category: 'Business Setup', tags: ['Business Setup', 'Dubai Business Opportunities'], excerpt: 'The UAE e-commerce market is projected to cross $30 billion by 2026.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80' },
  { slug: 'dubai-business-districts-choose-the-right-base', title: 'Dubai Business Districts: Choose the Right Base', date: 'Sep 18, 2026', readTime: '10 min', category: 'Living in Dubai', tags: ['Living in Dubai', 'Dubai Business Consultancy'], excerpt: 'Choosing the right location affects cost, credibility, and growth potential.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
  { slug: 'freezone-audit-requirements-for-uae-companies', title: 'Freezone Audit Requirements for UAE Companies', date: 'Sep 15, 2026', readTime: '9 min', category: 'Accounting', tags: ['Accounting', 'Free Zones'], excerpt: 'Free zone companies have specific audit obligations. Ignoring them causes penalties.', image: 'https://images.unsplash.com/photo-1554224312-3bb0e02b0a8a?w=800&q=80' },
  { slug: 'how-to-liquidate-a-uae-company-key-steps', title: 'How to Liquidate a UAE Company: Key Steps', date: 'Sep 12, 2026', readTime: '10 min', category: 'Legal', tags: ['Legal', 'UAE Company Setup'], excerpt: 'Closing a UAE company requires a formal liquidation process. Cannot simply stop operating.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80' },
  { slug: 'top-uae-accounting-mistakes-that-cost-firms', title: 'Top UAE Accounting Mistakes That Cost Firms', date: 'Sep 10, 2026', readTime: '8 min', category: 'Accounting', tags: ['Accounting'], excerpt: 'Accounting mistakes in the UAE can cost businesses tens of thousands of dirhams.', image: 'https://images.unsplash.com/photo-1554224312-53e05c1c5a6d?w=800&q=80' },
  { slug: 'uae-sole-proprietorship-versus-llc-compared', title: 'UAE Sole Proprietorship Versus LLC Compared', date: 'Sep 08, 2026', readTime: '8 min', category: 'Business Setup', tags: ['Business Setup', 'UAE Company Formation'], excerpt: 'Sole proprietorship and LLC are the two most common structures. Which is right for you?', image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80' },
  { slug: 'how-to-get-uae-establishment-card-for-your-company', title: 'How to Get UAE Establishment Card for Your Company', date: 'Sep 05, 2026', readTime: '7 min', category: 'Business Setup', tags: ['Business Setup', 'UAE Company Registration'], excerpt: 'The UAE Establishment Card is mandatory for any company that wants to sponsor visas.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80' },
  { slug: 'dubai-license-amendments-when-to-update', title: 'Dubai License Amendments: When to Update', date: 'Sep 02, 2026', readTime: '6 min', category: 'Legal', tags: ['Legal', 'Dubai Business License'], excerpt: 'Your Dubai trade license is not static. When your business changes, the license must update.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80' },
  { slug: 'uae-ubo-compliance-requirements-for-businesses', title: 'UAE UBO Compliance Requirements for Businesses', date: 'Aug 28, 2026', readTime: '9 min', category: 'Legal', tags: ['Legal', 'UAE Business Setup'], excerpt: 'Since 2020, all UAE companies must maintain a register of Ultimate Beneficial Owners.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
  { slug: '10-best-activities-for-online-businesses-in-uae', title: '10 Best Activities for Online Businesses in UAE', date: 'Aug 25, 2026', readTime: '10 min', category: 'Business Setup', tags: ['Business Setup', 'UAE Business Setup'], excerpt: 'The UAE has become a hub for online businesses. Here are the top 10 activities.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80' },
  { slug: 'uae-employee-sponsorship-for-growing-companies', title: 'UAE Employee Sponsorship for Growing Companies', date: 'Aug 22, 2026', readTime: '8 min', category: 'Human Resources', tags: ['Human Resources', 'UAE Company Setup'], excerpt: 'If your UAE company is hiring, you\'ll need to sponsor employee visas.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80' },
  { slug: 'uae-holding-company-versus-spv-compared', title: 'UAE Holding Company Versus SPV Compared', date: 'Aug 20, 2026', readTime: '9 min', category: 'Business Setup', tags: ['Business Setup', 'UAE Investor Visa'], excerpt: 'Holding companies and SPVs serve different purposes. Learn which is right for you.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
  { slug: 'consultant-license-options-in-dubai-and-the-uae', title: 'Consultant License Options in Dubai and the UAE', date: 'Aug 18, 2026', readTime: '8 min', category: 'Business Setup', tags: ['Business Setup', 'Dubai Business License'], excerpt: 'Consultants in Dubai can choose from several license types. Here\'s how to decide.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
  { slug: 'investor-visa-versus-employment-visa-in-the-uae', title: 'Investor Visa Versus Employment Visa in the UAE', date: 'Aug 15, 2026', readTime: '7 min', category: 'Business Visa', tags: ['Business Visa', 'UAE Investor Visa'], excerpt: 'The two main visa routes for founders are investor visa and employment visa.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80' },
  { slug: 'dubai-economic-substance-regulations-guide', title: 'Dubai Economic Substance Regulations Guide', date: 'Aug 12, 2026', readTime: '10 min', category: 'Legal', tags: ['Legal', 'UAE Business Setup'], excerpt: 'Economic Substance Regulations apply to certain UAE companies with specific activities.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' },
  { slug: 'business-banking-in-dubai-for-new-companies', title: 'Business Banking in Dubai for New Companies', date: 'Aug 10, 2026', readTime: '9 min', category: 'Finance', tags: ['Finance', 'UAE Company Setup'], excerpt: 'Opening a business bank account in Dubai is often the biggest challenge.', image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80' },
  { slug: 'does-uae-vat-apply-to-freelancers-key-rules', title: 'Does UAE VAT Apply to Freelancers? Key Rules', date: 'Aug 08, 2026', readTime: '7 min', category: 'Accounting', tags: ['Accounting', 'Business Setup'], excerpt: 'Freelancers in the UAE often ask: do I need to register for VAT?', image: 'https://images.unsplash.com/photo-1554224312-3bb0e02b0a8a?w=800&q=80' },
  { slug: 'restaurant-licensing-example-for-dubai-investors', title: 'Restaurant Licensing Example for Dubai Investors', date: 'Aug 05, 2026', readTime: '10 min', category: 'Business Setup', tags: ['Business Setup', 'Dubai Business Opportunities'], excerpt: 'Opening a restaurant in Dubai is popular but the licensing is complex.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { slug: 'dubai-startup-expansion-for-smarter-market-entry', title: 'Dubai Startup Expansion for Smarter Market Entry', date: 'Aug 02, 2026', readTime: '8 min', category: 'Entrepreneurship', tags: ['Entrepreneurship', 'Dubai Business Opportunities'], excerpt: 'Dubai is a strategic launchpad for startups expanding into MENA.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
  { slug: 'uae-trademark-registration-guide-for-business-owners', title: 'UAE Trademark Registration Guide for Business Owners', date: 'Jul 28, 2026', readTime: '10 min', category: 'Legal', tags: ['Legal', 'UAE Business Setup'], excerpt: 'Registering a trademark protects your brand and gives you legal recourse.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80' },
];

// ============ ALL 14 TAGS WITH FULL INFORMATION ============
const allTags: Record<string, {
  name: string;
  description: string;
  longIntro: string;
  featuredPosts: {
    title: string;
    date: string;
    readTime: string;
    author: string;
    category: string;
    image: string;
    intro: string;
    sections: { heading: string; content: string[] }[];
    faq: { q: string; a: string }[];
  }[];
}> = {
  'business-visa': {
    name: 'Business Visa',
    description: 'Visa options for business owners, investors, and employees in the UAE.',
    longIntro: 'UAE business visas are the gateway to living and working in one of the world\'s most dynamic economies. Whether you are an investor setting up a company, an entrepreneur launching a startup, or an employee joining a UAE firm, understanding the visa landscape is essential. This section covers investor visas, employment visas, Golden Visas, dependent visas, and everything in between — so you can choose the right route for your goals.',
    featuredPosts: [
      {
        title: 'Investor Visa Versus Employment Visa in the UAE',
        date: 'Aug 15, 2026', readTime: '7 min', author: 'DubaiSetupNow Team', category: 'Business Visa',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
        intro: 'If you are moving to the UAE, you will need a visa. The two main routes for founders are investor visa and employment visa. Here is how they differ, what each costs, and which one fits your situation.',
        sections: [
          { heading: 'Investor Visa: For Business Owners', content: ['An investor visa is designed for individuals who own or hold shares in a UAE company. It is self-sponsored, meaning you do not need an employer to apply on your behalf. The visa is typically valid for 2-3 years and can be renewed indefinitely as long as you maintain your ownership stake.', 'Key requirements include proof of company ownership (trade license, MOA), a valid passport, medical fitness test, and Emirates ID. Family members can be sponsored once the investor visa is issued.'] },
          { heading: 'Employment Visa: For Employees', content: ['An employment visa is sponsored by your employer — whether that is a mainland or free zone company. It requires a signed employment contract (MOHRE approved), a valid work permit, and the employer must have sufficient visa quota.', 'The visa is valid for 2 years (typical) and can be renewed. Once you meet the minimum salary threshold (usually AED 4,000), you can sponsor family members.'] },
          { heading: 'Which One Should You Choose?', content: ['If you own a UAE company, the investor visa is the natural choice — it gives you flexibility to work for your own business without needing an external sponsor. If you work for someone else\'s company, the employment visa is standard.', 'Some individuals qualify for both — for example, a shareholder who is also employed by their own company. In this case, you can hold both an investor visa and an employment visa for the same company.'] },
        ],
        faq: [
          { q: 'Can I sponsor my family on an investor visa?', a: 'Yes. Once your investor visa is issued, you can sponsor your spouse, children, and in some cases parents, provided you meet the income and accommodation requirements.' },
          { q: 'How long does an investor visa take to process?', a: 'Typically 2-4 weeks from application to visa stamping, assuming all documents are in order.' },
          { q: 'Can I work for another company on an investor visa?', a: 'No. An investor visa is tied to your own company. To work for another company, you would need a separate employment visa.' },
        ],
      },
      {
        title: 'Golden Visa UAE: Complete Guide for Investors',
        date: 'Aug 20, 2026', readTime: '9 min', author: 'DubaiSetupNow Team', category: 'Business Visa',
        image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
        intro: 'The UAE Golden Visa is a long-term residency program (5 or 10 years) for investors, entrepreneurs, specialized talents, and outstanding students. Here is the full breakdown of who qualifies and how to apply.',
        sections: [
          { heading: 'Who Qualifies for a Golden Visa?', content: ['Investors: Individuals with AED 2 million+ in UAE property or AED 2 million+ in a UAE investment fund.', 'Entrepreneurs: Founders of startups valued at AED 500,000+ or with annual revenue of AED 500,000+.', 'Specialized Talents: Doctors, engineers, scientists, artists, athletes, and PhD holders.', 'Executives: Senior managers earning AED 30,000+ monthly salary.', 'Outstanding Students: Top graduates from UAE high schools and universities.'] },
          { heading: 'Benefits of the Golden Visa', content: ['Long-term residency (5 or 10 years, renewable)', 'No need for a local sponsor', 'Sponsor your family and dependents', 'Work for any company or own multiple businesses', 'Stay outside the UAE for more than 6 months without losing residency'] },
          { heading: 'How to Apply', content: ['The Golden Visa application is typically done through the Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) or the General Directorate of Residency and Foreign Affairs (GDRFA) in Dubai.', 'You will need to submit supporting documents (property deed, investment proof, salary certificate, degree certificates, etc.), undergo a medical test, and receive your Emirates ID.'] },
        ],
        faq: [
          { q: 'How long does the Golden Visa take to process?', a: 'Usually 3-6 weeks, depending on the category and document verification.' },
          { q: 'Can I work on a Golden Visa?', a: 'Yes. The Golden Visa allows you to work, own a business, or be self-employed without needing a separate work permit.' },
          { q: 'Do I need to live in the UAE to maintain my Golden Visa?', a: 'No. Unlike standard residency visas, you can stay outside the UAE for more than 6 months without losing your Golden Visa.' },
        ],
      },
    ],
  },

  'uae-company-formation': {
    name: 'UAE Company Formation',
    description: 'Complete guides to forming a company in the UAE.',
    longIntro: 'Forming a company in the UAE is more straightforward than most new entrepreneurs expect, but the details matter. The jurisdiction you choose (free zone vs mainland), the license type, the shareholder structure, and the activity you select all impact your setup costs and future operations. In this section, we break down the exact process step-by-step for both free zone and mainland companies — from name reservation to trade license issuance and beyond.',
    featuredPosts: [
      {
        title: 'Free Zone vs Mainland Company Formation in Dubai 2026',
        date: 'Oct 20, 2026', readTime: '10 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
        intro: 'Choosing between a free zone and mainland company is the single most important decision you will make when setting up a business in Dubai. Get it right, and you save thousands of dirhams and avoid operational headaches. Get it wrong, and you could face restricted market access, unexpected costs, or even the need to restructure later.',
        sections: [
          { heading: 'Free Zone Company Formation', content: ['Free zones are designated areas offering 100% foreign ownership, tax exemptions, and simplified setup. There are over 40 free zones in the UAE, each catering to specific industries.', 'Popular options include IFZA (from AED 5,750), Meydan (from AED 5,900), DMCC (from AED 15,000), and DIFC (from AED 30,000+). Setup takes 3-10 working days, and a virtual office is typically included.', 'Best for: freelancers, consultants, e-commerce, digital businesses, and international-facing companies.'] },
          { heading: 'Mainland Company Formation', content: ['A mainland company allows you to trade directly anywhere in the UAE without a distributor. Since 2021, most commercial and professional activities allow 100% foreign ownership.', 'Setup requires a physical office (Ejari-registered) and takes 2-4 weeks. Costs typically range from AED 15,000 to AED 50,000+ in year one.', 'Best for: retail, restaurants, trading companies, government contractors, and businesses needing a local physical presence.'] },
          { heading: 'Side-by-Side Comparison', content: ['Foreign Ownership: Both allow 100% (free zones always, mainland for most activities since 2021).', 'License Cost: Free zone from AED 5,750; mainland from AED 15,000.', 'Office Requirement: Free zones include virtual office; mainland requires physical Ejari-registered office.', 'Market Access: Free zones are restricted (need distributor); mainland is unrestricted.', 'Setup Time: Free zone 3-10 days; mainland 2-4 weeks.'] },
        ],
        faq: [
          { q: 'Can I convert a free zone company to mainland later?', a: 'Yes, but it requires a formal conversion process, new licensing, and possibly a new trade name. Plan for it early if you anticipate needing mainland access.' },
          { q: 'How much does it cost to form a company in Dubai?', a: 'Free zone companies start from AED 5,999 (year 1, all-inclusive). Mainland companies start from AED 15,000.' },
          { q: 'Do I need a local partner in Dubai?', a: 'No. Since 2021, most mainland activities allow 100% foreign ownership, and all free zones allow it.' },
        ],
      },
      {
        title: 'How to Register a Company in Dubai: Step-by-Step 2026',
        date: 'Sep 20, 2026', readTime: '9 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        intro: 'Registering a company in Dubai is a formal process with clear steps. Here is the complete 2026 walkthrough for both free zone and mainland setups.',
        sections: [
          { heading: 'Step 1: Choose Jurisdiction and Activity', content: ['Decide between free zone, mainland, or offshore based on your customers, market access needs, and budget.', 'Choose from 2,000+ approved business activities. Match the activity code to your actual business model.'] },
          { heading: 'Step 2: Reserve Trade Name', content: ['Submit 3-5 name options to the licensing authority. Names must not conflict with existing trademarks or use restricted words.', 'Name reservation is typically valid for 30-60 days.'] },
          { heading: 'Step 3: Submit Documents and Pay', content: ['Provide passport copies, photographs, and MOA. For mainland, include your Ejari tenancy contract.', 'Pay the license fee and get initial approval. Free zones approve in 3-7 days; mainland takes 2-4 weeks.'] },
          { heading: 'Step 4: Post-License Steps', content: ['Apply for establishment card, sponsor visas, open corporate bank account.', 'Register for corporate tax and VAT if applicable.'] },
        ],
        faq: [
          { q: 'Can I register a company remotely?', a: 'Free zones mostly yes; mainland requires physical presence or a local representative for some steps.' },
          { q: 'What is the fastest company registration in Dubai?', a: 'A free zone company can be registered in 3-5 working days with complete documentation.' },
        ],
      },
    ],
  },

  'dubai-business-consultancy': {
    name: 'Dubai Business Consultancy',
    description: 'Consultancy setup and services in Dubai.',
    longIntro: 'Dubai is a magnet for consultants — management, marketing, IT, HR, finance, and more. The city offers a huge market of SMEs, corporates, and government entities hungry for expertise. But setting up a consultancy in Dubai requires the right license type, jurisdiction, and positioning. In this section, we cover everything consultants need to know — from choosing between free zone and mainland licenses to winning your first clients.',
    featuredPosts: [
      {
        title: 'How to Set Up a Consulting Business in Dubai',
        date: 'Sep 30, 2026', readTime: '9 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
        intro: 'Consultants in Dubai can choose from several license types. Which one is right for you depends on your activity, target market, and growth plans. Here is a complete guide to setting up a consultancy in Dubai.',
        sections: [
          { heading: 'Types of Consultant Licenses', content: ['Free Zone consultant license — best for international clients, cost-effective (AED 8,000-15,000 year 1).', 'Mainland professional license — for UAE-wide consulting (AED 12,000-25,000 year 1).', 'DIFC/ADGM license — for financial services consulting (AED 25,000+ year 1).', 'Sole establishment — for solo consultants in mainland.'] },
          { heading: 'Most Common Consulting Activities', content: ['Management consulting, marketing consulting, IT consulting, HR consulting, financial advisory, business coaching, strategy consulting, digital transformation consulting.', 'Each activity must be listed on your license. You can add more activities later for a fee.'] },
          { heading: 'Winning Your First Clients in Dubai', content: ['Network actively — Dubai runs on relationships. Join business councils, attend events, and connect on LinkedIn.', 'Position clearly — pick a niche (e.g., "consulting for healthcare SMEs" not just "business consulting").', 'Build trust signals — a professional website, active LinkedIn, and case studies are essential.', 'Price for value — Dubai clients pay premium rates for expertise, not for hourly work.'] },
        ],
        faq: [
          { q: 'How much does a consultant license cost in Dubai?', a: 'Free zone consultant licenses start from AED 8,000-12,000. Mainland professional licenses start from AED 12,000-20,000.' },
          { q: 'Do I need a physical office as a consultant?', a: 'Not necessarily. Free zones allow a virtual office or flexi-desk. Mainland may require a physical office depending on the activity.' },
          { q: 'Can I serve government clients as a free zone consultant?', a: 'No. Government contracts are only accessible to mainland companies. If government work is in your plan, choose mainland.' },
        ],
      },
    ],
  },

  'dubai-business-license': {
    name: 'Dubai Business License',
    description: 'License types, costs, and requirements in Dubai.',
    longIntro: 'Every business in Dubai needs a license — but not all licenses are the same. There are commercial, professional, industrial, and tourism licenses, plus dozens of activity-specific permits. The license you choose determines what you can do, where you can trade, and how you will be taxed. This section covers every major license type, real 2026 costs, and the exact requirements to get licensed.',
    featuredPosts: [
      {
        title: 'Dubai Business License Types: Complete Guide 2026',
        date: 'Sep 15, 2026', readTime: '11 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
        intro: 'Choosing the right license type is critical. It affects your activity scope, cost, tax treatment, and market access. Here is everything you need to know about Dubai business license types in 2026.',
        sections: [
          { heading: 'Commercial License', content: ['For trading, buying, selling, and distributing goods. Covers general trading, import/export, retail, e-commerce.', 'Cost: AED 12,000-25,000 year 1 (mainland). Free zone equivalents start from AED 5,750.'] },
          { heading: 'Professional License', content: ['For services, consulting, crafts, and intellectual work. Covers consultants, designers, developers, coaches.', 'Cost: AED 10,000-20,000 year 1 (mainland). Free zone equivalents start from AED 5,750.'] },
          { heading: 'Industrial License', content: ['For manufacturing, processing, and production. Requires additional approvals from environmental and municipal authorities.', 'Cost: AED 20,000-50,000+ year 1 (mainland).'] },
          { heading: 'Tourism License', content: ['For travel agencies, tour operators, and hospitality services.', 'Cost: AED 10,000-20,000 year 1 (mainland).'] },
        ],
        faq: [
          { q: 'Can I have multiple license types in one company?', a: 'Yes. You can add multiple activities to a single license, provided they are compatible. Some activities require separate licenses.' },
          { q: 'How long does a Dubai business license take?', a: 'Free zone: 3-7 working days. Mainland: 2-4 weeks.' },
          { q: 'Can I change my license type later?', a: 'Yes, but it requires a formal amendment and possibly additional approvals.' },
        ],
      },
    ],
  },

  'dubai-business-opportunities': {
    name: 'Dubai Business Opportunities',
    description: 'Emerging business opportunities in Dubai.',
    longIntro: 'Dubai is not just a city — it is a launchpad for ambitious businesses. Whether you are looking at e-commerce, fintech, renewable energy, tourism, or AI, Dubai offers a market that is young, wealthy, and hungry for innovation. This section explores the most promising business opportunities in Dubai in 2026, with real cost estimates, licensing paths, and market insights.',
    featuredPosts: [
      {
        title: '10 Best Businesses to Start in Dubai in 2026',
        date: 'Sep 20, 2026', readTime: '10 min', author: 'DubaiSetupNow Team', category: 'Entrepreneurship',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
        intro: 'Dubai is one of the best cities in the world to launch a new business. With zero personal income tax, world-class infrastructure, and a wealthy, tech-savvy population, the market offers unique opportunities. Here are the 10 best businesses to start in Dubai in 2026.',
        sections: [
          { heading: '1. E-Commerce', content: ['The UAE e-commerce market is projected to cross $30 billion by 2026. With a young, digitally-native population and high disposable income, e-commerce is one of the most accessible and scalable businesses to start.', 'Best license: Free zone e-commerce license (AED 5,999+) or mainland commercial license for physical warehousing.'] },
          { heading: '2. IT Consulting and SaaS', content: ['Dubai is rapidly becoming a tech hub. Demand for cloud services, cybersecurity, AI, and software development is exploding.', 'Best license: Free zone professional or tech license (AED 8,000+).'] },
          { heading: '3. F&B and Cloud Kitchens', content: ['Dubai\'s food scene is world-class. Cloud kitchens, specialty cafes, and international cuisine concepts all perform well.', 'Best license: Mainland commercial + Dubai Municipality food safety approval.'] },
          { heading: '4. Marketing and Creative Services', content: ['Brands in Dubai invest heavily in marketing. Digital agencies, content studios, and branding consultancies are in constant demand.', 'Best license: Free zone media license or mainland professional license.'] },
        ],
        faq: [
          { q: 'What is the cheapest business to start in Dubai?', a: 'An e-commerce or consulting business in a free zone can start from AED 5,999-8,000 in year one.' },
          { q: 'Do I need to be physically in Dubai to run a business?', a: 'Not necessarily. Many free zone businesses operate remotely. Mainland businesses with physical operations generally require a local presence.' },
        ],
      },
    ],
  },

  'free-zone-company-setup': {
    name: 'Free Zone Company Setup',
    description: 'Free zone company formation and benefits.',
    longIntro: 'Free zones are the UAE\'s most popular route for foreign entrepreneurs. They offer 100% foreign ownership, zero corporate tax on qualifying income, fast setup, and a virtual office — all at a fraction of mainland costs. But not all free zones are equal. In this section, we compare the top free zones, break down costs, and explain exactly how to choose the right one for your business.',
    featuredPosts: [
      {
        title: 'Free Zone vs Mainland Dubai 2026 – Comparison',
        date: 'Oct 20, 2026', readTime: '12 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
        intro: 'Choosing between a free zone and mainland company is the single most important decision you will make when setting up a business in Dubai. Get it right, and you save thousands of dirhams and avoid operational headaches.',
        sections: [
          { heading: 'Free Zone Advantages', content: ['Lower upfront cost — from AED 5,750 for basic packages.', '100% foreign ownership — no local partner required.', 'Tax benefits — 0% corporate tax on qualifying income.', 'Simplified setup — 3-10 working days.', 'Virtual office included — no expensive physical space required.'] },
          { heading: 'Free Zone Disadvantages', content: ['Restricted UAE market access — cannot trade directly on mainland without a distributor.', 'Limited business activities — each free zone licenses only specific activities.', 'Physical presence rules — some free zones require you to work from their location.', 'Visa caps — usually limited to 1-6 visas per package.'] },
          { heading: 'How to Decide', content: ['Ask yourself: Where are my customers? (Outside UAE = free zone; inside UAE = consider mainland).', 'Do I need a physical location? (No = free zone; Yes = mainland).', 'What is my budget? (Under AED 25,000 year 1 = free zone).'] },
        ],
        faq: [
          { q: 'Can a free zone company trade in the UAE mainland?', a: 'Not directly. You need a mainland distributor, agent, or a separate mainland license.' },
          { q: 'Which is cheaper: free zone or mainland?', a: 'Free zone is significantly cheaper in year 1. Mainland costs 2-3x more upfront but offers unrestricted market access.' },
          { q: 'Can I convert my free zone company to mainland later?', a: 'Yes, but it requires a formal conversion process and new licensing.' },
        ],
      },
    ],
  },

  'golden-visa': {
    name: 'Golden Visa',
    description: 'Long-term residency through the UAE Golden Visa.',
    longIntro: 'The UAE Golden Visa is a long-term residency program that grants 5 or 10 years of residency to investors, entrepreneurs, specialized talents, and outstanding students. Unlike standard visas, the Golden Visa does not require a sponsor, allows you to sponsor family members, and lets you stay outside the UAE for extended periods without losing residency. This section covers eligibility, application, benefits, and cost.',
    featuredPosts: [
      {
        title: 'UAE Golden Visa: Complete Guide for Investors 2026',
        date: 'Aug 20, 2026', readTime: '9 min', author: 'DubaiSetupNow Team', category: 'Business Visa',
        image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
        intro: 'The UAE Golden Visa is one of the most valuable residency programs in the world. It offers long-term stability, flexibility, and access to a world-class economy. Here is the full breakdown for investors.',
        sections: [
          { heading: 'Investor Golden Visa Requirements', content: ['AED 2 million+ investment in UAE property (freehold).', 'AED 2 million+ investment in a UAE investment fund.', 'AED 2 million+ in a UAE company (as capital deposit).', 'Investment must be maintained for the duration of the visa.'] },
          { heading: 'Benefits', content: ['10-year renewable residency.', 'No sponsor required.', 'Sponsor spouse, children, and domestic workers.', 'Stay outside the UAE for any length of time.', 'Access to UAE banking and investment products.'] },
          { heading: 'Application Process', content: ['Submit application through ICP or GDRFA Dubai.', 'Provide proof of investment (property deed, fund certificate, etc.).', 'Complete medical fitness test.', 'Receive Emirates ID and residency stamp.'] },
        ],
        faq: [
          { q: 'How long is the Golden Visa valid?', a: '10 years for investors, renewable as long as the investment is maintained.' },
          { q: 'Can I work on a Golden Visa?', a: 'Yes. You can work, own a business, or be self-employed without a separate work permit.' },
          { q: 'Can I include my family?', a: 'Yes. You can sponsor spouse, children, and up to 3 domestic workers.' },
        ],
      },
    ],
  },

  'uae-investor-visa': {
    name: 'UAE Investor Visa',
    description: 'Investor visa options for business owners.',
    longIntro: 'The UAE investor visa is designed for business owners and shareholders who want to live in the UAE while managing their investments. It is self-sponsored, renewable, and allows family sponsorship. This section explains the difference between standard investor visas and the Golden Visa, plus costs, documents, and timelines.',
    featuredPosts: [
      {
        title: 'UAE Investor Visa: Complete Guide 2026',
        date: 'Aug 15, 2026', readTime: '7 min', author: 'DubaiSetupNow Team', category: 'Business Visa',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
        intro: 'The UAE investor visa is one of the fastest and most flexible residency options for business owners. Here is the complete 2026 guide.',
        sections: [
          { heading: 'Standard Investor Visa', content: ['Validity: 2-3 years, renewable.', 'Sponsor: Self-sponsored through your company.', 'Family: Can sponsor spouse, children, and parents.', 'Cost: AED 5,000-8,000 (including medical, Emirates ID, stamping).'] },
          { heading: 'Requirements', content: ['Trade license showing you as owner or shareholder.', 'MOA (Memorandum of Association).', 'Passport copy.', 'Medical fitness test.', 'Emirates ID application.'] },
          { heading: 'How It Differs from Employment Visa', content: ['Investor visa is self-sponsored; employment visa is employer-sponsored.', 'Investor visa is tied to your company ownership; employment visa to your job.', 'Investor visa holders can sponsor family without a minimum salary threshold (though accommodation must be proven).'] },
        ],
        faq: [
          { q: 'How long does an investor visa take?', a: 'Typically 2-4 weeks from application to visa stamping.' },
          { q: 'Can I sponsor my family?', a: 'Yes, immediately after your investor visa is issued.' },
          { q: 'Do I need to be in the UAE during the application?', a: 'For the medical test and Emirates ID, yes. Some steps can be completed remotely.' },
        ],
      },
    ],
  },

  'uae-mainland': {
    name: 'UAE Mainland',
    description: 'Mainland company setup and operations.',
    longIntro: 'A UAE mainland company gives you unrestricted access to the entire UAE market — you can trade directly with local customers, bid for government contracts, open retail locations, and hire teams without restrictions. Since 2021, most activities now allow 100% foreign ownership, making mainland more accessible than ever. This section covers everything about mainland company formation, costs, and operations.',
    featuredPosts: [
      {
        title: 'Mainland Company Formation in Dubai: Complete Guide',
        date: 'Sep 10, 2026', readTime: '11 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80',
        intro: 'A mainland company unlocks the full UAE market. But it also comes with higher costs and more requirements than a free zone. Here is everything you need to know.',
        sections: [
          { heading: 'Advantages of Mainland', content: ['Unrestricted UAE market access — trade directly with any customer.', 'Government contracts — only mainland companies can bid.', 'Physical retail presence — shops, restaurants, showrooms.', 'Larger visa quotas based on office size.'] },
          { heading: 'Costs to Expect', content: ['License fee: AED 10,000-50,000+ year 1.', 'Office rent (Ejari): AED 10,000-150,000+ per year.', 'Visa processing: AED 5,000-8,000 per person.', 'Total year 1: AED 30,000-90,000+ depending on scale.'] },
          { heading: 'Process Steps', content: ['1. Choose your activity and trade name.', '2. Apply for initial approval from DED.', '3. Sign a physical office lease (Ejari).', '4. Submit final documents and pay fees.', '5. Receive your trade license (2-4 weeks).', '6. Apply for visas and open a bank account.'] },
        ],
        faq: [
          { q: 'Can foreigners own 100% of a mainland company?', a: 'Yes, for most commercial and professional activities since 2021.' },
          { q: 'How much does a mainland license cost?', a: 'From AED 15,000 year 1, but total setup including office is typically AED 30,000+.' },
          { q: 'Do I need a physical office?', a: 'Yes. Mainland requires an Ejari-registered physical office.' },
        ],
      },
    ],
  },

  'company-registration': {
    name: 'Company Registration',
    description: 'Steps and requirements for company registration.',
    longIntro: 'Registering your company correctly is the foundation of everything else — banking, visas, tax, and compliance. Whether you are registering a free zone or mainland company, the process has specific steps that must be followed in order. This section covers the complete registration process, required documents, common mistakes, and timelines.',
    featuredPosts: [
      {
        title: 'Company Registration in Dubai: Step-by-Step Guide',
        date: 'Sep 12, 2026', readTime: '10 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        intro: 'Registering a company in Dubai is straightforward when you know the steps. Here is the complete process from start to finish.',
        sections: [
          { heading: 'Step 1: Choose Jurisdiction', content: ['Free zone: 100% ownership, fast setup, cost-effective.', 'Mainland: Unrestricted market access, physical office required.', 'Offshore: For holding and international tax planning.'] },
          { heading: 'Step 2: Reserve Trade Name', content: ['Submit 3-5 name options to the licensing authority.', 'Avoid names similar to existing trademarks or restricted words.', 'Reservation is valid for 30-60 days.'] },
          { heading: 'Step 3: Prepare Documents', content: ['Passport copies of all shareholders.', 'Proof of address.', 'Passport-size photographs.', 'Business plan (for certain activities).', 'MOA (Memorandum of Association).'] },
          { heading: 'Step 4: Submit Application', content: ['Free zones: 3-10 working days.', 'Mainland: 2-4 weeks.', 'Includes trade license issuance and initial approvals.'] },
        ],
        faq: [
          { q: 'Can I register a company remotely?', a: 'For free zones, yes. For mainland, most steps require a physical presence or a local representative.' },
          { q: 'How much does company registration cost?', a: 'Free zone: from AED 5,750. Mainland: from AED 15,000.' },
          { q: 'What happens after registration?', a: 'You can apply for visas, open a bank account, and start trading. Corporate tax and VAT registration may follow.' },
        ],
      },
    ],
  },

  'start-a-business-in-uae': {
    name: 'Start a Business in UAE',
    description: 'Guides for starting a business in the UAE.',
    longIntro: 'Starting a business in the UAE is one of the smartest moves an entrepreneur can make — zero personal income tax, world-class infrastructure, and a market that spans the Middle East, Africa, and South Asia. But it also requires careful planning. This section covers everything from picking your jurisdiction to opening a bank account, so you can launch confidently.',
    featuredPosts: [
      {
        title: 'How to Start a Business in Dubai as a Foreigner 2026',
        date: 'Sep 25, 2026', readTime: '12 min', author: 'DubaiSetupNow Team', category: 'Entrepreneurship',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
        intro: 'Foreigners can now start a business in Dubai with 100% ownership in most sectors. Here is the complete 2026 guide.',
        sections: [
          { heading: 'Step 1: Choose Your Structure', content: ['Free zone company — best for digital-first, cost-conscious founders.', 'Mainland company — best for UAE market access and physical operations.', 'Offshore company — best for holding and international tax planning.'] },
          { heading: 'Step 2: Pick Your License', content: ['Commercial license — trading, buying, selling.', 'Professional license — services, consulting, crafts.', 'Industrial license — manufacturing.', 'Tourism license — travel, hospitality.'] },
          { heading: 'Step 3: Set Up Banking and Visas', content: ['Open a corporate bank account (2-4 weeks process).', 'Apply for investor or employment visa.', 'Sponsor family if needed.'] },
        ],
        faq: [
          { q: 'Can foreigners own 100% of a UAE company?', a: 'Yes, in all free zones and most mainland activities since 2021.' },
          { q: 'How much does it cost to start a business?', a: 'From AED 5,999 year 1 for a basic free zone package.' },
          { q: 'How long does setup take?', a: 'Free zone: 3-10 days. Mainland: 2-4 weeks.' },
        ],
      },
    ],
  },

  'uae-business-immigration': {
    name: 'UAE Business Immigration',
    description: 'Immigration pathways for business owners.',
    longIntro: 'The UAE has become one of the world\'s most attractive destinations for business immigration. With zero personal income tax, world-class healthcare, top schools, and a safe environment, it is a magnet for entrepreneurs and investors. This section covers the immigration pathways available for business owners, investors, and their families.',
    featuredPosts: [
      {
        title: 'UAE Business Immigration Guide 2026',
        date: 'Sep 18, 2026', readTime: '10 min', author: 'DubaiSetupNow Team', category: 'Business Visa',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
        intro: 'Thinking of relocating to the UAE to run your business? Here is the complete immigration guide.',
        sections: [
          { heading: 'Immigration Pathways for Business Owners', content: ['Investor visa — for shareholders and owners of UAE companies.', 'Golden Visa — for high-net-worth investors and specialized talents.', 'Employment visa — for employees of UAE companies.', 'Startup visa — for founders of innovative startups.'] },
          { heading: 'Family Sponsorship', content: ['Once you have a valid residency visa, you can sponsor spouse, children, and parents.', 'Requirements include minimum salary (for employment visa) and adequate accommodation.', 'Education and healthcare for dependents are widely available.'] },
          { heading: 'Tax and Financial Considerations', content: ['No personal income tax in the UAE.', 'Corporate tax at 9% on profits above AED 375,000.', 'VAT at 5% on most goods and services.', 'Consider tax residency implications in your home country.'] },
        ],
        faq: [
          { q: 'How long does business immigration take?', a: 'Typically 2-4 weeks for investor visa, 3-6 weeks for Golden Visa.' },
          { q: 'Can I bring my family?', a: 'Yes, most residency visas allow family sponsorship.' },
          { q: 'Do I need to live in the UAE?', a: 'For standard residency visas, yes (at least 6 months per year). Golden Visa holders have more flexibility.' },
        ],
      },
    ],
  },

  'uae-business-setup': {
    name: 'UAE Business Setup',
    description: 'Everything about setting up a UAE business.',
    longIntro: 'Setting up a business in the UAE is not just about getting a license. It involves choosing a jurisdiction, a license type, a business activity, a trade name, and a banking partner — all while staying compliant with tax, labor, and immigration laws. This section is your complete resource for UAE business setup, from the first step to the last.',
    featuredPosts: [
      {
        title: 'Complete Dubai Business Setup Cost Guide 2026',
        date: 'Oct 05, 2026', readTime: '12 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
        intro: 'How much does it actually cost to start a business in Dubai in 2026? The answer ranges from AED 5,750 to AED 90,000+. Here is the complete breakdown.',
        sections: [
          { heading: 'Free Zone Business Setup Costs', content: ['License fee: AED 5,750-20,000 year 1.', 'Office: Included (virtual).', 'Visa: AED 3,500-7,500 per person.', 'Total year 1 (solo): AED 12,000-22,000.'] },
          { heading: 'Mainland Business Setup Costs', content: ['License fee: AED 10,000-50,000+ year 1.', 'Office (Ejari): AED 10,000-150,000+ year 1.', 'Visa: AED 3,500-7,500 per person.', 'Total year 1 (solo): AED 30,000-90,000+.'] },
          { heading: 'Hidden Costs to Watch Out For', content: ['Corporate tax registration and filing.', 'VAT registration and quarterly filing.', 'Annual audit (mandatory in some free zones).', 'License renewals (80-90% of initial fee).', 'Bank account minimum balances.'] },
        ],
        faq: [
          { q: 'What is the cheapest way to start a business in Dubai?', a: 'A free zone license from IFZA or Meydan starts from AED 5,999 (year 1, all-inclusive).' },
          { q: 'Can I start a business in Dubai with AED 10,000?', a: 'Yes, but only a basic free zone license with no visa. Realistic budget is AED 15,000-20,000 including visa.' },
          { q: 'Is mainland cheaper than free zone?', a: 'No. Mainland is 2-3x more expensive due to the physical office requirement.' },
        ],
      },
    ],
  },

  'uae-company-registration': {
    name: 'UAE Company Registration',
    description: 'Registering your company with UAE authorities.',
    longIntro: 'Company registration in the UAE involves more than paperwork — it involves choosing the right jurisdiction, structuring your ownership correctly, and understanding the tax and compliance obligations that follow. This section covers every step of the registration process for free zone, mainland, and offshore companies, along with common pitfalls and timelines.',
    featuredPosts: [
      {
        title: 'UAE Company Registration: Complete 2026 Guide',
        date: 'Sep 22, 2026', readTime: '10 min', author: 'DubaiSetupNow Team', category: 'Business Setup',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
        intro: 'Registering your company in the UAE is a formal, well-defined process. Here is everything you need to know.',
        sections: [
          { heading: 'Registration Options', content: ['Free zone registration — 3-10 working days, from AED 5,750.', 'Mainland registration — 2-4 weeks, from AED 15,000.', 'Offshore registration — 5-10 days, from AED 12,000.', 'DIFC/ADGM registration — 2-4 weeks, from AED 25,000+.'] },
          { heading: 'Required Documents', content: ['Passport copies of all shareholders and managers.', 'Proof of address (utility bill, bank statement).', 'Passport-size photos.', 'Business plan (some activities).', 'MOA and AOA (Memorandum and Articles of Association).'] },
          { heading: 'Post-Registration Steps', content: ['Apply for establishment card.', 'Apply for investor/employee visas.', 'Open a corporate bank account.', 'Register for corporate tax and VAT.', 'Set up accounting and bookkeeping.'] },
        ],
        faq: [
          { q: 'Can I register multiple companies in the UAE?', a: 'Yes, there is no limit. Many entrepreneurs own several companies in different free zones.' },
          { q: 'How much does company registration cost?', a: 'Free zone: from AED 5,750. Mainland: from AED 15,000. Offshore: from AED 12,000.' },
          { q: 'Do I need to be in the UAE to register?', a: 'For free zones, mostly no. For mainland, physical presence or a local representative is required for some steps.' },
        ],
      },
    ],
  },
};

// Sidebar data
const categories = [
  { name: 'Accounting', slug: 'accounting', count: 5 },
  { name: 'Business Setup', slug: 'business-setup', count: 12 },
  { name: 'Entrepreneurship', slug: 'entrepreneurship', count: 5 },
  { name: 'Free Zones', slug: 'free-zones', count: 5 },
  { name: 'Human Resources', slug: 'human-resources', count: 2 },
  { name: 'Legal', slug: 'legal', count: 9 },
  { name: 'Living in Dubai', slug: 'living-in-dubai', count: 4 },
];

const archives = [
  'October 2026', 'September 2026', 'August 2026', 'July 2026',
  'June 2026', 'May 2026', 'April 2026', 'March 2026',
];

const allTagNames = [
  'Business Visa', 'UAE Company Formation', 'Dubai Business Consultancy',
  'Dubai Business License', 'Dubai Business Opportunities', 'Free Zone Company Setup',
  'Golden Visa', 'UAE Investor Visa', 'UAE Mainland', 'Company Registration',
  'Start a Business in UAE', 'UAE Business Immigration', 'UAE Business Setup',
  'UAE Company Registration',
];

// ============ COMPONENT ============
export default function BlogTagPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const tag = allTags[slug || ''] || allTags['business-visa'];

  const tagPosts = allPosts.filter((p) =>
    p.tags.some((t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug)
  );

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-pink-950 to-fuchsia-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 right-[20%] opacity-15 hidden lg:block">
          <Hash size={140} className="text-white" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-medium flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1.5"><HomeIcon size={14} />Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-white font-bold">Tag</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-6">
            <TagIcon size={14} className="text-pink-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-white">Tag</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mb-6">
            #{tag.name}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mb-6">
            {tag.description}
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30">
            <span className="text-xs font-bold text-white">{tag.featuredPosts.length + tagPosts.length} Article{tag.featuredPosts.length + tagPosts.length !== 1 ? 's' : ''}</span>
          </motion.div>
        </div>
      </section>

      {/* LONG INTRO */}
      <section className="relative py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl bg-gradient-to-br from-pink-50 to-fuchsia-50 border border-pink-100 p-6 md:p-10 shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 rounded-t-3xl" />
            <h2 className="text-xl md:text-2xl font-black text-[#0A0F1F] mb-4">About {tag.name}</h2>
            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed">{tag.longIntro}</p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-200 shadow-sm mb-4">
              <Sparkles size={14} className="text-pink-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-pink-700">Featured Articles</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight">
              In-Depth Guides on {tag.name}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {tag.featuredPosts.map((post, pi) => (
              <motion.article key={pi} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: pi * 0.1 }} className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500" />
                <div className="p-6 md:p-10">

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold mb-4">
                    <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                    <span className="px-2.5 py-1 rounded-full bg-pink-100 text-pink-700 text-[10px] font-black uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-[#0A0F1F] leading-tight mb-5">{post.title}</h3>

                  <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
                  </div>

                  <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-6">{post.intro}</p>

                  <div className="space-y-6 mb-6">
                    {post.sections.map((section, si) => (
                      <div key={si}>
                        <h4 className="text-lg md:text-xl font-black text-[#0A0F1F] mb-3">{section.heading}</h4>
                        <div className="space-y-3">
                          {section.content.map((para, pi2) => (
                            <p key={pi2} className="text-base text-[#475569] font-medium leading-relaxed">{para}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg md:text-xl font-black text-[#0A0F1F] mb-3">Frequently Asked Questions</h4>
                    <div className="space-y-3">
                      {post.faq.map((faq, fi) => (
                        <details key={fi} className="group rounded-2xl bg-gradient-to-br from-slate-50 to-pink-50/50 border border-slate-200 hover:border-pink-200 transition-all overflow-hidden">
                          <summary className="flex items-start gap-3 p-4 cursor-pointer list-none">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-400 to-fuchsia-600 flex items-center justify-center flex-shrink-0 text-xs font-black text-white mt-0.5">
                              {String(fi + 1).padStart(2, '0')}
                            </div>
                            <h5 className="flex-1 text-sm md:text-base font-black text-[#0A0F1F] leading-snug group-hover:text-pink-700 transition-colors">{faq.q}</h5>
                            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 group-open:bg-gradient-to-br group-open:from-pink-400 group-open:to-fuchsia-600 transition-all">
                              <span className="text-pink-600 font-black text-sm group-open:text-white group-open:rotate-45 transition-all inline-block">+</span>
                            </div>
                          </summary>
                          <div className="px-4 pb-4 pl-14">
                            <p className="text-sm text-[#475569] font-medium leading-relaxed pt-2 border-t border-dashed border-slate-200">{faq.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-600 shadow-lg">
                    <p className="text-base text-white font-medium leading-relaxed">
                      Ready to get started? <span className="font-black">DubaiSetupNow</span> offers free consultations to help you plan your {tag.name.toLowerCase()} strategy.
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ALL POSTS + SIDEBAR */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-black text-[#0A0F1F] mb-1">All Articles tagged #{tag.name}</h2>
                  <p className="text-sm text-slate-500 font-medium">Showing {tagPosts.length} article{tagPosts.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {tagPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tagPosts.map((post, i) => (
                    <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }} className="group relative">
                      <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xl border border-white text-[10px] font-black text-pink-700 uppercase tracking-wider shadow-lg">{post.category}</span>
                          </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-3">
                            <span className="flex items-center gap-1.5"><Calendar size={11} />{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
                          </div>
                          <h3 className="text-base font-black text-[#0A0F1F] leading-snug mb-3 group-hover:text-pink-700 transition-colors line-clamp-2">{post.title}</h3>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                          <Link to={`/blog/${post.slug}`} className="group/btn inline-flex items-center gap-2 text-xs font-black text-pink-700 hover:text-pink-900 uppercase tracking-widest transition-colors">
                            Read More
                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 rounded-3xl bg-white border border-slate-200">
                  <Hash size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 font-bold text-lg">No additional articles with this tag yet</p>
                  <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-sm text-pink-600 font-bold hover:underline">
                    <ArrowRight size={14} className="rotate-180" />
                    Back to all posts
                  </Link>
                </div>
              )}
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Search size={14} className="text-pink-600" /> Search
                </h3>
                <div className="relative">
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search articles..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-pink-400 focus:bg-white outline-none transition text-sm font-medium text-slate-900 placeholder:text-slate-400" />
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock size={14} className="text-pink-600" /> Recent Posts
                </h3>
                <div className="space-y-3">
                  {allPosts.slice(0, 5).map((p, i) => (
                    <Link key={i} to={`/blog/${p.slug}`} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-pink-50 transition-colors">
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-[#0A0F1F] leading-snug mb-1 line-clamp-2 group-hover:text-pink-700 transition-colors">{p.title}</h4>
                        <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1"><Calendar size={9} /> {p.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar size={14} className="text-pink-600" /> Archives
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {archives.map((month, i) => (
                    <Link key={i} to={`/blog/archive/${month.toLowerCase().replace(' ', '-')}`} className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-pink-700 hover:bg-pink-50 transition-colors">
                      <span className="flex items-center gap-2"><ChevronRight size={11} className="text-pink-500 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />{month}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Folder size={14} className="text-pink-600" /> Categories
                </h3>
                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                  {categories.map((cat, i) => (
                    <Link key={i} to={`/blog/category/${cat.slug}`} className="group flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-pink-700 hover:bg-pink-50 transition-colors">
                      <span className="flex items-center gap-2 truncate"><TagIcon size={11} className="text-pink-500 flex-shrink-0" /><span className="truncate">{cat.name}</span></span>
                      <span className="text-[10px] font-black text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full flex-shrink-0">{cat.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-sm font-black text-[#0A0F1F] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-pink-600" /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTagNames.map((t, i) => {
                    const tSlug = t.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    const isActive = tSlug === slug;
                    return (
                      <Link key={i} to={`/blog/tag/${tSlug}`} className={`px-3 py-1.5 rounded-full border text-[11px] font-bold transition-all ${isActive ? 'bg-gradient-to-r from-pink-500 to-fuchsia-600 border-transparent text-white shadow-md' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700'}`}>
                        #{t}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-pink-600 via-fuchsia-700 to-purple-800 shadow-2xl">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-4">
                    <Headset size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight mb-2">Need Help with Setup?</h3>
                  <p className="text-sm text-white/90 font-medium leading-relaxed mb-4">Talk to our experts — free consultation for your UAE business.</p>
                  <a href={getWhatsAppLink("Hi! I need help with UAE business setup.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-pink-700 font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
                    <MessageCircle size={14} strokeWidth={2.5} />Ask Expert
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* OTHER TAGS */}
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-100/50 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-200 shadow-sm mb-6">
              <Hash size={14} className="text-pink-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-pink-700">Browse Tags</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1F] leading-tight tracking-tight mb-4">
              Explore Other <span className="bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">Tags</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {allTagNames.filter(t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-') !== slug).map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
                <Link to={`/blog/tag/${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 hover:border-pink-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <Hash size={14} className="text-pink-500" />
                  <span className="text-sm font-bold text-slate-700 group-hover:text-pink-700 transition-colors">{t}</span>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" strokeWidth={2.5} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 mb-5">
                <Star size={14} className="text-amber-300" fill="currentColor" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">Ready to Start?</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
                Ready to Start Your <span className="text-pink-200">Dubai Business</span>?
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium mb-8 max-w-2xl mx-auto">
                Contact DubaiSetupNow for a free consultation and personalized cost estimate.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={getWhatsAppLink("Hi! I'd like a free consultation.")} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-pink-700 font-bold text-sm shadow-xl hover:scale-105 transition-all">
                  <MessageCircle size={16} />WhatsApp Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-all">
                  <Phone size={16} />Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}