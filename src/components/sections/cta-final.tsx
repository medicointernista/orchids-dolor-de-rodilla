import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';

export default function CtaFinal() {
  return (
    <section className="py-12 md:py-16 px-6 bg-[#F8F9FA]">
      <div className="container mx-auto max-w-[1280px]">
        {/* Banner Container: Medical Modern style with rounded-3xl and subtle shadow */}
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-white border border-[#E2E8F0] p-10 md:p-14 lg:p-20 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)]">
          
          {/* Decorative background elements (soft radial blur as per design system) */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#E1F1F6] blur-[120px] opacity-40"></div>
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-[#1080A0] blur-[150px] opacity-10"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content Area: Heading and subheading */}
            <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-semibold tracking-tight text-[#0F172A] leading-[1.1]">
                  ¿Buscas alivio para tu dolor de rodilla?
                </h2>
                
                {/* Availability Banner */}
                <div className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#FFFBEB] border border-amber-200 px-6 py-4">
                  <Calendar className="h-6 w-6 text-amber-600" />
                  <p className="text-[16px] font-bold text-[#92400E]">
                    ¡Solo quedan 3 citas disponibles esta semana!
                  </p>
                </div>


              </div>

                {/* Right Action Area: Dual CTAs */}
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                    <a
                      href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20para%20agendar%20una%20cita."
                      className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-[#1080A0] px-10 py-5 text-[16px] font-bold text-white shadow-[0_10px_15px_-3px_rgba(16,128,160,0.3)] transition-all hover:scale-[1.02] hover:bg-[#0D6E8A] active:scale-95"
                    >
                      <MessageSquare className="h-6 w-6 fill-current" />
                      ¡AGENDA TU ALIVIO HOY!
                    </a>

                    <a
                      href="tel:+573009895852"
                      className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-[#E1F1F6] px-10 py-5 text-[16px] font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
                    >
                      <Phone className="h-6 w-6" />
                      ¡LLAMA AHORA!
                    </a>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
