import React from 'react';
import Image from 'next/image';
import { Sparkles, Calendar, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
        <section 
          id="inicio" 
          className="relative overflow-hidden bg-[#F8F9FA]"
        >
          {/* Background Decorative Elements */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#1080A0] blur-[120px] opacity-10"></div>
            <div className="absolute top-1/2 left-1/4 h-80 w-80 rounded-full bg-[#E1F1F6] blur-[100px] opacity-30"></div>
          </div>

          <div className="container relative mx-auto px-6 py-12 md:py-20 lg:py-24 max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Content Column */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1E293B] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-700">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F1F6] text-[#1080A0]">
                <Sparkles className="w-4 h-4" />
              </span>
              Atención personalizada y empática en Medellín
            </div>

                {/* Title */}
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl lg:text-[3.75rem] leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-1000">
                  Recupera Tu Movimiento: <span className="text-[#1080A0]">Solución Sin Cirugía</span> para Dolor de Rodilla
                </h1>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#64748B] md:text-lg animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-100">
                    ¡Di adiós al dolor de rodilla! Nuestro <strong className="font-semibold text-[#1E293B]">tratamiento no quirúrgico con ácido hialurónico</strong> es la solución que estabas buscando para recuperar tu movilidad, sin los riesgos y la recuperación prolongada de la cirugía.
                  </p>

                {/* Availability Banner */}
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#FFFBEB] border border-amber-200 px-5 py-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <p className="text-[14px] font-bold text-[#92400E]">
                    ¡Solo quedan 3 citas disponibles esta semana!
                  </p>
                </div>

                {/* CTAs */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <a
                      href="https://api.whatsapp.com/send?phone=573053979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20para%20agendar%20una%20cita."
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-4 text-[15px] font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95"
                    >
                      ¡LLAMA AHORA!
                    </a>
                    <a
                      href="tel:+573011505174"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-4 text-[15px] font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
                    >
                      <PhoneCall className="w-[18px] h-[18px]" />
                      ¡LLAMA AHORA!
                    </a>
                  </div>

            {/* Stats/Badge Row */}
            <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-9 duration-1000 delay-300">
              <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#64748B]">Citas en</dt>
                <dd className="mt-1 text-[13px] font-semibold text-[#1E293B]">1–2 días</dd>
              </div>
              <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#64748B]">Informe</dt>
                <dd className="mt-1 text-[13px] font-semibold text-[#1E293B]">Personalizado</dd>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white bg-white/80 p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#64748B]">Experiencia</dt>
                <dd className="mt-1 text-[13px] font-semibold text-[#1E293B]">+15 años</dd>
              </div>
            </dl>
          </div>

          {/* Image Column */}
          <div className="relative z-0 group animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Soft Glow Under Image */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#1080A0] opacity-10 blur-[50px] animate-pulse"></div>
            
            <figure className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative h-[400px] w-full md:h-[550px]">
                      <Image
                        alt="Tratamiento de infiltración de rodilla con ácido hialurónico - Procedimiento no quirúrgico"
                        fill
                        className="object-cover"
                        src="/infiltracion-rodilla.jpg"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
              </div>
              
                {/* Glassmorphism Caption */}
                <figcaption className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/75 p-6 shadow-lg backdrop-blur-xl border border-white/20">
                    <p className="text-lg font-semibold text-[#1E293B]">Dr. Willmer Obregón</p>
                    <p className="mt-1 text-xs font-medium text-[#1080A0] uppercase tracking-wider">
                      Medicina Interna y Especialista en Rodilla
                    </p>
                  </div>
                </figcaption>
            </figure>

            {/* Smaller floating circle for texture */}
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#E1F1F6] opacity-60 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;