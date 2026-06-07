import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({ name: 'language', title: 'Language', type: 'string', readOnly: true, hidden: true }),
    defineField({ name: 'name',     title: 'Name',          type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'industry', title: 'Industry',      type: 'string' }),
    defineField({ name: 'initials', title: 'Initials (2 letters)', type: 'string', description: 'Shown when no logo is uploaded, e.g. "GR"' }),
    defineField({ name: 'color',    title: 'Accent Color',  type: 'string', description: 'Hex code e.g. #fed12c' }),
    defineField({ name: 'order',    title: 'Display Order', type: 'number' }),
    defineField({ name: 'logo',     title: 'Logo',          type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })] }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
})
