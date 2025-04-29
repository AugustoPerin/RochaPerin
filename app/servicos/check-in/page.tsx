"use client"

import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"

export default function CheckInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto max-w-5xl py-20 px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Check-in Automatizado para Eventos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              Simplifique o processo de check-in em seus eventos com nossa solução automatizada via WhatsApp, eliminando
              filas e melhorando a experiência dos participantes.
            </p>
            <Link
              href="/contato"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-medium inline-flex items-center transition-colors shadow-lg"
            >
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="white">
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agilize o acesso aos seus eventos</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nosso sistema de check-in automatizado via WhatsApp elimina a necessidade de equipamentos especiais,
                aplicativos adicionais ou longas filas na entrada do evento.
              </p>
              <p className="text-lg text-gray-700">
                Os participantes podem realizar o check-in diretamente pelo WhatsApp, recebendo seu comprovante digital
                e instruções personalizadas instantaneamente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-xl"
            >
              <img
                src="/modern-hotel-checkin.png"
                alt="Check-in automatizado via WhatsApp"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>

          {/* Benefits */}
          <UnifiedSectionTitle title="Benefícios do Check-in Automatizado" />
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eliminação de filas</h3>
              <p className="text-gray-700">
                Reduza drasticamente o tempo de espera na entrada do evento, proporcionando uma experiência mais
                agradável aos participantes.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sem equipamentos especiais</h3>
              <p className="text-gray-700">
                Não é necessário investir em leitores de QR code ou outros equipamentos. Tudo é feito através do
                WhatsApp.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dados em tempo real</h3>
              <p className="text-gray-700">
                Acompanhe em tempo real quantos participantes já realizaram check-in e obtenha insights valiosos sobre o
                evento.
              </p>
            </motion.div>
          </div>

          {/* How it Works */}
          <UnifiedSectionTitle title="Como Funciona" />
          <div className="bg-gray-50 p-8 rounded-xl mb-16 shadow-sm border border-gray-100">
            <ol className="space-y-6">
              <motion.li
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirmação de presença</h3>
                  <p className="text-gray-700">
                    O participante recebe uma mensagem no WhatsApp com instruções para confirmar sua presença no evento.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Check-in antecipado</h3>
                  <p className="text-gray-700">
                    O participante pode realizar o check-in antecipadamente, enviando uma confirmação pelo WhatsApp.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprovante digital</h3>
                  <p className="text-gray-700">
                    Após o check-in, o participante recebe um comprovante digital com QR code ou código de acesso.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Acesso ao evento</h3>
                  <p className="text-gray-700">
                    No dia do evento, basta apresentar o comprovante digital para ter acesso rápido e sem filas.
                  </p>
                </div>
              </motion.li>
            </ol>
          </div>

          {/* Use Cases */}
          <UnifiedSectionTitle title="Aplicações Ideais" />
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conferências e Congressos</h3>
              <p className="text-gray-700">
                Ideal para eventos de grande porte com muitos participantes, eliminando congestionamentos na entrada.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feiras e Exposições</h3>
              <p className="text-gray-700">
                Facilite o acesso de visitantes e expositores com um processo de check-in simplificado.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Workshops e Treinamentos</h3>
              <p className="text-gray-700">
                Otimize o tempo de seus treinamentos com um processo de entrada ágil e eficiente.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eventos Corporativos</h3>
              <p className="text-gray-700">
                Impressione seus clientes e parceiros com uma experiência moderna e tecnológica desde a entrada.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="bg-blue-50 p-8 rounded-xl text-center shadow-sm border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pronto para modernizar seus eventos?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como nossa solução de check-in automatizado pode
              transformar a experiência dos participantes em seus eventos.
            </p>
            <Link
              href="/contato"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-medium inline-flex items-center transition-colors shadow-lg"
            >
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
