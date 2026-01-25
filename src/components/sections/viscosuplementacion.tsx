import React from 'react';
import { CheckCircle2, Info, Activity, Stethoscope, Droplets, Heart } from 'lucide-react';

const Viscosuplementacion = () => {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24" id="viscosuplementacion">
      <div className="container mx-auto max-w-[1280px] px-6">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold tracking-tight text-[#0F172A] mb-8">
            Tratamiento con ácido hialurónico para artrosis de rodilla
          </h2>
          <div className="w-24 h-1.5 bg-[#1080A0] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: What and Why */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-[#E1F1F6] text-[#1080A0]">
                  <Droplets className="w-8 h-8" />
                </div>
                <h3 className="text-[1.5rem] font-bold text-[#1E293B]">¿Qué es la viscosuplementación?</h3>
              </div>
              <p className="text-[1.125rem] leading-relaxed text-[#64748B]">
                La viscosuplementación es un procedimiento que consiste en inyectar ácido hialurónico en las articulaciones de la rodilla para mejorar la lubricación y amortiguación natural. El ácido hialurónico es una sustancia que se encuentra naturalmente en el líquido sinovial y ayuda a mantener saludables las articulaciones.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-[#E1F1F6] text-[#1080A0]">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-[1.5rem] font-bold text-[#1E293B]">¿Para qué sirve?</h3>
              </div>
              <p className="text-[1.125rem] leading-relaxed text-[#64748B]">
                La osteoartritis es una enfermedad degenerativa que afecta principalmente a las rodillas, causando desgaste del cartílago, dolor, inflamación y rigidez. La viscosuplementación ayuda a aliviar estos síntomas y mejorar la movilidad.
              </p>
            </div>
          </div>

          {/* Right Column: How and Conclusion */}
          <div className="space-y-8">
            <div className="bg-[#1080A0] rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-white/20 text-white">
                    <Stethoscope className="w-8 h-8" />
                  </div>
                  <h3 className="text-[1.5rem] font-bold">¿Cómo se realiza?</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Procedimiento ambulatorio realizado en consultorio.",
                    "Se limpia y desinfecta la piel alrededor de la rodilla.",
                    "Se inyecta ácido hialurónico en la articulación con una aguja fina.",
                    "Dura pocos minutos y generalmente no requiere anestesia.",
                    "Puede producir un leve malestar posterior que desaparece rápidamente."
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                      <span className="text-[1.125rem]">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#1080A0] border-dashed">
                <div className="flex items-center gap-4 mb-4">
                  <Info className="w-6 h-6 text-[#1080A0]" />
                  <h3 className="text-[1.25rem] font-bold text-[#1E293B]">Conclusión</h3>
                </div>
              <p className="text-[1.125rem] leading-relaxed text-[#64748B]">
                La viscosuplementación es una alternativa efectiva y segura para aliviar síntomas de artrosis de rodilla en pacientes seleccionados. Se recomienda realizar una valoración médica para determinar si este tratamiento es adecuado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viscosuplementacion;
