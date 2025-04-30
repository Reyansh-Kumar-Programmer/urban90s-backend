import { BasketIcon } from '@sanity/icons'

interface Product {
  title: string;
  image: string;
  quantity: number;
  totalPrice: number;
  size: string;
}

interface Order {
  customerName: string;
  customerEmail: string;
  phoneNumber: string;
  address: string;
  orderNumber?: string;
  orderDate?: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  products: Product[];
}

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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required().regex(/^\+?[0-9]{10,15}$/, {
          message: 'Please enter a valid phone number.',
        }),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
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
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'url',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: 'totalPrice',
              title: 'Total Price',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(0),
            },
            {
              name: 'size',
              title: 'Product Size',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
