import React from 'react';
import { 
  CheckCircle2, 
  Stethoscope, 
  Target, 
  Heart, 
  Users, 
  GraduationCap, 
  Award 
} from 'lucide-react';

const expertiseItems = [
  "Tratamiento para dolor de rodilla",
  "Infiltración de ácido hialurónico",
  "Medicina interna especializada",
  "Osteoartritis leve a moderada",
  "Diagnóstico con tecnología avanzada",
  "Enfoque integral (físico y emocional)"
];

const pillars = [
  {
    title: "Atención personalizada",
    description: "Cada paciente recibe un trato empático enfocado en sus necesidades únicas.",
    icon: Stethoscope
  },
  {
    title: "Diagnósticos precisos",
    description: "Utilizamos tecnología de vanguardia para asegurar la exactitud en cada diagnóstico.",
    icon: Target
  },
  {
    title: "Enfoque integral",
    description: "Consideramos aspectos físicos y emocionales para una recuperación completa.",
    icon: Heart
  },
  {
    title: "Seguimiento continuo",
    description: "Mantenemos un acompañamiento constante vía WhatsApp para tu tranquilidad.",
    icon: Users
  }
];

const ExperienceSection = () => {
  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20 lg:py-24" id="experiencia">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Trayectoria */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#E2E8F0] relative overflow-hidden">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#1080A0] mb-6 block">
              TRAYECTORIA MÉDICA
            </span>
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-8">
              Más de 15 años brindando bienestar en Medellín
            </h2>
            <p className="text-[1rem] leading-[1.6] text-[#64748B] mb-8">
              El Dr. Willmer Obregón es especialista en <strong className="text-[#1E293B]">Medicina Interna</strong> con amplia experiencia en tratamientos no quirúrgicos para el <strong className="text-[#1E293B]">dolor de rodilla</strong> y un compromiso inquebrantable con la ética profesional.
            </p>

            <div className="space-y-8">
                <div>
                  <h3 className="text-[1rem] font-bold text-[#1E293B] mb-4">Experto en:</h3>
                  <div className="flex flex-wrap gap-3">
                  {expertiseItems.map((item, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-[14px] text-[#1E293B] shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#1080A0]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="rounded-2xl bg-white p-5 border border-[#E2E8F0] flex items-center gap-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0] shadow-sm border border-[#E2E8F0]">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[1.125rem] font-bold text-[#1E293B] leading-none">+15 años</p>
                    <p className="text-[10px] uppercase tracking-wider text-[#64748B] mt-1">DE EXPERIENCIA</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-5 border border-[#E2E8F0] flex items-center gap-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0] shadow-sm border border-[#E2E8F0]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#64748B]">ESPECIALIZACIÓN EN:</p>
                    <p className="text-[13px] font-semibold text-[#1E293B] leading-tight">Medicina Interna y Rodilla</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Atención Médica Integral */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-6">
                Enfoque Médico Integral y Humano
              </h2>
              <p className="text-[1rem] leading-[1.6] text-[#64748B]">
                Nuestra prioridad es tu calidad de vida. Combinamos tecnología de punta con una atención ética para ofrecerte diagnósticos precisos y tratamientos efectivos que te devuelvan la movilidad y la tranquilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="group bg-[#F8F9FA] rounded-2xl p-6 border border-[#E2E8F0] transition-all duration-300 hover:shadow-lg hover:border-[#1080A0]/20 hover:bg-white"
                >
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#E1F1F6] text-[#1080A0] mb-4 group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#1E293B] mb-2">{pillar.title}</h3>
                    <p className="text-[13px] leading-relaxed text-[#64748B]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1080A0] rounded-2xl p-8 border border-white/20 shadow-lg mt-4 text-white">
                <h3 className="text-[15px] font-bold mb-4 uppercase tracking-wider text-white">
                  Compromiso Ético Profesional
                </h3>
                <p className="text-[14px] leading-relaxed">
                  Cada tratamiento, desde la medicina interna hasta la infiltración de rodilla, se realiza bajo estrictos estándares éticos, asegurando un seguimiento continuo y personalizado para cada paciente a través de canales directos como WhatsApp.
                </p>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
