import React from 'react';
import { 
  ShieldCheck, 
  Award,
  Sparkles,
  Heart,
  MessageCircle,
  Zap,
  Activity,
  Stethoscope
} from 'lucide-react';

const benefitsData = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "¡Di adiós al dolor de rodilla!",
    description: "Nuestro tratamiento no quirúrgico con ácido hialurónico es la solución que estabas buscando para recuperar tu movilidad."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "El secreto para una rodilla sin fricción",
    description: "El ácido hialurónico actúa como un lubricante y amortiguador natural, reduciendo el roce entre los huesos y aliviando el dolor."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Beneficios claros y rápidos",
    description: "Experimenta menos dolor y mejor movilidad, sin los riesgos y la recuperación prolongada de la cirugía."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Alternativa segura",
    description: "Un procedimiento ambulatorio, cómodo y rápido que te permite volver a tus actividades diarias sin grandes interrupciones."
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "¿Tienes osteoartritis?",
    description: "Este tratamiento es ideal para casos leves a moderados y para quienes sufren de dolor persistente que limita su vida."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Atención experta y personalizada",
    description: "El Dr. Willmer Obregón, con más de 15 años de experiencia, te ofrece un enfoque integral y un diagnóstico preciso"
  }
];

const Benefits = () => {
  return (
        <section 
          id="beneficios" 
          className="relative bg-white py-12 md:py-16 overflow-hidden"
        >
          {/* Decorative background element */}
          <div 
            className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#E1F1F6] rounded-full blur-[120px] opacity-30 pointer-events-none"
          ></div>

          <div className="container mx-auto px-6 max-w-[1280px]">
            <div className="max-w-3xl mb-10 md:mb-12">
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
            Beneficios del Tratamiento con Ácido Hialurónico
          </h2>
          <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B]">
            Ofrecemos un enfoque integral y profesional para mejorar tu calidad de vida y movilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start gap-4 p-6 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8F9FA]/50 transition-all duration-300 hover:border-[#1080A0] hover:bg-white hover:shadow-lg"
            >
              <div 
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300"
              >
                {benefit.icon}
              </div>
              <div className="mt-1">
                <h3 className="text-[1rem] font-bold leading-[1.4] text-[#1E293B] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[0.875rem] leading-[1.5] text-[#64748B]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
