import { ComposeSparklesIcon } from '@sanity/icons'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: ComposeSparklesIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'This will be shown as the product thumbnail/cover in the UI',
    },
    {
      name: 'images',
      title: 'Product Images (Max 3)',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.max(3).error('Only 3 images allowed'),
    },
    {
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: ['S', 'M', 'L', 'XL', 'XXL'],
            layout: 'tags',
          },
        },
      ],
    },
    {
      name: 'stock',
      title: 'Total Units in Stock',
      type: 'number',
      validation: Rule => Rule.min(0),
    },
    {
      name: 'price',
      title: 'Price (in ₹)',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
