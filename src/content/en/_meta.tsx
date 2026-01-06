import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      copyPage: false,
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  docs: {
    title: 'Engineering Practice',
    type: 'page',
  },
  rules: {
    title: 'Cursor Rules',
    type: 'page',
  },
  prompts: {
    title: 'Prompts',
    type: 'page',
  },
  blog: {
    title: 'Blog',
    type: 'page',
  },
} satisfies MetaRecord
