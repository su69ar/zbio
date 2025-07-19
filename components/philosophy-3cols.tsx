import React from 'react'
import Image from 'next/image'
import { PinContainer } from '@/components/ui/3d-pin'
import { Animated3DPin } from './custom/my3DPin'
import { Recycle } from 'lucide-react'

export default function Philosophy3Cols() {
  return (
    <section id='about' className='text-black body-font bg-white dark:bg-black'>
      <div className='container px-4 md:px-8 py-12 mx-auto'>
        <div className='flex items-start w-[170px] content-center space-x-2 bg-white/20 backdrop-blur-sm border border-#1F382B rounded-full px-6 py-2 mb-8'>
          <Recycle className='w-5 h-5 text-[#1F382B]' />
          <span className='text-[#1F382B] font-medium'>About ZBIO</span>
        </div>
        {/* Top Divider Line */}
        <div className='mb-8'>
          <div className='h-1 bg-gray-200 rounded overflow-hidden'>
            <div className='w-24 h-full bg-[#3b5c42]' />
          </div>
        </div>

        {/* Two-Column Intro */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          <div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F382B] dark:text-white leading-snug'>
              ZBIO is a Complete Ecosystem that Transforms Your{' '}
              <span className='text-[#779952] font-bold'>Food Waste </span>
              Into{' '}
              <span className='text-[#779952] font-bold'>
                Regenerative Resources
              </span>
              .
            </h2>
          </div>
          <div className='text-base text-gray-700 dark:text-gray-300 leading-relaxed'>
            <p className='text-[16px]'>
              Through our closed-loop system, we convert waste into animal feed
              and organic fertilizer, which supports local farms that, in turn,
              grow fresh, organic produce that comes right back to your kitchen.
              It's waste that works — for your business, for Bali, and for the
              planet.
            </p>
          </div>
        </div>

        {/* 3 Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-0 mt-[-40px]'>
          <Animated3DPin
            title='Nature Doesn’t Waste'
            href='#zbio-solution'
            heading='Everything in nature has a purpose — nothing is left behind.'
            description='Nature creates no waste. Everything is reused, recycled, or repurposed in the cycle of life.'
            image='/nature-doesnt-waste.jpg'
          />
          <Animated3DPin
            title='Neither Should We'
            href='#zbio-solution'
            heading='Let’s turn waste into worth, just like nature does.'
            description='We should imitate nature by creating regenerative systems where waste becomes resource.'
            image='/neither.jpg'
          />
          <Animated3DPin
            title='Here’s How We Close the Loop'
            href='#zbio-solution'
            heading='Turning waste into opportunity, the ZBIO way'
            description='Discover how ZBIO is transforming waste into lasting value and creating real, measurable impact.'
            image='/close-the-loop.jpg'
          />
        </div>
      </div>
    </section>
  )
}
