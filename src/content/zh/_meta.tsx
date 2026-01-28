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
    title: '工程化实践',
    type: 'page',
  },
  rules: {
    title: 'Cursor Rules',
    type: 'page',
  },
  skills: {
    title: 'Skills',
    type: 'page',
  },
  prompts: {
    title: '提示词',
    type: 'page',
    display: 'hidden',
  },
  blog: {
    title: 'Blog',
    type: 'page',
  },
} satisfies MetaRecord
