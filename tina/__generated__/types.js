export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  __typename
  brand {
    __typename
    name
    shortName
    operatedBy
    description
    badges {
      __typename
      icon
      label
    }
    socialsTitle
  }
  ctaBanner {
    __typename
    image
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    secondaryCta
    stats {
      __typename
      value
      label
    }
  }
  quickLinksTitle
  quickLinks {
    __typename
    name
    href
    icon
  }
  servicesTitle
  serviceLinks {
    __typename
    name
    slug
  }
  contactTitle
  contact {
    __typename
    phone {
      __typename
      label
      value
      hours
      href
    }
    email {
      __typename
      label
      value
      href
    }
    address {
      __typename
      label
      line1
      line2
      href
    }
    whatsapp {
      __typename
      label
      message
    }
  }
  socials {
    __typename
    name
    icon
    href
    color
  }
  reviews {
    __typename
    rating
    outOf
    reviewCount
    googleLabel
    ctaText
    ctaHref
  }
  bottomBar {
    __typename
    copyright
    rightsText
    madeWithText
  }
  disclaimer {
    __typename
    title
    text
    lastReviewed
    verifiedText
  }
}
    `;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroImageCard
  heroCardBadge
  heroCardTitle
  heroCardText
  stats {
    __typename
    icon
    value
    label
  }
  whoWeAre {
    __typename
    image
    imageBadgeTitle
    imageBadgeText
    badge
    title
    titleHighlight
    paragraphs
    highlights
  }
  whatMakesUsDifferent {
    __typename
    badge
    title
    titleHighlight
    paragraphs
    features {
      __typename
      icon
      label
    }
  }
  whatWeDo {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      desc
    }
    ctaCard {
      __typename
      title
      text
      buttonText
    }
  }
  whoWeServe {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      desc
    }
  }
  missionVision {
    __typename
    badge
    title
    titleHighlight
    mission {
      __typename
      number
      title
      text
    }
    vision {
      __typename
      number
      title
      text
    }
  }
  whyChooseUs {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      text
    }
  }
  setupSimplified {
    __typename
    badge
    title
    titleHighlight
    subtitle
    features {
      __typename
      icon
      title
      desc
    }
    footerText
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    contactCard {
      __typename
      title
      text
      phone
      phoneHref
      email
      emailHref
      whatsappText
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    buttons {
      __typename
      primary
      secondary
    }
    whatsapp {
      __typename
      label
      value
      note
    }
    email {
      __typename
      label
      value
      note
    }
    office {
      __typename
      label
      line1
      line2
    }
  }
  blogHeroBadge
  blogHeroTitle
  blogHeroTitleHighlight
  blogHeroSubtitle
  blogHeroImage
  latestArticlesTitle
  trendingLabel
  readMoreLabel
  blogPosts {
    __typename
    title
    date
    readTime
    category
    excerpt
    image
  }
  blogCategories {
    __typename
    name
    count
  }
  archives
  popularTags
  blogSidebar {
    __typename
    searchTitle
    searchPlaceholder
    recentPostsTitle
    archivesTitle
    categoriesTitle
    tagsTitle
    ctaCard {
      __typename
      title
      text
      buttonText
      whatsappMessage
    }
  }
  blogFaqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    contactCard {
      __typename
      title
      text
      phone
      phoneHref
      email
      emailHref
      whatsappText
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  blogFinalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    buttons {
      __typename
      primary
      secondary
    }
    stats {
      __typename
      value
      label
    }
  }
}
    `;
export const BlogPostsPartsFragmentDoc = gql`
    fragment BlogPostsParts on BlogPosts {
  __typename
  posts {
    __typename
    slug
    title
    date
    readTime
    category
    tags
    excerpt
    image
  }
  categories {
    __typename
    name
    slug
    count
    description
  }
  archiveNames
  popularTags
}
    `;
export const BlogArchivesPartsFragmentDoc = gql`
    fragment BlogArchivesParts on BlogArchives {
  __typename
  archives {
    __typename
    monthKey
    name
    year
    intro
    featuredPosts {
      __typename
      title
      date
      readTime
      author
      category
      image
      intro
      sections {
        __typename
        heading
        content
      }
      faq {
        __typename
        q
        a
      }
    }
  }
}
    `;
export const PostContentPartsFragmentDoc = gql`
    fragment PostContentParts on PostContent {
  __typename
  postContents {
    __typename
    slug
    content {
      __typename
      type
      heading
      text
      items
      faqItems {
        __typename
        q
        a
      }
    }
  }
}
    `;
export const TagContentPartsFragmentDoc = gql`
    fragment TagContentParts on TagContent {
  __typename
  tagContents {
    __typename
    slug
    name
    description
    longIntro
    featuredPosts {
      __typename
      title
      date
      readTime
      author
      category
      image
      intro
      sections {
        __typename
        heading
        content
      }
      faq {
        __typename
        q
        a
      }
    }
  }
}
    `;
export const CalculatorPartsFragmentDoc = gql`
    fragment CalculatorParts on Calculator {
  __typename
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  steps {
    __typename
    id
    label
    icon
  }
  stepTitles {
    __typename
    license {
      __typename
      title
      subtitle
    }
    activity {
      __typename
      title
      subtitle
    }
    office {
      __typename
      title
      subtitle
    }
    extras {
      __typename
      title
      subtitle
    }
    contact {
      __typename
      title
      subtitle
    }
  }
  licenseTypes {
    __typename
    id
    icon
    title
    desc
    basePrice
    badge
  }
  activities {
    __typename
    id
    icon
    title
    desc
    price
    color
  }
  officeOptions {
    __typename
    id
    icon
    title
    desc
    price
    badge
  }
  extrasList {
    __typename
    id
    icon
    title
    desc
    price
    badge
  }
  quickAnswers {
    __typename
    q
    a
  }
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroImage
  contactCards {
    __typename
    icon
    title
    lines
    color
    actions {
      __typename
      label
      link
      icon
    }
  }
  trustBar {
    __typename
    ratingText
    scoreLabel
    awardText
  }
  formSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    submitButton
    secureNote
    successTitle
    successText
    successWhatsappText
    successWhatsappMessage
    subjects
  }
  sidebar {
    __typename
    instantCard {
      __typename
      availableBadge
      title
      text
      callLabel
      callNumber
      callHref
      whatsappLabel
      whatsappValue
      whatsappMessage
    }
    officeCard {
      __typename
      title
      officeLabel
      addressLine1
      addressLine2
      phone
      phoneHref
      directionsHref
      emailLabel
      email1
      email1Href
      email2
      email2Href
      hoursLabel
      hours {
        __typename
        day
        time
        closed
      }
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    relatedServicesTitle
    items {
      __typename
      q
      a
    }
    relatedServices {
      __typename
      icon
      title
      desc
      color
      cta
      link
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    phone
    phoneHref
    whatsappText
    whatsappMessage
    chips
    cards {
      __typename
      call {
        __typename
        label
        value
        note
        href
      }
      email {
        __typename
        label
        value
        note
        href
      }
      office {
        __typename
        label
        line1
        line2
      }
    }
  }
}
    `;
export const PrivacyPolicyPartsFragmentDoc = gql`
    fragment PrivacyPolicyParts on PrivacyPolicy {
  __typename
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  trustBadges {
    __typename
    icon
    label
    color
  }
  tocTitle
  tocSections {
    __typename
    id
    title
  }
  sidebarCard {
    __typename
    title
    text
    buttonText
    email
    emailHref
  }
  intro {
    __typename
    heading
    subheading
    paragraphs
    importantNote
  }
  section01 {
    __typename
    label
    title
    intro
    personalInfo {
      __typename
      title
      text
      items
    }
    aggregateInfo {
      __typename
      title
      text
    }
    note
  }
  section02 {
    __typename
    label
    title
    intro
    items
  }
  section03 {
    __typename
    label
    title
    intro
    items
  }
  section04 {
    __typename
    label
    title
    paragraphs
    cookieUses {
      __typename
      title
      items
    }
    note
    analyticsText
  }
  section05 {
    __typename
    label
    title
    text
  }
  section06 {
    __typename
    label
    title
    intro
    options {
      __typename
      title
      desc
    }
  }
  section07 {
    __typename
    label
    title
    paragraphs
    protectionBadges {
      __typename
      icon
      label
    }
    importantNote
  }
  section08 {
    __typename
    label
    title
    text
  }
  section09 {
    __typename
    label
    title
    text
  }
  section10 {
    __typename
    label
    title
    text
  }
  section11 {
    __typename
    label
    title
    text
  }
  section12 {
    __typename
    label
    title
    intro
    emailLabel
    email
    emailHref
    phoneLabel
    phone
    phoneHref
    whatsappLabel
    whatsappValue
    whatsappMessage
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      q
      a
    }
  }
}
    `;
export const ServicesPartsFragmentDoc = gql`
    fragment ServicesParts on Services {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyEssentialSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    imageBadgeTitle
    imageBadgeText
    items {
      __typename
      icon
      title
      description
    }
  }
  businessTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    ctaText
    ctaMessage
    features {
      __typename
      icon
      label
    }
  }
  servicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
    }
  }
  penaltiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    items {
      __typename
      icon
      title
      amount
      description
    }
  }
  auditSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    imageBadgeTitle
    imageBadgeText
    ctaText
    ctaMessage
    steps {
      __typename
      step
      title
      description
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const BusinessSetupPartsFragmentDoc = gql`
    fragment BusinessSetupParts on BusinessSetup {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whatIsSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  namingRulesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    allowedItems {
      __typename
      icon
      title
      description
      color
    }
    prohibitedItems {
      __typename
      icon
      title
      description
      color
    }
  }
  servicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  processSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    steps {
      __typename
      step
      icon
      title
      description
      color
    }
  }
  namingTipsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
      color
    }
  }
  documentsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      desc
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      desc
    }
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
  whyDubaiSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  jurisdictionsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  audienceSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  whatIsSection_2 {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  processSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      icon
      title
      description
      color
    }
  }
  documentsSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
    }
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  complianceSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      color
    }
    footerText
  }
  bankingSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      name
      icon
      color
    }
    footerText
  }
  costComparisonSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      route
      cost
      ownership
      timeline
      bestFor
      color
    }
    footerNote
  }
  mistakesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
      color
    }
    ctaCard {
      __typename
      title
      text
      buttonText
      whatsappMessage
    }
  }
  dependentTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  requirementsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whoNeedsItSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
      color
    }
    ctaCard {
      __typename
      title
      text
      buttonText
      whatsappMessage
    }
  }
  platformsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      name
      icon
      color
    }
  }
  integrationsSection {
    __typename
    title
    paymentGateways {
      __typename
      name
      icon
      color
    }
    logisticsPartners {
      __typename
      name
      icon
      color
    }
  }
  licenseTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  topFreeZonesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      name
      tagline
      color
    }
  }
  comparisonSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      factor
      freezone
      mainland
      color
    }
  }
  categoriesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  partnerTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  legalProtectionSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      desc
      color
    }
  }
  requirementsSection_2 {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whoNeedsSponsorSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
    }
    ctaCard {
      __typename
      title
      text
      buttonText
      whatsappMessage
    }
  }
  flipCardsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      frontTitle
      frontTag
      backTitle
      backDescription
      color
    }
  }
  controlSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      color
    }
    footerText
  }
  exitOptionsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
    }
    footerText
  }
  licensingSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  introSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  licenseTypesSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  servicesSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  benefitsSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
      color
    }
    ctaCard {
      __typename
      title
      text
      buttonText
      whatsappMessage
    }
  }
  whoShouldConsiderSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  whatIsSection_3 {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  benefitsSection_3 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  audiencesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      tagline
      description
      image
      color
    }
  }
  jurisdictionsSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  activitiesSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      color
    }
  }
  processSection_3 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      icon
      title
      description
      color
    }
  }
  servicesSection_3 {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  documentsSection_3 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
    }
  }
  complianceSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  maintenanceSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      color
    }
    footerText
  }
  whyChooseUsSection_2 {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      desc
    }
  }
  growthStatsSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection_2 {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA_2 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
  whatIsSection_4 {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  benefitsSection_4 {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  visaTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  whoNeedsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
      color
    }
    ctaCard {
      __typename
      title
      text
      buttonText
      whatsappMessage
    }
  }
  packageInclusionsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
}
    `;
export const ServiceAreasPartsFragmentDoc = gql`
    fragment ServiceAreasParts on ServiceAreas {
  __typename
  areaName
  areaShort
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyChooseSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph
    items {
      __typename
      icon
      title
      desc
    }
  }
  servicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      desc
      color
    }
  }
  packagesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      name
      price
      note
      color
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    items
  }
  areaFaqsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      q
      a
    }
  }
  quickAnswersSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    relatedServicesTitle
    items {
      __typename
      q
      a
    }
    relatedServices {
      __typename
      icon
      title
      desc
      color
      link
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    secondaryCta
    whatsappMessage
  }
  costSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      type
      cost
      bestFor
      color
    }
    estimateLabel
    estimateValue
    estimateNote
  }
  whyDifcSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      desc
      color
    }
  }
  comparisonSection {
    __typename
    badge
    title
    titleHighlight
    headers
    rows {
      __typename
      factor
      difc
      mainland
      jafza
      dmcc
    }
  }
  jurisdictionsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      name
      bestFor
      cost
      notes
      color
    }
  }
  costGuideSection {
    __typename
    badge
    title
    titleHighlight
    paragraph1
    paragraph2
    note
  }
  licenseTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      name
      desc
      cost
      color
    }
  }
  officeOptionsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      desc
    }
  }
  comparisonSection_2 {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      name
      desc
      color
      highlight
    }
  }
}
    `;
export const PackagesPartsFragmentDoc = gql`
    fragment PackagesParts on Packages {
  __typename
  heroTitle
  heroSubtitle
  heroBadge
  heroImage
  stats {
    __typename
    value
    label
  }
  packages {
    __typename
    title
    price
    tagline
    category
    badge
    icon
    includes
  }
  faqs {
    __typename
    q
    a
  }
}
    `;
export const PackagesDetailPartsFragmentDoc = gql`
    fragment PackagesDetailParts on PackagesDetail {
  __typename
  slug
  hero {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    breadcrumbLabel
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyChoose {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  costTable {
    __typename
    badge
    title
    titleHighlight
    subtitle
    rows {
      __typename
      license
      cost
      bestFor
      color
      icon
    }
    footerNote
  }
  comparison {
    __typename
    badge
    title
    titleHighlight
    subtitle
    headers
    rows {
      __typename
      factor
      difc
      mainland
      jafza
      dmcc
      highlight
      color
    }
  }
  services {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  packages {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      price
      tagline
      category
      color
      badge
      badgeColor
      includes
    }
  }
  process {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      icon
      title
      description
      color
    }
  }
  whyChooseUs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    phone
    phoneHref
    whatsappMessage
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
  intro {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  customPackageCTA {
    __typename
    title
    subtitle
    buttonText
    whatsappMessage
  }
  benefits {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      desc
      color
    }
  }
  businessIndustries {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      desc
      color
    }
  }
  licenseTypes {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      tagline
      description
      image
      color
      features
      bestFor
    }
  }
  officeOptions {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  postSetupSupport {
    __typename
    badge
    title
    titleHighlight
    subtitle
    footer
    items {
      __typename
      icon
      label
      desc
    }
  }
}
    `;
export const MainlandPartsFragmentDoc = gql`
    fragment MainlandParts on Mainland {
  __typename
  slug
  hero {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    breadcrumbLabel
    breadcrumbParent
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  intro {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  industriesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
      roles
    }
  }
  processSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      icon
      title
      description
      color
    }
  }
  benefits {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  emiratisationSection {
    __typename
    badge
    title
    titleHighlight
    paragraph1
    paragraph2
    paragraph3
    features {
      __typename
      icon
      label
      desc
    }
    visualCards {
      __typename
      image
      tag
      title
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  bulkOverseasSection {
    __typename
    bulk {
      __typename
      icon
      tag
      title
      description
      image
      gradient
      accentColor
      tags
    }
    overseas {
      __typename
      icon
      tag
      title
      description
      image
      gradient
      accentColor
      tags
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  relatedServices {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    phone
    phoneHref
    whatsappMessage
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
  licenseTypes {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      description
      image
      color
      features
      bestFor
    }
  }
  eligibilitySection {
    __typename
    badge
    title
    titleHighlight
    paragraph1
    paragraph2
    groups {
      __typename
      icon
      title
      description
      color
    }
    visualCards {
      __typename
      image
      tag
      title
    }
  }
  services {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whatIsSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  advantages {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  activityCategories {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      examples
      color
    }
  }
  emiratesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      name
      icon
      description
      color
      bg
      highlight
    }
  }
  setupProcessSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      icon
      title
      description
      color
    }
  }
  whyChooseUsSimple {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  whatIsVisa {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  documentsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      desc
    }
  }
  officeTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      icon
      title
      short
      description
      image
      color
      features
      price
    }
  }
  simplifySection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      icon
      title
      description
      color
    }
  }
  locationsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      id
      name
      tagline
      description
      image
      color
      icon
      features
    }
  }
}
    `;
export const HomeHeroPartsFragmentDoc = gql`
    fragment HomeHeroParts on HomeHero {
  __typename
  badge {
    __typename
    text
    showPulse
  }
  heading {
    __typename
    line1
    line2Highlight
    line3
  }
  subtext
  video {
    __typename
    src
    poster
  }
  ctaPrimary {
    __typename
    text
    link
  }
  ctaSecondary {
    __typename
    text
    message
  }
  trustPills
  googleBadge {
    __typename
    rating
    reviewsText
  }
  floatingCards {
    __typename
    icon
    title
    price
    tag
    tagColor
    delay
    position {
      __typename
      right
      top
    }
    z
  }
  reviewsSection {
    __typename
    badgeText
    title
    titleHighlight
    rating
    reviewsCountText
  }
  reviews {
    __typename
    name
    initials
    rating
    date
    text
    color
  }
}
    `;
export const HomeIntroPartsFragmentDoc = gql`
    fragment HomeIntroParts on HomeIntro {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
    line3
  }
  paragraph1
  paragraph2BoldPart
  paragraph2Rest
  highlights
  ctaPrimary {
    __typename
    text
    link
  }
  ctaSecondary {
    __typename
    text
    link
  }
  dashboardCard {
    __typename
    brandLabel
    brandTitle
    statusLabel
    awardBadge {
      __typename
      label
      value
    }
    expertsBadge {
      __typename
      label
      value
    }
    steps {
      __typename
      label
      status
      week
    }
    progressLabel
    progressValue
    progressPercent
  }
  bottomSectionTitle {
    __typename
    line1
    highlight
  }
  benefits {
    __typename
    icon
    title
    description
    gradient
  }
}
    `;
export const HomeServicesPartsFragmentDoc = gql`
    fragment HomeServicesParts on HomeServices {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
  }
  subtitle
  services {
    __typename
    id
    icon
    title
    tagline
    description
    image
    features
    gradient
    glowColor
    accentColor
    bgAccent
    borderAccent
    number
  }
  bottomCTA {
    __typename
    question
    buttonText
    buttonLink
  }
}
    `;
export const HomeSpecializedServicesPartsFragmentDoc = gql`
    fragment HomeSpecializedServicesParts on HomeSpecializedServices {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
  }
  subtitle
  hoverHint
  services {
    __typename
    slug
    icon
    title
    description
    image
    gradient
    points
  }
}
    `;
export const HomePackagesPartsFragmentDoc = gql`
    fragment HomePackagesParts on HomePackages {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
  }
  subtitle
  toggle {
    __typename
    oneTimeLabel
    installmentLabel
    installmentSuffix
  }
  packages {
    __typename
    id
    name
    badge
    price
    currency
    period
    tagline
    icon
    gradient
    glowColor
    accentText
    accentBg
    accentBorder
    iconBg
    image
    features
    cta
    highlighted
  }
  customPackageCTA {
    __typename
    title
    subtitle
    primaryCta
    secondaryCta
    phone
    phoneHref
    whatsappMessage
    backgroundImage
  }
  trustLine {
    __typename
    label
    color
  }
}
    `;
export const HomeProcessPartsFragmentDoc = gql`
    fragment HomeProcessParts on HomeProcess {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
  }
  subtitle
  stepsLabel
  stepsLabelSuffix
  steps {
    __typename
    number
    icon
    title
    description
    gradient
    glow
    image
  }
  bottomCTA {
    __typename
    icon
    title
    subtitle
    primaryCta
    secondaryCta
    phone
    phoneHref
    whatsappMessage
    backgroundImage
    trustIndicators
  }
}
    `;
export const HomeTrustBarPartsFragmentDoc = gql`
    fragment HomeTrustBarParts on HomeTrustBar {
  __typename
  badge
  heading {
    __typename
    line1
    line2Highlight
  }
  subtitle
  stats {
    __typename
    icon
    value
    suffix
    label
    description
    gradient
    glowColor
  }
  bottomTrust {
    __typename
    label
    color
  }
}
    `;
export const HomeComparisonPartsFragmentDoc = gql`
    fragment HomeComparisonParts on HomeComparison {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
  }
  subtitle
  vsLabel
  zones {
    __typename
    id
    name
    short
    icon
    gradient
    glow
    accentText
    accentBg
    accentBorder
    image
    badge
    tagline
    bestFor
    highlight
    limitation
    ctaText
    whatsappMessage
    watermark
  }
  bestForLabel
  tableHeaders {
    __typename
    features
    freezone
    mainland
  }
  features {
    __typename
    icon
    label
    freezone {
      __typename
      value
      score
    }
    mainland {
      __typename
      value
      score
    }
  }
  bottomCTA {
    __typename
    icon
    title
    subtitle
    primaryCta
    secondaryCta
    phone
    phoneHref
    whatsappMessage
    backgroundImage
  }
}
    `;
export const HomeContactPartsFragmentDoc = gql`
    fragment HomeContactParts on HomeContact {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
  }
  subtitle
  contactCards {
    __typename
    icon
    label
    value
    sub
    href
    gradient
    glow
  }
  workingHoursCard {
    __typename
    title
    timezoneLabel
    todayBadge
    hours {
      __typename
      day
      hours
      active
      closed
    }
  }
  trustBadges {
    __typename
    icon
    label
    sub
  }
  form {
    __typename
    title
    subtitle
    submitText
    privacyNote
    successTitle
    successMessage
    whatsappNumber
    whatsappSenderLine
    fields {
      __typename
      name {
        __typename
        label
        placeholder
        required
      }
      email {
        __typename
        label
        placeholder
        required
      }
      phone {
        __typename
        label
        placeholder
        required
      }
      nationality {
        __typename
        label
        placeholder
        required
      }
      service {
        __typename
        label
        placeholder
        required
      }
      message {
        __typename
        label
        placeholder
        required
      }
    }
    services
  }
  map {
    __typename
    title
    address1
    address2
    directionsText
    directionsLink
    embedSrc
    quickContactLabel
    quickContactPhone
    quickContactMessage
  }
}
    `;
export const HomeFaqPartsFragmentDoc = gql`
    fragment HomeFaqParts on HomeFaq {
  __typename
  badge
  heading {
    __typename
    line1
    highlight
  }
  headingLine3
  description
  searchPlaceholder
  contactCard {
    __typename
    icon
    title
    subtitle
    whatsappText
    whatsappMessage
    callText
    phone
    phoneHref
    statsResponseLabel
    statsResponseValue
    statsConsultLabel
    statsConsultValue
  }
  expandAllLabel
  collapseAllLabel
  questionSingular
  questionPlural
  noResultsTitle
  noResultsSubtitle
  resetFiltersText
  categories {
    __typename
    id
    name
    icon
    count
  }
  faqs {
    __typename
    category
    q
    a
  }
  bottomCTA {
    __typename
    icon
    title
    subtitle
    buttonText
    whatsappMessage
  }
}
    `;
export const AdgmPartsFragmentDoc = gql`
    fragment AdgmParts on Adgm {
  __typename
  slug
  hero {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    breadcrumbParent
    breadcrumbLabel
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  dashboardCard {
    __typename
    title
    statusLabel
    balanceLabel
    balanceValue
    balanceSubtext
    metrics {
      __typename
      label
      value
      color
    }
    chartLabel
    chartValue
    chartBars
  }
  whyADGM {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  beginJourney {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  licenseTypes {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  visaServices {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      stampColor
    }
  }
  officeSolutions {
    __typename
    badge
    title
    titleHighlight
    subtitle
    smallItems {
      __typename
      icon
      title
      description
      color
    }
    largeItem {
      __typename
      icon
      title
      description
    }
  }
  businessSupport {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  strategicAdvantages {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
    }
  }
  whyChooseUs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  relatedServices {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    phone
    phoneHref
    whatsappMessage
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
}
    `;
export const AjmanFreeZonePartsFragmentDoc = gql`
    fragment AjmanFreeZoneParts on AjmanFreeZone {
  __typename
  slug
  hero {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    breadcrumbParent
    breadcrumbLabel
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  dashboardCard {
    __typename
    title
    statusLabel
    zoneLabel
    zoneValue
    statusBadge
    metrics {
      __typename
      label
      value
      color
    }
  }
  growBusiness {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  licenseTypes {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  whoShouldConsider {
    __typename
    badge
    title
    titleHighlight
    subtitle
    footerNote
    items {
      __typename
      icon
      label
    }
  }
  infrastructure {
    __typename
    badge
    title
    titleHighlight
    subtitle
    smallItems {
      __typename
      icon
      title
      description
      color
    }
    largeItem {
      __typename
      icon
      title
      description
    }
    violetCard {
      __typename
      icon
      title
      description
    }
  }
  whyDifferent {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  growthStats {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  ourServices {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  relatedServices {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    phone
    phoneHref
    whatsappMessage
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
}
    `;
export const BusinessActivitiesPartsFragmentDoc = gql`
    fragment BusinessActivitiesParts on BusinessActivities {
  __typename
  hero {
    __typename
    image
    breadcrumbParent
    breadcrumbLabel
    badge
    title
    titleHighlight
    subtitle
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  dashboardCard {
    __typename
    title
    statusLabel
    totalLabel
    totalValue
    statusBadge
    metrics {
      __typename
      label
      value
      color
    }
  }
  exploreSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  freeZonesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      name
      description
      image
      color
    }
  }
  commonActivitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  whyRightActivity {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraph1
    paragraph2
    paragraph3
    features
  }
  multipleCombosSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      color
    }
    footerNote
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
    }
  }
  documentsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      description
    }
  }
  trendingSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  relatedServices {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    whatsappMessage
    phone
    phoneHref
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
}
    `;
export const D3PartsFragmentDoc = gql`
    fragment D3Parts on D3 {
  __typename
  hero {
    __typename
    image
    breadcrumbParent
    breadcrumbLabel
    badge
    title
    titleHighlight
    subtitle
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  dashboardCard {
    __typename
    title
    totalLabel
    totalValue
    statusBadge
    metrics {
      __typename
      label
      value
      color
    }
  }
  startInStyle {
    __typename
    badge
    title
    titleHighlight
    subtitle
    smallCards {
      __typename
      icon
      title
      description
      color
    }
    largeCard {
      __typename
      title
      description
      image
    }
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  workspacesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  visaServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      stampColor
    }
  }
  growthSupportSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  strategicSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    items {
      __typename
      icon
      title
      description
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      image
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  relatedServices {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    whatsappMessage
    phone
    phoneHref
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
}
    `;
export const DafzaPartsFragmentDoc = gql`
    fragment DafzaParts on Dafza {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyDafzaSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    cards {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  takeOffSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    footerNote
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  visaSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      stampColor
    }
  }
  whyIdealSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
    }
  }
  whoShouldSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    scrollHint
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  supportSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DhccPartsFragmentDoc = gql`
    fragment DhccParts on Dhcc {
  __typename
  hero {
    __typename
    image
    breadcrumbParent
    breadcrumbLabel
    badge
    title
    titleHighlight
    subtitle
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  dashboardCard {
    __typename
    title
    totalLabel
    totalValue
    statusBadge
    metrics {
      __typename
      label
      value
      color
    }
  }
  whyDhcc {
    __typename
    badge
    title
    titleHighlight
    subtitle
    smallCards {
      __typename
      icon
      title
      description
      color
    }
    largeCard {
      __typename
      icon
      title
      description
      image
    }
    smallCard2 {
      __typename
      icon
      title
      description
      color
    }
  }
  whoCanOpenSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  documentsSectionDhcc {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      description
    }
  }
  setupProcessSectionDhcc {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      icon
      title
      description
      color
      image
    }
  }
  whyTrustUsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  relatedServices {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    whatsappMessage
    phone
    phoneHref
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
}
    `;
export const DicPartsFragmentDoc = gql`
    fragment DicParts on Dic {
  __typename
  slug
  hero {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    breadcrumbParent
    breadcrumbLabel
    ctaPrimaryText
    ctaPrimaryLink
    ctaSecondaryText
    ctaSecondaryMessage
    badges
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  dashboardCard {
    __typename
    title
    statusLabel
    totalLabel
    totalValue
    statusBadge
    metrics {
      __typename
      label
      value
      color
    }
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    smallCards {
      __typename
      icon
      title
      description
      color
    }
    largeCard {
      __typename
      icon
      title
      description
      color
    }
    smallCard2 {
      __typename
      icon
      title
      description
      color
    }
    smallCard3 {
      __typename
      icon
      title
      description
      color
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  facilitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
    }
  }
  howWeHelpSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
    }
    ctaCard {
      __typename
      icon
      title
      ctaText
      whatsappMessage
    }
  }
  digitalScaleSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    intro
    items {
      __typename
      icon
      title
      description
    }
  }
  activitiesCloudSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  faqs {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      q
      a
    }
  }
  relatedServices {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCta
    phone
    phoneHref
    whatsappMessage
    badges
    office {
      __typename
      label
      line1
      line2
      mapLink
    }
    hours {
      __typename
      label
      monFri
      saturday
      sunday
    }
  }
}
    `;
export const DmccPartsFragmentDoc = gql`
    fragment DmccParts on Dmcc {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyDmccSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    cards {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      image
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  registrationSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
    }
  }
  officeSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  globalGrowthSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  postSetupSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  whoShouldSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DccPartsFragmentDoc = gql`
    fragment DccParts on Dcc {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  launchSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  officeSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  digitalSupportSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  logisticsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  ecoSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights {
      __typename
      icon
      label
    }
  }
  partnerSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
    footerText
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DkpPartsFragmentDoc = gql`
    fragment DkpParts on Dkp {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  buildFutureSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  businessTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  officeSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  licensingSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  visaSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
    }
    footerText
  }
  expandReachSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
    }
    footerText
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  comparisonSection {
    __typename
    title
    subtitle
    items {
      __typename
      factor
      dkp
      ifza
      dic
    }
    verdict
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DmcPartsFragmentDoc = gql`
    fragment DmcParts on Dmc {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCard {
    __typename
    headerTitle
    headerStatus
    icon
    zoneLabel
    zoneValue
    statusBadge
    setupTimeLabel
    setupTimeValue
    taxLabel
    taxValue
    footerText
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyDmcSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  whoShouldSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
    }
  }
  officesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  legalEntitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  visaSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
    footerText
  }
  whyPartnerSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    features
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DsoPartsFragmentDoc = gql`
    fragment DsoParts on Dso {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCircles {
    __typename
    primary {
      __typename
      icon
      value
      label
      color
    }
    secondary {
      __typename
      icon
      value
      label
      color
    }
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  whatIsSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  bentoSection {
    __typename
    badge
    title
    titleHighlight
    largeCards {
      __typename
      icon
      title
      description
      color
    }
    smallCards {
      __typename
      icon
      title
      description
      color
    }
  }
  smartCitySection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
    helperCard {
      __typename
      title
      text
    }
  }
  whoShouldSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DubaiSouthPartsFragmentDoc = gql`
    fragment DubaiSouthParts on DubaiSouth {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCards {
    __typename
    primary {
      __typename
      badge
      icon
      label
      value
      highlight
      highlightLabel
      footer
      color
    }
    secondary {
      __typename
      icon
      label
      value
      title
      subtext
      color
    }
    tertiary {
      __typename
      icon
      label
      value
      title
      subtext
      color
    }
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  whatIsSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
      image
    }
  }
  whyIdealSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  whoShouldSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
    noteText
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    description
    items {
      __typename
      icon
      label
    }
    stats {
      __typename
      icon
      value
      label
      color
      bg
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DuqePartsFragmentDoc = gql`
    fragment DuqeParts on Duqe {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCard {
    __typename
    headerTitle
    headerStatus
    icon
    zoneLabel
    zoneValue
    statusBadge
    setupTimeLabel
    setupTimeValue
    taxLabel
    taxValue
    footerText
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  whatIsSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  advantagesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      icon
      title
      description
      color
    }
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      color
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whoShouldSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  locationSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    features {
      __typename
      icon
      label
    }
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const DwtcPartsFragmentDoc = gql`
    fragment DwtcParts on Dwtc {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCard {
    __typename
    headerTitle
    headerStatus
    icon
    zoneLabel
    zoneValue
    statusBadge
    setupTimeLabel
    setupTimeValue
    taxLabel
    taxValue
    footerText
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyDwtcSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    smallCards {
      __typename
      icon
      title
      description
      color
    }
    largeCard {
      __typename
      icon
      title
      description
      image
      color
    }
    transportCard {
      __typename
      icon
      title
      description
      color
    }
  }
  servicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  packagesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      name
      badge
      price
      currency
      description
      color
      highlighted
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const FccPartsFragmentDoc = gql`
    fragment FccParts on Fcc {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCard {
    __typename
    headerTitle
    headerStatus
    icon
    zoneLabel
    zoneValue
    statusBadge
    setupTimeLabel
    setupTimeValue
    taxLabel
    taxValue
    footerText
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  startSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  workspacesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    largeCard {
      __typename
      icon
      title
      description
      color
    }
    secondaryCards {
      __typename
      icon
      title
      description
      color
    }
    bottomCards {
      __typename
      icon
      title
      description
      color
    }
  }
  visaSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    features
  }
  postSetupSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const HfzaPartsFragmentDoc = gql`
    fragment HfzaParts on Hfza {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCard {
    __typename
    headerTitle
    headerStatus
    icon
    zoneLabel
    zoneValue
    statusBadge
    setupTimeLabel
    setupTimeValue
    taxLabel
    taxValue
    footerText
    color
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  readySection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  formationSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    structuresTitle
    structures {
      __typename
      icon
      title
      description
      code
      color
    }
    licensesTitle
    licenses {
      __typename
      icon
      title
      description
      color
    }
  }
  registerSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    features
  }
  facilitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      image
      color
    }
    helperCard {
      __typename
      title
      text
    }
  }
  sectorsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
    footerText
  }
  visaSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    features
  }
  digitalServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const IfzaPartsFragmentDoc = gql`
    fragment IfzaParts on Ifza {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  heroCards {
    __typename
    primary {
      __typename
      badge
      icon
      label
      value
      highlight
      highlightLabel
      footer
      color
    }
    secondary {
      __typename
      icon
      label
      value
      title
      subtext
      color
    }
  }
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyIfzaSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    primaryCard {
      __typename
      icon
      title
      description
      color
    }
    secondaryCards {
      __typename
      icon
      title
      description
      color
    }
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      color
      image
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  officeOptionsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  complianceSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  whyIdealSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  whoShouldSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      image
      color
    }
  }
  howWeHelpSection {
    __typename
    badge
    title
    titleHighlight
    steps {
      __typename
      step
      title
      description
      icon
      color
    }
  }
  costTimelineSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    costBreakdown {
      __typename
      item
      cost
      notes
      color
    }
    year1Total {
      __typename
      label
      subtext
      fromLabel
      minValue
      maxValue
    }
    timelineBadge
    timelineTitle
    timeline {
      __typename
      day
      title
      description
      color
    }
    comparisonTitle
    comparisonSubtitle
    comparisonHeaders {
      __typename
      factor
      ifza
      rakez
      meydan
    }
    comparison {
      __typename
      factor
      ifza
      rakez
      meydan
    }
    verdictLabel
    verdictText
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const JafzaPartsFragmentDoc = gql`
    fragment JafzaParts on Jafza {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyJafzaSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  servicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  infrastructureSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    image
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  liquidationSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  offshoreSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  costBreakdownSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      item
      cost
      notes
      color
    }
    yearTotalLabel
    yearTotalNote
    yearTotalFrom
  }
  comparisonSection {
    __typename
    title
    subtitle
    items {
      __typename
      factor
      jafza
      dmcc
      ifza
    }
    verdict
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const KizadPartsFragmentDoc = gql`
    fragment KizadParts on Kizad {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whatIsSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  whyKizadSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  benefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
    footerText
  }
  facilitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
    }
  }
  industriesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      color
    }
  }
  locationSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    features {
      __typename
      icon
      label
    }
  }
  costBreakdownSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      component
      cost
      notes
    }
  }
  comparisonSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      factor
      kizad
      jafza
      ifza
    }
    ctaText
    ctaSubtext
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const MeydanPartsFragmentDoc = gql`
    fragment MeydanParts on Meydan {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyMeydanSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  readyToLaunchSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  keyBenefitsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  setupStepsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
      image
    }
  }
  documentsSection {
    __typename
    badge
    title
    titleHighlight
    items {
      __typename
      icon
      label
      description
    }
  }
  whyChooseUsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const RakezPartsFragmentDoc = gql`
    fragment RakezParts on Rakez {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  introSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  whyChooseSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  licenseTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  facilitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  visaServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  formationServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  taxBenefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      detail
    }
  }
  digitalServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
    footerText
  }
  postLicenseSupportSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  businessActivitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      color
    }
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const SaifPartsFragmentDoc = gql`
    fragment SaifParts on Saif {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whySaifSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  howWeHelpSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
      image
    }
  }
  digitalGrowthSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  liquidationSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const ShamsPartsFragmentDoc = gql`
    fragment ShamsParts on Shams {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  whyShamsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  readyToLaunchSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  licensesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  workspacesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  howWeHelpSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    steps {
      __typename
      step
      title
      description
      icon
      color
    }
  }
  activitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
    footerText
  }
  visaServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      stampColor
    }
  }
  taxAdvantagesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const UaqPartsFragmentDoc = gql`
    fragment UaqParts on Uaq {
  __typename
  heroImage
  heroBadge
  heroTitle
  heroTitleHighlight
  heroSubtitle
  heroChips
  stats {
    __typename
    icon
    value
    label
    color
  }
  introSection {
    __typename
    badge
    title
    titleHighlight
    image
    imageBadgeTitle
    imageBadgeText
    paragraphs
    highlights
  }
  whyChooseSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
    }
  }
  formationServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
    footerText
  }
  licenseTypesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      code
      color
    }
  }
  facilitiesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      title
      description
      color
      size
    }
  }
  taxBenefitsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
      detail
    }
  }
  visaServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  supportServicesSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      label
    }
  }
  growthStatsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    items {
      __typename
      icon
      value
      label
      color
    }
  }
  faqsSection {
    __typename
    badge
    title
    titleHighlight
    subtitle
    sidebarCard {
      __typename
      title
      text
      whatsappMessage
    }
    items {
      __typename
      q
      a
    }
  }
  relatedServicesSection {
    __typename
    title
    titleHighlight
    subtitle
    items {
      __typename
      slug
      title
      description
      image
      gradient
    }
  }
  finalCTA {
    __typename
    badge
    title
    titleHighlight
    subtitle
    chips
    whatsappMessage
    whatsappCardMessage
  }
}
    `;
export const FooterDocument = gql`
    query footer($relativePath: String!) {
  footer(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FooterParts
  }
}
    ${FooterPartsFragmentDoc}`;
export const FooterConnectionDocument = gql`
    query footerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FooterFilter) {
  footerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FooterParts
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const BlogPostsDocument = gql`
    query blogPosts($relativePath: String!) {
  blogPosts(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogPostsParts
  }
}
    ${BlogPostsPartsFragmentDoc}`;
export const BlogPostsConnectionDocument = gql`
    query blogPostsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogPostsFilter) {
  blogPostsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogPostsParts
      }
    }
  }
}
    ${BlogPostsPartsFragmentDoc}`;
export const BlogArchivesDocument = gql`
    query blogArchives($relativePath: String!) {
  blogArchives(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogArchivesParts
  }
}
    ${BlogArchivesPartsFragmentDoc}`;
export const BlogArchivesConnectionDocument = gql`
    query blogArchivesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogArchivesFilter) {
  blogArchivesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogArchivesParts
      }
    }
  }
}
    ${BlogArchivesPartsFragmentDoc}`;
export const PostContentDocument = gql`
    query postContent($relativePath: String!) {
  postContent(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostContentParts
  }
}
    ${PostContentPartsFragmentDoc}`;
export const PostContentConnectionDocument = gql`
    query postContentConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostContentFilter) {
  postContentConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostContentParts
      }
    }
  }
}
    ${PostContentPartsFragmentDoc}`;
export const TagContentDocument = gql`
    query tagContent($relativePath: String!) {
  tagContent(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TagContentParts
  }
}
    ${TagContentPartsFragmentDoc}`;
export const TagContentConnectionDocument = gql`
    query tagContentConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TagContentFilter) {
  tagContentConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TagContentParts
      }
    }
  }
}
    ${TagContentPartsFragmentDoc}`;
export const CalculatorDocument = gql`
    query calculator($relativePath: String!) {
  calculator(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CalculatorParts
  }
}
    ${CalculatorPartsFragmentDoc}`;
export const CalculatorConnectionDocument = gql`
    query calculatorConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CalculatorFilter) {
  calculatorConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CalculatorParts
      }
    }
  }
}
    ${CalculatorPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export const PrivacyPolicyDocument = gql`
    query privacyPolicy($relativePath: String!) {
  privacyPolicy(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PrivacyPolicyParts
  }
}
    ${PrivacyPolicyPartsFragmentDoc}`;
export const PrivacyPolicyConnectionDocument = gql`
    query privacyPolicyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PrivacyPolicyFilter) {
  privacyPolicyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PrivacyPolicyParts
      }
    }
  }
}
    ${PrivacyPolicyPartsFragmentDoc}`;
export const ServicesDocument = gql`
    query services($relativePath: String!) {
  services(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ServicesParts
  }
}
    ${ServicesPartsFragmentDoc}`;
export const ServicesConnectionDocument = gql`
    query servicesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ServicesFilter) {
  servicesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ServicesParts
      }
    }
  }
}
    ${ServicesPartsFragmentDoc}`;
export const BusinessSetupDocument = gql`
    query businessSetup($relativePath: String!) {
  businessSetup(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BusinessSetupParts
  }
}
    ${BusinessSetupPartsFragmentDoc}`;
export const BusinessSetupConnectionDocument = gql`
    query businessSetupConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BusinessSetupFilter) {
  businessSetupConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BusinessSetupParts
      }
    }
  }
}
    ${BusinessSetupPartsFragmentDoc}`;
export const ServiceAreasDocument = gql`
    query serviceAreas($relativePath: String!) {
  serviceAreas(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ServiceAreasParts
  }
}
    ${ServiceAreasPartsFragmentDoc}`;
export const ServiceAreasConnectionDocument = gql`
    query serviceAreasConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ServiceAreasFilter) {
  serviceAreasConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ServiceAreasParts
      }
    }
  }
}
    ${ServiceAreasPartsFragmentDoc}`;
export const PackagesDocument = gql`
    query packages($relativePath: String!) {
  packages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PackagesParts
  }
}
    ${PackagesPartsFragmentDoc}`;
export const PackagesConnectionDocument = gql`
    query packagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PackagesFilter) {
  packagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PackagesParts
      }
    }
  }
}
    ${PackagesPartsFragmentDoc}`;
export const PackagesDetailDocument = gql`
    query packagesDetail($relativePath: String!) {
  packagesDetail(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PackagesDetailParts
  }
}
    ${PackagesDetailPartsFragmentDoc}`;
export const PackagesDetailConnectionDocument = gql`
    query packagesDetailConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PackagesDetailFilter) {
  packagesDetailConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PackagesDetailParts
      }
    }
  }
}
    ${PackagesDetailPartsFragmentDoc}`;
export const MainlandDocument = gql`
    query mainland($relativePath: String!) {
  mainland(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...MainlandParts
  }
}
    ${MainlandPartsFragmentDoc}`;
export const MainlandConnectionDocument = gql`
    query mainlandConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MainlandFilter) {
  mainlandConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...MainlandParts
      }
    }
  }
}
    ${MainlandPartsFragmentDoc}`;
export const HomeHeroDocument = gql`
    query homeHero($relativePath: String!) {
  homeHero(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeHeroParts
  }
}
    ${HomeHeroPartsFragmentDoc}`;
export const HomeHeroConnectionDocument = gql`
    query homeHeroConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeHeroFilter) {
  homeHeroConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeHeroParts
      }
    }
  }
}
    ${HomeHeroPartsFragmentDoc}`;
export const HomeIntroDocument = gql`
    query homeIntro($relativePath: String!) {
  homeIntro(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeIntroParts
  }
}
    ${HomeIntroPartsFragmentDoc}`;
export const HomeIntroConnectionDocument = gql`
    query homeIntroConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeIntroFilter) {
  homeIntroConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeIntroParts
      }
    }
  }
}
    ${HomeIntroPartsFragmentDoc}`;
export const HomeServicesDocument = gql`
    query homeServices($relativePath: String!) {
  homeServices(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeServicesParts
  }
}
    ${HomeServicesPartsFragmentDoc}`;
export const HomeServicesConnectionDocument = gql`
    query homeServicesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeServicesFilter) {
  homeServicesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeServicesParts
      }
    }
  }
}
    ${HomeServicesPartsFragmentDoc}`;
export const HomeSpecializedServicesDocument = gql`
    query homeSpecializedServices($relativePath: String!) {
  homeSpecializedServices(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeSpecializedServicesParts
  }
}
    ${HomeSpecializedServicesPartsFragmentDoc}`;
export const HomeSpecializedServicesConnectionDocument = gql`
    query homeSpecializedServicesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeSpecializedServicesFilter) {
  homeSpecializedServicesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeSpecializedServicesParts
      }
    }
  }
}
    ${HomeSpecializedServicesPartsFragmentDoc}`;
export const HomePackagesDocument = gql`
    query homePackages($relativePath: String!) {
  homePackages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomePackagesParts
  }
}
    ${HomePackagesPartsFragmentDoc}`;
export const HomePackagesConnectionDocument = gql`
    query homePackagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomePackagesFilter) {
  homePackagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomePackagesParts
      }
    }
  }
}
    ${HomePackagesPartsFragmentDoc}`;
export const HomeProcessDocument = gql`
    query homeProcess($relativePath: String!) {
  homeProcess(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeProcessParts
  }
}
    ${HomeProcessPartsFragmentDoc}`;
export const HomeProcessConnectionDocument = gql`
    query homeProcessConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeProcessFilter) {
  homeProcessConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeProcessParts
      }
    }
  }
}
    ${HomeProcessPartsFragmentDoc}`;
export const HomeTrustBarDocument = gql`
    query homeTrustBar($relativePath: String!) {
  homeTrustBar(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeTrustBarParts
  }
}
    ${HomeTrustBarPartsFragmentDoc}`;
export const HomeTrustBarConnectionDocument = gql`
    query homeTrustBarConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeTrustBarFilter) {
  homeTrustBarConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeTrustBarParts
      }
    }
  }
}
    ${HomeTrustBarPartsFragmentDoc}`;
export const HomeComparisonDocument = gql`
    query homeComparison($relativePath: String!) {
  homeComparison(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeComparisonParts
  }
}
    ${HomeComparisonPartsFragmentDoc}`;
export const HomeComparisonConnectionDocument = gql`
    query homeComparisonConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeComparisonFilter) {
  homeComparisonConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeComparisonParts
      }
    }
  }
}
    ${HomeComparisonPartsFragmentDoc}`;
export const HomeContactDocument = gql`
    query homeContact($relativePath: String!) {
  homeContact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeContactParts
  }
}
    ${HomeContactPartsFragmentDoc}`;
export const HomeContactConnectionDocument = gql`
    query homeContactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeContactFilter) {
  homeContactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeContactParts
      }
    }
  }
}
    ${HomeContactPartsFragmentDoc}`;
export const HomeFaqDocument = gql`
    query homeFaq($relativePath: String!) {
  homeFaq(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeFaqParts
  }
}
    ${HomeFaqPartsFragmentDoc}`;
export const HomeFaqConnectionDocument = gql`
    query homeFaqConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFaqFilter) {
  homeFaqConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeFaqParts
      }
    }
  }
}
    ${HomeFaqPartsFragmentDoc}`;
export const AdgmDocument = gql`
    query adgm($relativePath: String!) {
  adgm(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AdgmParts
  }
}
    ${AdgmPartsFragmentDoc}`;
export const AdgmConnectionDocument = gql`
    query adgmConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AdgmFilter) {
  adgmConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AdgmParts
      }
    }
  }
}
    ${AdgmPartsFragmentDoc}`;
export const AjmanFreeZoneDocument = gql`
    query ajmanFreeZone($relativePath: String!) {
  ajmanFreeZone(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AjmanFreeZoneParts
  }
}
    ${AjmanFreeZonePartsFragmentDoc}`;
export const AjmanFreeZoneConnectionDocument = gql`
    query ajmanFreeZoneConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AjmanFreeZoneFilter) {
  ajmanFreeZoneConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AjmanFreeZoneParts
      }
    }
  }
}
    ${AjmanFreeZonePartsFragmentDoc}`;
export const BusinessActivitiesDocument = gql`
    query businessActivities($relativePath: String!) {
  businessActivities(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BusinessActivitiesParts
  }
}
    ${BusinessActivitiesPartsFragmentDoc}`;
export const BusinessActivitiesConnectionDocument = gql`
    query businessActivitiesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BusinessActivitiesFilter) {
  businessActivitiesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BusinessActivitiesParts
      }
    }
  }
}
    ${BusinessActivitiesPartsFragmentDoc}`;
export const D3Document = gql`
    query d3($relativePath: String!) {
  d3(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...D3Parts
  }
}
    ${D3PartsFragmentDoc}`;
export const D3ConnectionDocument = gql`
    query d3Connection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: D3Filter) {
  d3Connection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...D3Parts
      }
    }
  }
}
    ${D3PartsFragmentDoc}`;
export const DafzaDocument = gql`
    query dafza($relativePath: String!) {
  dafza(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DafzaParts
  }
}
    ${DafzaPartsFragmentDoc}`;
export const DafzaConnectionDocument = gql`
    query dafzaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DafzaFilter) {
  dafzaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DafzaParts
      }
    }
  }
}
    ${DafzaPartsFragmentDoc}`;
export const DhccDocument = gql`
    query dhcc($relativePath: String!) {
  dhcc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DhccParts
  }
}
    ${DhccPartsFragmentDoc}`;
export const DhccConnectionDocument = gql`
    query dhccConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DhccFilter) {
  dhccConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DhccParts
      }
    }
  }
}
    ${DhccPartsFragmentDoc}`;
export const DicDocument = gql`
    query dic($relativePath: String!) {
  dic(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DicParts
  }
}
    ${DicPartsFragmentDoc}`;
export const DicConnectionDocument = gql`
    query dicConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DicFilter) {
  dicConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DicParts
      }
    }
  }
}
    ${DicPartsFragmentDoc}`;
export const DmccDocument = gql`
    query dmcc($relativePath: String!) {
  dmcc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DmccParts
  }
}
    ${DmccPartsFragmentDoc}`;
export const DmccConnectionDocument = gql`
    query dmccConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DmccFilter) {
  dmccConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DmccParts
      }
    }
  }
}
    ${DmccPartsFragmentDoc}`;
export const DccDocument = gql`
    query dcc($relativePath: String!) {
  dcc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DccParts
  }
}
    ${DccPartsFragmentDoc}`;
export const DccConnectionDocument = gql`
    query dccConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DccFilter) {
  dccConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DccParts
      }
    }
  }
}
    ${DccPartsFragmentDoc}`;
export const DkpDocument = gql`
    query dkp($relativePath: String!) {
  dkp(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DkpParts
  }
}
    ${DkpPartsFragmentDoc}`;
export const DkpConnectionDocument = gql`
    query dkpConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DkpFilter) {
  dkpConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DkpParts
      }
    }
  }
}
    ${DkpPartsFragmentDoc}`;
export const DmcDocument = gql`
    query dmc($relativePath: String!) {
  dmc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DmcParts
  }
}
    ${DmcPartsFragmentDoc}`;
export const DmcConnectionDocument = gql`
    query dmcConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DmcFilter) {
  dmcConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DmcParts
      }
    }
  }
}
    ${DmcPartsFragmentDoc}`;
export const DsoDocument = gql`
    query dso($relativePath: String!) {
  dso(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DsoParts
  }
}
    ${DsoPartsFragmentDoc}`;
export const DsoConnectionDocument = gql`
    query dsoConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DsoFilter) {
  dsoConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DsoParts
      }
    }
  }
}
    ${DsoPartsFragmentDoc}`;
export const DubaiSouthDocument = gql`
    query dubaiSouth($relativePath: String!) {
  dubaiSouth(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DubaiSouthParts
  }
}
    ${DubaiSouthPartsFragmentDoc}`;
export const DubaiSouthConnectionDocument = gql`
    query dubaiSouthConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DubaiSouthFilter) {
  dubaiSouthConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DubaiSouthParts
      }
    }
  }
}
    ${DubaiSouthPartsFragmentDoc}`;
export const DuqeDocument = gql`
    query duqe($relativePath: String!) {
  duqe(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DuqeParts
  }
}
    ${DuqePartsFragmentDoc}`;
export const DuqeConnectionDocument = gql`
    query duqeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DuqeFilter) {
  duqeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DuqeParts
      }
    }
  }
}
    ${DuqePartsFragmentDoc}`;
export const DwtcDocument = gql`
    query dwtc($relativePath: String!) {
  dwtc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DwtcParts
  }
}
    ${DwtcPartsFragmentDoc}`;
export const DwtcConnectionDocument = gql`
    query dwtcConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DwtcFilter) {
  dwtcConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DwtcParts
      }
    }
  }
}
    ${DwtcPartsFragmentDoc}`;
export const FccDocument = gql`
    query fcc($relativePath: String!) {
  fcc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FccParts
  }
}
    ${FccPartsFragmentDoc}`;
export const FccConnectionDocument = gql`
    query fccConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FccFilter) {
  fccConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FccParts
      }
    }
  }
}
    ${FccPartsFragmentDoc}`;
export const HfzaDocument = gql`
    query hfza($relativePath: String!) {
  hfza(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HfzaParts
  }
}
    ${HfzaPartsFragmentDoc}`;
export const HfzaConnectionDocument = gql`
    query hfzaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HfzaFilter) {
  hfzaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HfzaParts
      }
    }
  }
}
    ${HfzaPartsFragmentDoc}`;
export const IfzaDocument = gql`
    query ifza($relativePath: String!) {
  ifza(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...IfzaParts
  }
}
    ${IfzaPartsFragmentDoc}`;
export const IfzaConnectionDocument = gql`
    query ifzaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: IfzaFilter) {
  ifzaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...IfzaParts
      }
    }
  }
}
    ${IfzaPartsFragmentDoc}`;
export const JafzaDocument = gql`
    query jafza($relativePath: String!) {
  jafza(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...JafzaParts
  }
}
    ${JafzaPartsFragmentDoc}`;
export const JafzaConnectionDocument = gql`
    query jafzaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: JafzaFilter) {
  jafzaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...JafzaParts
      }
    }
  }
}
    ${JafzaPartsFragmentDoc}`;
export const KizadDocument = gql`
    query kizad($relativePath: String!) {
  kizad(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...KizadParts
  }
}
    ${KizadPartsFragmentDoc}`;
export const KizadConnectionDocument = gql`
    query kizadConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: KizadFilter) {
  kizadConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...KizadParts
      }
    }
  }
}
    ${KizadPartsFragmentDoc}`;
export const MeydanDocument = gql`
    query meydan($relativePath: String!) {
  meydan(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...MeydanParts
  }
}
    ${MeydanPartsFragmentDoc}`;
export const MeydanConnectionDocument = gql`
    query meydanConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MeydanFilter) {
  meydanConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...MeydanParts
      }
    }
  }
}
    ${MeydanPartsFragmentDoc}`;
export const RakezDocument = gql`
    query rakez($relativePath: String!) {
  rakez(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RakezParts
  }
}
    ${RakezPartsFragmentDoc}`;
export const RakezConnectionDocument = gql`
    query rakezConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RakezFilter) {
  rakezConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RakezParts
      }
    }
  }
}
    ${RakezPartsFragmentDoc}`;
export const SaifDocument = gql`
    query saif($relativePath: String!) {
  saif(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SaifParts
  }
}
    ${SaifPartsFragmentDoc}`;
export const SaifConnectionDocument = gql`
    query saifConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SaifFilter) {
  saifConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SaifParts
      }
    }
  }
}
    ${SaifPartsFragmentDoc}`;
export const ShamsDocument = gql`
    query shams($relativePath: String!) {
  shams(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ShamsParts
  }
}
    ${ShamsPartsFragmentDoc}`;
export const ShamsConnectionDocument = gql`
    query shamsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ShamsFilter) {
  shamsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ShamsParts
      }
    }
  }
}
    ${ShamsPartsFragmentDoc}`;
export const UaqDocument = gql`
    query uaq($relativePath: String!) {
  uaq(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UaqParts
  }
}
    ${UaqPartsFragmentDoc}`;
export const UaqConnectionDocument = gql`
    query uaqConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UaqFilter) {
  uaqConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UaqParts
      }
    }
  }
}
    ${UaqPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    footer(variables, options) {
      return requester(FooterDocument, variables, options);
    },
    footerConnection(variables, options) {
      return requester(FooterConnectionDocument, variables, options);
    },
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    blogPosts(variables, options) {
      return requester(BlogPostsDocument, variables, options);
    },
    blogPostsConnection(variables, options) {
      return requester(BlogPostsConnectionDocument, variables, options);
    },
    blogArchives(variables, options) {
      return requester(BlogArchivesDocument, variables, options);
    },
    blogArchivesConnection(variables, options) {
      return requester(BlogArchivesConnectionDocument, variables, options);
    },
    postContent(variables, options) {
      return requester(PostContentDocument, variables, options);
    },
    postContentConnection(variables, options) {
      return requester(PostContentConnectionDocument, variables, options);
    },
    tagContent(variables, options) {
      return requester(TagContentDocument, variables, options);
    },
    tagContentConnection(variables, options) {
      return requester(TagContentConnectionDocument, variables, options);
    },
    calculator(variables, options) {
      return requester(CalculatorDocument, variables, options);
    },
    calculatorConnection(variables, options) {
      return requester(CalculatorConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    },
    privacyPolicy(variables, options) {
      return requester(PrivacyPolicyDocument, variables, options);
    },
    privacyPolicyConnection(variables, options) {
      return requester(PrivacyPolicyConnectionDocument, variables, options);
    },
    services(variables, options) {
      return requester(ServicesDocument, variables, options);
    },
    servicesConnection(variables, options) {
      return requester(ServicesConnectionDocument, variables, options);
    },
    businessSetup(variables, options) {
      return requester(BusinessSetupDocument, variables, options);
    },
    businessSetupConnection(variables, options) {
      return requester(BusinessSetupConnectionDocument, variables, options);
    },
    serviceAreas(variables, options) {
      return requester(ServiceAreasDocument, variables, options);
    },
    serviceAreasConnection(variables, options) {
      return requester(ServiceAreasConnectionDocument, variables, options);
    },
    packages(variables, options) {
      return requester(PackagesDocument, variables, options);
    },
    packagesConnection(variables, options) {
      return requester(PackagesConnectionDocument, variables, options);
    },
    packagesDetail(variables, options) {
      return requester(PackagesDetailDocument, variables, options);
    },
    packagesDetailConnection(variables, options) {
      return requester(PackagesDetailConnectionDocument, variables, options);
    },
    mainland(variables, options) {
      return requester(MainlandDocument, variables, options);
    },
    mainlandConnection(variables, options) {
      return requester(MainlandConnectionDocument, variables, options);
    },
    homeHero(variables, options) {
      return requester(HomeHeroDocument, variables, options);
    },
    homeHeroConnection(variables, options) {
      return requester(HomeHeroConnectionDocument, variables, options);
    },
    homeIntro(variables, options) {
      return requester(HomeIntroDocument, variables, options);
    },
    homeIntroConnection(variables, options) {
      return requester(HomeIntroConnectionDocument, variables, options);
    },
    homeServices(variables, options) {
      return requester(HomeServicesDocument, variables, options);
    },
    homeServicesConnection(variables, options) {
      return requester(HomeServicesConnectionDocument, variables, options);
    },
    homeSpecializedServices(variables, options) {
      return requester(HomeSpecializedServicesDocument, variables, options);
    },
    homeSpecializedServicesConnection(variables, options) {
      return requester(HomeSpecializedServicesConnectionDocument, variables, options);
    },
    homePackages(variables, options) {
      return requester(HomePackagesDocument, variables, options);
    },
    homePackagesConnection(variables, options) {
      return requester(HomePackagesConnectionDocument, variables, options);
    },
    homeProcess(variables, options) {
      return requester(HomeProcessDocument, variables, options);
    },
    homeProcessConnection(variables, options) {
      return requester(HomeProcessConnectionDocument, variables, options);
    },
    homeTrustBar(variables, options) {
      return requester(HomeTrustBarDocument, variables, options);
    },
    homeTrustBarConnection(variables, options) {
      return requester(HomeTrustBarConnectionDocument, variables, options);
    },
    homeComparison(variables, options) {
      return requester(HomeComparisonDocument, variables, options);
    },
    homeComparisonConnection(variables, options) {
      return requester(HomeComparisonConnectionDocument, variables, options);
    },
    homeContact(variables, options) {
      return requester(HomeContactDocument, variables, options);
    },
    homeContactConnection(variables, options) {
      return requester(HomeContactConnectionDocument, variables, options);
    },
    homeFaq(variables, options) {
      return requester(HomeFaqDocument, variables, options);
    },
    homeFaqConnection(variables, options) {
      return requester(HomeFaqConnectionDocument, variables, options);
    },
    adgm(variables, options) {
      return requester(AdgmDocument, variables, options);
    },
    adgmConnection(variables, options) {
      return requester(AdgmConnectionDocument, variables, options);
    },
    ajmanFreeZone(variables, options) {
      return requester(AjmanFreeZoneDocument, variables, options);
    },
    ajmanFreeZoneConnection(variables, options) {
      return requester(AjmanFreeZoneConnectionDocument, variables, options);
    },
    businessActivities(variables, options) {
      return requester(BusinessActivitiesDocument, variables, options);
    },
    businessActivitiesConnection(variables, options) {
      return requester(BusinessActivitiesConnectionDocument, variables, options);
    },
    d3(variables, options) {
      return requester(D3Document, variables, options);
    },
    d3Connection(variables, options) {
      return requester(D3ConnectionDocument, variables, options);
    },
    dafza(variables, options) {
      return requester(DafzaDocument, variables, options);
    },
    dafzaConnection(variables, options) {
      return requester(DafzaConnectionDocument, variables, options);
    },
    dhcc(variables, options) {
      return requester(DhccDocument, variables, options);
    },
    dhccConnection(variables, options) {
      return requester(DhccConnectionDocument, variables, options);
    },
    dic(variables, options) {
      return requester(DicDocument, variables, options);
    },
    dicConnection(variables, options) {
      return requester(DicConnectionDocument, variables, options);
    },
    dmcc(variables, options) {
      return requester(DmccDocument, variables, options);
    },
    dmccConnection(variables, options) {
      return requester(DmccConnectionDocument, variables, options);
    },
    dcc(variables, options) {
      return requester(DccDocument, variables, options);
    },
    dccConnection(variables, options) {
      return requester(DccConnectionDocument, variables, options);
    },
    dkp(variables, options) {
      return requester(DkpDocument, variables, options);
    },
    dkpConnection(variables, options) {
      return requester(DkpConnectionDocument, variables, options);
    },
    dmc(variables, options) {
      return requester(DmcDocument, variables, options);
    },
    dmcConnection(variables, options) {
      return requester(DmcConnectionDocument, variables, options);
    },
    dso(variables, options) {
      return requester(DsoDocument, variables, options);
    },
    dsoConnection(variables, options) {
      return requester(DsoConnectionDocument, variables, options);
    },
    dubaiSouth(variables, options) {
      return requester(DubaiSouthDocument, variables, options);
    },
    dubaiSouthConnection(variables, options) {
      return requester(DubaiSouthConnectionDocument, variables, options);
    },
    duqe(variables, options) {
      return requester(DuqeDocument, variables, options);
    },
    duqeConnection(variables, options) {
      return requester(DuqeConnectionDocument, variables, options);
    },
    dwtc(variables, options) {
      return requester(DwtcDocument, variables, options);
    },
    dwtcConnection(variables, options) {
      return requester(DwtcConnectionDocument, variables, options);
    },
    fcc(variables, options) {
      return requester(FccDocument, variables, options);
    },
    fccConnection(variables, options) {
      return requester(FccConnectionDocument, variables, options);
    },
    hfza(variables, options) {
      return requester(HfzaDocument, variables, options);
    },
    hfzaConnection(variables, options) {
      return requester(HfzaConnectionDocument, variables, options);
    },
    ifza(variables, options) {
      return requester(IfzaDocument, variables, options);
    },
    ifzaConnection(variables, options) {
      return requester(IfzaConnectionDocument, variables, options);
    },
    jafza(variables, options) {
      return requester(JafzaDocument, variables, options);
    },
    jafzaConnection(variables, options) {
      return requester(JafzaConnectionDocument, variables, options);
    },
    kizad(variables, options) {
      return requester(KizadDocument, variables, options);
    },
    kizadConnection(variables, options) {
      return requester(KizadConnectionDocument, variables, options);
    },
    meydan(variables, options) {
      return requester(MeydanDocument, variables, options);
    },
    meydanConnection(variables, options) {
      return requester(MeydanConnectionDocument, variables, options);
    },
    rakez(variables, options) {
      return requester(RakezDocument, variables, options);
    },
    rakezConnection(variables, options) {
      return requester(RakezConnectionDocument, variables, options);
    },
    saif(variables, options) {
      return requester(SaifDocument, variables, options);
    },
    saifConnection(variables, options) {
      return requester(SaifConnectionDocument, variables, options);
    },
    shams(variables, options) {
      return requester(ShamsDocument, variables, options);
    },
    shamsConnection(variables, options) {
      return requester(ShamsConnectionDocument, variables, options);
    },
    uaq(variables, options) {
      return requester(UaqDocument, variables, options);
    },
    uaqConnection(variables, options) {
      return requester(UaqConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
