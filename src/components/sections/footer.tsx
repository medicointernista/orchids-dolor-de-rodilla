"use client";

import React from 'react';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronUp
} from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F8F9FA] pt-16 pb-8 border-t border-[#E2E8F0]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
            {/* Column 1: Professional Bio */}
            <div className="bg-white rounded-3xl p-8 shadow-medical border border-[#E2E8F0]">
              <h3 className="text-[1.125rem] font-bold text-[#1E293B] mb-4">Dr. Willmer Obregón</h3>
              <p className="text-base leading-relaxed text-[#64748B] mb-6">
                Especialista en Medicina Interna y tratamientos no quirúrgicos para el dolor de rodilla en Medellín. Con más de 15 años de experiencia, brindamos diagnósticos precisos y atención humana integral.
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/tu.internista.favorito/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8F9FA] border border-[#E2E8F0] text-[#1080A0] transition-all hover:bg-[#1080A0] hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/tu_internista_favorito/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8F9FA] border border-[#E2E8F0] text-[#1080A0] transition-all hover:bg-[#1080A0] hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@tuinternistafavorito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8F9FA] border border-[#E2E8F0] text-[#1080A0] transition-all hover:bg-[#1080A0] hover:text-white"
                  aria-label="Youtube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@tuinternistafavorito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8F9FA] border border-[#E2E8F0] text-[#1080A0] transition-all hover:bg-[#1080A0] hover:text-white"
                  aria-label="TikTok"
                >
                  <SiTiktok size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-medical border border-[#E2E8F0]">
              <h3 className="text-[1.125rem] font-bold text-[#1E293B] mb-6">Información de contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-[#1080A0]">
                    <MapPin size={20} />
                  </div>
                  <span className="text-base text-[#64748B]">
                    Biencrecer, Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia, 050030
                  </span>
                </li>
                    <li className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-[#1080A0]">
                          <Phone size={20} />
                        </div>
                        <a href="tel:+573053979628" className="text-base text-[#64748B] hover:text-[#1080A0] transition-colors">
                          +57 305 397 9628
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-[#1080A0]">
                          <Phone size={20} />
                        </div>
                        <a href="tel:+573011505174" className="text-base text-[#64748B] hover:text-[#1080A0] transition-colors">
                          +57 301 150 5174
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-[#1080A0]">
                          <Phone size={20} />
                        </div>
                        <a href="tel:+573009895852" className="text-base text-[#64748B] hover:text-[#1080A0] transition-colors">
                          +57 300 989 5852
                        </a>
                      </div>
                    </li>
                </ul>
              </div>

              {/* Column 3: Email & Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-medical border border-[#E2E8F0]">
                <h3 className="text-[1.125rem] font-bold text-[#1E293B] mb-6">Correo y horarios</h3>
                <div className="space-y-6">
                  <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <div className="text-[#1080A0]">
                          <Mail size={20} />
                        </div>
                          <a href="mailto:consulta@internistamedellin.com" className="text-base text-[#64748B] hover:text-[#1080A0] transition-colors">
                            consulta@internistamedellin.com
                          </a>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="text-[#1080A0]">
                          <Mail size={20} />
                        </div>
                          <a href="mailto:asistente@internistamedellin.com" className="text-base text-[#64748B] hover:text-[#1080A0] transition-colors">
                            asistente@internistamedellin.com
                          </a>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="text-[#1080A0]">
                          <Mail size={20} />
                        </div>
                          <a href="mailto:estudios@internistamedellin.com" className="text-base text-[#64748B] hover:text-[#1080A0] transition-colors">
                            estudios@internistamedellin.com
                          </a>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="text-[#1080A0]">
                          <Mail size={20} />
                        </div>
                          <a href="mailto:procedimientos@internistamedellin.com" className="text-base text-[#64748B] hover:text-[#1080A0] transition-colors">
                            procedimientos@internistamedellin.com
                          </a>
                      </li>
                  </ul>
              
              <div className="pt-4 border-t border-[#F1F5F9]">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#1080A0]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#1080A0] uppercase tracking-wider mb-2">Horario de Atención</span>
                    <p className="text-sm text-[#64748B]">
                      Lunes a viernes: 8:00 am - 5:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#E2E8F0] gap-6">
          <p className="text-[14px] text-[#64748B]">
            2026 <a href="https://localrank.com.co/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1080A0] transition-colors">LocalRank</a>. Todos los derechos reservados.
          </p>

            <div className="flex items-center">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaac0134-8ef3-46dc-8836-f4f2fd4b5e02-3000-76e90a9f-c843-4a5e-9175-34bb8d26a5c5-orchids-cloud/assets/images/wilmer-obregon-logo-DT1tnFmb-1-1-1.png" 
                alt="Logo del Dr. Willmer Obregón - Internista en Medellín" 
                width={160} 
                height={40} 
                className="h-10 w-auto opacity-70"
              />
            </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[14px] font-medium text-[#64748B] hover:text-[#1080A0] transition-colors group"
          >
            Volver arriba 
            <div className="p-1 rounded bg-[#E1F1F6] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-200">
              <ChevronUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
