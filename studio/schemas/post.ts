import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'language', title: 'Language', type: 'string', readOnly: true, hidden: true }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })] }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Logistics', 'Technology', 'E-Commerce', 'Company News', 'Industry Insights'] } }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
  ],
  preview: { select: { title: 'title', author: 'author.name', media: 'mainImage' }, prepare(selection) { const { author } = selection; return { ...selection, subtitle: author && `by ${author}` } } },
})
