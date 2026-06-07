/**
 * Bilingual seed script — creates English + Arabic content in Sanity.
 * Run: bun run seed   (from the studio/ directory)
 *
 * Requires SANITY_STUDIO_WRITE_TOKEN in studio/.env
 * Get one: sanity.io/manage → API → Tokens → Add API token (Editor)
 */

import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const token     = process.env.SANITY_STUDIO_WRITE_TOKEN

if (!projectId || projectId === 'your-project-id') {
  console.error('❌  Set SANITY_STUDIO_PROJECT_ID in studio/.env first.')
  process.exit(1)
}
if (!token) {
  console.error('❌  Set SANITY_STUDIO_WRITE_TOKEN in studio/.env first.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset:    process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn:     false,
})

// ─── Site Settings — English ──────────────────────────────────────────────────

const siteSettingsEn = {
  _id: 'siteSettings-en', _type: 'siteSettings', language: 'en',
  siteName:    'Parcel',
  tagline:     "Bahrain's Most Advanced Delivery Network",
  description: "Parcel — Bahrain's most intelligent delivery network. Instant, same-day, and next-day delivery with real-time tracking and AI-powered routing across the GCC.",
  hero: {
    eyebrow:        'Live across Bahrain & GCC',
    titleLine1:     'PARCEL', titleLine2: 'MOVES.', titleLine3: 'FASTER.',
    description:    "Bahrain's most intelligent delivery network. Real-time tracking, AI-powered routing, and three tiers of speed — engineered for businesses that can't afford to wait.",
    ctaPrimaryLabel: 'Start Shipping →', ctaPrimaryHref: '/contact',
    ctaGhostLabel:   'Track a Package',  ctaGhostHref:   '/tracking',
    backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=80',
  },
  stats: [
    { value: 6,       suffix: '+', label: 'Years serving Bahrain', compact: false, decimal: false },
    { value: 2000000, suffix: '+', label: 'Orders delivered',       compact: true,  decimal: false },
    { value: 500,     suffix: '+', label: 'Active businesses',      compact: false, decimal: false },
    { value: 12,      suffix: '+', label: 'Cities covered',         compact: false, decimal: false },
    { value: 98.7,    suffix: '%', label: 'On-time delivery',       compact: false, decimal: true  },
  ],
  tickerItems: [
    '⚡ 347 packages in transit right now',
    '✦ 98.7% on-time delivery rate',
    '📍 Serving 500+ businesses across the GCC',
    '🇧🇭 Based in Manama, Bahrain since 2018',
    '🔴 Live tracking on every single order',
    '✦ 2,000,000+ deliveries completed',
  ],
  email:   'hello@parcel.bh',
  phone:   '+973 1700 0000',
  address: 'Seef District, Manama, Kingdom of Bahrain',
  hours:   'Sunday – Thursday, 8 AM – 6 PM (AST, UTC+3)',

  techSection: {
    tag:     'Powered by Technology',
    title:   'TRACK EVERY',
    titleEm: 'SIGNAL.',
    sub:     'From the moment a package is collected to the second it lands at the door — every movement is tracked, analyzed, and optimized in real time. Merchants see everything. Recipients are always informed.',
    features: [
      { icon: '📍', title: 'Live GPS Tracking',       desc: 'Every courier tracked every 30 seconds' },
      { icon: '🔔', title: 'Proactive Notifications', desc: 'SMS + email on every status change' },
      { icon: '📊', title: 'Merchant Dashboard',      desc: 'Full analytics on deliveries, returns, SLAs' },
      { icon: '🔗', title: 'E-Commerce API',          desc: 'Native Shopify, Salla, WooCommerce plugins' },
      { icon: '🧠', title: 'AI Route Optimization',   desc: 'Dynamic re-routing around traffic in real time' },
      { icon: '📷', title: 'Proof of Delivery',       desc: 'Photo + GPS coordinate + timestamp on every drop' },
    ],
    mockupLabelLive: 'Updating live',
    mockupLabelEta:  'Estimated Arrival',
    mockupTimeline: [
      { label: 'Picked up' },
      { label: 'Sorting facility' },
      { label: 'In transit' },
      { label: 'Out for delivery' },
      { label: 'Delivered' },
    ],
  },

  howItWorks: {
    tag:     'How It Works',
    title:   'FROM ORDER',
    titleEm: 'TO DOOR.',
    sub:     'Four steps. Fully automated. Completely transparent.',
    steps: [
      { number: '01', icon: '📲', title: 'Place Your Order',      desc: 'Book via our app, website, or API integration. Set pickup address, drop-off, and choose your delivery speed.' },
      { number: '02', icon: '⚡', title: 'Instant Dispatch',      desc: 'Our AI engine matches your order to the nearest available courier and auto-dispatches within minutes.' },
      { number: '03', icon: '📍', title: 'Real-Time Tracking',    desc: "Watch your package move on a live map. Every 30 seconds, your courier's position updates in real time." },
      { number: '04', icon: '✅', title: 'Proof of Delivery',     desc: "A photo, GPS stamp, and timestamp are captured at every handoff — logged and accessible in your dashboard." },
    ],
  },

  whyUs: {
    tag:     'Why Parcel',
    title:   'NOT JUST',
    titleEm: 'DELIVERY.',
    sub:     'Six reasons why 500+ businesses trust Parcel to be the backbone of their operations.',
    reasons: [
      { icon: '🏆', title: 'Local Expertise',           desc: '6 years operating exclusively in Bahrain. We know every district, every traffic pattern, every business rhythm in the Kingdom.' },
      { icon: '⚡', title: 'Three Speeds, One Platform', desc: 'Instant, same-day, or next-day — choose per order. Switch tiers at any time with no contract changes.' },
      { icon: '🔴', title: 'Live Intelligence',          desc: 'AI-powered dispatch, real-time re-routing, and 30-second GPS updates. Not promises — infrastructure.' },
      { icon: '🔗', title: 'API-First Design',           desc: 'Built for developers. Our REST API integrates with any e-commerce platform in hours, not weeks.' },
      { icon: '📊', title: 'Data You Can Act On',        desc: 'Every delivery generates insights. SLA trends, peak times, zone performance — all in your dashboard.' },
      { icon: '🤝', title: 'Dedicated Account Team',     desc: 'Enterprise clients get a named account manager, priority SLAs, and direct WhatsApp support lines.' },
    ],
  },

  appSection: {
    tag:            'Available Everywhere',
    title:          'TRACK ON',
    titleEm:        'ANY DEVICE.',
    sub:            'The Parcel tracking portal works seamlessly on web, mobile, and tablet. Share live tracking links with your customers — no app download required.',
    appStoreLbl:    'Download on the App Store',
    appStoreHref:   '#',
    googlePlayLbl:  'Get it on Google Play',
    googlePlayHref: '#',
  },

  ctaSection: {
    tag:          'Ready to Ship?',
    title:        'START MOVING',
    titleEm:      'TODAY.',
    sub:          "Join 500+ businesses across Bahrain and the GCC that trust Parcel to deliver their promises. Get a custom quote in under 24 hours.",
    primaryLabel: 'Get a Free Quote →',
    primaryHref:  '/contact',
    ghostLabel:   'Track a Package',
    ghostHref:    '/tracking',
    footnote:     'No setup fees · No long-term contracts · Start same day',
  },

  footer: {
    tagline:         "Bahrain's most intelligent delivery network. Moving faster, smarter, and more beautifully than anyone else in the GCC.",
    operatingHours:  'Operating — Sun–Thu, AST (UTC+3)',
    copyrightSuffix: 'Parcel Logistics W.L.L. — Seef District, Manama, Kingdom of Bahrain',
    builtFor:        'Built for speed.',
  },

  services: [
    {
      id: 'instant', tier: 'INSTANT', badge: '⚡ FASTEST', accentColor: '#ff4d4d',
      headline: 'Within Hours, City-Wide.',
      desc: "When urgency is non-negotiable, Instant delivery is your answer. A courier is matched to your order within minutes and dispatched immediately. Built for medical supply chains, luxury retail, and any business where every hour counts.",
      features: ['Courier matched in under 5 minutes', 'GPS updated every 30 seconds', 'Live ETA with real-time recalculation', 'Contactless or signed delivery', 'Immediate proof of delivery (photo + GPS)', 'Priority routing over all other tiers'],
      coverage: 'Kingdom of Bahrain', window: 'Within 2–4 hours',
    },
    {
      id: 'sameday', tier: 'SAME DAY', badge: '★ MOST POPULAR', accentColor: '#fed12c',
      headline: 'Order Now. In Hands by Evening.',
      desc: "Parcel's most popular tier. Smart multi-stop routing means multiple orders can be batched efficiently — giving you competitive pricing without compromising on speed. Most deliveries complete before close of business.",
      features: ['Smart batched route optimization', 'Automated dispatch via Parcel AI', 'Proactive SMS + email at every stage', 'Contactless or signed delivery', 'Full digital proof of delivery', 'Merchant analytics dashboard access'],
      coverage: 'Kingdom of Bahrain', window: 'Same business day (order before 2 PM)',
    },
    {
      id: 'nextday', tier: 'NEXT DAY', badge: '◈ BEST VALUE', accentColor: '#14507a',
      headline: 'Scheduled Precision, Nationwide.',
      desc: "For planned deliveries and high-volume businesses, Next Day gives you the best rates with complete reliability. Flexible pickup windows, consolidated warehousing, and coverage across the entire GCC make this the backbone for e-commerce operations.",
      features: ['Flexible morning, afternoon, or evening pickup', 'Warehousing & consolidation available', 'Volume pricing for 50+ orders/day', 'API integration for auto-booking', 'Full GCC coverage (BH, SA, UAE, KW, QA, OM)', 'Monthly consolidated invoicing'],
      coverage: 'Bahrain + GCC (Saudi Arabia, UAE, Kuwait, Qatar, Oman)', window: 'Next business day',
    },
  ],

  servicesFaqs: [
    { question: 'What areas do you cover in Bahrain?', answer: 'Parcel covers all governorates of Bahrain including Capital, Muharraq, Northern, Southern, and Central. We have dense coverage in Manama, Seef, Juffair, Riffa, Hamad Town, and Sitra.' },
    { question: 'How do I integrate Parcel with my Shopify store?', answer: 'We offer a one-click Shopify plugin. Install it from the Shopify App Store, connect your Parcel account, and orders will automatically sync for dispatch. Setup takes under 10 minutes.' },
    { question: 'What happens if a delivery fails?', answer: 'If a delivery fails (customer not home, wrong address, etc.), our system automatically attempts re-delivery and notifies you. You can also set custom instructions per order in your dashboard.' },
    { question: 'Do you offer cash on delivery (COD)?', answer: 'Yes. COD is available on all delivery tiers. Cash is collected by the courier and transferred to your account per agreed settlement schedule (typically T+1 for active accounts).' },
    { question: 'Is there a minimum order volume?', answer: 'No minimum order volume. Whether you have 1 delivery or 1,000 per day, Parcel handles it. Volume discounts kick in at 50+ orders/day on Next Day tier.' },
    { question: 'What is your SLA for Same Day deliveries?', answer: 'Our SLA for Same Day is delivery by 9 PM for orders placed before 2 PM. We currently achieve 98.7% on-time rate. Enterprise clients can negotiate custom SLA terms.' },
  ],

  ecommerceIntegrations: [
    { icon: '🛍️', name: 'Shopify',     desc: 'One-click plugin. Auto-sync all orders with live tracking pushed to customers.' },
    { icon: '🏪', name: 'Salla',        desc: 'Native integration built for GCC merchants. Fully automated dispatch.' },
    { icon: '🌐', name: 'WooCommerce', desc: 'WordPress plugin with full feature support — install in under 5 minutes.' },
    { icon: '⚡', name: 'Zid',          desc: 'Direct API connection for Zid stores with automatic order syncing.' },
    { icon: '🔗', name: 'REST API',     desc: 'Build any custom integration with our fully documented REST API.' },
    { icon: '📦', name: 'OpenCart',     desc: 'Full inventory management support with real-time tracking and dispatch.' },
  ],

  ecommerceApiFeatures: [
    'REST API with JSON responses',
    'Webhooks for real-time events',
    'Sandbox environment for testing',
    'SDKs for Node.js, Python, PHP',
    'Rate limit: 1,000 req/min on standard plans',
  ],

  ecommerceFaqs: [
    { question: 'How long does API integration take?', answer: "Most integrations are live within a day. Our Shopify plugin installs in under 10 minutes. Custom API integrations typically take 1–3 hours with our developer docs." },
    { question: 'Do you offer warehousing in Bahrain?', answer: "Yes. We operate a fulfillment center in the Hidd Industrial Area. You can store inventory with us, and we'll pick, pack, and dispatch orders automatically." },
    { question: 'How are returns handled?', answer: "Reverse logistics is fully supported. Customers can request a return via your store, and we'll collect the item and bring it back to you or to our fulfillment center." },
    { question: 'What payment methods do you support for COD?', answer: 'Cash on delivery (Bahraini Dinar) is supported. COD amounts are transferred to your account on a T+1 settlement schedule for verified merchant accounts.' },
  ],

  trackingFeatures: [
    { icon: '📱', title: 'Share Live Link',   desc: 'Send customers a live tracking link. No account needed — they see real-time position on a map.' },
    { icon: '🔔', title: 'Automatic Alerts',  desc: 'SMS and email notifications at every stage: picked up, in transit, out for delivery, delivered.' },
    { icon: '📍', title: '30-Second Updates', desc: 'Courier GPS position refreshes every 30 seconds. Your ETA recalculates dynamically with traffic.' },
    { icon: '📷', title: 'Proof of Delivery', desc: 'Photo, GPS coordinates, and timestamp captured at the moment of handoff. Stored in your dashboard.' },
  ],

  coverageCountries: [
    { flag: '🇧🇭', name: 'Bahrain' },
    { flag: '🇸🇦', name: 'Saudi Arabia' },
    { flag: '🇦🇪', name: 'UAE' },
    { flag: '🇰🇼', name: 'Kuwait' },
    { flag: '🇶🇦', name: 'Qatar' },
    { flag: '🇴🇲', name: 'Oman' },
  ],
  servicesSection: {
    tag:     'Choose Your Speed',
    title:   'THREE TIERS.',
    titleEm: 'ONE STANDARD.',
    sub:     'Instant urgency or next-day planning — every delivery runs on the same real-time intelligence engine, built and operated from Manama.',
  },
  ecommerceSection: {
    tag:      'E-Commerce Fulfillment',
    title:    'PLUG IN.',
    titleEm:  'SHIP OUT.',
    sub:      'Parcel integrates directly with your store. Orders flow in automatically, couriers are dispatched instantly, and your customers get real-time updates without you lifting a finger.',
    ctaLabel: 'Explore E-Commerce →',
    ctaHref:  '/ecommerce',
    features: [
      { icon: '🔗', title: 'One-click integrations', desc: 'Shopify, Salla, WooCommerce, Zid, and REST API' },
      { icon: '⚡', title: 'Automatic dispatch',     desc: 'Orders dispatched within minutes of placement' },
      { icon: '📦', title: 'Warehousing & returns',  desc: 'Bahrain-based fulfillment center for storage & reverse logistics' },
      { icon: '📈', title: 'Analytics dashboard',    desc: 'Real-time order, SLA, and performance data for merchants' },
    ],
  },
  clientsSection: {
    tag:               'Trusted by 500+ Businesses',
    title:             'WHO SHIPS',
    titleEm:           'WITH PARCEL.',
    testimonialsTitle: 'What our clients say',
  },
  trackingWidget: {
    placeholder: 'Enter your order ID (e.g. PCL-00482)',
    trackBtn:    'Track →',
    notFoundMsg: 'Order not found. Try "PCL-00482" for a demo.',
  },
}

// ─── Site Settings — Arabic ───────────────────────────────────────────────────

const siteSettingsAr = {
  _id: 'siteSettings-ar', _type: 'siteSettings', language: 'ar',
  siteName:    'بارسل',
  tagline:     'شبكة التوصيل الأكثر تطوراً في البحرين',
  description: 'بارسل — شبكة التوصيل الأكثر ذكاءً في البحرين. توصيل فوري ونفس اليوم واليوم التالي مع تتبع فوري وتوجيه بالذكاء الاصطناعي في جميع أنحاء الخليج.',
  hero: {
    eyebrow:        'خدمات التوصيل في البحرين ودول الخليج',
    titleLine1:     'بارسل', titleLine2: 'يصل.', titleLine3: 'بسرعة.',
    description:    'شبكة التوصيل الأكثر ذكاءً في البحرين. تتبع فوري، توجيه بالذكاء الاصطناعي، وثلاثة مستويات للسرعة — مصممة للأعمال التي لا تتحمل التأخير.',
    ctaPrimaryLabel: 'ابدأ الشحن', ctaPrimaryHref: '/ar/contact',
    ctaGhostLabel:   'تتبع طلبك',  ctaGhostHref:   '/ar/tracking',
    backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=80',
  },
  stats: [
    { value: 6,       suffix: '+', label: 'سنوات في خدمة البحرين',   compact: false, decimal: false },
    { value: 2000000, suffix: '+', label: 'طلب تم توصيله',            compact: true,  decimal: false },
    { value: 500,     suffix: '+', label: 'شركة نشطة',                compact: false, decimal: false },
    { value: 12,      suffix: '+', label: 'مدينة مشمولة',             compact: false, decimal: false },
    { value: 98.7,    suffix: '%', label: 'نسبة الالتزام بالوقت',     compact: false, decimal: true  },
  ],
  tickerItems: [
    '⚡ 347 طردًا في الطريق الآن',
    '✦ 98.7% نسبة الالتزام بالوقت',
    '📍 نخدم أكثر من 500 شركة في الخليج',
    '🇧🇭 مقرنا في المنامة، البحرين منذ 2018',
    '🔴 تتبع مباشر لكل طلب',
    '✦ أكثر من 2,000,000 توصيل مكتمل',
  ],
  email:   'hello@parcel.bh',
  phone:   '+973 1700 0000',
  address: 'حي السيف، المنامة، مملكة البحرين',
  hours:   'الأحد – الخميس، 8 صباحاً – 6 مساءً',

  techSection: {
    tag:     'مدعوم بالتكنولوجيا',
    title:   'تتبّع كل',
    titleEm: 'إشارة.',
    sub:     'من لحظة استلام الطرد حتى وصوله إلى الباب — كل حركة تُتابَع وتُحلَّل وتُحسَّن في الوقت الفعلي. التجار يرون كل شيء. المستلمون دائمًا على علم.',
    features: [
      { icon: '📍', title: 'تتبع GPS مباشر',         desc: 'كل ساعٍ يُتابَع كل 30 ثانية' },
      { icon: '🔔', title: 'إشعارات استباقية',         desc: 'رسائل SMS + بريد إلكتروني عند كل تغيير في الحالة' },
      { icon: '📊', title: 'لوحة التاجر',              desc: 'تحليلات كاملة للتوصيلات والإرجاعات ومستويات الخدمة' },
      { icon: '🔗', title: 'API التجارة الإلكترونية', desc: 'إضافات Shopify وSalla وWooCommerce الأصلية' },
      { icon: '🧠', title: 'تحسين المسار بالذكاء الاصطناعي', desc: 'إعادة توجيه ديناميكي حول الازدحام في الوقت الفعلي' },
      { icon: '📷', title: 'إثبات التسليم',            desc: 'صورة + إحداثيات GPS + طابع زمني على كل توصيل' },
    ],
    mockupLabelLive: 'تحديث مباشر',
    mockupLabelEta:  'وقت الوصول المتوقع',
    mockupTimeline: [
      { label: 'تم الاستلام' },
      { label: 'مرفق الفرز' },
      { label: 'في الطريق' },
      { label: 'خرج للتسليم' },
      { label: 'تم التسليم' },
    ],
  },

  howItWorks: {
    tag:     'كيف يعمل',
    title:   'من الطلب',
    titleEm: 'إلى الباب.',
    sub:     'أربع خطوات. مؤتمتة بالكامل. شفافة تمامًا.',
    steps: [
      { number: '01', icon: '📲', title: 'ضع طلبك',          desc: 'احجز عبر تطبيقنا أو موقعنا أو تكامل API. حدد عنوان الاستلام والتسليم واختر سرعة التوصيل.' },
      { number: '02', icon: '⚡', title: 'إرسال فوري',         desc: 'يطابق محرك الذكاء الاصطناعي لدينا طلبك مع أقرب ساعٍ متاح ويُرسله تلقائياً في غضون دقائق.' },
      { number: '03', icon: '📍', title: 'تتبع في الوقت الفعلي', desc: 'شاهد طردك يتحرك على خريطة مباشرة. كل 30 ثانية، يُحدَّث موقع ساعيك في الوقت الفعلي.' },
      { number: '04', icon: '✅', title: 'إثبات التسليم',      desc: 'يُلتقط صورة وطابع GPS وطابع زمني عند كل تسليم — مسجّل ومتاح في لوحة التحكم الخاصة بك.' },
    ],
  },

  whyUs: {
    tag:     'لماذا بارسل',
    title:   'أكثر من',
    titleEm: 'مجرد توصيل.',
    sub:     'ستة أسباب تجعل أكثر من 500 شركة تثق في بارسل ليكون عمود فقرات عملياتها.',
    reasons: [
      { icon: '🏆', title: 'خبرة محلية',           desc: '6 سنوات من العمل الحصري في البحرين. نعرف كل حي وكل نمط حركة مرور وكل إيقاع أعمال في المملكة.' },
      { icon: '⚡', title: 'ثلاث سرعات، منصة واحدة', desc: 'فوري أو نفس اليوم أو اليوم التالي — اختر لكل طلب. غيّر المستويات في أي وقت دون تغيير العقد.' },
      { icon: '🔴', title: 'ذكاء مباشر',             desc: 'إرسال بالذكاء الاصطناعي، إعادة توجيه فورية، وتحديثات GPS كل 30 ثانية. ليست وعوداً — بنية تحتية.' },
      { icon: '🔗', title: 'تصميم أولاً بـ API',     desc: 'مبني للمطورين. API REST لدينا يتكامل مع أي منصة تجارة إلكترونية في ساعات لا أسابيع.' },
      { icon: '📊', title: 'بيانات قابلة للتنفيذ',   desc: 'كل توصيل يولّد رؤى. اتجاهات مستوى الخدمة وأوقات الذروة وأداء المناطق — كل ذلك في لوحة التحكم.' },
      { icon: '🤝', title: 'فريق حساب مخصص',         desc: 'يحصل عملاء المؤسسات على مدير حساب مسمى وأولوية في مستويات الخدمة وخطوط دعم مباشرة عبر واتساب.' },
    ],
  },

  appSection: {
    tag:            'متاح في كل مكان',
    title:          'تتبّع من',
    titleEm:        'أي جهاز.',
    sub:            'بوابة تتبع بارسل تعمل بسلاسة على الويب والهاتف والجهاز اللوحي. شارك روابط التتبع المباشر مع عملائك — لا حاجة لتنزيل تطبيق.',
    appStoreLbl:    'حمّل من App Store',
    appStoreHref:   '#',
    googlePlayLbl:  'احصل عليه من Google Play',
    googlePlayHref: '#',
  },

  ctaSection: {
    tag:          'مستعد للشحن؟',
    title:        'ابدأ الحركة',
    titleEm:      'اليوم.',
    sub:          'انضم إلى أكثر من 500 شركة في البحرين والخليج تثق في بارسل لتوصيل وعودها. احصل على عرض سعر مخصص في أقل من 24 ساعة.',
    primaryLabel: 'احصل على عرض سعر مجاني ←',
    primaryHref:  '/ar/contact',
    ghostLabel:   'تتبع طلبك',
    ghostHref:    '/ar/tracking',
    footnote:     'بدون رسوم إعداد · بدون عقود طويلة الأمد · ابدأ في نفس اليوم',
  },

  footer: {
    tagline:         'شبكة التوصيل الأكثر ذكاءً في البحرين. نتحرك بشكل أسرع وأذكى وأجمل من أي شركة أخرى في الخليج.',
    operatingHours:  'نعمل — الأحد–الخميس، توقيت السعودية (UTC+3)',
    copyrightSuffix: 'بارسل للوجستيات ذ.م.م — حي السيف، المنامة، مملكة البحرين',
    builtFor:        'مبني للسرعة.',
  },

  services: [
    {
      id: 'instant', tier: 'فوري', badge: '⚡ فوري', accentColor: '#ff4d4d',
      headline: 'في غضون ساعات، في جميع أنحاء المدينة.',
      desc: 'عندما تكون العجلة أمراً لا يُتنازل عنه، التوصيل الفوري هو الإجابة. يُطابَق ساعٍ بطلبك في غضون دقائق ويُرسَل فوراً. مبني لسلاسل توريد المستلزمات الطبية، تجزئة الفاخرة، وأي عمل تجاري لا يتحمّل التأخير.',
      features: ['مطابقة ساعٍ في أقل من 5 دقائق', 'تحديث GPS كل 30 ثانية', 'وقت وصول متوقع مباشر مع إعادة حساب فورية', 'توصيل بدون تلامس أو بتوقيع', 'إثبات توصيل فوري (صورة + GPS)', 'توجيه أولوي على جميع المستويات الأخرى'],
      coverage: 'مملكة البحرين', window: 'في غضون 2–4 ساعات',
    },
    {
      id: 'sameday', tier: 'نفس اليوم', badge: '🌅 نفس اليوم', accentColor: '#fed12c',
      headline: 'اطلب الآن. في اليدين بحلول المساء.',
      desc: 'المستوى الأكثر شعبية من بارسل. يعني التوجيه الذكي متعدد المحطات إمكانية تجميع طلبات متعددة بكفاءة — مما يمنحك أسعاراً تنافسية دون المساس بالسرعة. تكتمل معظم التوصيلات قبل نهاية ساعات العمل.',
      features: ['تحسين المسار الذكي المُجمَّع', 'إرسال تلقائي عبر بارسل AI', 'إشعارات SMS وبريد إلكتروني في كل مرحلة', 'توصيل بدون تلامس أو بتوقيع', 'إثبات توصيل رقمي كامل', 'لوحة تحليلات التاجر'],
      coverage: 'مملكة البحرين', window: 'نفس يوم العمل (الطلب قبل الساعة 2 مساءً)',
    },
    {
      id: 'nextday', tier: 'اليوم التالي', badge: '📅 اليوم التالي', accentColor: '#8fa8be',
      headline: 'دقة مجدولة، تغطية وطنية.',
      desc: 'للتوصيلات المخططة والشركات ذات الحجم الكبير، يمنحك اليوم التالي أفضل الأسعار مع موثوقية كاملة. نوافذ استلام مرنة، تخزين مدمج، وتغطية كاملة لجميع أنحاء دول الخليج تجعله الركيزة الأساسية لعمليات التجارة الإلكترونية.',
      features: ['نوافذ استلام مرنة: صباح أو ظهر أو مساء', 'تخزين وتوحيد متاح', 'أسعار الحجم لأكثر من 50 طلباً يومياً', 'تكامل API للحجز التلقائي', 'تغطية الخليج الكاملة (البحرين، السعودية، الإمارات، الكويت، قطر، عُمان)', 'فواتير شهرية موحدة'],
      coverage: 'البحرين + دول الخليج (السعودية، الإمارات، الكويت، قطر، عُمان)', window: 'يوم العمل التالي',
    },
  ],

  servicesFaqs: [
    { question: 'ما هو الفرق بين التوصيل الفوري والتوصيل في نفس اليوم؟', answer: 'التوصيل الفوري يُرسَل على الفور (في غضون 2-4 ساعات) بساعٍ مخصص. أما التوصيل في نفس اليوم، فيستخدم توجيهاً ذكياً مُجمَّعاً ويصل بحلول نهاية يوم العمل. الفوري أسرع وأغلى، أما في نفس اليوم فهو متوازن بين السرعة والتكلفة.' },
    { question: 'ما هي مناطق التغطية لديكم؟', answer: 'تغطي جميع مستويات التوصيل لدينا مملكة البحرين بالكامل. يمتد مستوى اليوم التالي أيضاً إلى دول الخليج: السعودية والإمارات والكويت وقطر وعُمان.' },
    { question: 'كيف أتتبع طلبيتي؟', answer: 'تتلقى رابط تتبع مباشر فور تأكيد طلبك. يتحدث موقع الساعي كل 30 ثانية، ويُعاد حساب وقت الوصول ديناميكياً.' },
    { question: 'هل يمكنني دمج API الخاص بكم مع نظامي الحالي؟', answer: 'نعم. يتكامل API REST الخاص بنا مع جميع الأنظمة الرئيسية. وثائقنا كاملة ومتاحة، ومعدل استجابة فريق الدعم للمطورين هو أقل من ساعة.' },
    { question: 'هل يمكن الاستلام من مواقع متعددة؟', answer: 'نعم — جميع خطط الأعمال تدعم الاستلام متعدد المواقع. يمكنك تكوين مستودعات الاستلام المفضلة عبر لوحة التحكم أو عبر API.' },
    { question: 'كيف تُحسب الأسعار؟', answer: 'يعتمد التسعير على المستوى (فوري / نفس اليوم / اليوم التالي)، والمسافة، والحجم. للشركات الكبيرة التي ترسل أكثر من 50 طلباً يومياً، لدينا خطط حجمية توفر حتى 40% من التكلفة.' },
  ],

  ecommerceIntegrations: [
    { icon: '🛍️', name: 'Shopify',     desc: 'تزامن تلقائي للطلبات وإرسال فوري مع تتبع مدمج.' },
    { icon: '🏪', name: 'Salla',        desc: 'تكامل أصلي مع أكبر منصة تجارة في السعودية والخليج.' },
    { icon: '🌐', name: 'WooCommerce', desc: 'إضافة WordPress — تثبيت في دقيقة، إرسال تلقائي.' },
    { icon: '⚡', name: 'Zid',          desc: 'مزامنة مباشرة مع متجرك وإدارة الإرجاعات.' },
    { icon: '🔗', name: 'REST API',     desc: 'REST API كاملة الوثائق مع webhooks لكل تغيير في الحالة.' },
    { icon: '📦', name: 'OpenCart',     desc: 'دعم متكامل مع إدارة مخزون وتتبع فوري.' },
  ],

  ecommerceApiFeatures: [
    'إنشاء طلبات برمجياً بسطر واحد',
    'Webhooks فوري لكل تغيير في الحالة',
    'نقاط نهاية لإدارة الاستلام والمستودعات',
    'مصادقة OAuth 2.0 مع مفاتيح API',
    'حد طلبات 1000 في الدقيقة مع دعم الدُفعات',
  ],

  ecommerceFaqs: [
    { question: 'كم يستغرق ربط متجري بـ بارسل؟', answer: 'الربط مع Shopify وSalla يستغرق أقل من دقيقتين — تثبيت التطبيق، ربط حسابك، جاهز. التكامل المخصص عبر API يستغرق عادةً أقل من يوم عمل.' },
    { question: 'هل تتزامن الطلبات تلقائياً؟', answer: 'نعم. بمجرد الربط، تُرسَل كل طلبات متجرك تلقائياً إلى بارسل ويُرسَل ساعٍ فوراً. لا حاجة لأي إجراء يدوي.' },
    { question: 'كيف تتم معالجة الإرجاعات؟', answer: 'يدعم بارسل التوصيل العكسي مع إثبات استلام رقمي. يمكن إنشاء الإرجاعات عبر لوحة التحكم أو API وتُتابع بنفس مستوى التتبع.' },
    { question: 'هل يدعم API نقاط الاستلام المتعددة؟', answer: 'نعم. يمكنك تكوين مستودعات متعددة وقواعد توجيه ذكية تُوزِّع الطلبات تلقائياً بناءً على المخزون والقرب الجغرافي.' },
  ],

  trackingFeatures: [
    { icon: '📱', title: 'مشاركة رابط مباشر',   desc: 'أرسل لعملائك رابط تتبع مباشر. لا حاجة لحساب — يرون الموقع الفعلي على خريطة.' },
    { icon: '🔔', title: 'تنبيهات تلقائية',      desc: 'إشعارات SMS وبريد إلكتروني في كل مرحلة: تم الاستلام، في الطريق، خرج للتسليم، تم التسليم.' },
    { icon: '📍', title: 'تحديثات كل 30 ثانية', desc: 'موقع GPS للساعي يُحدَّث كل 30 ثانية. وقت الوصول المتوقع يُعاد حسابه ديناميكياً مع حركة المرور.' },
    { icon: '📷', title: 'إثبات التسليم',         desc: 'صورة وإحداثيات GPS وطابع زمني يُلتقط في لحظة التسليم. مخزّن في لوحة التحكم الخاصة بك.' },
  ],

  coverageCountries: [
    { flag: '🇧🇭', name: 'البحرين' },
    { flag: '🇸🇦', name: 'السعودية' },
    { flag: '🇦🇪', name: 'الإمارات' },
    { flag: '🇰🇼', name: 'الكويت' },
    { flag: '🇶🇦', name: 'قطر' },
    { flag: '🇴🇲', name: 'عُمان' },
  ],
  servicesSection: {
    tag:     'اختر سرعتك',
    title:   'ثلاثة مستويات.',
    titleEm: 'معيار واحد.',
    sub:     'سواء كانت عاجلة أو مجدولة ليوم التالي — كل توصيل يعمل بنفس محرك الذكاء الاصطناعي المبني والمُشغَّل من المنامة.',
  },
  ecommerceSection: {
    tag:      'تلبية طلبات التجارة الإلكترونية',
    title:    'تكامل فوري.',
    titleEm:  'شحن فوري.',
    sub:      'يتكامل بارسل مباشرة مع متجرك. تتدفق الطلبات تلقائياً، ويُرسَل المندوبون فوراً، ويحصل عملاؤك على تحديثات في الوقت الفعلي دون أي جهد منك.',
    ctaLabel: 'استكشف التجارة الإلكترونية ←',
    ctaHref:  '/ar/ecommerce',
    features: [
      { icon: '🔗', title: 'تكاملات بنقرة واحدة', desc: 'Shopify وSalla وWooCommerce وZid وREST API' },
      { icon: '⚡', title: 'إرسال تلقائي',         desc: 'يُرسَل الطلب في غضون دقائق من الطلب' },
      { icon: '📦', title: 'تخزين وإرجاع',         desc: 'مركز تلبية طلبات في البحرين للتخزين واللوجستيات العكسية' },
      { icon: '📈', title: 'لوحة تحليلات',          desc: 'بيانات الطلبات ومستوى الخدمة والأداء في الوقت الفعلي للتجار' },
    ],
  },
  clientsSection: {
    tag:               'موثوق به من أكثر من 500 شركة',
    title:             'من يشحن',
    titleEm:           'مع بارسل.',
    testimonialsTitle: 'ماذا يقول عملاؤنا',
  },
  trackingWidget: {
    placeholder: 'أدخل رقم طلبك (مثال: PCL-00482)',
    trackBtn:    'تتبع ←',
    notFoundMsg: 'لم يُعثر على الطلب. جرّب "PCL-00482" للعرض التجريبي.',
  },
}

// ─── Clients ──────────────────────────────────────────────────────────────────

const clientsEn = [
  { name: 'Gulf Retail Co.',    industry: 'Retail',          initials: 'GR', color: '#fed12c' },
  { name: 'Manama Eats',        industry: 'Food & Beverage', initials: 'ME', color: '#ff4d4d' },
  { name: 'BahrainTech',        industry: 'Technology',      initials: 'BT', color: '#14507a' },
  { name: 'Pearl Jewellers',    industry: 'Luxury Retail',   initials: 'PJ', color: '#fed12c' },
  { name: 'Seef Pharmacy',      industry: 'Healthcare',      initials: 'SP', color: '#22c55e' },
  { name: 'Desert Rose',        industry: 'Fashion',         initials: 'DR', color: '#ff4d4d' },
  { name: 'Capital Logistics',  industry: 'Logistics',       initials: 'CL', color: '#14507a' },
  { name: 'Bahrain Books',      industry: 'Media & Books',   initials: 'BB', color: '#fed12c' },
  { name: 'AlAhlia Insurance',  industry: 'Finance',         initials: 'AI', color: '#8fa8be' },
  { name: 'Gulf Electronics',   industry: 'Electronics',     initials: 'GE', color: '#14507a' },
  { name: 'Saffron Kitchen',    industry: 'Food & Beverage', initials: 'SK', color: '#ff4d4d' },
  { name: 'NorthStar Realty',   industry: 'Real Estate',     initials: 'NS', color: '#22c55e' },
]

const clientsAr = [
  { name: 'شركة الخليج للتجزئة',  industry: 'التجزئة',              initials: 'خت', color: '#fed12c' },
  { name: 'طعام المنامة',          industry: 'الأغذية والمشروبات',   initials: 'طم', color: '#ff4d4d' },
  { name: 'بحرين تك',              industry: 'التكنولوجيا',          initials: 'بت', color: '#14507a' },
  { name: 'مجوهرات اللؤلؤ',       industry: 'التجزئة الفاخرة',     initials: 'مل', color: '#fed12c' },
  { name: 'صيدلية السيف',          industry: 'الرعاية الصحية',      initials: 'صس', color: '#22c55e' },
  { name: 'الوردة الصحراوية',      industry: 'الأزياء',             initials: 'وص', color: '#ff4d4d' },
  { name: 'كابيتال للشحن',         industry: 'اللوجستيات',          initials: 'كش', color: '#14507a' },
  { name: 'كتب البحرين',           industry: 'الإعلام والكتب',      initials: 'كب', color: '#fed12c' },
  { name: 'التأمين الأهلية',       industry: 'المالية',             initials: 'تأ', color: '#8fa8be' },
  { name: 'إلكترونيات الخليج',     industry: 'الإلكترونيات',        initials: 'إخ', color: '#14507a' },
  { name: 'مطبخ الزعفران',         industry: 'الأغذية والمشروبات',   initials: 'مز', color: '#ff4d4d' },
  { name: 'نورث ستار للعقارات',    industry: 'العقارات',            initials: 'نع', color: '#22c55e' },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonialsEn = [
  { quote: "Parcel transformed our delivery operations overnight. Our customers now expect same-day delivery as a standard — and Parcel never lets us down. The real-time tracking alone has cut our support tickets by 60%.", name: 'Fatima Al-Rashid', role: 'Operations Director', company: 'Gulf Retail Co.', initials: 'FA', rating: 5 },
  { quote: "We integrated Parcel's API with our Shopify store in under two hours. The documentation is excellent, the support team is genuinely helpful, and the delivery reliability is unlike anything we've experienced in Bahrain.", name: 'Ahmed Khalil', role: 'Founder & CEO', company: 'Manama Eats', initials: 'AK', rating: 5 },
  { quote: "As a pharmacy, we need absolute certainty on delivery timelines. Parcel's 98.7% on-time rate isn't marketing — we've verified it ourselves. For critical healthcare deliveries, that reliability is everything.", name: 'Dr. Layla Hassan', role: 'Head of Operations', company: 'Seef Pharmacy', initials: 'LH', rating: 5 },
  { quote: "The instant delivery tier is a game-changer for our jewellery business. When a customer in Manama orders a piece for a special occasion, we can get it to them within hours. Our luxury clients love this.", name: 'Noor Al-Mansoori', role: 'Managing Director', company: 'Pearl Jewellers', initials: 'NM', rating: 5 },
]

const testimonialsAr = [
  { quote: 'بارسل غيّر عمليات التوصيل لدينا من الليلة للصباح. أصبح عملاؤنا يتوقعون التوصيل في نفس اليوم كأمر طبيعي — وبارسل لا يخذلنا أبداً. التتبع الفوري وحده خفّض تذاكر دعم العملاء لدينا بنسبة 60%.', name: 'فاطمة الراشد', role: 'مدير العمليات', company: 'شركة الخليج للتجزئة', initials: 'فر', rating: 5 },
  { quote: 'دمجنا API بارسل مع متجرنا على شوبيفاي في أقل من ساعتين. الوثائق ممتازة، فريق الدعم متعاون بشكل حقيقي، وموثوقية التوصيل لا مثيل لها في البحرين.', name: 'أحمد خليل', role: 'المؤسس والرئيس التنفيذي', company: 'طعام المنامة', initials: 'أخ', rating: 5 },
  { quote: 'بوصفنا صيدلية، نحتاج يقيناً تاماً في مواعيد التوصيل. نسبة 98.7% في الالتزام بالوقت من بارسل ليست تسويقاً — لقد تحققنا منها بأنفسنا. لتوصيلات الرعاية الصحية الحرجة، هذه الموثوقية هي كل شيء.', name: 'د. ليلى حسن', role: 'رئيسة العمليات', company: 'صيدلية السيف', initials: 'لح', rating: 5 },
  { quote: 'مستوى التوصيل الفوري غيّر قواعد اللعبة لأعمالنا في المجوهرات. عندما يطلب عميل في المنامة قطعة لمناسبة خاصة، نستطيع إيصالها له في غضون ساعات. عملاؤنا من الفئة الراقية يعشقون هذه الخدمة.', name: 'نور المنصوري', role: 'المدير العام', company: 'مجوهرات اللؤلؤ', initials: 'نم', rating: 5 },
]

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('🌱  Seeding Sanity project:', projectId)
  console.log('    Two languages: English + Arabic\n')

  console.log('📋  Site Settings...')
  await client.createOrReplace(siteSettingsEn)
  console.log('    ✓ English — all sections included')
  await client.createOrReplace(siteSettingsAr)
  console.log('    ✓ العربية — جميع الأقسام')

  console.log('\n🏢  Clients...')
  for (const [i, c] of clientsEn.entries()) {
    await client.createOrReplace({ _id: `client-en-${i + 1}`, _type: 'client', language: 'en', ...c, order: i + 1 })
    process.stdout.write(`    ✓ EN: ${c.name}\n`)
  }
  for (const [i, c] of clientsAr.entries()) {
    await client.createOrReplace({ _id: `client-ar-${i + 1}`, _type: 'client', language: 'ar', ...c, order: i + 1 })
    process.stdout.write(`    ✓ AR: ${c.name}\n`)
  }

  console.log('\n💬  Testimonials...')
  for (const [i, t] of testimonialsEn.entries()) {
    await client.createOrReplace({ _id: `testimonial-en-${i + 1}`, _type: 'testimonial', language: 'en', ...t })
    process.stdout.write(`    ✓ EN: ${t.name}\n`)
  }
  for (const [i, t] of testimonialsAr.entries()) {
    await client.createOrReplace({ _id: `testimonial-ar-${i + 1}`, _type: 'testimonial', language: 'ar', ...t })
    process.stdout.write(`    ✓ AR: ${t.name}\n`)
  }

  // ── Translation metadata — links EN ↔ AR in the Studio sidebar ───────────

  console.log('\n🔗  Translation metadata...')

  // siteSettings
  await client.createOrReplace({
    _id:   'i18n.siteSettings',
    _type: 'translation.metadata',
    translations: [
      { _key: 'en', value: { _type: 'reference', _ref: 'siteSettings-en' } },
      { _key: 'ar', value: { _type: 'reference', _ref: 'siteSettings-ar' } },
    ],
    schemaTypes: ['siteSettings'],
  })
  console.log('    ✓ siteSettings EN ↔ AR')

  // clients (12 pairs)
  for (let i = 1; i <= clientsEn.length; i++) {
    await client.createOrReplace({
      _id:   `i18n.client-${i}`,
      _type: 'translation.metadata',
      translations: [
        { _key: 'en', value: { _type: 'reference', _ref: `client-en-${i}` } },
        { _key: 'ar', value: { _type: 'reference', _ref: `client-ar-${i}` } },
      ],
      schemaTypes: ['client'],
    })
  }
  console.log(`    ✓ ${clientsEn.length} client pairs linked`)

  // testimonials (4 pairs)
  for (let i = 1; i <= testimonialsEn.length; i++) {
    await client.createOrReplace({
      _id:   `i18n.testimonial-${i}`,
      _type: 'translation.metadata',
      translations: [
        { _key: 'en', value: { _type: 'reference', _ref: `testimonial-en-${i}` } },
        { _key: 'ar', value: { _type: 'reference', _ref: `testimonial-ar-${i}` } },
      ],
      schemaTypes: ['testimonial'],
    })
  }
  console.log(`    ✓ ${testimonialsEn.length} testimonial pairs linked`)

  console.log('\n✅  All done!')
  console.log('    Sections seeded: hero, stats, ticker, tech, howItWorks, whyUs, app,')
  console.log('                     cta, footer, services (×3), servicesFaqs (×6),')
  console.log('                     ecommerce integrations (×6), api features (×5),')
  console.log('                     ecommerceFaqs (×4), trackingFeatures (×4), coverage (×6)')
  console.log('    Linked:          siteSettings, 12 clients, 4 testimonials (EN ↔ AR)')
  console.log('\n    Open your Studio: http://localhost:3333')
  console.log('    English site: http://localhost:4321')
  console.log('    Arabic site:  http://localhost:4321/ar')
}

seed().catch(err => {
  console.error('\n❌  Seed failed:', err.message)
  process.exit(1)
})
