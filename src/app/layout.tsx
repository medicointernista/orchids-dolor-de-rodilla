import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drwillmerobregon.com'),
  title: "Internista en Medellín | Dr. Willmer Obregón - Tratamiento de Rodilla",
  description: "Médico Internista en Medellín especializado en viscosuplementación de rodilla con ácido hialurónico. Tratamiento no quirúrgico para osteoartritis. Agenda tu cita hoy mismo.",
  keywords: "internista medellín, tratamiento rodilla medellín, viscosuplementación, ácido hialurónico, osteoartritis, dolor de rodilla, médico internista, dr willmer obregón",
  robots: "index, follow",
  authors: [{ name: "Dr. Willmer Obregón" }],
  openGraph: {
    title: "Dr. Willmer Obregón - Internista Especialista en Rodilla | Medellín",
    description: "Tratamiento no quirúrgico para dolor de rodilla con ácido hialurónico. Más de 15 años de experiencia en Medellín.",
    url: "https://www.drwillmerobregon.com",
    siteName: "Dr. Willmer Obregón - Internista",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/Favicon_willmer_obregon.png",
        width: 1200,
        height: 630,
        alt: "Dr. Willmer Obregón - Internista en Medellín"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Willmer Obregón - Internista Especialista en Rodilla",
    description: "Tratamiento no quirúrgico para dolor de rodilla con ácido hialurónico en Medellín",
    images: ["/Favicon_willmer_obregon.png"]
  },
  icons: {
    icon: [
      { url: "/Favicon_willmer_obregon.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon_willmer_obregon.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/Favicon_willmer_obregon.png",
  },
  alternates: {
    canonical: "https://www.drwillmerobregon.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTRKGD87');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Willmer Obregón",
              "image": "/Favicon_willmer_obregon.png",
              "description": "Médico Internista especializado en tratamiento de rodilla con viscosuplementación y ácido hialurónico",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "telephone": "+573011505174",
              "medicalSpecialty": ["Internal Medicine", "Knee Treatment", "Viscosupplementation"],
              "priceRange": "$$",
              "url": "https://www.drwillmerobregon.com"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTRKGD87"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="aaac0134-8ef3-46dc-8836-f4f2fd4b5e02"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
