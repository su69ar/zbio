import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react'

export default function Footer2() {
  const icon = [
    { id: 1, icon: Instagram, link: 'https://www.instagram.com/zbio.asia/' },
    { id: 2, icon: Linkedin, link: 'https://www.linkedin.com/company/z.bio/' },
  ]
  return (
    <footer className='bg-[#1F382B] text-white py-12 px-4 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Left: Logo & Title */}
          <div className='flex flex-col md:flex-row items-center md:items-center gap-4'>
            <a href='/' className='flex-shrink-0'>
              <img
                src='/ZBIO-white.png'
                alt='ZBIO Logo'
                className='h-20 w-auto mx-auto md:mx-0'
              />
            </a>
            <h2 className='text-2xl md:text-3xl font-bold text-white text-center md:text-left'>
              Bali's First Circular Food Ecosystem
            </h2>
          </div>

          {/* Right: Description & Socials */}
          <div className='text-center md:text-left'>
            {/* <p className='text-gray-300 leading-relaxed mb-6 text-sm md:text-base'>
              Transforming Bali's food waste into regenerative resources through
              our complete circular ecosystem. From waste to worth, for your
              business, for Bali, and for the planet.
            </p> */}
            <div className='flex justify-center md:justify-end space-x-4'>
              {icon.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer'>
                  <item.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className='border-t border-white/20 mt-12 pt-8 text-center text-gray-300 space-y-2 w-full text-sm'>
          <p>
            &copy; {new Date().getFullYear()} ZBIO. All rights reserved.
            Building a sustainable future for Bali.
          </p>

          <p className='flex items-center justify-center gap-1 text-xs text-gray-400'>
            Made with
            <Heart className='w-4 h-4 text-red-500 inline' />
            by{' '}
            <a
              href='https://wa.me/6281339138188'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-white transition'>
              dotdev.asia
            </a>
            - Part of Bali Micro Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
