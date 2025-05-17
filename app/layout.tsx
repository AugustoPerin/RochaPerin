import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RochaPerin - Automação de Processos e Chatbots Empresariais",
  description:
    "Especialistas em automação de processos, análise de dados, migração para nuvem e chatbots empresariais.",
  generator: "v0.dev",
  icons: {
    icon: "/rochaperin-Logo-Favicon.ico",
    apple: "/rochaperin-Logo-Favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-B8T2H41CJL" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
