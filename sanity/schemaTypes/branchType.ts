import {PinIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const branchType = defineType({
  name: 'branch',
  title: 'Branch',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Branch Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Branch name is required'),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule) => Rule.required().error('Address is required'),
    }),
    defineField({
      name: 'mapQuery',
      title: 'Map Query',
      type: 'string',
      description: 'URL-encoded address for Google Maps embedding',
      validation: (Rule) => Rule.required().error('Map query is required'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().error('Phone number is required'),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which this branch should appear',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address',
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})