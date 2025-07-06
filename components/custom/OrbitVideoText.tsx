import OrbitingProcess from "../process";
import ZbioVideoText from "./ZbioVideoText";

export default function OrbitVideoText() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-white to-[#e6f1ec] dark:from-green-900 dark:to-[#3A5B42]">
      {/* Optional overlay SVG pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "url('/pattern-light.svg')", // optional texture/pattern
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div className="flex justify-center">
          <OrbitingProcess />
        </div>
        <div className="flex justify-center">
          <ZbioVideoText text="ZBIO SOLUTION" src="zbio.mp4" />
        </div>
      </div>
    </section>
  );
}
