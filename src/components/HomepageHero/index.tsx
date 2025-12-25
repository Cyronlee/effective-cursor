'use client'

import Link from 'next/link'
import { PanelParticles } from '@/components/PanelParticles'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useLocale } from '@/hooks'
import { cn } from '@/lib/utils'
import { Section } from './Section'

import { SetupHero } from './Setup'

// Category card component for the 4 main sections
const CategoryCard = ({
  title,
  description,
  icon,
  link,
  currentLocale,
}: {
  title: string
  description: string
  icon: string
  link: string
  currentLocale: string
}) => {
  const iconMap: Record<string, string> = {
    rocket: 'icon-[ph--rocket-launch-bold]',
    code: 'icon-[ph--code-bold]',
    stack: 'icon-[ph--stack-bold]',
    settings: 'icon-[ph--gear-six-bold]',
    workflow: 'icon-[ph--git-branch-bold]',
    sparkles: 'icon-[ph--sparkle-bold]',
  }

  return (
    <Link
      href={`/${currentLocale}${link}`}
      className={cn(
        'group relative flex flex-col p-6 rounded-2xl',
        'bg-white/50 dark:bg-zinc-900/50',
        'border border-zinc-200 dark:border-zinc-800',
        'hover:border-violet-400 dark:hover:border-violet-500',
        'hover:shadow-lg hover:shadow-violet-500/10',
        'transition-all duration-300',
        'backdrop-blur-sm',
      )}
    >
      <div className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
        'bg-gradient-to-br from-violet-500 to-purple-600',
        'group-hover:scale-110 transition-transform duration-300',
      )}
      >
        <span className={cn(iconMap[icon] || iconMap.rocket, 'text-2xl text-white')}></span>
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-violet-600 dark:text-violet-400 text-sm font-medium">
        <span className="group-hover:underline">
          {currentLocale === 'zh' ? '开始学习' : 'Start Learning'}
        </span>
        <span className="ml-1 transition-transform group-hover:translate-x-1 icon-[mingcute--arrow-right-line]"></span>
      </div>
    </Link>
  )
}

export default function HomepageHero() {
  const { t, currentLocale } = useLocale()

  const featureList = t('featureList')
  const faqs = t('faqs')
  const categories = t('categories')

  const processedFeatureList = featureList.map((item, index) => {
    const icons = [
      'icon-[ph--cursor-click-bold]',
      'icon-[ph--scales-bold]',
      'icon-[ph--stack-bold]',
      'icon-[ph--wrench-bold]',
      'icon-[ph--test-tube-bold]',
      'icon-[ph--file-code-bold]',
      'icon-[ph--lightbulb-bold]',
      'icon-[ph--list-checks-bold]',
      'icon-[ph--files-bold]',
    ]
    return {
      ...item,
      icon: <span className={icons[index] || icons[0]}></span>,
    }
  })

  return (
    <>
      <ScrollProgressBar />
      <PanelParticles />
      <SetupHero />

      <div className="relative z-1 pb-10 md:pb-[100px]">
        {/* 6 Main Categories Section */}
        <Section
          title={currentLocale === 'zh' ? '六大核心模块' : 'Six Core Modules'}
          description={currentLocale === 'zh'
            ? '从工具到流程的完整闭环'
            : 'A complete loop from tools to workflow'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl my-8 px-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                link={category.link}
                currentLocale={currentLocale}
              />
            ))}
          </div>
        </Section>

        {/* Features Section - 9 pages overview */}
        <Section
          title={currentLocale === 'zh' ? '内容概览' : 'Content Overview'}
          description={t('featuresDesc')}
        >
          <div className="flex justify-center w-full max-w-7xl">
            <HoverEffect items={processedFeatureList} />
          </div>
        </Section>

        {/* FAQ Section */}
        <Section
          title={currentLocale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
          tallPaddingY
        >
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-5xl"
          >
            {
              faqs.map((faqItem, index) => (
                <AccordionItem
                  value={faqItem.question}
                  key={index}
                >
                  <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                  <AccordionContent>
                    {faqItem.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </Section>
      </div>
    </>
  )
}
