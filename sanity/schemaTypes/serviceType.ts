import { defineType, defineField } from 'sanity'
import { CogIcon, WrenchIcon, PaletteIcon, ShieldCheckIcon, RefreshCwIcon, CarIcon } from 'lucide-react'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Service title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(20).error('Description must be at least 20 characters long'),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Cog', value: 'CogIcon' },
          { title: 'Wrench', value: 'WrenchIcon' },
          { title: 'Palette', value: 'PaletteIcon' },
          { title: 'Shield Check', value: 'ShieldCheckIcon' },
          { title: 'Refresh', value: 'RefreshCwIcon' },
          { title: 'Car', value: 'CarIcon' },
        ],
      },
      initialValue: 'CogIcon',
    }),
    defineField({
      name: 'images',
      title: 'Service Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required().error('Image is required'),
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Description of the image for accessibility',
              validation: (Rule) => Rule.required().error('Alt text is required'),
            }),
            defineField({
              name: 'type',
              title: 'Image Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Before', value: 'before' },
                  { title: 'After', value: 'after' },
                ],
              },
              initialValue: 'before',
            }),
          ],
          preview: {
            select: {
              image: 'image',
              alt: 'alt',
              type: 'type',
            },
            prepare: ({ image, alt, type }) => ({
              title: alt,
              subtitle: type,
              media: image,
            }),
          },
        },
      ],
      validation: (Rule) => 
        Rule.required()
          .min(4)
          .max(4)
          .error('Exactly 4 images are required for each service'),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which this service should appear',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Whether this service is currently active',
      initialValue: true,
    }),
  ],
//   preview: {
//     select: {
//       title: 'title',
//       subtitle: 'description',
//       media: 'images.0.image',
//     },
//     prepare: ({ title, subtitle, media }) => ({
//       title,
//       subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : '',
//       media: media,
//     }),
//   },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})