import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#CE3235",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Sawti Engenharia | Soluções Elétricas e Subestações",
  description: "Engenharia elétrica especializada em projetos de alta complexidade, redes de distribuição, subestações de energia e sistemas fotovoltaicos.",
  keywords: "engenharia elétrica, subestação de energia, redes de distribuição, energia solar, projetos elétricos, engenharia corporativa, Goiás, Brasília",
  openGraph: {
    title: "Sawti Engenharia | Soluções Elétricas Confiáveis",
    description: "Engenharia com ética e responsabilidade. Especialistas em obras e projetos elétricos de ponta a ponta.",
    url: "https://www.sawtiengenharia.com.br",
    siteName: "Sawti Engenharia",
    locale: "pt_BR",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SCK0F4GYMX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SCK0F4GYMX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#CE3235] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}