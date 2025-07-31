import { GraduationCap, Package, Calendar, Truck } from 'lucide-react'

export default function FoodEcosystem() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Training',
      description:
        'Hands-on guidance to help your team sort food waste correctly.',
      background: '/training.jpg',
    },
    {
      icon: Package,
      title: 'Food Waste Buckets',
      description:
        'We provide sealed, odor-proof food waste buckets with clean bucket replacement every time we collect.',
      background: '/supplies.png',
    },

    {
      icon: Truck,
      title: 'Food Waste Collection',
      description: 'Guaranteed regular pickup schedule.',
      background: '/collection.png',
    },
    {
      icon: Calendar,
      title: 'Impact Report',
      description: 'Monthly transparent report to showcase your impact.',
      background: '/schedule.jpg',
    },
  ]

  return (
    <section className='py-20 px-4 bg-[#1F382B] text-white'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Our Circular Food Ecosystem Includes
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-white/20 bg-white'>
              {/* Gambar + Icon di atas */}
              <div
                className='relative h-60 flex items-center justify-center'
                style={{
                  backgroundImage: `url(${feature.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                {/* Icon di tengah gambar */}
                <div className='w-12 h-12 bg-[#3A5B42]/90 rounded-full flex items-center justify-center shadow-lg absolute top-2 left-2 border-white border'>
                  <feature.icon className='w-8 h-8 text-white' />
                </div>
              </div>

              {/* Konten Teks di bawah */}
              <div className='p-6 bg-white'>
                <h3 className='text-xl font-bold mb-2 text-[#1F382B]'>
                  {feature.title}
                </h3>
                <p className='text-[#1F382B] leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
