import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'language', title: 'Language', type: 'string', readOnly: true, hidden: true }),

    // ── Meta ──────────────────────────────────────────────────────────────────
    defineField({ name: 'siteName',    title: 'Site Name',        type: 'string' }),
    defineField({ name: 'tagline',     title: 'Tagline',          type: 'string' }),
    defineField({ name: 'description', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'ogImage',     title: 'Default OG Image', type: 'image' }),

    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        defineField({ name: 'eyebrow',        title: 'Eyebrow text',        type: 'string' }),
        defineField({ name: 'titleLine1',     title: 'Title — Line 1',      type: 'string' }),
        defineField({ name: 'titleLine2',     title: 'Title — Line 2',      type: 'string' }),
        defineField({ name: 'titleLine3',     title: 'Title — Line 3',      type: 'string' }),
        defineField({ name: 'description',    title: 'Description',         type: 'text', rows: 3 }),
        defineField({ name: 'ctaPrimaryLabel', title: 'CTA Primary — Label', type: 'string' }),
        defineField({ name: 'ctaPrimaryHref',  title: 'CTA Primary — URL',   type: 'string' }),
        defineField({ name: 'ctaGhostLabel',   title: 'CTA Ghost — Label',   type: 'string' }),
        defineField({ name: 'ctaGhostHref',    title: 'CTA Ghost — URL',     type: 'string' }),
        defineField({ name: 'backgroundImage', title: 'Background Image URL', type: 'url' }),
      ],
    }),

    // ── Stats ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'stats', title: 'Stats Bar', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value',   title: 'Value (number)',              type: 'number' }),
          defineField({ name: 'suffix',  title: 'Suffix (e.g. +, %)',          type: 'string' }),
          defineField({ name: 'label',   title: 'Label',                       type: 'string' }),
          defineField({ name: 'compact', title: 'Compact format (1M, 500K)',   type: 'boolean' }),
          defineField({ name: 'decimal', title: 'Decimal format (e.g. 98.7)', type: 'boolean' }),
        ],
        preview: { select: { title: 'label', subtitle: 'value' } },
      }],
    }),

    // ── Ticker ────────────────────────────────────────────────────────────────
    defineField({
      name: 'tickerItems', title: 'Ticker Bar Items', type: 'array',
      of: [{ type: 'string' }],
      description: 'Items scrolling in the yellow bar below the navbar',
    }),

    // ── Contact ───────────────────────────────────────────────────────────────
    defineField({ name: 'email',   title: 'Contact Email',  type: 'string' }),
    defineField({ name: 'phone',   title: 'Contact Phone',  type: 'string' }),
    defineField({ name: 'address', title: 'Office Address', type: 'string' }),
    defineField({ name: 'hours',   title: 'Business Hours', type: 'string' }),

    // ── Tech Section ──────────────────────────────────────────────────────────
    defineField({
      name: 'techSection', title: 'Tech Section', type: 'object',
      fields: [
        defineField({ name: 'tag',     title: 'Tag Label',    type: 'string' }),
        defineField({ name: 'title',   title: 'Title',        type: 'string' }),
        defineField({ name: 'titleEm', title: 'Title — em',   type: 'string' }),
        defineField({ name: 'sub',     title: 'Subtitle',     type: 'text', rows: 3 }),
        defineField({
          name: 'features', title: 'Features', type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'icon',  title: 'Icon Emoji',  type: 'string' }),
              defineField({ name: 'title', title: 'Title',       type: 'string' }),
              defineField({ name: 'desc',  title: 'Description', type: 'string' }),
            ],
            preview: { select: { title: 'title' } },
          }],
        }),
        defineField({ name: 'mockupLabelLive', title: 'Mockup — "Updating live" text',      type: 'string' }),
        defineField({ name: 'mockupLabelEta',  title: 'Mockup — "Estimated Arrival" label', type: 'string' }),
        defineField({
          name: 'mockupTimeline', title: 'Mockup Timeline Steps', type: 'array',
          of: [{
            type: 'object',
            fields: [defineField({ name: 'label', title: 'Step Label', type: 'string' })],
            preview: { select: { title: 'label' } },
          }],
        }),
      ],
    }),

    // ── How It Works ──────────────────────────────────────────────────────────
    defineField({
      name: 'howItWorks', title: 'How It Works Section', type: 'object',
      fields: [
        defineField({ name: 'tag',     title: 'Tag Label',  type: 'string' }),
        defineField({ name: 'title',   title: 'Title',      type: 'string' }),
        defineField({ name: 'titleEm', title: 'Title — em', type: 'string' }),
        defineField({ name: 'sub',     title: 'Subtitle',   type: 'string' }),
        defineField({
          name: 'steps', title: 'Steps', type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'number', title: 'Step Number (01, 02…)', type: 'string' }),
              defineField({ name: 'icon',   title: 'Icon Emoji',            type: 'string' }),
              defineField({ name: 'title',  title: 'Title',                 type: 'string' }),
              defineField({ name: 'desc',   title: 'Description',           type: 'text', rows: 3 }),
            ],
            preview: { select: { title: 'title', subtitle: 'number' } },
          }],
        }),
      ],
    }),

    // ── Why Us ────────────────────────────────────────────────────────────────
    defineField({
      name: 'whyUs', title: 'Why Us Section', type: 'object',
      fields: [
        defineField({ name: 'tag',     title: 'Tag Label',  type: 'string' }),
        defineField({ name: 'title',   title: 'Title',      type: 'string' }),
        defineField({ name: 'titleEm', title: 'Title — em', type: 'string' }),
        defineField({ name: 'sub',     title: 'Subtitle',   type: 'string' }),
        defineField({
          name: 'reasons', title: 'Reasons', type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'icon',  title: 'Icon Emoji',  type: 'string' }),
              defineField({ name: 'title', title: 'Title',       type: 'string' }),
              defineField({ name: 'desc',  title: 'Description', type: 'text', rows: 3 }),
            ],
            preview: { select: { title: 'title' } },
          }],
        }),
      ],
    }),

    // ── App Section ───────────────────────────────────────────────────────────
    defineField({
      name: 'appSection', title: 'App Section', type: 'object',
      fields: [
        defineField({ name: 'tag',            title: 'Tag Label',        type: 'string' }),
        defineField({ name: 'title',          title: 'Title',            type: 'string' }),
        defineField({ name: 'titleEm',        title: 'Title — em',       type: 'string' }),
        defineField({ name: 'sub',            title: 'Subtitle',         type: 'text', rows: 3 }),
        defineField({ name: 'appStoreLbl',    title: 'App Store Label',  type: 'string' }),
        defineField({ name: 'appStoreHref',   title: 'App Store URL',    type: 'string' }),
        defineField({ name: 'googlePlayLbl',  title: 'Google Play Label', type: 'string' }),
        defineField({ name: 'googlePlayHref', title: 'Google Play URL',  type: 'string' }),
      ],
    }),

    // ── CTA Section ───────────────────────────────────────────────────────────
    defineField({
      name: 'ctaSection', title: 'CTA Section', type: 'object',
      fields: [
        defineField({ name: 'tag',          title: 'Tag Label',        type: 'string' }),
        defineField({ name: 'title',        title: 'Title',            type: 'string' }),
        defineField({ name: 'titleEm',      title: 'Title — em',       type: 'string' }),
        defineField({ name: 'sub',          title: 'Subtitle',         type: 'text', rows: 3 }),
        defineField({ name: 'primaryLabel', title: 'Primary CTA Label', type: 'string' }),
        defineField({ name: 'primaryHref',  title: 'Primary CTA URL',  type: 'string' }),
        defineField({ name: 'ghostLabel',   title: 'Ghost CTA Label',  type: 'string' }),
        defineField({ name: 'ghostHref',    title: 'Ghost CTA URL',    type: 'string' }),
        defineField({ name: 'footnote',     title: 'Footnote',         type: 'string' }),
      ],
    }),

    // ── Footer ────────────────────────────────────────────────────────────────
    defineField({
      name: 'footer', title: 'Footer Content', type: 'object',
      fields: [
        defineField({ name: 'tagline',         title: 'Brand Tagline',        type: 'text', rows: 2 }),
        defineField({ name: 'operatingHours',  title: 'Operating Badge Text', type: 'string' }),
        defineField({ name: 'copyrightSuffix', title: 'Copyright Suffix',     type: 'string' }),
        defineField({ name: 'builtFor',        title: '"Built for…" tagline', type: 'string' }),
      ],
    }),

    // ── Service Tiers ─────────────────────────────────────────────────────────
    defineField({
      name: 'services', title: 'Service Tiers', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'id',          title: 'ID (instant / sameday / nextday)', type: 'string' }),
          defineField({ name: 'tier',        title: 'Tier Name',        type: 'string' }),
          defineField({ name: 'badge',       title: 'Badge Text',       type: 'string' }),
          defineField({ name: 'tagline',     title: 'Card Tagline',     type: 'string', description: 'One-line subtitle shown on the home page card' }),
          defineField({ name: 'image',       title: 'Card Background Image URL', type: 'string' }),
          defineField({ name: 'accentColor', title: 'Accent Color hex', type: 'string' }),
          defineField({ name: 'headline',    title: 'Headline',         type: 'string' }),
          defineField({ name: 'desc',        title: 'Description',      type: 'text', rows: 4 }),
          defineField({ name: 'features',    title: 'Features',         type: 'array', of: [{ type: 'string' }] }),
          defineField({ name: 'coverage',    title: 'Coverage',         type: 'string' }),
          defineField({ name: 'window',      title: 'Delivery Window',  type: 'string' }),
        ],
        preview: { select: { title: 'tier', subtitle: 'badge' } },
      }],
    }),

    // ── Services FAQs ─────────────────────────────────────────────────────────
    defineField({
      name: 'servicesFaqs', title: 'Services FAQs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', title: 'Question', type: 'string' }),
          defineField({ name: 'answer',   title: 'Answer',   type: 'text', rows: 4 }),
        ],
        preview: { select: { title: 'question' } },
      }],
    }),

    // ── E-Commerce ────────────────────────────────────────────────────────────
    defineField({
      name: 'ecommerceIntegrations', title: 'E-Commerce Integrations', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Icon Emoji',    type: 'string' }),
          defineField({ name: 'name', title: 'Platform Name', type: 'string' }),
          defineField({ name: 'desc', title: 'Description',   type: 'string' }),
        ],
        preview: { select: { title: 'name' } },
      }],
    }),

    defineField({
      name: 'ecommerceApiFeatures', title: 'E-Commerce API Features', type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'ecommerceFaqs', title: 'E-Commerce FAQs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', title: 'Question', type: 'string' }),
          defineField({ name: 'answer',   title: 'Answer',   type: 'text', rows: 4 }),
        ],
        preview: { select: { title: 'question' } },
      }],
    }),

    // ── Tracking ──────────────────────────────────────────────────────────────
    defineField({
      name: 'trackingFeatures', title: 'Tracking Features', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon',  title: 'Icon Emoji',  type: 'string' }),
          defineField({ name: 'title', title: 'Title',       type: 'string' }),
          defineField({ name: 'desc',  title: 'Description', type: 'string' }),
        ],
        preview: { select: { title: 'title' } },
      }],
    }),

    // ── Coverage Countries ────────────────────────────────────────────────────
    defineField({
      name: 'coverageCountries', title: 'Coverage Countries', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'flag', title: 'Flag Emoji',   type: 'string' }),
          defineField({ name: 'name', title: 'Country Name', type: 'string' }),
        ],
        preview: { select: { title: 'name', subtitle: 'flag' } },
      }],
    }),

    // ── Services Section Header (Home) ────────────────────────────────────────
    defineField({
      name: 'servicesSection', title: 'Services Section Header (Home)', type: 'object',
      fields: [
        defineField({ name: 'tag',     title: 'Tag',           type: 'string' }),
        defineField({ name: 'title',   title: 'Title',         type: 'string' }),
        defineField({ name: 'titleEm', title: 'Title (em)',    type: 'string' }),
        defineField({ name: 'sub',     title: 'Subtitle',      type: 'text', rows: 3 }),
      ],
    }),

    // ── Ecommerce Section (Home) ──────────────────────────────────────────────
    defineField({
      name: 'ecommerceSection', title: 'E-Commerce Section (Home)', type: 'object',
      fields: [
        defineField({ name: 'tag',      title: 'Tag',            type: 'string' }),
        defineField({ name: 'title',    title: 'Title',          type: 'string' }),
        defineField({ name: 'titleEm',  title: 'Title (em)',     type: 'string' }),
        defineField({ name: 'sub',      title: 'Subtitle',       type: 'text', rows: 3 }),
        defineField({ name: 'ctaLabel', title: 'CTA Label',      type: 'string' }),
        defineField({ name: 'ctaHref',  title: 'CTA Link',       type: 'string' }),
        defineField({
          name: 'features', title: 'Features', type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'icon',  title: 'Icon Emoji',  type: 'string' }),
              defineField({ name: 'title', title: 'Title',       type: 'string' }),
              defineField({ name: 'desc',  title: 'Description', type: 'string' }),
            ],
            preview: { select: { title: 'title' } },
          }],
        }),
      ],
    }),

    // ── Clients Section Header (Home) ─────────────────────────────────────────
    defineField({
      name: 'clientsSection', title: 'Clients Section Header (Home)', type: 'object',
      fields: [
        defineField({ name: 'tag',               title: 'Tag',                    type: 'string' }),
        defineField({ name: 'title',             title: 'Title',                  type: 'string' }),
        defineField({ name: 'titleEm',           title: 'Title (em)',             type: 'string' }),
        defineField({ name: 'testimonialsTitle', title: 'Testimonials Sub-Heading', type: 'string' }),
      ],
    }),

    // ── Tracking Widget Labels ────────────────────────────────────────────────
    defineField({
      name: 'trackingWidget', title: 'Tracking Widget Labels', type: 'object',
      fields: [
        defineField({ name: 'placeholder', title: 'Input Placeholder',  type: 'string' }),
        defineField({ name: 'trackBtn',    title: 'Track Button Label', type: 'string' }),
        defineField({ name: 'notFoundMsg', title: 'Not Found Message',  type: 'string' }),
      ],
    }),
  ],
  preview: { prepare() { return { title: 'Site Settings' } } },
})
