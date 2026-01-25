import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative w-full z-50">
        {/* Top Announcement Bar */}
        <div className="bg-[#1080A0] text-[#F8FAFC]">
          <div className="container mx-auto px-6 py-2 max-w-[1400px]">
            <div className="text-center">
              <span className="text-[14px] font-semibold tracking-wide uppercase">
                Especialista en Dolor de Rodilla y Medicina Interna
              </span>
            </div>
          </div>
        </div>

      {/* Primary Navigation Bar */}
      <div className="sticky top-0 transition-all duration-300 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 py-4 max-w-[1400px]">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Section */}
            <a 
              href="/" 
              className="inline-flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0]"
              aria-label="Ir al inicio"
            >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaac0134-8ef3-46dc-8836-f4f2fd4b5e02-3000-76e90a9f-c843-4a5e-9175-34bb8d26a5c5-orchids-cloud/assets/images/wilmer-obregon-logo-DT1tnFmb-1-1-1.png"
                  alt="Logo del Dr. Willmer Obregón - Internista en Medellín"
                  width={205}
                  height={64}
                  className="h-14 md:h-16 w-auto object-contain"
                  priority
                />
            </a>

            {/* CTA Button Section */}
              <div className="flex items-center gap-3">
                <a 
                    href="https://api.whatsapp.com/send?phone=573053979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                  className="items-center justify-center gap-2 whitespace-nowrap rounded-[24px] text-[15px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-[#1080A0]/30 hover:scale-[1.02] active:scale-[0.98] h-[48px] px-6 py-2"
                >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;