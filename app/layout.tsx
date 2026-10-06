import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patudos Alegres | Banho, Tosa e Estética Animal em Joinville - SC",
  description:
    "Banho, tosa, estética animal, Táxi Dog e delivery de ração para seu pet em Joinville - SC.",
  applicationName: "Patudos Alegres",
  keywords: [
    "Patudos Alegres",
    "banho e tosa",
    "estética animal",
    "pet shop",
    "Joinville",
    "Táxi Dog",
    "delivery de ração"
  ],
  openGraph: {
    title: "Patudos Alegres | Banho, Tosa e Estética Animal em Joinville - SC",
    description:
      "Cuidado, carinho e dedicação em cada atendimento para seu pet em Joinville - SC.",
    type: "website",
    locale: "pt_BR",
    siteName: "Patudos Alegres"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
