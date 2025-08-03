'use client'
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import ZbioVideoText from '../custom/ZbioVideoText'
import OrbitingProcess from '../process'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      id='zbio-solution'
      className=' dark:bg-neutral-950 font-sans md:px-10 pt-[100px]'
      ref={containerRef}>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16'>
        <div className='max-w-7xl  px-4 md:px-8 lg:px-10'>
          <h2 className='text-5xl md:text-7xl font-bold text-[#1f382b]'>
            ZBIO SOLUTION
          </h2>
        </div>
        {/* <h2 className='text-lg md:text-4xl mb-[-80px] text-black dark:text-white max-w-4xl'>
          <ZbioVideoText text='ZBIO SOLUTION' />
        </h2> */}
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-10'>
          <p className='text-neutral-700 text-[16px] dark:text-neutral-300  max-w-xl'>
            A fully circular food waste management system designed for
            hospitality and F&B businesses — turning waste into a resource,
            enriching soil, and bringing nutrient-rich ingredients back to your
            table.
          </p>
        </div>
      </div>
      <div
        ref={ref}
        className='relative max-w-7xl mx-auto pb-1 mt-[-40px] lg:mt-[-140px] md:mt-[-140px]'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-10 md:pt-40 md:gap-10'>
            <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
              <div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-[#3A5B42] dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2' />
              </div>
              <h3 className='hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#3A5B42] dark:text-neutral-500 '>
                {item.title}
              </h3>
            </div>

            <div className='relative pl-20 pr-4 md:pl-4 w-full'>
              <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-[#3A5B42] dark:text-neutral-500'>
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '>
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#3A5B42] via-[#779952] to-green-600 from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  )
}
