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
  // introduction: {
  //   type: 'page',
  //   theme: {
  //     copyPage: false,
  //     navbar: true,
  //     toc: false,
  //   },
  // },
  docs: {
    title: '使用手册',
    type: 'page',
  },
  rules: {
    title: 'Cursor Rules',
    type: 'page',
  },
  prompts: {
    title: '提示词',
    type: 'page',
  },
  // upgrade: {
  //   title: (
  //     <span className="flex items-center leading-[1]">
  //       新变化
  //       <TitleBadge />
  //     </span>
  //   ),
  //   type: 'page',
  // },
} satisfies MetaRecord
