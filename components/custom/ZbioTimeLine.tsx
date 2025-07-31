import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { ProcessCardHover } from './ProcessCardHover'

export function ZbioTimeline() {
  const data = [
    {
      title: 'Collect',
      content: (
        <div>
          <p className='mb-8 text-[16px] font-semibold text-[#3A5B42] md:text-2xl dark:text-neutral-200'>
            We collect your organic food waste.
          </p>
          <p className='mb-8 text-[16px] font-normal text-neutral-800  dark:text-neutral-200'>
            ZBIO collects organic food waste directly from your restaurant,
            hotel, or kitchen. Our logistics system ensures timely, clean, and
            efficient waste retrieval with minimal disruption to your
            operations.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='/timeline/organic-waste-collect.jpg'
                alt='Organic waste collection'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='/zbio_collection.jpeg'
                alt='ZBIO collection process'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Process',
      content: (
        <div>
          <p className='mb-8 text-[16px] font-semibold text-[#3A5B42] md:text-2xl dark:text-neutral-200'>
            On-site or at our facility, transforming waste into highly
            nutritious fertilizer or animal feed.
          </p>
          <p className='mb-8 text-[16px] font-normal text-neutral-800  dark:text-neutral-200'>
            Your food waste is processed either on-site, at ZBio’s facility, or
            at our plasma sites. Through natural decomposition and innovative
            bioconversion, we transform your food waste into high quality animal
            feed and organic fertilizer.
          </p>
          <ProcessCardHover />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='/timeline/process_1.png'
                alt='Organic waste collection'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='/timeline/process_2.png'
                alt='ZBIO collection process'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Regenerate',
      content: (
        <div>
          <p className='mb-8 text-[16px] font-semibold text-[#3A5B42] md:text-2xl dark:text-neutral-200'>
            Local farmlands through sustainable agriculture that generate social
            impact.
          </p>
          <p className='mb-4 text-[16px] font-normal text-neutral-800  dark:text-neutral-200'>
            We channel these outputs back to local farmers. The compost restores
            soil health, reduces reliance on chemical fertilizers, and supports
            sustainable agriculture that nurtures both the environment and local
            communities.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='bali-farmers3.jpg'
                alt='Organic waste collection'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='bali-farmers4.webp'
                alt='ZBIO collection process'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Harvest',
      content: (
        <div>
          <p className='mb-8 text-[16px] font-semibold text-[#3A5B42] md:text-2xl dark:text-neutral-200'>
            Is delivered back to you as traceable food ingredients.
          </p>
          <p className='mb-4 text-[16px] font-normal text-neutral-800 dark:text-neutral-200'>
            In return, farmers produce clean, traceable, nutrient-rich crops and
            ingredients — delivered straight back to our partners in the
            hospitality sector, completing the circular loop.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='/timeline/harvest_1.webp'
                alt='Organic waste collection'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='aspect-square overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'>
              <img
                src='/timeline/harvest_2.jpg'
                alt='ZBIO collection process'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className='relative w-full overflow-clip'>
      <Timeline data={data} />
    </div>
  )
}
