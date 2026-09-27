export interface ServiceContent {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  icon: string;
  gradient: string;
  sections: {
    type: 'text' | 'features' | 'process' | 'faq';
    title?: string;
    subtitle?: string;
    content?: string;
    items?: any[];
  }[];
}

export const specializedServices: ServiceContent[] = [
  // ============ 1. CORPORATE TAX & VAT ============
  {
    slug: 'corporate-tax-vat',
    title: 'Corporate Tax & VAT Services in UAE',
    shortTitle: 'Corporate Tax & VAT',
    tagline: 'Expert tax advice & FTA compliance',
    heroDescription:
      'Complete tax solutions for your UAE business — VAT registration, quarterly filing, corporate tax returns, and FTA audit support handled by certified tax experts.',
    heroImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    icon: 'Receipt',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    sections: [
      {
        type: 'text',
        title: 'Why Corporate Tax & VAT Matter in UAE',
        content:
          'The UAE introduced a 9% corporate tax in June 2023, and VAT at 5% has been active since 2018. Every registered business must comply with Federal Tax Authority (FTA) regulations — from timely VAT filings to accurate corporate tax returns. Non-compliance leads to heavy fines, license suspension, and legal complications. Our tax experts ensure you stay compliant while legally minimizing your tax liability.',
      },
      {
        type: 'features',
        title: 'Our Corporate Tax & VAT Services',
        subtitle: 'Complete tax solutions for UAE businesses',
        items: [
          {
            title: 'VAT Registration',
            description: 'Fast FTA registration for mandatory and voluntary cases',
          },
          {
            title: 'Quarterly VAT Filing',
            description: 'Accurate quarterly VAT returns submitted on time',
          },
          {
            title: 'Corporate Tax Registration',
            description: 'Mandatory registration for all UAE companies',
          },
          {
            title: 'Corporate Tax Returns',
            description: 'Annual tax returns with complete documentation support',
          },
          {
            title: 'Tax Advisory',
            description: 'Strategic advice to legally minimize your tax liability',
          },
          {
            title: 'FTA Audit Support',
            description: 'Full representation during FTA audits and inquiries',
          },
        ],
      },
      {
        type: 'process',
        title: 'How We Handle Your Tax Compliance',
        items: [
          {
            step: '01',
            title: 'Tax Assessment',
            description: 'We review your business activity and determine all tax obligations',
          },
          {
            step: '02',
            title: 'Registration',
            description: 'Register with FTA for both VAT and Corporate Tax',
          },
          {
            step: '03',
            title: 'Documentation',
            description: 'Collect and organize all required financial documents',
          },
          {
            step: '04',
            title: 'Filing',
            description: 'Submit accurate returns within FTA deadlines',
          },
          {
            step: '05',
            title: 'Ongoing Support',
            description: 'Continuous monitoring and advisory for future filings',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'Is VAT registration mandatory in UAE?',
            a: 'VAT registration is mandatory if your taxable supplies exceed AED 375,000 per year. Voluntary registration is available above AED 187,500.',
          },
          {
            q: 'What is the UAE corporate tax rate?',
            a: 'The UAE corporate tax rate is 9% on taxable profits above AED 375,000. Below that threshold, it is 0%.',
          },
          {
            q: 'When is the corporate tax registration deadline?',
            a: 'All UAE companies must register for corporate tax. Deadlines vary based on license issuance date.',
          },
          {
            q: 'Can you help during FTA audits?',
            a: 'Yes. We represent clients during FTA audits and provide full documentation support.',
          },
        ],
      },
    ],
  },

  // ============ 2. BANK ACCOUNT OPENING ============
  {
    slug: 'bank-account',
    title: 'Business Bank Account Opening in UAE',
    shortTitle: 'Bank Account Opening',
    tagline: 'Fast & compliant corporate banking setup',
    heroDescription:
      'Open your UAE business bank account with top-tier banks like Emirates NBD, Mashreq, FAB, RAKBANK, ADIB, and WIO. Full KYC support, documentation, and bank introductions.',
    heroImage:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80',
    icon: 'CreditCard',
    gradient: 'from-sky-400 via-blue-500 to-indigo-600',
    sections: [
      {
        type: 'text',
        title: 'Why You Need a Business Bank Account in UAE',
        content:
          'A corporate bank account is essential for any registered UAE business. Without it, you cannot accept payments, pay salaries via WPS, file VAT returns, or build credit history. The UAE Central Bank requires all registered companies to operate with an active corporate account. Whether you are launching a Mainland, Free Zone, or Offshore company, we ensure your account opening is swift and stress-free.',
      },
      {
        type: 'features',
        title: 'Why a UAE Business Bank Account Matters',
        subtitle: 'Critical for compliant operations',
        items: [
          {
            title: 'Operate & Receive Payments',
            description: 'Required to accept payments, invoices, and trade legally',
          },
          {
            title: 'Pay Staff via WPS',
            description: 'UAE law requires salary payments through WPS-linked accounts',
          },
          {
            title: 'Separate Business & Personal',
            description: 'Proper bookkeeping for VAT, accounting, and audits',
          },
          {
            title: 'Enable VAT & Tax Filings',
            description: 'Active account required for FTA filings',
          },
          {
            title: 'Build Credit for Loans',
            description: 'Established banking history enables future financing',
          },
          {
            title: 'Central Bank Compliance',
            description: 'Mandatory for AML and transparency compliance',
          },
        ],
      },
      {
        type: 'features',
        title: 'Who Can Open a Corporate Bank Account',
        subtitle: 'Eligible business types',
        items: [
          {
            title: 'Mainland Businesses',
            description: 'LLCs, branches, and professional companies registered with DED',
          },
          {
            title: 'Free Zone Companies',
            description: 'All Free Zone licensed entities with valid business license',
          },
          {
            title: 'Offshore Companies',
            description: 'For non-trading purposes — holding assets and investments',
          },
          {
            title: 'International Investors',
            description: 'Foreign investors holding shares in UAE-based firms',
          },
          {
            title: 'E-commerce Providers',
            description: 'SaaS, dropshipping, digital marketing, and online businesses',
          },
          {
            title: 'Freelancers',
            description: 'Permit holders from Dubai Media City, SHAMS, RAKEZ, twofour54',
          },
        ],
      },
      {
        type: 'features',
        title: 'Challenges We Solve',
        subtitle: 'Common banking hurdles in UAE',
        items: [
          {
            title: 'Strict KYC Verification',
            description: 'We prepare complete KYC files to pass deep background checks',
          },
          {
            title: 'Nationality-Based Scrutiny',
            description: 'We match you with banks aligned to your shareholder profile',
          },
          {
            title: 'Proof of Local Presence',
            description: 'We help arrange Ejari, tenancy contracts, and utility proofs',
          },
          {
            title: 'Compliance Delays',
            description: 'Pre-screened documents avoid weeks of back-and-forth',
          },
          {
            title: 'Payment & Invoicing Delays',
            description: 'Without an account, you cannot invoice or collect payments',
          },
          {
            title: 'Fines for Inactive Businesses',
            description: 'Authorities can penalize companies without active accounts',
          },
        ],
      },
      {
        type: 'features',
        title: 'Our Bank Account Opening Services Include',
        subtitle: 'Complete end-to-end support',
        items: [
          {
            title: 'Bank Match Assessment',
            description: 'Analysis of business activity, license, and ideal bank',
          },
          {
            title: 'KYC File Preparation',
            description: 'Complete documentation, shareholder papers, business plan',
          },
          {
            title: 'Notarization & Attestation',
            description: 'Document translation and legal attestation support',
          },
          {
            title: 'Bank Meetings Scheduled',
            description: 'Pre-scheduled interviews — in-person or online',
          },
          {
            title: 'Banker Coordination',
            description: 'We handle all communication during due diligence',
          },
          {
            title: 'Multi-Currency Setup',
            description: 'AED, USD, EUR accounts and payment gateway integration',
          },
          {
            title: 'WPS & VAT Linking',
            description: 'Connect payroll and tax accounts with your bank',
          },
          {
            title: 'Post-Opening Support',
            description: 'Cheque books, cards, internet banking setup',
          },
        ],
      },
      {
        type: 'features',
        title: 'Banks We Work With',
        subtitle: 'Top-tier UAE banking partners',
        items: [
          {
            title: 'Emirates NBD',
            description: 'One of UAE\'s biggest banks with excellent corporate offerings',
          },
          {
            title: 'Mashreq Bank',
            description: 'Strong digital banking and startup-friendly accounts',
          },
          {
            title: 'RAKBANK',
            description: 'Popular among SMEs and Free Zone companies',
          },
          {
            title: 'First Abu Dhabi Bank (FAB)',
            description: 'UAE\'s largest bank with premium corporate services',
          },
          {
            title: 'ADIB',
            description: 'Leading Islamic bank with Sharia-compliant accounts',
          },
          {
            title: 'WIO Bank',
            description: 'Digital-first bank with fast account opening (2-5 days)',
          },
        ],
      },
      {
        type: 'features',
        title: 'Documents Required',
        subtitle: 'What you need to prepare',
        items: [
          {
            title: 'Trade License Copy',
            description: 'Valid UAE trade license from your jurisdiction',
          },
          {
            title: 'MOA / AOA Documents',
            description: 'Memorandum and Articles of Association',
          },
          {
            title: 'Shareholder Passports',
            description: 'Passport copies and Emirates ID (or entry stamp)',
          },
          {
            title: 'Tenancy Contract',
            description: 'Ejari or Free Zone lease agreement',
          },
          {
            title: 'Business Plan',
            description: 'Sometimes required for compliance review',
          },
          {
            title: 'Company Stamp & Letterhead',
            description: 'For official documentation',
          },
        ],
      },
      {
        type: 'process',
        title: 'How Long Does It Take?',
        items: [
          {
            step: '5-10',
            title: 'Mainland Companies',
            description: 'Business days after complete documentation',
          },
          {
            step: '7-12',
            title: 'Free Zone Entities',
            description: 'Business days depending on bank and profile',
          },
          {
            step: '10-20',
            title: 'Offshore Accounts',
            description: 'Business days with additional due diligence',
          },
          {
            step: '2-5',
            title: 'Digital Accounts (WIO)',
            description: 'Fastest option for eligible businesses',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'Can I open a UAE business bank account without residency?',
            a: 'Yes, non-residents can open corporate accounts — mainly for Free Zone or Offshore companies. Additional due diligence is required.',
          },
          {
            q: 'How long does it take to open a corporate bank account?',
            a: 'Typically 5-20 business days depending on the bank, business profile, and shareholder nationality.',
          },
          {
            q: 'What documents are required?',
            a: 'Trade license, MoA, passport copies, Emirates ID, proof of address, business plan, and KYC documents.',
          },
          {
            q: 'Can Free Zone companies open bank accounts?',
            a: 'Yes — all Free Zone licensed companies can open accounts. We specialize in matching Free Zone businesses with suitable banks.',
          },
          {
            q: 'Do UAE business bank accounts support multi-currency?',
            a: 'Yes, most banks offer AED, USD, EUR, and GBP accounts with multi-currency features.',
          },
          {
            q: 'Can I open a zero-balance business account?',
            a: 'Some banks offer low or zero minimum balance accounts. We help find the best fit for your business.',
          },
          {
            q: 'Can offshore companies open bank accounts in UAE?',
            a: 'Yes, offshore companies can open accounts in select banks for non-trading purposes only.',
          },
        ],
      },
    ],
  },

  // ============ 3. ACCOUNTING ============
  {
    slug: 'accounting',
    title: 'Accounting & Bookkeeping Services in UAE',
    shortTitle: 'Accounting',
    tagline: 'Expert bookkeeping, payroll & audit support',
    heroDescription:
      'Complete accounting solutions for UAE businesses — daily bookkeeping, WPS payroll, VAT reconciliation, financial statements, and audit preparation by certified professionals.',
    heroImage:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=80',
    icon: 'Calculator',
    gradient: 'from-violet-400 via-purple-500 to-purple-600',
    sections: [
      {
        type: 'text',
        title: 'Why Professional Accounting Matters in UAE',
        content:
          'Accurate bookkeeping is not just a legal requirement in the UAE — it is the foundation of every compliant business. With corporate tax now in effect, FTA audits becoming stricter, and VAT filings due every quarter, your financial records must be flawless. Professional accounting ensures you avoid penalties, maximize deductions, and make informed business decisions.',
      },
      {
        type: 'features',
        title: 'Our Accounting Services',
        subtitle: 'End-to-end financial management',
        items: [
          {
            title: 'Daily Bookkeeping',
            description: 'Recording all transactions in compliance-ready format',
          },
          {
            title: 'Payroll Management',
            description: 'WPS-compliant salary processing and payslips',
          },
          {
            title: 'VAT Reconciliation',
            description: 'Monthly and quarterly VAT account reconciliation',
          },
          {
            title: 'Financial Statements',
            description: 'P&L, balance sheet, and cash flow reports',
          },
          {
            title: 'Audit Support',
            description: 'Preparation and support for statutory audits',
          },
          {
            title: 'Management Reports',
            description: 'Monthly MIS reports for business decisions',
          },
        ],
      },
      {
        type: 'process',
        title: 'How We Manage Your Books',
        items: [
          {
            step: '01',
            title: 'Onboarding',
            description: 'Review existing records and set up accounting system',
          },
          {
            step: '02',
            title: 'Data Collection',
            description: 'Collect invoices, receipts, and bank statements',
          },
          {
            step: '03',
            title: 'Recording',
            description: 'Enter and categorize all transactions accurately',
          },
          {
            step: '04',
            title: 'Reconciliation',
            description: 'Reconcile bank, VAT, and inter-company accounts',
          },
          {
            step: '05',
            title: 'Reporting',
            description: 'Deliver monthly financial statements and insights',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'Do I need an accountant for my UAE business?',
            a: 'Yes. With corporate tax and VAT in effect, every UAE business needs accurate accounting for compliance and informed decisions.',
          },
          {
            q: 'What accounting software do you use?',
            a: 'We work with QuickBooks, Xero, Zoho Books, and Tally — depending on your business needs.',
          },
          {
            q: 'How often should I do bookkeeping?',
            a: 'Monthly bookkeeping is recommended. For high-transaction businesses, weekly or daily is better.',
          },
          {
            q: 'Can you help with audit preparation?',
            a: 'Yes. We prepare all documentation, coordinate with auditors, and provide full support during audits.',
          },
        ],
      },
    ],
  },

  // ============ 4. DIGITAL MARKETING ============
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing Services in Dubai',
    shortTitle: 'Digital Marketing',
    tagline: 'Custom campaigns that drive conversions',
    heroDescription:
      'Grow your UAE business with data-driven digital marketing — social media management, paid ads, content strategy, and conversion optimization.',
    heroImage:
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1600&q=80',
    icon: 'Megaphone',
    gradient: 'from-pink-400 via-rose-500 to-rose-600',
    sections: [
      {
        type: 'text',
        title: 'Why Digital Marketing Matters in UAE',
        content:
          'The UAE has one of the highest internet and smartphone penetration rates in the world. Your customers are online — on Instagram, Google, TikTok, and LinkedIn. Without a strong digital presence, you are invisible to them. Our marketing team builds custom strategies that put your brand in front of the right audience at the right time, driving measurable growth.',
      },
      {
        type: 'features',
        title: 'Our Digital Marketing Services',
        subtitle: 'Full-funnel marketing solutions',
        items: [
          {
            title: 'Social Media Management',
            description: 'Instagram, Facebook, LinkedIn, TikTok content and growth',
          },
          {
            title: 'Paid Advertising',
            description: 'Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads',
          },
          {
            title: 'Content Strategy',
            description: 'Blog posts, reels, videos, and professional copywriting',
          },
          {
            title: 'Email Marketing',
            description: 'Newsletters, automation, and lead nurturing campaigns',
          },
          {
            title: 'Conversion Optimization',
            description: 'Landing page design and A/B testing',
          },
          {
            title: 'Analytics & Reporting',
            description: 'ROI tracking and monthly performance reports',
          },
        ],
      },
      {
        type: 'process',
        title: 'How We Grow Your Brand',
        items: [
          {
            step: '01',
            title: 'Audit',
            description: 'Analyze current digital presence and competitors',
          },
          {
            step: '02',
            title: 'Strategy',
            description: 'Build custom marketing plan aligned with goals',
          },
          {
            step: '03',
            title: 'Launch',
            description: 'Execute campaigns across all relevant channels',
          },
          {
            step: '04',
            title: 'Optimize',
            description: 'Test, refine, and scale what works',
          },
          {
            step: '05',
            title: 'Report',
            description: 'Monthly performance reviews with clear metrics',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'How long before I see marketing results?',
            a: 'Paid ads can drive traffic instantly. Organic growth (SEO, social) typically takes 3-6 months.',
          },
          {
            q: 'What is your minimum budget?',
            a: 'We work with businesses of all sizes. Ad spend is separate from our management fee.',
          },
          {
            q: 'Which platforms do you recommend?',
            a: 'Depends on your audience. B2B → LinkedIn, B2C → Instagram/TikTok, Local → Google Ads.',
          },
          {
            q: 'Do you create content too?',
            a: 'Yes. Our team handles copywriting, graphics, and video content creation.',
          },
        ],
      },
    ],
  },

  // ============ 5. WEB DEVELOPMENT ============
  {
    slug: 'web-development',
    title: 'Web Development Services in Dubai',
    shortTitle: 'Web Development',
    tagline: 'Modern, responsive websites that convert',
    heroDescription:
      'Custom websites for UAE businesses — from landing pages to full e-commerce platforms. Built with modern tech, optimized for speed and conversions.',
    heroImage:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=80',
    icon: 'Code',
    gradient: 'from-amber-400 via-orange-500 to-orange-600',
    sections: [
      {
        type: 'text',
        title: 'Why Your UAE Business Needs a Modern Website',
        content:
          'Your website is your digital storefront. In the UAE, customers judge your business by its website within seconds. A slow, outdated site drives customers to competitors. A fast, modern, mobile-friendly site builds trust and converts visitors into paying clients. We build websites that not only look stunning but perform exceptionally.',
      },
      {
        type: 'features',
        title: 'Our Web Development Services',
        subtitle: 'From concept to launch',
        items: [
          {
            title: 'Custom Websites',
            description: 'Bespoke design tailored to your brand and industry',
          },
          {
            title: 'E-commerce Stores',
            description: 'Shopify, WooCommerce, and custom online stores',
          },
          {
            title: 'Landing Pages',
            description: 'High-converting pages for ads and campaigns',
          },
          {
            title: 'Web Applications',
            description: 'Dashboards, portals, and SaaS platforms',
          },
          {
            title: 'Responsive Design',
            description: 'Perfect look on mobile, tablet, and desktop',
          },
          {
            title: 'Speed Optimization',
            description: 'Fast-loading sites with 90+ Lighthouse score',
          },
        ],
      },
      {
        type: 'process',
        title: 'How We Build Your Website',
        items: [
          {
            step: '01',
            title: 'Discovery',
            description: 'Understand your business, goals, and audience',
          },
          {
            step: '02',
            title: 'Design',
            description: 'Create wireframes and visual mockups for approval',
          },
          {
            step: '03',
            title: 'Development',
            description: 'Build the site with clean, modern code',
          },
          {
            step: '04',
            title: 'Testing',
            description: 'Test on all devices and browsers for bugs',
          },
          {
            step: '05',
            title: 'Launch',
            description: 'Deploy to your domain with ongoing support',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'How long does a website take?',
            a: 'Landing page: 1-2 weeks. Business website: 3-4 weeks. E-commerce: 6-8 weeks.',
          },
          {
            q: 'Do you provide hosting?',
            a: 'Yes. We set up fast, secure hosting on Vercel, AWS, or your preferred provider.',
          },
          {
            q: 'Can I update the website myself?',
            a: 'Yes. We build with CMS (like WordPress or custom admin) so you can edit content easily.',
          },
          {
            q: 'Do you offer maintenance?',
            a: 'Yes. Monthly maintenance packages include updates, backups, and security monitoring.',
          },
        ],
      },
    ],
  },

  // ============ 6. SEO SERVICES ============
  {
    slug: 'seo',
    title: 'SEO Services in Dubai',
    shortTitle: 'SEO Services',
    tagline: 'Rank higher, drive organic traffic',
    heroDescription:
      'Increase your online visibility with expert SEO — on-page optimization, keyword targeting, link building, and technical SEO for UAE businesses.',
    heroImage:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1600&q=80',
    icon: 'Search',
    gradient: 'from-lime-400 via-green-500 to-green-600',
    sections: [
      {
        type: 'text',
        title: 'Why SEO Is Critical for UAE Businesses',
        content:
          'Over 90% of online experiences start with a search engine. If your business does not appear on Google page 1, you are losing customers to competitors every day. SEO is the most cost-effective way to drive qualified leads long-term — unlike ads, rankings build up and keep working 24/7. We help UAE businesses dominate their local search results.',
      },
      {
        type: 'features',
        title: 'Our SEO Services',
        subtitle: 'Complete search optimization',
        items: [
          {
            title: 'Keyword Research',
            description: 'Find high-value keywords your customers search',
          },
          {
            title: 'On-Page SEO',
            description: 'Optimize titles, meta tags, content, and structure',
          },
          {
            title: 'Technical SEO',
            description: 'Site speed, mobile-friendliness, and crawlability',
          },
          {
            title: 'Content Creation',
            description: 'SEO-optimized blogs, articles, and landing pages',
          },
          {
            title: 'Link Building',
            description: 'White-hat backlinks from quality websites',
          },
          {
            title: 'Local SEO',
            description: 'Google Business Profile, maps, and local citations',
          },
        ],
      },
      {
        type: 'process',
        title: 'How We Improve Your Rankings',
        items: [
          {
            step: '01',
            title: 'Audit',
            description: 'Full SEO audit — technical, content, and backlinks',
          },
          {
            step: '02',
            title: 'Strategy',
            description: 'Build a roadmap with target keywords and timelines',
          },
          {
            step: '03',
            title: 'On-Page',
            description: 'Optimize existing pages and create new content',
          },
          {
            step: '04',
            title: 'Off-Page',
            description: 'Build quality backlinks and authority',
          },
          {
            step: '05',
            title: 'Monitor',
            description: 'Track rankings, traffic, and conversions monthly',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'How long does SEO take?',
            a: 'Typically 3-6 months to see significant results. Competitive keywords may take longer.',
          },
          {
            q: 'Do you guarantee page 1 rankings?',
            a: 'No ethical SEO can guarantee exact rankings. We guarantee best-practice execution and transparent reporting.',
          },
          {
            q: 'What is local SEO?',
            a: 'Local SEO helps you appear in Google Maps and local searches — critical for Dubai businesses serving local customers.',
          },
          {
            q: 'Do you do SEO for Arabic websites?',
            a: 'Yes. We offer Arabic SEO for UAE-focused businesses targeting Arabic-speaking audiences.',
          },
        ],
      },
    ],
  },

  // ============ 7. COMPLIANCE SERVICES ============
  {
    slug: 'compliance',
    title: 'Compliance Services in UAE',
    shortTitle: 'Compliance Services',
    tagline: 'Stay compliant, avoid fines & penalties',
    heroDescription:
      'Navigate UAE regulations with confidence — UBO filings, ESR reports, license renewals, AML compliance, and regulatory advisory.',
    heroImage:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80',
    icon: 'ShieldCheck',
    gradient: 'from-cyan-400 via-blue-500 to-blue-600',
    sections: [
      {
        type: 'text',
        title: 'Why Compliance Matters in UAE',
        content:
          'UAE regulatory requirements are getting stricter every year. UBO filings, ESR reports, AML compliance, and license renewals are not optional. Missing deadlines results in heavy fines, license suspension, and damaged business reputation. Our compliance team ensures you stay ahead of every deadline and never face penalties.',
      },
      {
        type: 'features',
        title: 'Our Compliance Services',
        subtitle: 'Complete regulatory support',
        items: [
          {
            title: 'UBO Filings',
            description: 'Ultimate Beneficial Owner registration and updates',
          },
          {
            title: 'ESR Reports',
            description: 'Economic Substance Regulations reporting',
          },
          {
            title: 'License Renewals',
            description: 'Timely renewal of trade licenses across all Emirates',
          },
          {
            title: 'AML Compliance',
            description: 'Anti-money laundering policy and procedures',
          },
          {
            title: 'Annual Returns',
            description: 'Preparation and filing of annual compliance documents',
          },
          {
            title: 'Regulatory Advisory',
            description: 'Guidance on new laws and their impact on your business',
          },
        ],
      },
      {
        type: 'process',
        title: 'How We Keep You Compliant',
        items: [
          {
            step: '01',
            title: 'Assessment',
            description: 'Review current compliance status and identify gaps',
          },
          {
            step: '02',
            title: 'Calendar',
            description: 'Build a compliance calendar with all deadlines',
          },
          {
            step: '03',
            title: 'Documentation',
            description: 'Prepare and submit all required filings',
          },
          {
            step: '04',
            title: 'Monitoring',
            description: 'Ongoing tracking of regulatory changes',
          },
          {
            step: '05',
            title: 'Support',
            description: 'Representation during authority inquiries',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'What is UBO filing?',
            a: 'UBO (Ultimate Beneficial Owner) filing identifies the real owners of a company. Mandatory for all UAE registered businesses.',
          },
          {
            q: 'What is ESR?',
            a: 'Economic Substance Regulations require certain businesses to prove they conduct real economic activity in the UAE.',
          },
          {
            q: 'What happens if I miss a deadline?',
            a: 'Fines range from AED 10,000 to AED 50,000+, with possible license suspension for repeated non-compliance.',
          },
          {
            q: 'How often are compliance filings due?',
            a: 'It depends on the type — UBO is annual, ESR is annual, license renewals are annual. We track everything for you.',
          },
        ],
      },
    ],
  },

  // ============ 8. GOLDEN VISA ASSISTANCE ============
  {
    slug: 'golden-visa',
    title: 'UAE Golden Visa Assistance',
    shortTitle: 'Golden Visa',
    tagline: '10-year residency for investors & professionals',
    heroDescription:
      'Get your UAE Golden Visa through business investment, property ownership, or professional talent. Full paperwork, application, and follow-up support.',
    heroImage:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    icon: 'Crown',
    gradient: 'from-yellow-400 via-amber-500 to-amber-600',
    sections: [
      {
        type: 'text',
        title: 'Why Apply for a UAE Golden Visa',
        content:
          'The UAE Golden Visa grants 10-year renewable residency without needing a sponsor. It is available to investors, entrepreneurs, specialized talents, outstanding students, and humanitarian pioneers. Benefits include 100% business ownership, no local sponsor, long-term stability, and the ability to sponsor family members — all without minimum stay requirements.',
      },
      {
        type: 'features',
        title: 'Golden Visa Categories We Assist With',
        subtitle: 'Multiple eligibility paths',
        items: [
          {
            title: 'Investors',
            description: 'Public investment of AED 2M+ in UAE economy',
          },
          {
            title: 'Property Owners',
            description: 'Own property worth AED 2M+ in UAE',
          },
          {
            title: 'Entrepreneurs',
            description: 'Own a project with AED 500K+ value or approval',
          },
          {
            title: 'Specialized Talents',
            description: 'Doctors, engineers, artists, athletes, executives',
          },
          {
            title: 'Outstanding Students',
            description: 'Top graduates from UAE universities',
          },
          {
            title: 'Scientists & Researchers',
            description: 'Recognized for significant scientific contributions',
          },
        ],
      },
      {
        type: 'process',
        title: 'Golden Visa Application Process',
        items: [
          {
            step: '01',
            title: 'Eligibility Check',
            description: 'Review your profile against Golden Visa criteria',
          },
          {
            step: '02',
            title: 'Documentation',
            description: 'Prepare all supporting documents and proofs',
          },
          {
            step: '03',
            title: 'Application',
            description: 'Submit application to ICP for approval',
          },
          {
            step: '04',
            title: 'Medical & Emirates ID',
            description: 'Complete medical tests and biometrics',
          },
          {
            step: '05',
            title: 'Visa Issuance',
            description: 'Receive your 10-year residency visa',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'How long is the Golden Visa valid?',
            a: '10 years, renewable automatically as long as you meet the criteria.',
          },
          {
            q: 'Can I sponsor my family?',
            a: 'Yes. You can sponsor spouse, children, and dependents under the Golden Visa.',
          },
          {
            q: 'Do I need to live in UAE to keep it?',
            a: 'No. The Golden Visa does not require minimum stay — you can keep it while living abroad.',
          },
          {
            q: 'How long does the process take?',
            a: 'Typically 4-8 weeks depending on category and documentation.',
          },
        ],
      },
    ],
  },

  // ============ 9. PRO SERVICES ============
  {
    slug: 'pro-services',
    title: 'PRO Services in UAE',
    shortTitle: 'PRO Services',
    tagline: 'Skip the queues — we handle all government work',
    heroDescription:
      'Complete PRO services for your UAE business — Emirates ID, labor cards, visa stamping, company renewals, and all government liaising handled for you.',
    heroImage:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80',
    icon: 'FileText',
    gradient: 'from-indigo-400 via-purple-500 to-purple-600',
    sections: [
      {
        type: 'text',
        title: 'Why You Need a PRO Service in UAE',
        content:
          'UAE government processes are complex and time-consuming. Every visa, renewal, Emirates ID, or license update means multiple visits to government offices. A dedicated PRO (Public Relations Officer) handles all of this on your behalf — saving you hours of queueing, paperwork stress, and missed deadlines.',
      },
      {
        type: 'features',
        title: 'Our PRO Services',
        subtitle: 'Everything government-related',
        items: [
          {
            title: 'Emirates ID',
            description: 'New applications, renewals, and replacements',
          },
          {
            title: 'Visa Processing',
            description: 'Employment, investor, dependent, and visit visas',
          },
          {
            title: 'Visa Stamping',
            description: 'Passport stamping at immigration offices',
          },
          {
            title: 'Labor Cards',
            description: 'MOHRE registration and labor card issuance',
          },
          {
            title: 'License Renewals',
            description: 'Trade license renewals across all Emirates',
          },
          {
            title: 'Document Attestation',
            description: 'MOFA attestation and embassy legalizations',
          },
        ],
      },
      {
        type: 'process',
        title: 'How Our PRO Team Works',
        items: [
          {
            step: '01',
            title: 'Request',
            description: 'You share your requirement — we assess and quote',
          },
          {
            step: '02',
            title: 'Documentation',
            description: 'We collect and verify all required documents',
          },
          {
            step: '03',
            title: 'Submission',
            description: 'Our PRO submits everything to the relevant authority',
          },
          {
            step: '04',
            title: 'Follow-up',
            description: 'We track status and handle all queries',
          },
          {
            step: '05',
            title: 'Delivery',
            description: 'Completed documents delivered to you',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'What does a PRO do exactly?',
            a: 'A PRO handles all government-related tasks — visa processing, renewals, Emirates ID, labor cards, license renewals, and document attestation.',
          },
          {
            q: 'Do I need to visit government offices?',
            a: 'No. Our PRO team handles everything. You only provide documents and receive updates.',
          },
          {
            q: 'How long does visa processing take?',
            a: 'Employment visa: 5-10 working days. Visit visa: 3-5 days. Dependent visa: 7-14 days.',
          },
          {
            q: 'Do you handle renewals for all Emirates?',
            a: 'Yes. We operate across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ.',
          },
        ],
      },
    ],
  },
];