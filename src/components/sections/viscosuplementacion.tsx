import React from 'react';
import { CheckCircle2, Info, Droplets, Heart, Stethoscope, Clock, Activity } from 'lucide-react';

const Viscosuplementacion = () => {
  const procedureSteps = [
    "Procedimiento ambulatorio realizado en consultorio",
    "Limpieza y desinfección del área de la rodilla",
    "Inyección precisa de ácido hialurónico con aguja fina",
    "Duración de pocos minutos sin necesidad de anestesia",
    "Recuperación inmediata con mínimo malestar"
  ];

  const benefits = [
    { icon: <Activity className="w-5 h-5" />, text: "Mejora la lubricación articular" },
    { icon: <Heart className="w-5 h-5" />, text: "Reduce el dolor y la inflamación" },
    { icon: <Clock className="w-5 h-5" />, text: "Recuperación rápida y sin cirugía" }
  ];

  return (
    <section className="relative bg-white py-12 md:py-20 lg:py-24 overflow-hidden" id="viscosuplementacion">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E1F1F6] rounded-full blur-[120px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1080A0]/10 rounded-full blur-[100px] opacity-30 pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative mx-auto max-w-[1280px] px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F1F6] px-4 py-2 text-sm font-medium text-[#1080A0] mb-6">
            <Droplets className="w-4 h-4" />
            Tratamiento No Quirúrgico
          </div>
          <h2 className="text-[1.875rem] md:text-[2.5rem] lg:text-[3rem] font-semibold tracking-tight text-[#0F172A] leading-[1.1] max-w-4xl mx-auto">
            Tratamiento con ácido hialurónico para artrosis de rodilla
          </h2>
          <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B] max-w-2xl mx-auto">
            Una solución avanzada y efectiva para recuperar tu movilidad sin cirugía
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: What and Why */}
          <div className="space-y-6">
            <div className="group rounded-[2rem] p-8 bg-[#F8F9FA]/50 border border-[#E2E8F0] transition-all duration-300 hover:bg-white hover:border-[#1080A0] hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300">
                  <Droplets className="w-7 h-7" />
                </div>
                <h3 className="text-[1.375rem] font-bold text-[#1E293B]">¿Qué es la viscosuplementación?</h3>
              </div>
              <p className="text-[1rem] leading-[1.7] text-[#64748B]">
                La viscosuplementación es un procedimiento que consiste en inyectar ácido hialurónico en las articulaciones de la rodilla para mejorar la lubricación y amortiguación natural. El ácido hialurónico es una sustancia que se encuentra naturalmente en el líquido sinovial y ayuda a mantener saludables las articulaciones.
              </p>
            </div>

            <div className="group rounded-[2rem] p-8 bg-[#F8F9FA]/50 border border-[#E2E8F0] transition-all duration-300 hover:bg-white hover:border-[#1080A0] hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-[1.375rem] font-bold text-[#1E293B]">¿Para qué sirve?</h3>
              </div>
              <p className="text-[1rem] leading-[1.7] text-[#64748B] mb-6">
                La osteoartritis es una enfermedad degenerativa que afecta principalmente a las rodillas, causando desgaste del cartílago, dolor, inflamación y rigidez. La viscosuplementación ayuda a aliviar estos síntomas y mejorar la movilidad.
              </p>

              {/* Benefits Pills */}
              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] text-sm text-[#1E293B] group-hover:border-[#1080A0]/30"
                  >
                    <span className="text-[#1080A0]">{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: How and Conclusion */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1080A0] to-[#0D6E8A] rounded-[2rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <h3 className="text-[1.5rem] font-bold">¿Cómo se realiza?</h3>
                </div>

                <ul className="space-y-4 mb-6">
                  {procedureSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                      <span className="text-[1rem] leading-[1.6]">{step}</span>
                    </li>
                  ))}
                </ul>

                {/* Info box inside */}
                <div className="mt-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <p className="text-sm leading-relaxed">
                    <strong className="font-semibold">Importante:</strong> El procedimiento es rápido, seguro y permite retomar actividades diarias de inmediato.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] p-8 bg-[#FFFBEB] border-2 border-[#FDE68A]">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600 text-white">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[1.125rem] font-bold text-[#92400E] mb-2">Recomendación médica</h3>
                  <p className="text-[0.938rem] leading-[1.6] text-[#78350F]">
                    La viscosuplementación es una alternativa efectiva y segura para aliviar síntomas de artrosis de rodilla en pacientes seleccionados. Se recomienda realizar una valoración médica personalizada para determinar si este tratamiento es el adecuado para ti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viscosuplementacion;
