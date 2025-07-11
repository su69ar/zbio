import React from 'react';

interface LogoItem {
  name: string;
  imageUrl: string;
}

interface SectionLogosProps {
  title: string;
  logos: LogoItem[];
}

const SectionLogos: React.FC<SectionLogosProps> = ({ title, logos }) => {
  return (
    <section className="py-8">
      {/* Judul section */}
      <h2 className="text-3xl font-bold mb-6 text-[#1F382B] text-center lg:text-left">{title}</h2>

      {/* Kontainer logo dalam grid */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 place-items-center">
        {logos.map((logo) => (
          <div key={logo.name} className="w-32 flex justify-center">
            <img
              src={logo.imageUrl}
              alt={logo.name}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionLogos;