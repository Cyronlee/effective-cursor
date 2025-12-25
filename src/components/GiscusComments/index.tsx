'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

interface GiscusCommentsProps {
  lang: string
}

export function GiscusComments({ lang }: GiscusCommentsProps) {
  const { resolvedTheme } = useTheme()

  return (
    <div className="mt-8">
      <Giscus
        id="comments"
        repo="Cyronlee/effective-cursor"
        repoId="R_kgDOQriDNw"
        category="General"
        categoryId="DIC_kwDOQriDN84C0L-W"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang={lang === 'zh' ? 'zh-CN' : 'en'}
        loading="lazy"
      />
    </div>
  )
}

