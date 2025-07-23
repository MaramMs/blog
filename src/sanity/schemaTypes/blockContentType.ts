// import { defineType, defineArrayMember } from 'sanity'
// import { ImageIcon } from '@sanity/icons'

// export const blockContentType = defineType({
//   title: 'Block Content',
//   name: 'blockContent',
//   type: 'array',
//   of: [
//     defineArrayMember({
//       type: 'block',
//       styles: [
//         { title: 'Normal', value: 'normal' },
//         { title: 'H1', value: 'h1' },
//         { title: 'H2', value: 'h2' },
//         { title: 'H3', value: 'h3' },
//         { title: 'H4', value: 'h4' },
//         { title: 'Quote', value: 'blockquote' },
//       ],
//       lists: [
//         { title: 'Bullet', value: 'bullet' },
//       ],
//       marks: {
//         decorators: [
//           { title: 'Strong', value: 'strong' },
//           { title: 'Emphasis', value: 'em' },
//         ],
//         annotations: [
//           {
//             title: 'URL',
//             name: 'link',
//             type: 'object',
//             fields: [
//               {
//                 title: 'URL',
//                 name: 'href',
//                 type: 'url',
//               },
//             ],
//           },
//         ],
//       },
//     }),
//     defineArrayMember({
//       type: 'image',
//       icon: ImageIcon,
//       options: { hotspot: true },
//       fields: [
//         {
//           name: 'alt',
//           type: 'string',
//           title: 'Alternative Text',
//         },
//       ],
//     }),
//     defineArrayMember({
//   name: 'customHeading',
//   type: 'object',
//   title: 'عنوان مع أيقونة',
//   fields: [
//     {
//       name: 'text',
//       type: 'string',
//       title: 'النص',
//     },
//     {
//       name: 'level',
//       type: 'string',
//       title: 'المستوى',
//       options: {
//         list: [
//           { title: 'H3', value: 'h3' },
//           { title: 'H4', value: 'h4' },
//         ],
//         layout: 'radio',
//       },
//       initialValue: 'h3',
//     },
//     {
//       name: 'iconName',
//       type: 'string',
//       title: 'اختر الأيقونة',
//       options: {
//         list: [
//           { title: '✔ Check', value: 'MdCheck' },
//           { title: '⭐ Star', value: 'MdStar' },
//           { title: 'ℹ Info', value: 'MdInfo' },
//           { title: '🍎 Apple', value: 'FaApple' },
//           { title: '☕ Coffee', value: 'FaCoffee' },
//         ],
//       },
//     },
//   ],
//   preview: {
//     select: {
//       title: 'text',
//       subtitle: 'level',
//       icon: 'iconName',
//     },
//     prepare({ title, subtitle, icon }) {
//       return {
//         title,
//         subtitle: `نوع العنوان: ${subtitle}`,
//       }
//     },
//   },
// }),

//   ],
// })


// ./schemas/blockContent.js
import { defineType } from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'عادي', value: 'normal' },
        { title: 'عنوان كبير', value: 'h1' },
        { title: 'عنوان وسط', value: 'h2' },
        { title: 'عنوان صغير', value: 'h3' },
      ],
      lists: [
        { title: 'قائمة نقطية', value: 'bullet' },
        { title: 'قائمة مرقمة', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'عريض', value: 'strong' },
          { title: 'مائل', value: 'em' },
          { title: 'تسطير', value: 'underline' },
          { title: 'خط فوق النص', value: 'overline' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'رابط',
            fields: [
              { name: 'href', type: 'url', title: 'رابط' }
            ]
          }
        ]
      }
    },
    {
      type: 'image',
      options: { hotspot: true }
    }
  ]
})
