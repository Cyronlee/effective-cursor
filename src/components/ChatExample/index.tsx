'use client'

import { cn } from '@/lib/utils'
import { AtSign, Globe, Image, ChevronDown, ArrowUp, FolderOpen } from 'lucide-react'

interface ChatExampleProps {
  children: string
  maxHeight?: number | string
  mode?: string
  model?: string
}

function parseContent(text: string) {
  const regex = /(@[\w\-./]+)/g
  const parts = text.split(regex)

  return parts.map((part, index) => {
    if (part.startsWith('@')) {
      const filename = part.slice(1)
      return (
        <span
          key={index}
          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-sm font-medium mx-0.5"
        >
          <FolderOpen className="w-3.5 h-3.5" />
          {filename}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

export function ChatExample({
  children,
  maxHeight,
  mode = 'Agent',
  model = 'claude-4.5-sonnet',
}: ChatExampleProps) {
  const lines = children.split('\n')

  return (
    <div className="rounded-xl bg-[#1e1e1e] border border-[#333] overflow-hidden font-sans not-prose my-4">
      <div
        className={cn(
          'p-4 text-[#d4d4d4] text-[15px] leading-relaxed whitespace-pre-wrap',
          maxHeight && 'overflow-y-auto'
        )}
        style={maxHeight ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight } : undefined}
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className={lineIndex > 0 ? 'mt-2' : ''}>
            {parseContent(line)}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-3 py-2 border-t border-[#333] bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[#999] hover:bg-[#333] transition-colors cursor-default"
            disabled
          >
            <span className="text-purple-400 font-semibold">∞</span>
            <span className="text-sm text-[#ccc]">{mode}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          <button
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[#999] hover:bg-[#333] transition-colors cursor-default"
            disabled
          >
            <span className="text-sm text-[#888]">{model}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="p-1.5 rounded-md text-[#666] hover:bg-[#333] transition-colors cursor-default"
            disabled
          >
            <AtSign className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 rounded-md text-[#666] hover:bg-[#333] transition-colors cursor-default"
            disabled
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 rounded-md text-[#666] hover:bg-[#333] transition-colors cursor-default"
            disabled
          >
            <Image className="w-4 h-4" />
          </button>
          <button
            className="ml-1 p-1.5 rounded-full bg-[#444] text-white cursor-default"
            disabled
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

