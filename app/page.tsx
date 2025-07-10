import Header from "@/components/header"
import Hero from "@/components/hero"
import Philosophy from "@/components/philosophy"
import Process from "@/components/process"
import Statistics from "@/components/statistics"
import Solution from "@/components/solution"
import FoodEcosystem from "@/components/FoodEcosystem"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
// import Footer from "@/components/footer"
import { Orbiting } from "@/components/custom/orbiting"
import AboutZbioText from "@/components/AboutZbioText"
import Philosophy3Cols from "@/components/philosophy-3cols"
import { Animated3DPin } from "@/components/custom/my3DPin"
import { ZbioTimeline } from "@/components/custom/ZbioTimeLine"
import OrbitVideoText from "@/components/custom/OrbitVideoText"
import Footer2 from "@/components/footer2"
import { ProcessCarousel } from "@/components/custom/ProcessCarousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Header />
      <Hero />

      {/* <AboutZbioText /> */}
      <Philosophy3Cols  />
      {/* <Orbiting /> */}
      <Statistics />
      {/* <Process /> */}
      {/* <Solution /> */}
      <ZbioTimeline />
      <OrbitVideoText />
      <FoodEcosystem />
      <Benefits />
      {/* <Testimonials /> */}
      <CTA />
      <Footer2 />
    </div>
  )
}
