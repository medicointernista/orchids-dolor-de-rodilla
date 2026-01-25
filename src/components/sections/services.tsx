import React from 'react';
import Image from 'next/image';

const servicesData = [
    {
      title: "Tratamiento de Hombro",
      description: "Infiltración para aliviar el dolor y mejorar la movilidad. Utilizamos ácido hialurónico, que actúa como lubricante natural, disminuyendo la inflamación y facilitando el movimiento articular.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/aaac0134-8ef3-46dc-8836-f4f2fd4b5e02/Tratamiento-de-Hombro-1769357697537.jpg?width=8000&height=8000&resize=contain",
      whatsappLink: "https://api.whatsapp.com/send?phone=573053979628&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20Tratamiento%20de%20Hombro."
    },
      {
        title: "Infiltración para Rodillas",
        description: "Tratamiento no quirúrgico con ácido hialurónico que actúa como lubricante natural, reduciendo la fricción y el dolor al caminar.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/aaac0134-8ef3-46dc-8836-f4f2fd4b5e02/Tratamiento-de-Rodilla-1769358004016.jpg?width=8000&height=8000&resize=contain",
        whatsappLink: "https://api.whatsapp.com/send?phone=573053979628&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20Infiltraci%C3%B3n%20para%20Rodillas."
      }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-[#F8F9FA] py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header Content */}
        <div className="mb-10 md:mb-14 text-center lg:text-left">
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] max-w-2xl">
            Servicios Médicos Ofrecidos
          </h2>
          <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B] max-w-3xl">
            Ofrecemos soluciones avanzadas en tratamientos de hombro y rodilla, utilizando tecnología de punta para garantizar resultados efectivos y mejorar tu calidad de vida en Medellín.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group flex flex-col bg-white rounded-[2rem] border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:shadow-medical hover:border-[#1080A0]/30"
            >
                {/* Image Container */}
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} en Medellín - Dr. Willmer Obregón`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-[1.5rem] font-bold text-[#1E293B] mb-4 group-hover:text-[#1080A0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[1rem] leading-[1.6] text-[#64748B] mb-8 flex-grow">
                  {service.description}
                </p>
                
                <a
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[1rem] font-bold text-[#1080A0] hover:text-[#0D6E8A] transition-colors duration-200"
                >
                  Consultar por WhatsApp
                  <svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
