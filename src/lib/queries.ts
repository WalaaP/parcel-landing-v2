export const postsQuery = `*[_type == "post" && language == $lang] | order(publishedAt desc) {
  _id, title, slug, excerpt, publishedAt, category,
  mainImage { asset->{ _id, url }, alt },
  author->{ name, image { asset->{ _id, url } } }
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug && language == $lang][0] {
  _id, title, slug, excerpt, publishedAt, category,
  mainImage { asset->{ _id, url }, alt },
  author->{ name, image { asset->{ _id, url } } },
  body
}`

export const testimonialsQuery = `*[_type == "testimonial" && language == $lang] | order(_createdAt asc) {
  _id, quote, name, role, company, initials, rating,
  avatar { asset->{ _id, url } }
}`

export const clientsQuery = `*[_type == "client" && language == $lang] | order(order asc) {
  _id, name, industry, initials, color,
  logo { asset->{ _id, url }, alt }
}`

export const siteSettingsQuery = `*[_type == "siteSettings" && language == $lang][0] {
  siteName, tagline, description,
  ogImage { asset->{ _id, url } },
  hero {
    eyebrow, titleLine1, titleLine2, titleLine3, description,
    ctaPrimaryLabel, ctaPrimaryHref, ctaGhostLabel, ctaGhostHref, backgroundImage
  },
  stats[] { value, suffix, label, compact, decimal },
  tickerItems,
  email, phone, address, hours,
  techSection {
    tag, title, titleEm, sub,
    features[] { icon, title, desc },
    mockupLabelLive, mockupLabelEta,
    mockupTimeline[] { label }
  },
  howItWorks {
    tag, title, titleEm, sub,
    steps[] { number, icon, title, desc }
  },
  whyUs {
    tag, title, titleEm, sub,
    reasons[] { icon, title, desc }
  },
  appSection { tag, title, titleEm, sub, appStoreLbl, appStoreHref, googlePlayLbl, googlePlayHref },
  ctaSection { tag, title, titleEm, sub, primaryLabel, primaryHref, ghostLabel, ghostHref, footnote },
  footer { tagline, operatingHours, copyrightSuffix, builtFor },
  services[] { id, tier, badge, accentColor, headline, desc, features[], coverage, window },
  servicesFaqs[] { question, answer },
  ecommerceIntegrations[] { icon, name, desc },
  ecommerceApiFeatures[],
  ecommerceFaqs[] { question, answer },
  trackingFeatures[] { icon, title, desc },
  coverageCountries[] { flag, name },
  servicesSection { tag, title, titleEm, sub },
  ecommerceSection { tag, title, titleEm, sub, ctaLabel, ctaHref, features[] { icon, title, desc } },
  clientsSection { tag, title, titleEm, testimonialsTitle },
  trackingWidget { placeholder, trackBtn, notFoundMsg }
}`

export const ctaSectionQuery = `*[_type == "siteSettings" && language == $lang][0] {
  ctaSection { tag, title, titleEm, sub, primaryLabel, primaryHref, ghostLabel, ghostHref, footnote }
}`

export const footerQuery = `*[_type == "siteSettings" && language == $lang][0] {
  footer { tagline, operatingHours, copyrightSuffix, builtFor },
  email, phone
}`
