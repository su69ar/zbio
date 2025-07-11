import { Shield, MapPin, Target, Users, Leaf, Megaphone } from "lucide-react"
import Image from "next/image";
import Testimonials from "./testimonials";

export default function Benefits() {
  const benefits = [
    {
      icon: "/icons/ICON1.svg",
      title: "Keeps your waste out of landfills",
    },
    {
      icon: "/icons/ICON2.svg",
      title: "Traces ingredients back to their regenerative source",
    },
    {
      icon: "/icons/ICON3.svg",
      title: "Enables you to meet ESG targets with real, verifiable data",
    },
    {
      icon: "/icons/ICON4.svg",
      title: "Supports local farmers and food security",
    },
    {
      icon: "/icons/ICON5.svg",
      title: "Reduce your greenhouse gas (carbon and methane) emissions",
    },
    {
      icon: "/icons/ICON6.svg",
      title: "Empower your brand with storytelling that drives awareness",
    },
  ];

  return (
    // <section id="benefits" className="py-16 px-4 bg-gradient-to-b from-white via-white to-[#1F382B] overflow-hidden">
    <section id="benefits" className="py-16 px-4 bg-white overflow-hidden">
      <div className="lg:container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F382B] mb-6">
            Along with ZBIO Hospitality Can Lead Change
          </h2>
          <div className="max-w-8xl mx-auto ">
            <p className="text-[16px] text-gray-700 leading-relaxed">
              The hospitality industry is uniquely positioned to transform today's waste challenges into opportunities
              for innovation and impact. By adopting circular practices, your property can move beyond traditional
              solutions like composting or pig farms—which, while helpful, often lack transparency, traceability, and
              environmental safeguards. ZBIO offers a fully integrated and verifiable circular solution that ensures not
              only waste diversion but also measurable environmental and operational benefits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={24}
                  height={24}
                  className="w-10 h-11"
                />
              </div>
                <p className="text-gray-800 font-medium leading-relaxed">{benefit.title}</p>
              </div>
            </div>
          ))}
        </div>
        <Testimonials />
      </div>
    </section>
  )
}
