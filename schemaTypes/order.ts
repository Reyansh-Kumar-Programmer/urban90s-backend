import { BasketIcon } from '@sanity/icons'

export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  icon: BasketIcon,
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'pending',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Product Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'url',
              validation: Rule => Rule.required(),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: Rule => Rule.required().min(1),
            },
            {
              name: 'totalPrice',
              title: 'Total Price',
              type: 'number',
              validation: Rule => Rule.required().min(0),
            },
            {
              name: 'size',
              title: 'Product Size',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
