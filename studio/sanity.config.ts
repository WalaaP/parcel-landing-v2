import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { documentInternationalization } from '@sanity/document-internationalization'
import { schemaTypes } from './schemas'

const supportedLanguages = [
  { id: 'en', title: 'English' },
  { id: 'ar', title: 'العربية' },
]

export default defineConfig({
  name:      'parcel-studio',
  title:     'Parcel CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset:   process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    documentInternationalization({
      supportedLanguages,
      schemaTypes: ['siteSettings', 'testimonial', 'client', 'post'],
    }),

    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: one document per language
            S.listItem()
              .title('Site Settings')
              .child(
                S.list()
                  .title('Language')
                  .items(
                    supportedLanguages.map(lang =>
                      S.listItem()
                        .title(lang.title)
                        .child(
                          S.document()
                            .schemaType('siteSettings')
                            .documentId(`siteSettings-${lang.id}`)
                        )
                    )
                  )
              ),
            S.divider(),
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.documentTypeListItem('client').title('Clients'),
            S.divider(),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('author').title('Authors'),
          ]),
    }),

    visionTool(),
  ],

  schema: { types: schemaTypes },
})
