// File: tina/config.ts

import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'packages',
        label: '📦 Packages',
        path: 'src/content/packages',
        format: 'json',
        fields: [
          { type: 'string', name: 'heroTitle', label: 'Hero Title', required: true },
          { type: 'string', name: 'heroSubtitle', label: 'Hero Subtitle', ui: { component: 'textarea' } },
          { type: 'string', name: 'heroBadge', label: 'Hero Badge' },
          { type: 'image', name: 'heroImage', label: 'Hero Background Image' },
          {
            type: 'object',
            name: 'stats',
            label: 'Stats',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label || 'Stat' }) },
            fields: [
              { type: 'string', name: 'value', label: 'Value' },
              { type: 'string', name: 'label', label: 'Label' },
            ],
          },
          {
            type: 'object',
            name: 'packages',
            label: 'Packages',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || 'Package' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'price', label: 'Price' },
              { type: 'string', name: 'tagline', label: 'Tagline' },
              { type: 'string', name: 'category', label: 'Category' },
              { type: 'string', name: 'badge', label: 'Badge' },
              { type: 'string', name: 'icon', label: 'Icon Name' },
              { type: 'string', name: 'includes', label: 'Includes', list: true },
            ],
          },
          {
            type: 'object',
            name: 'faqs',
            label: 'FAQs',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.q || 'FAQ' }) },
            fields: [
              { type: 'string', name: 'q', label: 'Question' },
              { type: 'string', name: 'a', label: 'Answer', ui: { component: 'textarea' } },
            ],
          },
        ],
      },
    ],
  },
});