import type { Metadata } from "next";
import "./globals.css";
import { font_body } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Curriculo Xyz",
  description:
    "Transforme suas candidaturas com nossa ferramenta de personalização de currículos impulsionada por IA. Personalize seu currículo de forma simples para se adequar às descrições de vagas, destaque suas habilidades e aumente suas chances de conquistar entrevistas. Ideal para candidatos que desejam se destacar em um mercado de trabalho competitivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font_body.className}>{children}</body>
    </html>
  );
}
