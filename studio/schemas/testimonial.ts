import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'language', title: 'Language', type: 'string', readOnly: true, hidden: true }),
    defineField({ name: 'quote',    title: 'Quote',            type: 'text',   rows: 4, validation: Rule => Rule.required() }),
    defineField({ name: 'name',     title: 'Name',             type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'role',     title: 'Role / Title',     type: 'string' }),
    defineField({ name: 'company',  title: 'Company',          type: 'string' }),
    defineField({ name: 'initials', title: 'Initials (2 letters)', type: 'string', description: 'Shown as avatar fallback e.g. "FA"' }),
    defineField({ name: 'rating',   title: 'Rating (1–5)',     type: 'number', validation: Rule => Rule.min(1).max(5) }),
    defineField({ name: 'avatar',   title: 'Avatar Photo',     type: 'image',  options: { hotspot: true } }),
  ],
})
