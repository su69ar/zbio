'use client'
import { useEffect, useRef } from 'react'
import { Leaf, Recycle, PackageCheck, Salad } from 'lucide-react'
import { VideoText } from '@/components/magicui/video-text'
import Image from 'next/image'

const steps = [
  {
    title: 'Collect',
    icon: <Recycle className='w-6 h-6' />,
    step: 1,
    description: 'Your organic food waste.',
  },
  {
    title: 'Process',
    icon: <PackageCheck className='w-6 h-6' />,
    step: 2,
    description:
      'On-site or at our facility, transforming waste into highly nutritious fertilizer or animal feed.',
  },
  {
    title: 'Regenerate',
    icon: <Leaf className='w-6 h-6' />,
    step: 3,
    description: 'Local farmlands through sustainable agriculture.',
  },
  {
    title: 'Harvest',
    icon: <Salad className='w-6 h-6' />,
    step: 4,
    description:
      'Is delivered back to you as clean, traceable, nutrient-rich ingredients.',
  },
]

export default function OrbitingProcess() {
  const orbitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const orbit = orbitRef.current
      if (!orbit) return

      const time = Date.now() / 1000
      const radius = 120 // more spacing
      const centerX = orbit.clientWidth / 2
      const centerY = orbit.clientHeight / 2

      orbit.querySelectorAll('.orbit-item').forEach((el, index) => {
        const total = steps.length
        const angle = (time * 0.05 + index / total) * 2 * Math.PI // slower speed
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)

        const element = el as HTMLDivElement
        element.style.left = `${x}px`
        element.style.top = `${y}px`
      })
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className=' bg-transparent backdrop-blur-md overflow-hidden'>
      <div className='p-6 lg:p-10 md:p-10 text-center'>
        <div
          ref={orbitRef}
          className='relative w-[100vw] max-w-[300px] h-[400px] mx-auto sm:w-[350px] sm:h-[350px]'>
          {/* Center circle */}
          <div className='absolute top-1/2 left-1/2 w-24 h-24 bg-[#1F382B] rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-10 overflow-hidden'>
            <Image
              src='/ZBIO-white.png'
              alt='ZBIO Logo'
              width={60}
              height={60}
              className='object-contain'
            />
          </div>

          {/* Orbiting cards */}
          {steps.map((step, i) => (
            <div
              key={step.step}
              className='orbit-item absolute w-30 h-30 md:w-32 lg:w-32 md:h-32 lg:h-32 transform -translate-x-1/2 -translate-y-1/2 '
              style={{ transition: 'transform 0.3s ease' }}>
              <div className='bg-white shadow-lg rounded-full border w-32 h-32 border-[#1F382B] backdrop-blur-md p-2 flex flex-col items-center justify-center text-[#1F382B]'>
                <div className='w-10 h-10 flex items-center justify-center bg-[#1F382B] text-white rounded-full mb-2'>
                  {step.icon}
                </div>
                <div className='font-semibold text-[12px]'>
                  <span>{step.step}. </span>
                  {step.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
